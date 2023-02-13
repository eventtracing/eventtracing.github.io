"use strict";(self.webpackChunkeventtracing_github_io=self.webpackChunkeventtracing_github_io||[]).push([[1418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={sidebar_position:8},o="Cell\u590d\u7528",a={unversionedId:"Android/Cell",id:"Android/Cell",title:"Cell\u590d\u7528",description:"1. Cell/View \u590d\u7528",source:"@site/docs/Android/Cell.md",sourceDirName:"Android",slug:"/Android/Cell",permalink:"/docs/Android/Cell",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/Android/Cell.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62df\u7236\u8282\u70b9",permalink:"/docs/Android/VirtualParent"},next:{title:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",permalink:"/docs/Android/CustomEvent"}},p={},u=[{value:"1. Cell/View \u590d\u7528",id:"1-cellview-\u590d\u7528",level:2},{value:"2. \u8282\u70b9\u7684 position",id:"2-\u8282\u70b9\u7684-position",level:2},{value:"3. \u5f3a\u5236\u8981\u6c42\u4e00\u4e2a\u8282\u70b9\u91cd\u65b0\u66dd\u5149",id:"3-\u5f3a\u5236\u8981\u6c42\u4e00\u4e2a\u8282\u70b9\u91cd\u65b0\u66dd\u5149",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cell\u590d\u7528"},"Cell\u590d\u7528"),(0,i.kt)("h2",{id:"1-cellview-\u590d\u7528"},"1. Cell/View \u590d\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NodeBuilder.setReuseIdentifier")),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u8d44\u6e90\u7684\u66dd\u5149\uff0c\u6307\u7684\u662f\u8be5\u8d44\u6e90\u672c\u8eab\u7684\u66dd\u5149\uff0c\u800c\u4e0d\u662f\u663e\u793a\u8be5\u8d44\u6e90\u7684View\u5143\u7d20"),(0,i.kt)("li",{parentName:"ol"},"\u5f53View/Cell\u53d1\u751f\u590d\u7528\u7684\u65f6\u5019\uff0c\u5982\u679c\u8d44\u6e90\u672c\u8eab\u6ca1\u6709\u53d8\u5316\uff0c\u5219\u4e0d\u5e94\u8be5\u89e6\u53d1\u91cd\u590d\u66dd\u5149"),(0,i.kt)("li",{parentName:"ol"},"VTree\u4e2d\u6240\u6709\u8282\u70b9\u90fd\u6709\u4e00\u4e2aidentifier\uff0cidentifier\u7684\u751f\u6210\u56e0\u7d20:")),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"_oid: pageId/elementId"),(0,i.kt)("li",{parentName:"ul"},"_pos: \u8d44\u6e90\u7684\u4f4d\u7f6e\u4fe1\u606f (\u8be6\u89c1\u540e\u7eed\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"position")," \u7ae0\u8282)"),(0,i.kt)("li",{parentName:"ul"},"impress seq: \u6807\u8bc6\u53ef\u4ee5\u88ab\u91cd\u65b0\u66dd\u5149\u7684seq\u5e8f\u5217 (\u53c2\u89c1 ",(0,i.kt)("inlineCode",{parentName:"li"},"EventTracing.reExposureView(view)"),"\u65b9\u6cd5)"),(0,i.kt)("li",{parentName:"ul"},"\u5143\u7d20\u672c\u8eab\u7684id: View\u7684\u5185\u5b58\u5730\u5740 / \u8d44\u6e90\u5bf9\u8c61\u7684id"))),(0,i.kt)("ol",{parentName:"blockquote",start:4},(0,i.kt)("li",{parentName:"ol"},"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"\u5143\u7d20\u672c\u8eab\u7684id")," \u662f\u4e1a\u52a1\u65b9\u53ef\u4ee5\u64cd\u7eb5\u7684:")),(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u662f\u4f7f\u7528View\u7684\u5185\u5b58\u5730\u5740\uff0c\u5927\u90e8\u5206\u573a\u666f\u90fd\u9002\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8ecell\u590d\u7528\u7684\u573a\u666f\uff0c\u63a8\u8350\u4f7f\u7528\u8d44\u6e90model\u7684\u5185\u5b58\u5730\u5740\u4f5c\u4e3aid\u6807\u8bc6\uff0c\u4e5f\u53ef\u4f7f\u7528\u4e1a\u52a1\u7684id\u6765\u6807\u8bc6")))),(0,i.kt)("h2",{id:"2-\u8282\u70b9\u7684-position"},"2. \u8282\u70b9\u7684 position"),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"view/cell \u590d\u7528\u573a\u666f\uff0c\u9700\u8981 s_position \u6765\u6807\u8bc6\u5f53\u524d\u8fd9\u4e2acell\u7684\u4f4d\u7f6e\u4fe1\u606f\uff0c\u5e76\u4e14\u4f4d\u7f6e\u4fe1\u606f\u4f1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"_spm")," \u4e2d\u4f53\u73b0\u51fa\u6765"),(0,i.kt)("li",{parentName:"ol"},"_spm\u683c\u5f0f: [_oid","[:_pos]","]\uff0c\u662f\u5411\u4e0a\u4f9d\u6b21\u67e5\u627e\uff0c\u7136\u540e\u62fc\u63a5_oid\u5f97\u5230\uff1b",(0,i.kt)("strong",{parentName:"li"},"\u91cd\u8981\uff1a")," \u4e00\u68f5\u865a\u62df\u6811\u6811\u4e2d\u4e0d\u540c\u7684\u8282\u70b9\u7684spm\u662f\u4e0d\u80fd\u76f8\u7b49\u7684\uff01"),(0,i.kt)("li",{parentName:"ol"},"\u5728VTree\u4e2d\uff0c\u5f53\u5904\u4e8e\u540c\u4e00\u4e2a\u7236node\u540d\u4e0b\uff0c\u4e24\u4e2a_oid\u76f8\u540c\u7684\u7684\u8282\u70b9\u5b58\u5728\u7684\u65f6\u5019\uff0c\u9700\u8981\u8bbe\u7f6e position\uff0c\u4e0d\u7136\u8fd9\u4fe9node\u7684_spm\u5c31\u76f8\u540c\u4e86"),(0,i.kt)("li",{parentName:"ol"},"\u5907\u6ce8: \u5728\u7eafSDK\u5c42\u9762\uff0cposition\u662f\u8282\u70b9\u7684\u4e00\u4e2a\u5173\u952e\u914d\u7f6e; \u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"ParamBuilder")," \u5c42\u9762\u914d\u7f6e\u7684 position\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u9664\u4e86\u4f1a\u914d\u7f6e\u8282\u70b9\u5c5e\u6027\u4e4b\u5916\uff0c\u8fd8\u4f1a\u7ed9\u5f53\u524d\u8282\u70b9\u6dfb\u52a0\u57cb\u70b9\u53c2\u6570")," ",(0,i.kt)("inlineCode",{parentName:"li"},"s_position")),(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u4e1a\u52a1\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\uff0c\u53ea\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ParamBuilder")," \u5c42\u9762\u7684API\u5373\u53ef"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  ParamBuilder.params(view)\n            .putBIPosition(1)\n")),(0,i.kt)("h2",{id:"3-\u5f3a\u5236\u8981\u6c42\u4e00\u4e2a\u8282\u70b9\u91cd\u65b0\u66dd\u5149"},"3. \u5f3a\u5236\u8981\u6c42\u4e00\u4e2a\u8282\u70b9\u91cd\u65b0\u66dd\u5149"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EventTracing.reExposureView")),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u4e00\u4e2aUI\u5143\u7d20\u7684\u5185\u5bb9\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u6bd4\u5982\u4e00\u4e2aUI\u5728\u7a33\u5b9a\u540e\uff0c\u663e\u793a\u7684\u5185\u5bb9\u53d8\u5316\u4e86\uff0c\u6216\u8005\u72b6\u6001\u53d8\u5316\u4e86\uff0c\u8be5UI\u7ec4\u4ef6\u672c\u8eab\u4e0d\u53d8\uff0c\u5219\u4e0d\u4f1a\u81ea\u52a8\u91cd\u65b0\u66dd\u5149"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u6b64\u65f6\u7b56\u5212\u8981\u6c42\u8be5\u6309\u94ae\u9700\u8981\u91cd\u65b0\u66dd\u5149\uff0c\u5219\u9700\u8981\u8c03\u7528\u8be5\u65b9\u6cd5\u6807\u8bc6\u8be5\u8282\u70b9\u9700\u8981\u91cd\u65b0\u66dd\u5149"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528\u8be5\u65b9\u6cd5\u4f1a\u9020\u6210\u751f\u6210\u7684\u8282\u70b9\u7684identifier\u53d1\u751f\u53d8\u5316\uff0c\u518d\u6b21\u751f\u6210VTree\uff0c\u5219\u8be5\u8282\u70b9node\u5c31\u4f1a\u8ba4\u4e3a\u8ddf\u4e0a\u4e00\u4e2anode\u4e0d\u76f8\u7b49"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"  EventTracing.reExposureView(view)\n")))}d.isMDXComponent=!0}}]);