(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/documents/Hook/HookHive.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),n=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),o=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s=a("./theme/components/shared/Img/index.js"),r={},m="wrapper";function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.mdx)(m,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"apache-atlas-hook--bridge-for-apache-hive"},"Apache Atlas Hook & Bridge for Apache Hive"),Object(l.mdx)("h2",{id:"hive-model"},"Hive Model"),Object(l.mdx)("p",null,"Hive model includes the following types:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Entity types:",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"hive_db",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"super-types: Asset"),Object(l.mdx)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, clusterName, location, parameters, ownerName"))),Object(l.mdx)("li",{parentName:"ul"},"hive_table",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"super-types: DataSet"),Object(l.mdx)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, db, createTime, lastAccessTime, comment, retention, sd, partitionKeys, columns, aliases, parameters, viewOriginalText, viewExpandedText, tableType, temporary"),Object(l.mdx)("li",{parentName:"ul"},"hive_column",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"super-types: DataSet"),Object(l.mdx)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, type, comment, table"))),Object(l.mdx)("li",{parentName:"ul"},"hive_storagedesc",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"super-types: Referenceable"),Object(l.mdx)("li",{parentName:"ul"},"attributes: qualifiedName, table, location, inputFormat, outputFormat, compressed, numBuckets, serdeInfo, bucketCols, sortCols, parameters, storedAsSubDirectories"))),Object(l.mdx)("li",{parentName:"ul"},"hive_process",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"super-types: Process"),Object(l.mdx)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, inputs, outputs, startTime, endTime, userName, operationType, queryText, queryPlan, queryId, clusterName"))),Object(l.mdx)("li",{parentName:"ul"},"hive_column_lineage",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"super-types: Process"),Object(l.mdx)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, inputs, outputs, query, depenendencyType, expression")))))))),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Enum types:",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"hive_principal_type",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"values: USER, ROLE, GROUP")))))),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Struct types:",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"hive_order",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"attributes: col, order"))),Object(l.mdx)("li",{parentName:"ul"},"hive_serde",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"attributes: name, serializationLib, parameters")))))),Object(l.mdx)("p",null,"Hive entities are created and de-duped in Atlas using unique attribute qualifiedName, whose value should be formatted as detailed below. Note that dbName, tableName and columnName should be in lower case."),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"hive_db.qualifiedName:     <dbName>@<clusterName>\nhive_table.qualifiedName:  <dbName>.<tableName>@<clusterName>\nhive_column.qualifiedName: <dbName>.<tableName>.<columnName>@<clusterName>\nhive_process.queryString:  trimmed query string in lower case"),Object(l.mdx)("h2",{id:"hive-hook"},"Hive Hook"),Object(l.mdx)("p",null,"Atlas Hive hook registers with Hive to listen for create/update/delete operations and updates the metadata in Atlas, via Kafka notifications, for the changes in Hive.\nFollow the instructions below to setup Atlas hook in Hive:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Set-up Atlas hook in hive-site.xml by adding the following:")),Object(l.mdx)(o.a,{wrapLines:!0,language:"xml",style:n.a,mdxType:"SyntaxHighlighter"},"<property>\n    <name>hive.exec.post.hooks</name>\n      <value>org.apache.atlas.hive.hook.HiveHook</value>\n  </property>"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"untar apache-atlas-${project.version}-hive-hook.tar.gz"),Object(l.mdx)("li",{parentName:"ul"},"cd apache-atlas-hive-hook-${project.version}"),Object(l.mdx)("li",{parentName:"ul"},"Copy entire contents of folder apache-atlas-hive-hook-${project.version}/hook/hive to ",Object(l.mdx)("inlineCode",{parentName:"li"},"<atlas package>"),"/hook/hive"),Object(l.mdx)("li",{parentName:"ul"},"Add 'export HIVE_AUX_JARS_PATH=",Object(l.mdx)("inlineCode",{parentName:"li"},"<atlas package>"),"/hook/hive' in hive-env.sh of your hive configuration"),Object(l.mdx)("li",{parentName:"ul"},"Copy ",Object(l.mdx)("inlineCode",{parentName:"li"},"<atlas-conf>"),"/atlas-application.properties to the hive conf directory.")),Object(l.mdx)("p",null,"The following properties in atlas-application.properties control the thread pool and notification details:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas.hook.hive.synchronous=false # whether to run the hook synchronously. false recommended to avoid delays in Hive query completion. Default: false\natlas.hook.hive.numRetries=3      # number of retries for notification failure. Default: 3\natlas.hook.hive.queueSize=10000   # queue size for the threadpool. Default: 10000\natlas.cluster.name=primary # clusterName to use in qualifiedName of entities. Default: primary\natlas.kafka.zookeeper.connect=                    # Zookeeper connect URL for Kafka. Example: localhost:2181\natlas.kafka.zookeeper.connection.timeout.ms=30000 # Zookeeper connection timeout. Default: 30000\natlas.kafka.zookeeper.session.timeout.ms=60000    # Zookeeper session timeout. Default: 60000\natlas.kafka.zookeeper.sync.time.ms=20             # Zookeeper sync time. Default: 20"),Object(l.mdx)("p",null,'Other configurations for Kafka notification producer can be specified by prefixing the configuration name with "atlas.kafka.". For list of configuration supported by Kafka producer, please refer to ',Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"http://kafka.apache.org/documentation/#producerconfigs"}),"Kafka Producer Configs")),Object(l.mdx)("h2",{id:"column-level-lineage"},"Column Level Lineage"),Object(l.mdx)("p",null,"Starting from 0.8-incubating version of Atlas, Column level lineage is captured in Atlas. Below are the details"),Object(l.mdx)("h3",{id:"model"},"Model"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"ColumnLineageProcess type is a subtype of Process"),Object(l.mdx)("li",{parentName:"ul"},"This relates an output Column to a set of input Columns or the Input Table"),Object(l.mdx)("li",{parentName:"ul"},"The lineage also captures the kind of dependency, as listed below:",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"SIMPLE:     output column has the same value as the input"),Object(l.mdx)("li",{parentName:"ul"},"EXPRESSION: output column is transformed by some expression at runtime (for e.g. a Hive SQL expression) on the Input Columns."),Object(l.mdx)("li",{parentName:"ul"},"SCRIPT:     output column is transformed by a user provided script."))),Object(l.mdx)("li",{parentName:"ul"},"In case of EXPRESSION dependency the expression attribute contains the expression in string form"),Object(l.mdx)("li",{parentName:"ul"},"Since Process links input and output DataSets, Column is a subtype of DataSet")),Object(l.mdx)("h3",{id:"examples"},"Examples"),Object(l.mdx)("p",null,"For a simple CTAS below:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"sql",style:n.a,mdxType:"SyntaxHighlighter"},"create table t2 as select id, name from T1"),Object(l.mdx)("p",null,"The lineage is captured as"),Object(l.mdx)(s.a,{src:"/images/column_lineage_ex1.png",height:"200",width:"400",mdxType:"Img"}),Object(l.mdx)("h3",{id:"extracting-lineage-from-hive-commands"},"Extracting Lineage from Hive commands"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"The HiveHook maps the LineageInfo in the HookContext to Column lineage instances"),Object(l.mdx)("li",{parentName:"ul"},"The LineageInfo in Hive provides column-level lineage for the final FileSinkOperator, linking them to the input columns in the Hive Query")),Object(l.mdx)("h2",{id:"notes"},"NOTES"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Column level lineage works with Hive version 1.2.1 after the patch for ",Object(l.mdx)("a",{href:"https://issues.apache.org/jira/browse/HIVE-13112"},"HIVE-13112")," is applied to Hive source"),Object(l.mdx)("li",{parentName:"ul"},"Since database name, table name and column names are case insensitive in hive, the corresponding names in entities are lowercase. So, any search APIs should use lowercase while querying on the entity names"),Object(l.mdx)("li",{parentName:"ul"},"The following hive operations are captured by hive hook currently",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"create database"),Object(l.mdx)("li",{parentName:"ul"},"create table/view, create table as select"),Object(l.mdx)("li",{parentName:"ul"},"load, import, export"),Object(l.mdx)("li",{parentName:"ul"},"DMLs (insert)"),Object(l.mdx)("li",{parentName:"ul"},"alter database"),Object(l.mdx)("li",{parentName:"ul"},"alter table (skewed table information, stored as, protection is not supported)"),Object(l.mdx)("li",{parentName:"ul"},"alter view")))),Object(l.mdx)("h2",{id:"importing-hive-metadata"},"Importing Hive Metadata"),Object(l.mdx)("p",null,"Apache Atlas provides a command-line utility, import-hive.sh, to import metadata of Apache Hive databases and tables into Apache Atlas.\nThis utility can be used to initialize Apache Atlas with databases/tables present in Apache Hive.\nThis utility supports importing metadata of a specific table, tables in a specific database or all databases and tables."),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"Usage 1: <atlas package>/hook-bin/import-hive.sh\nUsage 2: <atlas package>/hook-bin/import-hive.sh [-d <database regex> OR --database <database regex>] [-t <table regex> OR --table <table regex>]\nUsage 3: <atlas package>/hook-bin/import-hive.sh [-f <filename>]\n           File Format:\n             database1:tbl1\n             database1:tbl2\n             database2:tbl1"))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/HookHive.md"}}),d.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,a){"use strict";var i=a("./node_modules/react/index.js"),l=a("./docz-lib/docz/dist/index.js");t.a=e=>{const{src:t,width:a,height:n}=e,{baseUrl:o}=Object(l.useConfig)();return i.createElement("div",null,i.createElement("img",{style:{boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",WebkitBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",MozBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"},src:`${o}${t}`,height:`${n||"auto"}`,width:`${a||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-hook-hook-hive.350c51af68551c403c0e.js.map