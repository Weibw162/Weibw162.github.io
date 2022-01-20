// 导航栏
module.exports = [
      { text: '首页', link: '/' },
      {
        text:'前端',
        link:'/front/',
        items:[
          {
            text:'HTML',
            link:'/pages/089974/'
          }
        ]
      },
      {
        text:'后端',
        link:'/backend/',
        items:[
          {
            text:'Python',
            items:[
              {
                text:'Python基础知识',
                link:'/python/base/'
              },
              {
                text:'Python CookBook第三版',
                link:'/python/cookbook3/'
              },
              {
                text:'Flask',
                link:'/python/flask/'
              }
            ]
          }
        ]
      },
      {
        text:'数据库',
        link:'/database/',
        items:[
          {
            text:'MySQL',
            items:[
              {
                text:'MySQL基础知识',
                link:'/pages/96d563/'
              },
              {
                text:'MySQL调优',
                link:'/mysql/mysqlty/'
              },
              {
                text:'MySQL面试题',
                link:'/pages/5aa29a/'
              }
            ]
          }
        ]
      },
      {
        text:'算法',
        link:'/algorithm/'
      },
      {
        text:'其他技术',
        link:'/other/',
        items:[
          {
            text:'Git',
            link:'/study/git/'
          },
        ]
      },
      {
        text:'更多',
        link:'/more/',
        items:[
          {
            text:'微信公众号文章',
            link:'/pages/b6414a/'
          },
          {
            text:'优秀博客文章',
            link:'/pages/e444e7/'
          },
          {
            text:'其他',
            link:'/pages/030cd4/'
          }
        ]
      },
      {
        text:'收藏夹',
        link:'/pages/55120e/'
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ]