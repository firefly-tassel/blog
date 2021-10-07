(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{399:function(t,a,s){"use strict";s.r(a);var n=s(46),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_10分钟回顾location对象的几个知识点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10分钟回顾location对象的几个知识点"}},[t._v("#")]),t._v(" 10分钟回顾Location对象的几个知识点")]),t._v(" "),s("blockquote",[s("p",[t._v("Location对象包含有关当前URL的信息.它是一个比较特别的对象,因为它既是Window对象的一部分,可通过"),s("code",[t._v("window.location")]),t._v("属性来访问.也是document对象的属性,通过"),s("code",[t._v("document.location")]),t._v("来使用.")])]),t._v(" "),s("p",[t._v("我的页面路径是 "),s("code",[t._v("http://127.0.0.1:5501/html/index.html?id=123#test")]),t._v(",在控制台键入"),s("code",[t._v("window.location")]),t._v(",返回一个"),s("code",[t._v("Location")]),t._v("对象.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9nLTEyNTcyMzM0MTcuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL0xvY2F0aW9uX29iamVjdC5wbmc?x-oss-process=image/format,png",alt:"Location Object"}})]),t._v(" "),s("p",[t._v("这其中有些是属性,有些是方法,我们来简单了解一下.")]),t._v(" "),s("h2",{attrs:{id:"对象属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象属性"}},[t._v("#")]),t._v(" 对象属性")]),t._v(" "),s("p",[t._v("我们按照上图中展开的"),s("code",[t._v("Location")]),t._v("对象,来说一说其中的一些属性")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("hash")]),t._v(" "),s("td",[t._v("锚点部分,以"),s("code",[t._v("#")]),t._v("开头")])]),t._v(" "),s("tr",[s("td",[t._v("host")]),t._v(" "),s("td",[t._v("主机名 + 端口号")])]),t._v(" "),s("tr",[s("td",[t._v("hostname")]),t._v(" "),s("td",[t._v("主机名 如"),s("code",[t._v("127.0.0.1")]),t._v(" "),s("code",[t._v("localhost")]),t._v(" 等")])]),t._v(" "),s("tr",[s("td",[t._v("href")]),t._v(" "),s("td",[t._v("包含完整URL")])]),t._v(" "),s("tr",[s("td",[t._v("origin")]),t._v(" "),s("td",[t._v("协议 + 主机名 + 端口号(我们常说的跨域,跨的就是它)")])]),t._v(" "),s("tr",[s("td",[t._v("pathname")]),t._v(" "),s("td",[t._v("路径部分,以 "),s("code",[t._v("/")]),t._v(" 开头")])]),t._v(" "),s("tr",[s("td",[t._v("port")]),t._v(" "),s("td",[t._v("端口,常见的"),s("code",[t._v("80")]),t._v(" "),s("code",[t._v("443")]),t._v("等")])]),t._v(" "),s("tr",[s("td",[t._v("protocol")]),t._v(" "),s("td",[t._v("URL对应的协议,注意最后是有一个"),s("code",[t._v(":")]),t._v("的,如"),s("code",[t._v("http:")]),t._v(" "),s("code",[t._v("https:")]),t._v(" 等")])]),t._v(" "),s("tr",[s("td",[t._v("search")]),t._v(" "),s("td",[t._v("参数部分,以"),s("code",[t._v("?")]),t._v(" 开头")])])])]),t._v(" "),s("p",[t._v("下面这个是一个在"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v("上的例子,比较清晰直观的展示了各个部分的内容:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9nLTEyNTcyMzM0MTcuY29zLmFwLW5hbmppbmcubXlxY2xvdWQuY29tL2xvY2F0aW9uLmdpZg",alt:"Location"}})]),t._v(" "),s("p",[t._v("其中上面的属性,除了 "),s("code",[t._v("origin")]),t._v(" 是个只读属性不可修改外,其余的属性都是读写兼备的.\n下面是属性如何获取和设置的用法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取当前页面的hash 结果为 #test")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置当前页面的hash 此时可以观察到浏览器的url会变化")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 再次读取hash,结果变成了 #test2")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面直接跳转到百度")]),t._v("\n")])])]),s("p",[t._v("在这里顺便提一下,现在大部分的浏览器都支持 "),s("code",[t._v("hashchange")]),t._v(" 事件.就是当浏览器"),s("code",[t._v("#")]),t._v(" 后面的内容变化时,触发此事件.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hashchange'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hash has changed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("执行上面的代码后,当我们改变url的hash部分时,控制台就会打印出提示.当然,对于那些不兼容"),s("code",[t._v("hashchange")]),t._v("事件的浏览器,也是有办法可以模拟的,比如设置一个定时器,每隔一定时间去查询当前的hash,和之前的hash去做对比从而判断url中的hash是否改变了.\n"),s("strong",[t._v("注意:")]),t._v(" 每次修改"),s("code",[t._v("location")]),t._v(" 的属性("),s("code",[t._v("hash")]),t._v("除外),页面都会以新URL重新加载.")]),t._v(" "),s("h3",{attrs:{id:"补充案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充案例"}},[t._v("#")]),t._v(" 补充案例")]),t._v(" "),s("p",[t._v("曾经项目中有一个需求是这样的,点击按钮复制一个带有个人邀请码的注册链接.如这种样子的:"),s("code",[t._v("https://www.xx.com/register?code=8888")]),t._v(".那么这个链接就需要我们自己去拼接了.我原先伪代码如下")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inviteCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/register?code'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" inviteCode\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("但是后来测试同学在兼容性测试的时候告诉我这里有问题,在IE11以下的浏览器中复制出来的路径是有问题的.于是,我去排查原因,发现"),s("code",[t._v("location.origin")]),t._v(" 这个属性在IE10及其以下是不存在的,会返回"),s("code",[t._v("undefined")]),t._v(",既然发现了问题所在,那我们就好解决了.解决代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inviteCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/register?code'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" inviteCode\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("提交代码,于是测试同学高兴的告诉我说问题解决了.")]),t._v(" "),s("h2",{attrs:{id:"对象方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象方法"}},[t._v("#")]),t._v(" 对象方法")]),t._v(" "),s("p",[t._v("从文章最开头的图中可以看到 "),s("code",[t._v("Location")]),t._v(" 对象有3个方法 ("),s("code",[t._v("toString")]),t._v("方法就不说了,就是返回一个包含完整url的字符串)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("assign")]),t._v(" "),s("td",[t._v("加载新页面")])]),t._v(" "),s("tr",[s("td",[t._v("reload")]),t._v(" "),s("td",[t._v("重加载当前页面")])]),t._v(" "),s("tr",[s("td",[t._v("replace")]),t._v(" "),s("td",[t._v("用一个新页面代替当前页面")])])])]),t._v(" "),s("p",[t._v("这里来说明一下这几个方法的用法和区别.首先我们说的是"),s("code",[t._v("reload")]),t._v("方法.此方法的参数是一个可选的布尔类型,不填默认为"),s("code",[t._v("false")]),t._v(",表示可能从缓存中读取当前页面刷新,相当于普通的F5刷新,"),s("code",[t._v("true")]),t._v("表示强制浏览器从服务器去重新获取页面资源,相当于强制刷新("),s("code",[t._v("Shift")]),t._v("+"),s("code",[t._v("F5")]),t._v(" 或者 "),s("code",[t._v("Cmd")]),t._v("+"),s("code",[t._v("Shift")]),t._v("+"),s("code",[t._v("R")]),t._v("),具体用法如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行后会重新加载当前页面")]),t._v("\n")])])]),s("p",[t._v("然后是 "),s("code",[t._v("assign")]),t._v(" 和 "),s("code",[t._v("replace")]),t._v(" 方法,这两个方法都需要传入一个参数,表示新页面的地址.它们的区别在于,使用了 "),s("code",[t._v("assign")]),t._v(" 后,会在浏览器的历史记录中留下之前老页面的地址,当我们在新页面点击回退键的时候还可以回到之前的页面.而 "),s("code",[t._v("replace")]),t._v(" 则是使用新页面的地址替换老页面的地址,此时再点击回退按钮就回不到我们之前的页面去了.大家可以新开一个空白页面,然后分别将下面的代码放到控制台去执行一下,再之后点击浏览器左上角的回退按钮,观察效果.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新开两个空白页,各执行其中一句代码")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v("中提到,"),s("code",[t._v("Location")]),t._v(" 其实是一个接口,表示链接到的对象的URL."),s("code",[t._v("Document")]),t._v(" 和 "),s("code",[t._v("Window")]),t._v(" 接口都有这样一个链接的Location.所以我们可以通过"),s("code",[t._v("document.location")]),t._v(" 或 "),s("code",[t._v("window.location")]),t._v(" 来访问 "),s("code",[t._v("Location")]),t._v(" 对象.甚至于"),s("code",[t._v("location")]),t._v(" 都是一个全局变量.我们直接在控制台键入 "),s("code",[t._v("location")]),t._v(" 也会返回一个 "),s("code",[t._v("Location")]),t._v(" 对象")]),t._v(" "),s("h2",{attrs:{id:"meta属性实现刷新和跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta属性实现刷新和跳转"}},[t._v("#")]),t._v(" meta属性实现刷新和跳转")]),t._v(" "),s("p",[t._v("其实当我们想要实现页面的跳转或者每隔一段时间刷新当前页面,不一定非得使用定时器+location方法.我们还可以使用meta属性来达到相同的效果.假如我这是一个监控页面,想要每隔20秒刷新一次页面.使用定时器的方法代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("而使用meta标签则只需要")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("refresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("又假如这是一个简单的介绍页,在10s后差不多就要自动跳到其他页面.我们也可以使用上面的meta属性.只需要在"),s("code",[t._v("content")]),t._v("里面时间的后面加上跳转的地址就可以了,等时间到了它就会自动跳转.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("refresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10;https://www.baidu.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("当然使用meta有一个不好的地方就是它的刷新和跳转是不可中途取消的.因此它的使用场景要视具体的业务而定.比如一个需要权限的页面被非法访问,那么就可以控制一定时间后自动跳到其他页面去.")]),t._v(" "),s("h2",{attrs:{id:"获取url中的查询字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取url中的查询字符串"}},[t._v("#")]),t._v(" 获取url中的查询字符串")]),t._v(" "),s("p",[t._v("很多时候,我们有这样的需求,就是获取url查询字符串中某个key对应的value.比如在一个如 "),s("code",[t._v("http://127.0.0.1:5501/html/index.html?id=123&name=zhangsan")]),t._v(" 的页面中获取id对应的值,也就是"),s("code",[t._v("123")]),t._v(".那么我们也有不少方法可以来做这个事情.")]),t._v(" "),s("h3",{attrs:{id:"传统方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传统方法"}},[t._v("#")]),t._v(" 传统方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUrlQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" strs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" strs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" strs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'='")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意了,上面的代码中使用了 "),s("code",[t._v("decodeURIComponent")]),t._v(" 来解码,因为查询字符串一般都是被 "),s("code",[t._v("encodeURIComponent")]),t._v(" 编码过的,")]),t._v(" "),s("h3",{attrs:{id:"urlsearchparams接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urlsearchparams接口"}},[t._v("#")]),t._v(" URLSearchParams接口")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" urlParams "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URLSearchParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlParams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n")])])]),s("p",[s("code",[t._v("URLSearchParams")]),t._v(" 接口定义了一些实用的方法来处理URL中的查询字符串."),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("是它的具体介绍,有兴趣的同学可以自己去看看,我们就先不展开了.")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("其实对于 "),s("code",[t._v("Location")]),t._v(" 对象,它的知识相对而言并不是很多.在红宝书中也只有短短的3页内容.作为BOM中的一部分,它常常也会和 "),s("code",[t._v("Navigator")]),t._v(", "),s("code",[t._v("History")]),t._v("对象一起提到,这部分内容我们后面有时间再说好了.")])])}),[],!1,null,null,null);a.default=e.exports}}]);