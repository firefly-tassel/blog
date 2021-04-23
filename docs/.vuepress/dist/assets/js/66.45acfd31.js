(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{423:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deno入门指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deno入门指南"}},[e._v("#")]),e._v(" deno入门指南")]),e._v(" "),a("blockquote",[a("p",[e._v("前不久, deno1.0 正式发布,相信大家应该都已经听过它了.毕竟deno的作者正是大名鼎鼎的nodeJS之父Ryan Dahl.他在之前声称node已经无力回天了,所以他决定新写一个deno.意为destroy node.通俗的说就是一个号练废了,现在要重新练一个号.")])]),e._v(" "),a("p",[e._v("deno怎么发音,有说"),a("code",[e._v("蒂诺")]),e._v("的,有说"),a("code",[e._v("德诺")]),e._v("的.为此,我特意去YouTube上听了下deno作者的发音,"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=z6JRlx5NC9E",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接戳我"),a("OutboundLink")],1),e._v(",但我怎么感觉听着更像是"),a("code",[e._v("呆诺")]),e._v("呢? 各位同学可以自行爱好发音.")]),e._v(" "),a("h2",{attrs:{id:"deno特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deno特性"}},[e._v("#")]),e._v(" deno特性")]),e._v(" "),a("p",[e._v("Deno是使用V8引擎并内置于Rust的一个简单现代并且安全的JavaScript和TypeScript运行时(Tips: 原先是用golang开发的,后来因为性能问题改用Rust)\n这里简单的列了一下其中的一些特性:")]),e._v(" "),a("ol",[a("li",[e._v("默认为安全,除非明确启用,否则没有文件,网络或环境访问权限")]),e._v(" "),a("li",[e._v("开箱即用的支持TypeScript")]),e._v(" "),a("li",[e._v("仅发送一个可执行文件")]),e._v(" "),a("li",[e._v("具有内置的实用程序,如依赖检查器和代码格式化(fmt)")]),e._v(" "),a("li",[e._v("拥有一组保证能够与deno一起使用的经过审核的标准模块:"),a("a",{attrs:{href:"https://deno.land/std",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接戳我"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("p",[e._v("因为我自己是macOS系统,所以国际惯例使用homebrew来安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("brew install deno\n")])])]),a("p",[e._v("window系统的安装方式")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("choco install deno\n")])])]),a("p",[e._v("还有其他的安装方式,可以自行查看: "),a("a",{attrs:{href:"https://deno.land/#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何安装"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"测试安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试安装"}},[e._v("#")]),e._v(" 测试安装")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("deno --version\n")])])]),a("p",[e._v("如果打印了deno的版本号则证明已经安装成功了\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a2097f729f4?w=217&h=84&f=png&s=7062",alt:"在这里插入描述"}}),e._v("\n我这边是打印出了deno, v8引擎以及ts的版本号")]),e._v(" "),a("h2",{attrs:{id:"更新deno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新deno"}},[e._v("#")]),e._v(" 更新deno")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("deno upgrade\n")])])]),a("p",[e._v("如果想要更新到某一个特定的版本,那就")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("deno upgrade --version 1.0.1\n")])])]),a("p",[e._v("但是这个更新的速度实在是太...\n所以,有时候还是选择手动下包吧,自己动手,丰衣足食 "),a("a",{attrs:{href:"https://github.com/denoland/deno/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接戳我"),a("OutboundLink")],1),e._v(".将下载下来的包解压缩后,替换原来的可执行文件即可.\n这里可以看到我的deno版本已经更新了.\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a2098ebfcab?w=186&h=79&f=png&s=7508",alt:"在这里插入图片描述"}})]),e._v(" "),a("h2",{attrs:{id:"查看命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看命令行"}},[e._v("#")]),e._v(" 查看命令行")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("deno --help\n")])])]),a("p",[e._v("基本上的环境都有 "),a("code",[e._v("--help")]),e._v("的指令,方便我们查看相关的指令.这里我们也是照例来简单瞧一瞧都有哪些信息.\n在输出结果中,我们可以看到除了常用命令外,它还告诉了我们该如何执行一个脚本")]),e._v(" "),a("h2",{attrs:{id:"运行远程文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行远程文件"}},[e._v("#")]),e._v(" 运行远程文件")]),e._v(" "),a("p",[e._v("接下来让我们来运行下"),a("code",[e._v("help")]),e._v("信息中展示给我们看的代码:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("deno run https://deno.land/std/examples/welcome.ts\n")])])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a209b3638aa?w=467&h=80&f=png&s=16609",alt:"在这里插入图片描述"}}),e._v("\n可以看到当我第一次运行代码的时候,它是先下载,然后再编译.\n此时我们再次运行下代码,发现就只是直接编译了.\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a209f88cd6b?w=475&h=62&f=png&s=12516",alt:"在这里插入图片描述"}}),e._v("\n这是因为通过外部地址引入的文件或库,在第一次下载后都会缓存在本地,所以第二次就不下载,而是直接编译了.\n我们可以看到在终端输出了 "),a("code",[e._v("Welcome to Deno 🦕")]),e._v("这句话.我们打开上面的"),a("a",{attrs:{href:"https://deno.land/std/examples/welcome.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("网址"),a("OutboundLink")],1),e._v("可以看到它上面的代码就只有一行\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a209e2ef4cd?w=1116&h=350&f=png&s=49382",alt:"在这里插入图片描述"}}),e._v("\n这个可爱的图标就是一只小恐龙,因为deno的标志就是一只恐龙呀")]),e._v(" "),a("h2",{attrs:{id:"运行本地文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行本地文件"}},[e._v("#")]),e._v(" 运行本地文件")]),e._v(" "),a("p",[e._v("我们新建一个"),a("code",[e._v("index.ts")]),e._v("文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("console.log('hello deno');\n")])])]),a("p",[e._v("运行下该文件"),a("code",[e._v("deno run index.ts")]),e._v("\n终端输出了"),a("code",[e._v("hello deno")]),e._v(",证明我们的本地文件也已经运行起来了")]),e._v(" "),a("h2",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[e._v("#")]),e._v(" 权限")]),e._v(" "),a("h3",{attrs:{id:"文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[e._v("#")]),e._v(" 文件权限")]),e._v(" "),a("p",[e._v("我们修改代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("console.log(Deno.cwd());\n")])])]),a("p",[e._v("再次执行文件,会报错")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Uncaught PermissionDenied: read access to "/Users/xxx/code/deno/deno_test", run again with the --allow-read flag\n')])])]),a("p",[e._v("这是因为deno的安全策略(即上面的"),a("code",[e._v("特性1")]),e._v("),默认是没有文件,网络或环境访问权限的,除非我们明确启用.于是我们加上"),a("code",[e._v("--allow-read")]),e._v("参数,再次执行"),a("code",[e._v("deno run --allow-read index.ts")]),e._v(" 可以看到我们的文件路径已经打印出来了.")]),e._v(" "),a("h3",{attrs:{id:"网络权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络权限"}},[e._v("#")]),e._v(" 网络权限")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("fetch('https://jsonplaceholder.typicode.com/todos/1')\n  .then(response => response.json())\n  .then(json => console.log(json))\n")])])]),a("p",[e._v("执行运行命令"),a("code",[e._v("deno run index.ts")]),e._v(",报错")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('error: Uncaught PermissionDenied: network access to "https://jsonplaceholder.typicode.com/todos/1", run again with the --allow-net flag\n')])])]),a("p",[e._v("重新执行命令"),a("code",[e._v("deno run --allow-net index.ts")]),e._v(", 可以看到输出结果了")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{ userId: 1, id: 1, title: "delectus aut autem", completed: false }\n')])])]),a("h2",{attrs:{id:"编辑器插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑器插件"}},[e._v("#")]),e._v(" 编辑器插件")]),e._v(" "),a("p",[e._v("前面我们提到了引用外部库的时候,第一次是会下载的,那么我们下载下来的文件在什么地方呢?这里我使用的编辑器是"),a("code",[e._v("VSCode")]),e._v(",我们可以安装一个插件"),a("code",[e._v("Deno")]),e._v(".\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a20a02161ec?w=856&h=149&f=png&s=37403",alt:"在这里插入图片描述"}}),e._v("\n安装好以后,我们只要将鼠标放到引入的url上,它就会显示这个文件在我们本地的位置.\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a20b7967ed0?w=349&h=148&f=png&s=22904",alt:"在这里插入图片描述"}})]),e._v(" "),a("h2",{attrs:{id:"内置工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置工具"}},[e._v("#")]),e._v(" 内置工具")]),e._v(" "),a("p",[e._v("可以对照"),a("code",[e._v("特性4")]),e._v(",我们先来看原代码\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a20b60ad22d?w=520&h=115&f=png&s=17518",alt:"在这里插入图片描述"}}),e._v("\n执行命令后:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("deno fmt index.ts\n")])])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a20bd77b652?w=532&h=100&f=png&s=17134",alt:"在这里插入图片描述"}}),e._v("\n可以看到代码中开头的空格已经没了")]),e._v(" "),a("h2",{attrs:{id:"引入标准库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入标准库"}},[e._v("#")]),e._v(" 引入标准库")]),e._v(" "),a("p",[e._v("我们执行上图中的代码,输出如下:\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17236a20c191ca92?w=156&h=71&f=png&s=8701",alt:"在这里插入图片描述"}}),e._v("\n这也印证了"),a("code",[e._v("特性5")]),e._v(",deno拥有一些标准库.")]),e._v(" "),a("p",[e._v("当然除了官方的标准库以外,还有第三方库,可以在这里看到"),a("a",{attrs:{href:"https://deno.land/x",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接戳我"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[e._v("总结:")]),e._v(" deno简单的入门差不多就到这里了,对deno已经有了一个大致的概念.我估计大部分的人可能在未来的几年里面,工作中都用不到这个.宝宝心里苦啊😭,node还没学会,现在就要毁灭node了.")])])}),[],!1,null,null,null);t.default=n.exports}}]);