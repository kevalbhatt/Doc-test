(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"./src/documents/TypeSystem.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),o={},r="wrapper";function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(r,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"type-system"},"Type System"),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Atlas allows users to define a model for the metadata objects they want to manage. The model is composed of definitions\ncalled \u2018types\u2019. Instances of \u2018types\u2019 called \u2018entities\u2019 represent the actual metadata objects that are managed. The Type\nSystem is a component that allows users to define and manage the types and entities. All metadata objects managed by\nAtlas out of the box (like Hive tables, for e.g.) are modelled using types and represented as entities. To store new\ntypes of metadata in Atlas, one needs to understand the concepts of the type system component."),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("p",null,"A Type in Atlas is a definition of how a particular type of metadata objects are stored and accessed. A type represents one or a collection of attributes that define the properties for the metadata object. Users with a development background will recognize the similarity of a type to a \u2018Class\u2019 definition of object oriented programming languages, or a \u2018table schema\u2019 of relational databases."),Object(i.b)("p",null,"An example of a type that comes natively defined with Atlas is a Hive table. A Hive table is defined with these\nattributes:"),Object(i.b)(l.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},"Name:         hive_table\nTypeCategory: Entity\nSuperTypes:   DataSet\nAttributes:\n    name:             string\n    db:               hive_db\n    owner:            string\n    createTime:       date\n    lastAccessTime:   date\n    comment:          string\n    retention:        int\n    sd:               hive_storagedesc\n    partitionKeys:    array<hive_column>\n    aliases:          array<string>\n    columns:          array<hive_column>\n    parameters:       map<string>\n    viewOriginalText: string\n    viewExpandedText: string\n    tableType:        string\n    temporary:        boolean"),Object(i.b)("p",null,"The following points can be noted from the above example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A type in Atlas is identified uniquely by a \u2018name\u2019"),Object(i.b)("li",{parentName:"ul"},"A type has a metatype. Atlas has the following metatypes:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Primitive metatypes: boolean, byte, short, int, long, float, double, biginteger, bigdecimal, string, date"),Object(i.b)("li",{parentName:"ul"},"Enum metatypes"),Object(i.b)("li",{parentName:"ul"},"Collection metatypes: array, map"),Object(i.b)("li",{parentName:"ul"},"Composite metatypes: Entity, Struct, Classification, Relationship"))),Object(i.b)("li",{parentName:"ul"},"Entity & Classification types can \u2018extend\u2019 from other types, called \u2018supertype\u2019 - by virtue of this, it will get to include the attributes that are defined in the supertype as well. This allows modellers to define common attributes across a set of related types etc. This is again similar to the concept of how Object Oriented languages define super classes for a class. It is also possible for a type in Atlas to extend from multiple super types.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In this example, every hive table extends from a pre-defined supertype called a \u2018DataSet\u2019. More details about this pre-defined types will be provided later."))),Object(i.b)("li",{parentName:"ul"},"Types which have a metatype of \u2018Entity\u2019, \u2018Struct\u2019, \u2018Classification\u2019 or 'Relationship' can have a collection of attributes. Each attribute has a name (e.g.  \u2018name\u2019) and some other associated properties. A property can be referred to using an expression type_name.attribute_name. It is also good to note that attributes themselves are defined using Atlas metatypes.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In this example, hive_table.name is a String, hive_table.aliases is an array of Strings, hive_table.db refers to an instance of a type called hive_db and so on."))),Object(i.b)("li",{parentName:"ul"},"Type references in attributes, (like hive_table.db) are particularly interesting. Note that using such an attribute, we can define arbitrary relationships between two types defined in Atlas and thus build rich models. Note that one can also collect a list of references as an attribute type (e.g. hive_table.columns which represents a list of references from hive_table to hive_column type)")),Object(i.b)("h2",{id:"entities"},"Entities"),Object(i.b)("p",null,"An \u2018entity\u2019 in Atlas is a specific value or instance of an Entity \u2018type\u2019 and thus represents a specific metadata object in the real world. Referring back to our analogy of Object Oriented Programming languages, an \u2018instance\u2019 is an\u2018Object\u2019 of a certain \u2018Class\u2019."),Object(i.b)("p",null,"An example of an entity will be a specific Hive Table. Say Hive has a table called \u2018customers\u2019 in the \u2018default\u2019database. This table will be an \u2018entity\u2019 in Atlas of type hive_table. By virtue of being an instance of an entity type, it will have values for every attribute that are a part of the Hive table \u2018type\u2019, such as:"),Object(i.b)(l.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'guid:     "9ba387dd-fa76-429c-b791-ffc338d3c91f"\ntypeName: "hive_table"\nstatus:   "ACTIVE"\nvalues:\n    name:             \u201ccustomers\u201d\n    db:               { "guid": "b42c6cfc-c1e7-42fd-a9e6-890e0adf33bc", \n                        "typeName": "hive_db" \n                      }\n    owner:            \u201cadmin\u201d\n    createTime:       1490761686029\n    updateTime:       1516298102877\n    comment:          null\n    retention:        0\n    sd:               { "guid": "ff58025f-6854-4195-9f75-3a3058dd8dcf", \n                        "typeName": \n                        "hive_storagedesc" \n                      }\n    partitionKeys:    null\n    aliases:          null\n    columns:          [ { "guid": "65e2204f-6a23-4130-934a-9679af6a211f", \n                          "typeName": "hive_column" }, \n                        { "guid": "d726de70-faca-46fb-9c99-cf04f6b579a6", \n                          "typeName": "hive_column" }, \n                          ...\n                      ]\n    parameters:       { "transient_lastDdlTime": "1466403208"}\n    viewOriginalText: null\n    viewExpandedText: null\n    tableType:        \u201cMANAGED_TABLE\u201d\n    temporary:        false'),Object(i.b)("p",null,"The following points can be noted from the example above:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Every instance ofan entity type is identified by a unique identifier, a GUID. This GUID is generated by the Atlas server when the object is defined, and remains constant for the entire lifetime of the entity. At any point in time, this particular entity can be accessed using its GUID.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'In this example, the \u2018customers\u2019 table in the default database is uniquely identified by the GUID "9ba387dd-fa76-429c-b791-ffc338d3c91f"'))),Object(i.b)("li",{parentName:"ul"},"An entity is of a given type, and the name of the type is provided with the entity definition.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In this example, the \u2018customers\u2019 table is a \u2018hive_table."))),Object(i.b)("li",{parentName:"ul"},"The values of this entity are a map of all the attribute names and their values for attributes that are defined in the hive_table type definition."),Object(i.b)("li",{parentName:"ul"},"Attribute values will be according to the datatype of the attribute. Entity-type attributes will have value of type AtlasObjectId")),Object(i.b)("p",null,"With this idea on entities, we can now see the difference between Entity and Struct metatypes. Entities and Structs both compose attributes of other types. However, instances of Entity types have an identity (with a GUID value) and can be referenced from other entities (like a hive_db entity is referenced from a hive_table entity). Instances of Struct types do not have an identity of their own. The value of a Struct type is a collection of attributes that are 'embedded' inside the entity itself."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("p",null,"We already saw that attributes are defined inside metatypes like Entity, Struct, Classification and Relationship. But we\nimplistically referred to attributes as having a name and a metatype value. However, attributes in Atlas have some more\nproperties that define more concepts related to the type system."),Object(i.b)("p",null,"An attribute has the following properties:"),Object(i.b)(l.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},"name:        string,\ntypeName:    string,\nisOptional:  boolean,\nisIndexable: boolean,\nisUnique:    boolean,\ncardinality: enum"),Object(i.b)("p",null,"The properties above have the following meanings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"name - the name of the attribute"),Object(i.b)("li",{parentName:"ul"},"dataTypeName - the metatype name of the attribute (native, collection or composite)"),Object(i.b)("li",{parentName:"ul"},"isComposite -",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This flag indicates an aspect of modelling. If an attribute is defined as composite, it means that it cannot have a lifecycle independent of the entity it is contained in. A good example of this concept is the set of columns that make a part of a hive table. Since the columns do not have meaning outside of the hive table, they are defined as composite attributes."),Object(i.b)("li",{parentName:"ul"},"A composite attribute must be created in Atlas along with the entity it is contained in. i.e. A hive column must be created along with the hive table."))),Object(i.b)("li",{parentName:"ul"},"isIndexable -",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This flag indicates whether this property should be indexed on, so that look ups can be performed using the attribute value as a predicate and can be performed efficiently."))),Object(i.b)("li",{parentName:"ul"},"isUnique -",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This flag is again related to indexing. If specified to be unique, it means that a special index is created for this attribute in JanusGraph that allows for equality based look ups."),Object(i.b)("li",{parentName:"ul"},"Any attribute with a true value for this flag is treated like a primary key to distinguish this entity from other entities. Hence care should be taken ensure that this attribute does model a unique property in real world.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For e.g. consider the name attribute of a hive_table. In isolation, a name is not a unique attribute for a hive_table, because tables with the same name can exist in multiple databases. Even a pair of (database name, table name) is not unique if Atlas is storing metadata of hive tables amongst multiple clusters. Only a cluster location, database name and table name can be deemed unique in the physical world."))))),Object(i.b)("li",{parentName:"ul"},"multiplicity - indicates whether this attribute is required, optional, or could be multi-valued. If an entity\u2019s definition of the attribute value does not match the multiplicity declaration in the type definition, this would be a constraint violation and the entity addition will fail. This field can therefore be used to define some constraints on the metadata information.")),Object(i.b)("p",null,"Using the above, let us expand on the attribute definition of one of the attributes of the hive table below.\nLet us look at the attribute called \u2018db\u2019 which represents the database to which the hive table belongs:"),Object(i.b)(l.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'db:\n    "name":        "db",\n    "typeName":    "hive_db",\n    "isOptional":  false,\n    "isIndexable": true,\n    "isUnique":    false,\n    "cardinality": "SINGLE"'),Object(i.b)("p",null,"Note the \u201cisOptional=true\u201d constraint - a table entity cannot be created without a db reference."),Object(i.b)(l.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'columns:\n    "name":        "columns",\n    "typeName":    "array<hive_column>",\n    "isOptional":  optional,\n    "isIndexable": true,\n    \u201cisUnique":    false,\n    "constraints": [ { "type": "ownedRef" } ]'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: The \u201cownedRef\u201d constraint for columns. By doing this, we are indicating that the defined column entities should\nalways be bound to the table entity they are defined with.")),Object(i.b)("p",null,"From this description and examples, you will be able to realize that attribute definitions can be used to influence\nspecific modelling behavior (constraints, indexing, etc) to be enforced by the Atlas system."),Object(i.b)("h2",{id:"system-specific-types-and-their-significance"},"System specific types and their significance"),Object(i.b)("p",null,"Atlas comes with a few pre-defined system types. We saw one example (DataSet) in preceding sections. In this\nsection we will see more of these types and understand their significance."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Referenceable"),": This type represents all entities that can be searched for using a unique attribute called\nqualifiedName."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Asset"),": This type extends Referenceable and adds attributes like name, description and owner. Name is a required\nattribute (isOptional=false), the others are optional."),Object(i.b)("p",null,"The purpose of Referenceable and Asset is to provide modellers with way to enforce consistency when defining and\nquerying entities of their own types. Having these fixed set of attributes allows applications and user interfaces to\nmake convention based assumptions about what attributes they can expect of types by default."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Infrastructure"),": This type extends Asset and typically can be used to be a common super type for infrastructural\nmetadata objects like clusters, hosts etc."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"DataSet"),": This type extends Referenceable. Conceptually, it can be used to represent an type that stores data. In Atlas,\nhive tables, hbase_tables etc are all types that extend from !DataSet. Types that extend !DataSet can be expected to have\na Schema in the sense that they would have an attribute that defines attributes of that dataset. For e.g. the columns\nattribute in a hive_table. Also entities of types that extend !DataSet participate in data transformation and this\ntransformation can be captured by Atlas via lineage (or provenance) graphs."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Process"),": This type extends Asset. Conceptually, it can be used to represent any data transformation operation. For\nexample, an ETL process that transforms a hive table with raw data to another hive table that stores some aggregate can\nbe a specific type that extends the Process type. A Process type has two specific attributes, inputs and outputs. Both\ninputs and outputs are arrays of !DataSet entities. Thus an instance of a Process type can use these inputs and outputs\nto capture how the lineage of a !DataSet evolves."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/TypeSystem.md"}}),b.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-type-system.9f78c44be783800f7ced.js.map