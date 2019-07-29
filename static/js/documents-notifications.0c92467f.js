(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/documents/Notifications.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),o=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),c={},r="wrapper";function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(r,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"notifications"},"Notifications"),Object(i.b)("h2",{id:"notifications-from-apache-atlas"},"Notifications from Apache Atlas"),Object(i.b)("p",null,"Apache Atlas sends notifications about metadata changes to Kafka topic named ATLAS_ENTITIES .\nApplications interested in metadata changes can monitor for these notifications.\nFor example, Apache Ranger processes these notifications to authorize data access based on classifications."),Object(i.b)("h3",{id:"notifications---v2-apache-atlas-version-10"},"Notifications - V2: Apache Atlas version 1.0"),Object(i.b)("p",null,"Apache Atlas 1.0 sends notifications for following operations on metadata."),Object(i.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"ENTITY_CREATE:         sent when an entity instance is created\n      ENTITY_UPDATE:         sent when an entity instance is updated\n      ENTITY_DELETE:         sent when an entity instance is deleted\n      CLASSIFICATION_ADD:    sent when classifications are added to an entity instance\n      CLASSIFICATION_UPDATE: sent when classifications of an entity instance are updated\n      CLASSIFICATION_DELETE: sent when classifications are removed from an entity instance"),Object(i.b)("p",null,"Notification includes the following data."),Object(i.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"AtlasEntity  entity;\n   OperationType operationType;\n   List<AtlasClassification>  classifications;"),Object(i.b)("h3",{id:"notifications---v1-apache-atlas-version-08x-and-earlier"},"Notifications - V1: Apache Atlas version 0.8.x and earlier"),Object(i.b)("p",null,"Notifications from Apache Atlas version 0.8.x and earlier have content formatted differently, as detailed below."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Operations"))),Object(i.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"ENTITY_CREATE: sent when an entity instance is created\n      ENTITY_UPDATE: sent when an entity instance is updated\n      ENTITY_DELETE: sent when an entity instance is deleted\n      TRAIT_ADD:     sent when classifications are added to an entity instance\n      TRAIT_UPDATE:  sent when classifications of an entity instance are updated\n      TRAIT_DELETE:  sent when classifications are removed from an entity instance"),Object(i.b)("p",null,"Notification includes the following data."),Object(i.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"Referenceable entity;\n   OperationType operationType;\n   List<Struct>  traits;"),Object(i.b)("p",null,"Apache Atlas 1.0 can be configured to send notifications in older version format, instead of the latest version format.\nThis can be helpful in deployments that are not yet ready to process notifications in latest version format.\nTo configure Apache Atlas 1.0 to send notifications in earlier version format, please set following configuration in atlas-application.properties:"),Object(i.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"atlas.notification.entity.version=v1"),Object(i.b)("h2",{id:"notifications-to-apache-atlas"},"Notifications to Apache Atlas"),Object(i.b)("p",null,"Apache Atlas can be notified of metadata changes and lineage via notifications to Kafka topic named ATLAS_HOOK.\nAtlas hooks for Apache Hive/Apache HBase/Apache Storm/Apache Sqoop use this mechanism to notify Apache Atlas of events of interest."),Object(i.b)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"ENTITY_CREATE            : create an entity. For more details, refer to Java class HookNotificationV1.EntityCreateRequest\nENTITY_FULL_UPDATE       : update an entity. For more details, refer to Java class HookNotificationV1.EntityUpdateRequest\nENTITY_PARTIAL_UPDATE    : update specific attributes of an entity. For more details, refer to HookNotificationV1.EntityPartialUpdateRequest\nENTITY_DELETE            : delete an entity. For more details, refer to Java class HookNotificationV1.EntityDeleteRequest\nENTITY_CREATE_V2         : create an entity. For more details, refer to Java class HookNotification.EntityCreateRequestV2\nENTITY_FULL_UPDATE_V2    : update an entity. For more details, refer to Java class HookNotification.EntityUpdateRequestV2\nENTITY_PARTIAL_UPDATE_V2 : update specific attributes of an entity. For more details, refer to HookNotification.EntityPartialUpdateRequestV2\nENTITY_DELETE_V2         : delete one or more entities. For more details, refer to Java class HookNotification.EntityDeleteRequestV2"))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Notifications.md"}}),l.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-notifications.99002ccf6911e5a378b5.js.map