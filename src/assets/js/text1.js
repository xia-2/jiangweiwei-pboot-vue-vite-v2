// 将文本封装成方便使用的对象

let arr = [
  '便捷的模板标签',
  '采用高效、简洁的模板标签，只要懂HTML即可快速开发网站',
  '自主研发的内核框架',
  '系统采用自主研发的高速多层框架及缓存技术，代码整齐规范，便于二次开发',
  '便捷的数据库类型',
  '系统默认采用Sqlite轻型数据库，放入空间即可直接使用，同时支持MySQL等数据库',
  '响应式管理后台',
  '采用基于LayUI的响应式管理后台，满足各类设备随时管理的需要',
  '小程序、APP等程序对接',
  '系统提供大量HTTP接口，支持小程序、APP、Ajax等方式数据调用',
  '自定义内容模型及字段',
  '支持自定义内容模型及字段，实现自主增添不同模型的内容字段',
  '多语言区域建站',
  '系统支持多语言多区域建站并支持绑定域名，支持配置不同模板、基础信息及内容',
  '不限量自定义表单',
  '系统支持不限量自定义表单、自定义留言板，满足各类数据提交的需要',
  '多条件筛选及搜索',
  '系统支持多条件筛选及搜索功能，并且使用方式极其简单',
  '伪静态及前端动态缓存',
  '支持全站伪静态及前端动态缓存，自主配置缓存时间，方便快捷',
  '后台在线升级',
  '系统支持后台跨版本在线升级，无需单独操作数据库及FTP，免去升级烦恼',
  '独立手机版或自适应',
  '支持独立手机版建站或自适应手机版建站，满足个性化需要',
  '支持自定义URL',
  '通过配置系统地址路由及自定义文件名，可以满足各类个性化SEO的需要',
  '支持首页分页',
  '系统支持首页分页功能，满足建立博客等类型系统的需要',
  '留言发送到邮箱',
  '系统支持留言信息发送到多个邮箱的，有留言第一时间知晓',
  '支持N组幻灯片',
  '系统支持N组幻灯片，配合栏目大图可以满足各类应用场景调用的需要',
  '自定义标签',
  '系统支持自定义内容标签，可将一些模板内容后台化，方便后期修改',
  '支持会员功能',
  '系统支持会员注册登陆、文章评论、权限浏览等',
  '支持在线商城',
  '系统支持商品下单购买及支付、满足小商城建设的需要（暂未开发）',
  '支持公众号管理',
  '系统支持公众号内容、菜单、粉丝等管理的功能（暂未开发）',
];

var ans = [];
var text = 'banner';

for (let i = 0; i < arr.length / 2; i++) {
  ans.push({
    pic: './images/banner/' + text + i + '.png',
    text: arr[i * 2],
    detail: arr[i * 2 + 1],
  });
}

console.log(ans);