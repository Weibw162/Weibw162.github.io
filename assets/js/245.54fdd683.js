(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{579:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("你想创建一个新的Python环境，用来安装模块和包。 不过，你不想安装一个新的Python克隆，也不想对系统Python环境产生影响。")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("你可以使用 "),t("code",[s._v("pyvenv")]),s._v(" 命令创建一个新的“虚拟”环境。 这个命令被安装在Python解释器同一目录，或Windows上面的Scripts目录中。下面是一个例子：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("bash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" pyvenv Spam\nbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("传给 "),t("code",[s._v("pyvenv")]),s._v(" 命令的名字是将要被创建的目录名。当被创建后，Span目录像下面这样：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("bash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" cd Spam\nbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" ls\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),s._v(" include lib pyvenv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfg\nbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在bin目录中，你会找到一个可以使用的Python解释器：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("bash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Spam"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("python3\nPython "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2012")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("GCC "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Apple Inc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5666")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dot "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" on darwin\nType "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"copyright"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"credits"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"license"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" more information"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pprint "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pprint\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" pprint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/lib/python33.zip'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/lib/python3.3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/lib/python3.3/plat-darwin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/local/lib/python3.3/lib-dynload'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/beazley/Spam/lib/python3.3/site-packages'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("这个解释器的特点就是他的site-packages目录被设置为新创建的环境。 如果你要安装第三方包，它们会被安装在那里，而不是通常系统的site-packages目录。")]),s._v(" "),t("h2",{attrs:{id:"讨论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[s._v("#")]),s._v(" 讨论")]),s._v(" "),t("p",[s._v("创建虚拟环境通常是为了安装和管理第三方包。 正如你在例子中看到的那样，"),t("code",[s._v("sys.path")]),s._v(" 变量包含来自于系统Python的目录， 而 site-packages目录已经被重定位到一个新的目录。")]),s._v(" "),t("p",[s._v("有了一个新的虚拟环境，下一步就是安装一个包管理器，比如distribute或pip。 但安装这样的工具和包的时候，你需要确保你使用的是虚拟环境的解释器。 它会将包安装到新创建的site-packages目录中去。")]),s._v(" "),t("p",[s._v("尽管一个虚拟环境看上去是Python安装的一个复制， 不过它实际上只包含了少量几个文件和一些符号链接。 所有标准库函文件和可执行解释器都来自原来的Python安装。 因此，创建这样的环境是很容易的，并且几乎不会消耗机器资源。")]),s._v(" "),t("p",[s._v("默认情况下，虚拟环境是空的，不包含任何额外的第三方库。如果你想将一个已经安装的包作为虚拟环境的一部分， 可以使用“–system-site-packages”选项来创建虚拟环境，例如：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("bash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" pyvenv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("system"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("site"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("packages Spam\nbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("跟多关于 "),t("code",[s._v("pyvenv")]),s._v(" 和虚拟环境的信息可以参考 "),t("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0405/",target:"_blank",rel:"noopener noreferrer"}},[s._v("PEP 405"),t("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);