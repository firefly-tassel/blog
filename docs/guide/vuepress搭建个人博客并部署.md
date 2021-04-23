# vuepress搭建个人博客并部署

> 想要快速搭建自己的个人博客,记录自己的工作学习心得,争取当一条有梦想的咸鱼

相信大家都了解过vue这个框架.而今天,我们的主角`vuepress` 就是vue的作者`尤大大`的一个作品.开源于大概2年前,其本意是用来为vue及其子项目写文档,现在被大部分人用来搭建个人博客.之前一直有所耳闻,vuepress可以搭建博客,但也只是有所耳闻罢了,这回趁着五一在家休息的时间,简单的学了下vuepress的用法。
今天在这里,我会从头一步步的将我的代码展示给大家看,如何从0开始搭建一个个人博客,并且部署到线上。传统的部署需要我们去购买服务器,域名,还需要做域名解析,备案之类的事情,往往需要一段时间才能完成。今天我们将使用部署工具 `CloudBase Framework` 来一键部署应用。


## 搭建
### 初始化创建
首先,我们在终端输入以下命令,来创建一个空文件夹并且进入到这个文件夹
```
mkdir myblog && cd $_
```
初始化我们的项目
```
yarn init -y
```
接着是安装我们的依赖vuepress
```
yarn add -D vuepress
```
安装好依赖以后,我们可以在终端键入
```
mkdir docs
echo '# This is my blog' > docs/README.md
```
那么就可以看到在项目中有个docs的文件夹了,并且里面有个README.md的文件.
接下来我们来启动我们的项目,vuepress 提供了如下命令来启动和打包我们的项目

```
vuepress dev docs
vuepress build docs
```

我们在 package.json 中来创建两个简单的命令来代替上面的指令

```
{
  "scripts": {
    "dev": "vuepress dev docs", //启动项目
    "build": "vuepress build docs" // 编译项目
  }
}
```

至此,我们就可以通过``yarn dev`` 来启动项目了,这时打开网址可以看到我们的项目已经运行成功了。


### 配置项目
接下来就是来配置我们的项目结构了,如标题,导航之类的.vuepress有个`"约定大于配置"`的思想在里面,就是说很多东西,作者已经给我们都设置好了,我们只要按照作者提供的文档一步步将我们的东西填入其中,就可以完成我们想要的东西。
我们在docs文件夹中新创建一个 `.vuepress` 文件夹 ,并在其中新建一个`config.js` 配置文件:

```
module.exports = {
    title: '裴洪泽的个人博客',
    keywords: '前端开发',
    description: '前端开发 裴洪泽的个人博客',
    repo: 'https://gitee.com/firefly-tassel',
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'JS', link: '/js_docs/' },
            { text: 'CSS', link: '/css_docs/' },
            { text: 'Vue', link: '/vue_docs/' },
            { text: 'Node', link: '/node_docs/' },
            { text: 'Dart', link: '/dart/' },
            { text: 'guide', link: '/guide/' },
            {
                text: '2021',
                ariLabel: '2021',
                items: [
                    { text: 'March', link: '/2021/3/' },
                    { text: 'April', link: '/2021/4/' }
                ]
            },
            { text:'other',link:'/other/' },
            { text: 'GitHub', link: 'https://gitee.com/firefly-tassel' }
        ],
        sidebar: {
            '/js_docs/':[
               '',
               'JS精度问题',
               'Set数据结构',
               'Map数据结构',
               'with语法',
               'void 0与undefined的关系',
               '浅谈基本包装类型',
               'js中容易忽略的参数',
               'new的时候干了啥',
               'JS调用函数的4种方式',
               '一文了解this指向',
               '函数防抖和节流',
               'EventTarget介绍',
               '深拷贝和浅拷贝了解一下',
               '原型和原型链',
               'JS生成UUID的多种方式',
               'JSON中的stringify方法',
               '一网打尽JS中的循环和遍历',
               '函数的形参和实参',
               '使用原生js实现一个回到顶部的功能',
               '5分钟回顾原生ajax的几个知识点',
               '10分钟回顾Location对象的几个知识点',
               'DOM操作常用API总结',
               'JavaScript的执行机制',
               '多种方式实现前端图片下载',
               '快来和fetch玩耍吧',
               'Storage对象',
               'instanceof和typeof原理回顾'
            ],
            '/css_docs/':[
              '',
              '一些css片段',
              '鼠标点击水波效果',
              '小球来回滚动',
              '纯css实现一个菜单的隐藏显示功能',
              'CSS媒体查询',
              '三角形的css画法'
            ],
            '/guide/':[
                '',
                'vuepress搭建个人博客并部署',
            
            ],
            '/2021/':[
                ['/2021/3/', '三月份'],
                ['/2021/4/', '四月份'],  
            ],
            '/other/':[
                '',
                'tool',
                'Git常用指令',
                'Markdown语法',
                'npm发包流程',
                '发行ERC20代币',
                'Flutter构建Android包',
                '简简单单的来入个deno的门吧',
                '移动端300ms延迟以及点击穿透',
                '来了解下字符编码的历史吧'
            ],
            '/vue_docs/':[
                 '',
                 '数据响应式'
            ],
            '/node_docs/':[
                '',
                'node发送邮件',
                'exports和module.exports',
            ],
            '/dart/':[
                '',
                '变量和类型',
                '函数',
                '运算符和控制流程语句',
                '类',
                '其他'
            ]
        }
    }
}
```

在写了上面的配置之后,要记得在.vuepress文件夹中新建一个`public`文件夹,将我们的图片资源放入其中.我们在引用图片资源的时候,都是以其为根目录的.此时可以看到我们的项目已经变成下面的样子,已经有了顶部的导航栏.点击2021,可以看到还有下拉框,点击下拉框中的选项还能看到连侧边栏都已经有了。


### 配置首页结构
不知道大家到这里有没有发现,这个界面和vue,vuepress的官网有点像.没错,他们就是用vuepress来写的,前面也提到了,vuepress设计之初就是为了写文档,QAQ。
现在看主页的内容是不是太空白了点呢,我们来给他添加点东西吧。
我们将刚开始创建的README.md文件内容改成如下:
```
---
home: true
heroImage: /img/banner.png
heroText: 裴洪泽的日常记录
tagline: 喜欢打王者,只会法师
features:
---
```
至此,基本的页面布局已经差不多了。


## 部署


####  如何方便快速部署?
云开发 CloudBase (opens new window)是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 CloudBase Framework (opens new window)来一键部署应用。

1、全局安装 CloudBase CLI

```
npm install -g @cloudbase/cli
```

2、在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 开通环境 (opens new window)：

```
cloudbase init --without-template
cloudbase framework:deploy
```

CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认

确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 Github Action 来持续部署 Github 上的 VuePress 应用。

也可以使用 ```cloudbase init --template vuepress``` 快速创建和部署一个新的 VuePress 应用

>项目地址: 
[https://gitee.com/firefly-tassel/alibaba/tree/master/%E7%A0%94%E5%8F%91%E6%B5%81%E7%A8%8B%E7%AE%80%E4%BB%8B/myblog](https://gitee.com/firefly-tassel/alibaba/tree/master/%E7%A0%94%E5%8F%91%E6%B5%81%E7%A8%8B%E7%AE%80%E4%BB%8B/myblog)
可直接下载源代码运行以查看效果