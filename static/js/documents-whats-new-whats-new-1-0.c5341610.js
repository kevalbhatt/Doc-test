(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"./src/documents/Whats-New/WhatsNew-1.0.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),b={},i="wrapper";function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(i,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"whats-new-in-apache-atlas-10"},"What's new in Apache Atlas 1.0?"),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Introduction of relationships as a first-class type"),Object(l.b)("li",{parentName:"ul"},"Support for propagation of classifications along entity relationships \u2013 like lineage"),Object(l.b)("li",{parentName:"ul"},"Fine-grained metadata security, which enables access controls up to entity instance level"),Object(l.b)("li",{parentName:"ul"},"Introduction of Glossary feature"),Object(l.b)("li",{parentName:"ul"},"Introduction of V2 style notifications"),Object(l.b)("li",{parentName:"ul"},"Introduction of Atlas hook for HBase"),Object(l.b)("li",{parentName:"ul"},"Support for Cassandra and Elasticsearch (tech-preview)")),Object(l.b)("h2",{id:"updates"},"Updates"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Graph store has been updated from Titan 0.5.4 to JanusGraph 0.2.0"),Object(l.b)("li",{parentName:"ul"},"DSL rewrite, to replace use of Scala based implementation with ANTLR"),Object(l.b)("li",{parentName:"ul"},"Performance improvements in Atlas Hooks, by switching to use V2 style notifications"),Object(l.b)("li",{parentName:"ul"},"Significant updates in Atlas Web UI")),Object(l.b)("h2",{id:"changes"},"Changes"),Object(l.b)("h3",{id:"dsl-search"},"DSL search"),Object(l.b)("p",null,"With DSL rewrite and simplification, some older constructs may not work. Here's a list of behavior changes from previous\nreleases. More DSL related changes can be found ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"Search-Advanced.html"}),"here"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When filtering or narrowing results using string attribute, the value ",Object(l.b)("strong",{parentName:"li"},"MUST")," be enclosed in double quotes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'Table name="Table1"'),Object(l.b)("li",{parentName:"ul"},'Table where name="Table1"'))),Object(l.b)("li",{parentName:"ul"},"Join queries are no longer supported e.g. hive_table, hive_db"),Object(l.b)("li",{parentName:"ul"},"Select clauses only work with immediate entity attributes or a single referred (entity) type.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table select name, owner"),Object(l.b)("li",{parentName:"ul"},"Table select Columns"),Object(l.b)("li",{parentName:"ul"},"Table select name, owner, Columns ",Object(l.b)("em",{parentName:"li"},Object(l.b)("em",{parentName:"em"},"(won't work)"))))),Object(l.b)("li",{parentName:"ul"},"OrderBy clause can only be used with a ",Object(l.b)("em",{parentName:"li"},Object(l.b)("em",{parentName:"em"},"single primitive"))," attribute."),Object(l.b)("li",{parentName:"ul"},"GroupBy clause can only be used with a ",Object(l.b)("em",{parentName:"li"},Object(l.b)("em",{parentName:"em"},"single primitive"))," attribute.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table groupby name"),Object(l.b)("li",{parentName:"ul"},"Table groupby Columns (won't work)"))),Object(l.b)("li",{parentName:"ul"},"Typename can't have multiple aliases",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table as t (OK)"),Object(l.b)("li",{parentName:"ul"},"Table as t1, t2 (won't work)"))),Object(l.b)("li",{parentName:"ul"},"Has clause only works with primitive attributes.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table has name"),Object(l.b)("li",{parentName:"ul"},"Table has Columns or Table has DB (NOT supported)"))),Object(l.b)("li",{parentName:"ul"},"Aggregator clause can only be used with a ",Object(l.b)("em",{parentName:"li"},Object(l.b)("em",{parentName:"em"},"single primitive"))," attribute.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table select min(name)"),Object(l.b)("li",{parentName:"ul"},"Table select max(name)"),Object(l.b)("li",{parentName:"ul"},"Table select sum(createTime)"),Object(l.b)("li",{parentName:"ul"},"Table select min(Columns) (won't work)"),Object(l.b)("li",{parentName:"ul"},"Table select max(Columns) (won't work)"),Object(l.b)("li",{parentName:"ul"},"Table select sum(Columns) (won't work)"))),Object(l.b)("li",{parentName:"ul"},"Aggregator clause can't be repeated with different ",Object(l.b)("em",{parentName:"li"},Object(l.b)("em",{parentName:"em"},"primitive attribute")),", the clause appearing last would take preference.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table select min(name), min(createTime) will ignore ",Object(l.b)("em",{parentName:"li"},Object(l.b)("em",{parentName:"em"},"min(name)"))))),Object(l.b)("li",{parentName:"ul"},"Limit and offset are not applicable when using aggregator clauses (min, max, sum)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Table select min(name) limit 10 offset 5 - min(name) is computed over ",Object(l.b)("strong",{parentName:"li"},"ALL")," entities of type Asset")))))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Whats-New/WhatsNew-1.0.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-whats-new-whats-new-1-0.1edd2dc220980a0dc749.js.map