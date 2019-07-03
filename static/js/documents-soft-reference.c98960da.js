(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/documents/SoftReference.md":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a={},s="wrapper";function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(s,Object.assign({},a,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"entity-attribute-option-softreference"},"Entity Attribute Option: SoftReference"),Object(r.b)("h4",{id:"background"},"Background"),Object(r.b)("p",null,"Entity attributes are specified using attribute definitions. An attributes persistence strategy is determined by based on their type. "),Object(r.b)("p",null,"Primitive types are persisted as properties within the vertex of their parent. "),Object(r.b)("p",null,"Non-primitive attributes get a vertex of their own and and edge is created between the parent the child to establish ownership."),Object(r.b)("p",null,"Attribute with ",Object(r.b)("em",{parentName:"p"},"isSoftReference")," option set to ",Object(r.b)("em",{parentName:"p"},"true"),", is non-primitive attribute that gets treatment of a primitive attribute."),Object(r.b)("h4",{id:"specification"},"Specification"),Object(r.b)("p",null,"Below is an example of using the new attribute option."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'  "attributeDefs": [\n    {\n      "name": "replicatedFrom",\n      "typeName": "array<AtlasServer>",\n      "cardinality": "SET",\n      "isIndexable": false,\n      "isOptional": true,\n      "isUnique": false,\n      "options": {\n        "isSoftReference": "true"\n      }\n    },\n')))}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/SoftReference.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=documents-soft-reference.b4d33c35089b0e616f0e.js.map