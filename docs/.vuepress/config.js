const htmlModules = require('./config/htmlModules.js');
const { readFileList, readTotalFileWords, readEachFileWords } = require('./webSiteInfo/readFile');

module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Weibw's World",
  description: '这一生波澜壮阔或是不惊都没问题',
  // base: '/', // 默认'/'。如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）



  markdown: {
    lineNumbers: true // 代码行号
},
  // 主题配置
  themeConfig: {
    // 导航配置
    nav: require('./config/nav'),
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'weibw162/weibw162.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 30, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    bodyBgImg:'https://cdn.jsdelivr.net/gh/Weibw162/image-hosting@dev/杂录/伊蕾雅.5vklmk9v83o0.webp',


    sidebar: 'structuring',
    indexImg: {
      navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体颜色，1 是黑色，2 是白色。默认是 1
    },

    // 博客站点信息（首页）
blogInfo: {
	blogCreate: '2021-12-01', // 博客创建时间
	mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。温馨提示：readFileList() 获取 docs 下所有的 md 文档
	totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
	eachFileWords: readEachFileWords(),  // 开启每个文章页的字数。readEachFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数，无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
	moutedEvent: '.blogger-wrapper',   // 首页的站点模块挂载在某个元素后面（支持各种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示 '.categories-wrapper' 在文章分类下面。'.blogger-wrapper' 在博客头像模块下面
	pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
  indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......，测试 3 秒后最稳
  pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ...... 测试 3 秒后最稳
},


    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    author: {
      name: 'weibw', // 必需
      link: 'https://github.com/weibw162', // 可选的
    },

    // 博主信息，显示在首页侧边栏
    blogger: {
      avatar: 'https://cdn.jsdelivr.net/gh/Weibw162/image-hosting@dev/杂录/image.735febsv1zo0.webp',
      name: 'Weibw',
      slogan: '一个没有梦想的咸鱼',
    },

    social: {
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:weibw162@163.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/weibw162',
        },
      ],
    },

    footer: { // 页脚信息
      createYear: 2021, // 博客创建年份
      copyrightInfo: '| Weibw | <a href="https://beian.miit.gov.cn/" target="_blank" style="font-weight:normal">辽ICP备18015889号</a> ', // 博客版权信息，支持a标签
    },

  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_wawne43ztng.css' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Python,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#646cff' }], // 移动浏览器主题颜色
    // 引入自定义js
    ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}],
  ],


  // 插件配置
  plugins: [

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
    'fulltext-search'
  ],
}
