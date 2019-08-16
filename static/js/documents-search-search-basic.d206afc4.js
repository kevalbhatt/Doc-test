(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/documents/Search/Search-Basic.md":function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return c});var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),s=(i("./theme/styles/styled-colors.js"),i("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),r=i("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),l=i("./theme/components/shared/Img/index.js"),o={},u="wrapper";function c(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)(u,Object.assign({},o,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"basic-search"},"Basic Search"),Object(a.b)("p",null,"The basic search allows you to query using typename of an entity, associated classification/tag and has support for filtering on the entity attribute(s) as well as the classification/tag attributes."),Object(a.b)("p",null,"The entire query structure can be represented using the following JSON structure (called !SearchParameters)"),Object(a.b)(r.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'{\n  "typeName":               "hive_column",\n  "excludeDeletedEntities": true,\n  "classification":         "PII",\n  "query":                  "",\n  "offset":                 0,\n  "limit":                  25,\n  "entityFilters":          {  },\n  "tagFilters":             { },\n  "attributes":             [ "table", "qualifiedName"]\n}'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Field description")),Object(a.b)(r.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},"typeName:               the type of entity to look for\nexcludeDeletedEntities: should the search exclude deleted entities? (default: true)\nclassification:         only include entities with given classification\nquery:                  any free text occurrence that the entity should have (generic/wildcard queries might be slow)\noffset:                 starting offset of the result set (useful for pagination)\nlimit:                  max number of results to fetch\nentityFilters:          entity attribute filter(s)\ntagFilters:             classification attribute filter(s)\nattributes:             attributes to include in the search result"),Object(a.b)(l.a,{src:"/images/twiki/search-basic-hive_column-PII.png",height:"400",width:"600",mdxType:"Img"}),Object(a.b)("p",null,"   Attribute based filtering can be done on multiple attributes with AND/OR conditions."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples of filtering (for hive_table attributes)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Single attribute")),Object(a.b)(r.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'   {\n     "typeName":               "hive_table",\n     "excludeDeletedEntities": true,\n     "offset":                 0,\n     "limit":                  25,\n     "entityFilters": {\n        "attributeName":  "name",\n        "operator":       "contains",\n        "attributeValue": "customers"\n     },\n     "attributes": [ "db", "qualifiedName" ]\n   }'),Object(a.b)(l.a,{src:"/images/twiki/search-basic-hive_table-customers.png",height:"400",width:"600",mdxType:"Img"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Multi-attribute with OR")),Object(a.b)(r.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'   {\n     "typeName":               "hive_table",\n     "excludeDeletedEntities": true,\n     "offset":                 0,\n     "limit":                  25,\n     "entityFilters": {\n        "condition": "OR",\n        "criterion": [\n           {\n              "attributeName":  "name",\n              "operator":       "contains",\n              "attributeValue": "customers"\n           },\n           {\n              "attributeName":  "name",\n              "operator":       "contains",\n              "attributeValue": "provider"\n           }\n        ]\n     },\n     "attributes": [ "db", "qualifiedName" ]\n   }'),Object(a.b)(l.a,{src:"/images/twiki/search-basic-hive_table-customers-or-provider.png",height:"400",width:"600",mdxType:"Img"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Multi-attribute with AND")),Object(a.b)(r.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'   {\n     "typeName":               "hive_table",\n     "excludeDeletedEntities": true,\n     "offset":                 0,\n     "limit":                  25,\n     "entityFilters": {\n        "condition": "AND",\n        "criterion": [\n           {\n              "attributeName":  "name",\n              "operator":       "contains",\n              "attributeValue": "customers"\n           },\n           {\n              "attributeName":  "owner",\n              "operator":       "eq",\n              "attributeValue": "hive"\n           }\n        ]\n     },\n     "attributes": [ "db", "qualifiedName" ]\n  }'),Object(a.b)(l.a,{src:"/images/twiki/search-basic-hive_table-customers-owner_is_hive.png",height:"400",width:"600",mdxType:"Img"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Supported operators for filtering")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"LT (symbols: <, lt) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"GT (symbols: >, gt) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"LTE (symbols: <=, lte) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"GTE (symbols: >=, gte) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"EQ (symbols: eq, =) works with Numeric, Date, String attributes"),Object(a.b)("li",{parentName:"ul"},"NEQ (symbols: neq, !=) works with Numeric, Date, String attributes"),Object(a.b)("li",{parentName:"ul"},"LIKE (symbols: like, LIKE) works with String attributes"),Object(a.b)("li",{parentName:"ul"},"STARTS_WITH (symbols: startsWith, STARTSWITH) works with String attributes"),Object(a.b)("li",{parentName:"ul"},"ENDS_WITH (symbols: endsWith, ENDSWITH) works with String attributes"),Object(a.b)("li",{parentName:"ul"},"CONTAINS (symbols: contains, CONTAINS) works with String attributes")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CURL Samples")),Object(a.b)(r.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},'curl -sivk -g\n    -u <user>:<password>\n    -X POST\n    -d \'{\n            "typeName":               "hive_table",\n            "excludeDeletedEntities": true,\n            "classification":         "",\n            "query":                  "",\n            "offset":                 0,\n            "limit":                  50,\n            "entityFilters": {\n               "condition": "AND",\n               "criterion": [\n                  {\n                     "attributeName":  "name",\n                     "operator":       "contains",\n                     "attributeValue": "customers"\n                  },\n                  {\n                     "attributeName":  "owner",\n                     "operator":       "eq",\n                     "attributeValue": "hive"\n                  }\n               ]\n            },\n            "attributes": [ "db", "qualifiedName" ]\n          }\'\n    <protocol>://<atlas_host>:<atlas_port>/api/atlas/v2/search/basic'))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Search/Search-Basic.md"}}),c.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,i){"use strict";var n=i("./node_modules/react/index.js"),a=(i("./theme/utils/theme.js"),i("./theme/styles/responsive.js"),i("./node_modules/docz/dist/index.esm.js"));t.a=e=>{const{src:t,width:i,height:s}=e,{baseUrl:r}=Object(a.g)();return n.createElement("div",null,n.createElement("img",{src:`${r}${t}`,height:`${s||"auto"}`,width:`${i||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,t,i){"use strict";var n=i("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-search-search-basic.aaac9511c5aba0274c95.js.map