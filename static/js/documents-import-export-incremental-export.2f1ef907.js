(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/documents/Import-Export/Incremental-Export.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=(n("./theme/styles/styled-colors.js"),n("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),i=n("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},p="wrapper";function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"incremental-export"},"Incremental Export"),Object(o.b)("h4",{id:"background"},"Background"),Object(o.b)("p",null,"Incremental export allows for export of entities after a specified timestamp. This allows for synchronization capability to be built as it makes payloads lighter."),Object(o.b)("h4",{id:"export-options"},"Export Options"),Object(o.b)("p",null,"New ",Object(o.b)("em",{parentName:"p"},"fetchType")," added to indicate incremental export. This option can be used with any ",Object(o.b)("em",{parentName:"p"},"matchType"),". When ",Object(o.b)("em",{parentName:"p"},"fetchType")," is ",Object(o.b)("em",{parentName:"p"},"incremental"),", it is necessary to specify the ",Object(o.b)("em",{parentName:"p"},"changeMarker")," option for incremental export to function, else full export will be performed."),Object(o.b)(i.a,{wrapLines:!0,language:"json",style:r.a,mdxType:"SyntaxHighlighter"},'{\n "itemsToExport": [\n { "typeName": "hive_db", "uniqueAttributes": { "qualifiedName": "stocks@cl1" } }\n ],\n"options": {\n "fetchType": "incremental",\n "changeMarker": 10000\n }\n}'),Object(o.b)("h4",{id:"getting-change-marker"},"Getting Change Marker"),Object(o.b)("p",null,"The very first call to export with ",Object(o.b)("em",{parentName:"p"},"fetchType")," set to ",Object(o.b)("em",{parentName:"p"},"incremental")," should be made with ",Object(o.b)("em",{parentName:"p"},"changeMarker")," set to 0. This will perform a full export. The ",Object(o.b)("em",{parentName:"p"},"AtlasExportResult")," will have the ",Object(o.b)("em",{parentName:"p"},"changeMarker")," set to a value. This is the value that should be used for subsequent call to Export."),Object(o.b)("h4",{id:"skip-lineage-option"},"Skip Lineage Option"),Object(o.b)("p",null,"Export can be performed by skipping lineage information. This avoids all lineage information getting into the exported file."),Object(o.b)("h4",{id:"benefit-of-incremental-export"},"Benefit of Incremental Export"),Object(o.b)("p",null,"The real benefit of incremental export comes when export is done with ",Object(o.b)("em",{parentName:"p"},"skipLineage")," option set to ",Object(o.b)("em",{parentName:"p"},"true"),". This greatly improves performance when fetching entities that have changed since the last export."))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/Incremental-Export.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,n){"use strict";var a=n("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");a.a.hljs.color="#37bb9b",t.a=a.a}}]);
//# sourceMappingURL=documents-import-export-incremental-export.48ed2560de6d8191c1a6.js.map