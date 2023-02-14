---
sidebar_position:  1
---
# 开发者手册

## 准备

:::tip TIP

本文是为应用程序开发者所编写的，如果你对`曙光`的内部原理感兴趣，或希望参与到`曙光`的开发中来，那么可前往阅读 [曙光详细介绍](../intro) 来获取更多`曙光`的相关信息。

:::

在您开始修改曙光源码之前，先从下述地址中获取相关代码

- 【iOS - SDK】
  - SDK: [EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS)
  - Debug工具: [EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS-Debug)
  - LogViewer工具: [EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS-LogViewer)
- 【Android - SDK】: [EventTracing-Android](https://github.com/eventtracing/EventTracing-Android)
- 【H5 - SDK】: [EventTracing-iOS](https://github.com/eventtracing/EventTracing-web)
- 【Easyinsight】
  - [easyinsight-server](https://github.com/eventtracing/easyinsight-server)
  - [easyinsight-font](https://github.com/eventtracing/easyinsight-front)
- 文档: [eventtracing.github.io](https://github.com/eventtracing/eventtracing.github.io)
## 管理 Issues

我们使用 [Github Issues](https://github.com/eventtracing/dawn/issues) 来跟踪公共错误和功能请求。

1. 搜索已知问题
   - 请搜索现有问题查看是否已提交任何类似问题或功能请求，避免重复提交。
2. 报告新问题
   - 提交问题时尽可能提供充分的信息，例如问题的详细描述、屏幕截图或视频、崩溃日志以及代码块等等。
3. 交流讨论
   - 欢迎加入我们的微信交流群，任何相关问题可以随时在群里讨论。

## 讨论 

所有的问题讨论，都可以在 [discussions](https://github.com/eventtracing/dawn/discussions) 中

## 代码提交

我们非常欢迎您共同参与项目的开发工作，让曙光变得更好。

### 分支管理

主要有3个分支：

1. `master` 分支
   1. 它是最新的（预）发布分支。 我们使用 `master` 作为标签，版本号为 `1.1.0`、`1.2.0`、`1.3.0`...
   2. **不要在 `master` 分支上提交任何 PR。**
2. `dev` 分支
   1. 这是固定的开发分支，我们会**定期全面测试**`dev`分支，通过测试后将其合并到 `master` 分支并在下个版本生效。
   2. 版本号为`1.3.1`、`1.3.2`、`1.3.3`...
3. `feature/*`
   1. 这是提交 PR 的个人分支，命名不是强制的，只要不和其他分支产生冲突即可
   2. 提交的PR在经过**CodeReview**以及**单元测试**后, `feature/*` 将会合并到 `dev` 分支并在下个小版本生效。
   3. `feature/*` 的后缀命名您可以自由定义，比如 `feature/zhangsan`
   4. **建议您在 `feature/*` 分支提交 bugfix 或功能 PR。**

一般错误修复或功能请求提交给 `feature/*` 分支。 经过 **Code Review** 和**单元测试**后，我们会将它们合并到 `dev` 分支并在下个小版本生效。
`dev`分支会定期进行全面测试，测试通过后会合并到`master`分支


```
master
 ↑
dev                   ←  定期全面测试
 ↑ 
feature/fix_zhangsan  ←  PR，code review + 单元测试
```  

### 提交 PR

按照如下步骤[提交 PR](https://github.com/eventtracing/dawn/pulls)：

1. 从 `dev` fork 并创建您的分支；
2. 如果您更改了 API，请更新代码或文档；
3. 将版权声明添加到您添加的任何新文件的顶部；
4. 检查你的代码 lints 和 checkstyles；
5. 反复测试您的代码；
6. 往 `dev` 分支提交您的 [pull request](https://github.com/eventtracing/dawn/pulls)。


## License

给本项目提交源码表示您同意本项目的 [LICENSE](https://github.com/eventtracing/dawn/blob/master/LICENSE)
