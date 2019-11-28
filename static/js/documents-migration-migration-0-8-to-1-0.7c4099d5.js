(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/documents/Migration/Migration-0.8-to-1.0.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),n=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),o=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},r="wrapper";function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.mdx)(r,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"migrating-data-from-apache-atlas-08-to-apache-atlas-10"},"Migrating data from Apache Atlas 0.8 to Apache Atlas 1.0"),Object(l.mdx)("p",null,"Apache Atlas 1.0 uses JanusGraph graph database to store its type and entity details. Prior versions of Apache Atlas\nuse Titan 0.5.4 graph database. The two databases use different formats for storage. For deployments upgrading from\nearlier version Apache Atlas, the data in Titan 0.5.4 graph database should be migrated to JanusGraph graph database."),Object(l.mdx)("p",null,"In addition to the change to the graph database, Apache Atlas 1.0 introduces few optimizations that require different internal\nrepresentation compared to previous versions. Migration steps detailed below will transform data to be compliant with\nthe new internal representation."),Object(l.mdx)("h3",{id:"migration-steps"},"Migration Steps"),Object(l.mdx)("p",null,"Migration of data is done in following steps:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Planning the migration."),Object(l.mdx)("li",{parentName:"ul"},"Export Apache Atlas 0.8 data to a directory on the file system."),Object(l.mdx)("li",{parentName:"ul"},"Import data from exported files into Apache Atlas 1.0.")),Object(l.mdx)("h4",{id:"planning-the-migration"},"Planning the migration"),Object(l.mdx)("p",null,"The duration of migration of data from Apache Atlas 0.8 to Apache Atlas 1.0 can be significant, depending upon the\namount of data present in Apache Atlas. This section helps you to estimate the time to migrate, so that you can plan the\nupgrade process better."),Object(l.mdx)("p",null,"To estimate the time needed to export data, first you need to find the number of entities in Apache Atlas 0.8. This can\nbe done by running the following DSL query:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"sql",style:n.a,mdxType:"SyntaxHighlighter"},"Referenceable select count()"),Object(l.mdx)("p",null,"Assuming Apache Atlas is deployed in a quad-core CPU with 4 GB of RAM allocated:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Export from Apache Atlas 0.8 will process approximately 2 million entities per hour."),Object(l.mdx)("li",{parentName:"ul"},"Import into Apache Atlas 1.0 will process approximately 0.7 million entities per hour.")),Object(l.mdx)("h4",{id:"exporting-data-from-apache-atlas-08"},"Exporting data from Apache Atlas 0.8"),Object(l.mdx)("p",null,Object(l.mdx)("em",{parentName:"p"},"Atlas Migration Export Utility")," from Apache Atlas branch-0.8 should be used to export the data from Apache Atlas 0.8 deployments. The implementation of which can be found ",Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/apache/atlas/tree/branch-0.8/tools/atlas-migration-exporter"}),"here"),"."),Object(l.mdx)("p",null,"To build this utility:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Navigate to root directory of Apache Atlas branch-0.8 local repo (say, ",Object(l.mdx)("em",{parentName:"li"},"/home/atlas/"),")"),Object(l.mdx)("li",{parentName:"ul"},"Build using the command: ",Object(l.mdx)("em",{parentName:"li"},"mvn clean -DskipTests package -Pdist"),"."),Object(l.mdx)("li",{parentName:"ul"},"After successful build, the ",Object(l.mdx)("em",{parentName:"li"},"Atlas Migration Utility")," can be found in this ",Object(l.mdx)("em",{parentName:"li"},"distro/target")," directory. (Say, ",Object(l.mdx)("em",{parentName:"li"},"/home/atlas/distro/target/apache-atlas-0.8.3-SNAPSHOT-bin/apache-atlas-0.8.3-SNAPSHOT/tools/migration-exporter"),")")),Object(l.mdx)("p",null,"Move the ",Object(l.mdx)("em",{parentName:"p"},"Atlas Migration Utility")," directory to the Apache Atlas 0.8 cluster."),Object(l.mdx)("p",null,"Follow these steps to export the data:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Shutdown ",Object(l.mdx)("em",{parentName:"li"},"Apache Atlas 0.8"),", so that the database is not updated while the migration is in progress."),Object(l.mdx)("li",{parentName:"ul"},"Execute the following command to export Apache Atlas data in Titan graph database to the specified directory:")),Object(l.mdx)(o.a,{wrapLines:!0,language:"json",style:n.a,mdxType:"SyntaxHighlighter"},"atlas_migration_export.py -d <output directory>"),Object(l.mdx)("p",null,"Example:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"/home/atlas-migration-utility/atlas_migration_export.py -d /home/atlas-0.8-data"),Object(l.mdx)("p",null,"On successful execution, ",Object(l.mdx)("em",{parentName:"p"},"Atlas Migration Utility")," tool will display messages like these:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas-migration-export: starting migration export. Log file location /var/log/atlas/atlas-migration-exporter.log\natlas-migration-export: initializing\natlas-migration-export: initialized\natlas-migration-export: exporting typesDef to file /home/atlas-0.8-data/atlas-migration-typesdef.json\natlas-migration-export: exported  typesDef to file /home/atlas-0.8-data/atlas-migration-typesdef.json\natlas-migration-export: exporting data to file /home/atlas-0.8-data/atlas-migration-data.json\natlas-migration-export: exported  data to file /home/atlas-0.8-data/atlas-migration-data.json\natlas-migration-export: completed migration export"),Object(l.mdx)("p",null,"More details on the progress of export can be found in a log file named ",Object(l.mdx)("em",{parentName:"p"},"atlas-migration-exporter.log"),", in the log directory\nspecified in ",Object(l.mdx)("em",{parentName:"p"},"atlas-log4j.xml"),"."),Object(l.mdx)("h3",{id:"before-importing-into-apache-atlas-10"},"Before importing into Apache Atlas 1.0"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"For Apache Atlas deployments that use Solr as index store, please ensure that existing Apache Atlas specific collections are deleted or renamed before installing Apache Atlas 1.0.")),Object(l.mdx)("p",null,"Apache Atlas specific Solr collections can be deleted using CURL commands shown below:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"curl 'http://<solrHost:port>/solr/admin/collections?action=DELETE&name=vertex_index'\ncurl 'http://<solrHost:port>/solr/admin/collections?action=DELETE&name=edge_index'\ncurl 'http://<solrHost:port>/solr/admin/collections?action=DELETE&name=fulltext_index'"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Create Solr collections for Apache Atlas 1.0\nApache Atlas specific Solr collections can be created using CURL commands shown below:")),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"curl 'http://<solrHost:port>/solr/admin/collections?action=CREATE&name=vertex_index&numShards=1&replicationFactor=1&collection.configName=atlas_configs'\n   curl 'http://<solrHost:port>/solr/admin/collections?action=CREATE&name=edge_index&numShards=1&replicationFactor=1&collection.configName=atlas_configs'\n   curl 'http://<solrHost:port>/solr/admin/collections?action=CREATE&name=fulltext_index&numShards=1&replicationFactor=1&collection.configName=atlas_configs'"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"For Apache Atlas deployments that use HBase as backend store, please note that HBase table used by earlier version can't be used by Apache Atlas 1.0. If you are constrained on disk storage space, the table used by earlier version can be removed after successful export of data.",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Apache Atlas 0.8 uses HBase table named 'atlas_titan' (by default)"),Object(l.mdx)("li",{parentName:"ul"},"Apache Atlas 1.0 uses HBase table named 'atlas_janus' (by default)")))),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install Apache Atlas 1.0. Do not start yet!")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Make sure the directory containing exported data is accessible to Apache Atlas 1.0 instance.")),Object(l.mdx)("h4",{id:"importing-data-into-apache-atlas-10"},"Importing Data into Apache Atlas 1.0"),Object(l.mdx)("p",null,"Please follow the steps below to import the data exported above into Apache Atlas 1.0:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Specify the location of the directory containing exported data in following property to ",Object(l.mdx)("em",{parentName:"li"},"atlas-application.properties"),":")),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},"atlas.migration.data.filename=<location of the directory containing exported data>"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Start Apache Atlas 1.0. Apache Atlas will start in migration mode. It will start importing data from the specified directory.")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Monitor the progress of import process with the following curl command:")),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:n.a,mdxType:"SyntaxHighlighter"},'curl -X GET -u admin:<password> -H "Content-Type: application/json" -H "Cache-Control: no-cache" http://<atlasHost>:port/api/atlas/admin/status'),Object(l.mdx)("p",null,"Progress of import will be indicated by a message like this:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"json",style:n.a,mdxType:"SyntaxHighlighter"},'{"Status":"MIGRATING","MigrationStatus":{"operationStatus":"IN_PROGRESS","startTime":1526512275110,"endTime":1526512302750,"currentIndex":10,"currentCounter":101,"totalCount":0}}'),Object(l.mdx)("p",null,"Successful completion of the operation will show a message like this:"),Object(l.mdx)(o.a,{wrapLines:!0,language:"json",style:n.a,mdxType:"SyntaxHighlighter"},'{"Status":"MIGRATING","MigrationStatus":{"operationStatus":"SUCCESS","startTime":1526512275110,"endTime":1526512302750,"currentIndex":0,"currentCounter":0,"totalCount":371}}'),Object(l.mdx)("p",null,"Once migration import is complete, i.e. ",Object(l.mdx)("em",{parentName:"p"},"operationStatus")," is ",Object(l.mdx)("em",{parentName:"p"},"SUCCESS"),", follow the steps given below to restart Apache Atlas\nin ",Object(l.mdx)("em",{parentName:"p"},"ACTIVE")," mode for regular use:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Stop Apache Atlas 1.0."),Object(l.mdx)("li",{parentName:"ul"},"Remove property ",Object(l.mdx)("em",{parentName:"li"},"atlas.migration.data.filename")," from ",Object(l.mdx)("em",{parentName:"li"},"atlas-application.properties"),"."),Object(l.mdx)("li",{parentName:"ul"},"Start Apache Atlas 1.0.")),Object(l.mdx)("h3",{id:"atlas-entity-defaults-for-migrated-data"},"Atlas Entity Defaults for Migrated Data"),Object(l.mdx)("p",null,"Apache Atlas 1.0 introduces number of new features. For data that is migrated, the following defaults are set:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"All classifications will have ",Object(l.mdx)("em",{parentName:"li"},"isPropagate")," set to ",Object(l.mdx)("em",{parentName:"li"},"false"),"."),Object(l.mdx)("li",{parentName:"ul"},"Taxonomy terms present in Apache Atlas 0.8, if any, will be converted to classification.")),Object(l.mdx)("h4",{id:"handling-of-entity-definitions-that-use-classifications-as-types"},"Handling of Entity Definitions that use Classifications as Types"),Object(l.mdx)("p",null,"This features is no longer supported. Classifications that are used as types in ",Object(l.mdx)("em",{parentName:"p"},"attribute definitions")," (",Object(l.mdx)("em",{parentName:"p"},"AttributeDefs"),") are converted in to new types whose name has ",Object(l.mdx)("em",{parentName:"p"},"legacy")," prefix. These are then handled like any other type.\nCreation of such types was prevented in an earlier release, hence only type definitions have potential to exist. Care has been taken to handle entities of this type as well."))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Migration/Migration-0.8-to-1.0.md"}}),m.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var i=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");i.a.hljs.color="#37bb9b",t.a=i.a}}]);
//# sourceMappingURL=documents-migration-migration-0-8-to-1-0.7cfe167678c6588a5eb9.js.map