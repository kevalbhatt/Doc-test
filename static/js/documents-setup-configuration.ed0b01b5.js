(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./src/documents/Setup/Configuration.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return h});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o=t("./theme/styles/styled-colors.js"),r=t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js"),i=t("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),l={},c="wrapper";function h(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(n.b)(c,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"configuring-apache-atlas---application-properties"},"Configuring Apache Atlas - Application Properties"),Object(n.b)("p",null,"All configuration in Atlas uses java properties style configuration. The main configuration file is atlas-application.properties which is in the ",Object(n.b)("em",{parentName:"p"},"conf")," dir at the deployed location. It consists of the following sections:"),Object(n.b)("h2",{id:"graph-configs"},"Graph Configs"),Object(n.b)("h3",{id:"graph-persistence-engine---hbase"},"Graph Persistence engine - HBase"),Object(n.b)("p",null,"Set the following properties to configure ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/JanusGraph.html"}),"JanusGraph")," to use HBase as the persistence engine. Please refer to ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://docs.janusgraph.org/0.2.0/configuration.html#_hbase_caching"}),"link")," for more details."),Object(n.b)(i.a,{wrapLines:!0,language:"shell",style:r.a,mdxType:"SyntaxHighlighter"},"atlas.graph.storage.backend=hbase\natlas.graph.storage.hostname=<ZooKeeper Quorum>\natlas.graph.storage.hbase.table=atlas"),Object(n.b)("p",null,'If any further JanusGraph configuration needs to be setup, please prefix the property name with "atlas.graph.".'),Object(n.b)("p",null,"In addition to setting up configurations, please ensure that environment variable HBASE_CONF_DIR is setup to point to\nthe directory containing HBase configuration file hbase-site.xml."),Object(n.b)("h3",{id:"graph-index-search-engine"},"Graph Index Search Engine"),Object(n.b)("p",null,"An index search engine is required for ATLAS. This search engine runs separately from the ATLAS server and from the\nstorage backend. Only two search engines are currently supported: Solr and Elasticsearch. Pick the search engine\nbest suited for your environment and follow the configuration instructions below."),Object(n.b)("h4",{id:"graph-search-index---solr"},"Graph Search Index - Solr"),Object(n.b)("p",null,"Solr installation in Cloud mode is a prerequisite for Apache Atlas use. Set the following properties to configure JanusGraph to use Solr as the index search engine."),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:o.a,mdxType:"SyntaxHighlighter"},"atlas.graph.index.search.backend=solr5\natlas.graph.index.search.solr.mode=cloud\natlas.graph.index.search.solr.wait-searcher=true\n# ZK quorum setup for solr as comma separated value. Example: 10.1.6.4:2181,10.1.6.5:2181\natlas.graph.index.search.solr.zookeeper-url=\n# SolrCloud Zookeeper Connection Timeout. Default value is 60000 ms\natlas.graph.index.search.solr.zookeeper-connect-timeout=60000\n# SolrCloud Zookeeper Session Timeout. Default value is 60000 ms\natlas.graph.index.search.solr.zookeeper-session-timeout=60000"),Object(n.b)("h4",{id:"graph-search-index---elasticsearch-tech-preview"},"Graph Search Index - Elasticsearch (Tech Preview)"),Object(n.b)("p",null,"Elasticsearch is a prerequisite for Apache Atlas use. Set the following properties to configure JanusGraph to use Elasticsearch as the index search engine."),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"atlas.graph.index.search.backend=elasticsearch\natlas.graph.index.search.hostname=<hostname(s) of the Elasticsearch master nodes comma separated>\natlas.graph.index.search.elasticsearch.client-only=true"),Object(n.b)("h2",{id:"search-configs"},"Search Configs"),Object(n.b)("p",null,"Search APIs (DSL, basic search, full-text search) support pagination and have optional limit and offset arguments. Following configs are related to search pagination"),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"# Default limit used when limit is not specified in API\natlas.search.defaultlimit=100\n# Maximum limit allowed in API. Limits maximum results that can be fetched to make sure the atlas server doesn't run out of memory\natlas.search.maxlimit=10000"),Object(n.b)("h2",{id:"notification-configs"},"Notification Configs"),Object(n.b)("p",null,"Refer ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://kafka.apache.org/documentation.html#configuration"}),"http://kafka.apache.org/documentation.html#configuration")," for Kafka configuration. All Kafka configs should be prefixed with 'atlas.kafka.'"),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"\natlas.kafka.auto.commit.enable=false\n#Kafka servers. Example: localhost:6667\natlas.kafka.bootstrap.servers=\natlas.kafka.hook.group.id=atlas\n#Zookeeper connect URL for Kafka. Example: localhost:2181\natlas.kafka.zookeeper.connect=\natlas.kafka.zookeeper.connection.timeout.ms=30000\natlas.kafka.zookeeper.session.timeout.ms=60000\natlas.kafka.zookeeper.sync.time.ms=20\n#Setup the following configurations only in test deployments where Kafka is started within Atlas in embedded mode\n#atlas.notification.embedded=true\n#atlas.kafka.data={sys:atlas.home}/data/kafka\n#Setup the following two properties if Kafka is running in Kerberized mode.\n#atlas.notification.kafka.service.principal=kafka/_HOST@EXAMPLE.COM\n#atlas.notification.kafka.keytab.location=/etc/security/keytabs/kafka.service.keytab"),Object(n.b)("h2",{id:"client-configs"},"Client Configs"),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"atlas.client.readTimeoutMSecs=60000\natlas.client.connectTimeoutMSecs=60000\n# URL to access Atlas server. For example: http://localhost:21000\natlas.rest.address="),Object(n.b)("h2",{id:"security-properties"},"Security Properties"),Object(n.b)("h3",{id:"ssl-config"},"SSL config"),Object(n.b)("p",null,"The following property is used to toggle the SSL feature."),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"atlas.enableTLS=false"),Object(n.b)("h2",{id:"high-availability-properties"},"High Availability Properties"),Object(n.b)("p",null,"The following properties describe High Availability related configuration options:"),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"\n# Set the following property to true, to enable High Availability. Default = false.\natlas.server.ha.enabled=true\n# Specify the list of Atlas instances\natlas.server.ids=id1,id2\n# For each instance defined above, define the host and port on which Atlas server listens.\natlas.server.address.id1=host1.company.com:21000\natlas.server.address.id2=host2.company.com:31000\n# Specify Zookeeper properties needed for HA.\n# Specify the list of services running Zookeeper servers as a comma separated list.\natlas.server.ha.zookeeper.connect=zk1.company.com:2181,zk2.company.com:2181,zk3.company.com:2181\n# Specify how many times should connection try to be established with a Zookeeper cluster, in case of any connection issues.\natlas.server.ha.zookeeper.num.retries=3\n# Specify how much time should the server wait before attempting connections to Zookeeper, in case of any connection issues.\natlas.server.ha.zookeeper.retry.sleeptime.ms=1000\n# Specify how long a session to Zookeeper should last without inactiviy to be deemed as unreachable.\natlas.server.ha.zookeeper.session.timeout.ms=20000\n# Specify the scheme and the identity to be used for setting up ACLs on nodes created in Zookeeper for HA.\n# The format of these options is <scheme:identity>.\n# For more information refer to \nhttp://zookeeper.apache.org/doc/r3.2.2/zookeeperProgrammers.html#sc_ZooKeeperAccessControl\n# The 'acl' option allows to specify a scheme, identity pair to setup an ACL for.\natlas.server.ha.zookeeper.acl=sasl:client@comany.com\n# The 'auth' option specifies the authentication that should be used for connecting to Zookeeper.\natlas.server.ha.zookeeper.auth=sasl:client@company.com\n# Since Zookeeper is a shared service that is typically used by many components,\n# it is preferable for each component to set its znodes under a namespace.\n# Specify the namespace under which the znodes should be written. Default = /apache_atlas\natlas.server.ha.zookeeper.zkroot=/apache_atlas\n# Specify number of times a client should retry with an instance before selecting another active instance, or failing an operation.\natlas.client.ha.retries=4\n# Specify interval between retries for a client.\natlas.client.ha.sleep.interval.ms=5000"),Object(n.b)("h2",{id:"server-properties"},"Server Properties"),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"# Set the following property to true, to enable the setup steps to run on each server start. Default = false.\natlas.server.run.setup.on.start=false"),Object(n.b)("h2",{id:"performance-configuration-items"},"Performance configuration items"),Object(n.b)("p",null,"The following properties can be used to tune performance of Atlas under specific circumstances:"),Object(n.b)(i.a,{wrapLines:!0,language:"bash",style:r.a,mdxType:"SyntaxHighlighter"},"\n# The number of times Atlas code tries to acquire a lock (to ensure consistency) while committing a transaction.\n# This should be related to the amount of concurrency expected to be supported by the server. For e.g. with retries set to 10, upto 100 threads can concurrently create types in the Atlas system.\n# If this is set to a low value (default is 3), concurrent operations might fail with a PermanentLockingException.\natlas.graph.storage.lock.retries=10\n# Milliseconds to wait before evicting a cached entry. This should be > atlas.graph.storage.lock.wait-time x atlas.graph.storage.lock.retries\n# If this is set to a low value (default is 10000), warnings on transactions taking too long will occur in the Atlas application log.\natlas.graph.storage.cache.db-cache-time=120000\n# Minimum number of threads in the atlas web server\natlas.webserver.minthreads=10\n# Maximum number of threads in the atlas web server\natlas.webserver.maxthreads=100\n# Keepalive time in secs for the thread pool of the atlas web server\natlas.webserver.keepalivetimesecs=60\n# Queue size for the requests(when max threads are busy) for the atlas web server\natlas.webserver.queuesize=100"),Object(n.b)("h3",{id:"recording-performance-metrics"},"Recording performance metrics"),Object(n.b)("p",null,"To enable performance logs for various Atlas operations (like REST API calls, notification processing), setup the following in atlas-log4j.xml:"),Object(n.b)(i.a,{wrapLines:!0,language:"xml",style:r.a,mdxType:"SyntaxHighlighter"},'<appender name="perf_appender" class="org.apache.log4j.DailyRollingFileAppender">\n  <param name="File" value="/var/log/atlas/atlas_perf.log"/>\n  <param name="datePattern" value="\'.\'yyyy-MM-dd"/>\n  <param name="append" value="true"/>\n  <layout class="org.apache.log4j.PatternLayout">\n    <param name="ConversionPattern" value="%d|%t|%m%n"/>\n  </layout>\n</appender>\n <logger name="org.apache.atlas.perf" additivity="false">\n   <level value="debug"/>\n   <appender-ref ref="perf_appender"/>\n </logger>'))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Setup/Configuration.md"}}),h.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,a,t){"use strict";var s=t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");s.a.hljs.color="#37bb9b",a.a=s.a}}]);
//# sourceMappingURL=documents-setup-configuration.05ca3be26ee134d7ba95.js.map