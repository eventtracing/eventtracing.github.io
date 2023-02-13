---
sidebar_position:  1
---
# 关于 Demo 

:::tip Tip

> 曙光埋点集**自动化埋点**与**全链路追踪**等特点于一身，近乎完美地解决了传统埋点的所有痛点，兼顾了开发效率与埋点数据的高精度特点。
>
> **[快速接入曙光埋点](../category/快速开始)**

:::

## 工程结构
- 该项目涉及多个端 ***iOS***, ***Android***, ***H5(App站内 & 站内)***, ***平台Easyinsight服务端***, ***平台Easyinsight前端***
- github工程，是一个壳工程，通过 `git submodules` 的方式将各个端代码组合在一起, 代码地址参见 [github-dawn](https://github.com/eventtracing/dawn)
- 通过git command `git submodule update --init --recursive` 一键拿下所有代码
- 然后依次参见如下来运行Demo工程
  - [iOS Demo](./iOS)
  - [Android Demo](./Android)
  - [H5 Demo](./H5)
  - [Server Demo](./Easyinsight)

:::tip `H5`

> **H5-App站内**: 指的是App端内的H5, 该场景是`H5 SDK`跟`App SDK`共同配合来完成
>> 详细请参见 **[iOS Demo](./iOS)** 或者 **[Android Demo](./Android)** 的示例实现, 以及接入文档 [曙光接入-H5](../Installation/H5.md)
> 
> **H5-App站外**: 指的是非App端内的H5, 比如 `PC` `Web`, 以及`其他App打开分享出去的链接`等场景, 该场景是H5 SDK单独完成 (因为App端无法参与)
>> 详细请参见 **[H5 Demo](./H5)** 的示例, 以及接入文档 [曙光接入-H5](../Installation/H5.md)

:::

:::tip `Easyinsight`

> **Easyinsight后端**: 埋点管理平台的服务端
>
> **Easyinsight前端**: 埋点管理平台的 web 前端页面
>
> 详细请参见 **[Server Demo](./Easyinsight)** 的示例

:::