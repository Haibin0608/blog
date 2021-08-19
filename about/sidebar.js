const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "HTML",
    collapsable: true,
    children: [
      { title: "互联网基本原理", path: "/about/notes/html/互联网基本原理" },
      { title: "基本标签", path: "/about/notes/html/基本标签" },
      { title: "表单元素", path: "/about/notes/html/表单" },
    ],
  },
  {
    title: "CSS",
    collapsable: true,
    children: [
      {
        title: "01-CSS基本样式和选择器",
        path: "/about/notes/css/03-CSS基本样式和选择器",
      },
      { title: "02-CSS盒模型", path: "/about/notes/css/04-盒模型" },
      { title: "03-行内盒模型", path: "/about/notes/css/05-行内盒模型" },
      { title: "04-显示样式", path: "/about/notes/css/06-显示样式" },
      { title: "05-背景样式", path: "/about/notes/css/07-背景样式" },
      { title: "06-圆角渐变", path: "/about/notes/css/08-圆角渐变" },
      { title: "07-浮动", path: "/about/notes/css/09-浮动" },
      { title: "08-定位", path: "/about/notes/css/10-定位" },
      {
        title: "09-css样式书写顺序和命名规范",
        path: "/about/notes/css/css样式书写顺序和命名规范",
      },

      {
        title: "11-高级选择器和伪元素",
        path: "/about/notes/css/13-高级选择器和伪元素",
      },
      { title: "12-动画样式", path: "/about/notes/css/14-动画样式" },
      { title: "13-transform", path: "/about/notes/css/15-transform" },
      
      { title: "14-弹性盒模型", path: "/about/notes/css/17-弹性盒模型" },
      {
        title: "15-阿里图标 组件化 swiper",
        path: "/about/notes/css/18-阿里图标 组件化 swiper",
      },
      { title: "16-响应式", path: "/about/notes/css/19-响应式" },
      { title: "less", path: "/about/notes/css/less" },
    ],
  },

  {
    title: "Javascipt",
    collapsable: true,
    children: [
      { title: "01-认识javaScript", path: "/about/notes/js/01-认识javaScript" },
      {
        title: "02-变量与数据类型介绍",
        path: "/about/notes/js/02-变量与数据类型介绍",
      },
      { title: "03-基础dom操作", path: "/about/notes/js/03-基础dom操作" },
      { title: "04-表达式和操作符", path: "/about/notes/js/04-表达式和操作符" },
      { title: "05-判断", path: "/about/notes/js/05-判断" },
      { title: "06-循环", path: "/about/notes/js/06-循环" },
      { title: "07-算法拓展", path: "/about/notes/js/07-算法拓展" },
      { title: "08-函数", path: "/about/notes/js/08-函数" },
      {
        title: "09-作用域,闭包,预解析",
        path: "/about/notes/js/09-作用域,闭包,预解析",
      },
      { title: "10-数组", path: "/about/notes/js/10-数组" },
      { title: "11-字符串", path: "/about/notes/js/11-字符串" },
      { title: "12-类型转换", path: "/about/notes/js/12-类型转换" },
      { title: "13-DOM进阶", path: "/about/notes/js/13-DOM进阶" },
      { title: "14-dom事件与机制", path: "/about/notes/js/14-dom事件与机制" },
      { title: "15-bom", path: "/about/notes/js/15-bom" },
      { title: "16-面向对象", path: "/about/notes/js/16-面向对象" },
      {
        title: "17-内置数学和时间对象",
        path: "/about/notes/js/17-内置数学和时间对象",
      },
      {
        title: "18-各种距离宽高获取",
        path: "/about/notes/js/18-各种距离宽高获取",
      },
      { title: "19-正则表达式", path: "/about/notes/js/19-正则表达式" },
      { title: "20箭头函数", path: "/about/notes/js/21-箭头函数" },
      { title: "21-解构赋值", path: "/about/notes/js/22-解构赋值" },
      {
        title: "22-对象字面量增强和函数默认参数",
        path: "/about/notes/js/23-对象字面量增强和函数默认参数",
      },
      
      {
        title: "24-Set 和 Map数据结构和Symbol",
        path: "/about/notes/js/25-Set 和 Map数据结构和Symbol",
      },
      {
        title: "25-遍历器和for-of循环",
        path: "/about/notes/js/26-遍历器和for-of循环",
      },
      { title: "26-Promise", path: "/about/notes/js/27-Promise" },
      { title: "27-Clsss类", path: "/about/notes/js/28-Clsss类" },
      { title: "28-module模块", path: "/about/notes/js/29-module模块" },
      { title: "29-Babel", path: "/about/notes/js/30-Babel" },
      {
        title: "30-前后端通信和HTTP协议",
        path: "/about/notes/js/31-前后端通信和HTTP协议",
      },
      { title: "31-本地存储", path: "/about/notes/js/32-本地存储" },
      { title: "32-ajax", path: "/about/notes/js/33-ajax" },
    ],
  }

  
];
