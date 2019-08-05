(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/documents/Import-Export/Import-Export-API.md":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return l});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),n=(r("./theme/styles/styled-colors.js"),r("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=r("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),i={},p="wrapper";function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(p,Object.assign({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"export--import-rest-apis"},"Export & Import REST APIs"),Object(o.b)("h3",{id:"whats-new"},"What's New"),Object(o.b)("p",null,"The release of 0.8.3 includes the following improvements to Export and Import APIs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Export: Support for ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"Incremental-Export"}),"Incremental Export"),"."),Object(o.b)("li",{parentName:"ul"},"Export & Import: Support for ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"ReplicatedToFromAttributes"}),"replicated attributes")," to entities made possible by ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"SoftReference"}),"SoftReference")," entity attribute option."),Object(o.b)("li",{parentName:"ul"},"Export option: ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"skipLineage"}),"skipLineage"),"."),Object(o.b)("li",{parentName:"ul"},"New entity transforms framework."),Object(o.b)("li",{parentName:"ul"},"New ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"AtlasServer"}),"AtlasServer")," entity type."),Object(o.b)("li",{parentName:"ul"},"Export: ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"Export-HDFS-API"}),"Automatic creation of HDFS path")," requested entities."),Object(o.b)("li",{parentName:"ul"},"New ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"ExportImportAudits"}),"ExportImportAudits")," for Export & Import operations.")),Object(o.b)("h3",{id:"background"},"Background"),Object(o.b)("p",null,"The Import-Export APIs for Atlas facilitate transfer of data to and from a cluster that has Atlas provisioned."),Object(o.b)("p",null,"The APIs when integrated with backup and/or disaster recovery process will ensure participation of Atlas."),Object(o.b)("h3",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"There are 2 broad categories viz. Export & Import. The details of the APIs are discussed below."),Object(o.b)("p",null,"The APIs are available only to ",Object(o.b)("em",{parentName:"p"},"admin")," user."),Object(o.b)("p",null,"Only a single import or export operation can be performed at a given time. The operations have a potential for generating large amount. They can also put pressure on resources. This restriction tries to alleviate this problem."),Object(o.b)("p",null,"For Import-Export APIs relating to HDFS path, can be found ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"Import-Export-HDFS-Path"}),"here"),"."),Object(o.b)("p",null,"For additional information please refer to the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://issues.apache.org/jira/browse/ATLAS-1503"}),"ATLAS-1503")," Original Import-Export API requirements."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://issues.apache.org/jira/browse/ATLAS-1618"}),"ATLAS-1618")," Export API Scope Specification.")),Object(o.b)("h3",{id:"errors"},"Errors"),Object(o.b)("p",null,"If an import or export operation is initiated while another is in progress, the consumer will receive this error:"),Object(o.b)(s.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},'"ATLAS5005E": "Another import or export is in progress. Please try again."'),Object(o.b)("p",null,"Unhandled errors will be returned as Internal error code 500."),Object(o.b)("h3",{id:"rest-api-reference"},"REST API Reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"Export-API"}),"Export")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"Export-HDFS-API"}),"Export HDFS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"Import-API"}),"Import")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"Import-API-Options"}),"Import Options"))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/Import-Export-API.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,r){"use strict";var a=r("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");a.a.hljs.color="#37bb9b",t.a=a.a}}]);
//# sourceMappingURL=documents-import-export-import-export-api.2918851c7b9e6e763d39.js.map