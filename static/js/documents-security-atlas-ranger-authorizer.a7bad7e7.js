(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/documents/Security/AtlasRangerAuthorizer.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),o=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),l=a("./theme/components/shared/Img/index.js"),s={},c="wrapper";function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"atlas-ranger-authorizer"},"Atlas Ranger Authorizer"),Object(n.b)("h2",{id:"setting-up-apache-atlas-to-use-apache-ranger-authorization"},"Setting up Apache Atlas to use Apache Ranger Authorization"),Object(n.b)("p",null,"As detailed in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org//Atlas-Authorization-Model.html"}),"Atlas Authorization Model"),", Apache Atlas supports pluggable authorization\nmodel. Apache Ranger provides an authorizer implementation that uses Apache Ranger policies for authorization. In\naddition, the authorizer provided by Apache Ranger audits all authorizations into a central audit store."),Object(n.b)("h3",{id:"configure-apache-atlas"},"Configure Apache Atlas"),Object(n.b)("p",null,"To configure Apache Atlas to use Apache Ranger authorizer, please follow the instructions given below:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Include the following property in atlas-application.properties config file:"),Object(n.b)(o.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},"atlas.authorizer.impl=ranger"),Object(n.b)("p",{parentName:"li"}," If you use Apache Ambari to deploy Apache Atlas and Apache Ranger, enable Atlas plugin in configuration pages for\nApache Ranger.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Include libraries of Apache Ranger plugin in libext directory of Apache Atlas\n",Object(n.b)("em",{parentName:"p"}," ",Object(n.b)("inlineCode",{parentName:"em"},"<Atlas installation directory>"),"/libext/ranger-atlas-plugin-impl/\n")," ",Object(n.b)("inlineCode",{parentName:"p"},"<Atlas installation directory>"),"/libext/ranger-atlas-plugin-shim-",Object(n.b)("version",null),".jar\n* ",Object(n.b)("inlineCode",{parentName:"p"},"<Atlas installation directory>"),"/libext/ranger-plugin-classloader-",Object(n.b)("version",null),".jar")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Include configuration files for Apache Ranger plugin in configuration directory of Apache Atlas - typically under /etc/atlas/conf directory. For more details on configuration file contents, please refer to appropriate documentation in Apache Ranger.\n",Object(n.b)("em",{parentName:"p"}," ",Object(n.b)("inlineCode",{parentName:"em"},"<Atlas configuration directory>"),"/ranger-atlas-audit.xml\n")," ",Object(n.b)("inlineCode",{parentName:"p"},"<Atlas configuration directory>"),"/ranger-atlas-security.xml\n",Object(n.b)("em",{parentName:"p"}," ",Object(n.b)("inlineCode",{parentName:"em"},"<Atlas configuration directory>"),"/ranger-policymgr-ssl.xml\n")," ",Object(n.b)("inlineCode",{parentName:"p"},"<Atlas configuration directory>"),"/ranger-security.xml"))),Object(n.b)("h3",{id:"apache-ranger-authorization-policy-model-for-apache-atlas"},"Apache Ranger authorization policy model for Apache Atlas"),Object(n.b)("p",null,"Apache Ranger authorization policy model for Apache Atlas supports 3 resource hierarchies, to control access to: types,\nentities and admin operations. Following images show various details of each type of policy in Apache Ranger."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Types"))),Object(n.b)("p",null,"Following authorization policy allows user 'admin' to create/update/delete any classification type."),Object(n.b)(l.a,{alt:"Apache Ranger policy for type operations",src:"/images/twiki/ranger-policy-types.png",width:"600",mdxType:"Img"}),Object(n.b)("hr",null),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Entity"))),Object(n.b)("p",null,"Following authorization policy allows user 'admin' perform all operations on metadata entities of Hive database named \"my_db\"."),Object(n.b)(l.a,{alt:"Apache Ranger policy for entity operations",src:"/images/twiki/ranger-policy-entities.png",width:"600",mdxType:"Img"}),Object(n.b)("hr",null),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Admin Operations"),"\nFollowing authorization policy allows user 'admin' to perform export/import admin operations.")),Object(n.b)(l.a,{alt:"Apache Ranger policy for admin operations",src:"/images/twiki/ranger-policy-admin.png",width:"600",mdxType:"Img"}),Object(n.b)("hr",null),Object(n.b)("h3",{id:"apache-ranger-access-audit-for-apache-atlas-authorizations"},"Apache Ranger access audit for Apache Atlas authorizations"),Object(n.b)("p",null,"Apache Ranger authorization plugin generates audit logs with details of the access authorized by the plugin. The details\ninclude the object accessed (eg. hive_table with ID cost_savings.claim_savings@cl1), type of access performed (eg.\nentity-add-classification, entity-remove-classification), name of the user, time of access and the IP address the access\nrequest came from - as shown in the following image."),Object(n.b)(l.a,{alt:"Apache Ranger audit ",src:"/images/twiki/ranger-audit.png",width:"800",mdxType:"Img"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Security/AtlasRangerAuthorizer.md"}}),p.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,a){"use strict";var i=a("./node_modules/react/index.js"),n=(a("./theme/utils/theme.js"),a("./theme/styles/responsive.js"),a("./node_modules/docz/dist/index.esm.js"));t.a=e=>{const{src:t,width:a,height:r}=e,{baseUrl:o}=Object(n.g)();return i.createElement("div",null,i.createElement("img",{src:`${o}${t}`,height:`${r||"auto"}`,width:`${a||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-security-atlas-ranger-authorizer.007a6cecc41860d6b659.js.map