(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"./src/documents/Tools/AtlasRepairIndex.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),n=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),r={},o="wrapper";function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.mdx)(o,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"atlas-repair-index"},"Atlas Repair Index"),Object(s.mdx)("h2",{id:"introduction"},"Introduction"),Object(s.mdx)("p",null,"The document describes the use of the Atlas Index Repair Utility for JanusGraph, with HBase as back-end data store and Solr as index store."),Object(s.mdx)("h4",{id:"need-for-this-tool"},"Need for this Tool"),Object(s.mdx)("p",null,"In rare, cases it is possible that during entity creation, the entity is stored in the data store, but the corresponding indexes are not created in Solr. Since Atlas relies heavily on Solr in the operation of its Basic Search, this will result in entity not being returned by a search. Note that Advanced Search is not affected by this."),Object(s.mdx)("h4",{id:"location"},"Location"),Object(s.mdx)("p",null,"The tool is part of the normal Atlas installation, it is located under the tools/atlas-index-repair directory."),Object(s.mdx)("h4",{id:"steps-to-execute-tool"},"Steps to Execute Tool"),Object(s.mdx)("h5",{id:"complete-restore"},"Complete Restore"),Object(s.mdx)("p",null,"If the user needs to restore all the indexes, this can be accomplished by executing the tool with no command-line parameters:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"powershell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas-index-repair/repair_index.py"),Object(s.mdx)("p",null,"This will result in vertex_index, edge_index and fulltext_index to be re-built completely. It is recommended that existing contents of these indexes be deleted before executing this restore."),Object(s.mdx)("h5",{id:"caveats"},"Caveats"),Object(s.mdx)("p",null,"Note that the full index repair is a time consuming process. Depending on the size of data the process may take days to complete. During the restore process the Basic Search functionality will not be available. Be sure to allocate sufficient time for this activity."),Object(s.mdx)("h5",{id:"selective-restore"},"Selective Restore"),Object(s.mdx)("p",null,"To perform selective restore for an Atlas entity, specify the GUID of that entity:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"powershell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas-index-repair/repair_index.py [-g <guid>]"),Object(s.mdx)("p",null,"Example:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"powershell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas-index-repair/repair_index.py -g 13d77457-2a45-4e92-ad53-a172c7cb70a5"),Object(s.mdx)("p",null,"Note that Atlas will use REST APIs to fetch the entity, which will need correct authentication mechanism to be specified based on the installation."),Object(s.mdx)("p",null,"For an Atlas installation with username and password use:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"powershell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas-index-repair/repair_index.py [-g <guid>] [-u <user>] [-p <password>]"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"guid: ","[optional]"," specify guid for which indexes are to be updated"),Object(s.mdx)("li",{parentName:"ul"},"user: ","[optional]"," specify username for atlas instance"),Object(s.mdx)("li",{parentName:"ul"},"password: ","[optional]"," specify password for atlas instance")),Object(s.mdx)("p",null,"Example:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"powershell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas-index-repair/repair_index.py -u admin -p admin123 -g\n\t13d77457-2a45-4e92-ad53-a172c7cb70a5"),Object(s.mdx)("p",null,"For Atlas installation that uses kerberos as authentication mode,\nuse: kinit -kt /etc/security/keytabs/atlas.service.keytab atlas/fqdn@DOMAIN"),Object(s.mdx)("p",null,"Example:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"powershell",style:n.a,mdxType:"SyntaxHighlighter"},"kinit -kt /etc/security/keytabs/atlas.service.keytab atlas/fqdn@EXAMPLE.com\n\tatlas-index-repair/repair_index.py -g 13d77457-2a45-4e92-ad53-a172c7cb70a5"))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Tools/AtlasRepairIndex.md"}}),d.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-tools-atlas-repair-index.0b6edccfef51f8c0e79c.js.map