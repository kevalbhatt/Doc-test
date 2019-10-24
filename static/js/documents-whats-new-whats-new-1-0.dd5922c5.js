(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"./src/documents/Whats-New/WhatsNew-1.0.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),m={},i="wrapper";function r(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.mdx)(i,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"whats-new-in-apache-atlas-10"},"What's new in Apache Atlas 1.0?"),Object(l.mdx)("h2",{id:"features"},"Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Introduction of relationships as a first-class type"),Object(l.mdx)("li",{parentName:"ul"},"Support for propagation of classifications along entity relationships \u2013 like lineage"),Object(l.mdx)("li",{parentName:"ul"},"Fine-grained metadata security, which enables access controls up to entity instance level"),Object(l.mdx)("li",{parentName:"ul"},"Introduction of Glossary feature"),Object(l.mdx)("li",{parentName:"ul"},"Introduction of V2 style notifications"),Object(l.mdx)("li",{parentName:"ul"},"Introduction of Atlas hook for HBase"),Object(l.mdx)("li",{parentName:"ul"},"Support for Cassandra and Elasticsearch (tech-preview)")),Object(l.mdx)("h2",{id:"updates"},"Updates"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Graph store has been updated from Titan 0.5.4 to JanusGraph 0.2.0"),Object(l.mdx)("li",{parentName:"ul"},"DSL rewrite, to replace use of Scala based implementation with ANTLR"),Object(l.mdx)("li",{parentName:"ul"},"Performance improvements in Atlas Hooks, by switching to use V2 style notifications"),Object(l.mdx)("li",{parentName:"ul"},"Significant updates in Atlas Web UI")),Object(l.mdx)("h2",{id:"changes"},"Changes"),Object(l.mdx)("h3",{id:"dsl-search"},"DSL search"),Object(l.mdx)("p",null,"With DSL rewrite and simplification, some older constructs may not work. Here's a list of behavior changes from previous\nreleases. More DSL related changes can be found ",Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"#/SearchAdvance"}),"here"),"."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"When filtering or narrowing results using string attribute, the value ",Object(l.mdx)("strong",{parentName:"li"},"MUST")," be enclosed in double quotes",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},'Table name="Table1"'),Object(l.mdx)("li",{parentName:"ul"},'Table where name="Table1"'))),Object(l.mdx)("li",{parentName:"ul"},"Join queries are no longer supported e.g. hive_table, hive_db"),Object(l.mdx)("li",{parentName:"ul"},"Select clauses only work with immediate entity attributes or a single referred (entity) type.",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Table select name, owner"),Object(l.mdx)("li",{parentName:"ul"},"Table select Columns"),Object(l.mdx)("li",{parentName:"ul"},"Table select name, owner, Columns ",Object(l.mdx)("em",{parentName:"li"},Object(l.mdx)("em",{parentName:"em"},"(won't work)"))))),Object(l.mdx)("li",{parentName:"ul"},"OrderBy clause can only be used with a ",Object(l.mdx)("em",{parentName:"li"},Object(l.mdx)("em",{parentName:"em"},"single primitive"))," attribute."),Object(l.mdx)("li",{parentName:"ul"},"GroupBy clause can only be used with a ",Object(l.mdx)("em",{parentName:"li"},Object(l.mdx)("em",{parentName:"em"},"single primitive"))," attribute.",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Table groupby name"),Object(l.mdx)("li",{parentName:"ul"},"Table groupby Columns (won't work)"))),Object(l.mdx)("li",{parentName:"ul"},"Typename can't have multiple aliases",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Table as t (OK)"),Object(l.mdx)("li",{parentName:"ul"},"Table as t1, t2 (won't work)"))),Object(l.mdx)("li",{parentName:"ul"},"Has clause only works with primitive attributes.",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Table has name"),Object(l.mdx)("li",{parentName:"ul"},"Table has Columns or Table has DB (NOT supported)"))),Object(l.mdx)("li",{parentName:"ul"},"Aggregator clause can only be used with a ",Object(l.mdx)("em",{parentName:"li"},Object(l.mdx)("em",{parentName:"em"},"single primitive"))," attribute.",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Table select min(name)"),Object(l.mdx)("li",{parentName:"ul"},"Table select max(name)"),Object(l.mdx)("li",{parentName:"ul"},"Table select sum(createTime)"),Object(l.mdx)("li",{parentName:"ul"},"Table select min(Columns) (won't work)"),Object(l.mdx)("li",{parentName:"ul"},"Table select max(Columns) (won't work)"),Object(l.mdx)("li",{parentName:"ul"},"Table select sum(Columns) (won't work)"))),Object(l.mdx)("li",{parentName:"ul"},"Aggregator clause can't be repeated with different ",Object(l.mdx)("em",{parentName:"li"},Object(l.mdx)("em",{parentName:"em"},"primitive attribute")),", the clause appearing last would take preference.",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Table select min(name), min(createTime) will ignore ",Object(l.mdx)("em",{parentName:"li"},Object(l.mdx)("em",{parentName:"em"},"min(name)"))))),Object(l.mdx)("li",{parentName:"ul"},"Limit and offset are not applicable when using aggregator clauses (min, max, sum)",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Table select min(name) limit 10 offset 5 - min(name) is computed over ",Object(l.mdx)("strong",{parentName:"li"},"ALL")," entities of type Asset")))))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Whats-New/WhatsNew-1.0.md"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-whats-new-whats-new-1-0.e0d7106427cc645dac2b.js.map