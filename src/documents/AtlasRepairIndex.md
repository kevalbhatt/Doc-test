---
name: Atlas Repair Index
route: /AtlasRepairIndex
menu: Documentation
submenu: AtlasRepairIndex
---
  
# Atlas Repair Index

## Introduction

The document describes the use of the Atlas Index Repair Utility for JanusGraph, with HBase as back-end data store and Solr as index store.

#### Need for this Tool
In rare, cases it is possible that during entity creation, the entity is stored in the data store, but the corresponding indexes are not created in Solr. Since Atlas relies heavily on Solr in the operation of its Basic Search, this will result in entity not being returned by a search. Note that Advanced Search is not affected by this.

#### Location
The tool is part of the normal Atlas installation, it is located under the tools/atlas-index-repair directory.

#### Steps to Execute Tool

##### Complete Restore

If the user needs to restore all the indexes, this can be accomplished by executing the tool with no command-line parameters:

```shell
atlas-index-repair/repair_index.py
```

This will result in vertex_index, edge_index and fulltext_index to be re-built completely. It is recommended that existing contents of these indexes be deleted before executing this restore.

###### Caveats
Note that the full index repair is a time consuming process. Depending on the size of data the process may take days to complete. During the restore process the Basic Search functionality will not be available. Be sure to allocate sufficient time for this activity.

##### Selective Restore

To perform selective restore for an Atlas entity, specify the GUID of that entity:

```shell
atlas-index-repair/repair_index.py [-g \<guid>]
```

Example:

```shell
atlas-index-repair/repair_index.py -g 13d77457-2a45-4e92-ad53-a172c7cb70a5
```

Note that Atlas will use REST APIs to fetch the entity, which will need correct authentication mechanism to be specified based on the installation.

For an Atlas installation with username and password use:

```shell
atlas-index-repair/repair_index.py [-g \<guid>] [-u \<user>] [-p \<password>] 
```
* guid: [optional] specify guid for which indexes are to be updated  
* user: [optional] specify username for atlas instance
* password: [optional] specify password for atlas instance

Example: 
```shell
atlas-index-repair/repair_index.py -u admin -p admin123 -g 13d77457-2a45-4e92-ad53-a172c7cb70a5 
```

For Atlas installation that uses kerberos as authentication mode,
use: kinit -kt /etc/security/keytabs/atlas.service.keytab atlas/fqdn@DOMAIN

Example:
```shell
kinit -kt /etc/security/keytabs/atlas.service.keytab atlas/fqdn@EXAMPLE.com

atlas-index-repair/repair_index.py -g 13d77457-2a45-4e92-ad53-a172c7cb70a5
```
