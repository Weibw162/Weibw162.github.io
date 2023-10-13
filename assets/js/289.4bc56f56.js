(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{623:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("你的程序中有个方法会输出到标准输出中（sys.stdout）。也就是说它会将文本打印到屏幕上面。 你想写个测试来证明它，给定一个输入，相应的输出能正常显示出来。")]),t._v(" "),s("h2",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("unittest.mock")]),t._v(" 模块中的 "),s("code",[t._v("patch()")]),t._v(" 函数， 使用起来非常简单，可以为单个测试模拟 "),s("code",[t._v("sys.stdout")]),t._v(" 然后回滚， 并且不产生大量的临时变量或在测试用例直接暴露状态变量。")]),t._v(" "),s("p",[t._v("作为一个例子，我们在 "),s("code",[t._v("mymodule")]),t._v(" 模块中定义如下一个函数：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mymodule.py")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlprint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("protocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{}://{}.{}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("protocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("默认情况下内置的 "),s("code",[t._v("print")]),t._v(" 函数会将输出发送到 "),s("code",[t._v("sys.stdout")]),t._v(" 。 为了测试输出真的在那里，你可以使用一个替身对象来模拟它，然后使用断言来确认结果。 使用 "),s("code",[t._v("unittest.mock")]),t._v(" 模块的 "),s("code",[t._v("patch()")]),t._v(" 方法可以很方便的在测试运行的上下文中替换对象， 并且当测试完成时候自动返回它们的原有状态。下面是对 "),s("code",[t._v("mymodule")]),t._v(" 模块的测试代码：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" io "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" StringIO\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" unittest "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TestCase\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" unittest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mock "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" patch\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mymodule\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestURLPrint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TestCase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_url_gets_to_stdout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        protocol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),t._v("\n        host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www'")]),t._v("\n        domain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example.com'")]),t._v("\n        expected_url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{}://{}.{}\\n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("protocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sys.stdout'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("StringIO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" fake_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mymodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urlprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("protocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertEqual"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fake_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getvalue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"讨论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[t._v("#")]),t._v(" 讨论")]),t._v(" "),s("p",[s("code",[t._v("urlprint()")]),t._v(" 函数接受三个参数，测试方法开始会先设置每一个参数的值。 "),s("code",[t._v("expected_url")]),t._v(" 变量被设置成包含期望的输出的字符串。")]),t._v(" "),s("p",[s("code",[t._v("unittest.mock.patch()")]),t._v(" 函数被用作一个上下文管理器，使用 "),s("code",[t._v("StringIO")]),t._v(" 对象来代替 "),s("code",[t._v("sys.stdout")]),t._v(" . "),s("code",[t._v("fake_out")]),t._v(" 变量是在该进程中被创建的模拟对象。 在with语句中使用它可以执行各种检查。当with语句结束时，"),s("code",[t._v("patch")]),t._v(" 会将所有东西恢复到测试开始前的状态。 有一点需要注意的是某些对Python的C扩展可能会忽略掉 "),s("code",[t._v("sys.stdout")]),t._v(" 的配置而直接写入到标准输出中。 限于篇幅，本节不会涉及到这方面的讲解，它适用于纯Python代码。 如果你真的需要在C扩展中捕获I/O，你可以先打开一个临时文件，然后将标准输出重定向到该文件中。 更多关于捕获以字符串形式捕获I/O和 "),s("code",[t._v("StringIO")]),t._v(" 对象请参阅5.6小节。")])])}),[],!1,null,null,null);s.default=e.exports}}]);