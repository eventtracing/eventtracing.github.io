"use strict";(self.webpackChunkeventtracing_github_io=self.webpackChunkeventtracing_github_io||[]).push([[1970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:20},l="iOS",o={unversionedId:"Installation/iOS",id:"Installation/iOS",title:"iOS",description:"- \u66d9\u5149\u6700\u6734\u7d20\u7684\u601d\u8def\u662f\uff1a\u901a\u8fc7\u7aef\u5f00\u53d1\u5728\u7279\u5b9aUI\u5c42\u7ea7View\u4e0a\u8fdb\u884c\u6807\u8bc6\u548c\u53c2\u6570\u8bbe\u7f6e(\u4e00\u822c\u4e0e\u8bbe\u7f6eView\u7684\u6e32\u67d3\u6570\u636e\u5b9e\u9645\u4e00\u81f4\uff0c\u8bbe\u7f6e\u7684\u4f9d\u636e\u4e3a\u57cb\u70b9\u5e73\u53f0EasyInsight\u4e0a\u5f55\u5165\u7684\u57cb\u70b9\u5bf9\u8c61\u4fe1\u606f)",source:"@site/docs/Installation/iOS.md",sourceDirName:"Installation",slug:"/Installation/iOS",permalink:"/docs/Installation/iOS",draft:!1,editUrl:"https://github.com/eventtracing/eventtracing.github.io/blob/master/docs/Installation/iOS.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u66d9\u5149\u63a5\u5165",permalink:"/docs/category/\u66d9\u5149\u63a5\u5165"},next:{title:"Android",permalink:"/docs/Installation/Android"}},p={},c=[{value:"\u5f15\u5165 SDK",id:"\u5f15\u5165-sdk",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"1. \u9759\u6001 \u516c\u53c2\u914d\u7f6e",id:"1-\u9759\u6001-\u516c\u53c2\u914d\u7f6e",level:3},{value:"2. \u52a8\u6001 \u516c\u53c2\u914d\u7f6e",id:"2-\u52a8\u6001-\u516c\u53c2\u914d\u7f6e",level:3},{value:"3. \u65e5\u5fd7\u8f93\u51fa\u901a\u9053\u914d\u7f6e",id:"3-\u65e5\u5fd7\u8f93\u51fa\u901a\u9053\u914d\u7f6e",level:3},{value:"4. \u6dfb\u52a0\u65e5\u5fd7\u7684filters",id:"4-\u6dfb\u52a0\u65e5\u5fd7\u7684filters",level:3},{value:"5. \u989d\u5916\u7684\u4e00\u4e9b\u914d\u7f6e",id:"5-\u989d\u5916\u7684\u4e00\u4e9b\u914d\u7f6e",level:3},{value:"6. \u5bf9 VTree \u7684\u521b\u5efa\uff0c\u8282\u70b9\u7684\u66dd\u5149\uff0c\u7528\u6237event\u57cb\u70b9\u8fdb\u884c\u76d1\u63a7",id:"6-\u5bf9-vtree-\u7684\u521b\u5efa\u8282\u70b9\u7684\u66dd\u5149\u7528\u6237event\u57cb\u70b9\u8fdb\u884c\u76d1\u63a7",level:3},{value:"7. VTree\u7684\u6027\u80fd\u6570\u636e\u76d1\u63a7",id:"7-vtree\u7684\u6027\u80fd\u6570\u636e\u76d1\u63a7",level:3},{value:"8. \u4e91\u97f3\u4e50app\u7684\u9875\u9762\u5c42\u7ea7\u7ed3\u6784\uff08\u4f9b\u53c2\u8003\uff09",id:"8-\u4e91\u97f3\u4e50app\u7684\u9875\u9762\u5c42\u7ea7\u7ed3\u6784\u4f9b\u53c2\u8003",level:3},{value:"UIMainViewController\u7684\u7279\u6b8a\u6027",id:"uimainviewcontroller\u7684\u7279\u6b8a\u6027",level:4},{value:"9. \u4e00\u4e2a\u5b8c\u6574\u7684\u521d\u59cb\u5316\u793a\u4f8b",id:"9-\u4e00\u4e2a\u5b8c\u6574\u7684\u521d\u59cb\u5316\u793a\u4f8b",level:3},{value:"\u666e\u901a\u57cb\u70b9\u7684\u683c\u5f0f",id:"\u666e\u901a\u57cb\u70b9\u7684\u683c\u5f0f",level:2},{value:"\u81ea\u52a8\u6253\u70b9",id:"\u81ea\u52a8\u6253\u70b9",level:2},{value:"\u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177",id:"\u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177",level:2},{value:"\u57cb\u70b9\u5b9e\u65f6\u6821\u9a8c\u5de5\u5177",id:"\u57cb\u70b9\u5b9e\u65f6\u6821\u9a8c\u5de5\u5177",level:2}],u={toc:c};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ios"},"iOS"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u66d9\u5149\u6700\u6734\u7d20\u7684\u601d\u8def\u662f\uff1a\u901a\u8fc7\u7aef\u5f00\u53d1\u5728\u7279\u5b9aUI\u5c42\u7ea7View\u4e0a\u8fdb\u884c\u6807\u8bc6\u548c\u53c2\u6570\u8bbe\u7f6e(\u4e00\u822c\u4e0e\u8bbe\u7f6eView\u7684\u6e32\u67d3\u6570\u636e\u5b9e\u9645\u4e00\u81f4\uff0c\u8bbe\u7f6e\u7684\u4f9d\u636e\u4e3a\u57cb\u70b9\u5e73\u53f0EasyInsight\u4e0a\u5f55\u5165\u7684\u57cb\u70b9\u5bf9\u8c61\u4fe1\u606f) "),(0,r.kt)("li",{parentName:"ul"},"\u5f97\u5230\u4e00\u68f5\u7a00\u758f\u540e\u7684\u57cb\u70b9\u5bf9\u8c61\u865a\u62df\u6811 "),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7AOP\u4e00\u4e9b\u65f6\u673a\u8fbe\u5230vTree\u7684\u81ea\u52a8\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u524d\u540evTree\u7ed3\u6784\u7684\u53d8\u5316\u68c0\u6d4b\u66dd\u5149\u72b6\u6001(dfs)"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u66dd\u5149/\u53cd\u66dd\u5149/\u70b9\u51fb\u7b49\u4e8b\u4ef6\u7684\u81ea\u52a8\u4e0a\u62a5 "),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u62a5\u65f6\u4ece\u5f53\u524d\u8282\u70b9\u5f80\u4e0a\u6536\u96c6\u6574\u6761\u94fe\u8def(\u6811\u679d)\u4e0a\u7684\u6240\u6709\u57cb\u70b9\u5bf9\u8c61\u7684\u53c2\u6570\uff0c\u7ec4\u7ec7\u6570\u636e\u683c\u5f0f\u5316 "),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u90e8\u5206\u53c2\u6570\u7684\u6807\u51c6\u5316\u548c\u8282\u70b9\u5751\u4f4d\u4fe1\u606f\u7684\u552f\u4e00\u63cf\u8ff0\u80fd\u529b\uff0c\u751f\u6210\u4e86\u8bf8\u591a\u7528\u4e8e\u524d\u540e\u5f52\u56e0\u7684refer\u53c2\u6570\uff0c\u5728\u4e0a\u62a5\u65f6\u5e26\u4e0a\u4ee5\u63d0\u5347\u540e\u7eed\u6570\u636e\u5904\u7406\u6027\u80fd\u3002")))),(0,r.kt)("h2",{id:"\u5f15\u5165-sdk"},"\u5f15\u5165 SDK"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528 cocoapods \u63a5\u5165")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# \u57cb\u70b9SDK\npod 'EventTracing'\n\n# \u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177\npod 'EventTracing-iOS-Debug', :configurations => [\"Debug\"]\n\n# \u57cb\u70b9\u5b9e\u65f6\u6821\u9a8c\u5de5\u5177\npod 'EventTracing-iOS-LogViewer', :configurations => [\"Debug\"]\n")),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u65f6\u673a")),(0,r.kt)("p",null,"\u65f6\u673a\u5e94\u8be5\u5c3d\u91cf\u7684\u65e9\uff0c\u6bd4\u5982\u53ef\u4ee5\u7d27\u8ddf\u7740BI\u65e5\u5fd7\u901a\u9053\u7684\u521d\u59cb\u5316\u65f6\u673a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316 SDK")),(0,r.kt)("admonition",{title:"\u521d\u59cb\u5316\u6a21\u677f",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'[[EventTracingEngine sharedInstance] startWithContextBuilder:^(id<EventTracingContextBuilder>  _Nonnull builder) {\n    // 1. static public params\n    [builder configStaticPublicParams:@{\n        @"g_xxx": @"xxx"\n    }];\n    \n    // 2. dynamic public params\n    [builder registePublicDynamicParamsProvider:self];\n    \n    // 3. output channel\n    [builder addOutputChannel:self];\n    \n    // 4. add params filters\n    [builder addParamsFilter:self];\n    \n    // 5. extra configuration\n    builder.extraConfigurationProvider = self;\n    \n    // 6. add VTree observer\n    [builder addVTreeObserver:self];\n    \n    // 7. VTree performance observer\n    [builder setVTreePerformanceObserver:self];\n}];\n'))),(0,r.kt)("p",null,"\u5173\u4e8e\u6bcf\u4e2a\u521d\u59cb\u5316\u9009\u9879\u7684",(0,r.kt)("strong",{parentName:"p"},"\u8be6\u7ec6\u89e3\u91ca")),(0,r.kt)("h3",{id:"1-\u9759\u6001-\u516c\u53c2\u914d\u7f6e"},"1. \u9759\u6001 \u516c\u53c2\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u914d\u7f6e\u4e00\u4e9b\u56fa\u5b9a\u7684\u4e0d\u4f1a\u53d8\u5316\u7684\u516c\u53c2"),(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u4e2aSDK\u51fa\u53bb\u7684\u57cb\u70b9\uff0c\u90fd\u4f1a\u5e26\u7740\u8fd9\u4e9b\u53c2\u6570"))),(0,r.kt)("h3",{id:"2-\u52a8\u6001-\u516c\u53c2\u914d\u7f6e"},"2. \u52a8\u6001 \u516c\u53c2\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4e00\u4e9b\u4f1a\u53d8\u5316\u7684\u516c\u53c2"),(0,r.kt)("li",{parentName:"ol"},"\u6bd4\u5982ABTest, userId\u4e4b\u7c7b\u7684\uff0c\u4f1a\u968f\u7740app\u7684\u4f7f\u7528\u800c\u53d8\u5316\u7684\u53c2\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u4e2aSDK\u51fa\u53bb\u7684\u57cb\u70b9\uff0c\u90fd\u4f1a\u8c03\u7528\u8be5\u56de\u8c03\uff0c\u5e76\u5e26\u7740\u8fd9\u4e9b\u53c2\u6570"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"   #pragma mark - EventTracingOutputPublicDynamicParamsProvider\n   - (NSDictionary *)outputPublicDynamicParamsForEvent:(NSString *)event\n                                                  node:(EventTracingVTreeNode * _Nullable)node\n                                               inVTree:(EventTracingVTree * _Nullable)VTree {\n       return @{};\n   }\n")),(0,r.kt)("h3",{id:"3-\u65e5\u5fd7\u8f93\u51fa\u901a\u9053\u914d\u7f6e"},"3. \u65e5\u5fd7\u8f93\u51fa\u901a\u9053\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u65e5\u5fd7\u53ef\u4ee5\u8f93\u51fa\u5230\u591a\u4e2a\u5730\u65b9\uff0c\u6bd4\u5982\u8f93\u51fa\u5230\u65e5\u5fd7\u4e0a\u4f20\u3001\u6bd4\u5982\u8f93\u51fa\u5230ConsoleLog\u3001\u6bd4\u5982\u8f93\u51fa\u5230web\u65e5\u5fd7\u67e5\u770b\u5e73\u53f0\u7b49"),(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u4e2a\u65e5\u5fd7\u7684\u8f93\u51fa\uff0c\u90fd\u53ef\u4ee5\u5355\u72ec\u5230\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u7c7b\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTracingEventOutputChannel")," \u534f\u8bae"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"   @protocol EventTracingEventOutputChannel <NSObject>\n   - (void)eventOutput:(EventTracingEventOutput *)eventOutput didOutputEvent:(NSString *)event json:(NSDictionary *)json;\n   @end\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'   #pragma mark - EventTracingEventOutputChannel\n   - (void)eventOutput:(EventTracingEventOutput *)eventOutput didOutputEvent:(NSString *)event json:(NSDictionary *)json {\n        // ETLogDebug(@"## ET ##, did emit event: %@, json: %@", event, json.jsonString);\n        // [self _doOutputToBILoggerViewer:[NSString stringWithFormat:@"ET_%@", event] json:json];\n   }\n')),(0,r.kt)("h3",{id:"4-\u6dfb\u52a0\u65e5\u5fd7\u7684filters"},"4. \u6dfb\u52a0\u65e5\u5fd7\u7684filters"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u6240\u6709\u4eceSDK\u6253\u5370\u51fa\u6765\u7684\u65e5\u5fd7\uff0c\u90fd\u4f1a\u7ecf\u8fc7filter\u7684\u8fc7\u6ee4"),(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u53ef\u4ee5\u5bf9\u65e5\u5fd7\u7684\u683c\u5f0f\uff0c\u503c\uff0c\u7b49\u505a\u589e\u3001\u5220\u3001\u8be5\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTracingOutputParamsFilter")," \u534f\u8bae"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"   #pragma mark - EventTracingOutputParamsFilter\n   - (NSDictionary *)filteredJsonWithEvent:(NSString *)event\n                              originalJson:(NSDictionary *)originalJson\n                                      node:(EventTracingVTreeNode *)node\n                                   inVTree:(EventTracingVTree *)VTree {\n       NSMutableDictionary *resultJson = originalJson.mutableCopy;\n       return resultJson.copy;\n   }\n")),(0,r.kt)("h3",{id:"5-\u989d\u5916\u7684\u4e00\u4e9b\u914d\u7f6e"},"5. \u989d\u5916\u7684\u4e00\u4e9b\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u53ef\u4ee5\u505a\u4e00\u4e9b\u989d\u5916\u7684\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ol"},"\u6bd4\u5982: \u914d\u7f6e\u6240\u6709\u7684 event == ",(0,r.kt)("inlineCode",{parentName:"li"},"ET_EVENT_ID_E_CLCK")," \u7684\u57cb\u70b9\uff0c\u90fd\u505a _actseq \u81ea\u589e\uff0c\u7528\u4e8e\u94fe\u8def\u8ffd\u8e2a"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u6709\u54ea\u4e9b _oid \u53c2\u4e0e _hsrefer \u7684\u94fe\u8def\u8ffd\u8e2a\u5904\u7406"),(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u4fe9\u914d\u7f6e\u90fd\u8ddf ",(0,r.kt)("inlineCode",{parentName:"li"},"\u94fe\u8def\u8ffd\u8e2a")," \u6709\u5173\u7cfb\uff0c\u9700\u8981\u53bb\u8be6\u7ec6\u4e86\u89e3\u94fe\u8def\u8ffd\u8e2a\u7684\u65b9\u6848"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'   #pragma mark - EventTracingExtraConfigurationProvider\n   - (NSArray<NSString *> *)needIncreaseActseqLogEvents {\n       return @[ET_EVENT_ID_E_CLCK];\n   }\n\n   - (NSArray<NSString *> *)needStartHsreferOids {\n       return @[@"page_home", @"page_voice", @"page_setting", @"page_mine", @"page_social", @"page_karaoke", @"page_search", @"page_search_result"];\n   }\n')),(0,r.kt)("h3",{id:"6-\u5bf9-vtree-\u7684\u521b\u5efa\u8282\u70b9\u7684\u66dd\u5149\u7528\u6237event\u57cb\u70b9\u8fdb\u884c\u76d1\u63a7"},"6. \u5bf9 VTree \u7684\u521b\u5efa\uff0c\u8282\u70b9\u7684\u66dd\u5149\uff0c\u7528\u6237event\u57cb\u70b9\u8fdb\u884c\u76d1\u63a7"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTracingVTreeObserver")," \u534f\u8bae"))),(0,r.kt)("h3",{id:"7-vtree\u7684\u6027\u80fd\u6570\u636e\u76d1\u63a7"},"7. VTree\u7684\u6027\u80fd\u6570\u636e\u76d1\u63a7"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"VTree \u7684\u521b\u5efa\u662f\u5728CPU\u7a7a\u95f2\u7684\u65f6\u5019\uff0c\u5728\u4e3b\u7ebf\u7a0b\u8fdb\u884c\u521b\u5efa\u7684\uff0c\u5e76\u4e14\u5728\u4e3b\u7ebf\u7a0b\u505a\u4e86\u7b80\u5355\u7684\u8282\u70b9 visible \u7684\u5224\u65ad"),(0,r.kt)("li",{parentName:"ol"},"\u540e\u7eed\u8fd8\u6709\u5f88\u591a\u903b\u8f91\u653e\u7f6e\u5728\u4e86\u5b50\u7ebf\u7a0b\u6765\u8fdb\u884c\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ol"},"\u4e3b\u7ebf\u7a0b\u7684\u6027\u80fd\u6570\u636e\u6bd4\u8f83\u91cd\u8981\uff0c\u9700\u8981\u88ab\u76d1\u63a7\u8d77\u6765"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"/// MARK: \u6027\u80fd\u8c03\u8bd5\u6570\u636e\n@protocol EventTracingContextVTreePerformanceObserver <NSObject>\n- (void)didGenerateVTree:(EventTracingVTree *)VTree\n                     idx:(NSUInteger)idx\n                    cost:(NSTimeInterval)cost\n                     ave:(NSTimeInterval)ave\n                     min:(NSTimeInterval)min\n                     max:(NSTimeInterval)max;\n@end\n")),(0,r.kt)("h3",{id:"8-\u4e91\u97f3\u4e50app\u7684\u9875\u9762\u5c42\u7ea7\u7ed3\u6784\u4f9b\u53c2\u8003"},"8. \u4e91\u97f3\u4e50app\u7684\u9875\u9762\u5c42\u7ea7\u7ed3\u6784\uff08\u4f9b\u53c2\u8003\uff09"),(0,r.kt)("h4",{id:"uimainviewcontroller\u7684\u7279\u6b8a\u6027"},"UIMainViewController\u7684\u7279\u6b8a\u6027"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"main vc\u59cb\u7ec8\u5904\u4e8e\u6700\u5e95\u5c42\u9875\u9762\uff0c\u6240\u6709\u7684\u9875\u9762\u90fd\u627f\u8f7d\u5728\u5176\u4e4b\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9996\u9875 5 \u4e2atab\u7684\u65f6\u5019\uff0c\u57cb\u70b9\u7684 _plist \u4e2d\u5e0c\u671b\u6709 _oid_main \u5b58\u5728\uff0c\u6b64\u65f6 _oid_main \u662f rootpage"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u5904\u4e8e\u4e8c\u7ea7\u9875\u9762\u7684\u65f6\u5019\uff0c_plist \u4e2d\u4e0d\u5e0c\u671b\u6709 _oid_main \u5b58\u5728\uff0c\u6b64\u65f6\u4e8c\u7ea7\u9875\u9762\u5e94\u8be5\u662f rootpage"),(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u53ca\u5f53\u4e00\u4e2a\u4e8c\u7ea7\u9875\u9762\u624b\u52bf\u8fd4\u56de\uff0c\u6ed1\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u751f\u6210\u7684VTree\uff0c\u9700\u8981\u4fdd\u8bc1 _oid_main \u53ea\u662f\u9996\u9875\u573a\u666f\u7684 rootpage, \u5f53\u524d\u4e8c\u7ea7\u9875\u9762\u4e0d\u53d8"),(0,r.kt)("li",{parentName:"ol"},"\u505a\u6cd5: \u53c2\u89c1 ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTracingVTreeNodeExtraConfigProtocol")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'   #pragma mark - EventTracingVTreeNodeExtraConfigProtocol\n   - (NSArray<NSString *> *)et_validForContainingSubNodeOids {\n       return @[@"page_home", @"page_voice", @"page_setting", @"page_mine", @"page_social", @"page_karaoke"];\n   }\n')),(0,r.kt)("h3",{id:"9-\u4e00\u4e2a\u5b8c\u6574\u7684\u521d\u59cb\u5316\u793a\u4f8b"},"9. \u4e00\u4e2a\u5b8c\u6574\u7684\u521d\u59cb\u5316\u793a\u4f8b"),(0,r.kt)("admonition",{title:"\u4e00\u4e2a\u5b8c\u6574\u7684\u521d\u59cb\u5316\u793a\u4f8b",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'[[EventTracingEngine sharedInstance] startWithContextBuilder:^(id<EventTracingContextBuilder>  _Nonnull builder) {\n\n    // 1. \u9759\u6001\u516c\u53c2\n    [builder configStaticPublicParams:@{\n        @"g_public_static_p_key": @"_public_static_p_value_test"\n    }];\n  \n    // 2. \u52a8\u6001\u516c\u53c2\n    [builder registePublicDynamicParamsProvider:self];\n  \n    // 3. \u6ce8\u518c\u65e5\u5fd7\u8f93\u51fa\u683c\u5f0f; \u9ed8\u8ba4SDK\u5185\u90e8\u5c31\u662f\u6ce8\u518c\u4e86 `EventTracingOutputFlattenFormatter`\n    [builder registeFormatter:[[EventTracingOutputFlattenFormatter alloc] init]];\n    // 3.1 \u9ed8\u8ba4SDK\u5185\u90e8\u5c31\u662f\u6ce8\u518c\u4e86 `EventTracingReferNodeSCMDefaultFormatter`\n    [builder setupReferNodeSCMFormatter:[[EventTracingReferNodeSCMDefaultFormatter alloc] init]];\n  \n    // 4. output \u8f93\u51fa\n    [builder addOutputChannel:self];\n  \n    // 5. params filter\n    [builder addParamsFilter:self];\n  \n    // 6. multi refer history\n    [[EventTracingMultiReferPatch sharedPatch] patchOnContextBuilder:builder];\n  \n    // 7. \u5141\u8bb8\u6eda\u52a8\u4e2d\u589e\u91cf\u6784\u5efa VTree\n    [[EventTracingEngine sharedInstance] enableIncrementalVTreeWhenScroll];\n  \n    // 7.1 \u6eda\u52a8\u9650\u6d41: \u6eda\u52a8\u6a21\u5f0f\u4e0b\uff0c\u589e\u91cf\u6784\u5efaVTree\uff0c\u914d\u7f6e \u6700\u5c0f\u6ed1\u52a8\u95f4\u9694\u65f6\u957f && \u6700\u5c0f\u6ed1\u52a8\u95f4\u9694\u8ddd\u79bb\n    // default: 0.05s && {5.f, 5.f}\n    [builder configScrollThrottleTolerentDuration:0.05f tolerentOffset:CGPointMake(5.f, 5.f)];\n  \n    // 8. \u5143\u7d20\u8282\u70b9\uff0c\u9ed8\u8ba4\u4e0d\u6253 \u66dd\u5149\u7ed3\u675f\u57cb\u70b9\n    builder.elementAutoImpressendEnable = NO;\n  \n    // 9. \u4e00\u4e9b\u989d\u5916\u914d\u7f6e extra configuration\n    builder.extraConfigurationProvider = self;\n  \n    // For Debug\n#ifdef DEBUG\n    {\n        // 1. internal log\n        builder.internalLogOutputInterface = self;\n  \n        // 2. config exception handler\n        builder.exceptionInterface = self;\n  \n        // 3. add VTree observer\n        [builder addVTreeObserver:self];\n  \n        // 4. VTree performance observer\n        [builder setVTreePerformanceObserver:self];\n  \n        // 5. \u68c0\u67e5 \u53c2\u6570\u547d\u540d \u7b49\u662f\u5426\u89c4\u8303\uff0c\u4e5f\u68c0\u67e5\u662f\u5426\u4e1a\u52a1\u4fa7\u4f7f\u7528\u4e86\u5185\u7f6e\u7684\u53c2\u6570key\n        builder.paramGuardEnable = YES;\n  \n        // 6. ViewController did load view\n        builder.viewControllerDidNotLoadViewExceptionTip = ETViewControllerDidNotLoadViewExceptionTipCostom;\n        // For Assert Scene\n        // builder.viewControllerDidNotLoadViewExceptionTip = ETViewControllerDidNotLoadViewExceptionTipAssert;\n  \n        // 7. Refer format `_dkey` component\n        [builder configReferFormatHasDKeyComponent:YES];\n  \n        // 8. For Debug Inspect Tools\n        [builder addOutputChannel:[EventTracingInspectEngine sharedInstance]];\n  \n        // 9. \u6dfb\u52a0\u53c2\u6570key\u9ed1\u540d\u5355\uff0c\u4ee5\u4e0b\u53c2\u6570key\u4e0d\u53ef\u4ee5\u51fa\u73b0\n        [EventTracingBuilder addBlackListParamKey:@"blacklist_param_key" errorString:@"\u8be5\u53c2\u6570\u662f\u9ed1\u540d\u5355\uff0c\u4e0d\u5e94\u8be5\u51fa\u73b0\u5728\u57cb\u70b9\u4e2d"];\n    }\n#endif\n}];\n'))),(0,r.kt)("h2",{id:"\u666e\u901a\u57cb\u70b9\u7684\u683c\u5f0f"},"\u666e\u901a\u57cb\u70b9\u7684\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_elist": [\n        {\n            "_oid": "\u3010\u5fc5\u9009\u3011\u5143\u7d20\u7684oid",\n            "_pos": "\u3010\u53ef\u9009\u3011\uff0c\u4e1a\u52a1\u65b9\u914d\u7f6e\u7684\u4f4d\u7f6e\u4fe1\u606f",\n            "biz_param": "\u3010\u6309\u9700\u3011\u4e1a\u52a1\u53c2\u6570\uff0c\u4e1a\u52a1\u65b9\u914d\u7f6e\uff0ckey\u90fd\u4e0d\u80fd\u4ee5\u4e0b\u5212\u7ebf\u5f00\u5934"\n        }\n    ],\n    "_plist": [\n        {\n            "_oid": "\u3010\u5fc5\u9009\u3011page\u7684oid,\uff1b\u4e1a\u52a1\u65b9\u63a5\u5165: \u4f18\u5148\u4f7f\u7528router\u7684path",\n            "_pos": "\u3010\u53ef\u9009\u3011\uff0c\u4e1a\u52a1\u65b9\u914d\u7f6e\u7684\u4f4d\u7f6e\u4fe1\u606f",\n            "_pgstep": "\u3010\u5fc5\u9009\u3011, \u8be5page/\u5b50page\u66dd\u5149\u65f6\u7684\u9875\u9762\u6df1\u5ea6",\n            "_pgrefer": "\u3010\u53ef\u9009\u3011rootPage\u5fc5\u586b\uff0c\u683c\u5f0f: [e/p][_actseq][_pgstep(rootPageNode)][_spm]",\n            "_psrefer": "\u3010\u53ef\u9009\u3011rootPage\u5fc5\u586b\uff0c\u683c\u5f0f: [e/p][_actseq][_pgstep(rootPageNode)][_spm]",\n            "biz_param": "\u3010\u6309\u9700\u3011\u4e1a\u52a1\u53c2\u6570\uff0c\u4e1a\u52a1\u65b9\u914d\u7f6e\uff0ckey\u90fd\u4e0d\u80fd\u4ee5\u4e0b\u5212\u7ebf\u5f00\u5934"\n        }\n    ],\n    "_spm": "\u3010\u5fc5\u9009\u3011\u8fd9\u91cc\u63cf\u8ff0\u7684\u662f\u8282\u70b9\u7684\u201c\u4f4d\u7f6e\u201d\u4fe1\u606f\uff0c\u7528\u6765\u5b9a\u4f4d\u8282\u70b9\uff1b\u5143\u7d20/\u9875\u9762\u7684spm\uff0c\u5728\u865a\u62df\u6811\u4e2d\u9012\u5f52\u5411\u4e0a\u67e5\u627e\uff0c\u683c\u5f0f: [_oid[_pos]]*",\n    "_scm": "\u3010\u5fc5\u9009\u3011\u8fd9\u91cc\u63cf\u8ff0\u7684\u662f\u8282\u70b9\u7684\u201c\u5185\u5bb9\u201d\u4fe1\u606f\uff0c\u7528\u6765\u63cf\u8ff0\u8282\u70b9\u7684\u5185\u5bb9\uff1b\u5143\u7d20/\u9875\u9762\u7684scm\uff0c\u5728\u865a\u62df\u6811\u4e2d\u9012\u5f52\u5411\u4e0a\u67e5\u627e\uff0c\u683c\u5f0f: [cid:ctype:ctraceid:ctrp]*",\n    "_hsrefer": "\u3010\u53ef\u9009\u3011\u6d88\u8d39\u516c\u53c2, \u683c\u5f0f: [e][_actseq][_pgstep][_spm] \u6216\u8005 [p][_pgstep][_pgstep(rootpage)][_spm]",\n    "_sessid": "\u3010\u5fc5\u9009\u3011\u51b7\u542f\u52a8\u4f1a\u53d8\uff0c\u56de\u8bddid",\n    "_sidrefer": "\u3010\u5fc5\u9009\u3011\u4e0a\u6b21\u51b7\u542f\u52a8\u7684\u56de\u8bddid\uff0capp\u7b2c\u4e00\u6b21\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u8be5\u503c\u4e3a\u7a7a",\n    "_actseq": "\u3010\u6709\u9009\u62e9\u7684\u5fc5\u9009\u3011, \u9875\u9762\u66dd\u5149/aop\u7684_ec\u4e8b\u4ef6\uff0c\u4ee5\u53ca\u6309\u9700\u7684\u4e1a\u52a1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0cactseq\u4f1a\u81ea\u589e; \u6216\u8005\u8bf4\u5982\u679c\u53d1\u751f\u4e86actseq\u81ea\u589e\uff0c\u5219\u9700\u8981\u8be5\u53c2\u6570",\n    "_eventcode": "\u3010\u5fc5\u9009\u3011\u4e8b\u4ef6: _ec/_ev/_ed/_pv/_pd",\n        "_duration": "12000: \u4e00\u4e2a\u6570\u5b57\uff0c\u6beb\u79d2\u5355\u4f4d"\n    "public_param": "\u516c\u53c2"\n        "seq": "\u65e5\u5fd7\u5e8f\u53f7"\n        "ct": "ua",\n        "sapp": "music",\n        "abtest": ""\n}\n')),(0,r.kt)("h2",{id:"\u81ea\u52a8\u6253\u70b9"},"\u81ea\u52a8\u6253\u70b9"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5185\u90e8\u4e8b\u4ef6")),(0,r.kt)("p",null,"\u652f\u6301\u7684\u81ea\u52a8\u6253\u70b9\u4e8b\u4ef6\u5305\u62ec:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u70b9\u51fb"),"\uff1a\u9ed8\u8ba4\u5f00\u542f\uff0c\u5143\u7d20\u88ab\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"_ec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u66dd\u5149\u5f00\u59cb"),"\uff1a\u9ed8\u8ba4\u5f00\u542f\uff0c\u5206\u4e3a\u9875\u9762\u66dd\u5149(",(0,r.kt)("inlineCode",{parentName:"li"},"_pv"),")\u548c\u5143\u7d20\u66dd\u5149(",(0,r.kt)("inlineCode",{parentName:"li"},"_ev"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u66dd\u5149\u7ed3\u675f"),"\uff1a\u9ed8\u8ba4\u5173\u95ed\uff0c\u9875\u9762\u66dd\u5149\u7ed3\u675f(",(0,r.kt)("inlineCode",{parentName:"li"},"_pd"),")\u548c\u5143\u7d20\u66dd\u5149\u7ed3\u675f(",(0,r.kt)("inlineCode",{parentName:"li"},"_ed"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u51b7\u542f\u52a8"),"\uff1a\u9ed8\u8ba4\u5f00\u542f\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"_ac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8fdb\u5165\u524d\u53f0"),"\uff1a\u9ed8\u8ba4\u5f00\u542f\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"_ai")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8fdb\u5165\u540e\u53f0"),"\uff1a\u9ed8\u8ba4\u5f00\u542f\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"_ao"),"\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"_duration")," \u5b57\u6bb5\u5373\u662fapp\u505c\u7559\u65f6\u957f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6eda\u52a8"),"\uff1a\u9ed8\u8ba4\u5173\u95ed\uff0c\u5217\u8868\u89c6\u56fe\u6eda\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"_es"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6253\u70b9")),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4e8b\u4ef6\u5373\u652f\u6301\u81ea\u52a8\u6253\u70b9\uff0c\u4e5f\u652f\u6301\u624b\u52a8\u89e6\u53d1\u6253\u70b9\uff0c\u6bd4\u5982\u4e0b\u65b9\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u624b\u52a8\u89e6\u53d11\u6b21 \u70b9\u51fb\u4e8b\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"_ec")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"[EventTracingBuilder logWithView:view event:^(id<EventTracingLogNodeEventActionBuilder>  _Nonnull builder) {\n    builder.ec();\n}];\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u8f6c\u53d1")),(0,r.kt)("p",null,"\u6b64\u5916\u5f53\u66dd\u5149\u548c\u70b9\u51fb\u7684view\u4e0d\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e2a\u975e\u8282\u70b9\u7684view\u4e0a\u7684event\u4e8b\u4ef6 pip \u5230\u53e6\u5916\u4e00\u4e2a\u8282\u70b9\u4e0a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"-[UIView et_pipEvent:ET_EVENT_ID_E_CLCK toView:view];\n")),(0,r.kt)("h2",{id:"\u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177"},"\u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u672c\u5730\u57cb\u70b9\u8c03\u8bd5\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u4e13\u95e8\u7684\u57cb\u70b9\u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177\uff0c\u5de5\u5177\u7684\u9700\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTracing-iOS-Debug"),"\u5de5\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTracing-iOS-Debug"),"\u540e\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5408\u9002\u7684\u65f6\u673a\uff0c\u5f00\u542f\u548c\u5173\u95ed\u5de5\u5177")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},"/// \u5f00\u542f\n[[EventTracingInspectEngine sharedInstance] startInspect2D];\n\n/// \u5173\u95ed\n[[EventTracingInspectEngine sharedInstance] stop];\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/23860192850/248d/cb14/2ff2/5f1ded9568c0d56f264bbc4d591def5e.jpg",alt:"\u622a\u56fe"})),(0,r.kt)("h2",{id:"\u57cb\u70b9\u5b9e\u65f6\u6821\u9a8c\u5de5\u5177"},"\u57cb\u70b9\u5b9e\u65f6\u6821\u9a8c\u5de5\u5177"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u672c\u5730\u57cb\u70b9\u6821\u9a8c\uff0c\u6211\u4eec\u8ddf\u5e73\u53f0\u4e00\u8d77\u5bf9\u63a5\uff0c\u505a\u4e86\u57cb\u70b9\u5b9e\u65f6\u6821\u9a8c\u5de5\u5177\uff0c\u5de5\u5177\u7684\u96c6\u6210\u9700\u5f15\u5165 ",(0,r.kt)("inlineCode",{parentName:"li"},"EventTracing-iOS-LogViewer"),"\u5de5\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5e73\u53f0\u7684API\u5982\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'EventTracingLogRealtimeViewerOptions *options = [[EventTracingLogRealtimeViewerOptions alloc] init];\n[[EventTracingLogRealtimeViewer sharedInstance] setupWithOptions:options];\n\nNSString * connectToken = @"";  // token\nNSString * connectPath = @"";   // path\n[[EventTracingLogRealtimeViewer sharedInstance] connectWithPath:connectPath connectToken:connectToken];\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"connectToken & connectPath")),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u5177\u4f53\u7684 token \u548c path \u7684\u793a\u4f8b\u503c\uff0c\u53ef\u4ee5\u53c2\u8003 demo \u4e2d\u63d0\u4f9b\u7684\u4f8b\u5b50\uff0c\u5728\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"ETQRCodeScanViewController.m")," \u4e2d "),(0,r.kt)("li",{parentName:"ul"},"\u8be5\u503c\u7531 Easyinsight \u5e73\u53f0\u63d0\u4f9b\uff0c\u4e00\u822c\u63d0\u4f9b\u4e8c\u7ef4\u7801\u5f62\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u501f\u52a9\u4e8eapp\u5185\u7684 router \u80fd\u529b\uff0c\u5bf9\u4e8c\u7ef4\u7801\u5185\u5bb9\u914d\u5408\u5e73\u53f0\u505a\u6539\u9020\uff0c\u5b9e\u73b0\u63a5\u5165 router \u7cfb\u7edf\u7684\u4e8c\u7ef4\u7801\u626b\u63cf\u94fe\u63a5\u6548\u679c")))),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u60a8\u5e94\u5f53\u53ea\u5728 Debug \u4e0b\u5f15\u5165 ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u89c6\u5316\u8c03\u8bd5\u5de5\u5177")," && ",(0,r.kt)("strong",{parentName:"p"},"\u57cb\u70b9\u5b9e\u65f6\u6821\u9a8c\u5de5\u5177"),", \u4ee5\u514d\u5f71\u54cd\u7ebf\u4e0a\u4e1a\u52a1")))}s.isMDXComponent=!0}}]);