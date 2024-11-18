/**
*@author ZY
*@date 2023/8/6 下午10:16:02
*@Description:小工具相关的接口
*/

const express = require('express');
const router = express.Router();

const ToolsController = require('@controllers/v1/blog/ToolsController')


/****************************************************************************/

/**
* 获取小工具列表
* @route POST /v1/blog/tools/list
* @group 小工具管理 - 小工具相关
*/

router.post('/list', ToolsController.toolslist);

/**
* 创建小工具
* @route POST /v1/blog/tools/create
* @group 小工具管理 - 小工具相关
* @returns {object} 200 - 成功响应
*/

router.post('/create', ToolsController.toolsCreate);


/**
* 删除小工具
* @route POST /v1/blog/tools/delete
* @group 小工具管理 - 小工具相关
* @param {string} _id.required - 小工具_ID且唯一
* @returns {object} 200 - 成功响应
*/
router.post('/delete', ToolsController.toolsDelete);

/**
* 更新小工具信息
* @route POST /v1/blog/tools/update
* @group 小工具管理 - 小工具相关
*/
router.post('/update', ToolsController.toolsUpdate);

/********************前台客户端*****************************/
/**
 * 获取小工具列表
 * @route POST /v1/blog/tools/client/list
 * @group 小工具管理 - 小工具相关
 */

router.post('/client/list', ToolsController.toolsClientlist);

module.exports = router;
