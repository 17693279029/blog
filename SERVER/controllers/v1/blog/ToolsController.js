const mongoose = require('mongoose')
const { body, validationResult } = require('express-validator');
const { ToolsModel } = require('@models/v1')
const tokenAuthentication = require('@middlewares/tokenAuthentication')
const apiResponse = require('@utils/utils.apiResponse')
const { checkApiPermission } = require("@middlewares/authMiddleware");
const { actionRecords } = require("@middlewares/actionLogMiddleware");
/**
 * 权限：
 * 'blog:Tools:list'
 * 'blog:Tools:create'
 * 'blog:Tools:update'
 * 'blog:Tools:delete'
 */

/**
 * 获取小工具列表
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
 * @returns {Object} - 包含小工具列表及分页信息的响应对象
 */
exports.toolslist = [
    tokenAuthentication,
    checkApiPermission('blog:tools:list'),
    // actionRecords({module: '小工具/查询'}),
    async (req, res, next) => {
        try {
            let query = req.body;
            // 如果 query.params 为空，则设置一个空对象作为默认值
            let params = query.params || {};
            let current = Number(query.pagination?.current || 1) || 1;
            let pageSize = Number(query.pagination?.pageSize || 15) || 15;
            // 修改排序参数
            let sortColumn = query.sort?.columnKey || 'createdAt'; // 默认排序字段为 'id'
            let sortOrder = query.sort?.order === 'ascend' ? 1 : -1; // 根据排序顺序确定排序方式 1 升序 -1降序（descend：大-小）
            // 对 params 的每个属性值进行模糊匹配
            let fuzzyParams = {};
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    if (params[key]) {
                        fuzzyParams[key] = { $regex: new RegExp(params[key], 'i') };
                    } else {
                        delete fuzzyParams[key]; //删除空属性
                    }
                }
            }

            let aggregationPipeline = [
                // 使用提供的查询参数进行文档筛选
                { $match: fuzzyParams },
                { $sort: { [sortColumn]: sortOrder } },
                { $skip: (current - 1) * pageSize },
                { $limit: pageSize }
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
            } : { result: [], total });
        } catch (err) {
            next(err);
        }
    }
]

/**
 * 创建小工具
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
    actionRecords({ module: '小工具/创建' }),
    [
        body("title").notEmpty().withMessage('作品名称不能为空.'),
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
            return apiResponse.successResponseWithData(res, "添加小工具成功.", newTools);
        } catch (err) {
            next(err);
        }
    }
];

/**
 * 删除小工具
 * @group 小工具管理 - 小工具相关
 * @param {Object} req - 请求对象，包含查询参数
 *    - params: 包含当前页码、页面大小和查询参数
 *      - _id: 小工具ID (string)
 * @returns {object} 200 - 成功响应
 * @returns {object} 400 - 参数验证错误
 * @returns {Error} default - 未知错误
 * @security JWT - 需要提供有效的访问令牌
 */
exports.toolsDelete = [
    tokenAuthentication,
    checkApiPermission('blog:tools:delete'),
    actionRecords({ module: '小工具/删除' }),
    async (req, res, next) => {
        const { _id } = req.body;
        // 验证给定的id是否符合有效的 ObjectId 格式
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return apiResponse.validationErrorWithData(res, "参数错误.", "参数id格式错误");
        }
        try {
            const tools = await ToolsModel.findByIdAndDelete(_id);
            if (!tools) {
                return apiResponse.notFoundResponse(res, '该小工具不存在或已被删除');
            }
            return apiResponse.successResponse(res, '删除小工具成功');
        } catch (err) {
            next(err);
        }
    }
];

/**
 * 更新小工具信息
 * @param {string} _id.body.required - 小工具ID
 */
exports.toolsUpdate = [
    tokenAuthentication,
    checkApiPermission('blog:tools:update'),
    actionRecords({ module: '小工具/更新' }),
    async (req, res, next) => {
        const { _id } = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return apiResponse.validationErrorWithData(res, "参数错误.", "无效的小工具 ID");
        }
        try {
            const toolsInfo = await ToolsModel.findById(_id);
            if (!toolsInfo) {
                return apiResponse.notFoundResponse(res, "该小工具不存在");
            }
            // 更新小工具数据.
            const updateData = { ...req.body };

            // 使用 { new: true } 选项使 findByIdAndUpdate 返回更新后的小工具对象。
            const updatedTools = await ToolsModel.findByIdAndUpdate(_id, updateData, { new: true });
            if (!updatedTools) {
                return apiResponse.ErrorResponse(res, "小工具更新失败");
            }

            return apiResponse.successResponse(res, "小工具更新成功.");
        } catch (err) {
            next(err);
        }
    }
];



exports.toolsClientlist = [
    actionRecords({ module: '前台/小工具' }),
    async (req, res, next) => {
        try {
            let query = req.body;
            // 如果 query.params 为空，则设置一个空对象作为默认值
            let params = query.params || {};
            let current = Number(query.pagination?.current || 1) || 1;
            let pageSize = Number(query.pagination?.pageSize || 15) || 15;
            // 修改排序参数
            let sortColumn = query.sort?.columnKey || 'createdAt'; // 默认排序字段为 'id'
            let sortOrder = query.sort?.order === 'ascend' ? 1 : -1; // 根据排序顺序确定排序方式 1 升序 -1降序（descend：大-小）
            // 对 params 的每个属性值进行模糊匹配
            let fuzzyParams = {};
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    if (params[key]) {
                        fuzzyParams[key] = { $regex: new RegExp(params[key], 'i') };
                    } else {
                        delete fuzzyParams[key]; //删除空属性
                    }
                }
            }

            let aggregationPipeline = [
                // 使用提供的查询参数进行文档筛选
                { $match: fuzzyParams },
                { $sort: { [sortColumn]: sortOrder } },
                { $skip: (current - 1) * pageSize },
                { $limit: pageSize }
            ];

            // 添加筛选条件 状态为true的才可在前台展示
            params.recommended && (fuzzyParams.recommended = params.recommended);
            fuzzyParams.status = true;

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
            } : { result: [], total });
        } catch (err) {
            next(err);
        }
    }
]
