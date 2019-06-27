(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/documents/Setup/InstallationSteps.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return o});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),r={},l="wrapper";function o(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(l,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"building--installing-apache-atlas"},"Building & Installing Apache Atlas"),Object(s.b)("h3",{id:"building-apache-atlas"},"Building Apache Atlas"),Object(s.b)("p",null,"Download Apache Atlas 1.0.0 release sources, apache-atlas-1.0.0-sources.tar.gz, from the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/Downloads.html"}),"downloads")," page.\nThen follow the instructions below to to build Apache Atlas."),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'tar xvfz apache-atlas-1.0.0-sources.tar.gz\ncd apache-atlas-sources-1.0.0/\nexport MAVEN_OPTS="-Xms2g -Xmx2g"\nmvn clean -DskipTests install\n')),Object(s.b)("h3",{id:"packaging-apache-atlas"},"Packaging Apache Atlas"),Object(s.b)("p",null,"To create Apache Atlas package for deployment in an environment having functional Apache HBase and Apache Solr instances, build with the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"mvn clean -DskipTests package -Pdist\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"NOTES:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Remove option '-DskipTests' to run unit and integration tests"),Object(s.b)("li",{parentName:"ul"},"To build a distribution without minified js,css file, build with ",Object(s.b)("em",{parentName:"li"},"skipMinify")," profile. By default js and css files are minified.")))),Object(s.b)("p",null,"Above will build Apache Atlas for an environment having functional HBase and Solr instances. Apache Atlas needs to be setup with the following to run in this environment:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'Configure atlas.graph.storage.hostname (see "Graph persistence engine - HBase" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section)."),Object(s.b)("li",{parentName:"ul"},'Configure atlas.graph.index.search.solr.zookeeper-url (see "Graph Search Index - Solr" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section)."),Object(s.b)("li",{parentName:"ul"},'Set HBASE_CONF_DIR to point to a valid Apache HBase config directory (see "Graph persistence engine - HBase" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section)."),Object(s.b)("li",{parentName:"ul"},'Create indices in Apache Solr (see "Graph Search Index - Solr" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section).")),Object(s.b)("h3",{id:"packaging-apache-atlas-with-embedded-apache-hbase--apache-solr"},"Packaging Apache Atlas with embedded Apache HBase & Apache Solr"),Object(s.b)("p",null,"To create Apache Atlas package that includes Apache HBase and Apache Solr, build with the embedded-hbase-solr profile as shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"mvn clean -DskipTests package -Pdist,embedded-hbase-solr\n")),Object(s.b)("p",null,"Using the embedded-hbase-solr profile will configure Apache Atlas so that an Apache HBase instance and an Apache Solr instance will be started and stopped along with the Apache Atlas server."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"NOTE: This distribution profile is only intended to be used for single node development not in production.")),Object(s.b)("h3",{id:"packaging-apache-atlas-with-embedded-apache-cassandra--apache-solr"},"Packaging Apache Atlas with embedded Apache Cassandra & Apache Solr"),Object(s.b)("p",null,"To create Apache Atlas package that includes Apache Cassandra and Apache Solr, build with the embedded-cassandra-solr profile as shown below:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"mvn clean package -Pdist,embedded-cassandra-solr\n")),Object(s.b)("p",null,"Using the embedded-cassandra-solr profile will configure Apache Atlas so that an Apache Cassandra instance and an Apache Solr instance will be started and stopped along with the Atlas server."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"NOTE: This distribution profile is only intended to be used for single node development not in production.")),Object(s.b)("h3",{id:"apache-atlas-package"},"Apache Atlas Package"),Object(s.b)("p",null,"Build will create following files, which are used to install Apache Atlas."),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"distro/target/apache-atlas-${project.version}-bin.tar.gz\ndistro/target/apache-atlas-${project.version}-hbase-hook.tar.gz\ndistro/target/apache-atlas-${project.version}-hive-hook.gz\ndistro/target/apache-atlas-${project.version}-kafka-hook.gz\ndistro/target/apache-atlas-${project.version}-sources.tar.gz\ndistro/target/apache-atlas-${project.version}-sqoop-hook.tar.gz\ndistro/target/apache-atlas-${project.version}-storm-hook.tar.gz\n")),Object(s.b)("h3",{id:"installing--running-apache-atlas"},"Installing & Running Apache Atlas"),Object(s.b)("h4",{id:"installing-apache-atlas"},"Installing Apache Atlas"),Object(s.b)("p",null,"From the directory you would like Apache Atlas to be installed, run the following commands:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"tar -xzvf apache-atlas-${project.version}-server.tar.gz\ncd atlas-${project.version}\n")),Object(s.b)("h4",{id:"running-apache-atlas-with-local-apache-hbase--apache-solr"},"Running Apache Atlas with Local Apache HBase & Apache Solr"),Object(s.b)("p",null,"To run Apache Atlas with local Apache HBase & Apache Solr instances that are started/stopped along with Atlas start/stop, run following commands:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"export MANAGE_LOCAL_HBASE=true\nexport MANAGE_LOCAL_SOLR=true\n\nbin/atlas_start.py\n")),Object(s.b)("h4",{id:"using-apache-atlas"},"Using Apache Atlas"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"To verify if Apache Atlas server is up and running, run curl command as shown below:")),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'  curl -u username:password http://localhost:21000/api/atlas/admin/version\n\n  {"Description":"Metadata Management and Data Governance Platform over Hadoop","Version":"1.0.0","Name":"apache-atlas"}\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Run quick start to load sample model and data")),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"  bin/quick_start.py\n  Enter username for atlas :-\n  Enter password for atlas :-\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Access Apache Atlas UI using a browser: ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"http://localhost:21000"}),"http://localhost:21000"))),Object(s.b)("h4",{id:"stopping-apache-atlas-server"},"Stopping Apache Atlas Server"),Object(s.b)("p",null,"To stop Apache Atlas, run following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"bin/atlas_stop.py\n")),Object(s.b)("h3",{id:"configuring-apache-atlas"},"Configuring Apache Atlas"),Object(s.b)("p",null,"By default config directory used by Apache Atlas is ",Object(s.b)("em",{parentName:"p"},"{package dir}/conf"),". To override this set environment variable ATLAS_CONF to the path of the conf dir."),Object(s.b)("p",null,"Environment variables needed to run Apache Atlas can be set in ",Object(s.b)("em",{parentName:"p"},"atlas-env.sh")," file in the conf directory. This file will be sourced by Apache Atlas scripts before any commands are executed. The following environment variables are available to set."),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"# The java implementation to use. If JAVA_HOME is not found we expect java and jar to be in path\n#export JAVA_HOME=\n\n# any additional java opts you want to set. This will apply to both client and server operations\n#export ATLAS_OPTS=\n\n# any additional java opts that you want to set for client only\n#export ATLAS_CLIENT_OPTS=\n\n# java heap size we want to set for the client. Default is 1024MB\n#export ATLAS_CLIENT_HEAP=\n\n# any additional opts you want to set for atlas service.\n#export ATLAS_SERVER_OPTS=\n\n# java heap size we want to set for the atlas server. Default is 1024MB\n#export ATLAS_SERVER_HEAP=\n\n# What is is considered as atlas home dir. Default is the base location of the installed software\n#export ATLAS_HOME_DIR=\n\n# Where log files are stored. Defatult is logs directory under the base install location\n#export ATLAS_LOG_DIR=\n\n# Where pid files are stored. Defatult is logs directory under the base install location\n#export ATLAS_PID_DIR=\n\n# Where do you want to expand the war file. By Default it is in /server/webapp dir under the base install dir.\n#export ATLAS_EXPANDED_WEBAPP_DIR=\n")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Settings to support large number of metadata objects")),Object(s.b)("p",null,"If you plan to store large number of metadata objects, it is recommended that you use values tuned for better GC performance of the JVM."),Object(s.b)("p",null,"The following values are common server side options:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'export ATLAS_SERVER_OPTS="-server -XX:SoftRefLRUPolicyMSPerMB=0 -XX:+CMSClassUnloadingEnabled -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+PrintTenuringDistribution -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=dumps/atlas_server.hprof -Xloggc:logs/gc-worker.log -verbose:gc -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=1m -XX:+PrintGCDetails -XX:+PrintHeapAtGC -XX:+PrintGCTimeStamps"\n')),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"=-XX:SoftRefLRUPolicyMSPerMB"),"= option was found to be particularly helpful to regulate GC performance for query heavy workloads with many concurrent users."),Object(s.b)("p",null,"The following values are recommended for JDK 8:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'export ATLAS_SERVER_HEAP="-Xms15360m -Xmx15360m -XX:MaxNewSize=5120m -XX:MetaspaceSize=100M -XX:MaxMetaspaceSize=512m"\n')),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"NOTE for Mac OS users"),"\nIf you are using a Mac OS, you will need to configure the ATLAS_SERVER_OPTS (explained above)."),Object(s.b)("p",null,"In ",Object(s.b)("em",{parentName:"p"},"{package dir}/conf/atlas-env.sh")," uncomment the following line"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),"#export ATLAS_SERVER_OPTS=\n")),Object(s.b)("p",null,"and change it to look as below"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'export ATLAS_SERVER_OPTS="-Djava.awt.headless=true -Djava.security.krb5.realm= -Djava.security.krb5.kdc="\n')),Object(s.b)("h4",{id:"configuring-apache-hbase-as-the-storage-backend-for-the-graph-repository"},"Configuring Apache HBase as the storage backend for the Graph Repository"),Object(s.b)("p",null,'By default, Apache Atlas uses JanusGraph as the graph repository and is the only graph repository implementation available currently. Apache HBase versions currently supported are 1.1.x. For configuring Apache Atlas graph persistence on Apache HBase, please see "Graph persistence engine - HBase" in the ',Object(s.b)("a",Object.assign({parentName:"p"},{href:"Configuration"}),"Configuration")," section for more details."),Object(s.b)("p",null,"Apache HBase tables used by Apache Atlas can be set using the following configurations:"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"atlas.graph.storage.hbase.table=atlas\natlas.audit.hbase.tablename=apache_atlas_entity_audit\n")),Object(s.b)("h4",{id:"configuring-apache-solr-as-the-indexing-backend-for-the-graph-repository"},"Configuring Apache Solr as the indexing backend for the Graph Repository"),Object(s.b)("p",null,"By default, Apache Atlas uses JanusGraph as the graph repository and is the only graph repository implementation available currently. For configuring JanusGraph to work with Apache Solr, please follow the instructions below"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Install Apache Solr if not already running. The version of Apache Solr supported is 5.5.1. Could be installed from ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://archive.apache.org/dist/lucene/solr/5.5.1/solr-5.5.1.tgz"}),"http://archive.apache.org/dist/lucene/solr/5.5.1/solr-5.5.1.tgz"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Start Apache Solr in cloud mode."))),Object(s.b)("p",null,'SolrCloud mode uses a ZooKeeper Service as a highly available, central location for cluster management. For a small cluster, running with an existing ZooKeeper quorum should be fine. For larger clusters, you would want to run separate multiple ZooKeeper quorum with at least 3 servers.\nNote: Apache Atlas currently supports Apache Solr in "cloud" mode only. "http" mode is not supported. For more information, refer Apache Solr documentation - ',Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/solr/SolrCloud"}),"https://cwiki.apache.org/confluence/display/solr/SolrCloud")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"For e.g., to bring up an Apache Solr node listening on port 8983 on a machine, you can use the command:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{}),"$SOLR_HOME/bin/solr start -c -z <zookeeper_host:port> -p 8983\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Run the following commands from SOLR_BIN (e.g. $SOLR_HOME/bin) directory to create collections in Apache Solr corresponding to the indexes that Apache Atlas uses. In the case that the Apache Atlas and Apache Solr instances are on 2 different hosts, first copy the required configuration files from ATLAS_HOME/conf/solr on the Apache Atlas instance host to Apache Solr instance host. SOLR_CONF in the below mentioned commands refer to the directory where Apache Solr configuration files have been copied to on Apache Solr host:"))),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),"  $SOLR_BIN/solr create -c vertex_index -d SOLR_CONF -shards #numShards -replicationFactor #replicationFactor\n  $SOLR_BIN/solr create -c edge_index -d SOLR_CONF -shards #numShards -replicationFactor #replicationFactor\n  $SOLR_BIN/solr create -c fulltext_index -d SOLR_CONF -shards #numShards -replicationFactor #replicationFactor\n")),Object(s.b)("p",null,"  Note: If numShards and replicationFactor are not specified, they default to 1 which suffices if you are trying out solr with ATLAS on a single node instance.\nOtherwise specify numShards according to the number of hosts that are in the Solr cluster and the maxShardsPerNode configuration.\nThe number of shards cannot exceed the total number of Solr nodes in your !SolrCloud cluster."),Object(s.b)("p",null,"  The number of replicas (replicationFactor) can be set according to the redundancy required."),Object(s.b)("p",null,"  Also note that Apache Solr will automatically be called to create the indexes when Apache Atlas server is started if the\nSOLR_BIN and SOLR_CONF environment variables are set and the search indexing backend is set to 'solr5'."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Change ATLAS configuration to point to Apache Solr instance setup. Please make sure the following configurations are set to the below values in ATLAS_HOME/conf/atlas-application.properties")),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"})," atlas.graph.index.search.backend=solr\n atlas.graph.index.search.solr.mode=cloud\n atlas.graph.index.search.solr.zookeeper-url=<the ZK quorum setup for solr as comma separated value> eg: 10.1.6.4:2181,10.1.6.5:2181\n atlas.graph.index.search.solr.zookeeper-connect-timeout=<SolrCloud Zookeeper Connection Timeout>. Default value is 60000 ms\n atlas.graph.index.search.solr.zookeeper-session-timeout=<SolrCloud Zookeeper Session Timeout>. Default value is 60000 ms\n")),Object(s.b)("p",null,"For more information on JanusGraph solr configuration , please refer ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://docs.janusgraph.org/0.2.0/solr.html"}),"http://docs.janusgraph.org/0.2.0/solr.html")),Object(s.b)("p",null,"Pre-requisites for running Apache Solr in cloud mode"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Memory - Apache Solr is both memory and CPU intensive. Make sure the server running Apache Solr has adequate memory, CPU and disk.\nApache Solr works well with 32GB RAM. Plan to provide as much memory as possible to Apache Solr process"),Object(s.b)("li",{parentName:"ul"},"Disk - If the number of entities that need to be stored are large, plan to have at least 500 GB free space in the volume where Apache Solr is going to store the index data"),Object(s.b)("li",{parentName:"ul"},"!SolrCloud has support for replication and sharding. It is highly recommended to use !SolrCloud with at least two Apache Solr nodes running on different servers with replication enabled.\nIf using !SolrCloud, then you also need !ZooKeeper installed and configured with 3 or 5 !ZooKeeper nodes")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Configuring Elasticsearch as the indexing backend for the Graph Repository (Tech Preview)")),Object(s.b)("p",null,"By default, Apache Atlas uses ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://atlas.apache.org/JanusGraph.html"}),"JanusGraph")," as the graph repository and is the only graph repository implementation available currently. For configuring ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://atlas.apache.org/JanusGraph.html"}),"JanusGraph")," to work with Elasticsearch, please follow the instructions below"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Install an Elasticsearch cluster. The version currently supported is 5.6.4, and can be acquired from: ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.4.tar.gz"}),"https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.4.tar.gz"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"For simple testing a single Elasticsearch node can be started by using the 'elasticsearch' command in the bin directory of the Elasticsearch distribution.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Change Apache Atlas configuration to point to the Elasticsearch instance setup. Please make sure the following configurations are set to the below values in ATLAS_HOME/conf/atlas-application.properties"))),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"})," atlas.graph.index.search.backend=elasticsearch\n atlas.graph.index.search.hostname=<the hostname(s) of the Elasticsearch master nodes comma separated>\n atlas.graph.index.search.elasticsearch.client-only=true\n")),Object(s.b)("p",null,"For more information on JanusGraph configuration for elasticsearch, please refer ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://docs.janusgraph.org/0.2.0/elasticsearch.html"}),"http://docs.janusgraph.org/0.2.0/elasticsearch.html")),Object(s.b)("h4",{id:"configuring-kafka-topics"},"Configuring Kafka Topics"),Object(s.b)("p",null,"Apache Atlas uses Apache Kafka to ingest metadata from other components at runtime. This is described in the [","[Architecture][Architecture page]","]\nin more detail. Depending on the configuration of Apache Kafka, sometimes you might need to setup the topics explicitly before\nusing Apache Atlas. To do so, Apache Atlas provides a script =bin/atlas_kafka_setup.py= which can be run from Apache Atlas server. In some\nenvironments, the hooks might start getting used first before Apache Atlas server itself is setup. In such cases, the topics\ncan be run on the hosts where hooks are installed using a similar script =hook-bin/atlas_kafka_setup_hook.py=. Both these\nuse configuration in =atlas-application.properties= for setting up the topics. Please refer to the [","[Configuration][Configuration page]","]\nfor these details."),Object(s.b)("h4",{id:"setting-up-apache-atlas"},"Setting up Apache Atlas"),Object(s.b)("p",null,"There are a few steps that setup dependencies of Apache Atlas. One such example is setting up the JanusGraph schema in the storage backend of choice. In a simple single server setup, these are automatically setup with default configuration when the server first accesses these dependencies."),Object(s.b)("p",null,"However, there are scenarios when we may want to run setup steps explicitly as one time operations. For example, in a multiple server scenario using ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"HighAvailability"}),"High Availability"),", it is preferable to run setup steps from one of the server instances the first time, and then start the services."),Object(s.b)("p",null,"To run these steps one time, execute the command =bin/atlas_start.py -setup= from a single Apache Atlas server instance."),Object(s.b)("p",null,"However, Apache Atlas server does take care of parallel executions of the setup steps. Also, running the setup steps multiple times is idempotent. Therefore, if one chooses to run the setup steps as part of server startup, for convenience, then they should enable the configuration option =atlas.server.run.setup.on.start= by defining it with the value =true= in the =atlas-application.properties= file."),Object(s.b)("h3",{id:"examples-calling-apache-atlas-rest-apis"},"Examples: calling Apache Atlas REST APIs"),Object(s.b)("p",null,"Here are few examples of calling Apache Atlas REST APIs via curl command."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"List the types in the repository")),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),'  curl -u username:password http://localhost:21000/api/atlas/v2/types/typedefs/headers\n  [ {"guid":"fa421be8-c21b-4cf8-a226-fdde559ad598","name":"Referenceable","category":"ENTITY"},\n    {"guid":"7f3f5712-521d-450d-9bb2-ba996b6f2a4e","name":"Asset","category":"ENTITY"},\n    {"guid":"84b02fa0-e2f4-4cc4-8b24-d2371cd00375","name":"DataSet","category":"ENTITY"},\n    {"guid":"f93975d5-5a5c-41da-ad9d-eb7c4f91a093","name":"Process","category":"ENTITY"},\n    {"guid":"79dcd1f9-f350-4f7b-b706-5bab416f8206","name":"Infrastructure","category":"ENTITY"}\n  ]\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"List the instances for a given type")),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),'  curl -u username:password http://localhost:21000/api/atlas/v2/search/basic?typeName=hive_db\n  {\n    "queryType":"BASIC",\n    "searchParameters":{\n      "typeName":"hive_db",\n      "excludeDeletedEntities":false,\n      "includeClassificationAttributes":false,\n      "includeSubTypes":true,\n      "includeSubClassifications":true,\n      "limit":100,\n      "offset":0\n    },\n    "entities":[\n      {\n        "typeName":"hive_db",\n        "guid":"5d900c19-094d-4681-8a86-4eb1d6ffbe89",\n        "status":"ACTIVE",\n        "displayText":"default",\n        "classificationNames":[],\n        "attributes":{\n          "owner":"public",\n          "createTime":null,\n          "qualifiedName":"default@cl1",\n          "name":"default",\n          "description":"Default Hive database"\n        }\n      },\n      {\n        "typeName":"hive_db",\n        "guid":"3a0b14b0-ab85-4b65-89f2-e418f3f7f77c",\n        "status":"ACTIVE",\n        "displayText":"finance",\n        "classificationNames":[],\n        "attributes":{\n          "owner":"hive",\n          "createTime":null,\n          "qualifiedName":"finance@cl1",\n          "name":"finance",\n          "description":null\n        }\n      }\n    ]\n  }\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Search for entities")),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{}),'  curl -u username:password http://localhost:21000/api/atlas/v2/search/dsl?query=hive_db%20where%20name=\'default\'\n    {\n      "queryType":"DSL",\n      "queryText":"hive_db where name=\'default\'",\n      "entities":[\n        {\n          "typeName":"hive_db",\n          "guid":"5d900c19-094d-4681-8a86-4eb1d6ffbe89",\n          "status":"ACTIVE",\n          "displayText":"default",\n          "classificationNames":[],\n          "attributes":{\n            "owner":"public",\n            "createTime":null,\n            "qualifiedName":"default@cl1",\n            "name":"default",\n            "description":\n            "Default Hive database"\n          }\n        }\n      ]\n    }\n')),Object(s.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(s.b)("h4",{id:"setup-issues"},"Setup issues"),Object(s.b)("p",null,"If the setup of Apache Atlas service fails due to any reason, the next run of setup (either by an explicit invocation of\n=atlas_start.py -setup= or by enabling the configuration option =atlas.server.run.setup.on.start=) will fail with\na message such as =A previous setup run may not have completed cleanly.=. In such cases, you would need to manually\nensure the setup can run and delete the Zookeeper node at =/apache_atlas/setup_in_progress= before attempting to\nrun setup again."),Object(s.b)("p",null,"If the setup failed due to Apache HBase schema setup errors, it may be necessary to repair Apache HBase schema. If no\ndata has been stored, one can also disable and drop the Apache HBase tables used by Apache Atlas and run setup again."))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Setup/InstallationSteps.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-setup-installation-steps.6d33babde259c5d45092.js.map