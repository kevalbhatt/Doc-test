(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/documents/Hook/Hook-Kafka.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),n=(a("./theme/components/shared/Img/index.js"),{}),c="wrapper";function r(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(c,Object.assign({},n,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"apache-atlas-hook-for-apache-kafka"},"Apache Atlas Hook for Apache Kafka"),Object(o.b)("h2",{id:"kafka-model"},"Kafka Model"),Object(o.b)("p",null,"Kafka model includes the following types:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Entity types:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"kafka_topic",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"super-types: !DataSet"),Object(o.b)("li",{parentName:"ul"},"attributes: qualifiedName, name, description, owner, topic, uri, partitionCount")))))),Object(o.b)("p",null,"Kafka entities are created and de-duped in Atlas using unique attribute qualifiedName, whose value should be formatted as detailed below.\nNote that qualifiedName will have topic name in lower case."),Object(o.b)(l.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"topic.qualifiedName: <topic>@<clusterName>"),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"Binary files are present in apache-atlas-",Object(o.b)("release-version",null),"-kafka-hook.tar.gz"),Object(o.b)("p",null,"Copy apache-atlas-kafka-hook-",Object(o.b)("release-version",null),"/hook/kafka folder to ",Object(o.b)("atlas",{package:!0}),"/hook/    directory"),Object(o.b)("p",null,"Copy apache-atlas-kafka-hook-",Object(o.b)("release-version",null),"/hook-bin folder to  ",Object(o.b)("atlas",{package:!0}),"/hook-bin directory"),Object(o.b)("h2",{id:"importing-kafka-metadata"},"Importing Kafka Metadata"),Object(o.b)("p",null,"Apache Atlas provides a command-line utility, import-kafka.sh, to import metadata of Apache Kafka topics into Apache Atlas.\nThis utility can be used to initialize Apache Atlas with topics present in Apache Kafka.\nThis utility supports importing metadata of a specific topic or all topics."),Object(o.b)(l.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"sage 1: <atlas package>/hook-bin/import-kafka.sh\nUsage 2: <atlas package>/hook-bin/import-kafka.sh [-t <topic prefix> OR --topic <topic prefix>]\nUsage 3: <atlas package>/hook-bin/import-kafka.sh [-f <filename>]\n         File Format:\n            topic1\n            topic2\n            topic3"))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Hook/Hook-Kafka.md"}}),r.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,a){"use strict";var i=a("./node_modules/react/index.js"),o=(a("./theme/utils/theme.js"),a("./theme/styles/responsive.js"),a("./node_modules/docz/dist/index.esm.js"));t.a=e=>{const{src:t,width:a,height:s}=e,{baseUrl:l}=Object(o.g)();return i.createElement("div",null,i.createElement("img",{src:`${l}${t}`,height:`${s||"auto"}`,width:`${a||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-hook-hook-kafka.fae7c87a5eb027cbc856.js.map