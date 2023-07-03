---
sidebar_position:  1
---
# 壳工程

## 相关工程列表

- **【壳工程】**：[dawn](https://github.com/eventtracing/dawn)
- **【iOS - SDK】**
  - SDK: [EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS)
  - Debug工具: [EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS-Debug)
  - LogViewer工具: [EventTracing-iOS](https://github.com/eventtracing/EventTracing-iOS-LogViewer)
- **【Android - SDK】**: [EventTracing-Android](https://github.com/eventtracing/EventTracing-Android)
- **【H5 - SDK】**: [EventTracing-Web](https://github.com/eventtracing/EventTracing-web)
- **【Easyinsight】**
  - [easyinsight-server](https://github.com/eventtracing/easyinsight-server)
  - [easyinsight-font](https://github.com/eventtracing/easyinsight-front)
- 文档: [eventtracing.github.io](https://github.com/eventtracing/eventtracing.github.io)

:::tip 壳工程管理方式目标

> 项目采用 **壳工程**  的方式来管理多个仓库
> 
> 在壳工程中，你可以明确知道多个仓库该如何组合使用。

:::

## Release 发布规则

所有工程，均采用 tag 三位数字的方式来进行发布，比如 1.0.0, 1.0.3, 1.3.2, 2.x.x 等

1. **第一位**：重大修改，一般是我们大型重构或者能力上线的版本
2. **第二位**：比较重要的修改，一般需要指定其他端来配合才可以使用
3. **第三位**：向前兼容，可以跟目前所有其他端直接配合使用

tag全部都是打在 master 分支上

## 发布记录

当前的组合发布，参见[发布记录](../../blog)
