(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/documents/Import-Export/Export-API.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),m=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),r=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},l="wrapper";function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(l,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"export-api"},"Export API"),Object(i.mdx)("p",null,"The general approach is:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Consumer specifies the scope of data to be exported (details below)."),Object(i.mdx)("li",{parentName:"ul"},"The API if successful, will return the stream in the format specified."),Object(i.mdx)("li",{parentName:"ul"},"Error will be returned on failure of the call.")),Object(i.mdx)("p",null,"See ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/Export-HDFS-API.html"}),"here")," for details on exporting ",Object(i.mdx)("em",{parentName:"p"},"hdfs_path")," entities."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("strong",{parentName:"th"},"Title")),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("strong",{parentName:"th"},"Export API")))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"Example")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"See Examples sections below.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"URL")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"api/atlas/admin/export"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"Method")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"POST"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"URL Parameters")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"None"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"Data Parameters")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"The class ",Object(i.mdx)("em",{parentName:"td"},"!AtlasExportRequest")," is used to specify the items to export. The list of ",Object(i.mdx)("em",{parentName:"td"},"!AtlasObjectId"),"(s) allow for specifying the multiple items to export in a session. The ",Object(i.mdx)("em",{parentName:"td"},"!AtlasObjectId")," is a tuple of entity type, name of unique attribute, value of unique attribute. Several items can be specified. See examples below.")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"Success Response")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"File stream as ",Object(i.mdx)("em",{parentName:"td"},"application/zip"),".")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"Error Response")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Errors that are handled within the system will be returned as ",Object(i.mdx)("em",{parentName:"td"},"!AtlasBaseException"),".")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(i.mdx)("em",{parentName:"td"},"Notes")),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Consumer could choose to consume the output of the API by programmatically using ",Object(i.mdx)("em",{parentName:"td"},"java.io.ByteOutputStream")," or by manually, save the contents of the stream to a file on the disk.")))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Method Signature")),Object(i.mdx)(r.a,{wrapLines:!0,language:"shell",style:m.a,mdxType:"SyntaxHighlighter"},'@POST\n@Path("/export")\n@Consumes("application/json;charset=UTF-8")'),Object(i.mdx)("h3",{id:"additional-options"},"Additional Options"),Object(i.mdx)("p",null,"It is possible to specify additional parameters for the ",Object(i.mdx)("em",{parentName:"p"},"Export")," operation."),Object(i.mdx)("p",null,"Current implementation has 2 options. Both are optional:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("em",{parentName:"p"},"matchType")," This option configures the approach used for fetching the starting entity. It has follow values:"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"startsWith")," Search for an entity that is prefixed with the specified criteria."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"endsWith")," Search for an entity that is suffixed with the specified criteria."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"contains")," Search for an entity that has the specified criteria as a sub-string."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"matches")," Search for an entity that is a regular expression match with the specified criteria."))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("em",{parentName:"p"},"fetchType")," This option configures the approach used for fetching entities. It has following values:"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"FULL"),": This fetches all the entities that are connected directly and indirectly to the starting entity. E.g. If a starting entity specified is a table, then this option will fetch the table, database and all the other tables within the database."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"CONNECTED"),": This fetches all the etnties that are connected directly to the starting entity. E.g. If a starting entity specified is a table, then this option will fetch the table and the database entity only."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"INCREMENTAL"),": See ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"http://atlas.apache.org/Incremental-Export.html"}),"here")," for details.")))),Object(i.mdx)("p",null,"If no ",Object(i.mdx)("em",{parentName:"p"},"matchType")," is specified, exact match is used. Which means, that the entire string is used in the search criteria."),Object(i.mdx)("p",null,"Searching using ",Object(i.mdx)("em",{parentName:"p"},"matchType")," applies for all types of entities. It is particularly useful for matching entities of type hdfs_path (see (here)","[Export-HDFS-API]",")."),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"fetchType")," option defaults to ",Object(i.mdx)("em",{parentName:"p"},"FULL"),"."),Object(i.mdx)("p",null,"For complete example see section below."),Object(i.mdx)("h3",{id:"contents-of-exported-zip-file"},"Contents of Exported ZIP File"),Object(i.mdx)("p",null,"The exported ZIP file has the following entries within it:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"atlas-export-result.json"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Input filters: The scope of export."),Object(i.mdx)("li",{parentName:"ul"},"File format: The format chosen for the export operation."),Object(i.mdx)("li",{parentName:"ul"},"Metrics: The number of entity definitions, classifications and entities exported."))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"atlas-typesdef.json"),": Type definitions for the entities exported."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"atlas-export-order.json"),": Order in which entities should be exported."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("em",{parentName:"li"},"{guid}.json"),": Individual entities are exported with file names that correspond to their id.")),Object(i.mdx)("h3",{id:"examples"},"Examples"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"!AtlasExportRequest")," below shows filters that attempt to export 2 databases in cluster cl1:"),Object(i.mdx)(r.a,{wrapLines:!0,language:"json",style:m.a,mdxType:"SyntaxHighlighter"},'{\n    "itemsToExport": [\n       { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "accounts@cl1" } },\n       { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "hr@cl1" } }\n    ]\n}'),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"!AtlasExportRequest")," below specifies the ",Object(i.mdx)("em",{parentName:"p"},"fetchType")," as ",Object(i.mdx)("em",{parentName:"p"},"FULL"),". The ",Object(i.mdx)("em",{parentName:"p"},"matchType")," option will fetch ",Object(i.mdx)("em",{parentName:"p"},"accounts@cl1"),"."),Object(i.mdx)(r.a,{wrapLines:!0,language:"json",style:m.a,mdxType:"SyntaxHighlighter"},'{\n    "itemsToExport": [\n       { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "accounts@" } },\n    ],\n    "options" {\n        "fetchType": "FULL",\n        "matchType": "startsWith"\n    }\n}'),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"!AtlasExportRequest")," below specifies the ",Object(i.mdx)("em",{parentName:"p"},"fetchType")," as ",Object(i.mdx)("em",{parentName:"p"},"connected"),". The ",Object(i.mdx)("em",{parentName:"p"},"matchType")," option will fetch ",Object(i.mdx)("em",{parentName:"p"},"accountsReceivable"),", ",Object(i.mdx)("em",{parentName:"p"},"accountsPayable"),", etc present in the database."),Object(i.mdx)(r.a,{wrapLines:!0,language:"json",style:m.a,mdxType:"SyntaxHighlighter"},'{\n    "itemsToExport": [\n       { "typeName": "hive_db", "uniqueAttributes": { "name": "accounts" } },\n    ],\n    "options" {\n        "fetchType": "CONNECTED",\n        "matchType": "startsWith"\n    }\n}'),Object(i.mdx)("p",null,"Below is the ",Object(i.mdx)("em",{parentName:"p"},"!AtlasExportResult")," JSON for the export of the ",Object(i.mdx)("em",{parentName:"p"},"Sales")," DB present in the ",Object(i.mdx)("em",{parentName:"p"},"!QuickStart"),"."),Object(i.mdx)("p",null,"The ",Object(i.mdx)("em",{parentName:"p"},"metrics")," contains the number of types and entities exported as part of the operation."),Object(i.mdx)(r.a,{wrapLines:!0,language:"json",style:m.a,mdxType:"SyntaxHighlighter"},'{\n    "clientIpAddress": "10.0.2.15",\n    "hostName": "10.0.2.2",\n    "metrics": {\n        "duration": 1415,\n        "entitiesWithExtInfo": 12,\n        "entity:DB_v1": 2,\n        "entity:LoadProcess_v1": 2,\n        "entity:Table_v1": 6,\n        "entity:View_v1": 2,\n        "typedef:Column_v1": 1,\n        "typedef:DB_v1": 1,\n        "typedef:LoadProcess_v1": 1,\n        "typedef:StorageDesc_v1": 1,\n        "typedef:Table_v1": 1,\n        "typedef:View_v1": 1,\n        "typedef:classification": 6\n    },\n    "operationStatus": "SUCCESS",\n    "request": {\n        "itemsToExport": [\n            {\n                "typeName": "DB_v1",\n                "uniqueAttributes": {\n                    "name": "Sales"\n                }\n            }\n        ],\n        "options": {\n            "fetchType": "full"\n        }\n    },\n    "userName": "admin"\n}'),Object(i.mdx)("h3",{id:"curl-calls"},"CURL Calls"),Object(i.mdx)("p",null,"Below are sample CURL calls that demonstrate Export of ",Object(i.mdx)("em",{parentName:"p"},"!QuickStart")," database."),Object(i.mdx)(r.a,{wrapLines:!0,language:"shell",style:m.a,mdxType:"SyntaxHighlighter"},'curl -X POST -u adminuser:password -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d \'{\n    "itemsToExport": [\n            { "typeName": "DB", "uniqueAttributes": { "name": "Sales" }\n            { "typeName": "DB", "uniqueAttributes": { "name": "Reporting" }\n            { "typeName": "DB", "uniqueAttributes": { "name": "Logging" }\n        }\n    ],\n        "options": { "full" }\n    }\' "http://localhost:21000/api/atlas/admin/export" > quickStartDB.zip'))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/Export-API.md"}}),p.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-import-export-export-api.3f647103494058e3f660.js.map