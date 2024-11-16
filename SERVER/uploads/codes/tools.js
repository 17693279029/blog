/**
*@author ZY
*@date 2024/11/16 16:16:14
*@Description:工具测试相关的接口
*/

const express = require('express');
const router = express.Router();

const ToolsController = require('@controllers/v1/blog/ToolsController')


/****************************************************************************/

/**
* 获取工具测试列表

* @route POST /v1/blog/tools/list

* @group 工具测试管理 - 工具测试相关
*/

router.post('/list', ToolsController.toolslist);

/**
* 创建工具测试

* @route POST /v1/blog/tools/create

* @group 工具测试管理 - 工具测试相关
* @returns {object} 200 - 成功响应
*/

router.post('/create', ToolsController.toolsCreate);


/**
* 删除工具测试

* @route POST /v1/blog/tools/delete

* @group 工具测试管理 - 工具测试相关
* @param {string} _id.required - 工具测试_ID且唯一
* @returns {object} 200 - 成功响应
*/
router.post('/delete', ToolsController.toolsDelete);

/**
* 更新工具测试信息

* @route POST /v1/blog/tools/update

* @group 工具测试管理 - 工具测试相关
*/
router.post('/update', ToolsController.toolsUpdate);

module.exports = router;
