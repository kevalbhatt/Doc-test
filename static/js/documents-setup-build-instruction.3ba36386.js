(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./src/documents/Setup/BuildInstruction.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i=(t("./theme/styles/styled-colors.js"),t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=t("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),o={},r="wrapper";function c(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(r,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"building--installing-apache-atlas"},"Building & Installing Apache Atlas"),Object(s.b)("h3",{id:"building-apache-atlas"},"Building Apache Atlas"),Object(s.b)("p",null,"Download Apache Atlas 1.0.0 release sources, apache-atlas-1.0.0-sources.tar.gz, from the ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://atlas.apache.org/Downloads.html"}),"downloads")," page.\nThen follow the instructions below to to build Apache Atlas."),Object(s.b)(l.a,{wrapLines:!0,language:"powershell",style:i.a,mdxType:"SyntaxHighlighter"},'tar xvfz apache-atlas-1.0.0-sources.tar.gz\ncd apache-atlas-sources-1.0.0/\nexport MAVEN_OPTS="-Xms2g -Xmx2g"\nmvn clean -DskipTests install'),Object(s.b)("h3",{id:"packaging-apache-atlas"},"Packaging Apache Atlas"),Object(s.b)("p",null,"To create Apache Atlas package for deployment in an environment having functional Apache HBase and Apache Solr instances, build with the following command:"),Object(s.b)(l.a,{wrapLines:!0,language:"powershell",style:i.a,mdxType:"SyntaxHighlighter"},"mvn clean -DskipTests package -Pdist"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"NOTES:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Remove option '-DskipTests' to run unit and integration tests"),Object(s.b)("li",{parentName:"ul"},"To build a distribution without minified js,css file, build with ",Object(s.b)("em",{parentName:"li"},"skipMinify")," profile. By default js and css files are minified.")))),Object(s.b)("p",null,"Above will build Apache Atlas for an environment having functional HBase and Solr instances. Apache Atlas needs to be setup with the following to run in this environment:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'Configure atlas.graph.storage.hostname (see "Graph persistence engine - HBase" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section)."),Object(s.b)("li",{parentName:"ul"},'Configure atlas.graph.index.search.solr.zookeeper-url (see "Graph Search Index - Solr" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section)."),Object(s.b)("li",{parentName:"ul"},'Set HBASE_CONF_DIR to point to a valid Apache HBase config directory (see "Graph persistence engine - HBase" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section)."),Object(s.b)("li",{parentName:"ul"},'Create indices in Apache Solr (see "Graph Search Index - Solr" in the ',Object(s.b)("a",Object.assign({parentName:"li"},{href:"Configuration"}),"Configuration")," section).")),Object(s.b)("h3",{id:"packaging-apache-atlas-with-embedded-apache-hbase--apache-solr"},"Packaging Apache Atlas with embedded Apache HBase & Apache Solr"),Object(s.b)("p",null,"To create Apache Atlas package that includes Apache HBase and Apache Solr, build with the embedded-hbase-solr profile as shown below:"),Object(s.b)(l.a,{wrapLines:!0,language:"powershell",style:i.a,mdxType:"SyntaxHighlighter"},"mvn clean -DskipTests package -Pdist,embedded-hbase-solr"),Object(s.b)("p",null,"Using the embedded-hbase-solr profile will configure Apache Atlas so that an Apache HBase instance and an Apache Solr instance will be started and stopped along with the Apache Atlas server."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"NOTE: This distribution profile is only intended to be used for single node development not in production.")),Object(s.b)("h3",{id:"packaging-apache-atlas-with-embedded-apache-cassandra--apache-solr"},"Packaging Apache Atlas with embedded Apache Cassandra & Apache Solr"),Object(s.b)("p",null,"To create Apache Atlas package that includes Apache Cassandra and Apache Solr, build with the embedded-cassandra-solr profile as shown below:"),Object(s.b)(l.a,{wrapLines:!0,language:"powershell",style:i.a,mdxType:"SyntaxHighlighter"},"mvn clean package -Pdist,embedded-cassandra-solr"),Object(s.b)("p",null,"Using the embedded-cassandra-solr profile will configure Apache Atlas so that an Apache Cassandra instance and an Apache Solr instance will be started and stopped along with the Atlas server."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"NOTE: This distribution profile is only intended to be used for single node development not in production.")),Object(s.b)("h3",{id:"apache-atlas-package"},"Apache Atlas Package"),Object(s.b)("p",null,"Build will create following files, which are used to install Apache Atlas."),Object(s.b)(l.a,{wrapLines:!0,language:"powershell",style:i.a,mdxType:"SyntaxHighlighter"},"distro/target/apache-atlas-{project.version}-bin.tar.gz\ndistro/target/apache-atlas-{project.version}-hbase-hook.tar.gz\ndistro/target/apache-atlas-{project.version}-hive-hook.gz\ndistro/target/apache-atlas-{project.version}-kafka-hook.gz\ndistro/target/apache-atlas-{project.version}-sources.tar.gz\ndistro/target/apache-atlas-{project.version}-sqoop-hook.tar.gz\ndistro/target/apache-atlas-{project.version}-storm-hook.tar.gz"))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Setup/BuildInstruction.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,a,t){"use strict";var n=t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",a.a=n.a}}]);
//# sourceMappingURL=documents-setup-build-instruction.9f78c44be783800f7ced.js.map