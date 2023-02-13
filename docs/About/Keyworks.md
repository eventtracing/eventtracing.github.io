---
sidebar_position: 3
---

# 关键概念

## 对象
对象是我们方案埋点管理和开发的基本单位，给一个**UIView**设置 ***_oid***（对象Id: Object Id），该view就是一个对象; 对象分为两大类，***page*** & ***element***;

![对象&参数](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/18861371146/7bfd/0863/ab3e/b8db1064a792e4eda7a3c60c13c6ad03.png)

- **page对象**: 比如 UIViewController.view, WebView, 或者一个半屏浮层的view，再或者一个业务弹窗
- **element对象**: 比如 UIButton, UICollectionViewCell, 或者一个自定义view
- **对象参数**: 对象是埋点具体信息的承载体，承载着对象维度的具体埋点参数
- **对象的复用**: 对象的存在，其中一个很大的原因，就是需要做复用，对于一些通用UI组件，尤为合适

## 虚拟树(VTree)
对象不是孤立存在的，而是以**虚拟树(VTree)**的方式组合在一起的, 下面是一个示例:

![虚拟树 VTree](https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/18929153695/ee91/1527/7bbd/9598aa9e544f19332ee10cc35e065e5f.png)

虚拟树VTree有如下特点:

- **View树子集**: 原始view树层级很复杂，被标识成对象的称为节点，所有节点就组合成了VTree，是原始view树的子集
- **上下文**: 虚拟树中的对象，是存在上下关系的，一个节点的所有祖先节点，就是该对象(节点)的上下文
- **对象参数**: 有了节点的上下层级，不同维度的对象，只关心自己维度的参数，比如歌单详情页中歌曲cell不关心页面请求级别的歌单id
- **SPM**: 节点及其所有祖先结点的oid组成了SPM值（其实还有position参数的参与，稍后再详解），该SPM可以唯一定位该节点
- **持续生成**: VTree是源源不断的构建的，每一个view发生了变化，View的添加/删除/层级变化/位移/大小变动/hidden/alpha，等等，都会引起重新构建一颗新的VTree
