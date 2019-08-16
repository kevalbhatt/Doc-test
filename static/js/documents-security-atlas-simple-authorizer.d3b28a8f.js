(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"./docz-theme-default/styles/styled-colors.js":function(e,t,s){"use strict";var n=s("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a},"./src/documents/Security/AtlasSimpleAuthorizer.md":function(e,t,s){"use strict";s.r(t),s.d(t,"default",function(){return p});var n=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(s("./node_modules/react/index.js"),s("./node_modules/@mdx-js/react/dist/index.es.js")),a=(s("./docz-theme-default/styles/styled-colors.js"),s("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=s("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),o={},r="wrapper";function p(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(i.b)(r,Object.assign({},o,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"atlas-simple-authorizer"},"Atlas Simple Authorizer"),Object(i.b)("h2",{id:"setting-up-atlas-to-use-simple-authorizer"},"Setting up Atlas to use Simple Authorizer"),Object(i.b)("p",null,"As detailed in Atlas Authorization Model](",Object(i.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/Atlas-Authorization-Model.html"}),"http://atlas.apache.org/Atlas-Authorization-Model.html"),"), Apache Atlas supports a pluggable authorization\nmodel. Simple authorizer is the default authorizer implementation included in Apache Atlas. Simple authorizer uses\npolicies defined in a JSON file. This document provides details of steps to configure Apache Atlas to use the simple\nauthorizer and details of the JSON file format containing authorization policies."),Object(i.b)("h2",{id:"configure-apache-atlas"},"Configure Apache Atlas"),Object(i.b)("p",null,"To configure Apache Atlas to use simple authorizer, include the following properties in application.properties config file:"),Object(i.b)(l.a,{wrapLines:!0,language:"shell",style:a.a,mdxType:"SyntaxHighlighter"},"atlas.authorizer.impl=simple\natlas.authorizer.simple.authz.policy.file=/etc/atlas/conf/atlas-simple-authz-policy.json"),Object(i.b)("p",null,"Please note that if the policy file location specified is not an absolute path, the file will be looked up in following paths:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Apache Atlas configuration directory (specified by system property =atlas.conf=)"),Object(i.b)("li",{parentName:"ul"},"Apache Atlas server's current directory"),Object(i.b)("li",{parentName:"ul"},"CLASSPATH")),Object(i.b)("h3",{id:"policy-file-format"},"Policy file format"),Object(i.b)("p",null,"Simple authorizer uses =roles= to group permissions, which can then be assigned to users and user-groups. Following examples\nwould help to understand the details of the policy file format:"),Object(i.b)("h3",{id:"roles"},"Roles"),Object(i.b)("p",null,"Following policy file defines 3 roles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ROLE_ADMIN: has all permissions"),Object(i.b)("li",{parentName:"ul"},'PROD_READ_ONLY: has access to read entities having qualifiedName ending with "@prod"'),Object(i.b)("li",{parentName:"ul"},'TEST_ALL_ACCESS: has all access to entities having qualifiedName ending with "@test"')),Object(i.b)("p",null,"Simple authorizer supports Java reg-ex to specify values for privilege/entity-type/entity-id/classification/typeName/typeCategory."),Object(i.b)(l.a,{wrapLines:!0,language:"shell",style:a.a,mdxType:"SyntaxHighlighter"},'{\n  "roles": {\n    "ROLE_ADMIN": {\n      "adminPermissions": [\n        {\n          "privileges": [ ".*" ]\n        }\n      ],\n  "entityPermissions": [\n    {\n      "privileges":      [ ".*" ],\n      "entityTypes":     [ ".*" ],\n      "entityIds":       [ ".*" ],\n      "classifications": [ ".*" ]\n    }\n  ],\n\n  "typePermissions": [\n    {\n      "privileges":     [ ".*" ],\n      "typeCategories": [ ".*" ],\n      "typeNames":      [ ".*" ]\n    }\n  ]\n},\n\n"PROD_READ_ONLY" : {\n  "entityPermissions": [\n    {\n      "privileges":      [ "entity-read", "entity-read-classification" ],\n      "entityTypes":     [ ".*" ],\n      "entityIds":       [ ".*@prod" ],\n      "classifications": [ ".*" ]\n    }\n}\n\n"TEST_ALL_ACCESS" : {\n  "entityPermissions": [\n    {\n      "privileges":      [ ".*" ],\n      "entityTypes":     [ ".*" ],\n      "entityIds":       [ ".*@test" ],\n      "classifications": [ ".*" ]\n    }\n}\n  },\n  "userRoles": {\n   ...\n  },\n  "groupRoles": {\n   ...\n  }\n}'),Object(i.b)("h3",{id:"assign-roles-to-users-and-user-groups"},"Assign Roles to Users and User Groups"),Object(i.b)("p",null,"Roles defined above can be assigned (granted) to users as shown below:"),Object(i.b)(l.a,{wrapLines:!0,language:"shell",style:a.a,mdxType:"SyntaxHighlighter"},'{\n  "roles": {\n   ...\n  },\n  "userRoles": {\n    "admin":   [ "ROLE_ADMIN" ],\n    "steward": [ "DATA_STEWARD" ],\n    "user1":   [ "PROD_READ_ONLY" ],\n    "user2":   [ "TEST_ALL_ACCESS" ],\n    "user3":   [ "PROD_READ_ONLY", "TEST_ALL_ACCESS" ],\n  },\n  "groupRoles": {\n   ...\n  }\n}'),Object(i.b)("p",null,"Roles can be assigned (granted) to user-groups as shown below. An user can belong to multiple groups; roles assigned to\nall groups the user belongs to will be used to authorize the access."),Object(i.b)(l.a,{wrapLines:!0,language:"shell",style:a.a,mdxType:"SyntaxHighlighter"},'{\n  "roles": {\n   ...\n  },\n  "userRoles": {\n   ...\n  },\n  "groupRoles": {\n    "admins":        [ "ROLE_ADMIN" ],\n    "dataStewards":  [ "DATA_STEWARD" ],\n    "testUsers":     [ "TEST_ALL_ACCESS" ],\n    "prodReadUsers": [ "PROD_READ_ONLY" ]\n  }\n}'))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Security/AtlasSimpleAuthorizer.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-security-atlas-simple-authorizer.225280d7a72ac1e9ba5d.js.map