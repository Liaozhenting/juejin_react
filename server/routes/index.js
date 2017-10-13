
var express = require('express');
var router = express.Router();
let index = require('../controller/index.js')

/** js
 * @apiDefine CODE_0
 * @apiSuccess (成功响应) {number} code 0
 * @apiSuccess (成功响应) {json} [data='""'] 如果有数据返回
 * @apiSuccess (成功响应) {string} mgs success
 * @apiSuccessExample {json} Response sucess Example
{
  "code": 0,
  "data": ""，
  "msg":"success"
}
 */

/**
 * @apiDefine CODE_1
 * @apiSuccess (失败响应) {number} code 1
 * @apiSuccess (失败响应) {string} [message] error description
 * @apiSuccessExample {json} Response err Example
{
  "code": 1
  "message": "错误原因"
}
 */

/**
 * @apiDefine Data
 *
 * @apiParam (data) {string} [firstname]  Optional Firstname of the User.
 * @apiParam (data) {string} lastname     Mandatory Lastname.
 * @apiParam (data) {string} country="cn" Mandatory with default value "DE".
 * @apiParam (data) {number} [age=18]     Optional Age with default 18.
 */

/**
 * @api {GET} /listBlog 列出全部博客
 * @apiName test api
 * @apiGroup index page
 * @apiVersion 1.0.0
 * @apiDescription 列出全部博客,普通用户
 * @apiSampleRequest http://localhost:8091/listBlog
 * @apiParam {number} [index=0] any num
  @apiParamExample {json} Request Example   
  GET /listBlog
  {
    "index":3
  }

 * @apiUse CODE_0
 * @apiUse CODE_1
  */


router.get('/', function(req,res){
  res.send('okkkk')
});

router.get('/listBlog', index.listBlog);

module.exports = router;

// var express = require('express');
// var router = express.Router();

// let projects = require('../controller/projects.js')
// let issues = require('../controller/issues.js')
// let issueItem = require('../controller/issue-item.js')

// router.get('/', projects.listProjects);
// router.post('/', projects.addOneProject);
// router.patch('/:project_id', projects.updateOneProject);
// router.delete('/:project_id', projects.deleteOneProject);
// router.get('/oneProject/:project_id', projects.listOneProject);

// router.get('/:project_id', issues.listIssues)
// router.post('/:project_id', issues.addOneIssue);
// router.patch('/project/:issue_id', issues.updateOneIssue);
// router.delete('/project/:issue_id', issues.deleteOneIssue);
// router.get('/oneIssue/:issue_id', issues.listOneIssue);

// router.get('/issues/:issue_id', issueItem.listIssueItem)
// router.post('/issues/:issue_id', issueItem.addOneIssueItem);
// router.patch('/issues/:issue_id/:issue_item_id', issueItem.updateOneIssueItem);
// router.delete('/issues/:issue_id/:issue_item_id', issueItem.deleteOneIssueItem);

// module.exports = router;