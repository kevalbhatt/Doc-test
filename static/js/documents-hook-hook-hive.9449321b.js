(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/documents/Hook/Hook-Hive.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),l={},o="wrapper";function r(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(o,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"apache-atlas-hook--bridge-for-apache-hive"},"Apache Atlas Hook & Bridge for Apache Hive"),Object(n.b)("h2",{id:"hive-model"},"Hive Model"),Object(n.b)("p",null,"Hive model includes the following types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Entity types:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"hive_db",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"super-types: !Asset"),Object(n.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, clusterName, location, parameters, ownerName"))),Object(n.b)("li",{parentName:"ul"},"hive_table",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"super-types: !DataSet"),Object(n.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, db, createTime, lastAccessTime, comment, retention, sd, partitionKeys, columns, aliases, parameters, viewOriginalText, viewExpandedText, tableType, temporary"))),Object(n.b)("li",{parentName:"ul"},"hive_column",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"super-types: !DataSet"),Object(n.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, type, comment, table"))),Object(n.b)("li",{parentName:"ul"},"hive_storagedesc",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"super-types: Referenceable"),Object(n.b)("li",{parentName:"ul"},"attributes: qualifiedName, table, location, inputFormat, outputFormat, compressed, numBuckets, serdeInfo, bucketCols, sortCols, parameters, storedAsSubDirectories"))),Object(n.b)("li",{parentName:"ul"},"hive_process",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"super-types: Process"),Object(n.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, inputs, outputs, startTime, endTime, userName, operationType, queryText, queryPlan, queryId, clusterName"))),Object(n.b)("li",{parentName:"ul"},"hive_column_lineage",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"super-types: Process"),Object(n.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, inputs, outputs, query, depenendencyType, expression"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Enum types:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"hive_principal_type",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"values: USER, ROLE, GROUP"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Struct types:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"hive_order",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"attributes: col, order"))),Object(n.b)("li",{parentName:"ul"},"hive_serde",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"attributes: name, serializationLib, parameters")))))),Object(n.b)("p",null,"Hive entities are created and de-duped in Atlas using unique attribute qualifiedName, whose value should be formatted as detailed below. Note that dbName, tableName and columnName should be in lower case."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"   hive_db.qualifiedName:     <dbName>@<clusterName>\n   hive_table.qualifiedName:  <dbName>.<tableName>@<clusterName>\n   hive_column.qualifiedName: <dbName>.<tableName>.<columnName>@<clusterName>\n   hive_process.queryString:  trimmed query string in lower case\n")),Object(n.b)("h2",{id:"hive-hook"},"Hive Hook"),Object(n.b)("p",null,"Atlas Hive hook registers with Hive to listen for create/update/delete operations and updates the metadata in Atlas, via Kafka notifications, for the changes in Hive.\nFollow the instructions below to setup Atlas hook in Hive:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set-up Atlas hook in hive-site.xml by adding the following:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"  <property>\n    <name>hive.exec.post.hooks</name>\n    <value>org.apache.atlas.hive.hook.HiveHook</value>\n  </property>\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"untar apache-atlas-${project.version}-hive-hook.tar.gz")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"cd apache-atlas-hive-hook-${project.version}")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy entire contents of folder apache-atlas-hive-hook-${project.version}/hook/hive to ",Object(n.b)("inlineCode",{parentName:"p"},"<atlas package>"),"/hook/hive")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add 'export HIVE_AUX_JARS_PATH=",Object(n.b)("inlineCode",{parentName:"p"},"<atlas package>"),"/hook/hive' in hive-env.sh of your hive configuration")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy ",Object(n.b)("inlineCode",{parentName:"p"},"<atlas-conf>"),"/atlas-application.properties to the hive conf directory."))),Object(n.b)("p",null,"The following properties in atlas-application.properties control the thread pool and notification details:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"atlas.hook.hive.synchronous=false # whether to run the hook synchronously. false recommended to avoid delays in Hive query completion. Default: false\natlas.hook.hive.numRetries=3      # number of retries for notification failure. Default: 3\natlas.hook.hive.queueSize=10000   # queue size for the threadpool. Default: 10000\n\natlas.cluster.name=primary # clusterName to use in qualifiedName of entities. Default: primary\n\natlas.kafka.zookeeper.connect=                    # Zookeeper connect URL for Kafka. Example: localhost:2181\natlas.kafka.zookeeper.connection.timeout.ms=30000 # Zookeeper connection timeout. Default: 30000\natlas.kafka.zookeeper.session.timeout.ms=60000    # Zookeeper session timeout. Default: 60000\natlas.kafka.zookeeper.sync.time.ms=20             # Zookeeper sync time. Default: 20\n")),Object(n.b)("p",null,'Other configurations for Kafka notification producer can be specified by prefixing the configuration name with "atlas.kafka.". For list of configuration supported by Kafka producer, please refer to ',Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://kafka.apache.org/documentation/#producerconfigs"}),"Kafka Producer Configs")),Object(n.b)("h2",{id:"column-level-lineage"},"Column Level Lineage"),Object(n.b)("p",null,"Starting from 0.8-incubating version of Atlas, Column level lineage is captured in Atlas. Below are the details"),Object(n.b)("h3",{id:"model"},"Model"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"!ColumnLineageProcess type is a subtype of Process")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This relates an output Column to a set of input Columns or the Input Table")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The lineage also captures the kind of dependency, as listed below:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"SIMPLE:     output column has the same value as the input"),Object(n.b)("li",{parentName:"ul"},"EXPRESSION: output column is transformed by some expression at runtime (for e.g. a Hive SQL expression) on the Input Columns."),Object(n.b)("li",{parentName:"ul"},"SCRIPT:     output column is transformed by a user provided script."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In case of EXPRESSION dependency the expression attribute contains the expression in string form")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Since Process links input and output !DataSets, Column is a subtype of !DataSet"))),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)("p",null,"For a simple CTAS below:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"create table t2 as select id, name from T1\n")),Object(n.b)("p",null,"The lineage is captured as"),Object(n.b)("img",{src:"images/column_lineage_ex1.png",height:"200",width:"400"}),Object(n.b)("h3",{id:"extracting-lineage-from-hive-commands"},"Extracting Lineage from Hive commands"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The !HiveHook maps the !LineageInfo in the !HookContext to Column lineage instances")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The !LineageInfo in Hive provides column-level lineage for the final !FileSinkOperator, linking them to the input columns in the Hive Query"))),Object(n.b)("h2",{id:"notes"},"NOTES"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Column level lineage works with Hive version 1.2.1 after the patch for ",Object(n.b)("a",{href:"https://issues.apache.org/jira/browse/HIVE-13112"},"HIVE-13112")," is applied to Hive source"),Object(n.b)("li",{parentName:"ul"},"Since database name, table name and column names are case insensitive in hive, the corresponding names in entities are lowercase. So, any search APIs should use lowercase while querying on the entity names"),Object(n.b)("li",{parentName:"ul"},"The following hive operations are captured by hive hook currently",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"create database"),Object(n.b)("li",{parentName:"ul"},"create table/view, create table as select"),Object(n.b)("li",{parentName:"ul"},"load, import, export"),Object(n.b)("li",{parentName:"ul"},"DMLs (insert)"),Object(n.b)("li",{parentName:"ul"},"alter database"),Object(n.b)("li",{parentName:"ul"},"alter table (skewed table information, stored as, protection is not supported)"),Object(n.b)("li",{parentName:"ul"},"alter view")))),Object(n.b)("h2",{id:"importing-hive-metadata"},"Importing Hive Metadata"),Object(n.b)("p",null,"Apache Atlas provides a command-line utility, import-hive.sh, to import metadata of Apache Hive databases and tables into Apache Atlas.\nThis utility can be used to initialize Apache Atlas with databases/tables present in Apache Hive.\nThis utility supports importing metadata of a specific table, tables in a specific database or all databases and tables."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"Usage 1: <atlas package>/hook-bin/import-hive.sh\nUsage 2: <atlas package>/hook-bin/import-hive.sh [-d <database regex> OR --database <database regex>] [-t <table regex> OR --table <table regex>]\nUsage 3: <atlas package>/hook-bin/import-hive.sh [-f <filename>]\n           File Format:\n             database1:tbl1\n             database1:tbl2\n             database2:tbl1\n")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/Hook-Hive.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-hook-hook-hive.1ca584aa8a326a7feec1.js.map