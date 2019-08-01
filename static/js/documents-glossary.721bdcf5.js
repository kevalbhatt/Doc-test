(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/documents/Glossary.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),i=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),s=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),o=a("./theme/components/shared/Img/index.js"),l={},c="wrapper";function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"glossary"},"Glossary"),Object(r.b)("p",null,"A Glossary provides appropriate vocabularies for business users and it allows the terms (words) to be related to each\nother and categorized so that they can be understood in different contexts. These terms can be then mapped to assets\nlike a Database, tables, columns etc. This helps abstract the technical jargon associated with the repositories and\nallows the user to discover/work with data in the vocabulary that is more familiar to them."),Object(r.b)("h3",{id:"use-cases"},"Use cases"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ability to define rich glossary vocabularies using the natural terminology (technical terms and/or business terms)."),Object(r.b)("li",{parentName:"ul"},"Ability to semantically relate the term(s) to each other."),Object(r.b)("li",{parentName:"ul"},"Ability to map assets to glossary terms(s)."),Object(r.b)("li",{parentName:"ul"},"Ability to organize these terms by categories. This adds more context to the term(s)."),Object(r.b)("li",{parentName:"ul"},"Allow categories to be arranged in hierarchy - to express broader and finer scopes."),Object(r.b)("li",{parentName:"ul"},"Separate management of glossary term(s) from the metadata.")),Object(r.b)("h3",{id:"what-is-a-glossary-term-"},"What is a Glossary term ?"),Object(r.b)("p",null,'A term is a useful word for an enterprise. For the term(s) to be useful and meaningful, they need to grouped around their\nuse and context. A term in Apache Atlas must have a unique qualifiedName, there can be term(s) with same name but they\ncannot belong to the same glossary. Term(s) with same name can exist only across different glossaries. A term name can\ncontain spaces, underscores and dashes (as natural ways of referring to words) but no "." or "@", as the qualifiedName\ntakes the following form ',Object(r.b)("inlineCode",{parentName:"p"},"term name"),"@",Object(r.b)("inlineCode",{parentName:"p"},"glossary qualified name"),". The fully qualified name makes it easier to work with\na specific term."),Object(r.b)("p",null,"A term can only belong to single glossary and it's lifecycle is bound to the same i.e. if the Glossary is deleted then\nthe term gets deleted as well. A term can belong to zero or more categories, which allows scoping them into narrower or\nwider contexts. A term can be assigned/linked to zero or more entities in Apache Atlas. A term can be classified using\nclassifications (tags) and the same classification gets applied to the entities that the term is assigned to."),Object(r.b)("p",null,"###What is a Glossary category ?"),Object(r.b)("p",null,"A category is a way of organizing the term(s) so that the term's context can be enriched. A category may or may not have\ncontained hierarchies i.e. child category hierarchy. A category's qualifiedName is derived using it's hierarchical location\nwithin the glossary e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Category name"),".",Object(r.b)("inlineCode",{parentName:"p"},"parent category qualifiedName"),". This qualified name gets updated when any\nhierarchical change happens, e.g. addition of a parent category, removal of parent category or change of parent category."),Object(r.b)("h3",{id:"ui-interactions"},"UI interactions"),Object(r.b)("p",null,"Apache Atlas UI has been updated to provide user-friendly interface to work with various aspects of glossary, including:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create glossaries, terms and categories"),Object(r.b)("li",{parentName:"ul"},"create various relationships between terms - like synonymns, antonymns, seeAlso"),Object(r.b)("li",{parentName:"ul"},"organize categories in hierarchies"),Object(r.b)("li",{parentName:"ul"},"assign terms to entities"),Object(r.b)("li",{parentName:"ul"},"search for entities using associated terms")),Object(r.b)("p",null,"Most of glossary related UI can be found under a new tab named GLOSSARY, which is present right next to existing\nfamiliar tabs SEARCH and CLASSIFICATION."),Object(r.b)("h4",{id:"glossary-tab"},Object(r.b)("strong",{parentName:"h4"},"Glossary tab")),Object(r.b)("p",null,"Apache Atlas UI provides two ways to work with a glossary - term view and category view."),Object(r.b)("p",null,"Term view allows an user to perform the following operations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create, update and delete terms"),Object(r.b)("li",{parentName:"ul"},"add, remove and update classifications associated with a term"),Object(r.b)("li",{parentName:"ul"},"add, remove and update categorization of a term"),Object(r.b)("li",{parentName:"ul"},"create various relationships between terms"),Object(r.b)("li",{parentName:"ul"},"view entities associated with a term")),Object(r.b)("p",null,"Category view allows an user to perform the following operations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create, update and delete categories and sub-categories"),Object(r.b)("li",{parentName:"ul"},"associate terms to categories")),Object(r.b)("p",null,"Users can switch between term view and category view using toggle provided in GLOSSARY tab."),Object(r.b)(o.a,{src:"/images/markdown/terms_view.png",width:"300px",mdxType:"Img"}),Object(r.b)(o.a,{src:"/images/markdown/category_view_1.png",width:"300px",mdxType:"Img"}),Object(r.b)("h5",{id:"term-context-menu"},"Term context menu"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new term\nClicking on the ",Object(r.b)("strong",{parentName:"li"},"ellipsis (...)")," next to a glossary name shows a pop-over menu that allows users to create a term in\nthe glossary or delete the glossary - as shown below.")),Object(r.b)(o.a,{src:"/images/markdown/term_view_context.png",width:"360px",mdxType:"Img"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To delete a term\nClicking on the ",Object(r.b)("strong",{parentName:"li"},"ellipsis (...)")," next to a term name shows a pop-over menu that allows users to delete the term - as\nshown below.")),Object(r.b)(o.a,{src:"/images/markdown/term_delete_context.png",width:"600px",mdxType:"Img"}),Object(r.b)("h5",{id:"term-detail-page"},"Term detail page"),Object(r.b)("p",null,"Various details of a term can be viewed by clicking on the term name in the glossary UI. Each tabs under the details\npage provides different details of the term."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Entities tab shows the entities that are assigned to the selected term"),Object(r.b)("li",{parentName:"ul"},"Classifications tab shows the classification(s) associated with the selected term"),Object(r.b)("li",{parentName:"ul"},"Related terms tab shows the terms that are related to the selected term")),Object(r.b)(o.a,{src:"/images/markdown/term_details.png",mdxType:"Img"}),Object(r.b)("h5",{id:"add-classification-to-term"},"Add classification to Term"),Object(r.b)("p",null,"Clicking on ",Object(r.b)("strong",{parentName:"p"},"+")," next to classification label to add a classification to the term."),Object(r.b)(o.a,{src:"/images/markdown/term_add_classification_1.png",alt:"Add classification",width:"400px",mdxType:"Img"}),Object(r.b)(o.a,{src:"/images/markdown/term_add_classification_2.png",alt:"Add classification - details",width:"400px",mdxType:"Img"}),Object(r.b)(o.a,{src:"/images/markdown/term_with_classification.png",alt:"Classifications associated with term",width:"400px",mdxType:"Img"}),Object(r.b)("h5",{id:"create-term-relationship-with-other-term"},"Create term relationship with other term"),Object(r.b)("p",null,'Click on "Related Terms" tab when viewing term details. Clicking on ',Object(r.b)("strong",{parentName:"p"},"+")," will allow linking a term with the current term."),Object(r.b)(o.a,{src:"/images/markdown/terms_related_terms.png",mdxType:"Img"}),Object(r.b)("h5",{id:"categorize-a-term"},"Categorize a term"),Object(r.b)("p",null,"Click on ",Object(r.b)("strong",{parentName:"p"},"+")," next to categories label to categorize a term. A modal dialog will be presented for choosing a category."),Object(r.b)(o.a,{src:"/images/markdown/term_add_category.png",width:"400px",mdxType:"Img"}),Object(r.b)("h4",{id:"category-view"},Object(r.b)("strong",{parentName:"h4"},"Category view")),Object(r.b)("p",null,"When the toggle switch is on category, the panel will list down all glossaries along-with the category hierarchy. Here's a list of possible\ninteractions under this view."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Expanded view",Object(r.b)(o.a,{src:"/images/markdown/category_view_2.png",width:"300px",mdxType:"Img"}))),Object(r.b)("h5",{id:"category-context-menu"},"Category context menu"),Object(r.b)("p",null,"Clicking on ",Object(r.b)("strong",{parentName:"p"},"ellipsis (...)")," next to the category name will present a category context menu."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To create a new category")),Object(r.b)(o.a,{src:"/images/markdown/category_view_glossary_context.png",width:"600px",mdxType:"Img"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To create a sub-category or delete a category")),Object(r.b)(o.a,{src:"/images/markdown/category_view_category_context_1.png",width:"600px",mdxType:"Img"}),Object(r.b)("h5",{id:"category-detail-page"},"Category detail page"),Object(r.b)("p",null,"Once a category is selected, the details will be presented in the right pane."),Object(r.b)(o.a,{src:"/images/markdown/category_details_with_terms.png",width:"600px",mdxType:"Img"}),Object(r.b)("h5",{id:"categorize-term"},"Categorize term"),Object(r.b)("p",null,"Click on ",Object(r.b)("strong",{parentName:"p"},"+")," next to the terms label to link a term under selected category."),Object(r.b)(o.a,{src:"/images/markdown/category_add_term.png",width:"600px",mdxType:"Img"}),Object(r.b)(o.a,{src:"/images/markdown/category_add_term_1.png",width:"400px",mdxType:"Img"}),Object(r.b)(o.a,{src:"/images/markdown/category_add_term_2.png",width:"400px",mdxType:"Img"}),Object(r.b)("h4",{id:"term-assignment-flow"},Object(r.b)("strong",{parentName:"h4"},"Term assignment flow")),Object(r.b)("p",null,"Terms can be assigned to an entity either from the results page or entity details page."),Object(r.b)("h5",{id:"assign-term"},"Assign term"),Object(r.b)("p",null,"Click on ",Object(r.b)("strong",{parentName:"p"},"+"),' under "terms" column (if associating term from search page)'),Object(r.b)(o.a,{src:"/images/markdown/entity_search_add_term.png",mdxType:"Img"}),Object(r.b)("p",null,"Click on ",Object(r.b)("strong",{parentName:"p"},"+"),' next to "terms" label (if viewing a specific entity details)'),Object(r.b)(o.a,{src:"/images/markdown/entity_details_add_term.png",mdxType:"Img"}),Object(r.b)("p",null,"Both the actions will present the following modal, follow prompts on screen to complete term assignment."),Object(r.b)(o.a,{src:"/images/markdown/entity_add_term_modal.png",width:"400px",mdxType:"Img"}),Object(r.b)("h5",{id:"propagated-classification"},"Propagated classification"),Object(r.b)("p",null,"If a term has classification then the entity is has been assigned inherits the same."),Object(r.b)(o.a,{src:"/images/markdown/term_details_with_classification.png",mdxType:"Img"}),Object(r.b)(o.a,{src:"/images/markdown/entity_assigned_term_with_tag.png",width:"600px",mdxType:"Img"}),Object(r.b)("h4",{id:"search-using-a-term"},Object(r.b)("strong",{parentName:"h4"},"Search using a term")),Object(r.b)("p",null,"Apache Atlas basic-search API and UI have been updated to support term as a search criteria. This allows users to find\nentities associated with a given term. Basic search UI now includes a new input drop-down for term based searches."),Object(r.b)(o.a,{src:"/images/markdown/term_search.png",width:"300px",mdxType:"Img"}),Object(r.b)("hr",null),Object(r.b)("h4",{id:"summary-of-rest-interactions"},"Summary of REST interactions"),Object(r.b)("p",null,"Following operations are supported by Atlas, the details of REST interface can be found ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"api/v2/index.html"}),"here")),Object(r.b)("h5",{id:"json-structure"},"JSON structure"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Glossary"),Object(r.b)(s.a,{wrapLines:!0,language:"json",style:i.a,mdxType:"SyntaxHighlighter"},'{\n\t"guid": "2f341934-f18c-48b3-aa12-eaa0a2bfce85",\n\t"qualifiedName": "SampleBank",\n\t"displayName": "Banking",\n\t"shortDescription": "Glossary of bank",\n\t"longDescription": "Glossary of bank - long description",\n\t"language": "English",\n\t"usage": "N/A",\n\t"terms": [\n\t{\n\t\t"termGuid": "502d34f1-b85f-4ad9-9d9f-fe7020ff0acb",\n\t\t"relationGuid": "6bb803e4-3af6-4924-aad6-6ad9f95ecd14",\n\t\t"displayText": "A savings account"\n\t}, {\n\t\t"termGuid": "e441a540-ee55-4fc8-8eaf-4b9943d8929c",\n\t\t"relationGuid": "dbc46795-76ff-4f68-9043-be0eff0bc0f3",\n\t\t"displayText": "15-30 yr mortgage"\n\t}, {\n\t\t"termGuid": "998e3692-51a8-47fe-b3a0-0d9f794437eb",\n\t\t"relationGuid": "0dcd31b9-a81c-4185-ad4b-9209a97c305b",\n\t\t"displayText": "A checking account"\n\t}, {\n\t\t"termGuid": "c4e2b956-2589-4648-8596-240d3bea5e44",\n\t\t"relationGuid": "e71c4a5d-694b-47a5-a41e-126ade857279",\n\t\t"displayText": "ARM loans"\n\t}],\n\t"categories": [{\n\t\t"categoryGuid": "dd94859e-7453-4bc9-b634-a17fc14590f8",\n\t\t"parentCategoryGuid": "e6a3df1f-5670-4f9e-84da-91f77d008ce3",\n\t\t"relationGuid": "a0b7da02-1ccd-4415-bc54-3d0cdb8857e7",\n\t\t"displayText": "Accounts"\n\t}, {\n\t\t"categoryGuid": "e6a3df1f-5670-4f9e-84da-91f77d008ce3",\n\t\t"relationGuid": "0e84a358-a4aa-4bd3-b806-497a6962ae1d",\n\t\t"displayText": "Customer"\n\t}, {\n\t\t"categoryGuid": "7f041401-de8c-443f-a3b7-7bf5a910ff6f",\n\t\t"parentCategoryGuid": "e6a3df1f-5670-4f9e-84da-91f77d008ce3",\n\t\t"relationGuid": "7757b031-4e25-43a8-bf77-946f7f06c67a",\n\t\t"displayText": "Loans"\n\t}]\n}')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Term"),Object(r.b)(s.a,{wrapLines:!0,language:"json",style:i.a,mdxType:"SyntaxHighlighter"},'{\n\t"guid": "e441a540-ee55-4fc8-8eaf-4b9943d8929c",\n\t"qualifiedName": "fixed_mtg@SampleBank",\n\t"displayName": "15-30 yr mortgage",\n\t"shortDescription": "Short description",\n\t"longDescription": "Long description",\n\t"examples": ["N/A"],\n\t"abbreviation": "FMTG",\n\t"anchor": {\n\t\t"glossaryGuid": "2f341934-f18c-48b3-aa12-eaa0a2bfce85",\n\t\t"relationGuid": "dbc46795-76ff-4f68-9043-be0eff0bc0f3"\n\t},\n\t"categories": [{\n\t\t"categoryGuid": "7f041401-de8c-443f-a3b7-7bf5a910ff6f",\n\t\t"relationGuid": "b4cddd33-7b0c-41e2-9324-afe549ec6ada",\n\t\t"displayText": "Loans"\n\t}],\n    "seeAlso"           : [],\n    "synonyms"          : [],\n    "antonyms"          : [],\n    "replacedBy"        : [],\n    "replacementTerms"  : [],\n    "translationTerms"  : [],\n    "translatedTerms"   : [],\n    "isA"               : [],\n    "classifies"        : [],\n    "preferredTerms"    : [],\n    "preferredToTerms": [ {\n                           "termGuid"   : "c4e2b956-2589-4648-8596-240d3bea5e44",\n                           "displayText": "ARM Loans"\n                         }]\n}')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Category"),Object(r.b)(s.a,{wrapLines:!0,language:"json",style:i.a,mdxType:"SyntaxHighlighter"},'{\n\t"guid": "7f041401-de8c-443f-a3b7-7bf5a910ff6f",\n\t"qualifiedName": "Loans.Customer@HortoniaBank",\n\t"displayName": "Loans",\n\t"shortDescription": "Loan categorization",\n\t"anchor": {\n\t\t"glossaryGuid": "2f341934-f18c-48b3-aa12-eaa0a2bfce85",\n\t\t"relationGuid": "7757b031-4e25-43a8-bf77-946f7f06c67a"\n\t},\n\t"parentCategory": {\n\t\t"categoryGuid": "e6a3df1f-5670-4f9e-84da-91f77d008ce3",\n\t\t"relationGuid": "8a0a8e11-0bb5-483b-b7d6-cfe0b1d55ef6"\n\t},\n\t"childrenCategories" : [],\n\t"terms": [{\n\t\t"termGuid": "e441a540-ee55-4fc8-8eaf-4b9943d8929c",\n\t\t"relationGuid": "b4cddd33-7b0c-41e2-9324-afe549ec6ada",\n\t\t"displayText": "15-30 yr mortgage"\n\t}, {\n\t\t"termGuid": "c4e2b956-2589-4648-8596-240d3bea5e44",\n\t\t"relationGuid": "8db1e784-4f04-4eda-9a58-6c9535a95451",\n\t\t"displayText": "ARM loans"\n\t}]\n}'))),Object(r.b)("h5",{id:"create-operations"},"CREATE operations"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a glossary"),Object(r.b)("li",{parentName:"ol"},"Create a term"),Object(r.b)("li",{parentName:"ol"},"Create a categorized term"),Object(r.b)("li",{parentName:"ol"},"Create term with relations"),Object(r.b)("li",{parentName:"ol"},"Create a category"),Object(r.b)("li",{parentName:"ol"},"Create a category with hierarchy"),Object(r.b)("li",{parentName:"ol"},"Create category and categorize term(s)"),Object(r.b)("li",{parentName:"ol"},"Assign term to entities")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"During create operations glossary, term and category get an auto assigned GUID and qualifiedName."),Object(r.b)("li",{parentName:"ul"},"To create a category with children, the children MUST be created beforehand."),Object(r.b)("li",{parentName:"ul"},"To create a term belonging to a category, the category MUST be created beforehand."),Object(r.b)("li",{parentName:"ul"},"To create term with relations, related term(s) MUST be created beforehand.")),Object(r.b)("hr",null),Object(r.b)("h5",{id:"read-operations"},"READ operations"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Get glossary by GUID - Gives all terms and categories (headers) belonging to the glossary."),Object(r.b)("li",{parentName:"ol"},"Get all Glossaries - Gives all glossaries with terms and categories (headers) belonging to the respective glossary."),Object(r.b)("li",{parentName:"ol"},"Get a term by GUID - Gives details about the term, categories it belongs to (if any) and any related term(s)."),Object(r.b)("li",{parentName:"ol"},"Get a category by GUID - Gives details about the category, category hierarchy (if any) and term(s) belonging to the category."),Object(r.b)("li",{parentName:"ol"},"Get all terms of a given glossary - Gives all terms (with details as mentioned in #3) belonging to given glossary."),Object(r.b)("li",{parentName:"ol"},"Get all categories of a given glossary - Gives all categories (with details as mentioned in #4) belonging to given glossary."),Object(r.b)("li",{parentName:"ol"},"Get all terms related to given term - Gives all terms related/linked to the given term."),Object(r.b)("li",{parentName:"ol"},"Get all categories related to a given category (parent and children)"),Object(r.b)("li",{parentName:"ol"},"Get all terms for a given category")),Object(r.b)("hr",null),Object(r.b)("h5",{id:"update-operations"},"UPDATE operations"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Partial update of glossary"),Object(r.b)("li",{parentName:"ol"},"Partial update of term"),Object(r.b)("li",{parentName:"ol"},"Partial update of category"),Object(r.b)("li",{parentName:"ol"},"Update a given glossary"),Object(r.b)("li",{parentName:"ol"},"Update a given term"),Object(r.b)("li",{parentName:"ol"},"Update a given category")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Partial update only deals with the ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"primitive attributes"))," defined in the Glossary model file."),Object(r.b)("li",{parentName:"ul"},"GUID and qualifiedName can't be changed once assigned. Only way to this is to delete and recreate the required object."),Object(r.b)("li",{parentName:"ul"},"Anchors ",Object(r.b)("strong",{parentName:"li"},"can't")," be removed in any updates"),Object(r.b)("li",{parentName:"ul"},"Update APIs expect the JSON to be modified ",Object(r.b)("strong",{parentName:"li"},"in-place")," after the ",Object(r.b)("strong",{parentName:"li"},"GET")," call. Any ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"missing"))," attributes/relations will be ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"deleted")),"."),Object(r.b)("li",{parentName:"ul"},"Any update to category's hierarchy leads to a cascaded update of the hierarchy under it e.g. anchor change would affect all children,\nparent change would affect the qualifiedName of self and children.")),Object(r.b)("hr",null),Object(r.b)("h5",{id:"delete-operations"},"DELETE operations"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Delete glossary - Also deletes all categories and terms anchored to given glossary. This delete is ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"blocked"))," if any term has been ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"assigned"))," to an entity."),Object(r.b)("li",{parentName:"ol"},"Delete term - Only deletes the term ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"if"))," it's not associated/assigned to any entity."),Object(r.b)("li",{parentName:"ol"},"Delete category - ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Only"))," deletes the given category, all children become top-level categories."),Object(r.b)("li",{parentName:"ol"},"Remove term assignment from entity")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Glossary.md"}}),b.isMDXComponent=!0},"./theme/components/shared/Img/index.js":function(e,t,a){"use strict";var n=a("./node_modules/react/index.js"),r=(a("./theme/utils/theme.js"),a("./theme/styles/responsive.js"),a("./node_modules/docz/dist/index.esm.js"));t.a=e=>{const{src:t,width:a,height:i}=e,{baseUrl:s}=Object(r.g)();return n.createElement("div",null,n.createElement("img",{src:`${s}${t}`,height:`${i||"auto"}`,width:`${a||"100%"}`}))}},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-glossary.aea8564be57dee0e6355.js.map