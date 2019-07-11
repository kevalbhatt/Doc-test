(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/documents/Hook/Hook-HBase.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),n=(t("./theme/styles/styled-colors.js"),t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),i=t("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),l={},r="wrapper";function c(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)(r,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"apache-atlas-hook--bridge-for-apache-hbase"},"Apache Atlas Hook & Bridge for Apache HBase"),Object(o.b)("h2",{id:"hbase-model"},"HBase Model"),Object(o.b)("p",null,"HBase model includes the following types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Entity types:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"hbase_namespace",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"super-types: !Asset"),Object(o.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, clusterName, parameters, createTime, modifiedTime"))),Object(o.b)("li",{parentName:"ul"},"hbase_table",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"super-types: !DataSet"),Object(o.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, namespace, column_families, uri, parameters, createtime, modifiedtime, maxfilesize, isReadOnly, isCompactionEnabled, isNormalizationEnabled, ReplicaPerRegion, Durability"))),Object(o.b)("li",{parentName:"ul"},"hbase_column_family",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"super-types: !DataSet"),Object(o.b)("li",{parentName:"ul"},"attributes:  qualifiedName, name, description, owner, columns, createTime, bloomFilterType, compressionType, compactionCompressionType, encryptionType, inMemoryCompactionPolicy, keepDeletedCells, maxversions, minVersions, datablockEncoding, storagePolicy, ttl, blockCachedEnabled, cacheBloomsOnWrite, cacheDataOnWrite, evictBlocksOnClose, prefetchBlocksOnOpen, newVersionsBehavior, isMobEnabled, mobCompactPartitionPolicy")))))),Object(o.b)("p",null,"HBase entities are created and de-duped in Atlas using unique attribute qualifiedName, whose value should be formatted as detailed below. Note that namespaceName, tableName and columnFamilyName should be in lower case."),Object(o.b)(i.a,{wrapLines:!0,language:"java",style:n.a,mdxType:"SyntaxHighlighter"},"hbase_namespace.qualifiedName:      <namespaceName>@<clusterName>\nhbase_table.qualifiedName:          <namespaceName>:<tableName>@<clusterName>\nhbase_column_family.qualifiedName:  <namespaceName>:<tableName>.<columnFamilyName>@<clusterName>"),Object(o.b)("h2",{id:"hbase-hook"},"HBase Hook"),Object(o.b)("p",null,"Atlas HBase hook registers with HBase master as a co-processor. On detecting changes to HBase namespaces/tables/column-families, Atlas hook updates the metadata in Atlas via Kafka notifications.\nFollow the instructions below to setup Atlas hook in HBase:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Register Atlas hook in hbase-site.xml by adding the following:")),Object(o.b)(i.a,{wrapLines:!0,language:"xml",style:n.a,mdxType:"SyntaxHighlighter"},"<property>\n<name>hbase.coprocessor.master.classes</name>\n<value>org.apache.atlas.hbase.hook.HBaseAtlasCoprocessor</value>\n</property>"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"untar apache-atlas-${project.version}-hbase-hook.tar.gz"),Object(o.b)("li",{parentName:"ul"},"cd apache-atlas-hbase-hook-${project.version}"),Object(o.b)("li",{parentName:"ul"},"Copy entire contents of folder apache-atlas-hbase-hook-${project.version}/hook/hbase to ",Object(o.b)("inlineCode",{parentName:"li"},"<atlas package>"),"/hook/hbase"),Object(o.b)("li",{parentName:"ul"},"Link Atlas hook jars in HBase classpath - 'ln -s ",Object(o.b)("inlineCode",{parentName:"li"},"<atlas package>"),"/hook/hbase/* ",Object(o.b)("inlineCode",{parentName:"li"},"<hbase-home>"),"/lib/'"),Object(o.b)("li",{parentName:"ul"},"Copy ",Object(o.b)("inlineCode",{parentName:"li"},"<atlas-conf>"),"/atlas-application.properties to the HBase conf directory.")),Object(o.b)("p",null,"The following properties in atlas-application.properties control the thread pool and notification details:"),Object(o.b)(i.a,{wrapLines:!0,language:"java",style:n.a,mdxType:"SyntaxHighlighter"},"atlas.hook.hbase.synchronous=false # whether to run the hook synchronously. false recommended to avoid delays in HBase operations. Default: false\natlas.hook.hbase.numRetries=3      # number of retries for notification failure. Default: 3\natlas.hook.hbase.queueSize=10000   # queue size for the threadpool. Default: 10000\natlas.cluster.name=primary # clusterName to use in qualifiedName of entities. Default: primary\natlas.kafka.zookeeper.connect=                    # Zookeeper connect URL for Kafka. Example: localhost:2181\natlas.kafka.zookeeper.connection.timeout.ms=30000 # Zookeeper connection timeout. Default: 30000\natlas.kafka.zookeeper.session.timeout.ms=60000    # Zookeeper session timeout. Default: 60000\natlas.kafka.zookeeper.sync.time.ms=20             # Zookeeper sync time. Default: 20"),Object(o.b)("p",null,'Other configurations for Kafka notification producer can be specified by prefixing the configuration name with "atlas.kafka.".\nFor list of configuration supported by Kafka producer, please refer to ',Object(o.b)("a",Object.assign({parentName:"p"},{href:"http://kafka.apache.org/documentation/#producerconfigs"}),"Kafka Producer Configs")),Object(o.b)("h2",{id:"notes"},"NOTES"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Only the namespace, table and column-family create/update/ delete operations are captured by Atlas HBase hook. Changes to columns are be captured.")),Object(o.b)("h2",{id:"importing-hbase-metadata"},"Importing HBase Metadata"),Object(o.b)("p",null,"Apache Atlas provides a command-line utility, import-hbase.sh, to import metadata of Apache HBase namespaces and tables into Apache Atlas.\nThis utility can be used to initialize Apache Atlas with namespaces/tables present in a Apache HBase cluster.\nThis utility supports importing metadata of a specific table, tables in a specific namespace or all tables."),Object(o.b)(i.a,{wrapLines:!0,language:"java",style:n.a,mdxType:"SyntaxHighlighter"},"Usage 1: <atlas package>/hook-bin/import-hbase.sh\nUsage 2: <atlas package>/hook-bin/import-hbase.sh [-n <namespace regex> OR --namespace <namespace regex>] [-t <table regex> OR --table <table regex>]\nUsage 3: <atlas package>/hook-bin/import-hbase.sh [-f <filename>]\n           File Format:\n             namespace1:tbl1\n             namespace1:tbl2\n             namespace2:tbl1"))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/Hook-HBase.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,a,t){"use strict";var s=t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");s.a.hljs.color="#37bb9b",a.a=s.a}}]);
//# sourceMappingURL=documents-hook-hook-h-base.48ed2560de6d8191c1a6.js.map