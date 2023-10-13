(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{519:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("你的程序要创建大量(可能上百万)的对象，导致占用很大的内存。")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("对于主要是用来当成简单的数据结构的类而言，你可以通过给类添加 "),t("code",[s._v("__slots__")]),s._v(" 属性来极大的减少实例所占的内存。比如：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    __slots__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'year'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'month'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'day'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" year"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" month"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" day"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("year "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" year\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("month "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" month\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("day "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" day\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("当你定义 "),t("code",[s._v("__slots__")]),s._v(" 后，Python就会为实例使用一种更加紧凑的内部表示。 实例通过一个很小的固定大小的数组来构建，而不是为每个实例定义一个字典，这跟元组或列表很类似。 在 "),t("code",[s._v("__slots__")]),s._v(" 中列出的属性名在内部被映射到这个数组的指定小标上。 使用slots一个不好的地方就是我们不能再给实例添加新的属性了，只能使用在 "),t("code",[s._v("__slots__")]),s._v(" 中定义的那些属性名。")]),s._v(" "),t("h2",{attrs:{id:"讨论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[s._v("#")]),s._v(" 讨论")]),s._v(" "),t("p",[s._v("使用slots后节省的内存会跟存储属性的数量和类型有关。 不过，一般来讲，使用到的内存总量和将数据存储在一个元组中差不多。 为了给你一个直观认识，假设你不使用slots直接存储一个Date实例， 在64位的Python上面要占用428字节，而如果使用了slots，内存占用下降到156字节。 如果程序中需要同时创建大量的日期实例，那么这个就能极大的减小内存使用量了。")]),s._v(" "),t("p",[s._v("尽管slots看上去是一个很有用的特性，很多时候你还是得减少对它的使用冲动。 Python的很多特性都依赖于普通的基于字典的实现。 另外，定义了slots后的类不再支持一些普通类特性了，比如多继承。 大多数情况下，你应该只在那些经常被使用到的用作数据结构的类上定义slots (比如在程序中需要创建某个类的几百万个实例对象)。")]),s._v(" "),t("p",[s._v("关于 "),t("code",[s._v("__slots__")]),s._v(" 的一个常见误区是它可以作为一个封装工具来防止用户给实例增加新的属性。 尽管使用slots可以达到这样的目的，但是这个并不是它的初衷。 "),t("code",[s._v("__slots__")]),s._v(" 更多的是用来作为一个内存优化工具。")])])}),[],!1,null,null,null);t.default=e.exports}}]);