(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/documents/Import-Export/ImportExportAPI.md":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return l});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),n=(r("./theme/styles/styled-colors.js"),r("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=r("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),i={},p="wrapper";function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.mdx)(p,Object.assign({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"export--import-rest-apis"},"Export & Import REST APIs"),Object(o.mdx)("h3",{id:"whats-new"},"What's New"),Object(o.mdx)("p",null,"The release of 0.8.3 includes the following improvements to Export and Import APIs:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Export: Support for ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/IncrementalExport"}),"Incremental Export"),"."),Object(o.mdx)("li",{parentName:"ul"},"Export & Import: Support for ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/ReplicatedAttributes"}),"replicated attributes")," to entities made possible by ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/SoftReference"}),"SoftReference")," entity attribute option."),Object(o.mdx)("li",{parentName:"ul"},"Export option: ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/IncrementalExport"}),"skipLineage"),"."),Object(o.mdx)("li",{parentName:"ul"},"New entity transforms framework."),Object(o.mdx)("li",{parentName:"ul"},"New ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/AtlasServer"}),"AtlasServer")," entity type."),Object(o.mdx)("li",{parentName:"ul"},"Export: ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/ExportHDFSAPI"}),"Automatic creation of HDFS path")," requested entities."),Object(o.mdx)("li",{parentName:"ul"},"New ",Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/ExportImportAudits"}),"ExportImportAudits")," for Export & Import operations.")),Object(o.mdx)("h3",{id:"background"},"Background"),Object(o.mdx)("p",null,"The Import-Export APIs for Atlas facilitate transfer of data to and from a cluster that has Atlas provisioned."),Object(o.mdx)("p",null,"The APIs when integrated with backup and/or disaster recovery process will ensure participation of Atlas."),Object(o.mdx)("h3",{id:"introduction"},"Introduction"),Object(o.mdx)("p",null,"There are 2 broad categories viz. Export & Import. The details of the APIs are discussed below."),Object(o.mdx)("p",null,"The APIs are available only to ",Object(o.mdx)("em",{parentName:"p"},"admin")," user."),Object(o.mdx)("p",null,"Only a single import or export operation can be performed at a given time. The operations have a potential for generating large amount. They can also put pressure on resources. This restriction tries to alleviate this problem."),Object(o.mdx)("p",null,"For Import-Export APIs relating to HDFS path, can be found ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"#/ExportHDFSAPI"}),"here"),"."),Object(o.mdx)("p",null,"For additional information please refer to the following:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"https://issues.apache.org/jira/browse/ATLAS-1503"}),"ATLAS-1503")," Original Import-Export API requirements."),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"https://issues.apache.org/jira/browse/ATLAS-1618"}),"ATLAS-1618")," Export API Scope Specification.")),Object(o.mdx)("h3",{id:"errors"},"Errors"),Object(o.mdx)("p",null,"If an import or export operation is initiated while another is in progress, the consumer will receive this error:"),Object(o.mdx)(s.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},'"ATLAS5005E": "Another import or export is in progress. Please try again."'),Object(o.mdx)("p",null,"Unhandled errors will be returned as Internal error code 500."),Object(o.mdx)("h3",{id:"rest-api-reference"},"REST API Reference"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/ExportAPI"}),"Export")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/ExportHDFSAPI"}),"Export HDFS")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/ImportAPI"}),"Import")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",Object.assign({parentName:"li"},{href:"#/ImportAPIOptions"}),"Import Options"))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/ImportExportAPI.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,r){"use strict";var a=r("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");a.a.hljs.color="#37bb9b",t.a=a.a}}]);
//# sourceMappingURL=documents-import-export-import-export-api.dc287ade0f38ba3cef39.js.map