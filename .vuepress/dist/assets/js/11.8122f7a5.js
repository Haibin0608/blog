(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{374:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"行内盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内盒模型"}},[t._v("#")]),t._v(" 行内盒模型")]),t._v(" "),a("blockquote",[a("p",[t._v("特点")]),t._v(" "),a("blockquote",[a("p",[t._v("行内元素不支持设置宽度和高度")]),t._v(" "),a("p",[t._v("行内元素可以设置padding.但是垂直方向的padding不会影响布局")]),t._v(" "),a("p",[t._v("行内元素可以设置boder,垂直方向的border不会影响布局")]),t._v(" "),a("p",[t._v("行内元素可以设置margin,垂直方向的margin不会影响布局")])])]),t._v(" "),a("h2",{attrs:{id:"字体属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体属性"}},[t._v("#")]),t._v(" 字体属性")]),t._v(" "),a("h3",{attrs:{id:"字体大小-font-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体大小-font-size"}},[t._v("#")]),t._v(" 字体大小(font-size)")]),t._v(" "),a("blockquote",[a("p",[t._v("font-size实际上设置的是"),a("strong",[t._v("字体的高度")]),t._v(", 原因很简单为了保证CSS的视觉效果,")]),t._v(" "),a("p",[t._v("单位:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("px像素单位是相对于显示器屏幕分辨率而言的。几乎所有游览器的font-size默认大小都是16像素,除非用户去修改偏好设置")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("em单位")]),t._v("是相对元素的字体大小进行计算, 相对em会继承父级元素的字体大小。")])])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*24px*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这会产生一个问题")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n<div>\n\tdiv1\n\t<p>p1</p>\n</div>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*我们可以使用百分比来代替em.  150%和1.5em在这里是没有什么区别的，这取决于个人偏好.*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("此时p元素的font-size会变成1.5em*1.5em约等于2.25em或36px")]),t._v(" "),a("p",[t._v("我们希望这个单位是一个固定的。就可以使用rem")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("rem的单位")]),t._v("（root elemnet 根元素）是相对于根元素"),a("html",[t._v("l的字体大小设置")])])]),t._v(" "),a("p",[t._v("如果html元素没有设置font-size则默认1rem=16px.")]),t._v(" "),a("h3",{attrs:{id:"颜色-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色-color"}},[t._v("#")]),t._v(" 颜色(color)")]),t._v(" "),a("blockquote",[a("p",[t._v("color 用来设置文字颜色")]),t._v(" "),a("p",[t._v("默认情况下文本渲染为黑色.链接除外(它的颜色是活力蓝)")])]),t._v(" "),a("p",[a("strong",[t._v("font-size大小选择")])]),t._v(" "),a("blockquote",[a("p",[t._v("没有硬性要求，首先要保证字体足够大，而且人眼看着足够舒服即可.")])]),t._v(" "),a("h3",{attrs:{id:"字体族-font-family"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体族-font-family"}},[t._v("#")]),t._v(" 字体族(font-family)")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("字体族是什么")]),t._v("一个备选字体的列表,优先级由左往右")]),t._v(" "),a("p",[t._v("这种后备机制是font-family属性的重要特性,因为不同的操作系统和移动设备都可能安装了不同的字体")]),t._v(" "),a("p",[t._v("​\t\t\t\t可选值")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\tserif  衬线字体")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\tsanserif  非衬线字体")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\tmonospace 等宽字体")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\t\t\t\t\t\t---指定字体的类别，游览器会自动使用该类别下的字体")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t多个字体间使用，隔开，字体生效时优先使用第一个，第一个无法使用则使\t\t\t\t\t用第二个")]),t._v(" "),a("blockquote",[a("p",[t._v("有衬线(serif)字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同. 中文字体中的宋体就是一种最标准的serif字体，衬线的特征非常明显.字形结构也和手写的楷书一致。因此宋体一直被做为最适合的正文字体之一.")]),t._v(" "),a("p",[t._v("无衬线(sans serif) 没有这些额外的装饰，而且笔画的粗细差不多  无衬线字体醒目，适合用于标题、广告、海报. "),a("strong",[t._v("需要醒目但不需要长时间阅读的地方")]),t._v(".")]),t._v(" "),a("p",[t._v("随着现代生活和流行趋势的变化，如今的人们越来越喜欢用无衬线体，因为他们看上去“更干净”。")])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* @font-face 可以将服务器的字体直接提供给用户去使用\n\t\t\t\t\t问题 \n\t\t\t\t\t\t1.加载速度\n\t\t\t\t\t\t2.版权\n\t\t\t\t\t*/")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yunmu"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*指定字体的名字*/")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*服务器跟字体的路径*/")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("yunmu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*在div里面应用yunmu的字体*/")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n<div>天青色等烟雨而我在等你</div>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"字体粗细-font-weight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体粗细-font-weight"}},[t._v("#")]),t._v(" 字体粗细(font-weight)")]),t._v(" "),a("blockquote",[a("p",[t._v("单位")]),t._v(" "),a("p",[t._v("​\t\t\t关键字"),a("strong",[t._v("normal.bold,bolder")]),t._v("和"),a("strong",[t._v("lighter")])]),t._v(" "),a("p",[t._v("​\t\t\t100的整数倍:100,200,300,400等等,最大为900,默认normal对应400 bold对应\t\t\t700（没什么用）")])]),t._v(" "),a("h3",{attrs:{id:"字体样式-font-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体样式-font-style"}},[t._v("#")]),t._v(" 字体样式(font-style)")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("1.正常(normal)")])]),t._v(" "),a("p",[a("strong",[t._v("2.italic( 斜体 )")])]),t._v(" "),a("p",[t._v("注: oblique也是斜体,用的比较少,了解即可")]),t._v(" "),a("p",[a("strong",[t._v("区别:")])]),t._v(" "),a("p",[t._v("1.italic带有倾斜属性的字体才可以设置倾斜的操作")]),t._v(" "),a("p",[t._v("2,oblique没有带有倾斜属性的字体也可以设置倾斜操作")])]),t._v(" "),a("h3",{attrs:{id:"字体是否为小型大写字母-font-variant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体是否为小型大写字母-font-variant"}},[t._v("#")]),t._v(" 字体是否为小型大写字母 (font-variant)")]),t._v(" "),a("ol",[a("li",[t._v("normal   默认值(正常显示)。")]),t._v(" "),a("li",[t._v("small-caps\t小型大写字母。")])]),t._v(" "),a("p",[a("strong",[t._v("写法:")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-variant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("small-caps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"字体的复合属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体的复合属性"}},[t._v("#")]),t._v(" 字体的复合属性")]),t._v(" "),a("p",[a("strong",[t._v("基本型:")])]),t._v(" "),a("p",[t._v("复合写法,这两个个属性是必须的")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" font-size  font-family"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("复杂型:")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font的")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fons-style  font-weight font-size/line-height  font-family"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("font-size/line-height写法必须加斜杠")]),t._v(" "),a("h2",{attrs:{id:"文本属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本属性"}},[t._v("#")]),t._v(" 文本属性")]),t._v(" "),a("h3",{attrs:{id:"行高-line-height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行高-line-height"}},[t._v("#")]),t._v(" 行高(line-height)")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("行高: 控制每一行文字的高度,文字会在这个行高内垂直居中显示")])]),t._v(" "),a("p",[t._v("​\t\t\t\t\t通过line-height来设置行高")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t行高可以直接指定一个大小（px,em）")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t也可以直接为行高设置一个整数")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t    \t--如果是一个整数，行高将会是字体大小的指定倍数")]),t._v(" "),a("p",[t._v("字体框")]),t._v(" "),a("p",[t._v("​\t\t\t字体框就是字体存在的格子,设置font-size实际上就是设置字体框的高度")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" skyblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n<div>天空一望无际是海洋的倒影</div>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*此时这个文本的高度是多少?\n 我们设置了p标签字体为100px,但是p标签实际高度为132像素.那这个132像素哪里来的?这个就是行高*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("当我们给文本设置字体大小,会依照比例(1.32)给这行文字设置行高,行高撑开了这个盒子")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("没有默认高度的时候文字的font-size决定line-height决定height")])]),t._v(" "),a("p",[t._v("我们可以修改行高")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v(" \t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t<div>天空一望无际"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("是海洋的倒影</div>\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*这个盒子的高度是多少?\n  \t打开开发者工具可以看到,盒子的高度就是0,就无法将盒子撑开.\n  \t我们还可以把font-size设置为0,行高设置150px*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" skyblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t<div>天空一望无际"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("是海洋的倒影</div>\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*盒子里面的文字消失了,但是盒子依旧被撑开.\n    所以盒子怎么被撑开,和文字关系不是最直接的,和行高是最直接的关系.*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("一般来说,行高的取值范围在1.2到1.5之间,行与行相对排版良好.不至于太密或者太疏.")])]),t._v(" "),a("p",[a("strong",[t._v("行高是可以被继承的")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("这里给line-height设置了没有单位1.5,的意思就是当前bodyfont-size的1.5倍.后面所有元素的font-size都会和行高成比例")]),t._v(" "),a("p",[t._v("如果body的font-size为16px,那么默认的line-height就是24px;")]),t._v(" "),a("p",[t._v("也可以给行高设置像素值,em,百分比单位.")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v(":前面如果body用的是百分比或em,其子元素继承的都是计算后得到的像素值,不会与自己的字体大小成比例.")]),t._v(" "),a("p",[t._v("但无单位的值就不会导致这个问题,因此,如果给line-height设置没有单位的值,那么子元素继承的是一个系数,永远与自己的font-size成比例.")])]),t._v(" "),a("blockquote",[a("p",[t._v("行高还可以用来设置行间距")]),t._v(" "),a("p",[a("strong",[t._v("行间距")])]),t._v(" "),a("p",[t._v("​\t\t\t--- 两个文字之间的距离就是行间距,行间距会在文字上下平均分配")]),t._v(" "),a("p",[t._v("​\t\t\t\t"),a("strong",[t._v("没有直接控制行间距的样式")])]),t._v(" "),a("p",[t._v("​\t\t\t\t"),a("strong",[t._v("文字大小 + 上下行间距 = 行高.")]),t._v("      1")]),t._v(" "),a("p",[a("strong",[t._v("所以我们可以通过控制行高去控制上下的间距")])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" skyblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*可以将行高设置为高度一样的值,使一个单行的文字在一个元素中垂直居中*/")]),t._v("\n\t\t<div>天空一望无际"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("是海洋的倒影</div>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"垂直对齐方式-verticle-align"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垂直对齐方式-verticle-align"}},[t._v("#")]),t._v(" 垂直对齐方式(verticle-align)")]),t._v(" "),a("p",[a("strong",[t._v("基线:在文本中,就是字母X下面两个脚形成的线")]),t._v("."),a("strong",[t._v("(只存在于行内(块)元素).")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("verticle-align:对齐方式的设置")])]),t._v(" "),a("blockquote",[a("p",[t._v("1.baseline:基线对齐(所有文本默认的对齐方式)")]),t._v(" "),a("p",[t._v("2.中线:middle")]),t._v(" "),a("p",[t._v("3.顶部对齐:top")]),t._v(" "),a("p",[t._v("4.底部对齐:bottom")])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" skyblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           \t "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t<p>xmind<span>xmind</span></p>\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*打开开发者工具,给span标签字体大小调大.\n  \t\t无论调大调小都是以基线对齐*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n/*此时在跟P文本的顶部对齐.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[a("strong",[t._v("如果你调整verticle-align对齐困难,可以使用像素值.")])]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t正值往上,负值向下")]),t._v(" "),a("p",[a("strong",[t._v("也可以使用百分比,百分比相对于line-height进行计算.")])])]),t._v(" "),a("h3",{attrs:{id:"文本缩进-text-indent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本缩进-text-indent"}},[t._v("#")]),t._v(" 文本缩进(text-indent)")]),t._v(" "),a("blockquote",[a("p",[t._v("单位")]),t._v(" "),a("p",[t._v("​\t\t1em；文本首行缩进一个字符")]),t._v(" "),a("p",[t._v("​\t\t1px: 缩进一个像素")]),t._v(" "),a("p",[t._v("单位可以使用负值")])]),t._v(" "),a("h3",{attrs:{id:"文本对齐-text-align"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本对齐-text-align"}},[t._v("#")]),t._v(" 文本对齐(text-align)")]),t._v(" "),a("blockquote",[a("p",[t._v("text-align：文本的水平对齐")]),t._v(" "),a("p",[t._v("​\t\t\t\t可选值：")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\t默认情况  tetx-align:left  左对齐")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\ttext-align:center;       居中对齐")]),t._v(" "),a("p",[t._v("​\t\t\t    \t\t\t\t text-align:right;         右对齐")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\ttext-align:justify表示两端对齐")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\t它会在单词间平均分布间距已达到两边恰好对齐")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\t\t\t消除"),a("strong",[t._v("毛边")]),t._v("。这也是印刷业经常用到的技术")])]),t._v(" "),a("h3",{attrs:{id:"文本装饰-text-decoration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本装饰-text-decoration"}},[t._v("#")]),t._v(" 文本装饰（text-decoration）")]),t._v(" "),a("blockquote",[a("p",[t._v("text-decoration:")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\tnone默认。定义标准的文本。")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\tunderline;下划线")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\toverline;上划线")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\tline-through;贯穿线")]),t._v(" "),a("p",[t._v("text-decoration: underline line-through overline设置多种文本装饰")])]),t._v(" "),a("h3",{attrs:{id:"大小写变换-text-transform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大小写变换-text-transform"}},[t._v("#")]),t._v(" 大小写变换(text-transform:)")]),t._v(" "),a("blockquote",[a("p",[t._v("text-transform:")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\tnone:默认，定义带有大写字母和小写字母的标准的文本")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\tuppercase将所有字母大写")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\tlowercase将所有字母小写")]),t._v(" "),a("p",[t._v("​\t\t\t\t\t\tcapitalize每个单词的首字母变成大写")])]),t._v(" "),a("h3",{attrs:{id:"控制字母和单词间距-word-spacing和letter-spacing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制字母和单词间距-word-spacing和letter-spacing"}},[t._v("#")]),t._v(" 控制字母和单词间距(word-spacing和letter-spacing)")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("word-spacing")]),t._v("控制词间距,很少用.")]),t._v(" "),a("blockquote",[a("p",[t._v("它的值意味着在默认间距的基础上增加或减少一定会的量")])]),t._v(" "),a("p",[a("strong",[t._v("letter-spacing")]),t._v("控制字符间的距离,")]),t._v(" "),a("blockquote",[a("p",[t._v("对于小写英文,人为改变字母间距也不是好事,因为大多数字体设计的初衷就是让人更容易辨别整个单词,中文的字间距也可以通过这个值设置")])])]),t._v(" "),a("h3",{attrs:{id:"空白处理-white-space"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空白处理-white-space"}},[t._v("#")]),t._v(" 空白处理 (white-space)")]),t._v(" "),a("blockquote",[a("p",[t._v("white-space：")]),t._v(" "),a("p",[t._v("​\t\t\t\t1.normal;默认")]),t._v(" "),a("p",[t._v("​\t\t\t\t2.nowrap;文本不会换行，文本会在在同一行上继续.")]),t._v(" "),a("p",[t._v("​\t\t\t\t3.pre保留空白")])]),t._v(" "),a("h3",{attrs:{id:"强制换行-word-break"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制换行-word-break"}},[t._v("#")]),t._v(" 强制换行 (word-break)")]),t._v(" "),a("blockquote",[a("p",[t._v("word-break：")]),t._v(" "),a("ol",[a("li",[t._v("normal  默认")]),t._v(" "),a("li",[t._v("break-all 允许在单词内换行;")])])]),t._v(" "),a("h3",{attrs:{id:"文本溢出-text-overflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本溢出-text-overflow"}},[t._v("#")]),t._v(" 文本溢出  (text-overflow)")]),t._v(" "),a("blockquote",[a("p",[t._v("text-overflow")]),t._v(" "),a("ol",[a("li",[t._v("clip:       修剪文本")]),t._v(" "),a("li",[t._v("ellipsis \t被修剪的文本用略符号来代表(....)")])])]),t._v(" "),a("p",[t._v("写法:")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("clip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"单行文本溢出处理方法组合写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单行文本溢出处理方法组合写法"}},[t._v("#")]),t._v(" 单行文本溢出处理方法组合写法")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*不允许换行*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*溢出隐藏*/")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*溢出省略*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"多行文本溢出处理方法组合写法-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行文本溢出处理方法组合写法-了解"}},[t._v("#")]),t._v(" 多行文本溢出处理方法组合写法(了解)")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px solid skyblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*溢出隐藏*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*溢出省略*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*兼容写法 css3盒子属性 弹性盒模型的前身*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*从上往下换行*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-line-clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*多于2行省略*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("p",[t._v("样式的继承: 我们为一个元素设置的样式同时也会应用到它的后代元素上")]),t._v(" "),a("p",[t._v("继承是发生在祖先元素的后代之间")]),t._v(" "),a("p",[t._v("继承是为了方便开发,利用继承我们可以将一些通用的样式统一设置到共同的祖先元素上,这样只需设置一次,即可让所有元素都具有该样式")]),t._v(" "),a("p",[t._v("注意:并不是所有的样式都会继承")]),t._v(" "),a("p",[t._v("1.默认继承的")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("fons-style font-variant font-weight font-size/line-height font-family"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncolor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*字体颜色*/")]),t._v("\ntext-align"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*文本水平对齐*/")]),t._v("\ntext-indent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*文本缩进*/")]),t._v(" \nletter-spacing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*字符间间距*/")]),t._v("\nword-spacing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*词间距*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*可被子元素继承*/")]),t._v(" \n\t\t\nli的小圆点也是从ul继承而来\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("2.a标签不继承color值")]),t._v(" "),a("p",[t._v("3.默认不继承的给属性加inhrit可以让他显示的继承.")]),t._v(" "),a("blockquote",[a("p",[t._v("例如background-color:inherit;")])]),t._v(" "),a("p",[t._v("4.子元素有的属性就不会去进行继承")])])}),[],!1,null,null,null);s.default=e.exports}}]);