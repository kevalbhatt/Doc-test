(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/documents/Hook/HookStorm.md":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return d});var a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),n=(o("./theme/styles/styled-colors.js"),o("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=o("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),i={},r="wrapper";function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.mdx)(r,Object.assign({},i,o,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"apache-atlas-hook-for-apache-storm"},"Apache Atlas Hook for Apache Storm"),Object(s.mdx)("h2",{id:"introduction"},"Introduction"),Object(s.mdx)("p",null,"Apache Storm is a distributed real-time computation system. Storm makes it\neasy to reliably process unbounded streams of data, doing for real-time\nprocessing what Hadoop did for batch processing. The process is essentially\na DAG of nodes, which is called ",Object(s.mdx)("em",{parentName:"p"},"topology"),"."),Object(s.mdx)("p",null,"Apache Atlas is a metadata repository that enables end-to-end data lineage,\nsearch and associate business classification."),Object(s.mdx)("p",null,"The goal of this integration is to push the operational topology\nmetadata along with the underlying data source(s), target(s), derivation\nprocesses and any available business context so Atlas can capture the\nlineage for this topology."),Object(s.mdx)("p",null,"There are 2 parts in this process detailed below:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Data model to represent the concepts in Storm"),Object(s.mdx)("li",{parentName:"ul"},"Storm Atlas Hook to update metadata in Atlas")),Object(s.mdx)("h2",{id:"storm-data-model"},"Storm Data Model"),Object(s.mdx)("p",null,"A data model is represented as Types in Atlas. It contains the descriptions\nof various nodes in the topology graph, such as spouts and bolts and the\ncorresponding producer and consumer types."),Object(s.mdx)("p",null,"The following types are added in Atlas."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"storm_topology - represents the coarse-grained topology. A storm_topology derives from an Atlas Process type and hence can be used to inform Atlas about lineage."),Object(s.mdx)("li",{parentName:"ul"},"Following data sets are added - kafka_topic, jms_topic, hbase_table, hdfs_data_set. These all derive from an Atlas Dataset type and hence form the end points of a lineage graph."),Object(s.mdx)("li",{parentName:"ul"},"storm_spout - Data Producer having outputs, typically Kafka, JMS"),Object(s.mdx)("li",{parentName:"ul"},"storm_bolt - Data Consumer having inputs and outputs, typically Hive, HBase, HDFS, etc.")),Object(s.mdx)("p",null,"The Storm Atlas hook auto registers dependent models like the Hive data model\nif it finds that these are not known to the Atlas server."),Object(s.mdx)("p",null,"The data model for each of the types is described in\nthe class definition at org.apache.atlas.storm.model.StormDataModel."),Object(s.mdx)("h2",{id:"storm-atlas-hook"},"Storm Atlas Hook"),Object(s.mdx)("p",null,"Atlas is notified when a new topology is registered successfully in\nStorm. Storm provides a hook, backtype.storm.ISubmitterHook, at the Storm client used to\nsubmit a storm topology."),Object(s.mdx)("p",null,"The Storm Atlas hook intercepts the hook post execution and extracts the metadata from the\ntopology and updates Atlas using the types defined. Atlas implements the\nStorm client hook interface in org.apache.atlas.storm.hook.StormAtlasHook."),Object(s.mdx)("h2",{id:"limitations"},"Limitations"),Object(s.mdx)("p",null,"The following apply for the first version of the integration."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Only new topology submissions are registered with Atlas, any lifecycle changes are not reflected in Atlas."),Object(s.mdx)("li",{parentName:"ul"},"The Atlas server needs to be online when a Storm topology is submitted for the metadata to be captured."),Object(s.mdx)("li",{parentName:"ul"},"The Hook currently does not support capturing lineage for custom spouts and bolts.")),Object(s.mdx)("h2",{id:"installation"},"Installation"),Object(s.mdx)("p",null,"The Storm Atlas Hook needs to be manually installed in Storm on the client side."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"untar apache-atlas-${project.version}-storm-hook.tar.gz"),Object(s.mdx)("li",{parentName:"ul"},"cd apache-atlas-storm-hook-${project.version}"),Object(s.mdx)("li",{parentName:"ul"},"Copy entire contents of folder apache-atlas-storm-hook-${project.version}/hook/storm to $ATLAS_PACKAGE/hook/storm")),Object(s.mdx)("p",null,"Storm Atlas hook jars in $ATLAS_PACKAGE/hook/storm need to be copied to $STORM_HOME/extlib.\nReplace STORM_HOME with storm installation path."),Object(s.mdx)("p",null,"Restart all daemons after you have installed the atlas hook into Storm."),Object(s.mdx)("h2",{id:"configuration"},"Configuration"),Object(s.mdx)("h3",{id:"storm-configuration"},"Storm Configuration"),Object(s.mdx)("p",null,"The Storm Atlas Hook needs to be configured in Storm client config\nin ",Object(s.mdx)("em",{parentName:"p"},"$STORM_HOME/conf/storm.yaml")," as:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},'storm.topology.submission.notifier.plugin.class: "org.apache.atlas.storm.hook.StormAtlasHook"'),Object(s.mdx)("p",null,"Also set a 'cluster name' that would be used as a namespace for objects registered in Atlas.\nThis name would be used for namespacing the Storm topology, spouts and bolts."),Object(s.mdx)("p",null,"The other objects like data sets should ideally be identified with the cluster name of\nthe components that generate them. For e.g. Hive tables and databases should be\nidentified using the cluster name set in Hive. The Storm Atlas hook will pick this up\nif the Hive configuration is available in the Storm topology jar that is submitted on\nthe client and the cluster name is defined there. This happens similarly for HBase\ndata sets. In case this configuration is not available, the cluster name set in the Storm\nconfiguration will be used."),Object(s.mdx)(l.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},'atlas.cluster.name: "cluster_name"'),Object(s.mdx)("p",null,"In ",Object(s.mdx)("em",{parentName:"p"},"$STORM_HOME/conf/storm_env.ini"),", set an environment variable as follows:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},'STORM_JAR_JVM_OPTS:"-Datlas.conf=$ATLAS_HOME/conf/"'),Object(s.mdx)("p",null,"where ATLAS_HOME is pointing to where ATLAS is installed."),Object(s.mdx)("p",null,"You could also set this up programatically in Storm Config as:"),Object(s.mdx)(l.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"Config stormConf = new Config();\n        ...\n        stormConf.put(Config.STORM_TOPOLOGY_SUBMISSION_NOTIFIER_PLUGIN,\n                org.apache.atlas.storm.hook.StormAtlasHook.class.getName());"))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/HookStorm.md"}}),d.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,o){"use strict";var a=o("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");a.a.hljs.color="#37bb9b",t.a=a.a}}]);
//# sourceMappingURL=documents-hook-hook-storm.99c224692396aec6c1ea.js.map