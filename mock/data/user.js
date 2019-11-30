'use strict';
module.exports = {

  'topicList.json': {
    response: function (req, res) {
      return {
        "data|8-11": [
          "@cword(4, 6)"
        ]
      }
    }
  },

  'authorList.json': {
    response: function (req, res) {
      return {
        "users|5": [
          {
            "id": "@string('number',6)",
            "slug": "ef4f2422125f",
            "nickname": "@cname",
            "avatar_source": "@image('100x100','#50B347', '#FFF', 'Mock.js')",
            "total_likes_count": "@string('number',6)",
            "total_wordage": "@string('number',7)",
            "is_following_user": "@boolean()"
          },
        ]
      }
    }
  },


  'articleList.json': {
    response: function (req, res) {
      return {
        "data|4-6": [
          {
            "id|+1": 1,
            "title": "@ctitle(18,20)",
            "describe": "@cparagraph()",
            "imgUrl": "@image('360x240', '#894FC4', '#FFF', 'png', '!')",
            "profit|1-100.1": 1,
            "author": "@cname",
            "rev|10-100": 1,
            "love|100-1000": 1,
          },
        ]
      }
    }
  },

  'headerList.json': {
    response: function (req, res) {
      return {
        "success": true,
        "data|40": [
          "@cword(2,4)"
        ]
      }
    }
  },


  'detailData.json': {
    response: function (req, res) {
      return [
        {
          "title": "@ctitle(20)",
          "imgUrl": "//upload-images.jianshu.io/upload_images/1545827-00b82f46d7e651de?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp",
          "content": "@cparagraph(20,50)"
        }
      ]
    }
  },



  'login.json': {
    response: function (req, res) {
      return [1]
    }
  },


};