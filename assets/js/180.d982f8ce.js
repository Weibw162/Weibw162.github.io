(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{514:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("当你编写使用回调函数的代码的时候，担心很多小函数的扩张可能会弄乱程序控制流。 你希望找到某个方法来让代码看上去更像是一个普通的执行序列。")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("通过使用生成器和协程可以使得回调函数内联在某个函数中。 为了演示说明，假设你有如下所示的一个执行某种计算任务然后调用一个回调函数的函数(参考7.10小节)：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply_async")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Compute the result")]),s._v("\n    result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Invoke the callback with the result")]),s._v("\n    callback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("接下来让我们看一下下面的代码，它包含了一个 "),t("code",[s._v("Async")]),s._v(" 类和一个 "),t("code",[s._v("inlined_async")]),s._v(" 装饰器：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" queue "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Queue\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" functools "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" wraps\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Async")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("func "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" func\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("args "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" args\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inlined_async")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@wraps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wrapper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        result_queue "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        result_queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result_queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                apply_async"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callback"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("result_queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" StopIteration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" wrapper\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("这两个代码片段允许你使用 "),t("code",[s._v("yield")]),s._v(" 语句内联回调步骤。比如：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y\n\n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@inlined_async")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" Async"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" Async"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'world'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" Async"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Goodbye'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("如果你调用 "),t("code",[s._v("test()")]),s._v(" ，你会得到类似如下的输出：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nhelloworld\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nGoodbye\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("你会发现，除了那个特别的装饰器和 "),t("code",[s._v("yield")]),s._v(" 语句外，其他地方并没有出现任何的回调函数(其实是在后台定义的)。")]),s._v(" "),t("h2",{attrs:{id:"讨论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[s._v("#")]),s._v(" 讨论")]),s._v(" "),t("p",[s._v("本小节会实实在在的测试你关于回调函数、生成器和控制流的知识。")]),s._v(" "),t("p",[s._v("首先，在需要使用到回调的代码中，关键点在于当前计算工作会挂起并在将来的某个时候重启(比如异步执行)。 当计算重启时，回调函数被调用来继续处理结果。"),t("code",[s._v("apply_async()")]),s._v(" 函数演示了执行回调的实际逻辑， 尽管实际情况中它可能会更加复杂(包括线程、进程、事件处理器等等)。")]),s._v(" "),t("p",[s._v("计算的暂停与重启思路跟生成器函数的执行模型不谋而合。 具体来讲，"),t("code",[s._v("yield")]),s._v(" 操作会使一个生成器函数产生一个值并暂停。 接下来调用生成器的 "),t("code",[s._v("__next__()")]),s._v(" 或 "),t("code",[s._v("send()")]),s._v(" 方法又会让它从暂停处继续执行。")]),s._v(" "),t("p",[s._v("根据这个思路，这一小节的核心就在 "),t("code",[s._v("inline_async()")]),s._v(" 装饰器函数中了。 关键点就是，装饰器会逐步遍历生成器函数的所有 "),t("code",[s._v("yield")]),s._v(" 语句，每一次一个。 为了这样做，刚开始的时候创建了一个 "),t("code",[s._v("result")]),s._v(" 队列并向里面放入一个 "),t("code",[s._v("None")]),s._v(" 值。 然后开始一个循环操作，从队列中取出结果值并发送给生成器，它会持续到下一个 "),t("code",[s._v("yield")]),s._v(" 语句， 在这里一个 "),t("code",[s._v("Async")]),s._v(" 的实例被接受到。然后循环开始检查函数和参数，并开始进行异步计算 "),t("code",[s._v("apply_async()")]),s._v(" 。 然而，这个计算有个最诡异部分是它并没有使用一个普通的回调函数，而是用队列的 "),t("code",[s._v("put()")]),s._v(" 方法来回调。")]),s._v(" "),t("p",[s._v("这时候，是时候详细解释下到底发生了什么了。主循环立即返回顶部并在队列上执行 "),t("code",[s._v("get()")]),s._v(" 操作。 如果数据存在，它一定是 "),t("code",[s._v("put()")]),s._v(" 回调存放的结果。如果没有数据，那么先暂停操作并等待结果的到来。 这个具体怎样实现是由 "),t("code",[s._v("apply_async()")]),s._v(" 函数来决定的。 如果你不相信会有这么神奇的事情，你可以使用 "),t("code",[s._v("multiprocessing")]),s._v(" 库来试一下， 在单独的进程中执行异步计算操作，如下所示：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" multiprocessing\n    pool "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" multiprocessing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Pool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    apply_async "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("apply_async\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run the test function")]),s._v("\n    test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("实际上你会发现这个真的就是这样的，但是要解释清楚具体的控制流得需要点时间了。")]),s._v(" "),t("p",[s._v("将复杂的控制流隐藏到生成器函数背后的例子在标准库和第三方包中都能看到。 比如，在 "),t("code",[s._v("contextlib")]),s._v(" 中的 "),t("code",[s._v("@contextmanager")]),s._v(" 装饰器使用了一个令人费解的技巧， 通过一个 "),t("code",[s._v("yield")]),s._v(" 语句将进入和离开上下文管理器粘合在一起。 另外非常流行的 "),t("code",[s._v("Twisted")]),s._v(" 包中也包含了非常类似的内联回调。")])])}),[],!1,null,null,null);t.default=e.exports}}]);