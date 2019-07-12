(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/documents/Search/Search-Advanced.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),l=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),s={},b="wrapper";function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(b,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"advanced-search"},"Advanced Search"),Object(i.b)("h3",{id:"background"},Object(i.b)("strong",{parentName:"h3"},"Background")),Object(i.b)("p",null,"Advanced Search in Atlas is also referred to as DSL-based Search."),Object(i.b)("p",null,"Domain Specific Search (DSL) is a language with simple constructs that help users navigate Atlas data repository. The syntax loosely emulates the popular Structured Query Language (SQL) from relation database world."),Object(i.b)("p",null,"Benefits of DSL:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Abstracts the implementation-level database constructs. This avoids the necessity of knowing about the underlying graph database constructs."),Object(i.b)("li",{parentName:"ul"},"User are provided with an abstraction that helps them retrieve the data by just being aware of the types and their relationships within their dataset."),Object(i.b)("li",{parentName:"ul"},"Allows for a way to specify the desired output."),Object(i.b)("li",{parentName:"ul"},"Use of classifications is accounted for in the syntax."),Object(i.b)("li",{parentName:"ul"},"Provides way to group and aggregate results.")),Object(i.b)("p",null,"We will be using the quick start dataset in the examples that follow. This dataset is comprehensive enough to be used to to demonstrate the various features of the language."),Object(i.b)("p",null,"For details on the grammar, please refer to Atlas DSL Grammer on ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/apache/atlas/blob/master/repository/src/main/java/org/apache/atlas/query/antlr4/AtlasDSLParser.g4"}),"Github")," (Antlr G4 format)."),Object(i.b)("h2",{id:"using-advanced-search"},"Using Advanced Search"),Object(i.b)("p",null,"Within the Atlas UI, select Advanced in the Search pane on the left."),Object(i.b)("p",null,"Notice that the ",Object(i.b)("em",{parentName:"p"},"Favorite Searches")," pane below the ",Object(i.b)("em",{parentName:"p"},"Search By Query")," box. Like ",Object(i.b)("em",{parentName:"p"},"Basic Search"),", it is possible to save the ",Object(i.b)("em",{parentName:"p"},"Advanced Searches")," as well."),Object(i.b)("h2",{id:"introduction-to-domain-specific-language"},"Introduction to Domain Specific Language"),Object(i.b)("p",null,"DSL uses the familiar SQL-like syntax."),Object(i.b)("p",null,"At a high-level a query has a ",Object(i.b)("em",{parentName:"p"},"from-where-select")," format. Additional keywords like ",Object(i.b)("em",{parentName:"p"},"grouby"),", ",Object(i.b)("em",{parentName:"p"},"orderby"),", ",Object(i.b)("em",{parentName:"p"},"limit")," can be used to added to affect the output. We will see examples of these below."),Object(i.b)("h3",{id:"from-clause"},"From Clause"),Object(i.b)("p",null,"Specifying the ",Object(i.b)("em",{parentName:"p"},"from")," clause is mandatory. Using the ",Object(i.b)("em",{parentName:"p"},"from")," keyword itself is optional. The value specified in the ",Object(i.b)("em",{parentName:"p"},"from")," clause acts as the source or starting point for the rest of the query to source its inputs."),Object(i.b)("p",null,"Example: To retrieve all entities of type ",Object(i.b)("em",{parentName:"p"},"DB"),":"),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"DB\nfrom DB"),Object(i.b)("p",null,"In the absence of ",Object(i.b)("em",{parentName:"p"},"where")," for filtering on the source, the dataset fetched by the ",Object(i.b)("em",{parentName:"p"},"from")," clause is everything from the database. Based on the size of the data present in the database, there is a potential to overwhelm the server. The query processor thus adds ",Object(i.b)("em",{parentName:"p"},"limit")," clause with a default value set. See the section on ",Object(i.b)("em",{parentName:"p"},"limit")," clause for details."),Object(i.b)("h3",{id:"where-clause"},"Where Clause"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"where")," clause allows for filtering over the dataset. This achieved by using conditions within the where clause."),Object(i.b)("p",null,"A conditions is identifier followed by an operator followed by a literal. Literal must be enclosed in single or double quotes. Example, ",Object(i.b)("em",{parentName:"p"},'name = "Sales"'),". An identifier can be name of the property of the type specified in the ",Object(i.b)("em",{parentName:"p"},"from")," clause or an alias."),Object(i.b)("p",null,"Example: To retrieve entity of type ",Object(i.b)("em",{parentName:"p"},"Table")," with a specific name say time_dim:"),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"from Table where name = 'time_dim'"),Object(i.b)("p",null,"It is possible to specify multiple conditions by combining them using ",Object(i.b)("em",{parentName:"p"},"and"),", ",Object(i.b)("em",{parentName:"p"},"or")," operators."),Object(i.b)("p",null,"Example: To retrieve entity of type Table with name that can be either time_dim or customer_dim:"),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"from Table where name = 'time_dim' or name = 'customer_dim'"),Object(i.b)("p",null,"Filtering based on a list of values is done using by specifying the values in the square brackets. A value array is a list of values enclosed within square brackets. This is a simple way to specify an OR clause on an identifier."),Object(i.b)("p",null,"Note that having several OR clauses on the same attribute may be inefficient. Alternate way is to use the value array as shown in the example below."),Object(i.b)("p",null,"Example: The query in the example above can be written using a value array as shown below."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},'from Table where name = ["customer_dim", "time_dim"]'),Object(i.b)("p",null,"A condition that uses the LIKE operator, allows for filtering using wildcards like '*' or '?'.\nExample: To retrieve entity of type ",Object(i.b)("em",{parentName:"p"},"Table")," whose name ends with '_dim':"),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"from Table where name LIKE '*_dim'"),Object(i.b)("p",null,"Additional forms of regular expressions can also be used."),Object(i.b)("p",null,"Example: To retrieve ",Object(i.b)("em",{parentName:"p"},"DB")," whose name starts with ",Object(i.b)("em",{parentName:"p"},"R")," followed by has any 3 characters, followed by ",Object(i.b)("em",{parentName:"p"},"rt")," followed by at least 1 character, followed by none or any number of characters."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},'DB where name like "R???rt?*"'),Object(i.b)("h3",{id:"using-date-literals"},"Using Date Literals"),Object(i.b)("p",null,"Dates used in literals need to be specified using the ISO 8601 format."),Object(i.b)("p",null,"Dates in this format follow this notation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"yyyy-MM-ddTHH:mm:ss.SSSZ"),". Which means, year-month-day followed by time in hour-minutes-seconds-milli-seconds. Date and time need to be separated by 'T'. It should end with 'Z'."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"yyyy-MM-dd"),". Which means, year-month-day.")),Object(i.b)("p",null,"Example: Date represents December 11, 2017 at 2:35 AM."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"2017-12-11T02:35:0.0Z"),Object(i.b)("p",null,"Example: To retrieve entity of type ",Object(i.b)("em",{parentName:"p"},"Table")," created within 2017 and 2018."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"from Table where createTime < '2018-01-01' and createTime > '2017-01-01'"),Object(i.b)("h4",{id:"using-boolean-literals"},"Using Boolean Literals"),Object(i.b)("p",null,"Properties of entities of type boolean can be used within queries."),Object(i.b)("p",null,"Eample: To retrieve entity of type hdfs",Object(i.b)("em",{parentName:"p"},"path whose attribute _isFile")," is set to ",Object(i.b)("em",{parentName:"p"},"true")," and whose name is ",Object(i.b)("em",{parentName:"p"},"Invoice"),"."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},'from hdfs_path where isFile = true or name = "Invoice"'),Object(i.b)("p",null,"Valid values for boolean literals are 'true' and 'false'."),Object(i.b)("h3",{id:"existence-of-a-property"},"Existence of a Property"),Object(i.b)("p",null,"The has keyword can be used with or without the where clause. It is used to check existence of a property in an entity."),Object(i.b)("p",null,"Example: To retreive entity of type Table with a property locationUri."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table has locationUri\nfrom Table where Table has locationUri"),"### Select Clause If you noticed the output displayed on the web page, it displays a tabular display, each row corresponding to an entity and columns are properties of that entity. The select clause allows for choosing the properties of entity that are of interest.",Object(i.b)("p",null,"Example: To retrieve entity of type ",Object(i.b)("em",{parentName:"p"},"Table")," with few properties:"),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"from Table select owner, name, qualifiedName"),"Example: To retrieve entity of type Table for a specific table with some properties.",Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"from Table where name = 'customer_dim' select owner, name, qualifiedName"),Object(i.b)("p",null,"To display column headers that are more meaningful, aliases can be added using the 'as' clause."),Object(i.b)("p",null,"Example: To display column headers as 'Owner', 'Name' and 'FullName'."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"from Table select owner as Owner, name as Name, qualifiedName as FullName"),Object(i.b)("h4",{id:"note-about-select-clauses"},"Note About Select Clauses"),Object(i.b)("p",null,"Given the complexity involved in using select clauses, these are the few rules to remember when using select clauses:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Works with all immediate attributes."),Object(i.b)("li",{parentName:"ul"},"Works with Immediate attributes and aggregation on immediate attributes."),Object(i.b)("li",{parentName:"ul"},"Referred attributes cannot be mixed with immediate attributes.")),Object(i.b)("p",null,"Example: To retrieve entity of type Table with name 'Sales' and display 'name' and 'owner' attribute of the referred entity DB."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"Table where name = 'abcd' select DB.name, DB.owner"),Object(i.b)("p",null,"Current implementation does not allow the following:"),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table where name = 'abcd' select DB.name, Table.name"),Object(i.b)("h3",{id:"classification-based-filtering"},"Classification-based Filtering"),Object(i.b)("p",null,"In order to retrieve entities based on classification, a query would use ",Object(i.b)("em",{parentName:"p"},"is")," or ",Object(i.b)("em",{parentName:"p"},"isa")," keywords."),Object(i.b)("p",null,"Example: To retrieve all entities of type ",Object(i.b)("em",{parentName:"p"},"Table")," that are tagged with ",Object(i.b)("em",{parentName:"p"},"Dimension")," classification."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"from Table isa Dimension"),Object(i.b)("p",null,"Since, from is optional and ",Object(i.b)("em",{parentName:"p"},"is")," (or ",Object(i.b)("em",{parentName:"p"},"isa"),") are equivalent, the following queries yield the same results:"),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table is Dimension"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"is")," and ",Object(i.b)("em",{parentName:"p"},"isa")," clauses can also be used in ",Object(i.b)("em",{parentName:"p"},"where")," condition like:"),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"from Table where Table isa Dimension"),Object(i.b)("p",null,"To search for all entities having a particular classification, simply use the name of the classification."),Object(i.b)("p",null,"Example: To retrieve all entities that have ",Object(i.b)("em",{parentName:"p"},"Dimension")," classification."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"Dimension"),Object(i.b)("h3",{id:"limit--offset-clauses"},"Limit & Offset Clauses"),Object(i.b)("p",null,"Often a query yields large number of results. To limit the outcome of the query, the limit and offset clauses are used."),Object(i.b)("p",null,"Example: To retrieve only the 5 entities from a result set."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"Column limit 5"),Object(i.b)("p",null,"The offset clauses retrieves results after the offset value."),Object(i.b)("p",null,"Example: To retrieve only 5 entities from the result set after skipping the first 10."),Object(i.b)(l.a,{wrapLines:!0,language:"sql",style:r.a,mdxType:"SyntaxHighlighter"},"Column limit 5 offset 10"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"limit")," and ",Object(i.b)("em",{parentName:"p"},"offset")," clauses are usually specified in conjunction."),Object(i.b)("p",null,"If no limit clause is specified in the query, a limit clause with a default limit (usually 100) is added to the query. This prevents the query from inadvertently fetching large number of results."),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"offset")," clause is useful for displaying results in a user interface where few results from the result set are showing and more results are fetched as the user advances to next page."),Object(i.b)("h3",{id:"ordering-results"},"Ordering Results"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"orderby")," clause allows for sorting of results. Results are sorted in ascending order by default. Only immediate attributes can be used within this clause."),Object(i.b)("p",null,"Ordering can be changed by using:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ASC Sort in ascending order. This is the default. If no ordering is specified after the ",Object(i.b)("em",{parentName:"li"},"orderby")," clause."),Object(i.b)("li",{parentName:"ul"},"DESC Sort in descending order. This needs to be explicitly specified after the ",Object(i.b)("em",{parentName:"li"},"orderby")," clause.")),Object(i.b)("p",null,"Example: To retrieve the entities of type ",Object(i.b)("em",{parentName:"p"},"Column")," that are sorted in ascending order using the name property."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"from Column orderby name\nfrom Column orderby name asc"),Object(i.b)("p",null,"Example: Same results as above except that they are sorted in descending order."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"from Column orderby name desc"),Object(i.b)("h3",{id:"aggregate-functions"},"Aggregate Functions"),Object(i.b)("p",null,"Let's look at aggregate functions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"sum"),": Adds (sums up) a value of the property specified, within the result set."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"min"),": Finds the minimum value of the property specified, within a result set."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"max"),": Finds the maximum value of the property specified, within a result set."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"count"),": Finds the number of items specified by the group by clause.")),Object(i.b)("p",null,"These work only on immediate attributes."),Object(i.b)("p",null,"Other examples of these in the ",Object(i.b)("em",{parentName:"p"},"Grouping Results")," section."),Object(i.b)("h3",{id:"the-count-keyword"},"The count Keyword"),Object(i.b)("p",null,"Shows the number of items in a result set."),Object(i.b)("p",null,"Example: To know how may entities of a type Column."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Column select count()"),"Example: Same as above with alias.",Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Column select count() as Cols"),Object(i.b)("p",null,"Example: To find the number of tables in a database."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},'Table where db.name = "Reporting" select count()'),Object(i.b)("h3",{id:"the-max-keyword"},"The max Keyword"),Object(i.b)("p",null,"Using this keyword it is possible to retrieve the maximum value of a property for an entity."),Object(i.b)("p",null,"Example: Get the most recently created value of the ",Object(i.b)("em",{parentName:"p"},"createTime")," property of the Table entity."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table select max(createTime)"),Object(i.b)("h3",{id:"the-min-keyword"},"The min Keyword"),Object(i.b)("p",null,"Using this keyword it is possible to retrieve the minimum value of a property for an entity."),Object(i.b)("p",null,"Example: Get the least recently created value of the ",Object(i.b)("em",{parentName:"p"},"createTime")," property of the Table entity."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table select min(createTime)"),Object(i.b)("h3",{id:"grouping-results"},"Grouping Results"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"groupby")," clause groups results within the result using specified property."),Object(i.b)("p",null,"Example: To retrieve entity of type Table such that tables belonging to an owner are together (grouped by owner)."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table groupby(owner)"),Object(i.b)("p",null,"While ",Object(i.b)("em",{parentName:"p"},"groupby")," can work without ",Object(i.b)("em",{parentName:"p"},"select"),", if aggregate functions are used within ",Object(i.b)("em",{parentName:"p"},"select")," clause, using ",Object(i.b)("em",{parentName:"p"},"groupby")," clause becomes mandatory as aggregate functions operate on a group."),Object(i.b)("p",null,"Example: To retrieve entity of type Table such we know the most recently created entity."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table groupby(createTime) select owner, name, max(createTime)"),Object(i.b)("p",null,"Example: To retrieve entity of type Table such we know the oldest entity."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table groupby(createTime) select owner, name, min(createTime)"),Object(i.b)("p",null,"Example: To know the number of entities owned by each owner."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table groupby(owner) select owner, count()"),Object(i.b)("h3",{id:"where-clause-with-complex-types"},"Where Clause With Complex Types"),Object(i.b)("p",null,"In the discussion so far we looked at where clauses with primitive types. This section will look at using properties that are non-primitive types."),Object(i.b)("p",null,"In this model, the DB is modeled such that it is aware of all the Table it contains. Table on the other hand is aware of existence of the DB but is not aware of all the other ",Object(i.b)("em",{parentName:"p"},"Table")," instances within the system. Each Table maintains reference of the ",Object(i.b)("em",{parentName:"p"},"DB")," it belongs to."),Object(i.b)("p",null,"Similar structure exists within the ",Object(i.b)("em",{parentName:"p"},"hive")," data model."),Object(i.b)("p",null,"Example: To retrieve all the instances of the ",Object(i.b)("em",{parentName:"p"},"Table")," belonging to a database named 'Sales':"),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},'Table where db.name = "Sales"'),Object(i.b)("p",null,"The entity Column is modeled in a similar way. Each Table entity has outward edges pointing to Column entity instances corresponding to each column within the table."),Object(i.b)("p",null,"Example: To retrieve all the Column entities for a given Table."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},'Table where name = "time_dim" select columns'),Object(i.b)("p",null,"The propeties of each ",Object(i.b)("em",{parentName:"p"},"Column")," entity type are displayed."),Object(i.b)("h3",{id:"using-system-attributes"},"Using System Attributes"),Object(i.b)("p",null,"Each type defined within Atlas gets few attributes by default. These attributes help with internal book keeping of the entities. All the system attributes are prefixed with '__' (double underscore). This helps in identifying them from other attributes.\nFollowing are the system attributes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"__guid Each entity within Atlas is assigned a globally unique identifier (GUID for short)."),Object(i.b)("li",{parentName:"ul"},"__modifiedBy Name of the user who last modified the entity."),Object(i.b)("li",{parentName:"ul"},"__createdBy Name of the user who created the entity."),Object(i.b)("li",{parentName:"ul"},"__state Current state of the entity. Please see below for details."),Object(i.b)("li",{parentName:"ul"},"__timestamp Timestamp (date represented as integer) of the entity at the time of creation."),Object(i.b)("li",{parentName:"ul"},"__modificationTimestamp Timestamp (date represented as integer) of the entity at the time of last modification.")),Object(i.b)("h3",{id:"state-of-an-entity"},"State of an Entity"),Object(i.b)("p",null,"Entity within Atlas can be in the following states:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ACTIVE This is the state of entities that when it is available and is used within the system. It can be retrieved by default by searches."),Object(i.b)("li",{parentName:"ul"},"DELETED When an entity is deleted, it's state is marked as DELETED. Entity in this state does not show up in search results. Explicit request needs to be made to retrieve this entity.")),Object(i.b)("h3",{id:"using-system-attributes-in-queries"},"Using System Attributes in Queries"),Object(i.b)("p",null,"Example: To retrieve all entities that are deleted."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},'Asset where __state = "DELETED"'),Object(i.b)("p",null,"Example: To retrieve entity GUIDs."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"Table select __guid"),Object(i.b)("p",null,"Example: To retrieve several system attributes."),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},"hive_db select __timestamp, __modificationTimestamp, __state, __createdBy"),Object(i.b)("h2",{id:"advanced-search-rest-api"},"Advanced Search REST API"),Object(i.b)("p",null,"Relevant models for these operations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/model/discovery/AtlasSearchResult.java"}),"AtlasSearchResult"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object.assign({parentName:"em"},{href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/exception/AtlasBaseException.java"}),"AtlasBaseException")))),Object(i.b)("h3",{id:"the-v2-api"},"The V2 API"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Get Results using DSL Search")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"th"},Object(i.b)("em",{parentName:"strong"},"Example"))),Object(i.b)("th",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"th"},"See Examples sections below.")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"URL")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"api/atlas/v2/search/dsl"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"Method")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"GET"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"URL Parameters")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"query"),": Query conforming to DSL syntax.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"typeName"),": Type name of the entity to be retrived.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"classification"),": Classification associated with the type or query.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"limit"),": Maximum number of items in the result set.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"offset"),": Starting index of the item in the result set.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"Data Parameters")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"None"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"Success Response")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"The JSON will correspond to ",Object(i.b)("a",Object.assign({parentName:"td"},{href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/model/discovery/AtlasSearchResult.java"}),"AtlasSearchResult"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"Error Response")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Errors that are handled within the system will be returned as ",Object(i.b)("a",Object.assign({parentName:"td"},{href:"https://github.com/apache/atlas/blob/master/intg/src/main/java/org/apache/atlas/exception/AtlasBaseException.java"}),"AtlasBaseException"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),Object(i.b)("em",{parentName:"td"},"Method Signature")),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"@GET")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),'@Path("/dsl")')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"@Consumes(Servlets.JSON_MEDIA_TYPE)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"})),Object(i.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"@Produces(Servlets.JSON_MEDIA_TYPE)")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Examples")),Object(i.b)(l.a,{wrapLines:!0,language:"html",style:r.a,mdxType:"SyntaxHighlighter"},'curl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?typeName=Table"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?typeName=Column&classification=PII"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?typeName=Table&classification=Dimension&limit=10&offset=2"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?query=Table%20isa%20Dimension"\ncurl -X GET -u admin:admin -H "Content-Type: application/json" "http://localhost:21000/api/atlas/v2/search/dsl?query=Table%20isa%20Dimension&limit=5&offset=2"'),Object(i.b)("h2",{id:"implementation-approach"},"Implementation Approach"),Object(i.b)("p",null,"The general approach followed in implementation of DSL within Atlas can be enumerated in following steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Parser parses the incoming query for syntax."),Object(i.b)("li",{parentName:"ul"},"Abstract syntax tree is generated by for a query that is parsed successfully."),Object(i.b)("li",{parentName:"ul"},"Syntax tree is 'walked' using visitor pattern."),Object(i.b)("li",{parentName:"ul"},"Each 'visit' within the tree adds a step in the Gremlin pipeline."),Object(i.b)("li",{parentName:"ul"},"When done, the generated script is executed using Gremlin Script Engine."),Object(i.b)("li",{parentName:"ul"},"Results generated be the query, if any, are processed and packaged in AtlasSearchResult structure.")),Object(i.b)("h2",{id:"differences-between-master-and-earlier-versions"},"Differences Between Master and Earlier Versions"),Object(i.b)("p",null,"The following clauses are no longer supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"path"),Object(i.b)("li",{parentName:"ul"},"loop")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Antlr ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://pragprog.com/book/tpantlr2/the-definitive-antlr-4-reference"}),"Book"),"."),Object(i.b)("li",{parentName:"ul"},"Antlr ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/antlr/antlr4/blob/master/doc/getting-started.md"}),"Quick Start"),"."),Object(i.b)("li",{parentName:"ul"},"Atlas DSL Grammar on ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/apache/atlas/blob/master/repository/src/main/java/org/apache/atlas/query/antlr4/AtlasDSLParser.g4"}),"Github")," (Antlr G4 format).    ")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Search/Search-Advanced.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-search-search-advanced.4270c95b92f6304097ee.js.map