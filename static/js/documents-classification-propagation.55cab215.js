(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/documents/ClassificationPropagation.md":function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return c});var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),n=t("./theme/components/shared/Img/index.js"),o={},l="wrapper";function c(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)(l,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"classification-propagation"},"Classification Propagation"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Classification propagation enables classifications associated to an entity to be automatically associated with other related entities of the entity. This is very useful in dealing with scenarios where a dataset derives it data from other datasets - like a table loaded with data in a file, a report generated from a table/view, etc. "),Object(s.b)("li",{parentName:"ul"},"For example, when a table is classified as ",Object(s.b)("em",{parentName:"li"},"PII"),", tables or views that derive data from this table (via CTAS or \u2018create view\u2019 operation) will be automatically classified as ",Object(s.b)("em",{parentName:"li"},"PII"),".")),Object(s.b)("h2",{id:"use-cases"},"Use Cases"),Object(s.b)("p",null,"Consider the following lineage where data from a 'hdfs_path' entity is loaded into a table, which is further made available through views. We will go through various scenarios to understand the classification propagation feature."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-1.png",mdxType:"Img"}),Object(s.b)("h2",{id:"add-classification-to-an-entity"},"Add classification to an entity"),Object(s.b)("p",null,"When classification \u2018PII\u2019 is added to 'hdfs_path' entity, the classification is propagated to all impacted entities in the lineage path, including 'employees' table, views 'us_employees' and 'uk_employees' - as shown below."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-2.png",mdxType:"Img"}),Object(s.b)("h2",{id:"update-classification-associated-with-an-entity"},"Update classification associated with an entity"),Object(s.b)("p",null,"Any updates to classifications associated with an entity will be seen in all entities the classification is propagated to as well."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-3.png",mdxType:"Img"}),Object(s.b)("h2",{id:"remove-classification-associated-with-an-entity"},"Remove classification associated with an entity"),Object(s.b)("p",null,"When a classification is deleted from an entity, the classification will be removed from all entities the classification is propagated to as well."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-4.png",mdxType:"Img"}),Object(s.b)("h2",{id:"add-lineage-between-entities"},"Add lineage between entities"),Object(s.b)("p",null,"When lineage is added between entities, for example to capture loading of data in a file to a table, the classifications associated with the source entity are propagated to all impacted entities as well.\nFor example, when a view is created from a table, classifications associated with the table are propagated to the newly created view as well."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-5.png",mdxType:"Img"}),Object(s.b)("h2",{id:"delete-an-entity"},"Delete an entity"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Case 1:"),"\nWhen an entity is deleted, classifications associated with this entity will be removed from all entities the classifications are propagated to.\nFor example. when ",Object(s.b)("em",{parentName:"p"},"employees")," table is deleted, classifications associated with this table are removed from 'employees_view' view."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-6.png",mdxType:"Img"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Case 2:"),"\nWhen an entity is deleted in the middle of a lineage path, the propagation link is broken and previously propagated classifications will be removed from all derived entities of the deleted entity.\nFor example. when 'us_employees' table is deleted, classifications propagating through this table (",Object(s.b)("strong",{parentName:"p"},"PII"),") are removed from 'ca_employees' table, since the only path of propagation is broken by entity deletion."),Object(s.b)(n.a,{src:'/images/twiki/classification-propagation-entity-delete-1.png"',mdxType:"Img"}),Object(s.b)(n.a,{src:'/images/twiki/classification-propagation-entity-delete-2.png"',mdxType:"Img"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Case 3:"),"\nWhen an entity is deleted in the middle of a lineage path and if there exists alternate path for propagation, previously propagated classifications will be retained.\nFor example. when 'us_employees' table is deleted, classifications  propagating (",Object(s.b)("strong",{parentName:"p"},"PII"),") through this table are retained in 'ca_employees' table, since there are two propagation paths available and only one of them is broken by entity deletion."),Object(s.b)(n.a,{src:'/images/twiki/classification-propagation-entity-delete-3.png"',mdxType:"Img"}),Object(s.b)(n.a,{src:'/images/twiki/classification-propagation-entity-delete-4.png"',mdxType:"Img"}),Object(s.b)("h2",{id:"control-propagation"},"Control Propagation"),Object(s.b)("p",null,"Apache Atlas provides few options to control whether/where a classification is propagated.\nThis section details available options."),Object(s.b)("h2",{id:"propagate-flag-in-classification"},"Propagate flag in classification"),Object(s.b)("p",null,"Each association of classification to an entity has a boolean flag that controls whether the classification is propagated or not.\nWhen a classification is associated with an entity, this flag is set to \u2018true\u2019 i.e. the classification will be propagated to all impacted entities. This flag can be updated to desired value during initial association or later."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-7.png",mdxType:"Img"}),Object(s.b)("h2",{id:"propagate-flag-in-lineage-edge"},"Propagate flag in lineage edge"),Object(s.b)("p",null,"Apache Atlas supports a flag at lineage edge to enable/disable propagation of classifications through the edge. By default, the propagation is enabled for lineage edges.\nWhen the flag is turned off, no classification will be propagated through this edge; and propagation of currently propagated classifications through the edge will be reevaluated, so that they can be removed from impacted entities.\nWhen the flag is turned on, propagation of classifications of the source entity will be reevaluated, so that they can be propagated to all impacted entities."),Object(s.b)("h2",{id:"block-propagation-of-specific-classifications-in-lineage-edge"},"Block propagation of specific classifications in lineage edge"),Object(s.b)("p",null,"Apache Atlas supports blocking propagation of specific classifications in at lineage edges.\nThis can be useful, for example, to handle scenarios like: a column classified as PII is masked when creating a view; in such scenario, if corresponding column in the created view might not have PII, hence the propagation of PII classification should be blocked.\nThis can be done by updating the lineage edge to add the PII classification in ",Object(s.b)("em",{parentName:"p"},"\u2018blocked propagated classifications\u2019")," list.\nClassifications in blocked propagated classifications will not be propagated in the derivative/downstream entities."),Object(s.b)(n.a,{src:"/images/twiki/classification-propagation-8.png",mdxType:"Img"}),Object(s.b)("h2",{id:"notifications-and-audit"},"Notifications and Audit"),Object(s.b)("p",null,"When propagated classifications are added/update/deleted, Apache Atlas sends notifications to 'ATLAS_ENTITIES' topic for each entity affected by the propagation."),Object(s.b)("h2",{id:"glossary"},"Glossary"),Object(s.b)("p",null,"When a classification is associated with a glossary term, the classification is automatically propagated to all entities associated with the term."))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/ClassificationPropagation.md"}}),c.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,a,t){"use strict";var i=t("./node_modules/react/index.js"),s=(t("./theme/utils/theme.js"),t("./theme/styles/responsive.js"),t("./node_modules/docz/dist/index.esm.js"));a.a=e=>{const{src:a,width:t,height:n}=e,{baseUrl:o}=Object(s.g)();return i.createElement("div",null,i.createElement("img",{src:`${o}${a}`,height:`${n||"auto"}`,width:`${t||"100%"}`}))}}}]);
//# sourceMappingURL=documents-classification-propagation.e1cd0361652b1ea717f1.js.map