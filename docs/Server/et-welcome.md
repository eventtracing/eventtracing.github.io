---
sidebar_position: 10
---
# 工程架构

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23799208361/fd2a/87a8/d644/41951218330eb8ace58752dd7f25626b.png)

## 架构说明

* eis-web-core以下是核心代码
* eis-web-demo是简易的实现，您构建属于自己的埋点平台服务端时，需要对该工程进行改写
  * 实现用户鉴权
  * 实现缓存、配置中心、消息通知等功能
  * 修改MySQL数据库、ElasticSearch连接及用户名、密码

## 部署说明

![](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23800243386/8f99/e4d5/74b2/1f6767de1c185bd9f0b44561257cc53b.png)

* 后端需要部署【基础服务集群】、【实时测试单机集群】两个集群
* 需要注意的是，当前实时测试功能依赖WS连接，在单机上维持WS的连接状态，暂时只支持单机部署
