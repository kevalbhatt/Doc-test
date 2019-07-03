(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/documents/Import-Export/Export-HDFS-API.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l={},r="wrapper";function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)(r,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"export--import-apis-for-hdfs-path"},"Export & Import APIs for HDFS Path"),Object(b.b)("h3",{id:"introduction"},"Introduction"),Object(b.b)("p",null,"The general approach for using the Import-Export APIs for HDFS Paths remain the same. There are minor variations caused how HDFS paths are handled within Atlas."),Object(b.b)("p",null,"Unlike HIVE entities, HDFS entities within Atlas are created manually using the ",Object(b.b)("em",{parentName:"p"},"Create Entity")," link within the Atlas Web UI."),Object(b.b)("p",null,"Also, HDFS paths tend to be hierarchical, in the sense that users tend to model the same HDFS storage structure within Atlas."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Sample HDFS Setup")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"HDFS Path")),Object(b.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"th"},"Atlas Entity")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",null,"/apps/warehouse/finance")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Entity type: "),Object(b.b)("em",null,"hdfs_path"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Name: "),Object(b.b)("em",null,"Finance"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"QualifiedName: "),Object(b.b)("em",null,"FinanceAll"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",null,"/apps/warehouse/finance/accounts-receivable")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Entity type: "),Object(b.b)("em",null,"hdfs_path"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Name: "),Object(b.b)("em",null,"FinanceReceivable"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"QualifiedName: "),Object(b.b)("em",null,"FinanceReceivable"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Path: "),Object(b.b)("em",null,"/apps/warehouse/finance"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",null,"/apps/warehouse/finance/accounts-payable")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Entity type: "),Object(b.b)("em",null,"hdfs_path"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Name: "),Object(b.b)("em",null,"Finance-Payable"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"QualifiedName: "),Object(b.b)("em",null,"FinancePayable"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Path: "),Object(b.b)("em",null,"/apps/warehouse/finance/accounts-payable"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("em",null,"/apps/warehouse/finance/billing")),Object(b.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Entity type: "),Object(b.b)("em",null,"hdfs_path"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Name: "),Object(b.b)("em",null,"FinanceBilling"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"QualifiedName: "),Object(b.b)("em",null,"FinanceBilling"),Object(b.b)("br",null),Object(b.b)("strong",{parentName:"td"},"Path: "),Object(b.b)("em",null,"/apps/warehouse/finance/billing"))))),Object(b.b)("h3",{id:"export-api-using-matchtype"},"Export API Using matchType"),Object(b.b)("p",null,"To export entities that represent HDFS path, use the Export API using the ",Object(b.b)("em",{parentName:"p"},"matchType")," option. Details can be found ",Object(b.b)("a",Object.assign({parentName:"p"},{href:"Export-API"}),"here"),"."),Object(b.b)("h3",{id:"example-using-curl-calls"},"Example Using CURL Calls"),Object(b.b)("p",null,"Below are sample CURL calls that performs export operation on the ",Object(b.b)("em",{parentName:"p"},"Sample HDFS Setup")," shown above."),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{}),'curl -X POST -u adminuser:password -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d \'{\n    "itemsToExport": [\n            { "typeName": "hdfs_path", "uniqueAttributes": { "name": "FinanceAll" }\n        }\n    ],\n    "options": {\n     "fetchType": "full",\n     "matchType": "startsWith"\n    }\n}\' "http://localhost:21000/api/atlas/admin/export" > financeAll.zip\n')),Object(b.b)("h3",{id:"automatic-creation-of-hdfs-entities"},"Automatic Creation of HDFS entities"),Object(b.b)("p",null,"Given that HDFS entity creation is a manual process. The Export API offers a mechanism for creation of requested HDFS entities."))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/Export-HDFS-API.md"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-import-export-export-hdfs-api.1ac12feade00c34438bf.js.map