(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{589:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("你想在分布式系统中实现一个简单的客户端连接认证功能，又不想像SSL那样的复杂。")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("可以利用 "),t("code",[s._v("hmac")]),s._v(" 模块实现一个连接握手，从而实现一个简单而高效的认证过程。下面是代码示例：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" hmac\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("client_authenticate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" secret_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n    Authenticate client to a remote service.\n    connection represents a network connection.\n    secret_key is a key known only to both client/server.\n    '''")]),s._v("\n    message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hmac"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("secret_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    digest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("digest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("digest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("server_authenticate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" secret_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n    Request client authentication.\n    '''")]),s._v("\n    message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urandom"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hash")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hmac"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("new"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("secret_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    digest "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("digest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("digest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" hmac"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compare_digest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("digest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("基本原理是当连接建立后，服务器给客户端发送一个随机的字节消息（这里例子中使用了 "),t("code",[s._v("os.urandom()")]),s._v(" 返回值）。 客户端和服务器同时利用hmac和一个只有双方知道的密钥来计算出一个加密哈希值。然后客户端将它计算出的摘要发送给服务器， 服务器通过比较这个值和自己计算的是否一致来决定接受或拒绝连接。摘要的比较需要使用 "),t("code",[s._v("hmac.compare_digest()")]),s._v(" 函数。 使用这个函数可以避免遭到时间分析攻击，不要用简单的比较操作符（==）。 为了使用这些函数，你需要将它集成到已有的网络或消息代码中。例如，对于sockets，服务器代码应该类似下面：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" socket "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AF_INET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SOCK_STREAM\n\nsecret_key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("b'peekaboo'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo_handler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client_sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" server_authenticate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client_sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" secret_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        client_sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n        msg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client_sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8192")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        client_sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendall"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo_server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AF_INET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SOCK_STREAM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("listen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("accept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        echo_handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\necho_server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nWithin a client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" you would do this"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" socket "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AF_INET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SOCK_STREAM\n\nsecret_key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("b'peekaboo'")]),s._v("\n\ns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AF_INET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SOCK_STREAM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nclient_authenticate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" secret_key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("b'Hello World'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nresp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("h2",{attrs:{id:"讨论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#讨论"}},[s._v("#")]),s._v(" 讨论")]),s._v(" "),t("p",[t("code",[s._v("hmac")]),s._v(" 认证的一个常见使用场景是内部消息通信系统和进程间通信。 例如，如果你编写的系统涉及到一个集群中多个处理器之间的通信， 你可以使用本节方案来确保只有被允许的进程之间才能彼此通信。 事实上，基于 "),t("code",[s._v("hmac")]),s._v(" 的认证被 "),t("code",[s._v("multiprocessing")]),s._v(" 模块使用来实现子进程直接的通信。")]),s._v(" "),t("p",[s._v("还有一点需要强调的是连接认证和加密是两码事。 认证成功之后的通信消息是以明文形式发送的，任何人只要想监听这个连接线路都能看到消息（尽管双方的密钥不会被传输）。")]),s._v(" "),t("p",[s._v("hmac认证算法基于哈希函数如MD5和SHA-1，关于这个在IETF RFC 2104中有详细介绍。")])])}),[],!1,null,null,null);t.default=e.exports}}]);