(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/documents/Search/Search-Basic.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r={},s="wrapper";function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"basic-search"},"Basic Search"),Object(a.b)("p",null,"The basic search allows you to query using typename of an entity, associated classification/tag and has support for filtering on the entity attribute(s) as well as the classification/tag attributes."),Object(a.b)("p",null,"The entire query structure can be represented using the following JSON structure (called !SearchParameters)"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n "typeName":               "hive_column",\n "excludeDeletedEntities": true,\n "classification":         "PII",\n "query":                  "",\n "offset":                 0,\n "limit":                  25,\n "entityFilters":          {  },\n "tagFilters":             { },\n "attributes":             [ "table", "qualifiedName"]\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Field description")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),"  typeName:               the type of entity to look for\n  excludeDeletedEntities: should the search exclude deleted entities? (default: true)\n  classification:         only include entities with given classification\n  query:                  any free text occurrence that the entity should have (generic/wildcard queries might be slow)\n  offset:                 starting offset of the result set (useful for pagination)\n  limit:                  max number of results to fetch\n  entityFilters:          entity attribute filter(s)\n  tagFilters:             classification attribute filter(s)\n  attributes:             attributes to include in the search result\n")),Object(a.b)("img",{src:"public/images/twiki/search-basic-hive_column-PII.png",height:"400",width:"600"}),Object(a.b)("p",null,"   Attribute based filtering can be done on multiple attributes with AND/OR conditions."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples of filtering (for hive_table attributes)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Single attribute",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "typeName":               "hive_table",\n  "excludeDeletedEntities": true,\n  "offset":                 0,\n  "limit":                  25,\n  "entityFilters": {\n     "attributeName":  "name",\n     "operator":       "contains",\n     "attributeValue": "customers"\n  },\n  "attributes": [ "db", "qualifiedName" ]\n}\n')))),Object(a.b)("img",{src:"public/images/twiki/search-basic-hive_table-customers.png",height:"400",width:"600"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Multi-attribute with OR",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'  {\n    "typeName":               "hive_table",\n    "excludeDeletedEntities": true,\n    "offset":                 0,\n    "limit":                  25,\n    "entityFilters": {\n       "condition": "OR",\n       "criterion": [\n          {\n             "attributeName":  "name",\n             "operator":       "contains",\n             "attributeValue": "customers"\n          },\n          {\n             "attributeName":  "name",\n             "operator":       "contains",\n             "attributeValue": "provider"\n          }\n       ]\n    },\n    "attributes": [ "db", "qualifiedName" ]\n  }\n')))),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),'<img src="public/images/twiki/search-basic-hive_table-customers-or-provider.png" height="400" width="600"/>\n\n   * Multi-attribute with AND\n ```json\n   {\n     "typeName":               "hive_table",\n     "excludeDeletedEntities": true,\n     "offset":                 0,\n     "limit":                  25,\n     "entityFilters": {\n        "condition": "AND",\n        "criterion": [\n           {\n              "attributeName":  "name",\n              "operator":       "contains",\n              "attributeValue": "customers"\n           },\n           {\n              "attributeName":  "owner",\n              "operator":       "eq",\n              "attributeValue": "hive"\n           }\n        ]\n     },\n     "attributes": [ "db", "qualifiedName" ]\n  }\n')),Object(a.b)("img",{src:"public/images/twiki/search-basic-hive_table-customers-owner_is_hive.png",height:"400",width:"600"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Supported operators for filtering")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"LT (symbols: <, lt) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"GT (symbols: >, gt) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"LTE (symbols: <=, lte) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"GTE (symbols: >=, gte) works with Numeric, Date attributes"),Object(a.b)("li",{parentName:"ul"},"EQ (symbols: eq, =) works with Numeric, Date, String attributes"),Object(a.b)("li",{parentName:"ul"},"NEQ (symbols: neq, !=) works with Numeric, Date, String attributes"),Object(a.b)("li",{parentName:"ul"},"LIKE (symbols: like, LIKE) works with String attributes"),Object(a.b)("li",{parentName:"ul"},"STARTS_WITH (symbols: startsWith, STARTSWITH) works with String attributes"),Object(a.b)("li",{parentName:"ul"},"ENDS_WITH (symbols: endsWith, ENDSWITH) works with String attributes"),Object(a.b)("li",{parentName:"ul"},"CONTAINS (symbols: contains, CONTAINS) works with String attributes")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CURL Samples")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'curl -sivk -g\n   -u <user>:<password>\n   -X POST\n   -d \'{\n           "typeName":               "hive_table",\n           "excludeDeletedEntities": true,\n           "classification":         "",\n           "query":                  "",\n           "offset":                 0,\n           "limit":                  50,\n           "entityFilters": {\n              "condition": "AND",\n              "criterion": [\n                 {\n                    "attributeName":  "name",\n                    "operator":       "contains",\n                    "attributeValue": "customers"\n                 },\n                 {\n                    "attributeName":  "owner",\n                    "operator":       "eq",\n                    "attributeValue": "hive"\n                 }\n              ]\n           },\n           "attributes": [ "db", "qualifiedName" ]\n         }\'\n   <protocol>://<atlas_host>:<atlas_port>/api/atlas/v2/search/basic\n')))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Search/Search-Basic.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-search-search-basic.1ca584aa8a326a7feec1.js.map