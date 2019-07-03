(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/documents/Hook/Hook-Storm.md":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return i});var a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),s={},l="wrapper";function i(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)(l,Object.assign({},s,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"apache-atlas-hook-for-apache-storm"},"Apache Atlas Hook for Apache Storm"),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Apache Storm is a distributed real-time computation system. Storm makes it\neasy to reliably process unbounded streams of data, doing for real-time\nprocessing what Hadoop did for batch processing. The process is essentially\na DAG of nodes, which is called ",Object(n.b)("em",{parentName:"p"},"topology"),"."),Object(n.b)("p",null,"Apache Atlas is a metadata repository that enables end-to-end data lineage,\nsearch and associate business classification."),Object(n.b)("p",null,"The goal of this integration is to push the operational topology\nmetadata along with the underlying data source(s), target(s), derivation\nprocesses and any available business context so Atlas can capture the\nlineage for this topology."),Object(n.b)("p",null,"There are 2 parts in this process detailed below:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Data model to represent the concepts in Storm"),Object(n.b)("li",{parentName:"ul"},"Storm Atlas Hook to update metadata in Atlas")),Object(n.b)("h2",{id:"storm-data-model"},"Storm Data Model"),Object(n.b)("p",null,"A data model is represented as Types in Atlas. It contains the descriptions\nof various nodes in the topology graph, such as spouts and bolts and the\ncorresponding producer and consumer types."),Object(n.b)("p",null,"The following types are added in Atlas."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"storm_topology - represents the coarse-grained topology. A storm_topology derives from an Atlas Process type and hence can be used to inform Atlas about lineage."),Object(n.b)("li",{parentName:"ul"},"Following data sets are added - kafka_topic, jms_topic, hbase_table, hdfs_data_set. These all derive from an Atlas Dataset type and hence form the end points of a lineage graph."),Object(n.b)("li",{parentName:"ul"},"storm_spout - Data Producer having outputs, typically Kafka, JMS"),Object(n.b)("li",{parentName:"ul"},"storm_bolt - Data Consumer having inputs and outputs, typically Hive, HBase, HDFS, etc.")),Object(n.b)("p",null,"The Storm Atlas hook auto registers dependent models like the Hive data model\nif it finds that these are not known to the Atlas server."),Object(n.b)("p",null,"The data model for each of the types is described in\nthe class definition at org.apache.atlas.storm.model.StormDataModel."),Object(n.b)("h2",{id:"storm-atlas-hook"},"Storm Atlas Hook"),Object(n.b)("p",null,"Atlas is notified when a new topology is registered successfully in\nStorm. Storm provides a hook, backtype.storm.ISubmitterHook, at the Storm client used to\nsubmit a storm topology."),Object(n.b)("p",null,"The Storm Atlas hook intercepts the hook post execution and extracts the metadata from the\ntopology and updates Atlas using the types defined. Atlas implements the\nStorm client hook interface in org.apache.atlas.storm.hook.StormAtlasHook."),Object(n.b)("h2",{id:"limitations"},"Limitations"),Object(n.b)("p",null,"The following apply for the first version of the integration."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Only new topology submissions are registered with Atlas, any lifecycle changes are not reflected in Atlas."),Object(n.b)("li",{parentName:"ul"},"The Atlas server needs to be online when a Storm topology is submitted for the metadata to be captured."),Object(n.b)("li",{parentName:"ul"},"The Hook currently does not support capturing lineage for custom spouts and bolts.")),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)("p",null,"The Storm Atlas Hook needs to be manually installed in Storm on the client side."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"untar apache-atlas-${project.version}-storm-hook.tar.gz"),Object(n.b)("li",{parentName:"ul"},"cd apache-atlas-storm-hook-${project.version}"),Object(n.b)("li",{parentName:"ul"},"Copy entire contents of folder apache-atlas-storm-hook-${project.version}/hook/storm to $ATLAS_PACKAGE/hook/storm")),Object(n.b)("p",null,"Storm Atlas hook jars in $ATLAS_PACKAGE/hook/storm need to be copied to $STORM_HOME/extlib.\nReplace STORM_HOME with storm installation path."),Object(n.b)("p",null,"Restart all daemons after you have installed the atlas hook into Storm."),Object(n.b)("h2",{id:"configuration"},"Configuration"),Object(n.b)("h3",{id:"storm-configuration"},"Storm Configuration"),Object(n.b)("p",null,"The Storm Atlas Hook needs to be configured in Storm client config\nin ",Object(n.b)("em",{parentName:"p"},"$STORM_HOME/conf/storm.yaml")," as:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'storm.topology.submission.notifier.plugin.class: "org.apache.atlas.storm.hook.StormAtlasHook"\n')),Object(n.b)("p",null,"Also set a 'cluster name' that would be used as a namespace for objects registered in Atlas.\nThis name would be used for namespacing the Storm topology, spouts and bolts."),Object(n.b)("p",null,"The other objects like data sets should ideally be identified with the cluster name of\nthe components that generate them. For e.g. Hive tables and databases should be\nidentified using the cluster name set in Hive. The Storm Atlas hook will pick this up\nif the Hive configuration is available in the Storm topology jar that is submitted on\nthe client and the cluster name is defined there. This happens similarly for HBase\ndata sets. In case this configuration is not available, the cluster name set in the Storm\nconfiguration will be used."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'atlas.cluster.name: "cluster_name"\n')),Object(n.b)("p",null,"In ",Object(n.b)("em",{parentName:"p"},"$STORM_HOME/conf/storm_env.ini"),", set an environment variable as follows:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'STORM_JAR_JVM_OPTS:"-Datlas.conf=$ATLAS_HOME/conf/"\n')),Object(n.b)("p",null,"where ATLAS_HOME is pointing to where ATLAS is installed."),Object(n.b)("p",null,"You could also set this up programatically in Storm Config as:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"    Config stormConf = new Config();\n    ...\n    stormConf.put(Config.STORM_TOPOLOGY_SUBMISSION_NOTIFIER_PLUGIN,\n            org.apache.atlas.storm.hook.StormAtlasHook.class.getName());\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/Hook-Storm.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-hook-hook-storm.b4d33c35089b0e616f0e.js.map