# 腾讯阿里面经总结

## 简介

校招期间投了腾讯阿里两家公司，一共面试了6次，屡战屡败，最后选择读研去。本人双非大三在读，没有面试、实习经历，可能有点不自量力（算了，还是自信一点，把可能去掉吧）。

---

# 一、腾讯一面（后端）

1. 自我介绍
2. 项目介绍（技术难度以及花费时间）
3. python基础
- 基础数据类型
- 哪些类型可变，哪些不可变以及原因
- 反转字符串
4. 平时解决问题的方法（经常访问的网站或论坛）
5. python装饰器
6. 对Django运行原理机制的理解
7. get请求和post请求的区别，其他请求
8. ajax发送请求的代码模板
9. 对CDN的概念以及原理的理解
10. 反问

---

# 二、腾讯一面（业务运维）

1. 自我介绍
2. 对业务运维的了解与兴趣
3. Linux命令
- 查看磁盘空间大小
- 查看所有文件
- 查看文件内容
4. 项目介绍以及技术难度
5. 解决难题的方法
6. 对Django工程结构的理解
7. mysql数据库有多少引擎
8. sql语句
- 加索引
- 授权
- 去重
- 排序
- 恢复数据库
- 导出数据表
9. TCP的三次握手
10. TCP与UDP的区别
11. 网址跳转的过程原理
12. 反问

---

# 三、腾讯一面（业务运维）

1. 自我介绍
2. 项目介绍（实现了什么功能，解决了什么问题）
3. 前后端交互方式
4. jquery与react的区别
5. 项目技术难点
6. Django运行原理
7. 如何定位网址无法访问的问题（如何知道请求是否到达server端）
8. DNS原理以及配置
9. TCP与UDP的区别
10. 哪些协议用到TCP，哪些协议用到UDP
11. ICMP，STMP的原理
12. TCP的四次挥手
- 客户端发送FIN后还能继续发送数据吗
- TIME_WAIT状态的原因
13. 链表与数组的优缺点
14. 进程与线程的区别

---

# 四、腾讯一面（业务运维）

1. jquery、react、vue的区别
2. 解决异步回调的方法
3. 进程健全（接口调用健全）
4. 同源策略（跨域以及解决方案）
5. jsonp的原理
6. session与cookie的区别
7. TCP的三次握手
8. js闭包
9. 安全问题（XSS、CSRF、SQL脚本注入的原理以及避免策略）
10. 前端性能优化
11. ES6新语法
12. python多线程与多进程（CPU多核）
13. python2与python3的不同之处
14. python如何安装扩展
15. 手写js分页
16. mysql索引类型
17. get与post的区别
18. 反问

---

# 五、阿里一面（新零售技术部-特价版）

1. 自我介绍
2. 项目介绍以及负责的工作
3. CSS布局
4. jquery组件库的优缺点
5. axios与ajax的区别
6. localstorage与cookie的区别
7. react新旧版本的区别
8. react的useMemo,useEffect与useCallback
9. 前端性能优化
10. CDN优化原理
11. 数组赋值不产生地址引用（浅拷贝）
12. 反问

---
 
# 六、阿里一面（支付宝体验技术部）

一面就直接上代码，不愧是阿里（我还认真地准备了面试题，准备了个寂寞）。

```javascript

// 第一题
/**
 * @desc 从一个对象通过操作序列来拿里面的值，做基本防空措施
 * @param {object} data - 需要获取的数据源
 * @param {array} array - 操作路径
 * @param {any} initial - 默认值，当没有内容的时候
*/
// 期望结果：
// const tmp = {a: {b: {c: [{d:1}, {e:2}, {f: {k: 3, p: 7}}]}}, v: ''}
// getIn(tmp, ['a', 'b', 'c'], 'alipay') -> [{d:1}, {e:2}, {f: {k: 3, p: 7}}
// getIn(tmp, ['a', 'b', 'c', '0', 'd'], 'alipay'); -> 1
// getIn(tmp, ['a', 'z'], 'alipay'); -> 'alipay'

// 答题
var getIn = (tmp, array, initial) => {
    var res = tmp;
    for(var i =0;i < array.length;i++){
        if(array[i].charCodeAt(0) >= 97 && array[i].charCodeAt(0) <= 122){
            res = eval('res.' + array[i]);
        }
        else
            res = res[parseInt(array[i])];
    }
    if(res === undefined)
        return initial;
    else
        return res;
}

// 第二题
/**
 * 写一个 find 方法，根据 id 查找 data 树中的任意一项，例如：
 * find(data, '101') // => '浦东'
 * find(data, '201') // => '西湖区'
 */
var data = [
  {
    id: '100', 
    name: '上海', 
    children: [
      {
        id: '101',
        name: '浦东',
        children: []
      },
      {
        id: '102',
        name: '浦西',
        children: []
      }
    ]
  },
  {
    id: '200',
    name: '杭州',
    children: [
      {
        id: '201',
        name: '西湖区',
        children: [{
          id: '221',
          name: '黄龙时代',
          children: []
        }]
      },
      {
        id: '202',
        name: '余杭区',
        children: []
      }
    ]
  }
];

// 答题:
var find = (data, id) => {
    for(let item of data) {
        if(item.id === id) 
            return item.name;
        if(item.id !== id && item.children !== [])
            res = find(item.children, id);
        if(res === undefined)
            continue;
        else
            return res;
    }
};

```

---

# 七、个人感受

- 第一次面试，我的意向职位是前端工程师，但是腾讯面试官咋都是后端工程师（一脸懵逼，可能是我投错部门了，被自己蠢哭），虽然腾讯面试流程中总是挂了捞，捞了挂，但还是有一定的收获。阿里面试的体验感便是极差的，两次都是内推，却被踢的毫不留情，铁面无私的面试官给你点赞!是我太天真了，我还是回去搬砖吧，但是以我弱小的身躯搬砖都没有人要吧。
- 我感觉问面试官对自己的评价 or 自己哪些位置做的不好这种问题还是谨慎，因为这无形中提醒了他你的缺点，我就是问了这种问题（再次被自己蠢哭）。





