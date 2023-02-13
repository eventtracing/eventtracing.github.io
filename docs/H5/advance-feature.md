---
sidebar_position: 30
---
# 高级用法

## 初始化

:::tip
- 一个页面或一个 SPA 应用中（即：页面加载一次）只需要执行一次初始化，多次执行只以第一次初始化为准，多余的初始化会被忽略
- 尽量在页面最开始的时机执行初始化，避免由于初始化时机较晚而丢失埋点
- 组件库、TMS 组件、XRN 组件等公共组件中不要执行初始化，只做埋点即可，初始化请在页面中统一处理
:::

### 初始化方法

```js
EventTracing.init(options)
```

**入参 `options`**

| 参数              | 类型               | 是否必填 | 默认值  | 描述                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------- | :----------------- | :------: | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reportLogs        | `({ logs }): void` |    是    | `null`  | 日志上报方法                                                                                                                                                                                                                                                                                                                                                                        |
| globalParams      | `object`           |    否    | `{}`    | 全局公参                                                                                                                                                                                                                                                                                                                                                                            |
| isUseHeartbeat    | `boolean`          |    否    | `false` | 是否开启心跳 `_pd`，详见 <a href="#心跳版曝光结束">心跳版曝光结束</a>，配置如下：1、`true`，开启心跳 `_pd`，默认前 5 次间隔 2000 毫秒打一次 `_pd`，之后默认间隔 10000 毫秒打一次 `_pd`。前 5 次的间隔时间不可修改，5 次之后的间隔时间可通过 `heartbeatInterval` 配置；2、`false`，关闭心跳 `_pd`，默认页面不可视时打一次 `_pd` |
| heartbeatInterval | `number`           |    否    | `10000` | 心跳 `_pd` 埋点前 5 次之后的心跳事件间隔，必须大于等于 2000 毫秒，否则使用默认的 10000 毫秒                                                                                                                                                                                                                                                                                         |
| onPageShow      | `(callback): void` |    否    | `null`  | 页面进入到前台/出现时回调方法                                                                                                                                                                                                                                                                                                                                                         |
| onPageHide   | `(callback): void` |    否    | `null`  | 页面退出到后台/隐藏时回调方法                                                                                                                                                                                                                                                                                                                                                       |

**返回值**

`boolean`

### 使用方式

```jsx
import EventTracing from '@eventtracing/web';

EventTracing.init({
    ... // 其他参数
    reportLogs: ({ logs }) => {
        // 发送 http 请求或通过客户端协议上报 logs
    },
});
```

## 打点

曙光 SDK 在初始化后会查找页面中所有具有 `data-log` 属性的节点，从其中获取埋点参数进行埋点虚拟树的更新，从而实现埋点。因此，你可以通过在节点上添加 `data-log` 属性来埋点。

### 打点属性

```jsx
<div data-log={JSON.stringify(log)}></div>
```

**入参 `log`**

| 参数 | 类型 | 是否必填 | 默认值 | 描述  |
| :---- | :--- | :---: | :--- | :--- |
| oid | `string` | 是 | `--` | 对象 ID，传入埋点任务-对象详情中的"对象 ID(oid)" |
| isPage | `boolean` | 是 | `false` | 是否为页面，根据埋点任务-对象详情中的"对象类型"判断，页面传入 `true`，元素则传入 `false` |
| events | `string[]` | 否 | `--` | 埋点事件，传入埋点任务-对象详情中的"事件类型与事件公参配置"所列的事件名，如：`['_ev', '_ed', '_ec']`，目前 events 只支持 `_pv`、`_pd`、`_ev`、`_ed`、`_ec`事件的自动埋点，其他事件埋点请调用 <a href="#手动打点">手动打点</a> 方法触发该事件的埋点。1、events 不传，则使用默认的事件打点，页面默认事件：`['_pv', '_pd']`，元素默认事件：`['_ev']`；2、events 传 `[]`，则不打点；3、_ed 仅在 _ev 存在时生效；4、_pv、_pd 只要存在一个，则 _pv、_pd 都打 |
| params | `object` | 否 | `null` | 对象私参，传入埋点任务-对象详情中的"私参配置"所列的参数 |
| useForRefer | `boolean` / `string[]` |    否    | `false` | 是否参与链路追踪，为 boolean 时，表示当前节点所有事件都参与或不参与链路追踪；为 string[] 时，表示只有 useForRefer 中指定的事件参与链路追踪，如：['_ec', '_plv'] |
| mountParentSelector | `string` | 否 | `null` | 埋点父节点挂载选择器，用于调整埋点层级关系，将埋点节点挂载至埋点任务指定的埋点节点下（如：将 Modal 这种 DOM 位置直接在 Body 下的埋点逻辑节点挂载至指定节点下），取值如：`#demo_node_id`。注意：父节点必须是一个埋点节点！父节点在文档流中必须处在当前节点的上方，否则遍历当前节点时，父节点还未被遍历，会导致层级出错！|
| virtualParentNode | `object` | 否 | `null` | 虚拟父节点，在真实节点无法插入时使用 |
| virtualParentNode.key | `string` | 是 | `--` | 虚拟父节点 key。相同 key 的虚拟父节点会被合并，必须保证相同 key 的虚拟父节点的埋点层级一致，否则以最后一个层级为准 |
| virtualParentNode.oid | `string` | 是 | 同上 `oid` | 同上 `oid` |
| virtualParentNode.isPage | `boolean` | 是 | 同上 `isPage` | 同上 `isPage` |
| virtualParentNode.events | `string[]` | 否 | 同上 `events` | 同上 `events` |
| virtualParentNode.params | `object` | 否 | 同上 `params` | 同上 `params` |

### 使用方式

```jsx
import React, { useEffect } from 'react';
import EventTracing from '@eventtracing/web';

export default () => {
  useEffect(() => {
    EventTracing.init({
        ... // 初始化配置
    });
  }, []);

  return (
    <div
      data-log={JSON.stringify({
        oid: 'page_web_test',
        isPage: true,
        events: ['_pv', '_pd'],
      })}
    >
      <div
        data-log={JSON.stringify({
          oid: 'btn_web_test',
          events: ['_ev', '_ec'],
        })}
      >
        我是一个埋点节点，点我打点击事件（_ec）
      </div>
    </div>
  );
};
```

## 手动打点

曙光 SDK 内置了一些常用埋点事件的自动埋点，只需要在埋点参数 `events` 中标记节点需要触发的埋点事件即可在指定的时机自动触发埋点。但 SDK 只能内置如 `_pv`、`_pd`、`_ev`、`_ed`、`_ec` 这种时机确定且 SDK 方便监听的埋点事件，如：分享事件、截屏事件、播放事件、滑动事件等这种事件 SDK 无法统一监听。因此，需要埋点开发者在埋点触发的时机调用 SDK 提供的手动触发埋点方法去触发才可正常埋点。

### 手动打点方法

```js
window.NE_DAWN.trigger(target, options);
```

:::tip
埋点属性与手动触发埋点方法不是替代关系，单独调用手动触发埋点方法而不通过 data-log 或 DawnDiv 埋点是无效的！
:::

**入参 `target`**

要触发埋点对应的节点的 `Element` 对象。

**入参 `options`**

| 参数   | 类型     | 是否必填 | 默认值 | 描述                                                                  |
| :----- | :------- | :------: | :----- | :-------------------------------------------------------------------- |
| event  | `string` |    是    | `--`   | 要触发的埋点事件的事件名，如：`_ec`                                   |
| params | `object` |    否    | `null` | 事件公参，传入埋点任务-对象详情中的"事件类型与事件公参配置"所列的参数 |
| useForRefer | `boolean` |    否    | `false` | 是否参与链路追踪 |

**返回值**

`Promise<any>`

### 使用方式

```jsx
// 以 '_ec' 事件为例
import React, { useEffect } from 'react';
import EventTracing from '@eventtracing/web';

export default () => {
  useEffect(() => {
    EventTracing.init({
        ... // 初始化配置
    });
  }, []);

  return (
    <div
      data-log={JSON.stringify({
        oid: 'page_web_test',
        isPage: true,
        events: ['_pv', '_pd'],
      })}
    >
      <div
        data-log={JSON.stringify({
          oid: 'btn_web_test',
          events: ['_ev'],
        })}
        onClick={(e) => {
          window.NE_DAWN.trigger(e.currentTarget, {
            event: '_ec',
            params: { __test_param: 'window.NE_DAWN.trigger' },
          });
        }}
      >
        我是一个埋点节点，点我打点击事件（_ec）
      </div>
    </div>
  );
};
```

## 逻辑挂载

### 逻辑父节点

某些情况下，埋点节点不能按预期层级或按埋点任务中要求的层级出现在页面结构中时，可以通过逻辑挂载的方式，将某一节点的埋点逻辑挂载至正确的节点下。该方式不会对页面本身结构产生影响、不会修改 DOM，是通过干扰埋点 SDK 维护的虚拟树实现的。

:::tip
要挂载和被挂载节点，都必须是埋点节点，并且被挂载节点（父节点）必须处在要挂载节点（子节点）文档流的上方，否则会因为遍历埋点虚拟树顺序导致层级出错的情况。
:::

#### 案例

```jsx | demo
import React, { useEffect } from 'react';
import EventTracing from '@eventtracing/web';

export default () => {
  useEffect(() => {
    EventTracing.init({
        ... // 初始化配置
    });
  }, []);

  return (
    <>
      <div
        id="test_id_mount_parent"
        data-log={JSON.stringify({
          oid: 'page_web_test',
          isPage: true,
          events: ['_pv', '_pd'],
        })}
      >
        我是逻辑挂载父节点
      </div>
      <div
        data-log={JSON.stringify({
          oid: 'btn_web_test',
          events: ['_ev', '_ec'],
          params: { __test_param: '逻辑挂载，子节点' },
          mountParentSelector: '#test_id_mount_parent',
        })}
      >
        我是逻辑挂载子节点，点我打 _ec
      </div>
    </>
  );
};
```

#### 逻辑挂载参数

详见 <a href="#打点">打点</a> 的入参 `log` 中的 `mountParentSelector`。

`mountParentSelector` 传入的是一个选择器，可以通过 `document.querySelector(mountParentSelector)` 查询到对应节点的 `Element` 对象。

#### 逻辑挂载常见的场景

如：Modal 组件等真实挂载在 `body` 上的节点。

### 虚拟父节点

因为代码结构原因或者使用的组件库原因（外部开源的组件库，有些组件无法在其中增加层级），没办法添加某一层埋点节点，可以通过给该节点的子节点添加虚拟的父节点来实现。

#### 案例

比如，埋点任务中要求的埋点树结构如下：

```shell
- page_web_test
    - mod_web_test
        - btn_web_test:1
        - btn_web_test:2
```

`page_web_test` 节点是 `mod_web_test` 节点的父节点，`mod_web_test` 节点是 `btn_web_test:1`、`btn_web_test:2` 节点的父节点，假设代码中没办法添加 `mod_web_test` 节点，因此埋点时可以通过虚拟父节点实现 `mod_web_test` 节点的埋点，如下：

```jsx
import React, { useEffect } from 'react';
import EventTracing from '@eventtracing/web';

export default () => {
  useEffect(() => {
    EventTracing.init({
        ... // 初始化配置
    });
  }, []);

  return (
    <div
      data-log={JSON.stringify({
        oid: 'page_web_test',
        isPage: true,
        events: ['_pv', '_pd'],
      })}
    >
      <div
        data-log={JSON.stringify({
          oid: 'btn_web_test',
          events: ['_ev', '_ec'],
          params: { s_position: 1, __test_param: '虚拟父节点，子节点 1' },
          virtualParentNode: {
            key: 'test_key',
            oid: 'mod_web_test',
            events: ['_ev'],
          },
        })}
      >
        我是第一个埋点的节点，点我打 _ec
      </div>

      <div
        data-log={JSON.stringify({
          oid: 'btn_web_test',
          events: ['_ev', '_ec'],
          params: { s_position: 2, __test_param: '虚拟父节点，子节点 2' },
          virtualParentNode: {
            key: 'test_key',
            oid: 'mod_web_test',
            events: ['_ev'],
          },
        })}
      >
        我是第二个埋点的节点，点我打 _ec
      </div>
    </div>
  );
};
```

#### 虚拟父节点参数

详见 <a href="#打点">打点</a> 的入参 `log` 中的 `virtualParentNode`。

其中，要特别注意 `virtualParentNode.key` 的值，页面中所有相同 `virtualParentNode.key` 的虚拟父节点会被当做同一个埋点节点，请务必使用正确，否则会出现以下情况：

- 本应是同一虚拟父节点，却被赋了多个不同的 `virtualParentNode.key` 值：该节点赋了几个不同值，同一曝光周期内就会打几次曝光开始、曝光结束
- 本应不是同一虚拟父节点，却被赋了相同的 `virtualParentNode.key` 值：以最后一个虚拟父节点的 `oid` 为准打点，且同一曝光周期内只打一次曝光开始、曝光结束

#### 虚拟父节点曝光

虚拟父节点的曝光开始、曝光结束的时机是根据子节点来确定的，逻辑如下：

- 曝光开始：任意一个子节点曝光开始，则虚拟父节点曝光开始
- 曝光结束：所有子节点曝光结束，则虚拟父节点曝光结束

## 心跳版曝光结束

由于前端没有稳定的时机在页面关闭的时候上报曝光结束事件日志，因此普通的曝光结束数据都是有缺失的，如：关闭容器、杀进程等操作都会导致曝光结束日志无法上报。因此，针对强依赖曝光结束数据的场景，提供了心跳版曝光结束。

心跳版曝光结束的原理是：从埋点 SDK 初始化开始，每隔指定时间上报一次曝光结束（SDK 会处理 APP 进入到前台、退出到后台等情况），最终数据分析师根据每次曝光结束日志中的间隔叠加来计算页面的曝光时长。

初始化时设置，如下：

```jsx
import EventTracing from '@eventtracing/web';

EventTracing.init({
    ... // 其他参数
    isUseHeartbeat: true,
});
```

### 开启心跳参数

详见 <a href="#初始化">初始化</a> 的入参 `options` 中的 `isUseHeartbeat`。

初始化时通过设置 `isUseHeartbeat: true` 开启心跳后，前 5 次默认心跳间隔为 2000 毫秒，5 次之后默认心跳间隔为 10000 毫秒。5 次之后的心跳间隔支持配置，可在初始化时通过 `heartbeatInterval` 来配置，`heartbeatInterval` 的值必须大于等于 2000 毫秒，否则使用默认的 10000 毫秒。

### 限制条件

只有页面的曝光结束才具备心跳功能，元素曝光结束无此功能。