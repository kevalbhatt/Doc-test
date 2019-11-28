(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/documents/Import-Export/ExportImportAudits.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),m=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),d={},i="wrapper";function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(i,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"export--import-audits"},"Export & Import Audits"),Object(r.mdx)("h4",{id:"background"},"Background"),Object(r.mdx)("p",null,"The new audits for Export and Import operations also have corresponding REST APIs to programatically fetch the audit entries."),Object(r.mdx)("h4",{id:"rest-apis"},"REST APIs"),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"th"},"Title")),Object(r.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("strong",{parentName:"th"},"Replication Audits for a Cluster")))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Example"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"See below.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"URL"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"api/atlas/admin/expimp/audit")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Method"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"GET")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"URL Parameters"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"sourceClusterName"),": Name of source cluster.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"targetClusterName"),": Name of target cluster.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"userName"),": Name of the user who initiated the operation.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"operation"),": EXPORT or IMPORT operation type.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"startTime"),": Time, in milliseconds, when operation was started.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"endTime"),": Time, in milliseconds, when operation ended.")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"limit"),": Number of results to be returned")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null})),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(r.mdx)("em",{parentName:"td"},"offset"),": Offset")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Data Parameters"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"None")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Success Response"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"List of ",Object(r.mdx)("em",{parentName:"td"},"ExportImportAuditEntry"))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Error Response"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Errors Returned as AtlasBaseException")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Notes"),Object(r.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"None")))),Object(r.mdx)("h5",{id:"curl"},"CURL"),Object(r.mdx)(m.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'\ncurl -X GET -u admin:admin -H "Content-Type: application/json" -H "Cache-Control: no-cache"\nhttp://localhost:port/api/atlas/admin/expimp/audit?sourceClusterName=cl2\n'),Object(r.mdx)("h5",{id:"response"},"RESPONSE"),Object(r.mdx)(m.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'{\n    "queryType": "BASIC",\n    "searchParameters": {\n        "typeName": "ReplicationAuditEntry",\n        "excludeDeletedEntities": false,\n        "includeClassificationAttributes": false,\n        "includeSubTypes": true,\n        "includeSubClassifications": true,\n        "limit": 100,\n        "offset": 0,\n        "entityFilters": {\n            "attributeName": "name",\n            "operator": "eq",\n            "attributeValue": "cl2",\n            "criterion": []\n        }\n    },\n    "entities": [{\n        "typeName": "ReplicationAuditEntry",\n        "attributes": {\n            "owner": null,\n            "uniqueName": "cl2:EXPORT:1533037289411",\n            "createTime": null,\n            "name": "cl2",\n            "description": null\n        },\n        "guid": "04844141-af72-498a-9d26-f70f91e8adf8",\n        "status": "ACTIVE",\n        "displayText": "cl2",\n        "classificationNames": []\n    }, {\n        "typeName": "ReplicationAuditEntry",\n        "attributes": {\n            "owner": null,\n            "uniqueName": "cl2:EXPORT:1533037368407",\n            "createTime": null,\n            "name": "cl2",\n            "description": null\n        },\n        "guid": "837abe66-20c8-4296-8678-e715498bf8fb",\n        "status": "ACTIVE",\n        "displayText": "cl2",\n        "classificationNames": []\n    }]\n}'))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/ExportImportAudits.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-import-export-export-import-audits.3819aaea569a8e81eb65.js.map