(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{400:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_5分钟回顾原生ajax的几个知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5分钟回顾原生ajax的几个知识点"}},[t._v("#")]),t._v(" 5分钟回顾原生ajax的几个知识点")]),t._v(" "),a("blockquote",[a("p",[t._v("今天早上在整理笔记的时候,发现了很久之前的有关ajax的相关内容.当时主要用的还是"),a("code",[t._v("jQuery")]),t._v("的"),a("code",[t._v("$.ajax()")]),t._v(".现在"),a("code",[t._v("jQuery")]),t._v("也快要退出历史舞台了,所以今天我们就来讲讲原生的ajax吧.")])]),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("首先简单的介绍一下"),a("code",[t._v("ajax")]),t._v(",全称是"),a("code",[t._v("Asynchronous JavaScript + XML")]),t._v("(异步JavaScript和XML).这不是一个语言,也不是一种新技术,只是一个在2005年被提出来的新术语,其类似的技术手段最早可以追溯到上个世纪末,而最早大规模使用"),a("code",[t._v("ajax")]),t._v("技术的是Gmail.大家都知道,以前的网页提交数据是通过form表单提交的,一提交就要全局刷新,烦得很.虽然后来可以用"),a("code",[t._v("iframe")]),t._v("的方式解决这个问题,但总归是太繁琐了.而"),a("code",[t._v("ajax")]),t._v("则是解决了这个痛点,它通过"),a("code",[t._v("XMLHttpRequest")]),t._v("对象向服务器发送异步请求,获得返回的数据后,再操作DOM来将增量更新呈现在用户界面上,做到无痛刷新.")]),t._v(" "),a("p",[t._v("下面我们来看这段代码,这是一个发送get请求的代码示例,相信大家应该都比较熟悉了吧!其实这还是一个缩减版的代码,在红宝书第3版中,为了所谓的浏览器兼容性,它还多了一步,即选择"),a("code",[t._v("ActiveXObject")]),t._v("对象中的传入值(我们现在传入的是"),a("code",[t._v("Microsoft.XMLHTTP")]),t._v(",其实还有其他的选项).这个太遥远了,现在来看也没有啥太大意义,只是感概一下以前的老程序员不容易啊.浏览器之间神仙打架,程序员之间凡人遭殃.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActiveXObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE5 IE6才有这个对象,是微软独有的,现在基本也没有这俩浏览器了,可以不用管了")]),t._v("\n    xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Microsoft.XMLHTTP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XMLHttpRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现代浏览器基本都有这个")]),t._v("\n    xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化一个XMLHttpRequest")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动阶段,请求还没有发送")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听readyState状态变化")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送阶段")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://jsonplaceholder.typicode.com/posts/1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这里我们的请求链接是"),a("code",[t._v("http://jsonplaceholder.typicode.com/posts/1")]),t._v(",这是一个假数据在线接口(Fake Online REST API).这里给大家安利一个在线工具,"),a("a",{attrs:{href:"http://jsonplaceholder.typicode.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonplaceholder"),a("OutboundLink")],1),t._v(",它上面有很多的接口,允许我们跨域访问获取一些假数据.这个对于我们平时测试啥的也挺方便的.它也支持多种请求方式,除了最基本的"),a("code",[t._v("GET")]),t._v("和"),a("code",[t._v("POST")]),t._v(",其他的像什么"),a("code",[t._v("PUT")]),t._v(","),a("code",[t._v("PATCH")]),t._v("等也都是支持的.")]),t._v(" "),a("p",[a("code",[t._v("open")]),t._v("方法有三个参数,第一个参数表示请求方式,第二个参数表示请求的url,一般我们请求自己所属域的时候,写相对路径即可,在请求访问远程链接的时候才写绝对路径.第三个参数就是是否异步,一般都是异步.这里提一点,get请求也是可以带参数的,叫做"),a("code",[t._v("queryString")]),t._v(",它是一个拼接在url中的字符串.如 "),a("code",[t._v("https://www.xxx.com?name=zhangsan&age=12")]),t._v(" 这个url中,"),a("code",[t._v("name=zhangsan&age=12")]),t._v("就是这个请求带过去的参数.通过"),a("code",[t._v("key=value")]),t._v("的形式表示键值对,每个键值对之间通过"),a("code",[t._v("&")]),t._v("符号连接,第一个键值对之前则有一个"),a("code",[t._v("?")]),t._v(".这里还要介绍另外一个方法: "),a("code",[t._v("encodeURIComponent()")]),t._v(" 这是一个对URI的组成部分进行编码的方法.因为在有效的URL中是不能包含某些字符的,比如像空格之类的.这时我们就可以用这个方法对空格进行转义,会变成"),a("code",[t._v("%20")]),t._v(".我们来看下面例子:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.xxx.com?name=狗子'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://www.xxx.com?")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'狗子'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://www.xxx.com?name=%E7%8B%97%E5%AD%90")]),t._v("\n")])])]),a("p",[t._v("可以看到"),a("code",[t._v("狗子")]),t._v("这两个汉字已经被转义了.")]),t._v(" "),a("p",[a("code",[t._v("onreadystatechange")]),t._v("方法是监听"),a("code",[t._v("readyState")]),t._v("的变化,至于"),a("code",[t._v("readyState")]),t._v("是什么,我们下面会稍微介绍下的.")]),t._v(" "),a("p",[a("code",[t._v("send")]),t._v("方法调用了以后,请求才是被真正的发送出去.此方法里面的参数表示要发送的数据,没有的话我们也要填写"),a("code",[t._v("null")]),t._v(",不然在某些浏览器中可能会报错.下面我们来发送一个post请求")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    userId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json;charset=utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置个请求头呗")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听readyState状态变化")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://jsonplaceholder.typicode.com/posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这里"),a("code",[t._v("post")]),t._v("请求为啥要设置一个请求头? 说实话,我也不是特别清楚,感觉应该和服务器的设置有关.我去查了相关资料,觉得下面的说法最靠谱吧. 因为不加这个,服务器很有可能无法获取到我们发送的信息.我们设置此内容可以确保服务器知道实体中有参数.")]),t._v(" "),a("h2",{attrs:{id:"readystate状态值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readystate状态值"}},[t._v("#")]),t._v(" readyState状态值")]),t._v(" "),a("p",[t._v("这个表示的是ajax请求的状态值,即一个ajax所要经历的几个阶段,无论访问是否成功都将响应.大家可以在上面ajax函数的"),a("code",[t._v("onreadystatechange")]),t._v("事件中打印"),a("code",[t._v("readyState")]),t._v(",并将请求链接随便改成一个不存在的地址既可证明.")]),t._v(" "),a("ul",[a("li",[t._v("0 表示请求未初始化 刚开始就是这个状态,还未调用open()方法")]),t._v(" "),a("li",[t._v("1 启动 此时已经调用了open()方法")]),t._v(" "),a("li",[t._v("2 发送 此时已经调用了send()方法")]),t._v(" "),a("li",[t._v("3 请求接收中 此时已经接受了一部分数据")]),t._v(" "),a("li",[t._v("4 请求完成 数据接受完毕")])]),t._v(" "),a("p",[t._v("这几个状态大家了解一下就行了,不必强行记忆.我们主要关心的状态4,就是此时响应体已经下载完毕,我们可以获取响应体的内容了.通过"),a("code",[t._v("xhr.responseText")]),t._v("来获取,"),a("code",[t._v("responseText")]),t._v("获取的是字符串形式的响应数据.另外还有一个"),a("code",[t._v("responseXML")]),t._v("获取的是XML形式的响应数据,我就没用到过,不去管了 (PS: 虽然感觉没有记住全部状态码的必要,但我以前在学的时候,还是顺带着记忆了一下.我是把发送请求比作是发射火箭的过程,0就是发射前准备阶段,1就是把火箭推出来了,但还没有发射.2就是按下发射按钮,火箭接收到发射命令,起飞了.这里ajax中的调用方法也是"),a("code",[t._v("send")]),t._v(",很形象.3就是火箭升空后返回一些数据的过程,比如高度,速度,燃料情况等,4就是火箭已经进入太空,该返回的数据都返回了,一切正常,大家可以暂时放松一下了.就好像火箭发射,肯定会经历这几个阶段,ajax也一样,都会经历上面的阶段.)")]),t._v(" "),a("h2",{attrs:{id:"http状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),a("p",[t._v("http状态码大家应该都比较熟悉了.像我们最常见的200,表示请求成功了,304表示使用缓存,404表示请求资源不存在以及500一般表示服务器错误等.http状态码有很多,但我们平时使用的估计也就10种不到吧.通常我们可以归纳为如下:")]),t._v(" "),a("ul",[a("li",[t._v("1xx 信息响应类")]),t._v(" "),a("li",[t._v("2xx 处理成功响应")]),t._v(" "),a("li",[t._v("3xx 重定向")]),t._v(" "),a("li",[t._v("4xx 客户端错误")]),t._v(" "),a("li",[t._v("5xx 服务器错误")])]),t._v(" "),a("p",[t._v("具体所有的细节,大家可以在"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("看到.")]),t._v(" "),a("h2",{attrs:{id:"load事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load事件"}},[t._v("#")]),t._v(" load事件")]),t._v(" "),a("p",[t._v("Firefox最早引入的一个事件,用来代替"),a("code",[t._v("readystatechange")]),t._v(",因为此时的"),a("code",[t._v("readyState")]),t._v("已经变成4了.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("除了"),a("code",[t._v("load")]),t._v("事件以外,"),a("code",[t._v("XMLHttpRequest 2级")]),t._v("中还实现了很多其他事件.具体可以参考"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"cors-跨域资源共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-跨域资源共享"}},[t._v("#")]),t._v(" CORS(跨域资源共享)")]),t._v(" "),a("p",[t._v("全称是"),a("code",[t._v("Cros-Origin Resource Sharing")]),t._v(",跨域资源共享.因为浏览器的同源策略,同源策略中的其中一种即是"),a("code",[t._v("XMLHttpRequest同源策略")]),t._v(",它禁止使用XHR对象向不同源的服务器地址发起HTTP请求.一般情况下,只能访问同源的资源,同源指的是协议(protocol),域名(host),端口(port)等都相同.")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("CORS")]),t._v("的介绍,红宝书中是这么说的.它是一个W3C标准,定义了在必须访问跨域资源时,浏览器和服务器之间应该如何沟通.其背后基本思想,就是使用自定义的 HTTP头部让浏览器与服务器进行沟通,从而决定请求或响应是应该成功,还是应该失败.")]),t._v(" "),a("p",[t._v("传统的跨域请求的解决方案基本就是"),a("code",[t._v("JSONP")]),t._v("和"),a("code",[t._v("iframe")]),t._v(".而现在要允许跨域访问,一般我们需要设置"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v(",这是HTML5中定义的一种解决资源跨域的策略.需要浏览器和服务器同时支持.比如 "),a("code",[t._v("Access-Control-Allow-Origin:*")]),t._v(",这里的"),a("code",[t._v("*")]),t._v("表示所有域都能访问,如果只允许某个特定域访问的话,则设置如下:"),a("code",[t._v("Access-Control-Allow-Origin:http://www.xxx.com")]),t._v(",表示只有"),a("code",[t._v("http://www.xxx.com")]),t._v("这个网址下的可以正常访问该服务器,对于其他没有该标识的域则会提示禁止访问.当服务器返回的资源中加入了"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("头标识后,浏览器才允许跨域访问.我们来看下jsonplaceholder返回的响应头信息.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-1257233417.cos.ap-nanjing.myqcloud.com/response_header.png",alt:"response_header"}})]),t._v(" "),a("p",[t._v("当然还有一种解决跨域问题的方案就是使用代理服务器,现在我们公司项目都是前后端分离的,在vue项目中,基本都自带了http服务器.在配置项中的"),a("code",[t._v("proxyTable")]),t._v("中进行设置即可.")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("其实现在基本不太会有人还在项目中使用原生ajax了.大部分人用的应该还是"),a("code",[t._v("jQuery")]),t._v("或者"),a("code",[t._v("Axios")]),t._v("等.我们今天讲原生ajax,主要还是为了巩固下相关知识点.我上面讲的东西,相信大家当初应该都学过,只是时间久了可能会忘,所以今天我们只是回顾下.所谓温故而知新,可以为师矣.\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200629173804276.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21vZ3V6aGFsZQ==,size_16,color_FFFFFF,t_70",alt:"ajax"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);