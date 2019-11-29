(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/documents/HighAvailability.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),o=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),r={},l="wrapper";function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.mdx)(l,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"fault-tolerance-and-high-availability-options"},"Fault Tolerance and High Availability Options"),Object(n.mdx)("h2",{id:"introduction"},"Introduction"),Object(n.mdx)("p",null,"Apache Atlas uses and interacts with a variety of systems to provide metadata management and data lineage to data\nadministrators. By choosing and configuring these dependencies appropriately, it is possible to achieve a high degree\nof service availability with Atlas. This document describes the state of high availability support in Atlas,\nincluding its capabilities and current limitations, and also the configuration required for achieving this level of\nhigh availability."),Object(n.mdx)("p",null,Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"#/Architecture"}),"The architecture page")," in the wiki gives an overview of the various components that make up Atlas.\nThe options mentioned below for various components derive context from the above page, and would be worthwhile to\nreview before proceeding to read this page."),Object(n.mdx)("h2",{id:"atlas-web-service"},"Atlas Web Service"),Object(n.mdx)("p",null,"Currently, the Atlas Web Service has a limitation that it can only have one active instance at a time. In earlier\nreleases of Atlas, a backup instance could be provisioned and kept available. However, a manual failover was\nrequired to make this backup instance active."),Object(n.mdx)("p",null,"From this release, Atlas will support multiple instances of the Atlas Web service in an active/passive configuration\nwith automated failover. This means that users can deploy and start multiple instances of the Atlas Web Service on\ndifferent physical hosts at the same time. One of these instances will be automatically selected as an 'active'\ninstance to service user requests. The others will automatically be deemed 'passive'. If the 'active' instance\nbecomes unavailable either because it is deliberately stopped, or due to unexpected failures, one of the other\ninstances will automatically be elected as an 'active' instance and start to service user requests."),Object(n.mdx)("p",null,"An 'active' instance is the only instance that can respond to user requests correctly. It can create, delete, modify\nor respond to queries on metadata objects. A 'passive' instance will accept user requests, but will redirect them\nusing HTTP redirect to the currently known 'active' instance. Specifically, a passive instance will not itself\nrespond to any queries on metadata objects. However, all instances (both active and passive), will respond to admin\nrequests that return information about that instance."),Object(n.mdx)("p",null,"When configured in a High Availability mode, users can get the following operational benefits:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Uninterrupted service during maintenance intervals"),": If an active instance of the Atlas Web Service needs to be brought down for maintenance, another instance would automatically become active and can service requests."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Uninterrupted service in event of unexpected failures"),": If an active instance of the Atlas Web Service fails due to software or hardware errors, another instance would automatically become active and can service requests.")),Object(n.mdx)("p",null,"In the following sub-sections, we describe the steps required to setup High Availability for the Atlas Web Service.\nWe also describe how the deployment and client can be designed to take advantage of this capability.\nFinally, we describe a few details of the underlying implementation."),Object(n.mdx)("h3",{id:"setting-up-the-high-availability-feature-in-atlas"},"Setting up the High Availability feature in Atlas"),Object(n.mdx)("p",null,"The following pre-requisites must be met for setting up the High Availability feature."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Ensure that you install Apache Zookeeper on a cluster of machines (a minimum of 3 servers is recommended for production)."),Object(n.mdx)("li",{parentName:"ul"},"Select 2 or more physical machines to run the Atlas Web Service instances on. These machines define what we refer to as a 'server ensemble' for Atlas.")),Object(n.mdx)("p",null,"To setup High Availability in Atlas, a few configuration options must be defined in the ",Object(n.mdx)("inlineCode",{parentName:"p"},"atlas-application.properties"),"\nfile. While the complete list of configuration items are defined in the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"#/Configuration"}),"Configuration Page"),", this\nsection lists a few of the main options."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"High Availability is an optional feature in Atlas. Hence, it must be enabled by setting the configuration option ",Object(n.mdx)("inlineCode",{parentName:"li"},"atlas.server.ha.enabled")," to true.")),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Next, define a list of identifiers, one for each physical machine you have selected for the Atlas Web Service instance. These identifiers can be simple strings like ",Object(n.mdx)("inlineCode",{parentName:"li"},"id1"),", ",Object(n.mdx)("inlineCode",{parentName:"li"},"id2")," etc. They should be unique and should not contain a comma.")),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Define a comma separated list of these identifiers as the value of the option ",Object(n.mdx)("inlineCode",{parentName:"li"},"atlas.server.ids"),".")),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"For each physical machine, list the IP Address/hostname and port as the value of the configuration ",Object(n.mdx)("inlineCode",{parentName:"li"},"atlas.server.address.id"),", where ",Object(n.mdx)("inlineCode",{parentName:"li"},"id")," refers to the identifier string for this physical machine.",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"For e.g., if you have selected 2 machines with hostnames ",Object(n.mdx)("inlineCode",{parentName:"li"},"host1.company.com")," and ",Object(n.mdx)("inlineCode",{parentName:"li"},"host2.company.com"),", you can define the configuration options as below:")))),Object(n.mdx)(o.a,{wrapLines:!0,language:"java",style:s.a,mdxType:"SyntaxHighlighter"},"atlas.server.ids=id1,id2\natlas.server.address.id1=host1.company.com:21000\natlas.server.address.id2=host2.company.com:21000"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Define the Zookeeper quorum which will be used by the Atlas High Availability feature.")),Object(n.mdx)(o.a,{wrapLines:!0,language:"java",style:s.a,mdxType:"SyntaxHighlighter"},"atlas.server.ha.zookeeper.connect=zk1.company.com:2181,zk2.company.com:2181,zk3.company.com:2181"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"You can review other configuration options that are defined for the High Availability feature, and set them up as desired in the ",Object(n.mdx)("inlineCode",{parentName:"li"},"atlas-application.properties")," file."),Object(n.mdx)("li",{parentName:"ul"},"For production environments, the components that Atlas depends on must also be set up in High Availability mode. This is described in detail in the following sections. Follow those instructions to setup and configure them."),Object(n.mdx)("li",{parentName:"ul"},"Install the Atlas software on the selected physical machines."),Object(n.mdx)("li",{parentName:"ul"},"Copy the ",Object(n.mdx)("inlineCode",{parentName:"li"},"atlas-application.properties")," file created using the steps above to the configuration directory of all the machines."),Object(n.mdx)("li",{parentName:"ul"},"Start the dependent components."),Object(n.mdx)("li",{parentName:"ul"},"Start each instance of the Atlas Web Service.")),Object(n.mdx)("p",null,"To verify that High Availability is working, run the following script on each of the instances where Atlas Web Service\nis installed."),Object(n.mdx)(o.a,{wrapLines:!0,language:"java",style:s.a,mdxType:"SyntaxHighlighter"},"$ATLAS_HOME/bin/atlas_admin.py -status"),"This script can print one of the values below as response:",Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"ACTIVE"),": This instance is active and can respond to user requests."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"PASSIVE"),": This instance is PASSIVE. It will redirect any user requests it receives to the current active instance."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"BECOMING_ACTIVE"),": This would be printed if the server is transitioning to become an ACTIVE instance. The server cannot service any metadata user requests in this state."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"BECOMING_PASSIVE"),": This would be printed if the server is transitioning to become a PASSIVE instance. The server cannot service any metadata user requests in this state.")),Object(n.mdx)("p",null,"Under normal operating circumstances, only one of these instances should print the value ",Object(n.mdx)("em",{parentName:"p"},"ACTIVE")," as response to\nthe script, and the others would print ",Object(n.mdx)("em",{parentName:"p"},"PASSIVE"),"."),Object(n.mdx)("h3",{id:"configuring-clients-to-use-the-high-availability-feature"},"Configuring clients to use the High Availability feature"),Object(n.mdx)("p",null,"The Atlas Web Service can be accessed in two ways:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Using the Atlas Web UI"),": This is a browser based client that can be used to query the metadata stored in Atlas."),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("strong",{parentName:"li"},"Using the Atlas REST API"),": As Atlas exposes a RESTful API, one can use any standard REST client including libraries in other applications. In fact, Atlas ships with a client called AtlasClient that can be used as an example to build REST client access.")),Object(n.mdx)("p",null,"In order to take advantage of the High Availability feature in the clients, there are two options possible."),Object(n.mdx)("h4",{id:"using-an-intermediate-proxy"},"Using an intermediate proxy"),Object(n.mdx)("p",null,"The simplest solution to enable highly available access to Atlas is to install and configure some intermediate proxy\nthat has a capability to transparently switch services based on status. One such proxy solution is ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"http://www.haproxy.org/"}),"HAProxy"),"."),Object(n.mdx)("p",null,"Here is an example HAProxy configuration that can be used. Note this is provided for illustration only, and not as a\nrecommended production configuration. For that, please refer to the HAProxy documentation for appropriate instructions."),Object(n.mdx)(o.a,{wrapLines:!0,language:"java",style:s.a,mdxType:"SyntaxHighlighter"},"frontend atlas_fe\n  bind *:41000\n  default_backend atlas_be\nbackend atlas_be\n  mode http\n  option httpchk get /api/atlas/admin/status\n  http-check expect string ACTIVE\n  balance roundrobin\n  server host1_21000 host1:21000 check\n  server host2_21000 host2:21000 check backup\nlisten atlas\n  bind localhost:42000"),Object(n.mdx)("p",null,"The above configuration binds HAProxy to listen on port 41000 for incoming client connections. It then routes\nthe connections to either of the hosts host1 or host2 depending on a HTTP status check. The status check is\ndone using a HTTP GET on the REST URL ",Object(n.mdx)("inlineCode",{parentName:"p"},"/api/atlas/admin/status"),", and is deemed successful only if the HTTP response\ncontains the string ACTIVE."),Object(n.mdx)("h4",{id:"using-automatic-detection-of-active-instance"},"Using automatic detection of active instance"),Object(n.mdx)("p",null,"If one does not want to setup and manage a separate proxy, then the other option to use the High Availability\nfeature is to build a client application that is capable of detecting status and retrying operations. In such a\nsetting, the client application can be launched with the URLs of all Atlas Web Service instances that form the\nensemble. The client should then call the REST URL ",Object(n.mdx)("inlineCode",{parentName:"p"},"/api/atlas/admin/status")," on each of these to determine which is\nthe active instance. The response from the Active instance would be of the form ",Object(n.mdx)("inlineCode",{parentName:"p"},"{Status:ACTIVE}"),". Also, when the\nclient faces any exceptions in the course of an operation, it should again determine which of the remaining URLs\nis active and retry the operation."),Object(n.mdx)("p",null,"The AtlasClient class that ships with Atlas can be used as an example client library that implements the logic\nfor working with an ensemble and selecting the right Active server instance."),Object(n.mdx)("p",null,"Utilities in Atlas, like ",Object(n.mdx)("inlineCode",{parentName:"p"},"quick_start.py")," and ",Object(n.mdx)("inlineCode",{parentName:"p"},"import-hive.sh")," can be configured to run with multiple server\nURLs. When launched in this mode, the AtlasClient automatically selects and works with the current active instance.\nIf a proxy is set up in between, then its address can be used when running quick_start.py or import-hive.sh."),Object(n.mdx)("h3",{id:"implementation-details-of-atlas-high-availability"},"Implementation Details of Atlas High Availability"),Object(n.mdx)("p",null,"The Atlas High Availability work is tracked under the master JIRA\n",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://issues.apache.org/jira/browse/ATLAS-510"}),"ATLAS-510"),".\nThe JIRAs filed under it have detailed information about how the High Availability feature has been implemented.\nAt a high level the following points can be called out:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"The automatic selection of an Active instance, as well as automatic failover to a new Active instance happen through a leader election algorithm."),Object(n.mdx)("li",{parentName:"ul"},"For leader election, we use the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"http://curator.apache.org/curator-recipes/leader-latch.html"}),"Leader Latch Recipe")," of ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"http://curator.apache.org"}),"Apache Curator")),Object(n.mdx)("li",{parentName:"ul"},"The Active instance is the only one which initializes, modifies or reads state in the backend stores to keep them consistent."),Object(n.mdx)("li",{parentName:"ul"},"Also, when an instance is elected as Active, it refreshes any cached information from the backend stores to get up to date."),Object(n.mdx)("li",{parentName:"ul"},"A servlet filter ensures that only the active instance services user requests. If a passive instance receives these requests, it automatically redirects them to the current active instance.")),Object(n.mdx)("h2",{id:"metadata-store"},"Metadata Store"),Object(n.mdx)("p",null,"As described above, Atlas uses JanusGraph to store the metadata it manages. By default, Atlas uses a standalone HBase\ninstance as the backing store for JanusGraph. In order to provide HA for the metadata store, we recommend that Atlas be\nconfigured to use distributed HBase as the backing store for JanusGraph.  Doing this implies that you could benefit from the\nHA guarantees HBase provides. In order to configure Atlas to use HBase in HA mode, do the following:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Choose an existing HBase cluster that is set up in HA mode to configure in Atlas (OR) Set up a new HBase cluster in ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"http://hbase.apache.org/book.html#quickstart_fully_distributed"}),"HA mode"),".",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"If setting up HBase for Atlas, please following instructions listed for setting up HBase in the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"#/Installation"}),"Installation Steps"),"."))),Object(n.mdx)("li",{parentName:"ul"},"We recommend using more than one HBase masters (at least 2) in the cluster on different physical hosts that use Zookeeper for coordination to provide redundancy and high availability of HBase.",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"Refer to the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"#/Configuration"}),"Configuration page")," for the options to configure in atlas.properties to setup Atlas with HBase.")))),Object(n.mdx)("h2",{id:"index-store"},"Index Store"),Object(n.mdx)("p",null,"As described above, Atlas indexes metadata through JanusGraph to support full text search queries. In order to provide HA\nfor the index store, we recommend that Atlas be configured to use Solr or Elasticsearch as the backing index store for JanusGraph."),Object(n.mdx)("h3",{id:"solr"},"Solr"),Object(n.mdx)("p",null,"In order to configure Atlas to use Solr in HA mode, do the following:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Choose an existing SolrCloud cluster setup in HA mode to configure in Atlas (OR) Set up a new ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://cwiki.apache.org/confluence/display/solr/SolrCloud"}),"SolrCloud cluster"),".",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"Ensure Solr is brought up on at least 2 physical hosts for redundancy, and each host runs a Solr node."),Object(n.mdx)("li",{parentName:"ul"},"We recommend the number of replicas to be set to at least 2 for redundancy."))),Object(n.mdx)("li",{parentName:"ul"},"Create the SolrCloud collections required by Atlas, as described in ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"#/Installation"}),"Installation Steps")),Object(n.mdx)("li",{parentName:"ul"},"Refer to the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"#/Configuration"}),"Configuration page")," for the options to configure in atlas.properties to setup Atlas with Solr.")),Object(n.mdx)("h3",{id:"elasticsearch--tech-preview"},"Elasticsearch  (Tech Preview)"),Object(n.mdx)("p",null,"In order to configure Atlas to use Elasticsearch in HA mode, do the following:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Choose an existing Elasticsearch cluster setup, (OR) setup a new cluster ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/setup.html"}),"Elasticsearch cluster"),".",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"Ensure that Elasticsearch is brought up on at least five physical hosts for redundancy."),Object(n.mdx)("li",{parentName:"ul"},"A replica count of 3 is recommended"))),Object(n.mdx)("li",{parentName:"ul"},"Refer to the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"#/Configuration"}),"Configuration page")," for the options to configure in atlas.properties to setup Atlas with Elasticsearch.")),Object(n.mdx)("h2",{id:"notification-server"},"Notification Server"),Object(n.mdx)("p",null,"Metadata notification events from Hooks are sent to Atlas by writing them to a Kafka topic called ",Object(n.mdx)("strong",{parentName:"p"},"ATLAS_HOOK"),". Similarly, events from\nAtlas to other integrating components like Ranger, are written to a Kafka topic called ",Object(n.mdx)("strong",{parentName:"p"},"ATLAS_ENTITIES"),". Since Kafka\npersists these messages, the events will not be lost even if the consumers are down as the events are being sent. In\naddition, we recommend Kafka is also setup for fault tolerance so that it has higher availability guarantees. In order\nto configure Atlas to use Kafka in HA mode, do the following:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Choose an existing Kafka cluster set up in HA mode to configure in Atlas (OR) Set up a new Kafka cluster.")),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"We recommend that there are more than one Kafka brokers in the cluster on different physical hosts that use Zookeeper for coordination to provide redundancy and high availability of Kafka.",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"Setup at least 2 physical hosts for redundancy, each hosting a Kafka broker.")))),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Set up Kafka topics for Atlas usage:",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"The number of partitions for the ATLAS topics should be set to 1 (numPartitions)"),Object(n.mdx)("li",{parentName:"ul"},"Decide number of replicas for Kafka topic: Set this to at least 2 for redundancy."),Object(n.mdx)("li",{parentName:"ul"},"Run the following commands:")))),Object(n.mdx)(o.a,{wrapLines:!0,language:"java",style:s.a,mdxType:"SyntaxHighlighter"},"$KAFKA_HOME/bin/kafka-topics.sh --create --zookeeper <list of zookeeper host:port entries> --topic ATLAS_HOOK --replication-factor <numReplicas> --partitions 1\n   $KAFKA_HOME/bin/kafka-topics.sh --create --zookeeper <list of zookeeper host:port entries> --topic ATLAS_ENTITIES --replication-factor <numReplicas> --partitions 1\n   Here KAFKA_HOME points to the Kafka installation directory."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"In atlas-application.properties, set the following configuration:")),Object(n.mdx)(o.a,{wrapLines:!0,language:"java",style:s.a,mdxType:"SyntaxHighlighter"},"atlas.notification.embedded=false\n   atlas.kafka.zookeeper.connect=<comma separated list of servers forming Zookeeper quorum used by Kafka>\n   atlas.kafka.bootstrap.servers=<comma separated list of Kafka broker endpoints in host:port form> - Give at least 2 for redundancy."),Object(n.mdx)("h2",{id:"known-issues"},"Known Issues"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"If the HBase region servers hosting the Atlas table are down, Atlas would not be able to store or retrieve metadata from HBase until they are brought back online.")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/HighAvailability.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-high-availability.4fc074897b27adc953b3.js.map