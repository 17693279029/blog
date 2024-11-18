const mongoose = require('mongoose')
const {body, validationResult} = require('express-validator');
const {ToolsModel} = require('@models/v1')
const tokenAuthentication = require('@middlewares/tokenAuthentication')
const apiResponse = require('@utils/utils.apiResponse')
const {checkApiPermission} = require("@middlewares/authMiddleware");
const {actionRecords} = require("@middlewares/actionLogMiddleware");
/**
* 权限：
* 'blog:tools:list'
* 'blog:tools:create'
* 'blog:tools:update'
* 'blog:tools:delete'
*/

/**
* 获取工具测试列表
* @param {Object} req - 请求对象，包含查询参数
*  -query: {
*   params: {}, 查询参数 (object)
*       pagination: {
*           current: 1, 当前页码 (number)
*           pageSize: 10,页面大小 (number)
*       },
*       sort: {
*           columnKey: "createdAt",
*           order: "ascend"
*        }
*   },
* @param {Object} res - 响应对象
* @returns {Object} - 包含工具测试列表及分页信息的响应对象
*/
exports.toolslist = [
    tokenAuthentication,
    checkApiPermission('blog:tools:list'),
    actionRecords({module: '工具测试/查询'}),
    async (req, res, next) => {
    try {
        let query = req.body;
        // 如果 query.params 为空，则设置一个空对象作为默认值
        let params = query.params || {};
        let current = Number(query.pagination?.current || 1) || 1;
        let pageSize = Number(query.pagination?.pageSize||15) || 15;
        // 修改排序参数
        let sortColumn = query.sort?.columnKey || 'createdAt'; // 默认排序字段为 'id'
        let sortOrder = query.sort?.order === 'ascend' ? 1 : -1; // 根据排序顺序确定排序方式 1 升序 -1降序（descend：大-小）
        // 对 params 的每个属性值进行模糊匹配
        let fuzzyParams = {};
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                fuzzyParams[key] = { $regex: new RegExp(params[key], 'i') };
            }
        }

        let aggregationPipeline = [
            // 使用提供的查询参数进行文档筛选
            {$match: fuzzyParams},
            {$sort: {[sortColumn]: sortOrder}},
            {$skip: (current - 1) * pageSize},
            {$limit: pageSize}
        ];

        let [result, total] = await Promise.all([
            // 执行聚合查询获取结果数据
            ToolsModel.aggregate(aggregationPipeline),
            // 计算满足查询条件的文档总数
            ToolsModel.countDocuments(query.params)
        ]);

        return apiResponse.successResponseWithData(res, "Success.", result.length > 0 ? {
            result,
            current,
            pageSize,
            total
        } : {result: [], total});
    } catch (err) {
        next(err);
        }
    }
]

/**
* 创建工具测试
* @param {Object} req - 请求对象，包含查询参数
*    - params: 包含当前页码、页面大小和查询参数
* @returns {object} 200 - 成功响应
* @returns {object} 400 - 参数验证错误
* @returns {Error} default - 未知错误
* @security JWT - 需要提供有效的访问令牌
*/
exports.toolsCreate = [
    tokenAuthentication,
    checkApiPermission('blog:tools:create'),
    actionRecords({module: '工具测试/创建'}),
    [
    
        
            body("title").notEmpty().withMessage('工具名称不能为空.'),
        
    
        
            body("icon").notEmpty().withMessage('工具图标不能为空.'),
        
    
        
            body("abstract").notEmpty().withMessage('工具简介不能为空.'),
        
    
        
            body("category").notEmpty().withMessage('类型不能为空.'),
        
    
        
            body("tag").notEmpty().withMessage('标签不能为空.'),
        
    
        
            body("url").notEmpty().withMessage('工具地址不能为空.'),
        
    
        
            body("blank1").notEmpty().withMessage('预留1不能为空.'),
        
    
        
            body("blank2").notEmpty().withMessage('预留2不能为空.'),
        
    
        
            body("blank3").notEmpty().withMessage('预留3不能为空.'),
        
    
        
            body("blank4").notEmpty().withMessage('预留4不能为空.'),
        
    
        
            body("blank5").notEmpty().withMessage('预留5不能为空.'),
        
    
        
            body("status").notEmpty().withMessage('状态不能为空.'),
        
    
        
    
        
    
        
    
    ],
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return apiResponse.validationErrorWithData(res, "参数错误.", errors.array()[0].msg);
            }
            const newTools = {
                ...req.body
            };
            await ToolsModel.create(newTools);
            return apiResponse.successResponseWithData(res, "添加工具测试成功.", newTools);
        } catch (err) {
        next(err);
        }
    }
];

/**
* 删除工具测试
* @group 工具测试管理 - 工具测试相关
* @param {Object} req - 请求对象，包含查询参数
*    - params: 包含当前页码、页面大小和查询参数
*      - _id: 工具测试ID (string)
* @returns {object} 200 - 成功响应
* @returns {object} 400 - 参数验证错误
* @returns {Error} default - 未知错误
* @security JWT - 需要提供有效的访问令牌
*/
exports.toolsDelete = [
    tokenAuthentication,
    checkApiPermission('blog:tools:delete'),
    actionRecords({module: '工具测试/删除'}),
    async (req, res, next) => {
        const {_id} = req.body;
        // 验证给定的id是否符合有效的 ObjectId 格式
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return apiResponse.validationErrorWithData(res, "参数错误.", "参数id格式错误");
        }
        try {
            const tools = await ToolsModel.findByIdAndDelete(_id);
            if (!tools) {
                return apiResponse.notFoundResponse(res, '该工具测试不存在或已被删除');
            }
            return apiResponse.successResponse(res, '删除工具测试成功');
    } catch (err) {
        next(err);
    }
    }
];

/**
* 更新工具测试信息
* @param {string} _id.body.required - 工具测试ID
*/
exports.toolsUpdate = [
    tokenAuthentication,
    checkApiPermission('blog:tools:update'),
    actionRecords({module: '工具测试/更新'}),
    async (req, res, next) => {
        const {_id} = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return apiResponse.validationErrorWithData(res, "参数错误.", "无效的工具测试 ID");
        }
        try {
            const toolsInfo = await ToolsModel.findById(_id);
            if (!toolsInfo) {
                return apiResponse.notFoundResponse(res, "该工具测试不存在");
            }
            // 更新工具测试数据.
            const updateData = {...req.body};

            // 使用 { new: true } 选项使 findByIdAndUpdate 返回更新后的工具测试对象。
            const updatedTools = await ToolsModel.findByIdAndUpdate(_id, updateData, {new: true});
            if (!updatedTools) {
                return apiResponse.ErrorResponse(res, "工具测试更新失败");
            }

            return apiResponse.successResponse(res, "工具测试更新成功.");
        } catch (err) {
            next(err);
        }
    }
];
