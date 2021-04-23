(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{390:function(a,e,s){"use strict";s.r(e);var t=s(42),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"es6-map-数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-map-数据结构"}},[a._v("#")]),a._v(" ES6 Map 数据结构")]),a._v(" "),s("blockquote",[s("p",[a._v("js对象本质上是键值对的集合,但是只能用字符串作为键,虽然在定义的时候可以使用"),s("code",[a._v("Number")]),a._v("或者"),s("code",[a._v("Boolean")]),a._v("类型作为键名,但是却会改变它的类型")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const obj = {\n  true:'value1',\n  2:'value2'\n}\nconsole.log(Object.keys(obj))  // [\"2\", \"true\"]\n")])])]),s("p",[a._v("发现 obj 这个对象的key已经全部都变成了字符串,那么,当我们不想要改变这个key的类型的时候,有没有什么办法呢?有的,那就是今天我们的主人公 "),s("code",[a._v("Map")]),a._v(" 以及它的兄弟 "),s("code",[a._v("WeakMap")])]),a._v(" "),s("h2",{attrs:{id:"map先来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map先来"}},[a._v("#")]),a._v(" Map先来")]),a._v(" "),s("p",[a._v("话不多说,先来一波代码,直接copy到浏览器上去看效果.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const keyName = {name:'key'}\nconst arr = [\n  ['name','zhangsan'],\n  ['age',18],\n  [keyName,'kkk']\n]\nconst map0 = new Map(arr)\nconsole.log(map0)  // {\"name\" => \"zhangsan\", \"age\" => 18, {…} => \"kkk\"}\n\nconst map = new Map()\nmap.set('name','zhangsan')\nconsole.log(map)  // Map(1) {\"name\" => \"zhangsan\"}\nmap\n  .set('prop1','value1')\n  .set('prop2','value')\n  .set('prop2','value2')\nconsole.log(map)  // Map(3) {\"name\" => \"zhangsan\", \"prop1\" => \"value1\", \"prop2\" => \"value2\"}\nconsole.log(map.has('prop2'))  // true\nconsole.log(map.has('prop3'))  // false\nconsole.log(map.get('prop2'))  // value2\nconsole.log(map.get('prop3'))  // undefined\n\nconsole.log(map.size)  // 3\nlet isSuccess = map.delete('prop2')\nconsole.log(isSuccess)  // true\nlet isSuccess2 = map.delete('prop3')\nconsole.log(isSuccess2)  // false\n\nconsole.log(map.size)  // 2\nlet s = map.clear()\nconsole.log(map.size) // 0\n")])])]),s("p",[a._v("可以看出"),s("code",[a._v("Map")]),a._v("是一种数据结构.类似于对象,也是键值对的集合,但是键名的范围更加的广阔,所有的数据类型都可以.\n下面我们来一段一段分析以上的代码:")]),a._v(" "),s("h4",{attrs:{id:"生成一个map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成一个map"}},[a._v("#")]),a._v(" 生成一个map")]),a._v(" "),s("ol",[s("li",[a._v("方法1(实例化传参)")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const keyName = {name:'key'}\nconst arr = [\n  ['name','zhangsan'],\n  ['age',18],\n  [keyName,'kkk']\n]\nconst map0 = new Map(arr)\nconsole.log(map0)  // {\"name\" => \"zhangsan\", \"age\" => 18, {…} => \"kkk\"}\n")])])]),s("p",[a._v("这里是将一个二维数组当作参数在 "),s("code",[a._v("Map")]),a._v("实例化的时候传入,这是设置"),s("code",[a._v("Map")]),a._v("的一种方式.")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("方法2 (使用"),s("code",[a._v("Map")]),a._v("的 "),s("em",[a._v("set")]),a._v(" 方法)")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const map = new Map()\nmap.set('name','zhangsan')\nconsole.log(map)  // Map(1) {\"name\" => \"zhangsan\"}\nmap\n  .set('prop1','value1')\n  .set('prop2','value')\n  .set('prop2','value2')\nconsole.log(map)  // Map(3) {\"name\" => \"zhangsan\", \"prop1\" => \"value1\", \"prop2\" => \"value2\"}\n")])])]),s("p",[a._v("这里还可以看出 "),s("code",[a._v("Map")]),a._v("还支持链式调用,因为"),s("em",[a._v("set")]),a._v(" 方法返回的是当前的Map对象")]),a._v(" "),s("h4",{attrs:{id:"判断map中是否有某个属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断map中是否有某个属性"}},[a._v("#")]),a._v(" 判断map中是否有某个属性")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("console.log(map.has('prop2'))  // true\nconsole.log(map.has('prop3'))  // false\n")])])]),s("h4",{attrs:{id:"获取map中的某个属性值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取map中的某个属性值"}},[a._v("#")]),a._v(" 获取map中的某个属性值")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("console.log(map.get('prop2'))  // value2\nconsole.log(map.get('prop3'))  // undefined\n")])])]),s("h4",{attrs:{id:"获取map中的长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取map中的长度"}},[a._v("#")]),a._v(" 获取map中的长度")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("console.log(map.size)  // 3\n")])])]),s("h4",{attrs:{id:"删除map中的键值对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除map中的键值对"}},[a._v("#")]),a._v(" 删除map中的键值对")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isSuccess = map.delete('prop2')\nconsole.log(isSuccess)  // true\nlet isSuccess2 = map.delete('prop3')\nconsole.log(isSuccess2)  // false\n")])])]),s("p",[a._v("返回一个"),s("code",[a._v("Boolean")]),a._v("类型的值,如果原本存在这个属性,那么删除成功后返回 "),s("code",[a._v("true")]),a._v(",否则返回 "),s("code",[a._v("false")]),a._v("\n此时再运行一下如下代码,发现结果已经变成2了,说明我们已经成功删除了一个键值对")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("console.log(map.size)  // 2\n")])])]),s("h4",{attrs:{id:"清除map所有的键值对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除map所有的键值对"}},[a._v("#")]),a._v(" 清除map所有的键值对")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let s = map.clear()\nconsole.log(map.size) // 0\n")])])]),s("p",[a._v("调用 "),s("em",[a._v("clear")]),a._v(" 方法后再次查看map的长度,发现就变成0了")]),a._v(" "),s("h4",{attrs:{id:"q-a-是否看上去长的一样的就是同一个键值对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-a-是否看上去长的一样的就是同一个键值对"}},[a._v("#")]),a._v(" Q&A:是否看上去长的一样的就是同一个键值对?")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("map.set([1],1)\nconsole.log(map.get([1]))  // undefined\nconst arr2 = [2]\nmap.set(arr2,1)\nconsole.log(map.get(arr2))  // 1\n")])])]),s("blockquote",[s("p",[a._v("由此可以看出,只有对同一个对象的引用,Map结构才将其视为同一个键, 上面中的 [1] 看似值是相同的,但是内存地址是不一样的.所以,Map的键实际上是和内存地址绑定的,不同的内存地址视为不同的键")])]),a._v(" "),s("h4",{attrs:{id:"总结-map的方法和属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结-map的方法和属性"}},[a._v("#")]),a._v(" 总结:"),s("code",[a._v("Map")]),a._v("的方法和属性")]),a._v(" "),s("h5",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[a._v("#")]),a._v(" 方法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("map.set(key,value)\nmap.get(key)\nmap.has(key)\nmap.delete(key)\nmap.clear()\n")])])]),s("h5",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[a._v("#")]),a._v(" 属性")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("map.size\n")])])]),s("h4",{attrs:{id:"map的3个遍历器生成函数和1个遍历方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map的3个遍历器生成函数和1个遍历方法"}},[a._v("#")]),a._v(" Map的3个遍历器生成函数和1个遍历方法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const map = new Map([\n  ['name','zhangsan'],\n  ['age',18]\n])\n")])])]),s("h5",{attrs:{id:"keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[a._v("#")]),a._v(" keys()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("for (let key of map.keys()){\n  console.log(key)\n}\n// 'name'\n// 'age'\n")])])]),s("h5",{attrs:{id:"values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#values"}},[a._v("#")]),a._v(" values()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("for (let value of map.values()){\n  console.log(value)\n}\n// 'zhangsan'\n// 18\n")])])]),s("h5",{attrs:{id:"entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entries"}},[a._v("#")]),a._v(" entries()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('for (let item of map.entries()){\n  console.log(item)\n}\n// ["name", "zhangsan"]\n// ["age", 18]\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('for (let item of map){\n  console.log(item)\n}\n// ["name", "zhangsan"]\n// ["age", 18]\n')])])]),s("p",[a._v("上面最后两段代码可以看出 Map结构的默认遍历器接口就是 entries 方法")]),a._v(" "),s("h5",{attrs:{id:"foreach-map-本身没有map和filter方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach-map-本身没有map和filter方法"}},[a._v("#")]),a._v(" forEach() (map 本身没有map和filter方法)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("map.forEach((value, key, map) => {\n  console.log('key: %s, value: %s', key, value)\n})\n// key: name, value: zhangsan\n// key: age, value: 18\n")])])]),s("h4",{attrs:{id:"与其他数据结构的互转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与其他数据结构的互转"}},[a._v("#")]),a._v(" 与其他数据结构的互转")]),a._v(" "),s("ul",[s("li",[a._v("Map => Array")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('const arr = [...map]\nconsole.log(arr)  // [["name", "zhangsan"],["age", 18]]\n')])])]),s("ul",[s("li",[a._v("Array => Map")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('const map2 = new Map(arr)\nconsole.log(map2)  // Map(2) {"name" => "zhangsan", "age" => 18}\n')])])]),s("ul",[s("li",[a._v("Map => Object")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('// 如果Map的所有键都是字符串可以转为对象\nconst obj = {}\nfor(let [k,v] of map2){\n  obj[k] = v\n}\nconsole.log(obj)  // {name: "zhangsan", age: 18}\n')])])]),s("ul",[s("li",[a._v("Object => Map")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('let map3 = new Map()\nfor(let k of Object.keys(obj)){\n  map3.set(k,obj[k])\n}\nconsole.log(map3)  // Map(2) {"name" => "zhangsan", "age" => 18}\n')])])]),s("h2",{attrs:{id:"weakmap跟上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weakmap跟上"}},[a._v("#")]),a._v(" WeakMap跟上")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("const wMap = new WeakMap()\nconst obj = {}\nlet valueObj = {name:'wang'}\nwMap.set(obj,valueObj)\nconsole.log(wMap.get(obj))  // {name: \"wang\"}\nwMap.set('name','lisi')  // Uncaught TypeError: Invalid value used as weak map key\n")])])]),s("p",[a._v("说明 WeakMap 的键不能是除了对象外的其他类型,否则会报错\n"),s("strong",[a._v("注意:")]),a._v(" "),s("code",[a._v("WeakMap()")]),a._v(" 只有4个方法可用: "),s("code",[a._v("get()")]),a._v(" "),s("code",[a._v("set()")]),a._v(" "),s("code",[a._v("has()")]),a._v(" "),s("code",[a._v("delete()")]),a._v(".这是因为某个键名是否存在是不确定的,和GC有关,所以没有 "),s("code",[a._v("size")]),a._v("属性,没有 "),s("code",[a._v("clear()")]),a._v("   也没有遍历的方法")]),a._v(" "),s("h2",{attrs:{id:"与map的区别主要有两点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与map的区别主要有两点"}},[a._v("#")]),a._v(" 与Map的区别主要有两点")]),a._v(" "),s("blockquote",[s("p",[a._v("1.WeakMap的键只能是对象(null除外)\n2.WeakMap的键名所指向的对象不计入垃圾回收机制.即它的键名所引用的对象都是弱引用,只要所引用的对象的其他引用都被清除,GC就会释放该对象所占用的内存,不再需要手动删除引用")])]),a._v(" "),s("p",[a._v("WeakMap的适用范围也是多样的,一个典型的例子就是可以注册监听事件,好处是一旦DOM对象消失,与之绑定的监听函数也就自动消失了,不再占用内存")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let div1 = document.querySelector('#div1')\nconst listener = new WeakMap()\nfunction fn(){\n  console.log('click')\n}\nlistener.set(div1,fn)\ndiv1.addEventListener('click',listener.get(div1))\n")])])]),s("p",[s("strong",[a._v("注:")]),a._v(" 另有一篇文章 "),s("a",{attrs:{href:"https://juejin.im/post/5e561a136fb9a07caf445c44",target:"_blank",rel:"noopener noreferrer"}},[a._v("ES6 Set 数据结构"),s("OutboundLink")],1),a._v(" 讲的主要是ES6中的另外一个新的数据结构"),s("code",[a._v("Set")])])])}),[],!1,null,null,null);e.default=n.exports}}]);