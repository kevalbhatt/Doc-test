(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/documents/Import-Export/ExportImportAudits.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),b=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),l={},i="wrapper";function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(i,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"export--import-audits"},"Export & Import Audits"),Object(r.b)("h4",{id:"background"},"Background"),Object(r.b)("p",null,"The new audits for Export and Import operations also have corresponding REST APIs to programatically fetch the audit entries."),Object(r.b)("h4",{id:"rest-apis"},"REST APIs"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Title")),Object(r.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Replication Audits for a Cluster")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Example"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"See below.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"URL"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"api/atlas/admin/expimp/audit")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Method"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"GET")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"URL Parameters"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"sourceClusterName"),": Name of source cluster.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"targetClusterName"),": Name of target cluster.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"userName"),": Name of the user who initiated the operation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"operation"),": EXPORT or IMPORT operation type.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"startTime"),": Time, in milliseconds, when operation was started.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"endTime"),": Time, in milliseconds, when operation ended.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"limit"),": Number of results to be returned")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"offset"),": Offset")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Data Parameters"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"None")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Success Response"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"List of ",Object(r.b)("em",{parentName:"td"},"ExportImportAuditEntry"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Error Response"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Errors Returned as AtlasBaseException")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"Notes"),Object(r.b)("td",Object.assign({parentName:"tr"},{align:null}),"None")))),Object(r.b)("h6",{id:"curl"},"CURL"),Object(r.b)("p",null,'curl -X GET -u admin:admin -H "Content-Type: application/json" -H "Cache-Control: no-cache" \'',Object(r.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:21000/api/atlas/admin/expimp/audit?sourceClusterName=cl2"}),"http://localhost:21000/api/atlas/admin/expimp/audit?sourceClusterName=cl2"),"'"),Object(r.b)(s.a,{wrapLines:!0,language:"json",style:b.a,mdxType:"SyntaxHighlighter"},'{\n    "queryType": "BASIC",\n    "searchParameters": {\n        "typeName": "ReplicationAuditEntry",\n        "excludeDeletedEntities": false,\n        "includeClassificationAttributes": false,\n        "includeSubTypes": true,\n        "includeSubClassifications": true,\n        "limit": 100,\n        "offset": 0,\n        "entityFilters": {\n            "attributeName": "name",\n            "operator": "eq",\n            "attributeValue": "cl2",\n            "criterion": []\n        }\n    },\n    "entities": [{\n        "typeName": "ReplicationAuditEntry",\n        "attributes": {\n            "owner": null,\n            "uniqueName": "cl2:EXPORT:1533037289411",\n            "createTime": null,\n            "name": "cl2",\n            "description": null\n        },\n        "guid": "04844141-af72-498a-9d26-f70f91e8adf8",\n        "status": "ACTIVE",\n        "displayText": "cl2",\n        "classificationNames": []\n    }, {\n        "typeName": "ReplicationAuditEntry",\n        "attributes": {\n            "owner": null,\n            "uniqueName": "cl2:EXPORT:1533037368407",\n            "createTime": null,\n            "name": "cl2",\n            "description": null\n        },\n        "guid": "837abe66-20c8-4296-8678-e715498bf8fb",\n        "status": "ACTIVE",\n        "displayText": "cl2",\n        "classificationNames": []\n    }]\n}'))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/ExportImportAudits.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-import-export-export-import-audits.2745d6e9a12519927d29.js.map