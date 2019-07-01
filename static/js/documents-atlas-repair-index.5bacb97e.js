(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/documents/AtlasRepairIndex.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),i={},l="wrapper";function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(l,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"atlas-repair-index"},"Atlas Repair Index"),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"The document describes the use of the Atlas Index Repair Utility for JanusGraph, with HBase as back-end data store and Solr as index store."),Object(s.b)("h4",{id:"need-for-this-tool"},"Need for this Tool"),Object(s.b)("p",null,"In rare, cases it is possible that during entity creation, the entity is stored in the data store, but the corresponding indexes are not created in Solr. Since Atlas relies heavily on Solr in the operation of its Basic Search, this will result in entity not being returned by a search. Note that Advanced Search is not affected by this."),Object(s.b)("h4",{id:"location"},"Location"),Object(s.b)("p",null,"The tool is part of the normal Atlas installation, it is located under the tools/atlas-index-repair directory."),Object(s.b)("h4",{id:"steps-to-execute-tool"},"Steps to Execute Tool"),Object(s.b)("h5",{id:"complete-restore"},"Complete Restore"),Object(s.b)("p",null,"If the user needs to restore all the indexes, this can be accomplished by executing the tool with no command-line parameters:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"atlas-index-repair/repair_index.py\n")),Object(s.b)("p",null,"This will result in vertex_index, edge_index and fulltext_index to be re-built completely. It is recommended that existing contents of these indexes be deleted before executing this restore."),Object(s.b)("h6",{id:"caveats"},"Caveats"),Object(s.b)("p",null,"Note that the full index repair is a time consuming process. Depending on the size of data the process may take days to complete. During the restore process the Basic Search functionality will not be available. Be sure to allocate sufficient time for this activity."),Object(s.b)("h5",{id:"selective-restore"},"Selective Restore"),Object(s.b)("p",null,"To perform selective restore for an Atlas entity, specify the GUID of that entity:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"atlas-index-repair/repair_index.py [-g \\<guid>]\n")),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"atlas-index-repair/repair_index.py -g 13d77457-2a45-4e92-ad53-a172c7cb70a5\n")),Object(s.b)("p",null,"Note that Atlas will use REST APIs to fetch the entity, which will need correct authentication mechanism to be specified based on the installation."),Object(s.b)("p",null,"For an Atlas installation with username and password use:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"atlas-index-repair/repair_index.py [-g \\<guid>] [-u \\<user>] [-p \\<password>] \n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"guid: ","[optional]"," specify guid for which indexes are to be updated  "),Object(s.b)("li",{parentName:"ul"},"user: ","[optional]"," specify username for atlas instance"),Object(s.b)("li",{parentName:"ul"},"password: ","[optional]"," specify password for atlas instance")),Object(s.b)("p",null,"Example: "),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"atlas-index-repair/repair_index.py -u admin -p admin123 -g 13d77457-2a45-4e92-ad53-a172c7cb70a5 \n")),Object(s.b)("p",null,"For Atlas installation that uses kerberos as authentication mode,\nuse: kinit -kt /etc/security/keytabs/atlas.service.keytab atlas/fqdn@DOMAIN"),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"kinit -kt /etc/security/keytabs/atlas.service.keytab atlas/fqdn@EXAMPLE.com\n\natlas-index-repair/repair_index.py -g 13d77457-2a45-4e92-ad53-a172c7cb70a5\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/AtlasRepairIndex.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-atlas-repair-index.1ca584aa8a326a7feec1.js.map