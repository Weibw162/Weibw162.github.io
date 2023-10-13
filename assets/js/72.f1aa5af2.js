(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{409:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[t("strong",[s._v("怎样在两个字典中寻寻找相同点（比如相同的键、相同的值等等）？")])]),s._v(" "),t("h3",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("考虑下面两个字典：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'y'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'z'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'y'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("为了寻找两个字典的相同点，可以简单的在两字典的 keys() 或者 items() 方法返 回结果上执行集合操作。比如：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Find keys in common")]),s._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# { 'x', 'y' }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Find keys in a that are not in b")]),s._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# { 'z' }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Find (key,value) pairs in common")]),s._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# { ('y', 2) }")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("这些操作也可以用于修改或者过滤字典元素。比如，假如你想以现有字典构造一个 排除几个指定键的新字典。下面利用字典推导来实现这样的需求：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Make a new dictionary with certain keys removed")]),s._v("\nc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'z'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# c is {'x': 1, 'y': 2}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"讨论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[s._v("#")]),s._v(" 讨论")]),s._v(" "),t("p",[s._v("一个字典就是一个键集合与值集合的映射关系。字典的 keys() 方法返回一个展现 键集合的键视图对象。键视图的一个很少被了解的特性就是它们也支持集合操作，比如 集合并、交、差运算。所以，如果你想对集合的键执行一些普通的集合操作，可以直接 使用键视图对象而不用先将它们转换成一个 set。")]),s._v(" "),t("p",[s._v("字典的 items() 方法返回一个包含 (键，值) 对的元素视图对象。这个对象同样也 支持集合操作，并且可以被用来查找两个字典有哪些相同的键值对。")]),s._v(" "),t("p",[s._v("尽管字典的 values() 方法也是类似，但是它并不支持这里介绍的集合操作。某种 程度上是因为值视图不能保证所有的值互不相同，这样会导致某些集合操作会出现问 题。不过，如果你硬要在值上面执行这些集合操作的话，你可以先将值集合转换成 set， 然后再执行集合运算就行了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);