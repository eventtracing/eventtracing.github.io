---
sidebar_position: 40
---
# 日志格式解读

## 参数

```js
{
    event: '_ed',
    useForRefer: false,
    _plist: [
        {
            _oid: 'page_web_test',
        },
    ],
    _elist: [
        {
            _oid: 'btn_web_test',
            s_position: 1,
            s_cid: 100001,
            s_ctype: 'song',
        },
    ],
    params: {
        _duration: 10000,
        _eventtime: 1673186172291,
    },
}
```

### 保留参数清单

| 参数 | 类型 | 描述  |
| :---- | :--- | :--- |
| event | `string` | 打点事件名 |
| useForRefer | `boolean` | 是否参与链路追踪 |
| _plist | `any[]` | 页面参数列表 |
| _elist | `any[]` | 元素参数列表 |
| _spm | `string` | 位置参数，客户端上报之前根据 _plist、_elist 中参数生成，不在前端日志中出现 |
| _scm | `string` | 资源参数，客户端上报之前根据 _plist、_elist 中参数生成，不在前端日志中出现 |
| params | `object` | 其他埋点参数 |
| params._duration | `number` | 曝光时长，只在曝光结束事件中出现 |
| params._eventtime | `number` | 埋点时间戳 |
| params.is_beat | `1` / `0` | 页面曝光结束是否为心跳版，1 为心跳版、0 为普通版 |

**_plist、_elist 保留参数**

| 参数 | 类型 | 描述  |
| :---- | :--- | :--- |
| _oid | `string` | 对象ID |
| s_position | `number` | 对象在列表中位置 |
| s_cid | `string` | 资源 ID |
| s_ctype | `string` | 资源类型 |
| s_ctrp | `string` | 资源 trp |
| s_ctraceid | `string` | 资源 traceId |

### _elist & _plist

_plist 为页面参数列表，_elist 元素参数列表，曙光埋点每一个埋点的日志，都会向上遍历父节点，携带父节点埋点参数，因此日志中通过 _plist、_elist 来区分页面节点和元素节点。

_plist、_elist 中的顺序为 子节点 → 父节点，比如，埋点任务中要求的埋点树结构如下：

```shell
- 根页面
    - 子页面
        - 模块
            - 卡片
                - 按钮
```

当按钮触发埋点时，_plist、_elist 中的内容和顺序如下：

```js
{
    _plist: [子页面节点参数对象, 根页面节点参数对象],
    _elist: [按钮节点参数对象, 卡片节点参数对象, 模块节点参数对象],
}
```

### _spm & _scm

_spm 是埋点的位置参数，客户端上报之前根据 _plist、_elist 中的 _oid 和 s_position 生成；_scm 是埋点的资源参数，客户端上报之前根据 _plist、_elist 中的 s_cid、s_ctype、s_ctraceid、s_ctrp 生成。

假设一个埋点的 _plist、_elist 如下：

```js
{
    _plist: [
        {
            _oid: 'page_web_test',
        },
    ],
    _elist: [
        {
            _oid: 'btn_web_test',
            s_position: 1,
            s_cid: 100001,
            s_ctype: 'song',
            s_ctraceid: 's_ctraceid_test',
            s_ctrp: 's_ctrp_test',
        },
    ],
}
```

生成的 _spm、_scm 为：

```js
{
    _spm: 'btn_web_test:1|page_web_test',
    _scm: '100001:song:s_ctraceid_test:s_ctrp_test|:::',
}
```

## 事件

event 参数表示当前这次打点的事件名称，如：_pv、_pd、_ev、_ed、_ec 等。

自动打点时，在 `data-log` 的 events 中标注的事件会在指定的时机触发打点，当前支持的自动打点事件有：_pv、_pd、_ev、_ed、_ec。

手动打点时，在 `options.event` 中标注事件，手动打点是开发者自己在合适时机触发，可以打任何事件。

## 链路追踪

useForRefer 参数表示当前这次打点是否参与客户端链路追踪，点击事件（_ec）已默认参加链路追踪，其他事件如果需要参与链路追踪，请按 `data-log` 或手动打点方法要求的方式传入。