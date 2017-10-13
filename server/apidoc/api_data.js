define({ "api": [
  {
    "type": "GET",
    "url": "/listBlog",
    "title": "列出全部博客",
    "name": "test_api",
    "group": "index_page",
    "version": "1.0.0",
    "description": "<p>列出全部博客,普通用户</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8091/listBlog"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "index",
            "defaultValue": "0",
            "description": "<p>any num</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example   ",
          "content": "GET /listBlog\n{\n  \"index\":3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/index.js",
    "groupTitle": "index_page",
    "success": {
      "fields": {
        "成功响应": [
          {
            "group": "成功响应",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>0</p>"
          },
          {
            "group": "成功响应",
            "type": "json",
            "optional": true,
            "field": "data",
            "defaultValue": "\"\"",
            "description": "<p>如果有数据返回</p>"
          },
          {
            "group": "成功响应",
            "type": "string",
            "optional": false,
            "field": "mgs",
            "description": "<p>success</p>"
          }
        ],
        "失败响应": [
          {
            "group": "失败响应",
            "type": "number",
            "optional": false,
            "field": "code",
            "description": "<p>1</p>"
          },
          {
            "group": "失败响应",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p>error description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response sucess Example",
          "content": "{\n  \"code\": 0,\n  \"data\": \"\"，\n  \"msg\":\"success\"\n}",
          "type": "json"
        },
        {
          "title": "Response err Example",
          "content": "{\n  \"code\": 1\n  \"message\": \"错误原因\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
