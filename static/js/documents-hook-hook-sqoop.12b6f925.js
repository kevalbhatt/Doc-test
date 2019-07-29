(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/documents/Hook/Hook-Sqoop.md":function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return p});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s=(t("./theme/styles/styled-colors.js"),t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),n=t("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),i={},r="wrapper";function p(e){var o=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(r,Object.assign({},i,t,{components:o,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"apache-atlas-hook-for-apache-sqoop"},"Apache Atlas Hook for Apache Sqoop"),Object(l.b)("h2",{id:"sqoop-model"},"Sqoop Model"),Object(l.b)("p",null,"Sqoop model includes the following types:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Entity types:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sqoop_process",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"super-types: Process"),Object(l.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, inputs, outputs, operation, commandlineOpts, startTime, endTime, userName"))),Object(l.b)("li",{parentName:"ul"},"sqoop_dbdatastore",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"super-types: !DataSet"),Object(l.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, dbStoreType, storeUse, storeUri, source"))))),Object(l.b)("li",{parentName:"ul"},"Enum types:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"sqoop_operation_type",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"values: IMPORT, EXPORT, EVAL"))),Object(l.b)("li",{parentName:"ul"},"sqoop_dbstore_usage",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"values: TABLE, QUERY, PROCEDURE, OTHER")))))),Object(l.b)("p",null,"Sqoop entities are created and de-duped in Atlas using unique attribute qualifiedName, whose value should be formatted as detailed below."),Object(l.b)(n.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"sqoop_process.qualifiedName:     sqoop <operation> --connect <url> {[--table <tableName>] || [--database <databaseName>]} [--query <storeQuery>]\nsqoop_dbdatastore.qualifiedName: <storeType> --url <storeUri> {[--table <tableName>] || [--database <databaseName>]} [--query <storeQuery>]  --hive-<operation> --hive-database <databaseName> [--hive-table <tableName>] --hive-cluster <clusterName>"),Object(l.b)("h2",{id:"sqoop-hook"},"Sqoop Hook"),Object(l.b)("p",null,"Sqoop added a !SqoopJobDataPublisher that publishes data to Atlas after completion of import Job. Today, only hiveImport is supported in !SqoopHook.\nThis is used to add entities in Atlas using the model detailed above."),Object(l.b)("p",null,"Follow the instructions below to setup Atlas hook in Hive:"),Object(l.b)("p",null,"Add the following properties to  to enable Atlas hook in Sqoop:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Set-up Atlas hook in ",Object(l.b)("inlineCode",{parentName:"li"},"<sqoop-conf>"),"/sqoop-site.xml by adding the following:")),Object(l.b)(n.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"<property>\n     <name>sqoop.job.data.publish.class</name>\n     <value>org.apache.atlas.sqoop.hook.SqoopHook</value>\n   </property>"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"untar apache-atlas-${project.version}-sqoop-hook.tar.gz"),Object(l.b)("li",{parentName:"ul"},"cd apache-atlas-sqoop-hook-${project.version}"),Object(l.b)("li",{parentName:"ul"},"Copy entire contents of folder apache-atlas-sqoop-hook-${project.version}/hook/sqoop to ",Object(l.b)("inlineCode",{parentName:"li"},"<atlas package>"),"/hook/sqoop"),Object(l.b)("li",{parentName:"ul"},"Copy ",Object(l.b)("inlineCode",{parentName:"li"},"<atlas-conf>"),"/atlas-application.properties to to the sqoop conf directory ",Object(l.b)("inlineCode",{parentName:"li"},"<sqoop-conf>"),"/"),Object(l.b)("li",{parentName:"ul"},"Link ",Object(l.b)("inlineCode",{parentName:"li"},"<atlas package>"),"/hook/sqoop/*.jar in sqoop lib")),Object(l.b)("p",null,"The following properties in atlas-application.properties control the thread pool and notification details:"),Object(l.b)(n.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"atlas.hook.sqoop.synchronous=false # whether to run the hook synchronously. false recommended to avoid delays in Sqoop operation completion. Default: false\natlas.hook.sqoop.numRetries=3      # number of retries for notification failure. Default: 3\natlas.hook.sqoop.queueSize=10000   # queue size for the threadpool. Default: 10000\natlas.cluster.name=primary # clusterName to use in qualifiedName of entities. Default: primary\natlas.kafka.zookeeper.connect=                    # Zookeeper connect URL for Kafka. Example: localhost:2181\natlas.kafka.zookeeper.connection.timeout.ms=30000 # Zookeeper connection timeout. Default: 30000\natlas.kafka.zookeeper.session.timeout.ms=60000    # Zookeeper session timeout. Default: 60000\natlas.kafka.zookeeper.sync.time.ms=20             # Zookeeper sync time. Default: 20"),Object(l.b)("p",null,'Other configurations for Kafka notification producer can be specified by prefixing the configuration name with "atlas.kafka.". For list of configuration supported by Kafka producer, please refer to ',Object(l.b)("a",Object.assign({parentName:"p"},{href:"http://kafka.apache.org/documentation/#producerconfigs"}),"Kafka Producer Configs")),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Only the following sqoop operations are captured by sqoop hook currently",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"hiveImport")))))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/Hook-Sqoop.md"}}),p.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,o,t){"use strict";var a=t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");a.a.hljs.color="#37bb9b",o.a=a.a}}]);
//# sourceMappingURL=documents-hook-hook-sqoop.99002ccf6911e5a378b5.js.map