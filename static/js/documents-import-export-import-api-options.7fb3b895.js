(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/documents/Import-Export/ImportAPIOptions.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=(n("./theme/styles/styled-colors.js"),n("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=n("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),r={},p="wrapper";function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.mdx)(p,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"import-api-options"},"Import API Options"),Object(a.mdx)("p",null,"Import API options are specified as ",Object(a.mdx)("em",{parentName:"p"},"options")," JSON. Since the API accepts multi-part form data, it is possible to sepecify multipls input streams within the CURL call."),Object(a.mdx)("h3",{id:"examples-using-curl-calls"},"Examples Using CURL Calls"),Object(a.mdx)(s.a,{wrapLines:!0,language:"shell",style:o.a,mdxType:"SyntaxHighlighter"},'curl -g -X POST -u adminuser:password -H "Content-Type: multipart/form-data"\n            -H "Cache-Control: no-cache"\n            -F request=@importOptions.json\n            -F data=@quickStartDB.zip\n            "http://localhost:21000/api/atlas/admin/import"'),Object(a.mdx)("p",null,"To use the defaults, set the contents of ",Object(a.mdx)("em",{parentName:"p"},"importOptions.json")," to:"),Object(a.mdx)(s.a,{wrapLines:!0,language:"json",style:o.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n  }\n}'),Object(a.mdx)("h3",{id:"options"},"Options"),Object(a.mdx)("p",null,"Following options are supported for Import process:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Specify transforms during import operation."),Object(a.mdx)("li",{parentName:"ul"},"Resume import by specifying starting entity guid."),Object(a.mdx)("li",{parentName:"ul"},"Optionally import type definition."),Object(a.mdx)("li",{parentName:"ul"},"Handling large imports.")),Object(a.mdx)("h4",{id:"transforms"},"Transforms"),Object(a.mdx)("p",null,"During the import process, the attribute value of the incoming entity can be changed."),Object(a.mdx)("p",null,"This is possible by specifying entity type and at attribute to be modified and then the manner in which it needs to be modified."),Object(a.mdx)("p",null,"Right now these are the transforms that can be applied:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("em",{parentName:"li"},"lowercase")," Converts the attribute value to lower case."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("em",{parentName:"li"},"replace")," This performs a string find and replace operation. It takes two parameters, the first is the string to search for and the next one is the string to replace it with.")),Object(a.mdx)("p",null,"Example:"),Object(a.mdx)("p",null,"The example below applies couple of transforms to the the ",Object(a.mdx)("em",{parentName:"p"},"qualifiedName")," attribute of hive_table. It converts the value to lower case, then searches for 'cl1', if found, replaces it with 'cl2'."),Object(a.mdx)("p",null,"To use the option, set the contents of ",Object(a.mdx)("em",{parentName:"p"},"importOptions.json")," to:"),Object(a.mdx)(s.a,{wrapLines:!0,language:"json",style:o.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "transforms": {"hive_table": { "qualifiedName": [ replace:@cl1:@cl2 ] }, "hive_db": { "qualifiedName": [ replace:@cl1:@cl2 ] } }\n  }\n}'),Object(a.mdx)("p",null,"Please refer to ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://issues.apache.org/jira/browse/ATLAS-1825"}),"ATLAS-1825")," for details scenarios when this option could be used."),Object(a.mdx)("h4",{id:"start-guid-or-start-index"},"Start Guid or Start Index"),Object(a.mdx)("p",null,"When an import operation is in progress and the server goes down, it would be possible to resume import from the last successfully imported entity. This would allow the import to resume from where it left off."),Object(a.mdx)("p",null,"Server-side logging is improved to display the detail of the last successfully imported entity, this includes the index within the import list and the entity's guid. Either can be used specify the point to resume import."),Object(a.mdx)("p",null,"To use the option, set the contents of ",Object(a.mdx)("em",{parentName:"p"},"importOptions.json")," to:"),Object(a.mdx)(s.a,{wrapLines:!0,language:"shell",style:o.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "startGuid": "bd97c78e-3fa5-4f9c-9f48-3683ca3d1fb1"\n  }\n}'),Object(a.mdx)("p",null,"To use ",Object(a.mdx)("em",{parentName:"p"},"startPosition"),", use the following in the ",Object(a.mdx)("em",{parentName:"p"},"importOptions.json"),":"),Object(a.mdx)(s.a,{wrapLines:!0,language:"json",style:o.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "startPosition": "332"\n  }\n}'),Object(a.mdx)("p",null,"Steps to use the behavior:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Start an import (using the CURL) that is fairly long, say about 1000# entities."),Object(a.mdx)("li",{parentName:"ul"},"While the import is in progress, stop atlas server (using atlas_stop.py)."),Object(a.mdx)("li",{parentName:"ul"},"From the log file located at ",Object(a.mdx)("em",{parentName:"li"},"/var/log/atlas/application.log")," get the last successfully imported entity GUID or index position."),Object(a.mdx)("li",{parentName:"ul"},"Update the ",Object(a.mdx)("em",{parentName:"li"},"importOptions.json")," with the guid."),Object(a.mdx)("li",{parentName:"ul"},"Restart import.")),Object(a.mdx)("h4",{id:"optional-importing-type-definition"},"Optional Importing Type Definition"),Object(a.mdx)("p",null,"The output of Export has ",Object(a.mdx)("em",{parentName:"p"},"atlas-typedef.json")," that contains the type definitions for the entities exported."),Object(a.mdx)("p",null,"By default (that is if no options is specified), the type definitions are imported and applied to the system being imported to. The entity import is performed after this."),Object(a.mdx)("p",null,"In some cases, you would not want to modify the type definitions. Import may be better off failing than the types be modified."),Object(a.mdx)("p",null,"This option allows for optionally importing of type definition. The option is set to ",Object(a.mdx)("em",{parentName:"p"},"true")," by default, which means that type definition is imported. With this option set to ",Object(a.mdx)("em",{parentName:"p"},"false"),", type definitions preseneraent in the source will not be imported. In case of mismatch between the entities being imported the types present in the system where the import is being performed, the operation will fail."),Object(a.mdx)("p",null,"Table below enumerates the conditions that get addressed as part of type definition import:"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("strong",{parentName:"th"},"Condition")),Object(a.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(a.mdx)("strong",{parentName:"th"},"Action")))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Incoming type does not exist in target system"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Type is created.")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Type to be imported and type in target system are same"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"No change")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Type to be imported and type in target system differ by some attributes"),Object(a.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Target system type is updated to the attributes present in the source.",Object(a.mdx)("br",null)," It is possible that the target system will have attributes in addition to the one present in the source.",Object(a.mdx)("br",null)," In that case, the target system's type attributes will be an union of the attributes.",Object(a.mdx)("br",null)," Attributes in target system will not be deleted to match the source. ",Object(a.mdx)("br",null),"If the type of the attribute differ, import process will be aborted and exception logged.")))),Object(a.mdx)("p",null,"To use the option, set the contents of ",Object(a.mdx)("em",{parentName:"p"},"importOptions.json")," to:"),Object(a.mdx)(s.a,{wrapLines:!0,language:"json",style:o.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "updateTypeDefinition": true\n  }\n}'),Object(a.mdx)("h4",{id:"specifying-file-to-be-imported-from-server-location"},"Specifying File to be Imported From Server Location"),Object(a.mdx)("p",null,"In scenario where the file to be imported is present at a location on the server, the ",Object(a.mdx)("em",{parentName:"p"},"importfile")," API can be used. It behaves like the Import API."),Object(a.mdx)("p",null,"To use the option, set the contents of ",Object(a.mdx)("em",{parentName:"p"},"importOptions.json")," to:"),Object(a.mdx)(s.a,{wrapLines:!0,language:"json",style:o.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "fileName": "/root/fileToBeImported.zip"\n  }\n}'),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"CURL")),Object(a.mdx)(s.a,{wrapLines:!0,language:"json",style:o.a,mdxType:"SyntaxHighlighter"},'curl -g -X POST -u adminuser:password -H "Content-Type: application/json"\n            -H "Cache-Control: no-cache"\n            -d r@importOptions.json\n            "http://localhost:21000/api/atlas/admin/importfile"'),Object(a.mdx)("h4",{id:"handling-large-imports"},"Handling Large Imports"),Object(a.mdx)("p",null,"By default, the Import Service stores all of the data in memory. This may be limiting for ZIPs containing large amount of data."),Object(a.mdx)("p",null,"To configure temporary directory use the application property ",Object(a.mdx)("em",{parentName:"p"},"atlas.import.temp.directory"),". If this property is left blank, default in-memory implementation is used."),Object(a.mdx)("p",null,"Please ensure that there is sufficient disk space available for the operation."),Object(a.mdx)("p",null,"The contents of the directory created as backing store for the import operation will be erased after the operation is over."))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/ImportAPIOptions.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,n){"use strict";var i=n("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-import-export-import-api-options.e0d7106427cc645dac2b.js.map