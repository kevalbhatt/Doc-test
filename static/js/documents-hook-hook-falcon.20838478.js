(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/documents/Hook/Hook-Falcon.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return r});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),o={},i="wrapper";function r(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)(i,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"falcon-atlas-bridge"},"Falcon Atlas Bridge"),Object(l.b)("h2",{id:"falcon-model"},"Falcon Model"),Object(l.b)("p",null,"The default hive model includes the following types:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Entity types:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"falcon_cluster",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"super-types: Infrastructure"),Object(l.b)("li",{parentName:"ul"},"attributes: timestamp, colo, owner, tags"))),Object(l.b)("li",{parentName:"ul"},"falcon_feed",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"super-types: !DataSet"),Object(l.b)("li",{parentName:"ul"},"attributes: timestamp, stored-in, owner, groups, tags"))),Object(l.b)("li",{parentName:"ul"},"falcon_feed_creation",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"super-types: Process"),Object(l.b)("li",{parentName:"ul"},"attributes: timestamp, stored-in, owner"))),Object(l.b)("li",{parentName:"ul"},"falcon_feed_replication",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"super-types: Process"),Object(l.b)("li",{parentName:"ul"},"attributes: timestamp, owner"))),Object(l.b)("li",{parentName:"ul"},"falcon_process",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"super-types: Process"),Object(l.b)("li",{parentName:"ul"},"attributes: timestamp, runs-on, owner, tags, pipelines, workflow-properties")))))),Object(l.b)("p",null,"One falcon_process entity is created for every cluster that the falcon process is defined for."),Object(l.b)("p",null,"The entities are created and de-duped using unique qualifiedName attribute. They provide namespace and can be used for querying/lineage as well. The unique attributes are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"falcon_process.qualifiedName          - ",Object(l.b)("inlineCode",{parentName:"li"},"<process name>@<cluster name>")),Object(l.b)("li",{parentName:"ul"},"falcon_cluster.qualifiedName          - ",Object(l.b)("inlineCode",{parentName:"li"},"<cluster name>")),Object(l.b)("li",{parentName:"ul"},"falcon_feed.qualifiedName             - ",Object(l.b)("inlineCode",{parentName:"li"},"<feed name>@<cluster name>")),Object(l.b)("li",{parentName:"ul"},"falcon_feed_creation.qualifiedName    - ",Object(l.b)("inlineCode",{parentName:"li"},"<feed name>")),Object(l.b)("li",{parentName:"ul"},"falcon_feed_replication.qualifiedName - ",Object(l.b)("inlineCode",{parentName:"li"},"<feed name>"))),Object(l.b)("h2",{id:"falcon-hook"},"Falcon Hook"),Object(l.b)("p",null,"Falcon supports listeners on falcon entity submission. This is used to add entities in Atlas using the model detailed above.\nFollow the instructions below to setup Atlas hook in Falcon:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Add 'org.apache.atlas.falcon.service.AtlasService' to application.services in ",Object(l.b)("inlineCode",{parentName:"li"},"<falcon-conf>"),"/startup.properties"),Object(l.b)("li",{parentName:"ul"},"untar apache-atlas-${project.version}-falcon-hook.tar.gz"),Object(l.b)("li",{parentName:"ul"},"cd apache-atlas-falcon-hook-${project.version}"),Object(l.b)("li",{parentName:"ul"},"Copy entire contents of folder apache-atlas-falcon-hook-${project.version}/hook/falcon to ",Object(l.b)("inlineCode",{parentName:"li"},"<atlas-home>"),"/hook/falcon"),Object(l.b)("li",{parentName:"ul"},"Link Atlas hook jars in Falcon classpath - 'ln -s ",Object(l.b)("inlineCode",{parentName:"li"},"<atlas-home>"),"/hook/falcon/* ",Object(l.b)("inlineCode",{parentName:"li"},"<falcon-home>"),"/server/webapp/falcon/WEB-INF/lib/'"),Object(l.b)("li",{parentName:"ul"},"In ",Object(l.b)("inlineCode",{parentName:"li"},"<falcon_conf>"),"/falcon-env.sh, set an environment variable as follows:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'export FALCON_SERVER_OPTS="`<atlas_home>`/hook/falcon/*:$FALCON_SERVER_OPTS"\n')))),Object(l.b)("p",null,"The following properties in ",Object(l.b)("inlineCode",{parentName:"p"},"<atlas-conf>"),"/atlas-application.properties control the thread pool and notification details:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"atlas.hook.falcon.synchronous   - boolean, true to run the hook synchronously. default false"),Object(l.b)("li",{parentName:"ul"},"atlas.hook.falcon.numRetries    - number of retries for notification failure. default 3"),Object(l.b)("li",{parentName:"ul"},"atlas.hook.falcon.minThreads    - core number of threads. default 5"),Object(l.b)("li",{parentName:"ul"},"atlas.hook.falcon.maxThreads    - maximum number of threads. default 5"),Object(l.b)("li",{parentName:"ul"},"atlas.hook.falcon.keepAliveTime - keep alive time in msecs. default 10"),Object(l.b)("li",{parentName:"ul"},"atlas.hook.falcon.queueSize     - queue size for the threadpool. default 10000")),Object(l.b)("p",null,"Refer ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"Configuration"}),"Configuration")," for notification related configurations"),Object(l.b)("h2",{id:"notes"},"NOTES"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In falcon cluster entity, cluster name used should be uniform across components like hive, falcon, sqoop etc. If used with ambari, ambari cluster name should be used for cluster entity")))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/Hook-Falcon.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-hook-hook-falcon.b4d33c35089b0e616f0e.js.map