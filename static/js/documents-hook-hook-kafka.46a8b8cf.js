(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/documents/Hook/HookKafka.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),s=(t("./theme/styles/styled-colors.js"),t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=t("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),n=(t("./theme/components/shared/Img/index.js"),{}),p="wrapper";function d(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(i.mdx)(p,Object.assign({},n,t,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"apache-atlas-hook-for-apache-kafka"},"Apache Atlas Hook for Apache Kafka"),Object(i.mdx)("h2",{id:"kafka-model"},"Kafka Model"),Object(i.mdx)("p",null,"Kafka model includes the following types:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Entity types:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"kafka_topic",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"super-types: DataSet"),Object(i.mdx)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, topic, uri, partitionCount")))))),Object(i.mdx)("p",null,"Kafka entities are created and de-duped in Atlas using unique attribute qualifiedName, whose value should be formatted as detailed below.\nNote that qualifiedName will have topic name in lower case."),Object(i.mdx)(l.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"topic.qualifiedName: <topic>@<clusterName>"),Object(i.mdx)("h2",{id:"setup"},"Setup"),Object(i.mdx)("p",null,"Binary files are present in apache-atlas-",Object(i.mdx)("release-version",null),"-kafka-hook.tar.gz"),Object(i.mdx)("p",null,"Copy apache-atlas-kafka-hook-",Object(i.mdx)("release-version",null),"/hook/kafka folder to ",Object(i.mdx)("atlas",{package:!0}),"/hook/    directory"),Object(i.mdx)("p",null,"Copy apache-atlas-kafka-hook-",Object(i.mdx)("release-version",null),"/hook-bin folder to  ",Object(i.mdx)("atlas",{package:!0}),"/hook-bin directory"),Object(i.mdx)("h2",{id:"importing-kafka-metadata"},"Importing Kafka Metadata"),Object(i.mdx)("p",null,"Apache Atlas provides a command-line utility, import-kafka.sh, to import metadata of Apache Kafka topics into Apache Atlas.\nThis utility can be used to initialize Apache Atlas with topics present in Apache Kafka.\nThis utility supports importing metadata of a specific topic or all topics."),Object(i.mdx)(l.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"sage 1: <atlas package>/hook-bin/import-kafka.sh\nUsage 2: <atlas package>/hook-bin/import-kafka.sh [-t <topic prefix> OR --topic <topic prefix>]\nUsage 3: <atlas package>/hook-bin/import-kafka.sh [-f <filename>]\n         File Format:\n            topic1\n            topic2\n            topic3"))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/HookKafka.md"}}),d.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,a,t){"use strict";var o=t("./node_modules/react/index.js"),i=t("./docz-lib/docz/dist/index.js");a.a=e=>{const{src:a,width:t,height:s}=e,{baseUrl:l}=Object(i.useConfig)();return o.createElement("div",null,o.createElement("img",{style:{boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",WebkitBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",MozBoxShadow:"0 2px 2px 0 rgba(0,0,0,0.14) 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"},src:`${l}${a}`,height:`${s||"auto"}`,width:`${t||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,a,t){"use strict";var o=t("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");o.a.hljs.color="#37bb9b",a.a=o.a}}]);
//# sourceMappingURL=documents-hook-hook-kafka.88ec2b403cab20e5a718.js.map