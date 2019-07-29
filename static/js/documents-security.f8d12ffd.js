(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./src/documents/security.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),l=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),r=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},o="wrapper";function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(o,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"security-features-of-apache-atlas"},"Security Features of Apache Atlas"),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"The following features are available for enhancing the security of the platform:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SSL "),Object(n.b)("li",{parentName:"ul"},"Service Authentication"),Object(n.b)("li",{parentName:"ul"},"SPNEGO-based HTTP Authentication")),Object(n.b)("h2",{id:"ssl"},"SSL"),Object(n.b)("p",null,"Both SSL one-way (server authentication) and two-way (server and client authentication) are supported.  The following application properties (properties configured in the atlas-application.properties file) are available for configuring SSL:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.enableTLS")," (false|true) ","[default: false]"," - enable/disable the SSL listener"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"keystore.file")," - the path to the keystore file leveraged by the server.  This file contains the server certificate."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"truststore.file")," - the path to the truststore file. This file contains the certificates of other trusted entities (e.g. the certificates for client processes if two-way SSL is enabled).  In most instances this can be set to the same value as the keystore.file property (especially if one-way SSL is enabled)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"client.auth.enabled")," (false|true) ","[default: false]"," - enable/disable client authentication.  If enabled, the client will have to authenticate to the server during the transport session key creation process (i.e. two-way SSL is in effect)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"cert.stores.credential.provider.path")," - the path to the Credential Provider store file.  The passwords for the keystore, truststore, and server certificate are maintained in this secure file.  Utilize the cputil script in the 'bin' directoy (see below) to populate this file with the passwords required. "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.ssl.exclude.cipher.suites")," - the excluded Cipher Suites list -  ",Object(n.b)("em",{parentName:"li"},"NULL."),",.",Object(n.b)("em",{parentName:"li"},"RC4."),",.",Object(n.b)("em",{parentName:"li"},"MD5."),",.",Object(n.b)("em",{parentName:"li"},"DES."),",.",Object(n.b)("em",{parentName:"li"},"DSS.")," are weak and unsafe Cipher Suites that are excluded by default. If additional Ciphers need to be excluded, set this property with the default Cipher Suites such as atlas.ssl.exclude.cipher.suites=.",Object(n.b)("em",{parentName:"li"},"NULL."),", .",Object(n.b)("em",{parentName:"li"},"RC4."),", .",Object(n.b)("em",{parentName:"li"},"MD5."),", .",Object(n.b)("em",{parentName:"li"},"DES."),", .",Object(n.b)("em",{parentName:"li"},"DSS."),", and add the additional Ciper Suites to the list with a comma separator. They can be added with their full name or a regular expression. The Cipher Suites listed in the atlas.ssl.exclude.cipher.suites property will have precedence over the default Cipher Suites. One would keep the default Cipher Suites, and add additional ones to be safe. ")),Object(n.b)("h4",{id:"credential-provider-utility-script"},"Credential Provider Utility Script"),Object(n.b)("p",null,"In order to prevent the use of clear-text passwords, the Atlas platofrm makes use of the Credential Provider facility for secure password storage (see ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/CommandsManual.html#credentia"}),"Hadoop Credential Command Reference")," for more information about this facility).  The cputil script in the ",Object(n.b)("inlineCode",{parentName:"p"},"bin")," directory can be leveraged to create the password store required."),Object(n.b)("p",null,"To create the credential provdier for Atlas:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"cd to the ",Object(n.b)("inlineCode",{parentName:"p"},"bin")," directory")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"type ",Object(n.b)("inlineCode",{parentName:"p"},"./cputil.py"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enter the path for the generated credential provider.  The format for the path is:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:""}),"jceks://file/local/file/path/file.jceks")," or ",Object(n.b)("a",Object.assign({parentName:"li"},{href:""}),"jceks://hdfs@namenodehost:port/path/in/hdfs/to/file.jceks"),'.  The files generally use the ".jceks" extension (e.g. test.jceks)'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enter the passwords for the keystore, truststore, and server key (these passwords need to match the ones utilized for actually creating the associated certificate store files)."),Object(n.b)("p",{parentName:"li"},"The credential provider will be generated and saved to the path provided."))),Object(n.b)("h2",{id:"service-authentication"},"Service Authentication"),Object(n.b)("p",null,"The Atlas platform, upon startup, is associated to an authenticated identity.  By default, in an insecure environment, that identity is the same as the OS authenticated user launching the server.  However, in a secure cluster leveraging kerberos, it is considered a best practice to configure a keytab and principal in order for the platform to authenticate to the KDC. This allows the service to subsequently interact with other secure cluster services (e.g. HDFS)."),Object(n.b)("p",null,"The properties for configuring service authentication are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.authentication.method")," (simple|kerberos) ","[default: simple]"," - the authentication method to utilize.  Simple will leverage the OS authenticated identity and is the default mechanism.  'kerberos' indicates that the service is required to authenticate to the KDC leveraging the configured keytab and principal."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.authentication.keytab")," - the path to the keytab file."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.authentication.principal"),' - the principal to use for authenticating to the KDC.  The principal is generally of the form "user/host@realm".  You may use the \'_HOST\' token for the hostname and the local hostname will be substituted in by the runtime (e.g. "Atlas/_HOST@EXAMPLE.COM")')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note that when Atlas is configured with HBase as the storage backend in a secure cluster, the graph db (JanusGraph) needs sufficient user permissions to be able to create and access an HBase table.  To grant the appropriate permissions see ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"Configuration"}),"Graph persistence engine - Hbase"),".")),Object(n.b)("h3",{id:"jaas-configuration"},"JAAS configuration"),Object(n.b)("p",null,"In a secure cluster, some of the components (such as Kafka) that Atlas interacts with, require Atlas to authenticate itself to them using JAAS. The following properties are used to set up appropriate JAAS Configuration."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.jaas.client-id.loginModuleName")," - the authentication method used by the component (for example, com.sun.security.auth.module.Krb5LoginModule)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.jaas.client-id.loginModuleControlFlag")," (required|requisite|sufficient|optional) ","[default: required]"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.jaas.client-id.option.useKeyTab")," (true|false)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.jaas.client-id.option.storeKey")," (true | false)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.jaas.client-id.option.serviceName")," - service name of server component"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.jaas.client-id.option.keyTab")," = ",Object(n.b)("inlineCode",{parentName:"li"},"<atlas keytab>")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.jaas.client-id.option.principal")," = ",Object(n.b)("inlineCode",{parentName:"li"},"<atlas principal>"))),Object(n.b)("p",null,"For example, the following property settings in jaas-application.properties file"),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},"atlas.jaas.KafkaClient.loginModuleName = com.sun.security.auth.module.Krb5LoginModule\natlas.jaas.KafkaClient.loginModuleControlFlag = required\natlas.jaas.KafkaClient.option.useKeyTab = true\natlas.jaas.KafkaClient.option.storeKey = true\natlas.jaas.KafkaClient.option.serviceName = kafka\natlas.jaas.KafkaClient.option.keyTab = /etc/security/keytabs/kafka_client.keytab\natlas.jaas.KafkaClient.option.principal = kafka-client-1@EXAMPLE.COM\natlas.jaas.MyClient.0.loginModuleName = com.sun.security.auth.module.Krb5LoginModule\natlas.jaas.MyClient.0.loginModuleControlFlag = required\natlas.jaas.MyClient.0.option.useKeyTab = true\natlas.jaas.MyClient.0.option.storeKey = true\natlas.jaas.MyClient.0.option.serviceName = kafka\natlas.jaas.MyClient.0.option.keyTab = /etc/security/keytabs/kafka_client.keytab\natlas.jaas.MyClient.0.option.principal = kafka-client-1@EXAMPLE.COM\natlas.jaas.MyClient.1.loginModuleName = com.sun.security.auth.module.Krb5LoginModule\natlas.jaas.MyClient.1.loginModuleControlFlag = optional\natlas.jaas.MyClient.1.option.useKeyTab = true\natlas.jaas.MyClient.1.option.storeKey = true\natlas.jaas.MyClient.1.option.serviceName = kafka\natlas.jaas.MyClient.1.option.keyTab = /etc/security/keytabs/kafka_client.keytab\natlas.jaas.MyClient.1.option.principal = kafka-client-1@EXAMPLE.COM"),Object(n.b)("p",null,"will set the JAAS configuration that is equivalent to the following jaas.conf file entries."),Object(n.b)(r.a,{wrapLines:!0,language:"json",style:l.a,mdxType:"SyntaxHighlighter"},'KafkaClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   serviceName=kafka\n   keyTab="/etc/security/keytabs/kafka_client.keytab"\n   principal="kafka-client-1@EXAMPLE.COM";\n};\nMyClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   serviceName=kafka keyTab="/etc/security/keytabs/kafka_client.keytab"\n   principal="kafka-client-1@EXAMPLE.COM";\n};\nMyClient {\n   com.sun.security.auth.module.Krb5LoginModule optional\n   useKeyTab=true\n   storeKey=true\n   serviceName=kafka\n   keyTab="/etc/security/keytabs/kafka_client.keytab"\n   principal="kafka-client-1@EXAMPLE.COM";\n};'),Object(n.b)("h2",{id:"spnego-based-http-authentication"},"SPNEGO-based HTTP Authentication"),Object(n.b)("p",null,"HTTP access to the Atlas platform can be secured by enabling the platform's SPNEGO support.  There are currently two supported authentication mechanisms:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"simple")," - authentication is performed via a provided user name"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"kerberos")," - the KDC authenticated identity of the client is leveraged to authenticate to the server")),Object(n.b)("p",null,"The kerberos support requires the client accessing the server to first authenticate to the KDC (usually this is done via the 'kinit' command).  Once authenticated, the user may access the server (the authenticated identity will be related to the server via the SPNEGO negotiation mechanism)."),Object(n.b)("p",null,"The properties for configuring the SPNEGO support are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.http.authentication.enabled")," (true|false) ","[default: false]"," - a property indicating whether to enable HTTP authentication"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.http.authentication.type")," (simple|kerberos) ","[default: simple]"," - the authentication type"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.http.authentication.kerberos.principal"),' - the web-application Kerberos principal name. The Kerberos principal name must start with "HTTP/...". For example: "HTTP/localhost@LOCALHOST". There is no default value.'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.http.authentication.kerberos.keytab")," - the path to the keytab file containing the credentials for the kerberos principal."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.rest.address")," - ",Object(n.b)("inlineCode",{parentName:"li"},"<http/https>://<atlas-fqdn>:<atlas port>"))),Object(n.b)("p",null,"For a more detailed discussion of the HTTP authentication mechanism refer to ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://hadoop.apache.org/docs/stable/hadoop-auth/Configuration.html"}),"Hadoop Auth, Java HTTP SPNEGO 2.6.0 - Server Side Configuration"),'.  The prefix that document references is "atlas.http.authentication" in the case of the Atlas authentication implementation.'),Object(n.b)("h3",{id:"client-security-configuration"},"Client security configuration"),Object(n.b)("p",null,"When leveraging Atlas client code to communicate with an Atlas server configured for SSL transport and/or Kerberos authentication, there is a requirement to provide the Atlas client configuration file that provides the security properties that allow for communication with, or authenticating to, the server."),Object(n.b)("p",null,'Update the atlas-application.properties file with the appropriate settings (see below) and copy it to the client\'s classpath or to the directory specified by the "atlas.conf" system property.'),Object(n.b)("p",null,"The client properties for SSL communication are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.enableTLS")," (false|true) ","[default: false]"," - enable/disable the SSL client communication infrastructure."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"keystore.file")," - the path to the keystore file leveraged by the client.  This file is only required if 2-Way SSL is enabled at the server and contains the client certificate."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"truststore.file")," - the path to the truststore file. This file contains the certificates of trusted entities (e.g. the certificates for the server or a shared certification authority). This file is required for both one-way or two-way SSL."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"cert.stores.credential.provider.path")," - the path to the Credential Provider store file.  The passwords for the keystore, truststore, and client certificate are maintained in this secure file.")),Object(n.b)("p",null,"The property required for authenticating to the server (if authentication is enabled):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"atlas.http.authentication.type")," (simple|kerberos) ","[default: simple]"," - the authentication type")),Object(n.b)("h3",{id:"solr-kerberos-configuration"},"SOLR Kerberos configuration"),Object(n.b)("p",null,"If the authentication type specified is 'kerberos', then the kerberos ticket cache will be accessed for authenticating to the server (Therefore the client is required to authenticate to the KDC prior to communication with the server using 'kinit' or a similar mechanism)."),Object(n.b)("p",null,"See ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/RANGER/How+to+configure+Solr+Cloud+with+Kerberos+for+Ranger+0.5"}),"the Apache SOLR Kerberos configuration"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add principal and generate the keytab file for solr.  Create a keytab per host for each host where Solr is going to run and use the principal name with the host (e.g. addprinc -randkey solr/${HOST1}@EXAMPLE.COM. Replace ${HOST1} with the actual host names).")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},"kadmin.local\nkadmin.local:  addprinc -randkey solr/<hostname>@EXAMPLE.COM\nkadmin.local:  xst -k solr.keytab solr/<hostname>@EXAMPLE.COM\nkadmin.local:  quit"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add principal and generate the keytab file for authenticating HTTP request. (Note that if Ambari is used to Kerberize the cluster, the keytab /etc/security/keytabs/spnego.service.keytab can be used)")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},"kadmin.local\nkadmin.local:  addprinc -randkey HTTP/<hostname>@EXAMPLE.COM\nkadmin.local:  xst -k HTTP.keytab HTTP/<hostname>@EXAMPLE.COM\nkadmin.local:  quit"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Copy the keytab file to all the hosts running Solr.")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},"cp solr.keytab /etc/security/keytabs/\nchmod 400 /etc/security/keytabs/solr.keytab\ncp HTTP.keytab /etc/security/keytabs/\nchmod 400 /etc/security/keytabs/HTTP.keytab"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create path in Zookeeper for storing the Solr configs and other parameters.")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},"$SOLR_INSTALL_HOME/server/scripts/cloud-scripts/zkcli.sh -zkhost $ZK_HOST:2181 -cmd makepath solr"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Upload the configuration to Zookeeper.")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},"$SOLR_INSTALL_HOME/server/scripts/cloud-scripts/zkcli.sh -cmd upconfig  -zkhost $ZK_HOST:2181/solr -confname basic_configs -confdir $SOLR_INSTALL_HOME/server/solr/configsets/_default/conf"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create the JAAS configuration.")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},'vi /etc/solr/conf/solr_jaas.conf\nClient {\n  com.sun.security.auth.module.Krb5LoginModule required\n  useKeyTab=true\n  keyTab="/etc/security/keytabs/solr.keytab"\n  storeKey=true\n  useTicketCache=true\n  debug=true\n  principal="solr/<hostname>@EXAMPLE.COM";\n};'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy /etc/solr/conf/solr_jaas.conf to all hosts running Solr.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Edit solr.in.sh in $SOLR_INSTALL_HOME/bin/"))),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},'vi $SOLR_INSTALL_HOME/bin/solr.in.sh\nSOLR_JAAS_FILE=/etc/solr/conf/solr_jaas.conf\nSOLR_HOST=\'hostname -f\'\nZK_HOST="$ZK_HOST1:2181,$ZK_HOST2:2181,$ZK_HOST3:2181/solr"\nKERBEROS_REALM="EXAMPLE.COM"\nSOLR_KEYTAB=/etc/solr/conf/solr.keytab\nSOLR_KERB_PRINCIPAL=HTTP@{KERBEROS_REALM}\nSOLR_KERB_KEYTAB=/etc/solr/conf/HTTP.keytab\nSOLR_AUTHENTICATION_CLIENT_CONFIGURER="org.apache.solr.client.solrj.impl.Krb5HttpClientConfigurer"\nSOLR_AUTHENTICATION_OPTS=" -DauthenticationPlugin=org.apache.solr.security.KerberosPlugin -Djava.security.auth.login.config={SOLR_JAAS_FILE} -Dsolr.kerberos.principal={SOLR_KERB_PRINCIPAL} -Dsolr.kerberos.keytab={SOLR_KERB_KEYTAB} -Dsolr.kerberos.cookie.domain={SOLR_HOST} -Dhost={SOLR_HOST} -Dsolr.kerberos.name.rules=DEFAULT"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy solr.in.sh to all hosts running Solr.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set up Solr to use the Kerberos plugin by uploading the security.json."))),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},'$SOLR_INSTALL_HOME/server/scripts/cloud-scripts/zkcli.sh -zkhost <zk host>:2181 -cmd put /security.json \'{"authentication":{"class": "org.apache.solr.security.KerberosPlugin"}}\''),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start Solr.")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},"$SOLR_INSTALL_HOME/bin/solr start -cloud -z $ZK_HOST1:2181,$ZK_HOST2:2181,$ZK_HOST3:2181 -noprompt"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Test Solr")),Object(n.b)(r.a,{wrapLines:!0,language:"shell",style:l.a,mdxType:"SyntaxHighlighter"},'kinit -k -t /etc/security/keytabs/HTTP.keytab HTTP/<host>@EXAMPLE.COM\ncurl --negotiate -u : "http://<host>:8983/solr/"'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create collections in Solr corresponding to the indexes that Atlas uses and change the Atlas configuration to point to the Solr instance setup as described in the ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"InstallationSteps"}),"Install Steps"))))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/security.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-security.2745d6e9a12519927d29.js.map