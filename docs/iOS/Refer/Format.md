---
sidebar_position: 1
---
# refer格式解读


## 链路追踪

链路追踪是指 `_pv` `_ec` 等埋点事件通过生成refer信息将其传递给后续页面事件，从而达到对用户的操作路径串联的目的，通过 refer 信息我们可以知道当前页面是从哪个事件产生的曝光、页面的创建来源、事件的操作深度等等信息。

### **1. refer 格式**

通常见到的refer格式如下：

`[_dkey:${keys}][F:${option}][sessid][type][_actseq][_pgstep][spm][scm]`

- `_dkey`: debug使用，是`F`的字符串形式
- `F`: 通过位运算定义后续格式类型
- `_sessid`: 冷启动时生成的id，标识一次冷启动
  - [timestap]#[rand]#[appver]#[buildver]
  - rand: 3位随机数
  - timestap: ms
  - appver: app版本号
  - buildver: build号
  - 输出的值去掉中括号
- `type`: 节点类型
  - `e` 表示该节点是元素
  - `p` 表示该节点是页面
  - `s` 表示是冷热启动事件
- `_actseq`: 
  - 用户交互深度，每次交互（点击/滑动等）都会+1
  - 在当前根page的一次曝光生命周期内自增，如果页面重新曝光了，则先置0
  - 页面曝光，不自增
- `_pgstep`: 
  - 页面深度，每次页面曝光都会 +1
  - 在本次app启动生命周期内，自增
- `_spm`: 节点的坑位标识
  - 当前坑位(page/element)在根page下的描述
  - 格式: 自下向上递归element/page的_oid+_pos的字符串
- `_scm`: 节点的内容标识
  - 当前坑位的资源信息在VTree上下文中的描述
  - 格式: 自底向上递归elememnt/page的 cid:ctype:ctraceid的字符串

![image.png](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/24468699390/ae0a/d3e8/3679/3eb107122986550c474a33d5a532dff2.png)

### **2. pgrefer & psrefer**

- `pgrefer`
  - 页面曝光的refer，表明了上一个页面是什么
  - 完整串起页面的跳转记录
  - 比如 1→2→3→2路径，最后2节点的_pgrefer是3

- `psrefer`
  - 页面曝光的refer，表明了创建该页面是什么
  - 串起页面的创建记录
  - 比如1→2→3→2路径，最后2节点的_psrefer还是1

- `_sidrefer`
  - 上次App冷启动的sessionId
  - 用于关联本地启动周期内的埋点跟上次启动周期的关联

### **3. multirefers**

方便服务端做实时分析，通过客户端收集的多级refer来记录操作路径，以提高性能。
本质上是 psrefer 的组成的堆栈，最多记录5条，超过时会抛弃栈底数据。






