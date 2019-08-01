(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./src/documents/Security/AuthorizationModel.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),o=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),l={},r="wrapper";function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(r,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"atlas-authorization-model"},"Atlas Authorization Model"),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Atlas is a scalable and extensible set of core foundational governance services \u2013 enabling enterprises to effectively and\nefficiently meet their compliance requirements within Hadoop and allows integration with the whole enterprise data ecosystem.\nApache Atlas provides open metadata management and governance capabilities for organizations to build a catalog of their\ndata assets, classify and govern these assets and provide collaboration capabilities around these data assets for data\nscientists, analysts and the data governance team."),Object(n.b)("p",null,"This document covers details of the authorization model supported by Apache Atlas to control access to metadata managed by Atlas."),Object(n.b)("h2",{id:"authorization-of-access-to-types"},"Authorization of access to Types"),Object(n.b)("p",null,"Apache Atlas provides a type system that allows users to model the metadata objects they would like to manage. The model\nis composed of definitions called \u2018types\u2019. Apache Atlas type system supports following categories of types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Entity"),Object(n.b)("li",{parentName:"ul"},"Classification"),Object(n.b)("li",{parentName:"ul"},"Relationship"),Object(n.b)("li",{parentName:"ul"},"Struct"),Object(n.b)("li",{parentName:"ul"},"Enum")),Object(n.b)("p",null,"The authorization model enables control of which users, groups can perform the following operations on types, based on\ntype names and type categories:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"create"),Object(n.b)("li",{parentName:"ul"},"update"),Object(n.b)("li",{parentName:"ul"},"delete")),Object(n.b)("p",null,"Here are few examples of access controls supported by the model:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Admin users can create/update/delete types of all categories"),Object(n.b)("li",{parentName:"ul"},"Data stewards can create/update/delete classification types"),Object(n.b)("li",{parentName:"ul"},"Healthcare data stewards can create/update/delete types having names start with \u201chc\u201d")),Object(n.b)("h2",{id:"authorization-of-access-to-entities"},"Authorization of access to Entities"),Object(n.b)("p",null,"An entity is an instance of an entity-type and such instances represent objects in the real world \u2013 for example a table\nin Hive, a HDFS file, a Kafka topic. The authorization model enables control of which users, groups can perform the\nfollowing operations on entities \u2013 based on entity-types, entity-classifications, entity-id:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"read"),Object(n.b)("li",{parentName:"ul"},"create"),Object(n.b)("li",{parentName:"ul"},"update"),Object(n.b)("li",{parentName:"ul"},"delete"),Object(n.b)("li",{parentName:"ul"},"read classification"),Object(n.b)("li",{parentName:"ul"},"add classification"),Object(n.b)("li",{parentName:"ul"},"update classification"),Object(n.b)("li",{parentName:"ul"},"remove classification")),Object(n.b)("p",null,"Here are few examples of access controls supported by the model:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Admin users can perform all entity operations on entities of all types"),Object(n.b)("li",{parentName:"ul"},"Data stewards can perform all entity operations, except delete, on entities of all types"),Object(n.b)("li",{parentName:"ul"},"Data quality admins can add/update/remove DATA_QUALITY classification"),Object(n.b)("li",{parentName:"ul"},"Users in specific groups can read/update entities with PII classification or its sub-classification"),Object(n.b)("li",{parentName:"ul"},"Finance users can read/update entities whose ID start with \u2018finance\u2019")),Object(n.b)("h2",{id:"authorization-of-admin-operations"},"Authorization of Admin operations"),Object(n.b)("p",null,"The authorization model enables control of which users, groups can perform the following administrative operations:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"import entities")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"export entities"))),Object(n.b)("p",null,"Users with above accesses can import/export entities without requiring them to be granted with fine-grained entity level accesses."),Object(n.b)("h2",{id:"pluggable-authorization"},"Pluggable Authorization"),Object(n.b)("p",null,"Apache Atlas supports a pluggable authorization interface, as shown below, that enable alternate implementations to handle authorizations."),Object(n.b)("p",null,"The name of the class implementing the authorization interface can be registered with Apache Atlas using configuration ",Object(n.b)("inlineCode",{parentName:"p"},"atlas.authorizer.impl"),". When this property is not set, Apache Atlas will use its default implementation in ",Object(n.b)("inlineCode",{parentName:"p"},"org.apache.atlas.authorize.simple.AtlasSimpleAuthorizer"),"."),Object(n.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"\n   package org.apache.atlas.authorize;\n   public interface AtlasAuthorizer {\n     void init();\n     void cleanUp();\n\n     boolean isAccessAllowed(AtlasAdminAccessRequest request) throws AtlasAuthorizationException;\n\n     boolean isAccessAllowed(AtlasEntityAccessRequest request) throws AtlasAuthorizationException;\n\n     boolean isAccessAllowed(AtlasTypeAccessRequest request) throws AtlasAuthorizationException;\n   }"),Object(n.b)("h2",{id:"simple-authorizer"},"Simple Authorizer"),Object(n.b)("p",null,"Simple authorizer is the default authorizer implementation included in Apache Atlas. For details of setting up Apache Atlas\nto use simple authorizer, please see ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/Atlas-Authorization-Simple-Authorizer.html"}),"Setting up Atlas to use Simple Authorizer")),Object(n.b)("h2",{id:"ranger-authorizer"},"Ranger Authorizer"),Object(n.b)("p",null,"To configure Apache Atlas to use authorization implementation provided by Apache Ranger, include the following property\nin application.properties config file:"),Object(n.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"atlas.authorizer.impl=ranger"),Object(n.b)("p",null,"Apache Ranger Authorizer requires configuration files to be setup, for example to specify Apache Ranger admin server URL,\nname of the service containing authorization policies, etc. For more details please see, ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/Atlas-Authorization-Ranger-Authorizer.html"}),"Setting up Atlas to use Ranger Authorizer"),"."),Object(n.b)("h2",{id:"none-authorizer"},"None authorizer"),Object(n.b)("p",null,"In addition to the default authorizer, Apache Atlas includes an authorizer that permits all accesses to all users. This authorizer can be useful in test environments and unit tests. To use this authorizer, set the following configuration:"),Object(n.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"atlas.authorizer.impl=NONE"))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Security/AuthorizationModel.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-security-authorization-model.fae7c87a5eb027cbc856.js.map