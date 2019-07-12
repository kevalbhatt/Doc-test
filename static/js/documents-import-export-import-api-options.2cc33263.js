(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/documents/Import-Export/Import-API-Options.md":function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return l});var n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),s=(i("./theme/styles/styled-colors.js"),i("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),a=i("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),r={},p="wrapper";function l(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)(p,Object.assign({},r,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"import-api-options"},"Import API Options"),Object(o.b)("p",null,"Import API options are specified as ",Object(o.b)("em",{parentName:"p"},"options")," JSON. Since the API accepts multi-part form data, it is possible to sepecify multipls input streams within the CURL call."),Object(o.b)("h3",{id:"examples-using-curl-calls"},"Examples Using CURL Calls"),Object(o.b)(a.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},'curl -g -X POST -u adminuser:password -H "Content-Type: multipart/form-data"\n            -H "Cache-Control: no-cache"\n            -F request=@importOptions.json\n            -F data=@quickStartDB.zip\n            "http://localhost:21000/api/atlas/admin/import"'),Object(o.b)("p",null,"To use the defaults, set the contents of ",Object(o.b)("em",{parentName:"p"},"importOptions.json")," to:"),Object(o.b)(a.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n  }\n}'),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("p",null,"Following options are supported for Import process:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Specify transforms during import operation."),Object(o.b)("li",{parentName:"ul"},"Resume import by specifying starting entity guid."),Object(o.b)("li",{parentName:"ul"},"Optionally import type definition.")),Object(o.b)("h4",{id:"transforms"},"Transforms"),Object(o.b)("p",null,"During the import process, the attribute value of the incoming entity can be changed."),Object(o.b)("p",null,"This is possible by specifying entity type and at attribute to be modified and then the manner in which it needs to be modified."),Object(o.b)("p",null,"Right now these are the transforms that can be applied:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"lowercase")," Converts the attribute value to lower case."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"replace")," This performs a string find and replace operation. It takes two parameters, the first is the string to search for and the next one is the string to replace it with.")),Object(o.b)("p",null,"Example:"),Object(o.b)("p",null,"The example below applies couple of transforms to the the ",Object(o.b)("em",{parentName:"p"},"qualifiedName")," attribute of hive_table. It converts the value to lower case, then searches for 'cl1', if found, replaces it with 'cl2'."),Object(o.b)("p",null,"To use the option, set the contents of ",Object(o.b)("em",{parentName:"p"},"importOptions.json")," to:"),Object(o.b)(a.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "transforms": {"hive_table": { "qualifiedName": [ replace:@cl1:@cl2 ] }, "hive_db": { "qualifiedName": [ replace:@cl1:@cl2 ] } }\n  }\n}'),Object(o.b)("p",null,"Please refer to ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://issues.apache.org/jira/browse/ATLAS-1825"}),"ATLAS-1825")," for details scenarios when this option could be used."),Object(o.b)("h4",{id:"start-guid-or-start-index"},"Start Guid or Start Index"),Object(o.b)("p",null,"When an import operation is in progress and the server goes down, it would be possible to resume import from the last successfully imported entity. This would allow the import to resume from where it left off."),Object(o.b)("p",null,"Server-side logging is improved to display the detail of the last successfully imported entity, this includes the index within the import list and the entity's guid. Either can be used specify the point to resume import."),Object(o.b)("p",null,"To use the option, set the contents of ",Object(o.b)("em",{parentName:"p"},"importOptions.json")," to:"),Object(o.b)(a.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "startGuid": "bd97c78e-3fa5-4f9c-9f48-3683ca3d1fb1"\n  }\n}'),Object(o.b)("p",null,"To use ",Object(o.b)("em",{parentName:"p"},"startPosition"),", use the following in the ",Object(o.b)("em",{parentName:"p"},"importOptions.json"),":"),Object(o.b)(a.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "startPosition": "332"\n  }\n}'),Object(o.b)("p",null,"Steps to use the behavior:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start an import (using the CURL) that is fairly long, say about 1000# entities."),Object(o.b)("li",{parentName:"ul"},"While the import is in progress, stop atlas server (using atlas_stop.py)."),Object(o.b)("li",{parentName:"ul"},"From the log file located at ",Object(o.b)("em",{parentName:"li"},"/var/log/atlas/application.log")," get the last successfully imported entity GUID or index position."),Object(o.b)("li",{parentName:"ul"},"Update the ",Object(o.b)("em",{parentName:"li"},"importOptions.json")," with the guid."),Object(o.b)("li",{parentName:"ul"},"Restart import.")),Object(o.b)("h4",{id:"optional-importing-type-definition"},"Optional Importing Type Definition"),Object(o.b)("p",null,"The output of Export has ",Object(o.b)("em",{parentName:"p"},"atlas-typedef.json")," that contains the type definitions for the entities exported."),Object(o.b)("p",null,"By default (that is if no options is specified), the type definitions are imported and applied to the system being imported to. The entity import is performed after this."),Object(o.b)("p",null,"In some cases, you would not want to modify the type definitions. Import may be better off failing than the types be modified."),Object(o.b)("p",null,"This option allows for optionally importing of type definition. The option is set to ",Object(o.b)("em",{parentName:"p"},"true")," by default, which means that type definition is imported. With this option set to ",Object(o.b)("em",{parentName:"p"},"false"),", type definitions preseneraent in the source will not be imported. In case of mismatch between the entities being imported the types present in the system where the import is being performed, the operation will fail."),Object(o.b)("p",null,"Table below enumerates the conditions that get addressed as part of type definition import:"),Object(o.b)("p",null,"|",Object(o.b)("strong",{parentName:"p"},"Condition"),"|",Object(o.b)("strong",{parentName:"p"},"Action"),"|\n| Incoming type does not exist in target system | Type is created. |\n|Type to be imported and type in target system are same | No change |\n|Type to be imported and type in target system differ by some attributes| Target system type is updated to the attributes present in the source. It is possible that the target system will have attributes in addition to the one present in the source. In that case, the target system's type attributes will be an union of the attributes. Attributes in target system will not be deleted to match the source. If the type of the attribute differ, import process will be aborted and exception logged.|"),Object(o.b)("p",null,"To use the option, set the contents of ",Object(o.b)("em",{parentName:"p"},"importOptions.json")," to:"),Object(o.b)(a.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "updateTypeDefinition": true\n  }\n}'),Object(o.b)("h4",{id:"specifying-file-to-be-imported-from-server-location"},"Specifying File to be Imported From Server Location"),Object(o.b)("p",null,"In scenario where the file to be imported is present at a location on the server, the ",Object(o.b)("em",{parentName:"p"},"importfile")," API can be used. It behaves like the Import API."),Object(o.b)("p",null,"To use the option, set the contents of ",Object(o.b)("em",{parentName:"p"},"importOptions.json")," to:"),Object(o.b)(a.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'{\n  "options": {\n    "fileName": "/root/fileToBeImported.zip"\n  }\n}'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CURL")),Object(o.b)(a.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'curl -g -X POST -u adminuser:password -H "Content-Type: application/json"\n            -H "Cache-Control: no-cache"\n            -d r@importOptions.json\n            "http://localhost:21000/api/atlas/admin/importfile"'))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Import-Export/Import-API-Options.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,i){"use strict";var n=i("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-import-export-import-api-options.ea914adb1240b765ee8e.js.map