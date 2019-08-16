(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/documents/Misc/SoftReference.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/dark.js"),a=n("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),o={},c="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"entity-attribute-option-softreference"},"Entity Attribute Option: SoftReference"),Object(r.b)("h4",{id:"background"},"Background"),Object(r.b)("p",null,"Entity attributes are specified using attribute definitions. An attributes persistence strategy is determined by based on their type."),Object(r.b)("p",null,"Primitive types are persisted as properties within the vertex of their parent."),Object(r.b)("p",null,"Non-primitive attributes get a vertex of their own and and edge is created between the parent the child to establish ownership."),Object(r.b)("p",null,"Attribute with ",Object(r.b)("em",{parentName:"p"},"isSoftReference")," option set to ",Object(r.b)("em",{parentName:"p"},"true"),", is non-primitive attribute that gets treatment of a primitive attribute."),Object(r.b)("h4",{id:"specification"},"Specification"),Object(r.b)("p",null,"Below is an example of using the new attribute option."),Object(r.b)(a.a,{wrapLines:!0,language:"json",style:s.a,mdxType:"SyntaxHighlighter"},'"attributeDefs": [\n      {\n        "name": "replicatedFrom",\n        "typeName": "array<AtlasServer>",\n        "cardinality": "SET",\n        "isIndexable": false,\n        "isOptional": true,\n        "isUnique": false,\n        "options": {\n          "isSoftReference": "true"\n        }\n      }'))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Misc/SoftReference.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-misc-soft-reference.aaac9511c5aba0274c95.js.map