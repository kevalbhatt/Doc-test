(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/documents/Hook/Hook-Falcon.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),o=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),i=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},r="wrapper";function c(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.mdx)(r,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",{id:"falcon-atlas-bridge"},"Falcon Atlas Bridge"),Object(n.mdx)("h2",{id:"falcon-model"},"Falcon Model"),Object(n.mdx)("p",null,"The default hive model includes the following types:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Entity types:",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"falcon_cluster",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"super-types: Infrastructure"),Object(n.mdx)("li",{parentName:"ul"},"attributes: timestamp, colo, owner, tags"))),Object(n.mdx)("li",{parentName:"ul"},"falcon_feed",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"super-types: !DataSet"),Object(n.mdx)("li",{parentName:"ul"},"attributes: timestamp, stored-in, owner, groups, tags"))),Object(n.mdx)("li",{parentName:"ul"},"falcon_feed_creation",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"super-types: Process"),Object(n.mdx)("li",{parentName:"ul"},"attributes: timestamp, stored-in, owner"))),Object(n.mdx)("li",{parentName:"ul"},"falcon_feed_replication",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"super-types: Process"),Object(n.mdx)("li",{parentName:"ul"},"attributes: timestamp, owner"))),Object(n.mdx)("li",{parentName:"ul"},"falcon_process",Object(n.mdx)("ul",{parentName:"li"},Object(n.mdx)("li",{parentName:"ul"},"super-types: Process"),Object(n.mdx)("li",{parentName:"ul"},"attributes: timestamp, runs-on, owner, tags, pipelines, workflow-properties")))))),Object(n.mdx)("p",null,"One falcon_process entity is created for every cluster that the falcon process is defined for."),Object(n.mdx)("p",null,"The entities are created and de-duped using unique qualifiedName attribute. They provide namespace and can be used for querying/lineage as well. The unique attributes are:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"falcon_process.qualifiedName          - ",Object(n.mdx)("inlineCode",{parentName:"li"},"<process name>@<cluster name>")),Object(n.mdx)("li",{parentName:"ul"},"falcon_cluster.qualifiedName          - ",Object(n.mdx)("inlineCode",{parentName:"li"},"<cluster name>")),Object(n.mdx)("li",{parentName:"ul"},"falcon_feed.qualifiedName             - ",Object(n.mdx)("inlineCode",{parentName:"li"},"<feed name>@<cluster name>")),Object(n.mdx)("li",{parentName:"ul"},"falcon_feed_creation.qualifiedName    - ",Object(n.mdx)("inlineCode",{parentName:"li"},"<feed name>")),Object(n.mdx)("li",{parentName:"ul"},"falcon_feed_replication.qualifiedName - ",Object(n.mdx)("inlineCode",{parentName:"li"},"<feed name>"))),Object(n.mdx)("h2",{id:"falcon-hook"},"Falcon Hook"),Object(n.mdx)("p",null,"Falcon supports listeners on falcon entity submission. This is used to add entities in Atlas using the model detailed above.\nFollow the instructions below to setup Atlas hook in Falcon:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Add 'org.apache.atlas.falcon.service.AtlasService' to application.services in ",Object(n.mdx)("inlineCode",{parentName:"li"},"<falcon-conf>"),"/startup.properties"),Object(n.mdx)("li",{parentName:"ul"},"untar apache-atlas-${project.version}-falcon-hook.tar.gz"),Object(n.mdx)("li",{parentName:"ul"},"cd apache-atlas-falcon-hook-${project.version}"),Object(n.mdx)("li",{parentName:"ul"},"Copy entire contents of folder apache-atlas-falcon-hook-${project.version}/hook/falcon to ",Object(n.mdx)("inlineCode",{parentName:"li"},"<atlas-home>"),"/hook/falcon"),Object(n.mdx)("li",{parentName:"ul"},"Link Atlas hook jars in Falcon classpath - 'ln -s ",Object(n.mdx)("inlineCode",{parentName:"li"},"<atlas-home>"),"/hook/falcon/* ",Object(n.mdx)("inlineCode",{parentName:"li"},"<falcon-home>"),"/server/webapp/falcon/WEB-INF/lib/'"),Object(n.mdx)("li",{parentName:"ul"},"In ",Object(n.mdx)("inlineCode",{parentName:"li"},"<falcon_conf>"),"/falcon-env.sh, set an environment variable as follows:")),Object(n.mdx)(i.a,{wrapLines:!0,language:"java",style:o.a,mdxType:"SyntaxHighlighter"},'export FALCON_SERVER_OPTS="<atlas_home>/hook/falcon/*:$FALCON_SERVER_OPTS"'),Object(n.mdx)("p",null,"The following properties in ",Object(n.mdx)("inlineCode",{parentName:"p"},"<atlas-conf>"),"/atlas-application.properties control the thread pool and notification details:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"atlas.hook.falcon.synchronous   - boolean, true to run the hook synchronously. default false"),Object(n.mdx)("li",{parentName:"ul"},"atlas.hook.falcon.numRetries    - number of retries for notification failure. default 3"),Object(n.mdx)("li",{parentName:"ul"},"atlas.hook.falcon.minThreads    - core number of threads. default 5"),Object(n.mdx)("li",{parentName:"ul"},"atlas.hook.falcon.maxThreads    - maximum number of threads. default 5"),Object(n.mdx)("li",{parentName:"ul"},"atlas.hook.falcon.keepAliveTime - keep alive time in msecs. default 10"),Object(n.mdx)("li",{parentName:"ul"},"atlas.hook.falcon.queueSize     - queue size for the threadpool. default 10000")),Object(n.mdx)("p",null,"Refer ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"Configuration"}),"Configuration")," for notification related configurations"),Object(n.mdx)("h2",{id:"notes"},"NOTES"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"In falcon cluster entity, cluster name used should be uniform across components like hive, falcon, sqoop etc. If used with ambari, ambari cluster name should be used for cluster entity")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/Hook-Falcon.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var l=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");l.a.hljs.color="#37bb9b",t.a=l.a}}]);
//# sourceMappingURL=documents-hook-hook-falcon.0321b40d88c4551f24bc.js.map