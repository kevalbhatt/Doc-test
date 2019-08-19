!function(e){function t(t){for(var n,a,r=t[0],i=t[1],s=t[2],l=t[3]||[],u=0,c=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(O,a)&&O[a]&&c.push(O[a][0]),O[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(L&&L(t),D.push.apply(D,l);c.length;)c.shift()();return P.push.apply(P,s||[]),o()}function o(){for(var e,t=0;t<P.length;t++){for(var o=P[t],n=!0,a=1;a<o.length;a++){var r=o[a];0!==O[r]&&(n=!1)}n&&(P.splice(t--,1),e=$($.s=o[0]))}return 0===P.length&&(D.forEach(function(e){if(void 0===O[e]){O[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",$.nc&&t.setAttribute("nonce",$.nc),t.rel="prefetch",t.as="script",t.href=H(e),document.head.appendChild(t)}}),D.length=0),e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!k[e])return;for(var o in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,o)&&(f[o]=t[o]);0===--v&&0===y&&C()}(e,t),n&&n(e,t)};var a,r=!0,i="d9aaefab9a728b782111",s=1e4,l={},u=[],c=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,o){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=o||function(){};else t._acceptedDependencies[e]=o||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var o=0;o<e.length;o++)t._declinedDependencies[e[o]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var o=t._disposeHandlers.indexOf(e);o>=0&&t._disposeHandlers.splice(o,1)},check:A,apply:S,status:function(e){if(!e)return m;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:l[e]};return a=void 0,t}var p=[],m="idle";function h(e){m=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var g,f,b,v=0,y=0,x={},k={},w={};function j(e){return+e+""===e?+e:e}function A(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(t=s,t=t||1e4,new Promise(function(e,o){if("undefined"===typeof XMLHttpRequest)return o(new Error("No browser support"));try{var n=new XMLHttpRequest,a=$.p+""+i+".hot-update.json";n.open("GET",a,!0),n.timeout=t,n.send(null)}catch(r){return o(r)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)o(new Error("Manifest request to "+a+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)o(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(r){return void o(r)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;k={},x={},w=e.c,b=e.h,h("prepare");var t=new Promise(function(e,t){g={resolve:e,reject:t}});for(var o in f={},O)E(o);return"prepare"===m&&0===y&&0===v&&C(),t});var t}function E(e){w[e]?(k[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=$.p+""+e+"."+i+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function C(){h("ready");var e=g;if(g=null,e)if(r)Promise.resolve().then(function(){return S(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&t.push(j(o));e.resolve(t)}}function S(t){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var o,n,a,r,s;function c(e){for(var t=[e],o={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var a=n.pop(),i=a.id,s=a.chain;if((r=I[i])&&!r.hot._selfAccepted){if(r.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(r.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var l=0;l<r.parents.length;l++){var u=r.parents[l],c=I[u];if(c){if(c.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(c.hot._acceptedDependencies[i]?(o[u]||(o[u]=[]),d(o[u],[i])):(delete o[u],t.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:o}}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var p={},g=[],v={},y=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var x in f)if(Object.prototype.hasOwnProperty.call(f,x)){var k;s=j(x);var A=!1,E=!1,C=!1,S="";switch((k=f[x]?c(s):{type:"disposed",moduleId:x}).chain&&(S="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(A=new Error("Aborted because of self decline: "+k.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(A=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(k),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),C=!0;break;default:throw new Error("Unexception type "+k.type)}if(A)return h("abort"),Promise.reject(A);if(E)for(s in v[s]=f[s],d(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],k.outdatedDependencies[s]));C&&(d(g,[k.moduleId]),v[s]=y)}var P,D=[];for(n=0;n<g.length;n++)s=g[n],I[s]&&I[s].hot._selfAccepted&&v[s]!==y&&D.push({module:s,errorHandler:I[s].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete O[e]}(e)});for(var H,T,z=g.slice();z.length>0;)if(s=z.pop(),r=I[s]){var M={},L=r.hot._disposeHandlers;for(a=0;a<L.length;a++)(o=L[a])(M);for(l[s]=M,r.hot.active=!1,delete I[s],delete p[s],a=0;a<r.children.length;a++){var _=I[r.children[a]];_&&((P=_.parents.indexOf(s))>=0&&_.parents.splice(P,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(r=I[s]))for(T=p[s],a=0;a<T.length;a++)H=T[a],(P=r.children.indexOf(H))>=0&&r.children.splice(P,1);for(s in h("apply"),i=b,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var R=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(r=I[s])){T=p[s];var B=[];for(n=0;n<T.length;n++)if(H=T[n],o=r.hot._acceptedDependencies[H]){if(-1!==B.indexOf(o))continue;B.push(o)}for(n=0;n<B.length;n++){o=B[n];try{o(T)}catch(F){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:T[n],error:F}),t.ignoreErrored||R||(R=F)}}}for(n=0;n<D.length;n++){var N=D[n];s=N.module,u=[s];try{$(s)}catch(F){if("function"===typeof N.errorHandler)try{N.errorHandler(F)}catch(W){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:W,originalError:F}),t.ignoreErrored||R||(R=W),R||(R=F)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:F}),t.ignoreErrored||R||(R=F)}}return R?(h("fail"),Promise.reject(R)):(h("idle"),new Promise(function(e){e(g)}))}var I={},O={1:0},P=[],D=[];function H(e){return $.p+"static/js/"+({2:"documents-asf-asfinfo",3:"documents-classification-propagation",4:"documents-downloads-downloads",5:"documents-glossary",6:"documents-high-availability",7:"documents-high-level-architecture",8:"documents-hook-hook-falcon",9:"documents-hook-hook-h-base",10:"documents-hook-hook-hive",11:"documents-hook-hook-kafka",12:"documents-hook-hook-sqoop",13:"documents-hook-hook-storm",14:"documents-import-export-export-api",15:"documents-import-export-export-hdfs-api",16:"documents-import-export-export-import-audits",17:"documents-import-export-import-api",18:"documents-import-export-import-api-options",19:"documents-import-export-import-entity-transforms",20:"documents-import-export-import-export-api",21:"documents-import-export-incremental-export",22:"documents-introduction",23:"documents-migration-migration-0-8-to-1-0",24:"documents-misc-atlas-server",25:"documents-misc-replicated-attributes",26:"documents-misc-soft-reference",27:"documents-notifications",28:"documents-project-info-issue-tracking",29:"documents-project-info-mailing-lists",30:"documents-project-info-project-info",31:"documents-project-info-project-license",32:"documents-project-info-source-repository",33:"documents-project-info-team-list",34:"documents-rest-api",35:"documents-search-search-advanced",36:"documents-search-search-basic",37:"documents-security-atlas-ranger-authorizer",38:"documents-security-atlas-simple-authorizer",39:"documents-security-authentication",40:"documents-security-authorization-model",41:"documents-security-security",42:"documents-setup-build-instruction",43:"documents-setup-configuration",44:"documents-setup-eclipse-setup",45:"documents-setup-installation-instruction",46:"documents-setup-quick-start",47:"documents-tools-atlas-repair-index",48:"documents-type-system",49:"documents-whats-new-whats-new-1-0",50:"documents-whats-new-whats-new-2-0"}[e]||e)+"."+{2:"d99711bd",3:"54f128fe",4:"b9a282c0",5:"1a14e835",6:"5a6504f3",7:"ac09ebaf",8:"a5c07bd6",9:"31322393",10:"f1545157",11:"99fa4109",12:"cf6318b7",13:"3cabfa5a",14:"eabf64e2",15:"76ccc36e",16:"e40caa93",17:"0f359f80",18:"40189f5d",19:"8a17bcda",20:"c96acae6",21:"fda70b63",22:"83d61f58",23:"47d2a716",24:"d3fc6bd8",25:"79dde2bb",26:"921c9999",27:"adc5b582",28:"b04d000c",29:"b0a095e0",30:"f3745ad6",31:"669c50f4",32:"00f773de",33:"c90eb241",34:"21325c88",35:"185f635e",36:"490d0d59",37:"1ea9302a",38:"15f1829c",39:"d7800288",40:"3b67859f",41:"778d7272",42:"0019993d",43:"d43705db",44:"c64d8692",45:"1cb104fd",46:"9f2fbe94",47:"63e8e998",48:"e83666e0",49:"f8d8d571",50:"86f0f475"}[e]+".js"}function $(t){if(I[t])return I[t].exports;var o=I[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=u,u=[],c),children:[]};return e[t].call(o.exports,o,o.exports,function(e){var t=I[e];if(!t)return $;var o=function(o){return t.hot.active?(I[o]?-1===I[o].parents.indexOf(e)&&I[o].parents.push(e):(u=[e],a=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),u=[]),$(o)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return $[e]},set:function(t){$[e]=t}}};for(var r in $)Object.prototype.hasOwnProperty.call($,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(o,r,n(r));return o.e=function(e){return"ready"===m&&h("prepare"),y++,$.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===m&&(x[e]||E(e),0===y&&0===v&&C())}},o.t=function(e,t){return 1&t&&(e=o(e)),$.t(e,-2&t)},o}(t)),o.l=!0,o.exports}$.e=function(e){var t=[],o=O[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(function(t,n){o=O[e]=[t,n]});t.push(o[2]=n);var a,r=document.createElement("script");r.charset="utf-8",r.timeout=120,$.nc&&r.setAttribute("nonce",$.nc),r.src=H(e),0!==r.src.indexOf(window.location.origin+"/")&&(r.crossOrigin="anonymous");var i=new Error;a=function(t){r.onerror=r.onload=null,clearTimeout(s);var o=O[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}O[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:r})},12e4);r.onerror=r.onload=a,document.head.appendChild(r)}return Promise.all(t)},$.m=e,$.c=I,$.d=function(e,t,o){$.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},$.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},$.t=function(e,t){if(1&t&&(e=$(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if($.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)$.d(o,n,function(t){return e[t]}.bind(null,n));return o},$.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return $.d(t,"a",t),t},$.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},$.p="/Doc-test/",$.oe=function(e){throw console.error(e),e},$.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],z=T.push.bind(T);T.push=t,T=T.slice();for(var M=0;M<T.length;M++)t(T[M]);var L=z,_=(P.push([0,0]),o());t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"Apache Atlas","description":"My awesome app using docz","menu":["Introduction",{"name":"Documentation","menu":[{"name":"Features","menu":["High Level Architecture","Type System","Glossary","Classification Propagation","Notifications","High Availability"]},{"name":"Search","menu":["Basic Search","Advance Search"]},{"name":"Hooks","menu":["HBase","Hive","Sqoop","Storm","Kafka","Falcon"]},{"name":"Import/Export","menu":["Import API","Import API Options","Import Entity Transforms","Import Export API","Export API","Export HDFS API","Export Import Audits","Incremental Export"]},{"name":"Security","menu":["Security Details","Authentication","Authorization Model","Atlas Simple Authorizer","Atlas Ranger Authorizer"]},{"name":"Setup","menu":["Quick Start","Configuration","Build Instruction","Installation Instruction"]},"REST API",{"name":"Tools","menu":["Atlas Repair Index"]},{"name":"Misc","menu":["Atlas Server","Replicated Attributes","Soft Reference"]}]},{"name":"Downloads","menu":["Download",{"name":"Whats New","menu":["WhatsNew-2.0","WhatsNew-1.0"]},"Migration"]},"For Developers",{"name":"Project Info","menu":["Project Information","Mailing Lists","Team List","Issue Tracking","License","Source Repository"]},"ASF"],"version":"1.0.0","repository":null,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","files":"**/*.{md,mdx}","base":"/Doc-test/","baseUrl":"./public","src":"./src","public":"./src/resources","atlasVersions":[{"id":1,"href":"/Doc-test/","title":"Latest","label":"Latest"},{"id":2,"href":"/2.0.0/index.html","title":"2.0.0","label":"2.0.0"},{"id":4,"href":"/1.1.0/index.html","title":"1.1.0","label":"1.1.0"},{"id":5,"href":"/1.0.0/index.html","title":"1.0.0","label":"1.0.0"},{"id":7,"href":"/0.8.3/index.html","title":"0.8.3","label":"0.8.3"},{"id":8,"href":"/0.8.2/index.html","title":"0.8.2","label":"0.8.2"},{"id":9,"href":"/0.8.1/index.html","title":"0.8.1","label":"0.8.1"},{"id":10,"href":"/0.8.0-incubating/index.html","title":"0.8-incubating","label":"0.8-incubating"},{"id":11,"href":"/0.7.1-incubating/index.html","title":"0.7.1-incubating","label":"0.7.1-incubating"},{"id":12,"href":"/0.7.0-incubating/index.html","title":"0.7-incubating","label":"0.7-incubating"},{"id":13,"href":"/0.6.0-incubating/index.html","title":"0.6-incubating","label":"0.6-incubating"},{"id":14,"href":"/0.5.0-incubating/index.html","title":"0.5-incubating","label":"0.5-incubating"}],"theme":"theme/"},"entries":[{"key":"documents/ClassificationPropagation.md","value":{"name":"Classification Propagation","route":"/ClassificationPropagation","menu":"Documentation","submenu":"Features","id":"65a0fa2b70ad29423c044848976ed3ff","filepath":"documents/ClassificationPropagation.md","link":"","slug":"documents-classification-propagation","headings":[{"slug":"classification-propagation","depth":1,"value":"Classification Propagation"},{"slug":"use-cases","depth":2,"value":"Use Cases"},{"slug":"add-classification-to-an-entity","depth":2,"value":"Add classification to an entity"},{"slug":"update-classification-associated-with-an-entity","depth":2,"value":"Update classification associated with an entity"},{"slug":"remove-classification-associated-with-an-entity","depth":2,"value":"Remove classification associated with an entity"},{"slug":"add-lineage-between-entities","depth":2,"value":"Add lineage between entities"},{"slug":"delete-an-entity","depth":2,"value":"Delete an entity"},{"slug":"control-propagation","depth":2,"value":"Control Propagation"},{"slug":"propagate-flag-in-classification","depth":2,"value":"Propagate flag in classification"},{"slug":"propagate-flag-in-lineage-edge","depth":2,"value":"Propagate flag in lineage edge"},{"slug":"block-propagation-of-specific-classifications-in-lineage-edge","depth":2,"value":"Block propagation of specific classifications in lineage edge"},{"slug":"notifications-and-audit","depth":2,"value":"Notifications and Audit"},{"slug":"glossary","depth":2,"value":"Glossary"}]}},{"key":"documents/Glossary.md","value":{"name":"Glossary","route":"/Glossary","menu":"Documentation","submenu":"Features","id":"63b6b3d0c273e4eb20395cf2de83c245","filepath":"documents/Glossary.md","link":"","slug":"documents-glossary","headings":[{"slug":"glossary","depth":1,"value":"Glossary"},{"slug":"use-cases","depth":3,"value":"Use cases"},{"slug":"what-is-a-glossary-term-","depth":3,"value":"What is a Glossary term ?"},{"slug":"ui-interactions","depth":3,"value":"UI interactions"},{"slug":"glossary-tab","depth":4,"value":"Glossary tab"},{"slug":"term-context-menu","depth":5,"value":"Term context menu"},{"slug":"term-detail-page","depth":5,"value":"Term detail page"},{"slug":"add-classification-to-term","depth":5,"value":"Add classification to Term"},{"slug":"create-term-relationship-with-other-term","depth":5,"value":"Create term relationship with other term"},{"slug":"categorize-a-term","depth":5,"value":"Categorize a term"},{"slug":"category-view","depth":4,"value":"Category view"},{"slug":"category-context-menu","depth":5,"value":"Category context menu"},{"slug":"category-detail-page","depth":5,"value":"Category detail page"},{"slug":"categorize-term","depth":5,"value":"Categorize term"},{"slug":"term-assignment-flow","depth":4,"value":"Term assignment flow"},{"slug":"assign-term","depth":5,"value":"Assign term"},{"slug":"propagated-classification","depth":5,"value":"Propagated classification"},{"slug":"search-using-a-term","depth":4,"value":"Search using a term"},{"slug":"summary-of-rest-interactions","depth":4,"value":"Summary of REST interactions"},{"slug":"json-structure","depth":5,"value":"JSON structure"},{"slug":"create-operations","depth":5,"value":"CREATE operations"},{"slug":"read-operations","depth":5,"value":"READ operations"},{"slug":"update-operations","depth":5,"value":"UPDATE operations"},{"slug":"delete-operations","depth":5,"value":"DELETE operations"}]}},{"key":"documents/HighAvailability.md","value":{"name":"High Availability","route":"/HighAvailability","menu":"Documentation","submenu":"Features","id":"d7ff0f0d643531e940f5ac61200b2ce3","filepath":"documents/HighAvailability.md","link":"","slug":"documents-high-availability","headings":[{"slug":"fault-tolerance-and-high-availability-options","depth":1,"value":"Fault Tolerance and High Availability Options"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"atlas-web-service","depth":2,"value":"Atlas Web Service"},{"slug":"setting-up-the-high-availability-feature-in-atlas","depth":3,"value":"Setting up the High Availability feature in Atlas"},{"slug":"configuring-clients-to-use-the-high-availability-feature","depth":3,"value":"Configuring clients to use the High Availability feature"},{"slug":"using-an-intermediate-proxy","depth":4,"value":"Using an intermediate proxy"},{"slug":"using-automatic-detection-of-active-instance","depth":4,"value":"Using automatic detection of active instance"},{"slug":"implementation-details-of-atlas-high-availability","depth":3,"value":"Implementation Details of Atlas High Availability"},{"slug":"metadata-store","depth":2,"value":"Metadata Store"},{"slug":"index-store","depth":2,"value":"Index Store"},{"slug":"solr","depth":3,"value":"Solr"},{"slug":"elasticsearch--tech-preview","depth":3,"value":"Elasticsearch  (Tech Preview)"},{"slug":"notification-server","depth":2,"value":"Notification Server"},{"slug":"known-issues","depth":2,"value":"Known Issues"}]}},{"key":"documents/HighLevelArchitecture.md","value":{"name":"High Level Architecture","route":"/Architecture","menu":"Documentation","submenu":"Features","id":"8e88cd5c4a29777f45958b0444e656a4","filepath":"documents/HighLevelArchitecture.md","link":"","slug":"documents-high-level-architecture","headings":[{"slug":"architecture","depth":1,"value":"Architecture"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"atlas-high-level-architecture---overview","depth":2,"value":"Atlas High Level Architecture - Overview"},{"slug":"core","depth":3,"value":"Core"},{"slug":"integration","depth":3,"value":"Integration"},{"slug":"metadata-sources","depth":3,"value":"Metadata sources"},{"slug":"applications","depth":3,"value":"Applications"}]}},{"key":"documents/Introduction.md","value":{"name":"Introduction","route":"/","menu":"Introduction","id":"358978c3a3059f68f7ae1f5bcf177949","filepath":"documents/Introduction.md","link":"","slug":"documents-introduction","headings":[{"slug":"introduction","depth":1,"value":"Introduction"},{"slug":"overview","depth":2,"value":"Overview"},{"slug":"features","depth":2,"value":"Features"},{"slug":"metadata-types--instances","depth":3,"value":"Metadata types & instances"},{"slug":"classification","depth":3,"value":"Classification"},{"slug":"lineage","depth":3,"value":"Lineage"},{"slug":"searchdiscovery","depth":3,"value":"Search/Discovery"},{"slug":"security--data-masking","depth":3,"value":"Security & Data Masking"},{"slug":"getting-started","depth":2,"value":"Getting Started"},{"slug":"api-documentation","depth":2,"value":"API Documentation"},{"slug":"developer-setup-documentation","depth":2,"value":"Developer Setup Documentation"}]}},{"key":"documents/Notifications.md","value":{"name":"Notifications","route":"/Notifications","menu":"Documentation","submenu":"Features","id":"d811bdbc7388c22282f7f3b64f9035b1","filepath":"documents/Notifications.md","link":"","slug":"documents-notifications","headings":[{"slug":"notifications","depth":1,"value":"Notifications"},{"slug":"notifications-from-apache-atlas","depth":2,"value":"Notifications from Apache Atlas"},{"slug":"notifications---v2-apache-atlas-version-10","depth":3,"value":"Notifications - V2: Apache Atlas version 1.0"},{"slug":"notifications---v1-apache-atlas-version-08x-and-earlier","depth":3,"value":"Notifications - V1: Apache Atlas version 0.8.x and earlier"},{"slug":"notifications-to-apache-atlas","depth":2,"value":"Notifications to Apache Atlas"}]}},{"key":"documents/RestAPI.md","value":{"name":"REST API","route":"/rest-api","menu":"Documentation","submenu":"REST API","id":"2a1df74cbaea54d0dd0a56ff05e38270","filepath":"documents/RestAPI.md","link":"","slug":"documents-rest-api","headings":[{"slug":"rest-api","depth":1,"value":"REST API"}]}},{"key":"documents/TypeSystem.md","value":{"name":"Type System","route":"/TypeSystem","menu":"Documentation","submenu":"Features","id":"507fb4123d3a830140580b1cfb0095cc","filepath":"documents/TypeSystem.md","link":"","slug":"documents-type-system","headings":[{"slug":"type-system","depth":1,"value":"Type System"},{"slug":"overview","depth":2,"value":"Overview"},{"slug":"types","depth":2,"value":"Types"},{"slug":"entities","depth":2,"value":"Entities"},{"slug":"attributes","depth":2,"value":"Attributes"},{"slug":"system-specific-types-and-their-significance","depth":2,"value":"System specific types and their significance"}]}},{"key":"documents/Downloads/Downloads.md","value":{"name":"Download","route":"/Downloads","menu":"Downloads","submenu":"Download","id":"0cee405df7fd7cd7e40282afbb30e8bd","filepath":"documents/Downloads/Downloads.md","link":"","slug":"documents-downloads-downloads","headings":[{"slug":"downloads","depth":1,"value":"Downloads"},{"slug":"verify-the-integrity-of-the-files","depth":2,"value":"Verify the integrity of the files"},{"slug":"release-notes","depth":2,"value":"Release Notes"}]}},{"key":"documents/Asf/asfinfo.md","value":{"name":"ASF","route":"/asf","menu":"ASF","id":"9c4bc987415ba768a9a0621cc7e199f6","filepath":"documents/Asf/asfinfo.md","link":"","slug":"documents-asf-asfinfo","headings":[{"slug":"asf-infomation","depth":1,"value":"ASF Infomation"}]}},{"key":"documents/Hook/Hook-Falcon.md","value":{"name":"Falcon","route":"/Hook-Falcon","menu":"Documentation","submenu":"Hooks","id":"dc9ea38e1c137cb8160d633c3e936976","filepath":"documents/Hook/Hook-Falcon.md","link":"","slug":"documents-hook-hook-falcon","headings":[{"slug":"falcon-atlas-bridge","depth":1,"value":"Falcon Atlas Bridge"},{"slug":"falcon-model","depth":2,"value":"Falcon Model"},{"slug":"falcon-hook","depth":2,"value":"Falcon Hook"},{"slug":"notes","depth":2,"value":"NOTES"}]}},{"key":"documents/Hook/Hook-HBase.md","value":{"name":"HBase","route":"/Hook-HBase","menu":"Documentation","submenu":"Hooks","id":"e9e2795c56c5231c5a2beb3b81af16a5","filepath":"documents/Hook/Hook-HBase.md","link":"","slug":"documents-hook-hook-h-base","headings":[{"slug":"apache-atlas-hook--bridge-for-apache-hbase","depth":1,"value":"Apache Atlas Hook & Bridge for Apache HBase"},{"slug":"hbase-model","depth":2,"value":"HBase Model"},{"slug":"hbase-hook","depth":2,"value":"HBase Hook"},{"slug":"notes","depth":2,"value":"NOTES"},{"slug":"importing-hbase-metadata","depth":2,"value":"Importing HBase Metadata"}]}},{"key":"documents/Hook/Hook-Hive.md","value":{"name":"Hive","route":"/Hook-Hive","menu":"Documentation","submenu":"Hooks","id":"97e85e3cfef3c06a87ca1d127eb6b7bb","filepath":"documents/Hook/Hook-Hive.md","link":"","slug":"documents-hook-hook-hive","headings":[{"slug":"apache-atlas-hook--bridge-for-apache-hive","depth":1,"value":"Apache Atlas Hook & Bridge for Apache Hive"},{"slug":"hive-model","depth":2,"value":"Hive Model"},{"slug":"hive-hook","depth":2,"value":"Hive Hook"},{"slug":"column-level-lineage","depth":2,"value":"Column Level Lineage"},{"slug":"model","depth":3,"value":"Model"},{"slug":"examples","depth":3,"value":"Examples"},{"slug":"extracting-lineage-from-hive-commands","depth":3,"value":"Extracting Lineage from Hive commands"},{"slug":"notes","depth":2,"value":"NOTES"},{"slug":"importing-hive-metadata","depth":2,"value":"Importing Hive Metadata"}]}},{"key":"documents/Hook/Hook-Kafka.md","value":{"name":"Kafka","route":"/Hook-Kafka","menu":"Documentation","submenu":"Hooks","id":"e9b3744474199996e4558f0a4a47a201","filepath":"documents/Hook/Hook-Kafka.md","link":"","slug":"documents-hook-hook-kafka","headings":[{"slug":"apache-atlas-hook-for-apache-kafka","depth":1,"value":"Apache Atlas Hook for Apache Kafka"},{"slug":"kafka-model","depth":2,"value":"Kafka Model"},{"slug":"setup","depth":2,"value":"Setup"},{"slug":"importing-kafka-metadata","depth":2,"value":"Importing Kafka Metadata"}]}},{"key":"documents/Hook/Hook-Sqoop.md","value":{"name":"Sqoop","route":"/Hook-Sqoop","menu":"Documentation","submenu":"Hooks","id":"503c57619575657d81d009fd1919473f","filepath":"documents/Hook/Hook-Sqoop.md","link":"","slug":"documents-hook-hook-sqoop","headings":[{"slug":"apache-atlas-hook-for-apache-sqoop","depth":1,"value":"Apache Atlas Hook for Apache Sqoop"},{"slug":"sqoop-model","depth":2,"value":"Sqoop Model"},{"slug":"sqoop-hook","depth":2,"value":"Sqoop Hook"},{"slug":"notes","depth":2,"value":"NOTES"}]}},{"key":"documents/Hook/Hook-Storm.md","value":{"name":"Storm","route":"/Hook-Storm","menu":"Documentation","submenu":"Hooks","id":"c6958124d494fe3a031bbd12583ec767","filepath":"documents/Hook/Hook-Storm.md","link":"","slug":"documents-hook-hook-storm","headings":[{"slug":"apache-atlas-hook-for-apache-storm","depth":1,"value":"Apache Atlas Hook for Apache Storm"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"storm-data-model","depth":2,"value":"Storm Data Model"},{"slug":"storm-atlas-hook","depth":2,"value":"Storm Atlas Hook"},{"slug":"limitations","depth":2,"value":"Limitations"},{"slug":"installation","depth":2,"value":"Installation"},{"slug":"configuration","depth":2,"value":"Configuration"},{"slug":"storm-configuration","depth":3,"value":"Storm Configuration"}]}},{"key":"documents/Import-Export/Export-API.md","value":{"name":"Export API","route":"/Export-API","menu":"Documentation","submenu":"Import/Export","id":"638d1b42b383c0ec01fc4bfa9a128410","filepath":"documents/Import-Export/Export-API.md","link":"","slug":"documents-import-export-export-api","headings":[{"slug":"export-api","depth":1,"value":"Export API"},{"slug":"additional-options","depth":3,"value":"Additional Options"},{"slug":"contents-of-exported-zip-file","depth":3,"value":"Contents of Exported ZIP File"},{"slug":"examples","depth":3,"value":"Examples"},{"slug":"curl-calls","depth":3,"value":"CURL Calls"}]}},{"key":"documents/Import-Export/Export-HDFS-API.md","value":{"name":"Export HDFS API","route":"/Export-HDFS-API","menu":"Documentation","submenu":"Import/Export","id":"05e47c9d31aecb7b7d4272da0831583f","filepath":"documents/Import-Export/Export-HDFS-API.md","link":"","slug":"documents-import-export-export-hdfs-api","headings":[{"slug":"export--import-apis-for-hdfs-path","depth":1,"value":"Export & Import APIs for HDFS Path"},{"slug":"introduction","depth":3,"value":"Introduction"},{"slug":"export-api-using-matchtype","depth":3,"value":"Export API Using matchType"},{"slug":"example-using-curl-calls","depth":3,"value":"Example Using CURL Calls"},{"slug":"automatic-creation-of-hdfs-entities","depth":3,"value":"Automatic Creation of HDFS entities"}]}},{"key":"documents/Import-Export/ExportImportAudits.md","value":{"name":"Export Import Audits","route":"/ExportImportAudits","menu":"Documentation","submenu":"Import/Export","id":"0cd0eb1da37e202f876fe3b853048c1a","filepath":"documents/Import-Export/ExportImportAudits.md","link":"","slug":"documents-import-export-export-import-audits","headings":[{"slug":"export--import-audits","depth":1,"value":"Export & Import Audits"},{"slug":"background","depth":4,"value":"Background"},{"slug":"rest-apis","depth":4,"value":"REST APIs"},{"slug":"curl","depth":6,"value":"CURL"}]}},{"key":"documents/Import-Export/Import-API-Options.md","value":{"name":"Import API Options","route":"/Import-API-Options","menu":"Documentation","submenu":"Import/Export","id":"45b02a421ab4039886f40bf992f74800","filepath":"documents/Import-Export/Import-API-Options.md","link":"","slug":"documents-import-export-import-api-options","headings":[{"slug":"import-api-options","depth":1,"value":"Import API Options"},{"slug":"examples-using-curl-calls","depth":3,"value":"Examples Using CURL Calls"},{"slug":"options","depth":3,"value":"Options"},{"slug":"transforms","depth":4,"value":"Transforms"},{"slug":"start-guid-or-start-index","depth":4,"value":"Start Guid or Start Index"},{"slug":"optional-importing-type-definition","depth":4,"value":"Optional Importing Type Definition"},{"slug":"specifying-file-to-be-imported-from-server-location","depth":4,"value":"Specifying File to be Imported From Server Location"}]}},{"key":"documents/Import-Export/Import-API.md","value":{"name":"Import API","route":"/Import-API","menu":"Documentation","submenu":"Import/Export","id":"dc87511f27ed0c333a35691228467cc1","filepath":"documents/Import-Export/Import-API.md","link":"","slug":"documents-import-export-import-api","headings":[{"slug":"import-api","depth":1,"value":"Import API"},{"slug":"import-zip-file-using-post","depth":3,"value":"Import ZIP File Using POST"},{"slug":"import-zip-file-available-on-server","depth":3,"value":"Import ZIP File Available on Server"},{"slug":"examples-using-curl-calls","depth":3,"value":"Examples Using CURL Calls"}]}},{"key":"documents/Import-Export/Import-Export-API.md","value":{"name":"Import Export API","route":"/Import-Export-API","menu":"Documentation","submenu":"Import/Export","id":"ff8e7c8cf1b89e2a903d6b1dc4f7910c","filepath":"documents/Import-Export/Import-Export-API.md","link":"","slug":"documents-import-export-import-export-api","headings":[{"slug":"export--import-rest-apis","depth":1,"value":"Export & Import REST APIs"},{"slug":"whats-new","depth":3,"value":"What\'s New"},{"slug":"background","depth":3,"value":"Background"},{"slug":"introduction","depth":3,"value":"Introduction"},{"slug":"errors","depth":3,"value":"Errors"},{"slug":"rest-api-reference","depth":3,"value":"REST API Reference"}]}},{"key":"documents/Import-Export/ImportEntityTransforms.md","value":{"name":"Import Entity Transforms","route":"/ImportEntityTransforms","menu":"Documentation","submenu":"Import/Export","id":"f938b1564bb89576ae91f2b4b37ef288","filepath":"documents/Import-Export/ImportEntityTransforms.md","link":"","slug":"documents-import-export-import-entity-transforms","headings":[{"slug":"new-entity-transforms-framework","depth":1,"value":"(New) Entity Transforms Framework"},{"slug":"background","depth":4,"value":"Background"},{"slug":"transformation-framework","depth":4,"value":"Transformation Framework"},{"slug":"reason-for-new-transformation-framework","depth":4,"value":"Reason for New Transformation Framework"},{"slug":"approach","depth":4,"value":"Approach"},{"slug":"conditions","depth":5,"value":"Conditions"},{"slug":"actions","depth":5,"value":"Actions"},{"slug":"built-in-transforms","depth":4,"value":"Built-in Transforms"},{"slug":"add-classification","depth":6,"value":"Add Classification"},{"slug":"replace-prefix","depth":6,"value":"Replace Prefix"},{"slug":"to-lower","depth":6,"value":"To Lower"},{"slug":"clear","depth":6,"value":"Clear"},{"slug":"additional-examples","depth":4,"value":"Additional Examples"}]}},{"key":"documents/Import-Export/Incremental-Export.md","value":{"name":"Incremental Export","route":"/Incremental-Export","menu":"Documentation","submenu":"Import/Export","id":"a51e3652f4e01e85a1cf5422bc7c43c1","filepath":"documents/Import-Export/Incremental-Export.md","link":"","slug":"documents-import-export-incremental-export","headings":[{"slug":"incremental-export","depth":2,"value":"Incremental Export"},{"slug":"background","depth":4,"value":"Background"},{"slug":"export-options","depth":4,"value":"Export Options"},{"slug":"getting-change-marker","depth":4,"value":"Getting Change Marker"},{"slug":"skip-lineage-option","depth":4,"value":"Skip Lineage Option"},{"slug":"benefit-of-incremental-export","depth":4,"value":"Benefit of Incremental Export"}]}},{"key":"documents/Migration/Migration-0.8-to-1.0.md","value":{"name":"Migration-0.8 to 1.0","route":"/Migration-0.8-to-1.0","menu":"Downloads","submenu":"Migration","id":"a5e2f887053b440c46fdfb927acc1dfa","filepath":"documents/Migration/Migration-0.8-to-1.0.md","link":"","slug":"documents-migration-migration-0-8-to-1-0","headings":[{"slug":"migrating-data-from-apache-atlas-08-to-apache-atlas-10","depth":1,"value":"Migrating data from Apache Atlas 0.8 to Apache Atlas 1.0"},{"slug":"migration-steps","depth":3,"value":"Migration Steps"},{"slug":"planning-the-migration","depth":5,"value":"Planning the migration"},{"slug":"exporting-data-from-apache-atlas-08","depth":4,"value":"Exporting data from Apache Atlas 0.8"},{"slug":"before-importing-into-apache-atlas-10","depth":3,"value":"Before importing into Apache Atlas 1.0"},{"slug":"importing-data-into-apache-atlas-10","depth":4,"value":"Importing Data into Apache Atlas 1.0"},{"slug":"atlas-entity-defaults-for-migrated-data","depth":3,"value":"Atlas Entity Defaults for Migrated Data"},{"slug":"handling-of-entity-definitions-that-use-classifications-as-types","depth":4,"value":"Handling of Entity Definitions that use Classifications as Types"}]}},{"key":"documents/Misc/AtlasServer.md","value":{"name":"Atlas Server","route":"/AtlasServer","menu":"Documentation","submenu":"Misc","id":"c0ce0b2d1f25f703c7a003ad3337384c","filepath":"documents/Misc/AtlasServer.md","link":"","slug":"documents-misc-atlas-server","headings":[{"slug":"atlas-server-entity-type","depth":1,"value":"Atlas Server Entity Type"},{"slug":"background","depth":4,"value":"Background"},{"slug":"creation","depth":4,"value":"Creation"},{"slug":"details-within-property-page","depth":4,"value":"Details within Property Page"},{"slug":"exportimport-audits","depth":6,"value":"Export/Import Audits"},{"slug":"example","depth":6,"value":"Example"},{"slug":"support-for-clusters-full-name","depth":4,"value":"Support for Cluster\'s Full Name"},{"slug":"additional-information","depth":4,"value":"Additional Information"},{"slug":"rest-apis","depth":4,"value":"REST APIs"},{"slug":"curl","depth":6,"value":"CURL"}]}},{"key":"documents/Misc/ReplicatedAttributes.md","value":{"name":"Replicated Attributes","route":"/ReplicatedAttributes","menu":"Documentation","submenu":"Misc","id":"ae14752eff1e7c9a5b738080e30f1aec","filepath":"documents/Misc/ReplicatedAttributes.md","link":"","slug":"documents-misc-replicated-attributes","headings":[{"slug":"replicated-attributes","depth":1,"value":"Replicated Attributes"},{"slug":"background","depth":4,"value":"Background"}]}},{"key":"documents/Misc/SoftReference.md","value":{"name":"Soft Reference","route":"/SoftReference","menu":"Documentation","submenu":"Misc","id":"056c3a8b869062720878e3a15144fc71","filepath":"documents/Misc/SoftReference.md","link":"","slug":"documents-misc-soft-reference","headings":[{"slug":"entity-attribute-option-softreference","depth":1,"value":"Entity Attribute Option: SoftReference"},{"slug":"background","depth":4,"value":"Background"},{"slug":"specification","depth":4,"value":"Specification"}]}},{"key":"documents/Project-Info/Mailing-Lists.md","value":{"name":"Mailing Lists","route":"/Mailing-Lists","menu":"Project Info","submenu":"Mailing Lists","id":"33512b3e6a264dae7b5b44810fe58f3f","filepath":"documents/Project-Info/Mailing-Lists.md","link":"","slug":"documents-project-info-mailing-lists","headings":[{"slug":"project-mailing-lists","depth":1,"value":"Project Mailing Lists"}]}},{"key":"documents/Project-Info/issue-tracking.md","value":{"name":"Issue Tracking","route":"/Issue-Tracking","menu":"Project Info","submenu":"Issue Tracking","id":"2e4bac7470713976a457d1c6bf3cac3e","filepath":"documents/Project-Info/issue-tracking.md","link":"","slug":"documents-project-info-issue-tracking","headings":[{"slug":"overview","depth":1,"value":"Overview"},{"slug":"issue-tracking","depth":1,"value":"Issue Tracking"}]}},{"key":"documents/Project-Info/project-info.md","value":{"name":"Project Information","route":"/Project-Info","menu":"Project Info","submenu":"Project Information","id":"8736d1fa1c615ed294b443ae036b507a","filepath":"documents/Project-Info/project-info.md","link":"","slug":"documents-project-info-project-info","headings":[{"slug":"project-information","depth":1,"value":"Project Information"},{"slug":"overview","depth":1,"value":"Overview"}]}},{"key":"documents/Project-Info/project-license.md","value":{"name":"License","route":"/Project-License","menu":"Project Info","submenu":"License","id":"7915cccb3438f163fb57560bebb00512","filepath":"documents/Project-Info/project-license.md","link":"","slug":"documents-project-info-project-license","headings":[{"slug":"project-license","depth":1,"value":"Project License"},{"slug":"the-apache-software-license-version-20","depth":3,"value":"The Apache Software License, Version 2.0"},{"slug":"apache-atlas-subcomponents","depth":3,"value":"Apache Atlas Subcomponents:"}]}},{"key":"documents/Project-Info/source-repository.md","value":{"name":"Source Repository","route":"/Source-Repository","menu":"Project Info","submenu":"Source Repository","id":"c7a7b2bc0f362ab13fe8ed074930e97f","filepath":"documents/Project-Info/source-repository.md","link":"","slug":"documents-project-info-source-repository","headings":[{"slug":"overview","depth":1,"value":"Overview"},{"slug":"web-access","depth":1,"value":"Web Access"},{"slug":"developer-access","depth":1,"value":"Developer access"}]}},{"key":"documents/Project-Info/team-list.md","value":{"name":"Team List","route":"/Team-List","menu":"Project Info","submenu":"Team List","id":"7bcf686ffe8506a5385111c414d2c441","filepath":"documents/Project-Info/team-list.md","link":"","slug":"documents-project-info-team-list","headings":[{"slug":"the-team","depth":1,"value":"The Team"},{"slug":"a-successful-project-requires-many-people-to-play-many-roles-some-members-write-code-or-documentation-while-others-are-valuable-as-testers-submitting-patches-and-suggestions","depth":4,"value":"A successful project requires many people to play many roles. Some members write code or documentation, while others are valuable as testers, submitting patches and suggestions."},{"slug":"the-team-is-comprised-of-members-and-contributors-members-have-direct-access-to-the-source-of-a-project-and-actively-evolve-the-code-base-contributors-improve-the-project-through-submission-of-patches-and-suggestions-to-the-members-the-number-of-contributors-to-the-project-is-unbounded-get-involved-today-all-contributions-to-the-project-are-greatly-appreciated","depth":4,"value":"The team is comprised of Members and Contributors. Members have direct access to the source of a project and actively evolve the code-base. Contributors improve the project through submission of patches and suggestions to the Members. The number of Contributors to the project is unbounded. Get involved today. All contributions to the project are greatly appreciated."},{"slug":"members","depth":2,"value":"Members"},{"slug":"the-following-is-a-list-of-developers-with-commit-privileges-that-have-directly-contributed-to-the-project-in-one-way-or-another","depth":4,"value":"The following is a list of developers with commit privileges that have directly contributed to the project in one way or another."}]}},{"key":"documents/Search/Search-Advanced.md","value":{"name":"Advance Search","route":"/Search-Advance","menu":"Documentation","submenu":"Search","id":"8a6185c2fcbf6cae301925dc794b24e9","filepath":"documents/Search/Search-Advanced.md","link":"","slug":"documents-search-search-advanced","headings":[{"slug":"advanced-search","depth":1,"value":"Advanced Search"},{"slug":"background","depth":3,"value":"Background"},{"slug":"using-advanced-search","depth":2,"value":"Using Advanced Search"},{"slug":"introduction-to-domain-specific-language","depth":2,"value":"Introduction to Domain Specific Language"},{"slug":"from-clause","depth":3,"value":"From Clause"},{"slug":"where-clause","depth":3,"value":"Where Clause"},{"slug":"using-date-literals","depth":3,"value":"Using Date Literals"},{"slug":"using-boolean-literals","depth":4,"value":"Using Boolean Literals"},{"slug":"existence-of-a-property","depth":3,"value":"Existence of a Property"},{"slug":"note-about-select-clauses","depth":4,"value":"Note About Select Clauses"},{"slug":"classification-based-filtering","depth":3,"value":"Classification-based Filtering"},{"slug":"limit--offset-clauses","depth":3,"value":"Limit & Offset Clauses"},{"slug":"ordering-results","depth":3,"value":"Ordering Results"},{"slug":"aggregate-functions","depth":3,"value":"Aggregate Functions"},{"slug":"the-count-keyword","depth":3,"value":"The count Keyword"},{"slug":"the-max-keyword","depth":3,"value":"The max Keyword"},{"slug":"the-min-keyword","depth":3,"value":"The min Keyword"},{"slug":"grouping-results","depth":3,"value":"Grouping Results"},{"slug":"where-clause-with-complex-types","depth":3,"value":"Where Clause With Complex Types"},{"slug":"using-system-attributes","depth":3,"value":"Using System Attributes"},{"slug":"state-of-an-entity","depth":3,"value":"State of an Entity"},{"slug":"using-system-attributes-in-queries","depth":3,"value":"Using System Attributes in Queries"},{"slug":"advanced-search-rest-api","depth":2,"value":"Advanced Search REST API"},{"slug":"the-v2-api","depth":3,"value":"The V2 API"},{"slug":"implementation-approach","depth":2,"value":"Implementation Approach"},{"slug":"differences-between-master-and-earlier-versions","depth":2,"value":"Differences Between Master and Earlier Versions"},{"slug":"resources","depth":2,"value":"Resources"}]}},{"key":"documents/Search/Search-Basic.md","value":{"name":"Basic Search","route":"/Search-Basic","menu":"Documentation","submenu":"Search","id":"1dea7cacd4399abee3ed1f8be92994ba","filepath":"documents/Search/Search-Basic.md","link":"","slug":"documents-search-search-basic","headings":[{"slug":"basic-search","depth":1,"value":"Basic Search"}]}},{"key":"documents/Security/AtlasRangerAuthorizer.md","value":{"name":"Atlas Ranger Authorizer","route":"/AtlasRangerAuthorizer","menu":"Documentation","submenu":"Security","id":"d14b432df8722624c0f8eced545b1d5e","filepath":"documents/Security/AtlasRangerAuthorizer.md","link":"","slug":"documents-security-atlas-ranger-authorizer","headings":[{"slug":"atlas-ranger-authorizer","depth":1,"value":"Atlas Ranger Authorizer"},{"slug":"setting-up-apache-atlas-to-use-apache-ranger-authorization","depth":2,"value":"Setting up Apache Atlas to use Apache Ranger Authorization"},{"slug":"configure-apache-atlas","depth":3,"value":"Configure Apache Atlas"},{"slug":"apache-ranger-authorization-policy-model-for-apache-atlas","depth":3,"value":"Apache Ranger authorization policy model for Apache Atlas"},{"slug":"apache-ranger-access-audit-for-apache-atlas-authorizations","depth":3,"value":"Apache Ranger access audit for Apache Atlas authorizations"}]}},{"key":"documents/Security/AtlasSimpleAuthorizer.md","value":{"name":"Atlas Simple Authorizer","route":"/AtlasSimpleAuthorizer","menu":"Documentation","submenu":"Security","id":"5b16b833d22372706ec5bca598c24463","filepath":"documents/Security/AtlasSimpleAuthorizer.md","link":"","slug":"documents-security-atlas-simple-authorizer","headings":[{"slug":"atlas-simple-authorizer","depth":1,"value":"Atlas Simple Authorizer"},{"slug":"setting-up-atlas-to-use-simple-authorizer","depth":2,"value":"Setting up Atlas to use Simple Authorizer"},{"slug":"configure-apache-atlas","depth":2,"value":"Configure Apache Atlas"},{"slug":"policy-file-format","depth":3,"value":"Policy file format"},{"slug":"roles","depth":3,"value":"Roles"},{"slug":"assign-roles-to-users-and-user-groups","depth":3,"value":"Assign Roles to Users and User Groups"}]}},{"key":"documents/Security/Authentication.md","value":{"name":"Authentication","route":"/Authentication","menu":"Documentation","submenu":"Security","id":"7beb04d551918c390480043d25b37b6a","filepath":"documents/Security/Authentication.md","link":"","slug":"documents-security-authentication","headings":[{"slug":"authentication-in-apache-atlas","depth":1,"value":"Authentication in Apache Atlas."},{"slug":"authentication","depth":3,"value":"Authentication"},{"slug":"file-method","depth":3,"value":"FILE method."},{"slug":"kerberos-method","depth":3,"value":"Kerberos Method."},{"slug":"ldap-method","depth":3,"value":"LDAP Method."},{"slug":"active-directory","depth":3,"value":"Active Directory"},{"slug":"ldap-directroy","depth":3,"value":"LDAP Directroy"},{"slug":"keycloak-method","depth":3,"value":"Keycloak Method."}]}},{"key":"documents/Security/AuthorizationModel.md","value":{"name":"Authorization Model","route":"/AuthorizationModel","menu":"Documentation","submenu":"Security","id":"70c74b19b6fc58a21175d81b28034e8a","filepath":"documents/Security/AuthorizationModel.md","link":"","slug":"documents-security-authorization-model","headings":[{"slug":"atlas-authorization-model","depth":3,"value":"Atlas Authorization Model"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"authorization-of-access-to-types","depth":2,"value":"Authorization of access to Types"},{"slug":"authorization-of-access-to-entities","depth":2,"value":"Authorization of access to Entities"},{"slug":"authorization-of-admin-operations","depth":2,"value":"Authorization of Admin operations"},{"slug":"pluggable-authorization","depth":2,"value":"Pluggable Authorization"},{"slug":"simple-authorizer","depth":2,"value":"Simple Authorizer"},{"slug":"ranger-authorizer","depth":2,"value":"Ranger Authorizer"},{"slug":"none-authorizer","depth":2,"value":"None authorizer"}]}},{"key":"documents/Security/security.md","value":{"name":"Security Details","route":"/security","menu":"Documentation","submenu":"Security","id":"06d50262f992294b01046e10bfc466e5","filepath":"documents/Security/security.md","link":"","slug":"documents-security-security","headings":[{"slug":"security-features-of-apache-atlas","depth":1,"value":"Security Features of Apache Atlas"},{"slug":"overview","depth":2,"value":"Overview"},{"slug":"ssl","depth":2,"value":"SSL"},{"slug":"credential-provider-utility-script","depth":4,"value":"Credential Provider Utility Script"},{"slug":"service-authentication","depth":2,"value":"Service Authentication"},{"slug":"jaas-configuration","depth":3,"value":"JAAS configuration"},{"slug":"spnego-based-http-authentication","depth":2,"value":"SPNEGO-based HTTP Authentication"},{"slug":"client-security-configuration","depth":3,"value":"Client security configuration"},{"slug":"solr-kerberos-configuration","depth":3,"value":"SOLR Kerberos configuration"}]}},{"key":"documents/Setup/BuildInstruction.md","value":{"name":"Build Instruction","route":"/Build-Installation","menu":"Documentation","submenu":"Setup","id":"660ea3f6cdf83978ed3fdb76cba111ad","filepath":"documents/Setup/BuildInstruction.md","link":"","slug":"documents-setup-build-instruction","headings":[{"slug":"building--installing-apache-atlas","depth":2,"value":"Building & Installing Apache Atlas"},{"slug":"building-apache-atlas","depth":3,"value":"Building Apache Atlas"},{"slug":"packaging-apache-atlas","depth":3,"value":"Packaging Apache Atlas"},{"slug":"packaging-apache-atlas-with-embedded-apache-hbase--apache-solr","depth":3,"value":"Packaging Apache Atlas with embedded Apache HBase & Apache Solr"},{"slug":"packaging-apache-atlas-with-embedded-apache-cassandra--apache-solr","depth":3,"value":"Packaging Apache Atlas with embedded Apache Cassandra & Apache Solr"},{"slug":"apache-atlas-package","depth":3,"value":"Apache Atlas Package"}]}},{"key":"documents/Setup/Configuration.md","value":{"name":"Configuration","route":"/Configuration","menu":"Documentation","submenu":"Setup","id":"2376cf14650fd03637e96898ec8181f9","filepath":"documents/Setup/Configuration.md","link":"","slug":"documents-setup-configuration","headings":[{"slug":"configuring-apache-atlas---application-properties","depth":1,"value":"Configuring Apache Atlas - Application Properties"},{"slug":"graph-configs","depth":2,"value":"Graph Configs"},{"slug":"graph-persistence-engine---hbase","depth":3,"value":"Graph Persistence engine - HBase"},{"slug":"graph-index-search-engine","depth":3,"value":"Graph Index Search Engine"},{"slug":"graph-search-index---solr","depth":4,"value":"Graph Search Index - Solr"},{"slug":"graph-search-index---elasticsearch-tech-preview","depth":4,"value":"Graph Search Index - Elasticsearch (Tech Preview)"},{"slug":"search-configs","depth":2,"value":"Search Configs"},{"slug":"notification-configs","depth":2,"value":"Notification Configs"},{"slug":"client-configs","depth":2,"value":"Client Configs"},{"slug":"security-properties","depth":2,"value":"Security Properties"},{"slug":"ssl-config","depth":3,"value":"SSL config"},{"slug":"high-availability-properties","depth":2,"value":"High Availability Properties"},{"slug":"server-properties","depth":2,"value":"Server Properties"},{"slug":"performance-configuration-items","depth":2,"value":"Performance configuration items"},{"slug":"recording-performance-metrics","depth":3,"value":"Recording performance metrics"}]}},{"key":"documents/Setup/EclipseSetup.md","value":{"name":"Eclipse Setup","route":"/EclipseSetup","menu":"For Developers","submenu":"Eclipse Setup","id":"50375a47ccd1c9caeb50b97d66172c37","filepath":"documents/Setup/EclipseSetup.md","link":"","slug":"documents-setup-eclipse-setup","headings":[{"slug":"tools-required-to-build-and-run-apache-atlas-on-eclipse","depth":1,"value":"Tools required to build and run Apache Atlas on Eclipse"}]}},{"key":"documents/Setup/InstallationInstruction.md","value":{"name":"Installation Instruction","route":"/Installation","menu":"Documentation","submenu":"Setup","id":"018a16a3734eaf32c2ca80a54c6edf28","filepath":"documents/Setup/InstallationInstruction.md","link":"","slug":"documents-setup-installation-instruction","headings":[{"slug":"installing--running-apache-atlas","depth":3,"value":"Installing & Running Apache Atlas"},{"slug":"installing-apache-atlas","depth":4,"value":"Installing Apache Atlas"},{"slug":"running-apache-atlas-with-local-apache-hbase--apache-solr","depth":4,"value":"Running Apache Atlas with Local Apache HBase & Apache Solr"},{"slug":"using-apache-atlas","depth":4,"value":"Using Apache Atlas"},{"slug":"stopping-apache-atlas-server","depth":4,"value":"Stopping Apache Atlas Server"},{"slug":"configuring-apache-atlas","depth":3,"value":"Configuring Apache Atlas"},{"slug":"any-additional-java-opts-you-want-to-set-this-will-apply-to-both-client-and-server-operations","depth":1,"value":"any additional java opts you want to set. This will apply to both client and server operations"},{"slug":"any-additional-java-opts-that-you-want-to-set-for-client-only","depth":1,"value":"any additional java opts that you want to set for client only"},{"slug":"java-heap-size-we-want-to-set-for-the-client-default-is-1024mb","depth":1,"value":"java heap size we want to set for the client. Default is 1024MB"},{"slug":"any-additional-opts-you-want-to-set-for-atlas-service","depth":1,"value":"any additional opts you want to set for atlas service."},{"slug":"java-heap-size-we-want-to-set-for-the-atlas-server-default-is-1024mb","depth":1,"value":"java heap size we want to set for the atlas server. Default is 1024MB"},{"slug":"what-is-is-considered-as-atlas-home-dir-default-is-the-base-location-of-the-installed-software","depth":1,"value":"What is is considered as atlas home dir. Default is the base location of the installed software"},{"slug":"where-log-files-are-stored-defatult-is-logs-directory-under-the-base-install-location","depth":1,"value":"Where log files are stored. Defatult is logs directory under the base install location"},{"slug":"where-pid-files-are-stored-defatult-is-logs-directory-under-the-base-install-location","depth":1,"value":"Where pid files are stored. Defatult is logs directory under the base install location"},{"slug":"where-do-you-want-to-expand-the-war-file-by-default-it-is-in-serverwebapp-dir-under-the-base-install-dir","depth":1,"value":"Where do you want to expand the war file. By Default it is in /server/webapp dir under the base install dir."},{"slug":"configuring-apache-hbase-as-the-storage-backend-for-the-graph-repository","depth":4,"value":"Configuring Apache HBase as the storage backend for the Graph Repository"},{"slug":"configuring-apache-solr-as-the-indexing-backend-for-the-graph-repository","depth":4,"value":"Configuring Apache Solr as the indexing backend for the Graph Repository"},{"slug":"configuring-kafka-topics","depth":4,"value":"Configuring Kafka Topics"},{"slug":"setting-up-apache-atlas","depth":4,"value":"Setting up Apache Atlas"},{"slug":"examples-calling-apache-atlas-rest-apis","depth":3,"value":"Examples: calling Apache Atlas REST APIs"},{"slug":"troubleshooting","depth":3,"value":"Troubleshooting"},{"slug":"setup-issues","depth":4,"value":"Setup issues"}]}},{"key":"documents/Setup/QuickStart.md","value":{"name":"Quick Start","route":"/QuickStart","menu":"Documentation","submenu":"Setup","id":"bbea986d958a690286ce431e4ebaed6c","filepath":"documents/Setup/QuickStart.md","link":"","slug":"documents-setup-quick-start","headings":[{"slug":"quick-start","depth":1,"value":"Quick Start"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"example-type-definitions","depth":3,"value":"Example Type Definitions"},{"slug":"example-instance-graph","depth":3,"value":"Example Instance Graph"},{"slug":"running-the-example","depth":2,"value":"Running the example"},{"slug":"dashboard","depth":2,"value":"Dashboard"}]}},{"key":"documents/Tools/AtlasRepairIndex.md","value":{"name":"Atlas Repair Index","route":"/AtlasRepairIndex","menu":"Documentation","submenu":"Tools","id":"e5b5585673ba9aeef303303aa9e412fc","filepath":"documents/Tools/AtlasRepairIndex.md","link":"","slug":"documents-tools-atlas-repair-index","headings":[{"slug":"atlas-repair-index","depth":1,"value":"Atlas Repair Index"},{"slug":"introduction","depth":2,"value":"Introduction"},{"slug":"need-for-this-tool","depth":4,"value":"Need for this Tool"},{"slug":"location","depth":4,"value":"Location"},{"slug":"steps-to-execute-tool","depth":4,"value":"Steps to Execute Tool"},{"slug":"complete-restore","depth":5,"value":"Complete Restore"},{"slug":"caveats","depth":6,"value":"Caveats"},{"slug":"selective-restore","depth":5,"value":"Selective Restore"}]}},{"key":"documents/Whats-New/WhatsNew-1.0.md","value":{"name":"WhatsNew-1.0","route":"/WhatsNew-1.0","menu":"Downloads","submenu":"Whats New","id":"66815ce0d61914e74103ff799a82953b","filepath":"documents/Whats-New/WhatsNew-1.0.md","link":"","slug":"documents-whats-new-whats-new-1-0","headings":[{"slug":"whats-new-in-apache-atlas-10","depth":1,"value":"What\'s new in Apache Atlas 1.0?"},{"slug":"features","depth":2,"value":"Features"},{"slug":"updates","depth":2,"value":"Updates"},{"slug":"changes","depth":2,"value":"Changes"},{"slug":"dsl-search","depth":3,"value":"DSL search"}]}},{"key":"documents/Whats-New/WhatsNew-2.0.md","value":{"name":"WhatsNew-2.0","route":"/WhatsNew-2.0","menu":"Downloads","submenu":"Whats New","id":"42012018114e26d0689857eb593940f2","filepath":"documents/Whats-New/WhatsNew-2.0.md","link":"","slug":"documents-whats-new-whats-new-2-0","headings":[{"slug":"whats-new-in-apache-atlas-20","depth":1,"value":"What\'s new in Apache Atlas 2.0?"},{"slug":"features","depth":2,"value":"Features"},{"slug":"updates","depth":2,"value":"Updates"},{"slug":"data-migration","depth":2,"value":"Data Migration"}]}}],"props":[]}')},"./.docz/app/index.jsx":function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"white",function(){return p}),o.d(n,"grayUltraLight",function(){return m}),o.d(n,"grayExtraLight",function(){return h}),o.d(n,"grayLight",function(){return g}),o.d(n,"gray",function(){return f}),o.d(n,"grayDark",function(){return b}),o.d(n,"grayExtraDark",function(){return v}),o.d(n,"dark",function(){return y}),o.d(n,"blueLight",function(){return x}),o.d(n,"blue",function(){return k}),o.d(n,"skyBlue",function(){return w}),o.d(n,"negative",function(){return j}),o.d(n,"green",function(){return A}),o.d(n,"greenLight",function(){return E});var a={};o.r(a),o.d(a,"light",function(){return C}),o.d(a,"dark",function(){return S});var r=o("./node_modules/react/index.js"),i=o.n(r),s=o("./node_modules/react-dom/index.js"),l=o.n(s),u=o("./docz-lib/docz/dist/index.js"),c=o("./node_modules/lodash/get.js"),d=o.n(c);const p="#FFFFFF",m="#FCFBFA",h="#F5F6F7",g="#CED4DE",f="#7D899C",b="#2D3747",v="#1D2330",y="#13161F",x="#e9f2fa",k="#4a90e2 ",w="#1FB6FF",j="#EB4D4B",A="#37bb9b",E="#529d8b",C={...n,primary:A,text:b,link:k,footerText:b,sidebarBg:h,sidebarText:y,sidebarHighlight:null,sidebarBorder:g,background:p,border:E,theadColor:f,theadBg:h,tableColor:y,tooltipBg:y,tooltipColor:h,codeBg:h,codeColor:f,preBg:h,blockquoteBg:h,blockquoteBorder:g,blockquoteColor:f,propsText:f,propsBg:m},S={...n,primary:w,text:h,link:w,footerText:g,sidebarBg:y,sidebarText:g,sidebarHighlight:null,sidebarBorder:b,background:v,border:b,theadColor:f,theadBg:b,tableColor:h,tooltipBg:y,tooltipColor:h,codeBg:f,codeColor:h,preBg:b,blockquoteBg:b,blockquoteBorder:f,blockquoteColor:f,propsText:g,propsBg:y};var I=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),O=o("./theme/utils/theme.js");const P=I.d.blockquote`
  background: ${Object(O.b)("colors.blockquoteBg")};
  border-left: 5px solid ${Object(O.b)("colors.blockquoteBorder")};
  color: ${Object(O.b)("colors.blockquoteColor")};
  ${Object(O.b)("styles.blockquote")};

  & > p {
    margin: 0;
    color: ${Object(O.b)("colors.blockquoteColor")};
  }
`,D=I.d.code`
  background: ${Object(O.b)("colors.codeBg")};
  color: ${Object(O.b)("colors.codeColor")};
  ${Object(O.b)("styles.code")};
`;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const $=I.d.a`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${Object(O.b)("colors.link")};
  }

  &:hover {
    color: ${Object(O.b)("colors.link")};
  }

  ${Object(O.b)("styles.link")};
`,T=I.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`,z=I.e`
  to {
    stroke-dashoffset: 1000;
  }
`,M=(e=0)=>I.c`
  stroke-dasharray: 100;
  animation: ${z} 5s ${e}s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    infinite;
`,L=I.d.path`
  stroke: ${Object(O.b)("colors.primary")};
  stroke-width: 3px;
`,_=I.d.path`
  fill: ${Object(O.b)("colors.primary")};
`,R=({size:e=60})=>r.createElement("svg",{width:e,height:.79*e,viewBox:"0 0 121 96"},r.createElement("g",null,r.createElement(_,{d:"M94.4110629,60.8520717 C95.3815188,60.8520717 96.1684193,61.6483184 96.1684193,62.6308855 L96.1684193,84.1888093 C96.1684193,90.7014865 90.9354492,96 84.2817971,96 L11.6626593,96 C5.08322545,96 0.0693980867,90.6732777 9.65270039e-05,83.6092251 C-0.0048201377,83.1344165 0.178267091,82.6773865 0.508386007,82.3398291 C0.838270796,82.0025088 1.28802855,81.8126327 1.75698472,81.8126327 L20.0341004,81.8126327 L20.0341004,11.8111907 C20.0341004,5.29851351 25.2670706,0 31.6994728,0 L104.318611,0 C110.916775,0 115.930602,5.32672231 115.999903,12.3907749 C116.00482,12.8655835 115.821733,13.3226135 115.491614,13.6601709 C115.161729,13.9974912 114.711971,14.1873673 114.243015,14.1873673 L96.1677169,14.1873673 L96.1677169,27.6014816 C96.1677169,28.5840486 95.3810506,29.3805324 94.4105946,29.3805324 C93.4401387,29.3805324 92.6534723,28.5842856 92.6534723,27.6014816 L92.6534723,12.4083165 L92.6534723,11.8111907 C92.6534723,11.6092251 92.6586231,11.4084449 92.6841429,10.9981135 C92.6928056,10.8698701 92.7005318,10.7413897 92.7436112,10.3687491 C92.7574246,10.2552027 92.7695992,10.1411823 92.831877,9.76735641 C92.8501389,9.66186972 92.8667619,9.55614598 92.9475357,9.18611289 C92.970246,9.08560423 92.9913174,8.98462146 93.0908213,8.61601067 C93.1175118,8.52000593 93.1425634,8.42352709 93.1715951,8.32870759 C93.1992221,8.23862907 93.230361,8.15044694 93.3528093,7.78396958 C93.3848847,7.69483925 93.4202379,7.60736827 93.5590751,7.25132105 C93.5953648,7.16385007 93.6349322,7.07803842 93.7896901,6.73147316 C93.8299599,6.64613561 93.8735075,6.56245741 94.0439519,6.22513704 C94.0882019,6.14193293 94.1354955,6.06062522 94.3213923,5.7327868 C94.3693883,5.65219023 94.4199597,5.57349005 94.6208406,5.25560768 C94.6723485,5.17809275 94.7261977,5.10223715 94.9425309,4.79383673 C94.9970825,4.71940343 95.0537412,4.64710356 95.2848244,4.34889624 C95.3424196,4.27754457 95.402122,4.20832634 95.647487,3.92078621 C95.7074235,3.85346437 95.7694671,3.78803892 95.9815861,3.55810163 L31.7001752,3.55810163 C27.2058754,3.55810163 23.5492816,7.26009186 23.5492816,11.8109536 L23.5492816,81.8126327 L74.3763566,81.8126327 C75.3400229,81.8126327 76.1238797,82.5984493 76.1334789,83.5741419 C76.1831138,88.6294434 79.6861203,92.4418984 84.503047,92.4418984 C88.9973468,92.4418984 92.6539406,88.7399081 92.6539406,84.1890464 L92.6539406,62.6311225 C92.6539406,61.6485555 93.4406069,60.8520717 94.4110629,60.8520717 Z M96.2578558,10.5918119 C96.2562169,10.6041385 96.2550463,10.6167021 96.2543439,10.6287915 L112.318258,10.6287915 C111.563199,6.49371327 108.371815,3.55786459 104.339214,3.55786459 C104.270849,3.55786459 104.203186,3.56094622 104.135289,3.56260556 C104.072075,3.5642649 104.008861,3.564739 103.946115,3.56758358 C103.83748,3.57279866 103.729781,3.58085831 103.622317,3.59034026 C103.604289,3.59176256 103.586262,3.59271075 103.568468,3.59437009 C103.45117,3.60551138 103.334575,3.61926021 103.218682,3.63537952 C103.211424,3.63632772 103.204167,3.63727591 103.196909,3.63822411 C103.075397,3.65529162 102.954587,3.67520371 102.834948,3.69772334 C102.834246,3.69796039 102.83331,3.69796039 102.832607,3.69819744 C101.371187,3.97364808 100.046965,4.64283668 98.9709182,5.5917428 C98.9681087,5.59435034 98.965065,5.59672083 98.9622555,5.59932836 C98.8779698,5.67376167 98.7955572,5.75009136 98.7145493,5.82784335 C98.7058866,5.83637711 98.6972239,5.84467381 98.6885612,5.85297052 C98.6117675,5.92740382 98.5363787,6.00349647 98.4623946,6.08077436 C98.4504541,6.09310089 98.4389819,6.10566448 98.4272756,6.11799101 C98.3558669,6.19360956 98.2858629,6.27017631 98.2174979,6.34840239 C98.204855,6.36286236 98.1924463,6.37755939 98.1800376,6.39201936 C98.1128431,6.4700084 98.0463511,6.54894563 97.9819662,6.6295422 C97.9714305,6.64281693 97.961363,6.65632871 97.9508273,6.66960344 C97.8850377,6.75304459 97.8201845,6.8371969 97.7574385,6.92300854 C97.7555655,6.92561608 97.7539266,6.92798657 97.7520536,6.9305941 C97.55726,7.19822213 97.3790895,7.47888785 97.2168395,7.76974665 C97.2025578,7.79558497 97.1871054,7.82071213 97.1730578,7.8467875 C97.136534,7.91387229 97.1023515,7.98214233 97.0677007,8.05041237 C97.044288,8.09639982 97.0201729,8.14191318 96.9976968,8.18837473 C96.9674944,8.25071855 96.9389309,8.31448467 96.9101333,8.37777668 C96.8857841,8.4313497 96.8612008,8.48492271 96.8380222,8.53920687 C96.8118,8.6001284 96.7872167,8.66152403 96.7626334,8.7231567 C96.7392207,8.78170774 96.7160421,8.84002173 96.6940342,8.89904687 C96.671558,8.95878315 96.6502525,9.01923058 96.629181,9.07967801 C96.6074072,9.14225888 96.5863358,9.20483975 96.5662009,9.26789471 C96.5472366,9.32691985 96.5287406,9.38618203 96.5111811,9.44591832 C96.4917485,9.51181787 96.4732525,9.57842856 96.4552248,9.64503926 C96.4395383,9.70335325 96.4240859,9.76190429 96.40957,9.82069238 C96.3924787,9.89062176 96.3767922,9.96102524 96.3613399,10.0316658 C96.3489311,10.0885575 96.3362883,10.1454492 96.3250502,10.202815 C96.3103002,10.2781965 96.2974232,10.3540521 96.2847804,10.4299076 C96.2756494,10.4837177 96.2658161,10.5375278 96.2578558,10.5918119 Z M11.6624252,92.4418984 L75.9979194,92.4418984 C75.9649075,92.4068152 75.9335345,92.3698355 75.9009909,92.3342782 C75.8553361,92.284498 75.8099155,92.2344807 75.7651973,92.1837523 C75.6987052,92.1083708 75.6331497,92.0320411 75.5685307,91.9547632 C75.5252172,91.9030866 75.4819037,91.8514099 75.4392927,91.7990222 C75.3746736,91.7193738 75.3114594,91.637829 75.2487134,91.5560472 C75.2089118,91.5041335 75.1688761,91.452931 75.1297769,91.4003062 C75.0646896,91.3128352 75.0019436,91.2234678 74.9391976,91.1338634 C74.9050151,91.0847943 74.8698961,91.0366734 74.8361818,90.9871302 C74.7633683,90.8797471 74.6928961,90.7702306 74.6233604,90.660003 C74.602289,90.6265791 74.580047,90.5943405 74.5592097,90.5606795 C74.4700073,90.4165539 74.3836145,90.2700578 74.3000312,90.1211912 C74.2777891,90.081604 74.2569519,90.0408316 74.2351781,90.0007704 C74.1750074,89.8907798 74.1153051,89.7805521 74.0581781,89.6684281 C74.0282099,89.60964 74.0003488,89.5499037 73.971317,89.4906415 C73.9247258,89.3951109 73.8779004,89.2993432 73.8334163,89.2021532 C73.8032139,89.1362536 73.7744163,89.0694059 73.7453846,89.0027952 C73.7048806,88.9098721 73.6646108,88.816949 73.6259799,88.7228406 C73.5974164,88.6529113 73.5700236,88.5822707 73.5423966,88.5116302 C73.5061069,88.4187071 73.4707538,88.3253099 73.4365712,88.2309645 C73.4101149,88.1584276 73.3845951,88.0854166 73.3595435,88.0121685 C73.3269998,87.917112 73.2953927,87.8213443 73.2649562,87.7251025 C73.2415435,87.6516174 73.218365,87.5778952 73.196357,87.5036989 C73.1668571,87.4048496 73.1392301,87.3050521 73.1118372,87.2050175 C73.0919364,87.1320065 73.0715674,87.0589955 73.0528373,86.9852733 C73.0259127,86.8802608 73.0013293,86.7738259 72.9769801,86.667391 C72.9610595,86.5972246 72.9439683,86.5275322 72.9289841,86.4566546 C72.9036984,86.3386044 72.8814564,86.2188948 72.8592143,86.0991851 C72.8479762,86.0387377 72.8353334,85.9792385 72.8250318,85.918554 C72.7938929,85.7374488 72.7657977,85.5551583 72.7416826,85.3709714 L21.7919251,85.3709714 L3.68338077,85.3709714 C4.43844,89.5060497 7.62982365,92.4418984 11.6624252,92.4418984 Z M120.998408,32.7899677 C120.998647,32.8098599 121.000556,32.8297522 120.99984,32.850118 C120.998408,32.9064794 120.993634,32.9621303 120.986951,33.0170708 C120.986712,33.0203861 120.986712,33.0234647 120.986235,33.0267801 C120.975971,33.1077699 120.958785,33.1863916 120.938019,33.2635925 C120.933962,33.2787485 120.929665,33.2934308 120.92513,33.30835 C120.878347,33.4655934 120.810559,33.6131276 120.72463,33.7488211 C120.716514,33.7616089 120.708399,33.77416 120.700045,33.7867111 C120.654455,33.854913 120.605285,33.9202732 120.551102,33.981134 C120.54776,33.9846862 120.54418,33.9880016 120.540838,33.9917906 C120.485939,34.0526514 120.426267,34.1087759 120.363491,34.1615851 C120.358478,34.1658477 120.354659,34.1708208 120.349647,34.1748466 C116.038893,37.7064298 112.307441,41.2448806 107.873046,46.0062306 C102.802778,51.4498371 91.7857706,58.7815489 86.0428726,60.5339606 C83.3864839,61.3445694 81.1912456,61.9366004 79.2545094,62.4594822 C75.5209096,63.4666453 72.7568714,64.2130779 69.3242606,65.8091935 L66.5163033,75.703689 C66.2938436,76.487538 65.5749072,77 64.7927178,77 C64.632079,77 64.4685759,76.9786869 64.3062662,76.9332189 C63.354129,76.6670418 62.7994119,75.6852176 63.0674615,74.7405729 L66.0950142,64.0724114 C66.1009815,64.0513351 66.1074262,64.0304956 66.1141095,64.0098929 C66.2733162,63.5189808 66.4310907,63.0273583 66.589104,62.5354989 C68.5186795,56.5263844 70.5141337,50.3124272 74.8387316,45.4144364 C84.7202875,34.2226827 104.265713,30.6427897 119.255011,31.0276098 C119.339269,31.0297412 119.421379,31.0396873 119.502295,31.0529488 C119.520435,31.0557905 119.538337,31.0588691 119.556239,31.0624213 C119.637155,31.0782877 119.716639,31.0979431 119.793259,31.1239925 C119.793736,31.1239925 119.794214,31.1242293 119.794691,31.1244661 C119.871788,31.1507523 119.945305,31.1836692 120.017151,31.2196647 C120.030995,31.2265323 120.0446,31.233163 120.058205,31.2405042 C120.128619,31.2783942 120.196885,31.3198363 120.261331,31.3662516 C120.269208,31.3719351 120.276369,31.378329 120.284007,31.3840125 C120.341293,31.4268755 120.395714,31.473054 120.447271,31.5223109 C120.459445,31.5339147 120.472095,31.5450449 120.48403,31.5571224 C120.53869,31.6120628 120.58977,31.6703187 120.636792,31.7318899 C120.646101,31.7442042 120.654694,31.7572288 120.663764,31.7697799 C120.706489,31.8287462 120.745635,31.8900806 120.780961,31.9540199 C120.785735,31.9630188 120.791225,31.9713072 120.795998,31.9803061 C120.834189,32.0527707 120.866651,32.1285507 120.894816,32.2064619 C120.896965,32.2126191 120.900545,32.2183026 120.902693,32.2244597 C120.905319,32.2318009 120.906274,32.2396157 120.90866,32.2471937 C120.959502,32.3997009 120.989815,32.5607333 120.996976,32.7279228 C120.997692,32.7487623 120.998169,32.769365 120.998408,32.7899677 Z M77.5340269,47.756511 C75.2953469,50.2920613 73.752689,53.2567157 72.4766485,56.4636291 C76.7888345,52.5955355 82.6281636,48.2464759 88.0376107,44.6611362 C91.3895441,42.4395991 97.3876024,38.6593629 103.660632,35.6411889 C101.191855,36.0456645 98.7963549,36.5581265 96.5295094,37.1757332 C88.0946578,39.4737607 81.7037145,43.0337614 77.5340269,47.756511 Z M105.24172,43.5935859 C108.084287,40.541311 110.64878,37.9761591 113.255998,35.5938264 C107.252689,37.4175187 99.0698944,41.6242541 90.0278137,47.6172653 C84.8055001,51.0785153 79.7992015,54.8284396 75.9309802,58.1760196 C74.9697728,59.0079415 74.1544054,59.7489275 73.4588607,60.4098709 C75.0136919,59.9201429 76.5859475,59.4953014 78.3143067,59.0290178 C80.2245483,58.513714 82.3894729,57.9292611 84.9897693,57.1359395 C89.6492502,55.7143547 100.307028,48.8917896 105.24172,43.5935859 Z",id:"Combined-Shape",fill:"#1F2D3D"}),r.createElement(L,{d:"M31.5,18.5 L38.5,18.5",id:"Line",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",css:M(1.5)}),r.createElement(L,{d:"M47.75,18.5 L86.25,18.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(.2)}),r.createElement(L,{d:"M30.9375,38.5 L72.0625,38.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(1)}),r.createElement(L,{d:"M31,56.5 L59,56.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(3)}),r.createElement(L,{d:"M31.375,72.5 L50.625,72.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(2)})));var B=o("./node_modules/react-github-btn/index.js");const N=I.d.div`
  width: auto;
  padding: 0;
  float: right;
  margin-right: 2px;
  margin-left: 12px;
  display: ${e=>e.showGithubLink?"display-inline":"none"}
`,F=({repository:e,...t})=>r.createElement(N,t,r.createElement(B.a,{href:"https://github.com/apache/atlas/fork","data-size":"large","aria-label":"Fork apache/atlas on GitHub"},"Fork"),r.createElement(B.a,{href:"https://github.com/apache/atlas/archive/master.zip","data-size":"large","aria-label":"Download apache/atlas on GitHub"},"Download"),r.createElement(B.a,{href:"https://github.com/apache/atlas","data-size":"large","aria-label":"Star apache/atlas on GitHub"},"Star"));var W=o("./node_modules/lodash/fp/unionBy.js"),q=o.n(W),U=o("./node_modules/lodash/fp/get.js"),G=o.n(U),V=o("./theme/styles/responsive.js");const K=Object(O.b)("colors.sidebarPrimary"),J=Object(O.b)("colors.primary"),Q=I.d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${e=>K(e)||J(e)};
  }

  @media screen and (max-width: ${V.a.desktop}px) {
    &:before {
      height: ${e=>e.showBg?"3px":0};
    }
  }

  ${Object(O.b)("styles.logo")};
`;Q.defaultProps={showBg:!0,theme:null};const Z=Object(I.d)("img")`
  padding: 0;
  margin: 5px 0;
`,X=(Object(I.d)("h1")`
  margin: 5px 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${Object(O.b)("colors.sidebarText")};
`,({showBg:e})=>{const{base:t,title:o,linkComponent:n,baseUrl:a}=Object(u.useConfig)();return n?r.createElement(Q,{showBg:e},r.createElement(n,{to:"string"===typeof t?t:"/"},r.createElement(Z,{src:`${a}/images/atlas-logo-grey.png`,alt:o}))):null});var Y=o("./node_modules/react-feather/dist/icons/search.js"),ee=o.n(Y);const te=Object(O.b)("colors.sidebarBorder","#CED4DE"),oe=Object(O.b)("colors.sidebarText","#13161F");I.d.div`
  display: flex;
  align-items: center;
  padding: 5px 24px;
  margin-bottom: 20px;
  border-top: 1px dotted ${te};
  border-bottom: 1px dotted ${te};
  opacity: 1;
`,Object(I.d)(ee.a)`
  stroke: ${oe};
  min-width: 20px;
  opacity: 0.5;
`,I.d.input`
  outline: none;
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  color: ${oe};
`;var ne=o("./node_modules/react-feather/dist/icons/chevron-down.js"),ae=o.n(ne);o("./node_modules/lodash/fp/isArray.js"),o("./node_modules/@reach/router/es/index.js");const re=Object(O.b)("colors.sidebarPrimary"),ie=Object(O.b)("colors.primary"),se={to:"",onClick:r.MouseEventHandler},le=I.d.a`
  position: relative;
  font-size: 14px;
  padding: 0 0 5px 16px;
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.2s;

  &,
  &:visited,
  &.active {
    color: ${Object(O.b)("colors.sidebarText")};
  }

  &.active {
    opacity: 1;
  }

  &:before {
    z-index: 1;
    position: absolute;
    display: block;
    content: "";
    top: 1px;
    left: 0;
    width: 0;
    height: 20px;
    background: ${e=>re(e)||ie(e)};
    transition: width 0.2s;
  }

  &.active:before {
    width: 2px;
  }
`;le.defaultProps=se;Object.assign({},se,{as:null,slug:""}),I.d.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 24px;
`;const ue=({route:e,onClick:t})=>{const o=Object(u.useDocs)(),{linkComponent:n}=Object(u.useConfig)();o&&((e,t)=>{const o=t.find(t=>t.route===e),n=d()(o,"headings");n&&n.filter(e=>2===e.depth)})(e,o);return null};function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const de=I.c`
  font-weight: normal !important;
  color: #807e7e !important;
  &:hover,
  &.active {
    color: ${e=>Object(O.b)("colors.sidebarPrimary")(e)||Object(O.b)("colors.primary")(e)} !important;
  }
`,pe=I.c`
  padding-left: 0;
  &:after {
    width: 1px;
  }
`,me=I.d.div`
  position: relative;
  transition: padding 0.2s;

  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 30px;
    left: 24px;
    width: 0;
    height: calc(100% - 36px);
    border-left: 1px dashed ${Object(O.b)("colors.sidebarBorder")};
    transition: width 0.2s;
  }

  ${e=>e.active&&pe};
`;me.defaultProps={active:!1,theme:null};const he=e=>Object(I.d)(e)`
  position: relative;
  display: block;
  padding: 4px 15px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${Object(O.b)("colors.sidebarText")};
  text-decoration: none;
  transition: color 0.2s;

  &:hover,
  &:visited {
    color: ${Object(O.b)("colors.sidebarText")};
  }

  &:hover,
  &.active {
    color: ${e=>Object(O.b)("colors.sidebarPrimary")(e)||Object(O.b)("colors.primary")(e)};
    font-weight: 600;
  }
  ${e=>ge(e)?de:""}
`,ge=e=>{const{partiallyActive:t,to:o,children:n}=e;return t&&o.length>10&&!"REST API,ASF".includes(n.trim())},fe=he(I.d.a``),be=(e=null,t)=>{const o=e&&e.classList.contains("active"),n=t&&(e=>{if("undefined"!==typeof window)return location.pathname.slice(0,location.pathname.length-1)===e})(t);return Boolean(o||n)},ve=(r.MouseEventHandler,r.ReactNode,r.forwardRef(({item:e,children:t,onClick:o,onActiveChange:n},a)=>{const{linkComponent:i}=Object(u.useConfig)(),[s,l]=Object(r.useState)(!1),c=Object(u.usePrevious)(s),d=Object(r.useRef)(a),p=Object(r.useMemo)(()=>he(i),[i]),m={children:t,onClick:o};return Object(r.useEffect)(()=>{const t=be(d.current,e.route);c!==t&&(l(t),d&&((e,t)=>{t&&t&&!e.classList.contains("active")&&e.classList.add("active")})(d.current,t))}),r.createElement(me,{active:s},e.route?r.createElement(p,ce({},m,{to:e.route,innerRef:d,activeClassName:"active",partiallyActive:!0})):r.createElement(fe,ce({},m,{ref:d,href:e.href||"#",target:e.href?"_blank":"_self"},!e.href&&{onClick:e=>{e.preventDefault(),m.onClick&&m.onClick(e)}})),s&&e.route&&r.createElement(ue,{route:e.route}))}));ve.displayName="MenuLink";var ye={localStorageKeys:{ACTIVEMENU:"ACTIVEMENU",NAVPOSITION:"NAVPOSITION"},checkMenuIsOPen:e=>{const{activeMenu:t,item:o}=e;return-1!==t.findIndex(e=>e===o.name)},pagesForGithubLink:["Source Repository"]};function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const ke={id:"",name:"",route:"",href:"",menu:[],order:Number,parent:""},we=I.d.div`
  display: flex;
  flex-direction: column;
`,je={opened:!1},Ae=I.d.dl`
  flex: 1;
  overflow-y: auto;
  visibility: ${e=>e.opened?"visible":"hidden"};
  max-height: ${e=>e.opened?"auto":"0px"};
`;Ae.defaultProps=je;const Ee=I.d.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${e=>e.opened?"-180deg":"0deg"});
  transform-origin: 50% 50%;
  transition: transform 0.3s;

  & svg {
    stroke: ${Object(O.b)("colors.sidebarText")};
  }
`;Ee.defaultProps=je;const Ce=e=>{const{item:t,sidebarToggle:o,handleActiveMenu:n}=e,a=ye.checkMenuIsOPen(e),i=!t.href&&t.submenu&&t.submenu.length>0,s=!t.href&&!t.route,l=e=>{e.preventDefault(),n(t)};let u="";return u=(t.submenu&&t.submenu.length)>0&&t.name!==t.submenu[0].name?r.createElement(we,null,r.createElement(ve,xe({item:t},s&&{onClick:l}),`${t.name}`,i&&r.createElement(Ee,{opened:a},r.createElement(ae.a,{size:15}))),i&&r.createElement(Ae,{opened:a},t.submenu&&t.menu.map(e=>r.createElement("dt",{key:e.name},r.createElement(ve,{item:e,onClick:o},`${e.name}`))))):r.createElement(we,null,t.submenu&&t.submenu.map(e=>r.createElement("dt",{key:e.name},r.createElement(ve,{item:e},`${e.name}`))))};function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}Ce.defaultProps={item:ke,sidebarToggle:null,collapseAll:!0},Ce.defaultProps={opened:!0,hasActive:!0};const Ie={id:"",name:"",route:"",href:"",menu:[],order:Number,parent:""},Oe=I.d.div`
  display: flex;
  flex-direction: column;
`,Pe={opened:!1},De=I.d.dl`
  flex: 1;
  overflow-y: auto;
  visibility: ${e=>e.opened?"visible":"hidden"};
  max-height: ${e=>e.opened?"auto":"0px"};
`;De.defaultProps=Pe;const He=I.d.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${e=>e.opened?"-180deg":"0deg"});
  transform-origin: 50% 50%;
  transition: transform 0.3s;
  & svg {
    stroke: ${Object(O.b)("colors.sidebarText")};
  }
`;He.defaultProps=Pe;const $e=e=>{const{item:t,sidebarToggle:o,handleActiveMenu:n,activeMenu:a}=e,i=ye.checkMenuIsOPen(e),s=i,l=!t.href&&t.menu&&t.menu.length>0,u=!t.href&&!t.route,c=e=>{e.preventDefault(),n(t)},d={handleActiveMenu:n,activeMenu:a};let p=r.createElement(Oe,null,r.createElement(ve,Se({item:t},u&&{onClick:c}),` ${t.name} `,l&&r.createElement(He,{opened:s},r.createElement(ae.a,{size:15}))),l&&r.createElement(De,{opened:s},t.menu&&t.menu.map(e=>r.createElement(De,{opened:s,key:e.name},r.createElement(Ce,Se({item:e},d))))));return l||u||(p=r.createElement(Oe,null,r.createElement(ve,Se({item:t},i&&{handleToggle:c}),`${t.name} `))),p};$e.defaultProps={item:Ie,sidebarToggle:null,collapseAll:!0},$e.defaultProps={opened:!1,hasActive:!1};const Te={opened:!0},ze=e=>e.opened?"45deg":"0deg",Me=I.d.div`
  position: relative;
  width: 23px;
  height: 32px;
  transform: translateX(${e=>e.opened?"-2px":"-1px"})
    translateY(${e=>e.opened?"0":"2px"})
    scale(${e=>e.opened?.8:1});
`;Me.defaultProps=Te;const Le=Object(O.b)("colors.sidebarBg"),_e=Object(O.b)("colors.sidebarPrimary"),Re=Object(O.b)("colors.sidebarText"),Be=Object(O.b)("colors.primary"),Ne=Object(O.b)("colors.background"),Fe=Object(O.b)("colors.text"),We=I.d.span`
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  right: 0;
  background: ${e=>e.opened?Re(e):Fe(e)};
  transition: transform 0.3s, opacity 0.3s;

  &:nth-of-type(1) {
    top: -2px;
    transform: translateY(${e=>e.opened?"10px":"0px"}) rotate(${ze});
  }

  &:nth-of-type(2) {
    top: 6px;
    opacity: ${e=>e.opened?"0":"1"};
  }

  &:nth-of-type(3) {
    top: 14px;
    transform: translateY(${e=>e.opened?"-6px":"0px"}) rotate(-${ze});
  }
`;We.defaultProps=Te;const qe=Object(O.b)("radii"),Ue=I.d.button`
  cursor: pointer;
  z-index: 99;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 6px;
  width: 33px;
  height: 30px;
  top: ${e=>e.opened?"3px":"2px"};
  right: ${e=>e.opened?"-39px":"-27px"};
  transform: translateX(${e=>e.opened?"-6px":"10px"}) translateY(${e=>e.opened?"0px":"4px"});
  transition: transform 0.3s;
  outline: none;
  border: none;
  background: ${e=>e.opened?Le(e):Ne(e)};
  border-radius: ${e=>e.opened?`0 0 ${qe(e)} 0`:`${qe(e)}`};

  &:before {
    position: absolute;
    content: "";
    top: -3px;
    left: 0;
    width: calc(100% + 1px);
    height: ${e=>e.opened?"3px":0};
    background: ${e=>_e(e)||Be(e)};
  }

  ${Object(V.b)({display:["block","block","block","none"]})};
`;Ue.defaultProps=Te;Object.assign({},Te,{onClick:e=>null});const Ge=({opened:e,onClick:t})=>r.createElement(Ue,{opened:e,onClick:t},r.createElement(Me,{opened:e},r.createElement(We,{opened:e}),r.createElement(We,{opened:e}),r.createElement(We,{opened:e})));function Ve(e){return e&&"object"===typeof e&&"default"in e?e.default:e}const Ke=Ve(o("./node_modules/lodash/fp/pipe.js")),Je=Ve(o("./node_modules/lodash/fp/omit.js")),Qe=Ve(o("./node_modules/array-sort/index.js")),Ze=Ve(o("./node_modules/lodash/fp/flattenDepth.js")),Xe=Ve(o("./node_modules/match-sorter/dist/match-sorter.esm.js")),Ye=o("./node_modules/ulid/dist/index.esm.js"),et=Object(O.b)("colors.sidebarBg"),tt=Object(O.b)("colors.sidebarText"),ot=Object(O.b)("colors.sidebarBorder"),nt=I.d.div`
  position: relative;
  width: 320px;
  min-width: 320px;
  min-height: 100vh;
  background: ${et};
  transition: transform 0.2s, background 0.3s;
  z-index: 1000;

  ${Object(V.b)({position:["absolute","absolute","absolute","relative"]})};

  dl {
    padding: 0;
    margin: 0 10px;
  }

  dl a {
    font-weight: 400;
  }

  @media screen and (max-width: ${V.a.desktop-1}px) {
    transform: translateX(${e=>e.opened?"-100%":"0"});
    position: ${e=>e.opened?"auto":"fixed"};
  }

  ${Object(O.b)("styles.sidebar")};
`;nt.defaultProps={opened:!0,theme:""};I.d.div`
  position: relative;
`,I.d.div`
  position: fixed;
  top: 0px;
  right: 10px;
`;const at=I.d.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 320px;
  height: 100%;
  max-height: 100vh;
  background: ${et};
`,rt=I.d.nav`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`,it=I.d.div`
  flex: 1;
  opacity: 0.7;
  padding: 0 24px;
  color: ${tt};
`,st=(I.d.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${tt};
  border-top: 1px dashed ${ot};
`,I.d.a`
  padding: 0;
  margin: 0;
  margin-left: 5px;
`,Object(I.d)(({width:e=100,className:t})=>r.createElement("span",null))`
  fill: ${tt};
`,I.d.div`
  content: "";
  display: ${e=>e.opened?"none":"block"};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  z-index: 99;
`);const lt=(e,t)=>e.name<t.name?-1:e.name>t.name?1:0,ut=(e,t=[])=>{const o="string"!==typeof e?G()("name",e):e,n=t.findIndex(e=>e===o);return-1!==n?n:1/0},ct=e=>!e.submenu,dt=e=>{const t=(e=>"string"===typeof e?{name:e}:e)(e);return Object.assign({},t,{id:t.id||Ye.ulid(),parent:G()("parent",t)||G()("parent",e),menu:Array.isArray(t.menu)?t.menu.map(dt):t.menu})},pt=Ke(dt,e=>e.href||e.route?Je("menu",e):e),mt=e=>t=>t.submenu===e,ht=e=>({name:e.name,route:e.route,parent:e.parent,submenu:e.submenu,menu:e.menu});function gt(e,t,o){return Array.from(new Set(e.reduce((e,o)=>{const n=G()(t)(o);return n?e.concat([n]):e},[])))}const ft=(e,t)=>t.filter(mt(e)).map(ht),bt=(e,t)=>t.filter(mt(e)).map(ht),vt=e=>{const t=e.filter(ct).map(ht),o=gt(e,"menu").map((e=>t=>({name:t,menu:bt(t,e)}))(e)),n=gt(e,"submenu").map(function(e){return function(t){return{name:t,submenu:ft(t,e),menu:bt(t,e)}}}(e));for(var a in o)for(var r of t)if(r.name==o[a].name){o[a]=r;break}for(var a in o)for(var i in n)o[a].name==n[i].menu[0].menu&&(o[a].menu.length,o[a].menu.push(n[i]));return q()("name",o,t)},yt=(e,t)=>{const o=e.map(pt),n=t.map(pt);return q()("name",o,n).map(e=>{if(!e.menu)return e;const t=n.find(t=>t.name===e.name),o=t&&t.menu;return Object.assign({},e,{menu:o?yt(e.menu,o):e.menu||t.menu})})},xt=(e,t=[])=>{return Qe(e,((e=[])=>(t,o)=>{const n=e.map(e=>e.name||e);return function(e,t,o){return e<t?o?1:-1:e>t?o?-1:1:0}(ut(t,n),ut(o,n))})(t),lt).map(e=>{if(!e.menu)return e;const o=t.find(t=>t.name===e.name),n=o&&o.menu;return Object.assign({},e,{menu:n?xt(e.menu,n):e.menu})})},kt=e=>{const{query:t=""}=e||{},{entries:o,config:n}=Object(r.useContext)(u.doczState.context);if(!o)return null;const a=o.map(({value:e})=>e),i=vt(a),s=r.useMemo(()=>{const t=yt(i,n.menu);return((e,t)=>t?e.filter(t).map(e=>e.menu?Object.assign({},e,{menu:e.menu.filter(t)}):e):e)(xt(t,n.menu),e&&e.filter)},[o,n]);return t&&t.length>0?((e,t)=>{const o=t.map(e=>[e].concat(e.menu||[])),n=Ze(2,o),a=[...new Set(n)];return Xe(a,e,{keys:["name"]})})(t,s):s};st.defaultProps={opened:!1};const wt=()=>{const[e,t]=Object(r.useState)((()=>{const{localStorageKeys:e}=ye;let t=JSON.parse(localStorage.getItem(e.ACTIVEMENU));return t||(t=["Documentation"],localStorage.setItem(e.ACTIVEMENU,JSON.stringify(t))),t})()),[o,n]=Object(r.useState)(!0),[a,i]=Object(r.useState)(""),s=kt({query:a}),l=Object(u.useWindowSize)().innerWidth>=V.a.desktop,c=Object(u.usePrevious)(l),d=Object(r.useRef)();Object(r.useEffect)(()=>{o||c||!l||(n(!0),document.documentElement.classList.remove("with-overlay"))}),Object(r.useEffect)(()=>{const{localStorageKeys:e}=ye,t=parseInt(localStorage.getItem(e.NAVPOSITION));t&&(d.current.scrollTop=t)},[]);const p=()=>{l||(n(e=>!e),(e=>{const t=e?"remove":"add";"undefined"===typeof window||l||document.documentElementyyy.classList[t]("with-overlay")})(!o))},m=()=>{const{localStorageKeys:e}=ye;localStorage.setItem(e.NAVPOSITION,d.current.scrollTop)},h=o=>{const{localStorageKeys:n}=ye,a=JSON.parse(JSON.stringify(e)),r=a.findIndex(e=>e===o.name);-1===r?(a.push(o.name),t(a)):(a.splice(r,1),t([...a])),localStorage.setItem(n.ACTIVEMENU,JSON.stringify(a))};let g=r.createElement(r.Fragment,null,r.createElement(nt,{opened:o},r.createElement(at,null,r.createElement(Ge,{opened:!o,onClick:p}),r.createElement(X,{showBg:!0}),s&&0===s.length?r.createElement(it,null,"No documents founda."):r.createElement(rt,{ref:d,onScroll:m},s&&s.map(t=>r.createElement($e,{key:t.id,item:t,sidebarToggle:p,activeMenu:e,handleActiveMenu:h}))))),r.createElement(st,{opened:o,onClick:p}));return a.length>0&&(g=r.createElement(r.Fragment,null,r.createElement(nt,null,r.createElement(at,null,r.createElement(Ge,{opened:!o,onClick:p}),r.createElement(X,{showBg:!o}),r.createElement(ve,{item:s}),r.createElement(rt,{ref:d,onScroll:m},s&&s.map(e=>r.createElement(Ce,{key:e.id,item:e,sidebarToggle:p,collapseAll:Boolean(a.length)}))))))),g},jt=I.d.div`
  display: flex;
`,At=I.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${Object(O.b)("colors.text")};
  background: ${Object(O.b)("colors.background")};
`,Et=I.d.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  color: ${Object(O.b)("colors.primary")};
`,Ct=I.d.p`
  margin: 0;
  font-size: 18px;
`,St=I.d.ol`
  list-style: none;
  counter-reset: my-awesome-counter;

  & li {
    counter-increment: my-awesome-counter;
  }

  & li::before {
    content: counter(my-awesome-counter) '. ';
    color: ${Object(O.b)("colors.border")};
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    margin-right: 5px;
  }

  ${Object(O.b)("styles.ol")};
`;var It=o("./node_modules/react-feather/dist/icons/edit-2.js"),Ot=o.n(It);const Pt=I.d.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
`,Dt=Object(I.d)(Pt)`
  background: transparent;
`;var Ht=o("./node_modules/react-dropdown-select/lib/index.js"),$t=o.n(Ht);function Tt(){return(Tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const zt=e=>{let{options:t,...o}=e;const[n,a]=Object(r.useState)([{id:1,href:"/",title:"Latest",label:"Latest"}]),s=I.d.div` > div { display: inline-block; width: 145px } label {margin-right: 5px}`;return i.a.createElement(s,null,i.a.createElement(r.Fragment,null,i.a.createElement("label",null,"Versions:"),i.a.createElement($t.a,Tt({valueField:"id",placeholder:"Documentation",color:A,options:t,values:n,onChange:e=>{if(e.length>0&&n!==e){let t=e[0].href,o="_self";a(e),"Latest"!==e[0].title&&(t=`http://atlas.apache.org/${e[0].href}`,o="_blank"),window.open(t,o)}}},o))))};zt.propTypes={};var Mt=zt;const Lt=I.d.div`
	width: 220px;
	padding: 0;
	margin-right: 5px;
	float: right;
`,_t=()=>{const{config:e}=Object(r.useContext)(u.doczState.context),{atlasVersions:t}=e;return i.a.createElement(Lt,null,i.a.createElement(Mt,{options:t,style:{minHeight:"auto",padding:"0 5px",borderRadius:"5px"}}))},Rt=I.d.div`
  width: inherit;
  height: auto;
  padding: 0;
  position: fixed;
  z-index: 999;
  top:0;
  right: 0;
  background: rgb(255, 255, 255);
`;var Bt=e=>r.createElement(Rt,null,r.createElement(F,e),r.createElement(_t,null));const Nt=I.d.div`
  flex: 1;
  color: ${Object(O.b)("colors.text")};
  background: ${Object(O.b)("colors.background")};
  min-width: 0;
  position: relative;
  padding-top: 50px;
`,Ft=I.d.div`
  box-sizing: border-box;
  margin: 0 auto;

  ${Object(V.b)({width:["100%","100%",920],padding:["20px","0 40px 40px"]})}

  ${Object(O.b)("styles.container")};
`,Wt=Object(I.d)(Dt.withComponent("a"))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 2px 8px;
  margin: 8px;
  border-radius: ${Object(O.b)("radii")};
  border: 1px solid ${Object(O.b)("colors.border")};
  opacity: 0.7;
  transition: opacity 0.4s;
  font-size: 14px;
  color: ${Object(O.b)("colors.text")};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    background: ${Object(O.b)("colors.border")};
  }

  ${Object(V.b)({visibility:["hidden","hidden","visible"],top:[0,-60,32],right:[0,0,40]})};
`,qt=Object(I.d)(Ot.a)`
  margin-right: 5px;
`,Ut=I.d.p`
  color: ${Object(O.b)("colors.text")};
  ${Object(O.b)("styles.paragraph")};
`,Gt=I.d.div`
  display: flex;
  flex-direction: column;

  & ~ & {
    margin-top: 20px;
  }
`,Vt=I.d.div`
  display: flex;
  border-bottom: 1px solid ${Object(O.b)("colors.propsBg")};
`,Kt=I.d.span`
  background: ${Object(O.b)("colors.propsBg")};
  color: ${Object(O.b)("colors.primary")};
  padding: 5px 10px;
  border-radius: 4px 4px 0 0;
  font-size: 16px;
  font-weight: 500;

  & ~ & {
    margin-left: 5px;
  }
`,Jt=Object(I.d)(Kt)`
  color: ${Object(O.b)("colors.propsText")};
  background: ${Object(O.b)("colors.propsBg")};
  font-weight: 400;
`,Qt=Object(I.d)(Jt)`
  background: transparent;
  padding-left: 0;
  padding-right: 0;
`,Zt=Object(I.d)(Jt)`
  flex: 1;
  text-align: right;
  background: transparent;
  opacity: 0.5;
`,Xt=({props:e,getPropType:t})=>{const o=Object.entries(e),n=Object(u.useComponents)(),a=Object(r.useMemo)(()=>Object(I.d)(n.P||"p")`
      font-size: 16px;
      color: ${Object(O.b)("colors.sidebarText")};
    `,[]);return r.createElement(r.Fragment,null,o.map(([e,o])=>o.type||o.flowType?r.createElement(Gt,{key:e},r.createElement(Vt,null,r.createElement(Kt,null,e),r.createElement(Jt,null,t(o)),o.defaultValue&&r.createElement(Qt,null,"''"===o.defaultValue.value?r.createElement("em",null,"= [Empty String]"):r.createElement("em",null,"= ",o.defaultValue.value.replace(/\'/g,'"'))),o.required&&r.createElement(Zt,null,r.createElement("em",null,"required"))),o.description&&r.createElement(a,null,o.description)):null))},Yt=I.d.div`
  border: 1px solid ${Object(O.b)("colors.border")};
  border-radius: 4px;
  overflow: hidden;
  background: ${Object(O.b)("colors.propsBg")};
  color: ${Object(O.b)("colors.propsText")};
`,eo=I.d.div`
  padding: 8px 0;

  @media (min-width: ${"600px"}) {
    padding: O;
  }

  & + & {
    border-top: 1px solid ${Object(O.b)("colors.border")};
  }
`,to=I.d.div`
  min-width: 0;
  padding: 2px 15px;
  word-wrap: break-word;

  @media (min-width: ${"600px"}) {
    padding: 8px 15px;
  }
`,oo=Object(I.d)(to)`
  @media (min-width: ${"600px"}) {
    flex-basis: 25%;
  }
`,no=Object(I.d)(to)`
  @media (min-width: ${"600px"}) {
    flex-basis: 50%;
  }
`,ao=Object(I.d)(to)`
  @media (min-width: ${"600px"}) {
    flex-basis: 25%;
  }
`,ro=I.d.div`
  display: flex;
  flex-direction: column;
  font-family: ${Object(O.b)("fonts.mono")};

  @media (min-width: ${"600px"}) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`,io=I.d.span`
  color: ${Object(O.b)("colors.primary")};
  font-weight: bold;
`,so=I.d.span`
  font-size: 0.9em;
`,lo=I.d.span`
  font-size: 0.9em;
`,uo=I.d.span`
  font-size: 0.8em;
  opacity: 0.8;
`,co=({props:e,getPropType:t})=>{const o=Object.entries(e),n=Object(u.useComponents)(),a=Object(r.useMemo)(()=>Object(I.d)(n.P||"p")`
      margin: 0;
      font-size: 16px;
      color: ${Object(O.b)("colors.blockquoteColor")};
      padding: 0 15px 8px 15px;
    `,[]);return r.createElement(Yt,null,o.map(([e,o])=>o.type||o.flowType?r.createElement(eo,{key:e},r.createElement(ro,null,r.createElement(oo,null,r.createElement(io,null,e)),r.createElement(no,null,r.createElement(so,null,t(o))),r.createElement(ao,null,o.defaultValue&&r.createElement(lo,null,"''"===o.defaultValue.value?r.createElement("em",null,"= [Empty String]"):r.createElement("em",null,"= ",o.defaultValue.value.replace(/\'/g,'"'))),o.required&&r.createElement(uo,null,r.createElement("strong",null,"required")))),o.description&&r.createElement(a,null,o.description)):null))},po=I.d.div`
  margin: 20px 0;
`,mo=I.d.div`
  overflow-x: auto;
  padding: 2px;
  margin-bottom: 30px;

  ${Object(V.b)({marginBottom:[20,40],maxWidth:["calc(100vw - 40px)","calc(100vw - 80px)","100%"]})};
`,ho=I.d.table`
  padding: 0;
  table-layout: auto;
  box-shadow: 0 0 0 1px ${Object(O.b)("colors.border")};
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: ${Object(O.b)("radii")};
  font-size: 14px;
  color: ${Object(O.b)("colors.tableColor")};

  ${Object(V.b)({overflowX:["initial","initial","initial","hidden"],display:["table","table","table","table"]})}

  & thead {
    color: ${Object(O.b)("colors.theadColor")};
    background: ${Object(O.b)("colors.theadBg")};
  }

  & thead th {
    font-weight: 400;
    padding: 20px 20px;

    &:nth-of-type(1) {
      ${Object(V.b)({width:["20%","20%","20%","auto"]})};
    }

    &:nth-of-type(2) {
      ${Object(V.b)({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(3) {
      ${Object(V.b)({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(4) {
      ${Object(V.b)({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(5) {
      ${Object(V.b)({width:["20%","20%","20%","auto"]})};
    }
  }

  & tbody td {
    padding: 12px 20px;
    line-height: 2;
    font-weight: 200;
  }

  & tbody > tr {
    display: table-row;
    border-top: 1px solid ${Object(O.b)("colors.border")};
  }

  ${Object(O.b)("styles.table")};
`,go={a:({href:e,...t})=>{const{separator:o,linkComponent:n}=Object(u.useConfig)(),a=Object(u.useDocs)(),i=Object(r.useMemo)(()=>((e,t)=>"undefined"===typeof window?null:[location.pathname.split(e).slice(0,-1).join(e).slice(1),(t||"").replace(/^(?:\.\/)+/gi,"")].join("/"))(o,e),[o,e]),s=a&&a.find(e=>e.filepath===i),l=s?s.route:e;return l&&l.startsWith("/")?r.createElement($,H({as:n},t,{to:l})):r.createElement($,H({},t,{href:l}))},blockquote:P,inlineCode:D,loading:()=>r.createElement(T,null,r.createElement(R,null)),notFound:()=>r.createElement(jt,null,r.createElement(wt,null),r.createElement(At,null,r.createElement(Et,null,"Page Not Found"),r.createElement(Ct,null,"Check if you changed the document route or deleted it!"))),ol:St,p:Ut,page:({children:e,doc:{link:t,fullpage:o,edit:n=!1}})=>{const{repository:a}=Object(u.useConfig)(),{props:i}=e,s=ye.pagesForGithubLink.toString().includes(i.doc.name),l=r.createElement(r.Fragment,null,t&&n&&r.createElement(Wt,{href:t,target:"_blank"},r.createElement(qt,{width:14})," Edit page"),r.createElement(Bt,{showGithubLink:s}),e);return r.createElement(jt,null,a&&r.createElement(F,{repository:a}),!o&&r.createElement(wt,null),r.createElement(Nt,null,o?l:r.createElement(Ft,null,l)))},pre:()=>r.createElement("div",null),props:({title:e,isRaw:t,isToggle:o,...n})=>{const[a,i]=Object(r.useState)(!0),s=Object(u.useComponents)(),l=Object(r.useMemo)(()=>Object(I.d)(s.H3||"h3")`
      padding: 8px 0;
      position: relative;
      ${t?"":"margin-bottom: 0;"}
      ${!a||t?"border-bottom: 1px solid rgba(0, 0, 0, 0.1);":""}

      ${o?`\n        cursor: pointer;\n        padding-right: 40px;\n\n        &::after {\n          content: '';\n          position: absolute;\n          top: 50%;\n          right: 16px;\n          transform: translateY(-50%) ${a?"rotate(-135deg)":"rotate(45deg)"};\n          ${a?"":"margin-top: -2px;"}\n          width: 8px;\n          height: 8px;\n          border-bottom: 2px solid;\n          border-right: 2px solid;\n        }\n      `:""}
    `,[a]),c=o?{onClick:()=>i(e=>!e),onkeydown:()=>i(e=>!e),role:"button",tabindex:0}:{};return r.createElement(po,null,(!!e||o)&&r.createElement(l,c,e||"Component props"),a&&r.createElement("div",null,t?r.createElement(Xt,n):r.createElement(co,n)))},table:e=>r.createElement(mo,null,r.createElement(ho,e)),ul:I.d.ul`
  list-style: none;

  & li::before {
    content: '● ';
    color: ${Object(O.b)("colors.border")};
    font-weight: bold;
    font-size: 0.5em;
    margin-right: 5px;
  }

  ${Object(O.b)("styles.ul")};

  ul li {
    padding-left: 25px;
  }
`},fo=I.b`
  @import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');

  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
    ${Object(O.b)("styles.body")};
  }

  .with-overlay {
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
  }
`,bo={colors:n,styles:{body:I.c`
    font-family: ${Object(O.b)("fonts.ui")};
    font-size: 16px;
    line-height: 1.6;
  `,h1:I.c`
    margin: 40px 0 20px;
    font-family: ${Object(O.b)("fonts.display")};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.02em;
  `,h2:I.c`
    margin: 30px 0 15px;
    line-height: 1.4em;
    font-family: ${Object(O.b)("fonts.display")};
    font-weight: 500;
    font-size: 28px;
    letter-spacing: -0.02em;
  `,h3:I.c`
    margin: 25px 0 10px;
    font-size: 20px;
    font-weight: 400;
  `,h4:I.c`
    margin: 25px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,h5:I.c`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,h6:I.c`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  `,ol:I.c`
    padding: 0;
    margin: 10px 0 10px;
  `,ul:I.c`
    padding: 0;
    margin: 10px 0 10px;
  `,playground:I.c`
    padding: 40px;
  `,code:I.c`
    margin: 0 3px;
    border-radius: 3px;
    font-family: ${Object(O.b)("fonts.mono")};
    padding: 2px 5px;
    font-size: 0.8em;
    border: "1px solid rgba(0, 0, 0, 0.02)";
  `,pre:I.c`
    font-family: ${Object(O.b)("fonts.mono")};
    font-size: 1em;
    line-height: 1.8;
  `,paragraph:I.c`
    margin: 10px 0 20px 0;
  `,table:I.c`
    overflow-y: hidden;
    width: 100%;
    font-family: ${Object(O.b)("fonts.mono")};
    font-size: 16px;
    overflow-x: initial;
    display: block;
  `,blockquote:I.c`
    margin: 25px 0;
    padding: 20px;
    font-style: italic;
    font-size: 16px;
  `},fonts:{display:'"Source Sans Pro", sans-serif',mono:'"Inconsolata", monospace',ui:'"Source Sans Pro", sans-serif'},radii:"2px",mode:"light",showPlaygroundEditor:!1,linesToScrollEditor:18},vo=(Object(O.b)("colors.sidebarBg"),Object(O.b)("colors.sidebarText","#13161F"),I.d.a`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${Object(O.b)("colors.link")};
  }

  &:hover {
    color: ${Object(O.b)("colors.link")};
  }

  ${Object(O.b)("styles.link")};
`),yo=I.d.div`
	position: absolute;
	margin-left: 350px;
	width: 70%;
	font-size: 10px;
	@media screen and (max-width: ${V.a.oldDesktop}px) {
		width: 90%;
		margin: 0 50px;
	}
	@media screen and (max-width: ${V.a.tablet-1}px) {
		width: 90%;
		margin: 0 50px;
	}
`,xo=I.d.div``,ko=e=>{let{options:t,title:o,...n}=e;return r.createElement(yo,null,r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement(xo,null,r.createElement(vo,{href:"https://www.apache.org/foundation/contributing"},r.createElement("img",{src:"https://www.apache.org/images/SupportApache-small.png",alt:"Support the ASF",id:"asf-logo",height:"10",width:"10"})),"Copyright \xa9 2011-2018 The Apache Software Foundation. Licensed under the"," ",r.createElement(vo,{href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License, Version 2.0"),".Apache Atlas, Atlas, Apache, the Apache feather logo are trademarks of the"," ",r.createElement(vo,{href:"https://www.apache.org"},"Apache Software Foundation"),".All other marks mentioned may be trademarks or registered trademarks of their respective owners."))))};var wo=Object(u.theme)(bo,({mode:e,codemirrorTheme:t,...o})=>({...o,mode:e,codemirrorTheme:t||`docz-${e}`,colors:{...d()(a,e),...o.colors}}))(({children:e})=>r.createElement(O.a,null,r.createElement(fo,null),r.createElement(u.ComponentsProvider,{components:go},e),r.createElement(ko,null))),jo={"documents/ClassificationPropagation.md":function(){return Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"./src/documents/ClassificationPropagation.md"))},"documents/Glossary.md":function(){return Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"./src/documents/Glossary.md"))},"documents/HighAvailability.md":function(){return Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"./src/documents/HighAvailability.md"))},"documents/HighLevelArchitecture.md":function(){return Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"./src/documents/HighLevelArchitecture.md"))},"documents/Introduction.md":function(){return Promise.all([o.e(0),o.e(22)]).then(o.bind(null,"./src/documents/Introduction.md"))},"documents/Notifications.md":function(){return Promise.all([o.e(0),o.e(27)]).then(o.bind(null,"./src/documents/Notifications.md"))},"documents/RestAPI.md":function(){return Promise.all([o.e(0),o.e(34)]).then(o.bind(null,"./src/documents/RestAPI.md"))},"documents/TypeSystem.md":function(){return Promise.all([o.e(0),o.e(48)]).then(o.bind(null,"./src/documents/TypeSystem.md"))},"documents/Downloads/Downloads.md":function(){return Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"./src/documents/Downloads/Downloads.md"))},"documents/Asf/asfinfo.md":function(){return Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"./src/documents/Asf/asfinfo.md"))},"documents/Hook/Hook-Falcon.md":function(){return Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"./src/documents/Hook/Hook-Falcon.md"))},"documents/Hook/Hook-HBase.md":function(){return Promise.all([o.e(0),o.e(9)]).then(o.bind(null,"./src/documents/Hook/Hook-HBase.md"))},"documents/Hook/Hook-Hive.md":function(){return Promise.all([o.e(0),o.e(10)]).then(o.bind(null,"./src/documents/Hook/Hook-Hive.md"))},"documents/Hook/Hook-Kafka.md":function(){return Promise.all([o.e(0),o.e(11)]).then(o.bind(null,"./src/documents/Hook/Hook-Kafka.md"))},"documents/Hook/Hook-Sqoop.md":function(){return Promise.all([o.e(0),o.e(12)]).then(o.bind(null,"./src/documents/Hook/Hook-Sqoop.md"))},"documents/Hook/Hook-Storm.md":function(){return Promise.all([o.e(0),o.e(13)]).then(o.bind(null,"./src/documents/Hook/Hook-Storm.md"))},"documents/Import-Export/Export-API.md":function(){return Promise.all([o.e(0),o.e(14)]).then(o.bind(null,"./src/documents/Import-Export/Export-API.md"))},"documents/Import-Export/Export-HDFS-API.md":function(){return Promise.all([o.e(0),o.e(15)]).then(o.bind(null,"./src/documents/Import-Export/Export-HDFS-API.md"))},"documents/Import-Export/ExportImportAudits.md":function(){return Promise.all([o.e(0),o.e(16)]).then(o.bind(null,"./src/documents/Import-Export/ExportImportAudits.md"))},"documents/Import-Export/Import-API-Options.md":function(){return Promise.all([o.e(0),o.e(18)]).then(o.bind(null,"./src/documents/Import-Export/Import-API-Options.md"))},"documents/Import-Export/Import-API.md":function(){return Promise.all([o.e(0),o.e(17)]).then(o.bind(null,"./src/documents/Import-Export/Import-API.md"))},"documents/Import-Export/Import-Export-API.md":function(){return Promise.all([o.e(0),o.e(20)]).then(o.bind(null,"./src/documents/Import-Export/Import-Export-API.md"))},"documents/Import-Export/ImportEntityTransforms.md":function(){return Promise.all([o.e(0),o.e(19)]).then(o.bind(null,"./src/documents/Import-Export/ImportEntityTransforms.md"))},"documents/Import-Export/Incremental-Export.md":function(){return Promise.all([o.e(0),o.e(21)]).then(o.bind(null,"./src/documents/Import-Export/Incremental-Export.md"))},"documents/Migration/Migration-0.8-to-1.0.md":function(){return Promise.all([o.e(0),o.e(23)]).then(o.bind(null,"./src/documents/Migration/Migration-0.8-to-1.0.md"))},"documents/Misc/AtlasServer.md":function(){return Promise.all([o.e(0),o.e(24)]).then(o.bind(null,"./src/documents/Misc/AtlasServer.md"))},"documents/Misc/ReplicatedAttributes.md":function(){return Promise.all([o.e(0),o.e(25)]).then(o.bind(null,"./src/documents/Misc/ReplicatedAttributes.md"))},"documents/Misc/SoftReference.md":function(){return Promise.all([o.e(0),o.e(26)]).then(o.bind(null,"./src/documents/Misc/SoftReference.md"))},"documents/Project-Info/Mailing-Lists.md":function(){return Promise.all([o.e(0),o.e(29)]).then(o.bind(null,"./src/documents/Project-Info/Mailing-Lists.md"))},"documents/Project-Info/issue-tracking.md":function(){return Promise.all([o.e(0),o.e(28)]).then(o.bind(null,"./src/documents/Project-Info/issue-tracking.md"))},"documents/Project-Info/project-info.md":function(){return Promise.all([o.e(0),o.e(30)]).then(o.bind(null,"./src/documents/Project-Info/project-info.md"))},"documents/Project-Info/project-license.md":function(){return Promise.all([o.e(0),o.e(31)]).then(o.bind(null,"./src/documents/Project-Info/project-license.md"))},"documents/Project-Info/source-repository.md":function(){return Promise.all([o.e(0),o.e(32)]).then(o.bind(null,"./src/documents/Project-Info/source-repository.md"))},"documents/Project-Info/team-list.md":function(){return Promise.all([o.e(0),o.e(33)]).then(o.bind(null,"./src/documents/Project-Info/team-list.md"))},"documents/Search/Search-Advanced.md":function(){return Promise.all([o.e(0),o.e(35)]).then(o.bind(null,"./src/documents/Search/Search-Advanced.md"))},"documents/Search/Search-Basic.md":function(){return Promise.all([o.e(0),o.e(36)]).then(o.bind(null,"./src/documents/Search/Search-Basic.md"))},"documents/Security/AtlasRangerAuthorizer.md":function(){return Promise.all([o.e(0),o.e(37)]).then(o.bind(null,"./src/documents/Security/AtlasRangerAuthorizer.md"))},"documents/Security/AtlasSimpleAuthorizer.md":function(){return Promise.all([o.e(0),o.e(38)]).then(o.bind(null,"./src/documents/Security/AtlasSimpleAuthorizer.md"))},"documents/Security/Authentication.md":function(){return Promise.all([o.e(0),o.e(39)]).then(o.bind(null,"./src/documents/Security/Authentication.md"))},"documents/Security/AuthorizationModel.md":function(){return Promise.all([o.e(0),o.e(40)]).then(o.bind(null,"./src/documents/Security/AuthorizationModel.md"))},"documents/Security/security.md":function(){return Promise.all([o.e(0),o.e(41)]).then(o.bind(null,"./src/documents/Security/security.md"))},"documents/Setup/BuildInstruction.md":function(){return Promise.all([o.e(0),o.e(42)]).then(o.bind(null,"./src/documents/Setup/BuildInstruction.md"))},"documents/Setup/Configuration.md":function(){return Promise.all([o.e(0),o.e(43)]).then(o.bind(null,"./src/documents/Setup/Configuration.md"))},"documents/Setup/EclipseSetup.md":function(){return Promise.all([o.e(0),o.e(44)]).then(o.bind(null,"./src/documents/Setup/EclipseSetup.md"))},"documents/Setup/InstallationInstruction.md":function(){return Promise.all([o.e(0),o.e(45)]).then(o.bind(null,"./src/documents/Setup/InstallationInstruction.md"))},"documents/Setup/QuickStart.md":function(){return Promise.all([o.e(0),o.e(46)]).then(o.bind(null,"./src/documents/Setup/QuickStart.md"))},"documents/Tools/AtlasRepairIndex.md":function(){return Promise.all([o.e(0),o.e(47)]).then(o.bind(null,"./src/documents/Tools/AtlasRepairIndex.md"))},"documents/Whats-New/WhatsNew-1.0.md":function(){return Promise.all([o.e(0),o.e(49)]).then(o.bind(null,"./src/documents/Whats-New/WhatsNew-1.0.md"))},"documents/Whats-New/WhatsNew-2.0.md":function(){return Promise.all([o.e(0),o.e(50)]).then(o.bind(null,"./src/documents/Whats-New/WhatsNew-2.0.md"))}},Ao=o("./.docz/app/db.json"),Eo=function(){return i.a.createElement(wo,{linkComponent:u.Link,db:Ao},i.a.createElement(u.Routes,{imports:jo}))},Co=[],So=[],Io=function(){return Co.forEach(function(e){return e&&e()})},Oo=function(){return So.forEach(function(e){return e&&e()})},Po=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Eo;Io(),l.a.render(i.a.createElement(e,null),Po,Oo)}(Eo)},"./docz-lib/docz/dist/Playground.js":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js");o("./node_modules/lodash/fp/get.js");var a=o("./docz-lib/docz/dist/chunk.js");o("./node_modules/lodash/fp/omit.js"),o("./node_modules/fast-deep-equal/index.js"),o("./node_modules/lodash/fp/merge.js"),o("./node_modules/array-sort/index.js"),o("./node_modules/lodash/fp/unionBy.js"),o("./node_modules/lodash/fp/flattenDepth.js"),o("./node_modules/lodash/fp/pipe.js"),o("./node_modules/ulid/dist/index.esm.js"),o("./node_modules/match-sorter/dist/match-sorter.esm.js"),o("./node_modules/lodash/fp/throttle.js");t.default=({className:e,style:t,wrapper:o,children:r,__scope:i,__position:s,__code:l,__codesandbox:u})=>{const c=a.useComponents();if(!c||!c.playground)return null;const d={className:e,style:t,components:c};return n.createElement(c.playground,Object.assign({},d,{component:r,wrapper:o,scope:i,position:s,code:l,codesandbox:u}))}},"./docz-lib/docz/dist/chunk.js":function(e,t,o){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var a=o("./node_modules/react/index.js"),r=n(o("./node_modules/lodash/fp/get.js")),i=n(o("./node_modules/lodash/fp/omit.js")),s=n(o("./node_modules/fast-deep-equal/index.js")),l=n(o("./node_modules/lodash/fp/merge.js")),u=n(o("./node_modules/array-sort/index.js")),c=n(o("./node_modules/lodash/fp/unionBy.js")),d=n(o("./node_modules/lodash/fp/flattenDepth.js")),p=n(o("./node_modules/lodash/fp/pipe.js")),m=o("./node_modules/ulid/dist/index.esm.js"),h=n(o("./node_modules/match-sorter/dist/match-sorter.esm.js")),g=n(o("./node_modules/lodash/fp/throttle.js"));const f={loading:()=>a.createElement(a.Fragment,null,"Loading"),playground:({component:e,code:t})=>a.createElement(a.Fragment,null,e,t),notFound:()=>a.createElement(a.Fragment,null,"Not found"),page:({children:e})=>a.createElement(a.Fragment,null,e)},b=a.createContext({});function v(e,t,o){return e<t?o?1:-1:e>t?o?-1:1:0}const y=function(e){var t;const o=a.createContext(e),n=new Set;return{context:o,set:e=>(e=>{n.forEach(t=>t(e))})(e),Provider:(t=class extends a.Component{constructor(){super(...arguments),this.state=this.props.initial||e||{}}static getDerivedStateFromProps(e,t){return s(e.initial,t)?null:e.initial}componentDidMount(){n.add(e=>this.setState(e))}componentWillUnmount(){n.clear()}render(){return a.createElement(o.Provider,{value:this.state},this.props.children)}},t.displayName="DoczStateProvider",t)}}({}),x=e=>{const{type:t,payload:o}=JSON.parse(e.data),n=t.startsWith("state.")&&t.split(".")[1];n&&y.set(e=>Object.assign({},e,{[n]:o}))},k=e=>!e.menu,w=e=>({name:e.name,route:e.route,parent:e.parent}),j=(e,t)=>t.filter((e=>t=>t.menu===e)(e)).map(w),A=e=>{const t=e.filter(k).map(w),o=function(e,t){return Array.from(new Set(e.reduce((e,o)=>{const n=r(t)(o);return n?e.concat([n]):e},[])))}(e,"menu").map((e=>t=>({name:t,menu:j(t,e)}))(e));return c("name",o,t)},E=e=>{const t=(e=>"string"===typeof e?{name:e}:e)(e);return Object.assign({},t,{id:t.id||m.ulid(),parent:r("parent",t)||r("parent",e),menu:Array.isArray(t.menu)?t.menu.map(E):t.menu})},C=p(E,e=>e.href||e.route?i("menu",e):e),S=(e,t)=>{const o=e.map(C),n=t.map(C);return c("name",o,n).map(e=>{if(!e.menu)return e;const t=n.find(t=>t.name===e.name),o=t&&t.menu;return Object.assign({},e,{menu:o?S(e.menu,o):e.menu||t.menu})})},I=(e,t=[])=>{const o="string"!==typeof e?r("name",e):e,n=t.findIndex(e=>e===o);return-1!==n?n:1/0},O=(e,t)=>e.name<t.name?-1:e.name>t.name?1:0,P=(e,t=[])=>{return u(e,((e=[])=>(t,o)=>{const n=e.map(e=>e.name||e);return v(I(t,n),I(o,n))})(t),O).map(e=>{if(!e.menu)return e;const o=t.find(t=>t.name===e.name),n=o&&o.menu;return Object.assign({},e,{menu:n?P(e.menu,n):u(e.menu,O)})})},D="object"===typeof window,H=(e,t)=>({innerHeight:D?window.innerHeight:t,innerWidth:D?window.innerWidth:e,outerHeight:D?window.outerHeight:t,outerWidth:D?window.outerWidth:e});t.ComponentsProvider=({components:e={},children:t})=>a.createElement(b.Provider,{value:Object.assign({},f,e)},t),t.doczState=y,t.isFn=e=>"function"===typeof e,t.useComponents=()=>a.useContext(b),t.useConfig=()=>{const e=a.useContext(y.context),{linkComponent:t,transform:o,config:n,themeConfig:r={}}=e,i=l(r,n?n.themeConfig:{}),s=o?o(i):i;return Object.assign({},n,{linkComponent:t,themeConfig:s})},t.useDataServer=e=>{a.useEffect(()=>{if(!e)return;const t=new WebSocket(e);return t.onmessage=x,()=>t.close()},[])},t.useDocs=()=>{const{entries:e=[]}=a.useContext(y.context),t=e.map(({value:e})=>e);return u(t,(e,t)=>v(e.name,t.name))},t.useMenus=e=>{const{query:t=""}=e||{},{entries:o,config:n}=a.useContext(y.context);if(!o)return null;const r=o.map(({value:e})=>e),i=A(r),s=a.useMemo(()=>{const t=S(i,n.menu);return((e,t)=>t?e.filter(t).map(e=>e.menu?Object.assign({},e,{menu:e.menu.filter(t)}):e):e)(P(t,n.menu),e&&e.filter)},[o,n]);return t&&t.length>0?((e,t)=>{const o=t.map(e=>[e].concat(e.menu||[])),n=d(2,o),a=[...new Set(n)];return h(a,e,{keys:["name"]})})(t,s):s},t.usePrevious=(e,t)=>{const o=a.useRef(t);return a.useEffect(()=>{o.current=e}),o.current},t.useWindowSize=(e=300,t=1/0,o=1/0)=>{const[n,r]=a.useState(H(o,o)),i=g(e,()=>r(H(o,o)));return a.useEffect(()=>(window.addEventListener("resize",i),()=>void window.removeEventListener("resize",i)),[]),n}},"./docz-lib/docz/dist/index.js":function(e,t,o){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=o("./node_modules/react/index.js"),r=n(o("./node_modules/@loadable/component/dist/loadable.esm.js")),i=n(o("./node_modules/lodash/fp/get.js")),s=o("./node_modules/tslib/tslib.es6.js"),l=o("./docz-lib/docz/dist/chunk.js"),u=n(o("./node_modules/lodash/fp/omit.js")),c=o("./node_modules/@reach/router/es/index.js"),d=n(o("./node_modules/lodash/fp/first.js")),p=n(o("./node_modules/capitalize/index.js"));o("./node_modules/fast-deep-equal/index.js"),o("./node_modules/lodash/fp/merge.js"),o("./node_modules/array-sort/index.js"),o("./node_modules/lodash/fp/unionBy.js"),o("./node_modules/lodash/fp/flattenDepth.js"),o("./node_modules/lodash/fp/pipe.js"),o("./node_modules/ulid/dist/index.esm.js"),o("./node_modules/match-sorter/dist/match-sorter.esm.js"),o("./node_modules/lodash/fp/throttle.js");var m=o("./node_modules/@mdx-js/react/dist/index.es.js");let h=o("./node_modules/hash-source/src/dist/createHashSource.js").default();const g=r(()=>Promise.resolve(o("./docz-lib/docz/dist/Playground.js"))),f=e=>{const[t,o]=a.useState(!0),[n,r]=a.useState(null),[i,u]=a.useState({});a.useEffect(()=>{const{getInitialProps:t}=e;t&&l.isFn(t)&&(o(!0),t(e).then(e=>{o(!1),r(null),u(e)}).catch(e=>{o(!1),r(e),u({})}))},[]);const{as:c,getInitialProps:d}=e,p=s.__rest(e,["as","getInitialProps"]);return a.createElement(c,Object.assign({},p,{data:Object.assign({},i,{loading:t,error:n})}))},b=(e,t,o)=>{const n=o.loading;return r(async()=>{const o=i(e,t),{default:n,getInitialProps:r}=await o();return e=>a.createElement(f,Object.assign({},e,{as:n||"div",getInitialProps:r}))},{fallback:a.createElement(n,null)})},v=e=>{const{asyncComponent:t,path:o,entry:n}=e,r=s.__rest(e,["asyncComponent","path","entry"]),i=l.useComponents().page,u=t,c=Object.assign({},r,{doc:n});return i?a.createElement(i,Object.assign({},c),a.createElement(u,Object.assign({},c))):a.createElement(u,Object.assign({},c))},y=a.forwardRef((e,t)=>{const o=u(["activeClassName","partiallyActive"],e),n=a.useCallback(({isCurrent:e})=>e?{className:`${o.className} active`}:{},[o.className]);return a.createElement(c.Link,Object.assign({},o,{getProps:n,ref:t}))});y.displayName="Link";const x=/(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/,k=e=>{switch(e.name.toLowerCase()){case"instanceof":return`Class(${e.value})`;case"enum":return e.computed?e.value:e.value?e.value.map(e=>`${e.value}`).join(" \u2502 "):e.raw;case"union":return e.value?e.value.map(e=>`${k(e)}`).join(" \u2502 "):e.raw;case"array":return e.raw;case"arrayof":return`Array<${k(e.value)}>`;case"custom":if(-1!==e.raw.indexOf("function")||-1!==e.raw.indexOf("=>"))return"Custom(Function)";if(-1!==e.raw.toLowerCase().indexOf("objectof")){const t=e.raw.match(x);return t&&t[1]?`ObjectOf(${p(t[1])})`:"ObjectOf"}return"Custom";case"bool":return"Boolean";case"func":return"Function";case"shape":const t=e.value,o={};return Object.keys(t).forEach(e=>{o[e]=k(t[e])}),JSON.stringify(o,null,2);default:return p(e.name)}},w=e=>k(e),j=e=>{const t=i("name",e.flowType||e.type);if(!t)return null;const o=t.startsWith('"')||"enum"===t,n=p(o?"enum":t),a=i("type.value",e);return n?o&&"string"===typeof a||!e.flowType&&!o&&!a||e.flowType&&!e.flowType.elements?n:e.flowType?w(e.flowType):w(e.type):null},A=({location:e})=>{setTimeout(()=>{if(e&&e.hash){const t=decodeURI(e.hash).substring(1),o=document.getElementById(t);o&&o.scrollIntoView()}})};t.ComponentsProvider=l.ComponentsProvider,t.doczState=l.doczState,t.useComponents=l.useComponents,t.useConfig=l.useConfig,t.useDataServer=l.useDataServer,t.useDocs=l.useDocs,t.useMenus=l.useMenus,t.usePrevious=l.usePrevious,t.useWindowSize=l.useWindowSize,t.AsyncRoute=v,t.Link=y,t.Playground=e=>"undefined"!==typeof window?a.createElement(a.Suspense,{fallback:null},a.createElement(g,Object.assign({},e))):null,t.Props=({title:e,isToggle:t,isRaw:o,of:n})=>{const r=l.useComponents(),{props:s}=a.useContext(l.doczState.context),u=r.props,c=i("__filemeta.filename",n),p=i("__filemeta.name",n)||n.displayName||n.name,m=s&&s.length>0&&s.find(e=>c?e.key===c:e.key.includes(`${p}.`)),h=i("value",m)||[],g=d(h),f=h.find(e=>e.displayName===p),b=i("props",f||g);return b&&u?a.createElement(u,{title:e,isRaw:o,isToggle:t,props:b,getPropType:j}):null},t.Routes=({imports:e})=>{const t=l.useComponents(),{entries:o}=a.useContext(l.doczState.context),n=t.notFound,r=a.useMemo(()=>c.createHistory(h),[]);return a.useEffect(()=>{r.listen(A)},[]),a.createElement(m.MDXProvider,{components:t},a.createElement(c.LocationProvider,{history:r},a.createElement(c.Router,null,a.createElement(n,{default:!0}),o&&o.map(({key:n,value:r})=>{const i={path:n,entries:o,components:t},s=b(n,e,t);return a.createElement(v,Object.assign({},i,{entry:r,key:r.id,path:r.route,asyncComponent:s}))}))))},t.loadRoute=b,t.theme=function(e,t=(e=>e)){return o=>{const n=a.memo(n=>{const{linkComponent:r}=n,{db:i,children:s,wrapper:u=a.Fragment}=n,c=Object.assign({},i,{themeConfig:e,transform:t,linkComponent:r});return a.createElement(l.doczState.Provider,{initial:c},a.createElement(u,null,a.createElement(o,null,s)))});return n.displayName=o.displayName||"DoczTheme",n}}},"./theme/styles/responsive.js":function(e,t,o){"use strict";o.d(t,"a",function(){return a}),o.d(t,"b",function(){return r});var n=o("./node_modules/facepaint/dist/index.es.js");const a={mobile:420,tablet:920,oldDesktop:1024,desktop:1120},r=Object(n.a)([`@media(min-width: ${a.mobile}px)`,`@media(min-width: ${a.tablet}px)`,`@media(min-width: ${a.desktop}px)`])},"./theme/utils/theme.js":function(e,t,o){"use strict";o.d(t,"b",function(){return l}),o.d(t,"a",function(){return u});var n=o("./node_modules/react/index.js"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./docz-lib/docz/dist/index.js"),i=o("./node_modules/lodash/get.js"),s=o.n(i);const l=(e,t)=>o=>s()(o,`theme.docz.${e}`,t),u=({children:e})=>{const t=Object(r.useConfig)();return n.createElement(a.a,{theme:e=>({...e,docz:t.themeConfig})},n.createElement(n.Fragment,null,e))}},0:function(e,t,o){e.exports=o("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.d9aaefab9a728b782111.js.map