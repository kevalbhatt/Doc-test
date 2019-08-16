(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/documents/Import-Export/Export-API.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),b={},l="wrapper";function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(l,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"export-api"},"Export API"),Object(i.b)("p",null,"The general approach is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Consumer specifies the scope of data to be exported (details below)."),Object(i.b)("li",{parentName:"ul"},"The API if successful, will return the stream in the format specified."),Object(i.b)("li",{parentName:"ul"},"Error will be returned on failure of the call.")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/Export-HDFS-API.html"}),"here")," for details on exporting ",Object(i.b)("em",{parentName:"p"},"hdfs_path")," entities."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Title")),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Export API")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Example")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"See Examples sections below.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"URL")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"api/atlas/admin/export"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Method")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"POST"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"URL Parameters")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"None"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Data Parameters")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"The class ",Object(i.b)("em",{parentName:"td"},"!AtlasExportRequest")," is used to specify the items to export. The list of ",Object(i.b)("em",{parentName:"td"},"!AtlasObjectId"),"(s) allow for specifying the multiple items to export in a session. The ",Object(i.b)("em",{parentName:"td"},"!AtlasObjectId")," is a tuple of entity type, name of unique attribute, value of unique attribute. Several items can be specified. See examples below.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Success Response")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"File stream as ",Object(i.b)("em",{parentName:"td"},"application/zip"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Error Response")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Errors that are handled within the system will be returned as ",Object(i.b)("em",{parentName:"td"},"!AtlasBaseException"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Notes")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Consumer could choose to consume the output of the API by programmatically using ",Object(i.b)("em",{parentName:"td"},"java.io.ByteOutputStream")," or by manually, save the contents of the stream to a file on the disk.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method Signature")),Object(i.b)(s.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},'@POST\n@Path("/export")\n@Consumes("application/json;charset=UTF-8")'),Object(i.b)("h3",{id:"additional-options"},"Additional Options"),Object(i.b)("p",null,"It is possible to specify additional parameters for the ",Object(i.b)("em",{parentName:"p"},"Export")," operation."),Object(i.b)("p",null,"Current implementation has 2 options. Both are optional:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"matchType")," This option configures the approach used for fetching the starting entity. It has follow values:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"startsWith")," Search for an entity that is prefixed with the specified criteria."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"endsWith")," Search for an entity that is suffixed with the specified criteria."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"contains")," Search for an entity that has the specified criteria as a sub-string."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"matches")," Search for an entity that is a regular expression match with the specified criteria."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"fetchType")," This option configures the approach used for fetching entities. It has following values:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"FULL"),": This fetches all the entities that are connected directly and indirectly to the starting entity. E.g. If a starting entity specified is a table, then this option will fetch the table, database and all the other tables within the database."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"CONNECTED"),": This fetches all the etnties that are connected directly to the starting entity. E.g. If a starting entity specified is a table, then this option will fetch the table and the database entity only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"INCREMENTAL"),": See ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"http://atlas.apache.org/Incremental-Export.html"}),"here")," for details.")))),Object(i.b)("p",null,"If no ",Object(i.b)("em",{parentName:"p"},"matchType")," is specified, exact match is used. Which means, that the entire string is used in the search criteria."),Object(i.b)("p",null,"Searching using ",Object(i.b)("em",{parentName:"p"},"matchType")," applies for all types of entities. It is particularly useful for matching entities of type hdfs_path (see (here)","[Export-HDFS-API]",")."),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"fetchType")," option defaults to ",Object(i.b)("em",{parentName:"p"},"FULL"),"."),Object(i.b)("p",null,"For complete example see section below."),Object(i.b)("h3",{id:"contents-of-exported-zip-file"},"Contents of Exported ZIP File"),Object(i.b)("p",null,"The exported ZIP file has the following entries within it:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"atlas-export-result.json"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Input filters: The scope of export."),Object(i.b)("li",{parentName:"ul"},"File format: The format chosen for the export operation."),Object(i.b)("li",{parentName:"ul"},"Metrics: The number of entity definitions, classifications and entities exported."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"atlas-typesdef.json"),": Type definitions for the entities exported."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"atlas-export-order.json"),": Order in which entities should be exported."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"{guid}.json"),": Individual entities are exported with file names that correspond to their id.")),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"!AtlasExportRequest")," below shows filters that attempt to export 2 databases in cluster cl1:"),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "itemsToExport": [\n       { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "accounts@cl1" } },\n       { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "hr@cl1" } }\n    ]\n}'),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"!AtlasExportRequest")," below specifies the ",Object(i.b)("em",{parentName:"p"},"fetchType")," as ",Object(i.b)("em",{parentName:"p"},"FULL"),". The ",Object(i.b)("em",{parentName:"p"},"matchType")," option will fetch ",Object(i.b)("em",{parentName:"p"},"accounts@cl1"),"."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "itemsToExport": [\n       { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "accounts@" } },\n    ],\n    "options" {\n        "fetchType": "FULL",\n        "matchType": "startsWith"\n    }\n}'),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"!AtlasExportRequest")," below specifies the ",Object(i.b)("em",{parentName:"p"},"fetchType")," as ",Object(i.b)("em",{parentName:"p"},"connected"),". The ",Object(i.b)("em",{parentName:"p"},"matchType")," option will fetch ",Object(i.b)("em",{parentName:"p"},"accountsReceivable"),", ",Object(i.b)("em",{parentName:"p"},"accountsPayable"),", etc present in the database."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "itemsToExport": [\n       { "typeName": "hive_db", "uniqueAttributes": { "name": "accounts" } },\n    ],\n    "options" {\n        "fetchType": "CONNECTED",\n        "matchType": "startsWith"\n    }\n}'),Object(i.b)("p",null,"Below is the ",Object(i.b)("em",{parentName:"p"},"!AtlasExportResult")," JSON for the export of the ",Object(i.b)("em",{parentName:"p"},"Sales")," DB present in the ",Object(i.b)("em",{parentName:"p"},"!QuickStart"),"."),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"metrics")," contains the number of types and entities exported as part of the operation."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "clientIpAddress": "10.0.2.15",\n    "hostName": "10.0.2.2",\n    "metrics": {\n        "duration": 1415,\n        "entitiesWithExtInfo": 12,\n        "entity:DB_v1": 2,\n        "entity:LoadProcess_v1": 2,\n        "entity:Table_v1": 6,\n        "entity:View_v1": 2,\n        "typedef:Column_v1": 1,\n        "typedef:DB_v1": 1,\n        "typedef:LoadProcess_v1": 1,\n        "typedef:StorageDesc_v1": 1,\n        "typedef:Table_v1": 1,\n        "typedef:View_v1": 1,\n        "typedef:classification": 6\n    },\n    "operationStatus": "SUCCESS",\n    "request": {\n        "itemsToExport": [\n            {\n                "typeName": "DB_v1",\n                "uniqueAttributes": {\n                    "name": "Sales"\n                }\n            }\n        ],\n        "options": {\n            "fetchType": "full"\n        }\n    },\n    "userName": "admin"\n}'),Object(i.b)("h3",{id:"curl-calls"},"CURL Calls"),Object(i.b)("p",null,"Below are sample CURL calls that demonstrate Export of ",Object(i.b)("em",{parentName:"p"},"!QuickStart")," database."),Object(i.b)(s.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},'curl -X POST -u adminuser:password -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d \'{\n    "itemsToExport": [\n            { "typeName": "DB", "uniqueAttributes": { "name": "Sales" }\n            { "typeName": "DB", "uniqueAttributes": { "name": "Reporting" }\n            { "typeName": "DB", "uniqueAttributes": { "name": "Logging" }\n        }\n    ],\n        "options": { "full" }\n    }\' "http://localhost:21000/api/atlas/admin/export" > quickStartDB.zip'))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/Export-API.md"}}),p.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-import-export-export-api.fc78cf8a5205914e5314.js.map