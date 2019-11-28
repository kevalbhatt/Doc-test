(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./src/documents/Security/Authentication.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),i=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},d="wrapper";function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.mdx)(d,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"authentication-in-apache-atlas"},"Authentication in Apache Atlas."),Object(o.mdx)("h3",{id:"authentication"},"Authentication"),Object(o.mdx)("p",null,"Atlas supports following authentication methods"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"File")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Kerberos")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"LDAP")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("strong",{parentName:"li"},"Keycloak (OpenID Connect / OAUTH2)"))),Object(o.mdx)("p",null,"Following properties should be set true to enable the authentication of that type in ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas-application.properties")," file."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.kerberos=true|false\natlas.authentication.method.ldap=true|false\natlas.authentication.method.file=true|false\natlas.authentication.method.keycloak=true|false"),Object(o.mdx)("p",null,"If two or more authentication methods are set to true, then the authentication falls back to the latter method if the earlier one fails.\nFor example if Kerberos authentication is set to true and ldap authentication is also set to true then, if for a request without kerberos principal and keytab LDAP authentication will be used as a fallback scenario."),Object(o.mdx)("h3",{id:"file-method"},"FILE method."),Object(o.mdx)("p",null,"File authentication requires users' login details in users credentials file in the format specified below and\nthe file path should set to property ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.file.filename")," in ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas-application.properties"),"."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.file=true\natlas.authentication.method.file.filename=".concat("sys:atlas.home","/conf/users-credentials.properties")),Object(o.mdx)("p",null,"The users credentials file should have below format"),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"username=group::sha256-password"),Object(o.mdx)("p",null," For e.g."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"admin=ADMIN::e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a"),Object(o.mdx)("p",null,"Users group can be either ",Object(o.mdx)("strong",{parentName:"p"},"ADMIN"),", ",Object(o.mdx)("strong",{parentName:"p"},"DATA_STEWARD")," OR ",Object(o.mdx)("strong",{parentName:"p"},"DATA_SCIENTIST")),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Note"),":-password is encoded with sha256 encoding method and can be generated using unix tool."),Object(o.mdx)("p",null,"For e.g."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},'echo -n "Password" | sha256sum\ne7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a  -'),Object(o.mdx)("h3",{id:"kerberos-method"},"Kerberos Method."),Object(o.mdx)("p",null,"To enable the authentication in Kerberos mode in Atlas, set the property ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.kerberos")," to true in ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas-application.properties")),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.kerberos = true"),Object(o.mdx)("p",null,"Also following properties should be set."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.kerberos.principal=<principal>/<fqdn>@EXAMPLE.COM\natlas.authentication.method.kerberos.keytab = /<key tab filepath>.keytab\natlas.authentication.method.kerberos.name.rules = RULE:[2:$1@$0](atlas@EXAMPLE.COM)s/.*/atlas/\natlas.authentication.method.kerberos.token.validity = 3600 [ in Seconds (optional)]"),Object(o.mdx)("h3",{id:"ldap-method"},"LDAP Method."),Object(o.mdx)("p",null,"To enable the authentication in LDAP mode in Atlas, set the property ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.ldap")," to true and also set Ldap type to property ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.ldap.type")," to LDAP or AD in ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas-application.properties"),".\nUse AD if connecting to Active Directory."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.ldap=true\natlas.authentication.method.ldap.type=ldap|ad"),Object(o.mdx)("p",null,"For LDAP or AD the following configuration needs to be set in atlas application properties."),Object(o.mdx)("h3",{id:"active-directory"},"Active Directory"),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.ldap.ad.domain= example.com\natlas.authentication.method.ldap.ad.url=ldap://<AD server ip>:389\natlas.authentication.method.ldap.ad.base.dn=DC=example,DC=com\natlas.authentication.method.ldap.ad.bind.dn=CN=Administrator,CN=Users,DC=example,DC=com\natlas.authentication.method.ldap.ad.bind.password=<password>\natlas.authentication.method.ldap.ad.referral=ignore\natlas.authentication.method.ldap.ad.user.searchfilter=(sAMAccountName={0})\natlas.authentication.method.ldap.ad.default.role=ROLE_USER"),Object(o.mdx)("h3",{id:"ldap-directroy"},"LDAP Directroy"),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.ldap.url=ldap://<Ldap server ip>:389\natlas.authentication.method.ldap.userDNpattern=uid={0],ou=users,dc=example,dc=com\natlas.authentication.method.ldap.groupSearchBase=dc=example,dc=com\natlas.authentication.method.ldap.groupSearchFilter=(member=cn={0},ou=users,dc=example,dc=com\natlas.authentication.method.ldap.groupRoleAttribute=cn\natlas.authentication.method.ldap.base.dn=dc=example,dc=com\natlas.authentication.method.ldap.bind.dn=cn=Manager,dc=example,dc=com\natlas.authentication.method.ldap.bind.password=<password>\natlas.authentication.method.ldap.referral=ignore\natlas.authentication.method.ldap.user.searchfilter=(uid={0})\natlas.authentication.method.ldap.default.role=ROLE_USER"),Object(o.mdx)("h3",{id:"keycloak-method"},"Keycloak Method."),Object(o.mdx)("p",null,"To enable Keycloak authentication mode in Atlas, set the property ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.keycloak")," to true and also set the property ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.keycloak.file")," to the localtion of your ",Object(o.mdx)("inlineCode",{parentName:"p"},"keycloak.json")," in ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas-application.properties"),".\nAlso set ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.keycloak.ugi-groups")," to false if you want to pickup groups from Keycloak. By default the groups will be picked up from the ",Object(o.mdx)("em",{parentName:"p"},"roles")," defined in Keycloak. In case you want to use the groups\nyou need to create a mapping in keycloak and define ",Object(o.mdx)("inlineCode",{parentName:"p"},"atlas.authentication.method.keycloak.groups_claim")," equal to the token claim name. Make sure ",Object(o.mdx)("strong",{parentName:"p"},"not")," to use the full group path and add the information to the access token."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},"atlas.authentication.method.keycloak=true\natlas.authentication.method.keycloak.file=/opt/atlas/conf/keycloak.json\natlas.authentication.method.keycloak.ugi-groups=false"),Object(o.mdx)("p",null,"Setup you keycloak.json per instructions from Keycloak. Make sure to include ",Object(o.mdx)("inlineCode",{parentName:"p"},'"principal-attribute": "preferred_username"')," to ensure readable user names and ",Object(o.mdx)("inlineCode",{parentName:"p"},'"autodetect-bearer-only": true'),"."),Object(o.mdx)(l.a,{wrapLines:!0,language:"shell",style:i.a,mdxType:"SyntaxHighlighter"},'{\n  "realm": "auth",\n  "auth-server-url": "http://keycloak-server/auth",\n  "ssl-required": "external",\n  "resource": "atlas",\n  "public-client": true,\n  "confidential-port": 0,\n  "principal-attribute": "preferred_username",\n  "autodetect-bearer-only": true\n}'))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Security/Authentication.md"}}),r.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-security-authentication.7cfe167678c6588a5eb9.js.map