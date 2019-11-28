(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/documents/Import-Export/ExportHDFSAPI.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),m=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),l=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),r=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},c="wrapper";function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(m.mdx)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"export--import-apis-for-hdfs-path"},"Export & Import APIs for HDFS Path"),Object(m.mdx)("h3",{id:"introduction"},"Introduction"),Object(m.mdx)("p",null,"The general approach for using the Import-Export APIs for HDFS Paths remain the same. There are minor variations caused how HDFS paths are handled within Atlas."),Object(m.mdx)("p",null,"Unlike HIVE entities, HDFS entities within Atlas are created manually using the ",Object(m.mdx)("em",{parentName:"p"},"Create Entity")," link within the Atlas Web UI."),Object(m.mdx)("p",null,"Also, HDFS paths tend to be hierarchical, in the sense that users tend to model the same HDFS storage structure within Atlas."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Sample HDFS Setup")),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"th"},"HDFS Path")),Object(m.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"th"},"Atlas Entity")))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",null,"/apps/warehouse/finance")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"td"},"Entity type: "),Object(m.mdx)("em",null,"hdfs_path"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"Name: "),Object(m.mdx)("em",null,"Finance"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"QualifiedName: "),Object(m.mdx)("em",null,"FinanceAll"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",null,"/apps/warehouse/finance/accounts-receivable")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"td"},"Entity type: "),Object(m.mdx)("em",null,"hdfs_path"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"Name: "),Object(m.mdx)("em",null,"FinanceReceivable"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"QualifiedName: "),Object(m.mdx)("em",null,"FinanceReceivable"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"Path: "),Object(m.mdx)("em",null,"/apps/warehouse/finance"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",null,"/apps/warehouse/finance/accounts-payable")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"td"},"Entity type: "),Object(m.mdx)("em",null,"hdfs_path"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"Name: "),Object(m.mdx)("em",null,"Finance-Payable"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"QualifiedName: "),Object(m.mdx)("em",null,"FinancePayable"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"Path: "),Object(m.mdx)("em",null,"/apps/warehouse/finance/accounts-payable"))),Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("em",null,"/apps/warehouse/finance/billing")),Object(m.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(m.mdx)("strong",{parentName:"td"},"Entity type: "),Object(m.mdx)("em",null,"hdfs_path"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"Name: "),Object(m.mdx)("em",null,"FinanceBilling"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"QualifiedName: "),Object(m.mdx)("em",null,"FinanceBilling"),Object(m.mdx)("br",null),Object(m.mdx)("strong",{parentName:"td"},"Path: "),Object(m.mdx)("em",null,"/apps/warehouse/finance/billing"))))),Object(m.mdx)("h3",{id:"export-api-using-matchtype"},"Export API Using matchType"),Object(m.mdx)("p",null,"To export entities that represent HDFS path, use the Export API using the ",Object(m.mdx)("em",{parentName:"p"},"matchType")," option. Details can be found ",Object(m.mdx)("a",Object.assign({parentName:"p"},{href:"#/ExportAPI"}),"here"),"."),Object(m.mdx)("h3",{id:"example-using-curl-calls"},"Example Using CURL Calls"),Object(m.mdx)("p",null,"Below are sample CURL calls that performs export operation on the ",Object(m.mdx)("em",{parentName:"p"},"Sample HDFS Setup")," shown above."),Object(m.mdx)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},'curl -X POST -u adminuser:password -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d \'{\n    "itemsToExport": [\n            { "typeName": "hdfs_path", "uniqueAttributes": { "name": "FinanceAll" }\n        }\n    ],\n    "options": {\n     "fetchType": "full",\n     "matchType": "startsWith"\n    }\n}\' "http://localhost:21000/api/atlas/admin/export" > financeAll.zip'),Object(m.mdx)("h3",{id:"automatic-creation-of-hdfs-entities"},"Automatic Creation of HDFS entities"),Object(m.mdx)("p",null,"Given that HDFS entity creation is a manual process. The Export API offers a mechanism for creation of requested HDFS entities."))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/ExportHDFSAPI.md"}}),d.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-import-export-export-hdfsapi.3819aaea569a8e81eb65.js.map