"use strict";(self.webpackChunkeventtracing_github_io=self.webpackChunkeventtracing_github_io||[]).push([[8554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,d=s["".concat(p,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="\u5f00\u53d1\u8005\u624b\u518c",o={unversionedId:"Contributing/intro",id:"Contributing/intro",title:"\u5f00\u53d1\u8005\u624b\u518c",description:"\u51c6\u5907",source:"@site/docs/Contributing/intro.md",sourceDirName:"Contributing",slug:"/Contributing/intro",permalink:"/docs/Contributing/intro",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/Contributing/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u624b\u518c",permalink:"/docs/category/\u5f00\u53d1\u624b\u518c"}},p={},m=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u7ba1\u7406 Issues",id:"\u7ba1\u7406-issues",level:2},{value:"\u8ba8\u8bba",id:"\u8ba8\u8bba",level:2},{value:"\u4ee3\u7801\u63d0\u4ea4",id:"\u4ee3\u7801\u63d0\u4ea4",level:2},{value:"\u5206\u652f\u7ba1\u7406",id:"\u5206\u652f\u7ba1\u7406",level:3},{value:"\u63d0\u4ea4 PR",id:"\u63d0\u4ea4-pr",level:3},{value:"License",id:"license",level:2}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5f00\u53d1\u8005\u624b\u518c"},"\u5f00\u53d1\u8005\u624b\u518c"),(0,r.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.kt)("admonition",{title:"TIP",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u662f\u4e3a\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u8005\u6240\u7f16\u5199\u7684\uff0c\u5982\u679c\u4f60\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"\u66d9\u5149"),"\u7684\u5185\u90e8\u539f\u7406\u611f\u5174\u8da3\uff0c\u6216\u5e0c\u671b\u53c2\u4e0e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"\u66d9\u5149"),"\u7684\u5f00\u53d1\u4e2d\u6765\uff0c\u90a3\u4e48\u53ef\u524d\u5f80\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"../intro"},"\u66d9\u5149\u8be6\u7ec6\u4ecb\u7ecd")," \u6765\u83b7\u53d6\u66f4\u591a",(0,r.kt)("inlineCode",{parentName:"p"},"\u66d9\u5149"),"\u7684\u76f8\u5173\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"\u5728\u60a8\u5f00\u59cb\u4fee\u6539\u66d9\u5149\u6e90\u7801\u4e4b\u524d\uff0c\u5148\u4ece\u4e0b\u8ff0\u5730\u5740\u4e2d\u83b7\u53d6\u76f8\u5173\u4ee3\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u3010iOS - SDK\u3011",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SDK: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/EventTracing-iOS"},"EventTracing-iOS")),(0,r.kt)("li",{parentName:"ul"},"Debug\u5de5\u5177: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/EventTracing-iOS-Debug"},"EventTracing-iOS")),(0,r.kt)("li",{parentName:"ul"},"LogViewer\u5de5\u5177: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/EventTracing-iOS-LogViewer"},"EventTracing-iOS")))),(0,r.kt)("li",{parentName:"ul"},"\u3010Android - SDK\u3011: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/EventTracing-Android"},"EventTracing-Android")),(0,r.kt)("li",{parentName:"ul"},"\u3010H5 - SDK\u3011: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/EventTracing-web"},"EventTracing-iOS")),(0,r.kt)("li",{parentName:"ul"},"\u3010Easyinsight\u3011",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/easyinsight-server"},"easyinsight-server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/easyinsight-web"},"easyinsight-web")))),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/eventtracing.github.io"},"eventtracing.github.io"))),(0,r.kt)("h2",{id:"\u7ba1\u7406-issues"},"\u7ba1\u7406 Issues"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eventtracing/dawn/issues"},"Github Issues")," \u6765\u8ddf\u8e2a\u516c\u5171\u9519\u8bef\u548c\u529f\u80fd\u8bf7\u6c42\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u641c\u7d22\u5df2\u77e5\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u641c\u7d22\u73b0\u6709\u95ee\u9898\u67e5\u770b\u662f\u5426\u5df2\u63d0\u4ea4\u4efb\u4f55\u7c7b\u4f3c\u95ee\u9898\u6216\u529f\u80fd\u8bf7\u6c42\uff0c\u907f\u514d\u91cd\u590d\u63d0\u4ea4\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u62a5\u544a\u65b0\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u95ee\u9898\u65f6\u5c3d\u53ef\u80fd\u63d0\u4f9b\u5145\u5206\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u95ee\u9898\u7684\u8be6\u7ec6\u63cf\u8ff0\u3001\u5c4f\u5e55\u622a\u56fe\u6216\u89c6\u9891\u3001\u5d29\u6e83\u65e5\u5fd7\u4ee5\u53ca\u4ee3\u7801\u5757\u7b49\u7b49\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u4ea4\u6d41\u8ba8\u8bba",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6b22\u8fce\u52a0\u5165\u6211\u4eec\u7684\u5fae\u4fe1\u4ea4\u6d41\u7fa4\uff0c\u4efb\u4f55\u76f8\u5173\u95ee\u9898\u53ef\u4ee5\u968f\u65f6\u5728\u7fa4\u91cc\u8ba8\u8bba\u3002")))),(0,r.kt)("h2",{id:"\u8ba8\u8bba"},"\u8ba8\u8bba"),(0,r.kt)("p",null,"\u6240\u6709\u7684\u95ee\u9898\u8ba8\u8bba\uff0c\u90fd\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eventtracing/dawn/discussions"},"discussions")," \u4e2d"),(0,r.kt)("h2",{id:"\u4ee3\u7801\u63d0\u4ea4"},"\u4ee3\u7801\u63d0\u4ea4"),(0,r.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u60a8\u5171\u540c\u53c2\u4e0e\u9879\u76ee\u7684\u5f00\u53d1\u5de5\u4f5c\uff0c\u8ba9\u66d9\u5149\u53d8\u5f97\u66f4\u597d\u3002"),(0,r.kt)("h3",{id:"\u5206\u652f\u7ba1\u7406"},"\u5206\u652f\u7ba1\u7406"),(0,r.kt)("p",null,"\u4e3b\u8981\u67093\u4e2a\u5206\u652f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"master")," \u5206\u652f",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5b83\u662f\u6700\u65b0\u7684\uff08\u9884\uff09\u53d1\u5e03\u5206\u652f\u3002 \u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," \u4f5c\u4e3a\u6807\u7b7e\uff0c\u7248\u672c\u53f7\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"1.1.0"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"1.2.0"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"1.3.0"),"..."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"master")," \u5206\u652f\u4e0a\u63d0\u4ea4\u4efb\u4f55 PR\u3002")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"dev")," \u5206\u652f",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u662f\u56fa\u5b9a\u7684\u5f00\u53d1\u5206\u652f\uff0c\u6211\u4eec\u4f1a",(0,r.kt)("strong",{parentName:"li"},"\u5b9a\u671f\u5168\u9762\u6d4b\u8bd5"),(0,r.kt)("inlineCode",{parentName:"li"},"dev"),"\u5206\u652f\uff0c\u901a\u8fc7\u6d4b\u8bd5\u540e\u5c06\u5176\u5408\u5e76\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," \u5206\u652f\u5e76\u5728\u4e0b\u4e2a\u7248\u672c\u751f\u6548\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7248\u672c\u53f7\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"1.3.1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"1.3.2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"1.3.3"),"..."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"feature/*"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u662f\u63d0\u4ea4 PR \u7684\u4e2a\u4eba\u5206\u652f\uff0c\u547d\u540d\u4e0d\u662f\u5f3a\u5236\u7684\uff0c\u53ea\u8981\u4e0d\u548c\u5176\u4ed6\u5206\u652f\u4ea7\u751f\u51b2\u7a81\u5373\u53ef"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u7684PR\u5728\u7ecf\u8fc7",(0,r.kt)("strong",{parentName:"li"},"CodeReview"),"\u4ee5\u53ca",(0,r.kt)("strong",{parentName:"li"},"\u5355\u5143\u6d4b\u8bd5"),"\u540e, ",(0,r.kt)("inlineCode",{parentName:"li"},"feature/*")," \u5c06\u4f1a\u5408\u5e76\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," \u5206\u652f\u5e76\u5728\u4e0b\u4e2a\u5c0f\u7248\u672c\u751f\u6548\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"feature/*")," \u7684\u540e\u7f00\u547d\u540d\u60a8\u53ef\u4ee5\u81ea\u7531\u5b9a\u4e49\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"feature/zhangsan")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5efa\u8bae\u60a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"feature/*")," \u5206\u652f\u63d0\u4ea4 bugfix \u6216\u529f\u80fd PR\u3002"))))),(0,r.kt)("p",null,"\u4e00\u822c\u9519\u8bef\u4fee\u590d\u6216\u529f\u80fd\u8bf7\u6c42\u63d0\u4ea4\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"feature/*")," \u5206\u652f\u3002 \u7ecf\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"Code Review")," \u548c",(0,r.kt)("strong",{parentName:"p"},"\u5355\u5143\u6d4b\u8bd5"),"\u540e\uff0c\u6211\u4eec\u4f1a\u5c06\u5b83\u4eec\u5408\u5e76\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u5206\u652f\u5e76\u5728\u4e0b\u4e2a\u5c0f\u7248\u672c\u751f\u6548\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),"\u5206\u652f\u4f1a\u5b9a\u671f\u8fdb\u884c\u5168\u9762\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u901a\u8fc7\u540e\u4f1a\u5408\u5e76\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"master\n \u2191\ndev                   \u2190  \u5b9a\u671f\u5168\u9762\u6d4b\u8bd5\n \u2191 \nfeature/fix_zhangsan  \u2190  PR\uff0ccode review + \u5355\u5143\u6d4b\u8bd5\n")),(0,r.kt)("h3",{id:"\u63d0\u4ea4-pr"},"\u63d0\u4ea4 PR"),(0,r.kt)("p",null,"\u6309\u7167\u5982\u4e0b\u6b65\u9aa4",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eventtracing/dawn/pulls"},"\u63d0\u4ea4 PR"),"\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," fork \u5e76\u521b\u5efa\u60a8\u7684\u5206\u652f\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u66f4\u6539\u4e86 API\uff0c\u8bf7\u66f4\u65b0\u4ee3\u7801\u6216\u6587\u6863\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u7248\u6743\u58f0\u660e\u6dfb\u52a0\u5230\u60a8\u6dfb\u52a0\u7684\u4efb\u4f55\u65b0\u6587\u4ef6\u7684\u9876\u90e8\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u4f60\u7684\u4ee3\u7801 lints \u548c checkstyles\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u53cd\u590d\u6d4b\u8bd5\u60a8\u7684\u4ee3\u7801\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5f80 ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," \u5206\u652f\u63d0\u4ea4\u60a8\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eventtracing/dawn/pulls"},"pull request"),"\u3002")),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"\u7ed9\u672c\u9879\u76ee\u63d0\u4ea4\u6e90\u7801\u8868\u793a\u60a8\u540c\u610f\u672c\u9879\u76ee\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eventtracing/dawn/blob/master/LICENSE"},"LICENSE")))}s.isMDXComponent=!0}}]);