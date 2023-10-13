(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{610:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("你的程序如何能够解析命令行选项（位于sys.argv中）")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[t("code",[s._v("argparse")]),s._v(" 模块可被用来解析命令行选项。下面一个简单例子演示了最基本的用法：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# search.py")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\nHypothetical command-line tool for searching a collection of\nfiles for one or more text patterns.\n'''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" argparse\nparser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" argparse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ArgumentParser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("description"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Search some files'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nparser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'filenames'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("metavar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'filename'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nargs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nparser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-p'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--pat'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("metavar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pattern'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" required"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'patterns'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'append'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text pattern to search for'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nparser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-v'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'verbose'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'store_true'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'verbose mode'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nparser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-o'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'outfile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'store'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'output file'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nparser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--speed'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'speed'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'store'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    choices"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slow'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fast'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slow'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'search speed'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nargs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse_args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Output the collected arguments")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filenames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("patterns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("verbose"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("outfile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("speed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("p",[s._v("该程序定义了一个如下使用的命令行解析器：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("bash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" python3 search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h\nusage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p pattern"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o OUTFILE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("speed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("slow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nSearch some files\n\npositional arguments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  filename\n\noptional arguments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),s._v("            show this "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),s._v(" message "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" exit\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p pattern"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pat pattern\n                        text pattern to search "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v                    verbose mode\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o OUTFILE            output "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("file")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("speed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("slow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   search speed\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("下面的部分演示了程序中的数据部分。仔细观察print()语句的打印输出。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("bash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" python3 search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\nusage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p pattern "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o OUTFILE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("speed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("slow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" the following arguments are required"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pat\n\nbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" python3 search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p spam "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eggs foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\nfilenames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npatterns  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spam'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eggs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nverbose   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\noutfile   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\nspeed     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" slow\n\nbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" python3 search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p spam "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eggs foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o results\nfilenames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npatterns  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spam'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eggs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nverbose   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\noutfile   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" results\nspeed     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" slow\n\nbash "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" python3 search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p spam "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eggs foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt bar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o results \\\n             "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("speed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fast\nfilenames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npatterns  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spam'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eggs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nverbose   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\noutfile   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" results\nspeed     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fast\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("对于选项值的进一步处理由程序来决定，用你自己的逻辑来替代 "),t("code",[s._v("print()")]),s._v(" 函数。")]),s._v(" "),t("h2",{attrs:{id:"讨论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[s._v("#")]),s._v(" 讨论")]),s._v(" "),t("p",[t("code",[s._v("argparse")]),s._v(" 模块是标准库中最大的模块之一，拥有大量的配置选项。 本节只是演示了其中最基础的一些特性，帮助你入门。")]),s._v(" "),t("p",[s._v("为了解析命令行选项，你首先要创建一个 "),t("code",[s._v("ArgumentParser")]),s._v(" 实例， 并使用 "),t("code",[s._v("add_argument()")]),s._v(" 方法声明你想要支持的选项。 在每个 "),t("code",[s._v("add_argument()")]),s._v(" 调用中，"),t("code",[s._v("dest")]),s._v(" 参数指定解析结果被指派给属性的名字。 "),t("code",[s._v("metavar")]),s._v(" 参数被用来生成帮助信息。"),t("code",[s._v("action")]),s._v(" 参数指定跟属性对应的处理逻辑， 通常的值为 "),t("code",[s._v("store")]),s._v(" ,被用来存储某个值或将多个参数值收集到一个列表中。 下面的参数收集所有剩余的命令行参数到一个列表中。在本例中它被用来构造一个文件名列表：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("parser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'filenames'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("metavar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'filename'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nargs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下面的参数根据参数是否存在来设置一个 "),t("code",[s._v("Boolean")]),s._v(" 标志：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("parser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-v'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'verbose'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'store_true'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'verbose mode'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("下面的参数接受一个单独值并将其存储为一个字符串：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("parser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-o'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'outfile'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'store'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'output file'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("下面的参数说明允许某个参数重复出现多次，并将它们追加到一个列表中去。 "),t("code",[s._v("required")]),s._v(" 标志表示该参数至少要有一个。"),t("code",[s._v("-p")]),s._v(" 和 "),t("code",[s._v("--pat")]),s._v(" 表示两个参数名形式都可使用。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("parser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-p'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--pat'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("metavar"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pattern'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" required"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'patterns'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'append'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text pattern to search for'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("最后，下面的参数说明接受一个值，但是会将其和可能的选择值做比较，以检测其合法性：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("parser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_argument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--speed'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'speed'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'store'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    choices"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slow'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fast'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" default"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slow'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("help")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'search speed'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("一旦参数选项被指定，你就可以执行 "),t("code",[s._v("parser.parse()")]),s._v(" 方法了。 它会处理 "),t("code",[s._v("sys.argv")]),s._v(" 的值并返回一个结果实例。 每个参数值会被设置成该实例中 "),t("code",[s._v("add_argument()")]),s._v(" 方法的 "),t("code",[s._v("dest")]),s._v(" 参数指定的属性值。")]),s._v(" "),t("p",[s._v("还很多种其他方法解析命令行选项。 例如，你可能会手动的处理 "),t("code",[s._v("sys.argv")]),s._v(" 或者使用 "),t("code",[s._v("getopt")]),s._v(" 模块。 但是，如果你采用本节的方式，将会减少很多冗余代码，底层细节 "),t("code",[s._v("argparse")]),s._v(" 模块已经帮你处理了。 你可能还会碰到使用 "),t("code",[s._v("optparse")]),s._v(" 库解析选项的代码。 尽管 "),t("code",[s._v("optparse")]),s._v(" 和 "),t("code",[s._v("argparse")]),s._v(" 很像，但是后者更先进，因此在新的程序中你应该使用它。")])])}),[],!1,null,null,null);t.default=r.exports}}]);