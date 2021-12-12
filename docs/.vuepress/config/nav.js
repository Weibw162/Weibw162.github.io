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
                link:'/pages/53241b/'
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
                text:'MySQL面试题',
                link:'/pages/5aa29a/'
              }
            ]
          },
          {
            text:'Redis'
          }
        ]
      },
      {
        text:'算法',
        link:'/algorithm/'
      }
    ]