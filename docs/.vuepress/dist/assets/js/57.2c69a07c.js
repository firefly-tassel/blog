(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{415:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git常用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git常用指令"}},[a._v("#")]),a._v(" Git常用指令")]),a._v(" "),s("h2",{attrs:{id:"项目初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化"}},[a._v("#")]),a._v(" 项目初始化")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git init\n")])])]),s("p",[a._v("项目初始化之后会生成一个.git文件,如果看不见,可能是因为电脑隐藏了以.开头的文件")]),a._v(" "),s("h2",{attrs:{id:"项目关联"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目关联"}},[a._v("#")]),a._v(" 项目关联")]),a._v(" "),s("h3",{attrs:{id:"克隆项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆项目"}},[a._v("#")]),a._v(" 克隆项目")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git clone xxxx // xxxx 表示项目地址\n")])])]),s("p",[a._v("表示从远程仓库拉取项目到本地")]),a._v(" "),s("h3",{attrs:{id:"本地项目关联远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地项目关联远程仓库"}},[a._v("#")]),a._v(" 本地项目关联远程仓库")]),a._v(" "),s("p",[a._v("如果我们本地是有项目的,我们想要的是将本地的项目和远程仓库关联起来,那么有如下两种情况")]),a._v(" "),s("ul",[s("li",[a._v("本地已有文件与git仓库关联起来(空仓库)")]),a._v(" "),s("li",[a._v("本地已有文件与git仓库关联起来(非空仓库:比如有README.md)")])]),a._v(" "),s("p",[a._v("我们先来看第一种,它的流程是这样的:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git init\ngit remote add origin xxxx\ngit add .\ngit commit -m 'init'\ngit push --set-upstream origin master 或者 git push -u origin master \n")])])]),s("p",[a._v("第二种非空仓库的情况:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git init\ngit remote add origin xxxx\ngit add .\ngit commit -m 'init'\ngit pull origin master --allow-unrelated-histories\n//若有冲突,先解决冲突\ngit push --set-upstream origin master\n")])])]),s("p",[a._v("可以看出来这两种情况只有在第5步的时候才是有区别的.")]),a._v(" "),s("p",[a._v("在上面的commit到本地仓库后,如果直接推送,它会报错:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("refusing to merge unrelated histories\n")])])]),s("p",[a._v("意思就是拒绝合并没有历史关系的分支,我们用下面的代码解决这个问题")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git pull origin master --allow-unrelated-histories\n")])])]),s("p",[a._v("我们允许拉取没有历史关系的分支,这步也就是我们代码的第5步")]),a._v(" "),s("h2",{attrs:{id:"分支操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[a._v("#")]),a._v(" 分支操作")]),a._v(" "),s("h3",{attrs:{id:"查看分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[a._v("#")]),a._v(" 查看分支")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch  //查看本地分支\ngit branch -r //远程分支\ngit branch -a  //本地+远程\ngit brnahc -v  //分支最后一次提交的信息\n")])])]),s("p",[a._v("在实际项目开发中,往往会有多个任务并行开发,因此从一个基础分支拉取不同分支进行代码编写是常有的事情.")]),a._v(" "),s("h3",{attrs:{id:"切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[a._v("#")]),a._v(" 切换分支")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch <BranchName>  //  创建本地分支\ngit checkout <BranchName> //切换到对应分支\ngit checkout -b<BranchName>r  //创建并切换到对应分支\n")])])]),s("h3",{attrs:{id:"拉取分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取分支"}},[a._v("#")]),a._v(" 拉取分支")]),a._v(" "),s("p",[a._v("将远程git仓库里的指定分支拉取到本地（本地不存在的分支）")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout -b 本地分支名 origin/远程分支名\n")])])]),s("h3",{attrs:{id:"删除分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[a._v("#")]),a._v(" 删除分支")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch -d <BranchName>  //删除本地分支\ngit push origin :<BranchName>(origin后面有空格)  //删除远程分支\n")])])]),s("h3",{attrs:{id:"创建本地新分支并推送到远程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建本地新分支并推送到远程"}},[a._v("#")]),a._v(" 创建本地新分支并推送到远程")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout -b branch1 //创建本地新分支并切换到对应的分支\ngit push --set-upstream origin branch1\n")])])]),s("h3",{attrs:{id:"暂存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暂存"}},[a._v("#")]),a._v(" 暂存")]),a._v(" "),s("p",[a._v("有时候,我们想要切换分支,但是又不想将当前分支代码提交到本地或远程仓库,直接切换过去的话代码会被覆盖,这时候我们可以使用暂存功能")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git stash //存\ngit stash pop //取出暂存\n")])])]),s("h2",{attrs:{id:"提交操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交操作"}},[a._v("#")]),a._v(" 提交操作")]),a._v(" "),s("h3",{attrs:{id:"代码提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码提交"}},[a._v("#")]),a._v(" 代码提交")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git add .  \ngit commit -m 'commit message'\ngit push \n")])])]),s("p",[a._v("提交的时候,可以输入emoji表情,可爱又有趣,别人一眼看过来就知道你提交的是关于什么")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(":bug: //修复BUG\n:lipstick: //更新样式\n:lock: //解决安全问题\n:recycle: //重构\n:sparkles: //添加新功能\n")])])]),s("h3",{attrs:{id:"查看提交历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[a._v("#")]),a._v(" 查看提交历史")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git log\ngit log -3 //显示最近3次的更新\n")])])]),s("h3",{attrs:{id:"本地代码回滚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地代码回滚"}},[a._v("#")]),a._v(" 本地代码回滚")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git reset --hard commit-id //回滚到commit-id \ngit reset --hard HEAD~3 //将最近三次的提交回滚\ngit reset --hard HEAD^ //将本地代码回退到上一个版本\n")])])]),s("h3",{attrs:{id:"标签功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签功能"}},[a._v("#")]),a._v(" 标签功能")]),a._v(" "),s("p",[a._v("有时候,我们的项目上线了,我们就需要标签功能,记录我们的版本")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git tag //显示已有的标签\ngit tag v1.0.1 //创建一个轻量级标签 \ngit tag -a v1.0.2 -m ‘release version’ //创建一个带有标注的标签\ngit tag -d tag_name //删除标签\ngit push //并不会把tag标签传送到远端服务器上,只有通过显式命令才能分享标签到远端仓库\ngit push origin tag_name //push单个tag \ngit push origin --tags //推送所有本地新增的标签 \n")])])]),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("h3",{attrs:{id:"config配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config配置"}},[a._v("#")]),a._v(" config配置")]),a._v(" "),s("p",[a._v("最后我们来说一下config配置")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git config --global user.name  //查看全局配置的用户名\ngit config --global user.email  //查看全局配置的邮箱\ngit config --global user.name 'zhangsha'  //配置全局的用户名\ngit config --global user.email 'xx@xx.com'  //配置全局的邮箱\n//下面是针对单独的项目进行配置和查看\ngit config user.name 'lisi'  //配置当前项目的用户名\ngit config user.name  //查看当前项目的用户名\ngit config --list  //查看多个配置\n")])])]),s("p",[a._v("配置分为全局配置和项目配置,没有对项目进行单独配置的时候,会默认使用全局的配置.如果我们在一个项目中进行了单独的配置,那么就会使用项目中配置.这个选项在你切换不同项目(比如公司和个人项目)的时候,可以起到一定的作用.")])])}),[],!1,null,null,null);t.default=r.exports}}]);