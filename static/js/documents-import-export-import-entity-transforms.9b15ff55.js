(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/documents/Import-Export/ImportEntityTransforms.md":function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return l});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),o={},b="wrapper";function l(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(i.b)(b,Object.assign({},o,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"new-entity-transforms-framework"},"(New) Entity Transforms Framework"),Object(i.b)("h4",{id:"background"},"Background"),Object(i.b)("p",null,"During Import Process, entity transforms are required to make changes to the entity before it gets committed to the database. These modifications are necessary to make the entity conform to the environment it is going to reside. The Import Process provided a mechanism to do that."),Object(i.b)("h4",{id:"transformation-framework"},"Transformation Framework"),Object(i.b)("p",null,"A transformation framework allows a mechanism to selectively transform an entity or specific attributes of that entity."),Object(i.b)("p",null,"To achieve this, the framework, provides:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Way to set a condition that needs to be satisfied for a transformation to be applied."),Object(i.b)("li",{parentName:"ul"},"Action to be taken on the entity once the condition is met.")),Object(i.b)("p",null,"The existing transformation frameworks allowed this to happen."),Object(i.b)("h4",{id:"reason-for-new-transformation-framework"},"Reason for New Transformation Framework"),Object(i.b)("p",null,"While the existing framework provided the basic benefits of transformation framework, it did not have support for some of the commonly used Atlas types. Which meant that users of this framework would have to meticulously define transformations for every type they are working with. This can be tedious and potentially error prone.\nThe new framework addresses this problem by providing built-in transformations for some of the commonly used types. It can also be extended to accommodate new types."),Object(i.b)("h4",{id:"approach"},"Approach"),Object(i.b)("p",null,"The approach used by the new transformation framework creates a transformation by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Specifying a condition."),Object(i.b)("li",{parentName:"ul"},"Specifying action(s) to be taken if condition is met.")),Object(i.b)("h5",{id:"conditions"},"Conditions"),Object(i.b)("p",null,"Following are built-in conditions."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Condition Types")),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ENTITY_ALL"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Any/every entity")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ENTITY_TOP_LEVEL"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Entity that is the top-level entity. This is also the entity present specified in ",Object(i.b)("em",{parentName:"td"},"AtlasExportRequest"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"EQUALS"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Entity attribute equals to the one specified in the condition.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"EQUALS_IGNORE_CASE"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Entity attribute equals to the one specified in the condition ignoring case.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"STARTS_WITH"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Entity attribute starts with.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"STARTS_WITH_IGNORE_CASE"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Entity attribute starts with ignoring case.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"HAS_VALUE"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Entity attribute has value.")))),Object(i.b)("h5",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Action Type")),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"*Description**"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ADD_CLASSIFICATION"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Add classifiction")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"REPLACE_PREFIX"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Replace value starting with another value.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"TO_LOWER"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Convert value of an attribute to lower case.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"SET"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Set the value of an attribute")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"CLEAR"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"Clear value of an attribute")))),Object(i.b)("h4",{id:"built-in-transforms"},"Built-in Transforms"),Object(i.b)("h6",{id:"add-classification"},"Add Classification"),Object(i.b)("p",null,"During import, hive",Object(i.b)("em",{parentName:"p"},"db entity whose _qualifiedName")," is ",Object(i.b)("em",{parentName:"p"},"stocks@cl1")," will get the classification ",Object(i.b)("em",{parentName:"p"},"clSrcImported"),"."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "conditions": {\n        "hive_db.qualifiedName": "stocks@cl1"\n    },\n    "action": {\n        "__entity": "ADD_CLASSIFICATION: clSrcImported"\n    }\n}'),Object(i.b)("p",null,"Every imported entity will get the classification by simply changing the condition. The __entity is special condition which matches entity."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "conditions": {\n        "__entity": ""\n    },\n    "action": {\n        "__entity": "ADD_CLASSIFICATION: clSrcImported"\n    }\n}'),Object(i.b)("p",null,"To add classification to only the top-level entity (entity that is used as starting point for an export), use:"),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "conditions": {\n        "__entity": "topLevel:"\n    },\n    "action": {\n        "__entity": "ADD_CLASSIFICATION: clSrcImported"\n    }\n}'),Object(i.b)("h6",{id:"replace-prefix"},"Replace Prefix"),Object(i.b)("p",null,"This action works on string values. The first parameter is the prefix that is searched for a match, once matched, it is replaced with the provided replacement string."),Object(i.b)("p",null,"The sample below searches for ",Object(i.b)("em",{parentName:"p"},"/aa/bb/"),", once found replaces it with ",Object(i.b)("em",{parentName:"p"},"/xx/yy/"),"."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "conditions": {\n        "hdfs_path.clusterName": "EQUALS: CL1"\n    },\n    "action": {\n        "hdfs_path.path": "REPLACE_PREFIX: = :/aa/bb/=/xx/yy/"\n    }\n}'),Object(i.b)("h6",{id:"to-lower"},"To Lower"),Object(i.b)("p",null,"Entity whose hdfs_path.clusterName is CL1 will get its path attribute converted to lower case."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "conditions": {\n        "hdfs_path.clusterName": "EQUALS: CL1"\n    },\n    "action": {\n        "hdfs_path.path": "TO_LOWER:"\n    }\n}'),Object(i.b)("h6",{id:"clear"},"Clear"),Object(i.b)("p",null,"Entity whose hdfs",Object(i.b)("em",{parentName:"p"},"path.clusterName has value set, will get its _replicatedTo")," attribute value cleared."),Object(i.b)(s.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n    "conditions": {\n        "hdfs_path.clusterName": "HAS_VALUE:"\n    },\n    "action": {\n        "hdfs_path.replicatedTo": "CLEAR:"\n    }\n}'),Object(i.b)("h4",{id:"additional-examples"},"Additional Examples"),Object(i.b)("p",null,"Please look at ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/apache/atlas/blob/master/intg/src/test/java/org/apache/atlas/entitytransform/TransformationHandlerTest.java"}),"these tests")," for examples using Java classes."))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/ImportEntityTransforms.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(t,e,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",e.a=n.a}}]);
//# sourceMappingURL=documents-import-export-import-entity-transforms.baa0ca56243c7ffb0e62.js.map