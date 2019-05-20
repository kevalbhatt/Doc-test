(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/Migration-0.8-to-1.0.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),o={},l="wrapper";function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(l,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"migrating-data-from-apache-atlas-08-to-apache-atlas-10"},"Migrating data from Apache Atlas 0.8 to Apache Atlas 1.0"),Object(i.b)("p",null,"Apache Atlas 1.0 uses !JanusGraph graph database to store its type and entity details. Prior versions of Apache Atlas\nuse Titan 0.5.4 graph database. The two databases use different formats for storage. For deployments upgrading from\nearlier version Apache Atlas, the data in Titan 0.5.4 graph database should be migrated to !JanusGraph graph database."),Object(i.b)("p",null,"In addition to the change to the graph database, Apache Atlas 1.0 introduces few optimizations that require different internal\nrepresentation compared to previous versions. Migration steps detailed below will transform data to be compliant with\nthe new internal representation."),Object(i.b)("h3",{id:"migration-steps"},"Migration Steps"),Object(i.b)("p",null,"Migration of data is done in following steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Planning the migration."),Object(i.b)("li",{parentName:"ul"},"Export Apache Atlas 0.8 data to a directory on the file system."),Object(i.b)("li",{parentName:"ul"},"Import data from exported files into Apache Atlas 1.0.")),Object(i.b)("h5",{id:"planning-the-migration"},"Planning the migration"),Object(i.b)("p",null,"The duration of migration of data from Apache Atlas 0.8 to Apache Atlas 1.0 can be significant, depending upon the\namount of data present in Apache Atlas. This section helps you to estimate the time to migrate, so that you can plan the\nupgrade process better."),Object(i.b)("p",null,"To estimate the time needed to export data, first you need to find the number of entities in Apache Atlas 0.8. This can\nbe done by running the following DSL query:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"Referenceable select count()\n")),Object(i.b)("p",null,"Assuming Apache Atlas is deployed in a quad-core CPU with 4 GB of RAM allocated:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Export from Apache Atlas 0.8 will process approximately 2 million entities per hour."),Object(i.b)("li",{parentName:"ul"},"Import into Apache Atlas 1.0 will process approximately 0.7 million entities per hour.")),Object(i.b)("h4",{id:"exporting-data-from-apache-atlas-08"},"Exporting data from Apache Atlas 0.8"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Atlas Migration Export Utility")," from Apache Atlas branch-0.8 should be used to export the data from Apache Atlas 0.8 deployments. The implementation of which can be found ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/apache/atlas/tree/branch-0.8/tools/atlas-migration-exporter"}),"here"),"."),Object(i.b)("p",null,"To build this utility:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to root directory of Apache Atlas branch-0.8 local repo (say, ",Object(i.b)("em",{parentName:"li"},"/home/atlas/"),")"),Object(i.b)("li",{parentName:"ul"},"Build using the command: ",Object(i.b)("em",{parentName:"li"},"mvn clean -DskipTests package -Pdist"),"."),Object(i.b)("li",{parentName:"ul"},"After successful build, the ",Object(i.b)("em",{parentName:"li"},"Atlas Migration Utility")," can be found in this ",Object(i.b)("em",{parentName:"li"},"distro/target")," directory. (Say, ",Object(i.b)("em",{parentName:"li"},"/home/atlas/distro/target/apache-atlas-0.8.3-SNAPSHOT-bin/apache-atlas-0.8.3-SNAPSHOT/tools/migration-exporter"),")")),Object(i.b)("p",null,"Move the ",Object(i.b)("em",{parentName:"p"},"Atlas Migration Utility")," directory to the Apache Atlas 0.8 cluster."),Object(i.b)("p",null,"Follow these steps to export the data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Shutdown ",Object(i.b)("em",{parentName:"li"},"Apache Atlas 0.8"),", so that the database is not updated while the migration is in progress."),Object(i.b)("li",{parentName:"ul"},"Execute the following command to export Apache Atlas data in Titan graph database to the specified directory:")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"   atlas_migration_export.py -d <output directory>\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"   /home/atlas-migration-utility/atlas_migration_export.py -d /home/atlas-0.8-data\n")),Object(i.b)("p",null,"On successful execution, ",Object(i.b)("em",{parentName:"p"},"Atlas Migration Utility")," tool will display messages like these:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"atlas-migration-export: starting migration export. Log file location /var/log/atlas/atlas-migration-exporter.log\natlas-migration-export: initializing\natlas-migration-export: initialized\natlas-migration-export: exporting typesDef to file /home/atlas-0.8-data/atlas-migration-typesdef.json\natlas-migration-export: exported  typesDef to file /home/atlas-0.8-data/atlas-migration-typesdef.json\natlas-migration-export: exporting data to file /home/atlas-0.8-data/atlas-migration-data.json\natlas-migration-export: exported  data to file /home/atlas-0.8-data/atlas-migration-data.json\natlas-migration-export: completed migration export!\n")),Object(i.b)("p",null,"More details on the progress of export can be found in a log file named ",Object(i.b)("em",{parentName:"p"},"atlas-migration-exporter.log"),", in the log directory\nspecified in ",Object(i.b)("em",{parentName:"p"},"atlas-log4j.xml"),"."),Object(i.b)("h3",{id:"before-importing-into-apache-atlas-10"},"Before importing into Apache Atlas 1.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For Apache Atlas deployments that use Solr as index store, please ensure that existing Apache Atlas specific collections are deleted or renamed before installing Apache Atlas 1.0.")),Object(i.b)("p",null,"Apache Atlas specific Solr collections can be deleted using CURL commands shown below:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"curl 'http://<solrHost:port>/solr/admin/collections?action=DELETE&name=vertex_index'\ncurl 'http://<solrHost:port>/solr/admin/collections?action=DELETE&name=edge_index'\ncurl 'http://<solrHost:port>/solr/admin/collections?action=DELETE&name=fulltext_index'\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create Solr collections for Apache Atlas 1.0\nApache Atlas specific Solr collections can be created using CURL commands shown below:")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"curl 'http://<solrHost:port>/solr/admin/collections?action=CREATE&name=vertex_index&numShards=1&replicationFactor=1&collection.configName=atlas_configs'\ncurl 'http://<solrHost:port>/solr/admin/collections?action=CREATE&name=edge_index&numShards=1&replicationFactor=1&collection.configName=atlas_configs'\ncurl 'http://<solrHost:port>/solr/admin/collections?action=CREATE&name=fulltext_index&numShards=1&replicationFactor=1&collection.configName=atlas_configs'\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For Apache Atlas deployments that use HBase as backend store, please note that HBase table used by earlier version can't be used by Apache Atlas 1.0. If you are constrained on disk storage space, the table used by earlier version can be removed after successful export of data."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Apache Atlas 0.8 uses HBase table named 'atlas_titan' (by default)"),Object(i.b)("li",{parentName:"ul"},"Apache Atlas 1.0 uses HBase table named 'atlas_janus' (by default)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install Apache Atlas 1.0. Do not start yet!")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make sure the directory containing exported data is accessible to Apache Atlas 1.0 instance."))),Object(i.b)("h4",{id:"importing-data-into-apache-atlas-10"},"Importing Data into Apache Atlas 1.0"),Object(i.b)("p",null,"Please follow the steps below to import the data exported above into Apache Atlas 1.0:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Specify the location of the directory containing exported data in following property to ",Object(i.b)("em",{parentName:"li"},"atlas-application.properties"),":")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"atlas.migration.data.filename=<location of the directory containing exported data>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start Apache Atlas 1.0. Apache Atlas will start in migration mode. It will start importing data from the specified directory.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Monitor the progress of import process with the following curl command:"))),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),'curl -X GET -u admin:<password> -H "Content-Type: application/json" -H "Cache-Control: no-cache" http://<atlasHost>:port/api/atlas/admin/status\n')),Object(i.b)("p",null,"Progress of import will be indicated by a message like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),'{"Status":"MIGRATING","MigrationStatus":{"operationStatus":"IN_PROGRESS","startTime":1526512275110,"endTime":1526512302750,"currentIndex":10,"currentCounter":101,"totalCount":0}}\n')),Object(i.b)("p",null,"Successful completion of the operation will show a message like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),'{"Status":"MIGRATING","MigrationStatus":{"operationStatus":"SUCCESS","startTime":1526512275110,"endTime":1526512302750,"currentIndex":0,"currentCounter":0,"totalCount":371}}\n')),Object(i.b)("p",null,"Once migration import is complete, i.e. ",Object(i.b)("em",{parentName:"p"},"operationStatus")," is ",Object(i.b)("em",{parentName:"p"},"SUCCESS"),", follow the steps given below to restart Apache Atlas\nin ",Object(i.b)("em",{parentName:"p"},"ACTIVE")," mode for regular use:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Stop Apache Atlas 1.0."),Object(i.b)("li",{parentName:"ul"},"Remove property ",Object(i.b)("em",{parentName:"li"},"atlas.migration.data.filename")," from ",Object(i.b)("em",{parentName:"li"},"atlas-application.properties"),"."),Object(i.b)("li",{parentName:"ul"},"Start Apache Atlas 1.0.")),Object(i.b)("h3",{id:"atlas-entity-defaults-for-migrated-data"},"Atlas Entity Defaults for Migrated Data"),Object(i.b)("p",null,"Apache Atlas 1.0 introduces number of new features. For data that is migrated, the following defaults are set:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All classifications will have ",Object(i.b)("em",{parentName:"li"},"isPropagate")," set to ",Object(i.b)("em",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},"Taxonomy terms present in Apache Atlas 0.8, if any, will be converted to classification.")),Object(i.b)("h4",{id:"handling-of-entity-definitions-that-use-classifications-as-types"},"Handling of Entity Definitions that use Classifications as Types"),Object(i.b)("p",null,"This features is no longer supported. Classifications that are used as types in ",Object(i.b)("em",{parentName:"p"},"attribute definitions")," (",Object(i.b)("em",{parentName:"p"},"AttributeDefs"),") are converted in to new types whose name has ",Object(i.b)("em",{parentName:"p"},"legacy")," prefix. These are then handled like any other type.\nCreation of such types was prevented in an earlier release, hence only type definitions have potential to exist. Care has been taken to handle entities of this type as well."))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Migration-0.8-to-1.0.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=migration-0-8-to-1-0.718bb1c7215c8fb43d57.js.map