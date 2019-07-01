!function(e){function t(t){for(var n,a,r=t[0],i=t[1],s=t[2],l=t[3]||[],u=0,d=[];u<r.length;u++)a=r[u],j[a]&&d.push(j[a][0]),j[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(M&&M(t),O.push.apply(O,l);d.length;)d.shift()();return D.push.apply(D,s||[]),o()}function o(){for(var e,t=0;t<D.length;t++){for(var o=D[t],n=!0,a=1;a<o.length;a++){var r=o[a];0!==j[r]&&(n=!1)}n&&(D.splice(t--,1),e=H(H.s=o[0]))}return 0===D.length&&(O.forEach(function(e){if(void 0===j[e]){j[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",H.nc&&t.setAttribute("nonce",H.nc),t.rel="prefetch",t.as="script",t.href=$(e),document.head.appendChild(t)}}),O.length=0),e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!k[e])return;for(var o in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,o)&&(f[o]=t[o]);0===--b&&0===x&&I()}(e,t),n&&n(e,t)};var a,r=!0,i="1ca584aa8a326a7feec1",s=1e4,l={},u=[],d=[];function c(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,o){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=o||function(){};else t._acceptedDependencies[e]=o||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var o=0;o<e.length;o++)t._declinedDependencies[e[o]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var o=t._disposeHandlers.indexOf(e);o>=0&&t._disposeHandlers.splice(o,1)},check:C,apply:S,status:function(e){if(!e)return m;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:l[e]};return a=void 0,t}var p=[],m="idle";function h(e){m=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var g,f,v,b=0,x=0,y={},k={},w={};function E(e){return+e+""===e?+e:e}function C(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(t=s,t=t||1e4,new Promise(function(e,o){if("undefined"===typeof XMLHttpRequest)return o(new Error("No browser support"));try{var n=new XMLHttpRequest,a=H.p+""+i+".hot-update.json";n.open("GET",a,!0),n.timeout=t,n.send(null)}catch(r){return o(r)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)o(new Error("Manifest request to "+a+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)o(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(r){return void o(r)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;k={},y={},w=e.c,v=e.h,h("prepare");var t=new Promise(function(e,t){g={resolve:e,reject:t}});for(var o in f={},j)A(o);return"prepare"===m&&0===x&&0===b&&I(),t});var t}function A(e){w[e]?(k[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=H.p+""+e+"."+i+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):y[e]=!0}function I(){h("ready");var e=g;if(g=null,e)if(r)Promise.resolve().then(function(){return S(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&t.push(E(o));e.resolve(t)}}function S(t){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var o,n,a,r,s;function d(e){for(var t=[e],o={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var a=n.pop(),i=a.id,s=a.chain;if((r=P[i])&&!r.hot._selfAccepted){if(r.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(r.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var l=0;l<r.parents.length;l++){var u=r.parents[l],d=P[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[i]?(o[u]||(o[u]=[]),c(o[u],[i])):(delete o[u],t.push(u),n.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:o}}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var p={},g=[],b={},x=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var y in f)if(Object.prototype.hasOwnProperty.call(f,y)){var k;s=E(y);var C=!1,A=!1,I=!1,S="";switch((k=f[y]?d(s):{type:"disposed",moduleId:y}).chain&&(S="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(C=new Error("Aborted because of self decline: "+k.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(C=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(C=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(k),A=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),I=!0;break;default:throw new Error("Unexception type "+k.type)}if(C)return h("abort"),Promise.reject(C);if(A)for(s in b[s]=f[s],c(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,s)&&(p[s]||(p[s]=[]),c(p[s],k.outdatedDependencies[s]));I&&(c(g,[k.moduleId]),b[s]=x)}var D,O=[];for(n=0;n<g.length;n++)s=g[n],P[s]&&P[s].hot._selfAccepted&&b[s]!==x&&O.push({module:s,errorHandler:P[s].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete j[e]}(e)});for(var $,T,B=g.slice();B.length>0;)if(s=B.pop(),r=P[s]){var L={},M=r.hot._disposeHandlers;for(a=0;a<M.length;a++)(o=M[a])(L);for(l[s]=L,r.hot.active=!1,delete P[s],delete p[s],a=0;a<r.children.length;a++){var F=P[r.children[a]];F&&((D=F.parents.indexOf(s))>=0&&F.parents.splice(D,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(r=P[s]))for(T=p[s],a=0;a<T.length;a++)$=T[a],(D=r.children.indexOf($))>=0&&r.children.splice(D,1);for(s in h("apply"),i=v,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var R=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(r=P[s])){T=p[s];var N=[];for(n=0;n<T.length;n++)if($=T[n],o=r.hot._acceptedDependencies[$]){if(-1!==N.indexOf(o))continue;N.push(o)}for(n=0;n<N.length;n++){o=N[n];try{o(T)}catch(_){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:T[n],error:_}),t.ignoreErrored||R||(R=_)}}}for(n=0;n<O.length;n++){var z=O[n];s=z.module,u=[s];try{H(s)}catch(_){if("function"===typeof z.errorHandler)try{z.errorHandler(_)}catch(q){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:q,originalError:_}),t.ignoreErrored||R||(R=q),R||(R=_)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:_}),t.ignoreErrored||R||(R=_)}}return R?(h("fail"),Promise.reject(R)):(h("idle"),new Promise(function(e){e(g)}))}var P={},j={1:0},D=[],O=[];function $(e){return H.p+"static/js/"+({2:"documents-atlas-repair-index",3:"documents-classification-propagation",4:"documents-downloads-downloads",5:"documents-glossary",6:"documents-high-availability",7:"documents-hook-hook-falcon",8:"documents-hook-hook-h-base",9:"documents-hook-hook-hive",10:"documents-hook-hook-sqoop",11:"documents-hook-hook-storm",12:"documents-import-export-export-api",13:"documents-import-export-export-hdfs-api",14:"documents-import-export-export-import-audits",15:"documents-import-export-import-api",16:"documents-import-export-import-api-options",17:"documents-import-export-import-entity-transforms",18:"documents-import-export-import-export-api",19:"documents-import-export-incremental-export",20:"documents-introduction",21:"documents-migration-migration-0-8-to-1-0",22:"documents-notifications",23:"documents-project-info-issue-tracking",24:"documents-project-info-mailing-lists",25:"documents-project-info-project-info",26:"documents-project-info-source-repository",27:"documents-project-info-team-list",28:"documents-replicated-to-from-attributes",29:"documents-search-search-advanced",30:"documents-search-search-basic",31:"documents-security",32:"documents-setup-atlas-server",33:"documents-setup-configuration",34:"documents-setup-eclipse-setup",35:"documents-setup-installation-steps",36:"documents-setup-quick-start",37:"documents-soft-reference",38:"documents-type-system",39:"documents-whats-new-whats-new-1-0",40:"documents-whats-new-whats-new-2-0"}[e]||e)+"."+{2:"5bacb97e",3:"bb77a062",4:"1d4ba00a",5:"c6fbdb88",6:"806518d4",7:"bd75f453",8:"ae9122f9",9:"9449321b",10:"4e3eab41",11:"ac9a95e2",12:"ad395621",13:"606d4d24",14:"db4f9bd9",15:"8513ff72",16:"2687cf8c",17:"970fa6dd",18:"0748bd21",19:"2305904a",20:"3ad7732f",21:"9c6730ce",22:"2531c143",23:"0060ea0a",24:"d8fd200e",25:"af80e104",26:"18f03fac",27:"2c799991",28:"ff434667",29:"12eb97f5",30:"591c3a2f",31:"5fd308f9",32:"e7c3329b",33:"1dcb3844",34:"27b789ca",35:"d353b1d3",36:"85882818",37:"cf5c5a9d",38:"ff075e98",39:"259e9a12",40:"6b5b2db3"}[e]+".js"}function H(t){if(P[t])return P[t].exports;var o=P[t]={i:t,l:!1,exports:{},hot:c(t),parents:(d=u,u=[],d),children:[]};return e[t].call(o.exports,o,o.exports,function(e){var t=P[e];if(!t)return H;var o=function(o){return t.hot.active?(P[o]?-1===P[o].parents.indexOf(e)&&P[o].parents.push(e):(u=[e],a=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),u=[]),H(o)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}};for(var r in H)Object.prototype.hasOwnProperty.call(H,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(o,r,n(r));return o.e=function(e){return"ready"===m&&h("prepare"),x++,H.e(e).then(t,function(e){throw t(),e});function t(){x--,"prepare"===m&&(y[e]||A(e),0===x&&0===b&&I())}},o.t=function(e,t){return 1&t&&(e=o(e)),H.t(e,-2&t)},o}(t)),o.l=!0,o.exports}H.e=function(e){var t=[],o=j[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(function(t,n){o=j[e]=[t,n]});t.push(o[2]=n);var a,r=document.createElement("script");r.charset="utf-8",r.timeout=120,H.nc&&r.setAttribute("nonce",H.nc),r.src=$(e),0!==r.src.indexOf(window.location.origin+"/")&&(r.crossOrigin="anonymous");var i=new Error;a=function(t){r.onerror=r.onload=null,clearTimeout(s);var o=j[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}j[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:r})},12e4);r.onerror=r.onload=a,document.head.appendChild(r)}return Promise.all(t)},H.m=e,H.c=P,H.d=function(e,t,o){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},H.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(H.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)H.d(o,n,function(t){return e[t]}.bind(null,n));return o},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="/Doc-test/",H.oe=function(e){throw console.error(e),e},H.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],B=T.push.bind(T);T.push=t,T=T.slice();for(var L=0;L<T.length;L++)t(T[L]);var M=B,F=(D.push([0,0]),o());t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"Apache Atlas",description:"My awesome app using docz",menu:["Introduction","Documentation"],version:"1.0.0",repository:null,native:!1,codeSandbox:!0,themeConfig:{},separator:"-",files:"**/*.{md,mdx}",base:"/Doc-test",src:"./src",logo:{src:"./src/resources/images/atlas-logo.png"},public:"./src/resources",plugins:[{}],theme:"theme/"},entries:[{key:"documents/ClassificationPropagation.md",value:{name:"ClassificationPropagation",route:"/Doc-test/ClassificationPropagation",menu:"Documentation",submenu:"Whats-New",id:"65a0fa2b70ad29423c044848976ed3ff",filepath:"documents/ClassificationPropagation.md",link:"",slug:"documents-classification-propagation",headings:[{slug:"classification-propagation",depth:1,value:"Classification Propagation"},{slug:"use-cases",depth:2,value:"Use Cases"},{slug:"add-classification-to-an-entity",depth:2,value:"Add classification to an entity"},{slug:"update-classification-associated-with-an-entity",depth:2,value:"Update classification associated with an entity"},{slug:"remove-classification-associated-with-an-entity",depth:2,value:"Remove classification associated with an entity"},{slug:"add-lineage-between-entities",depth:2,value:"Add lineage between entities"},{slug:"delete-an-entity",depth:2,value:"Delete an entity"},{slug:"control-propagation",depth:2,value:"Control Propagation"},{slug:"propagate-flag-in-classification",depth:2,value:"Propagate flag in classification"},{slug:"propagate-flag-in-lineage-edge",depth:2,value:"Propagate flag in lineage edge"},{slug:"block-propagation-of-specific-classifications-in-lineage-edge",depth:2,value:"Block propagation of specific classifications in lineage edge"},{slug:"notifications-and-audit",depth:2,value:"Notifications and Audit"},{slug:"glossary",depth:2,value:"Glossary"}]}},{key:"documents/AtlasRepairIndex.md",value:{name:"Atlas Repair Index",route:"/Doc-test/AtlasRepairIndex",menu:"Documentation",submenu:"Whats-New",id:"968c683e8c22faccc61bff39ed845384",filepath:"documents/AtlasRepairIndex.md",link:"",slug:"documents-atlas-repair-index",headings:[{slug:"atlas-repair-index",depth:1,value:"Atlas Repair Index"},{slug:"introduction",depth:2,value:"Introduction"},{slug:"need-for-this-tool",depth:4,value:"Need for this Tool"},{slug:"location",depth:4,value:"Location"},{slug:"steps-to-execute-tool",depth:4,value:"Steps to Execute Tool"},{slug:"complete-restore",depth:5,value:"Complete Restore"},{slug:"caveats",depth:6,value:"Caveats"},{slug:"selective-restore",depth:5,value:"Selective Restore"}]}},{key:"documents/Glossary.md",value:{name:"Glossary",route:"/Doc-test/Glossary",menu:"Documentation",submenu:"Whats-New",id:"63b6b3d0c273e4eb20395cf2de83c245",filepath:"documents/Glossary.md",link:"",slug:"documents-glossary",headings:[{slug:"glossary",depth:1,value:"Glossary"},{slug:"use-cases",depth:3,value:"Use cases"},{slug:"what-is-a-glossary-term-",depth:3,value:"What is a Glossary term ?"},{slug:"ui-interactions",depth:3,value:"UI interactions"},{slug:"glossary-tab",depth:4,value:"Glossary tab"},{slug:"term-context-menu",depth:5,value:"Term context menu"},{slug:"term-detail-page",depth:5,value:"Term detail page"},{slug:"add-classification-to-term",depth:5,value:"Add classification to Term"},{slug:"create-term-relationship-with-other-term",depth:5,value:"Create term relationship with other term"},{slug:"categorize-a-term",depth:5,value:"Categorize a term"},{slug:"category-view",depth:4,value:"Category view"},{slug:"category-context-menu",depth:5,value:"Category context menu"},{slug:"category-detail-page",depth:5,value:"Category detail page"},{slug:"categorize-term",depth:5,value:"Categorize term"},{slug:"term-assignment-flow",depth:4,value:"Term assignment flow"},{slug:"assign-term",depth:5,value:"Assign term"},{slug:"propagated-classification",depth:5,value:"Propagated classification"},{slug:"search-using-a-term",depth:4,value:"Search using a term"},{slug:"summary-of-rest-interactions",depth:4,value:"Summary of REST interactions"},{slug:"json-structure",depth:5,value:"JSON structure"},{slug:"create-operations",depth:5,value:"CREATE operations"},{slug:"read-operations",depth:5,value:"READ operations"},{slug:"update-operations",depth:5,value:"UPDATE operations"},{slug:"delete-operations",depth:5,value:"DELETE operations"}]}},{key:"documents/HighAvailability.md",value:{name:"HighAvailability",route:"/Doc-test/HighAvailability",menu:"Documentation",submenu:"Whats-New",id:"d7ff0f0d643531e940f5ac61200b2ce3",filepath:"documents/HighAvailability.md",link:"",slug:"documents-high-availability",headings:[{slug:"fault-tolerance-and-high-availability-options",depth:1,value:"Fault Tolerance and High Availability Options"},{slug:"introduction",depth:2,value:"Introduction"},{slug:"atlas-web-service",depth:2,value:"Atlas Web Service"},{slug:"setting-up-the-high-availability-feature-in-atlas",depth:3,value:"Setting up the High Availability feature in Atlas"},{slug:"configuring-clients-to-use-the-high-availability-feature",depth:3,value:"Configuring clients to use the High Availability feature"},{slug:"using-an-intermediate-proxy",depth:4,value:"Using an intermediate proxy"},{slug:"using-automatic-detection-of-active-instance",depth:4,value:"Using automatic detection of active instance"},{slug:"implementation-details-of-atlas-high-availability",depth:3,value:"Implementation Details of Atlas High Availability"},{slug:"metadata-store",depth:2,value:"Metadata Store"},{slug:"index-store",depth:2,value:"Index Store"},{slug:"solr",depth:3,value:"Solr"},{slug:"elasticsearch--tech-preview",depth:3,value:"Elasticsearch  (Tech Preview)"},{slug:"notification-server",depth:2,value:"Notification Server"},{slug:"known-issues",depth:2,value:"Known Issues"}]}},{key:"documents/Introduction.md",value:{name:"Introduction",route:"/Doc-test/Introduction",menu:"Introduction",id:"358978c3a3059f68f7ae1f5bcf177949",filepath:"documents/Introduction.md",link:"",slug:"documents-introduction",headings:[{slug:"introduction",depth:1,value:"Introduction"},{slug:"overview",depth:2,value:"Overview"},{slug:"features",depth:2,value:"Features"},{slug:"metadata-types--instances",depth:3,value:"Metadata types & instances"},{slug:"classification",depth:3,value:"Classification"},{slug:"lineage",depth:3,value:"Lineage"},{slug:"searchdiscovery",depth:3,value:"Search/Discovery"},{slug:"security--data-masking",depth:3,value:"Security & Data Masking"},{slug:"getting-started",depth:2,value:"Getting Started"},{slug:"api-documentation",depth:2,value:"API Documentation"},{slug:"developer-setup-documentation",depth:2,value:"Developer Setup Documentation"}]}},{key:"documents/Notifications.md",value:{name:"Notifications",route:"/Doc-test/Notifications",menu:"Documentation",submenu:"Whats-New",id:"d811bdbc7388c22282f7f3b64f9035b1",filepath:"documents/Notifications.md",link:"",slug:"documents-notifications",headings:[{slug:"notifications",depth:1,value:"Notifications"},{slug:"notifications-from-apache-atlas",depth:2,value:"Notifications from Apache Atlas"},{slug:"notifications---v2-apache-atlas-version-10",depth:3,value:"Notifications - V2: Apache Atlas version 1.0"},{slug:"notifications---v1-apache-atlas-version-08x-and-earlier",depth:3,value:"Notifications - V1: Apache Atlas version 0.8.x and earlier"},{slug:"notifications-to-apache-atlas",depth:2,value:"Notifications to Apache Atlas"}]}},{key:"documents/ReplicatedToFromAttributes.md",value:{name:"Replicated Attributes",route:"/Doc-test/Replicated Attributes",menu:"Documentation",submenu:"Whats-New",id:"f58ce04d4e18114dc86a438f05f6018f",filepath:"documents/ReplicatedToFromAttributes.md",link:"",slug:"documents-replicated-to-from-attributes",headings:[{slug:"replicated-attributes",depth:1,value:"Replicated Attributes"},{slug:"background",depth:4,value:"Background"}]}},{key:"documents/TypeSystem.md",value:{name:"Type System",route:"/Doc-test/TypeSystem",menu:"Documentation",submenu:"Whats-New",id:"507fb4123d3a830140580b1cfb0095cc",filepath:"documents/TypeSystem.md",link:"",slug:"documents-type-system",headings:[{slug:"type-system",depth:1,value:"Type System"},{slug:"overview",depth:2,value:"Overview"},{slug:"types",depth:2,value:"Types"},{slug:"entities",depth:2,value:"Entities"},{slug:"attributes",depth:2,value:"Attributes"},{slug:"system-specific-types-and-their-significance",depth:2,value:"System specific types and their significance"}]}},{key:"documents/SoftReference.md",value:{name:"Soft Reference",route:"/Doc-test/SoftReference",menu:"Documentation",submenu:"Whats-New",id:"fc91674110b60f367e5e81dc47d9a2dd",filepath:"documents/SoftReference.md",link:"",slug:"documents-soft-reference",headings:[{slug:"entity-attribute-option-softreference",depth:1,value:"Entity Attribute Option: SoftReference"},{slug:"background",depth:4,value:"Background"},{slug:"specification",depth:4,value:"Specification"}]}},{key:"documents/security.md",value:{name:"Security",route:"/Doc-test/security",menu:"Documentation",submenu:"Whats-New",id:"0682d1a00edd27ba88773a2086720eb7",filepath:"documents/security.md",link:"",slug:"documents-security",headings:[{slug:"security-features-of-apache-atlas",depth:1,value:"Security Features of Apache Atlas"},{slug:"overview",depth:2,value:"Overview"},{slug:"ssl",depth:2,value:"SSL"},{slug:"credential-provider-utility-script",depth:4,value:"Credential Provider Utility Script"},{slug:"service-authentication",depth:2,value:"Service Authentication"},{slug:"jaas-configuration",depth:3,value:"JAAS configuration"},{slug:"spnego-based-http-authentication",depth:2,value:"SPNEGO-based HTTP Authentication"},{slug:"client-security-configuration",depth:3,value:"Client security configuration"},{slug:"solr-kerberos-configuration",depth:3,value:"SOLR Kerberos configuration"}]}},{key:"documents/Downloads/Downloads.md",value:{name:"Downloads-data",route:"/Doc-test/Downloads",menu:"Documentation",submenu:"Downloads",id:"0cee405df7fd7cd7e40282afbb30e8bd",filepath:"documents/Downloads/Downloads.md",link:"",slug:"documents-downloads-downloads",headings:[{slug:"downloads",depth:1,value:"Downloads"},{slug:"verify-the-integrity-of-the-files",depth:2,value:"Verify the integrity of the files"},{slug:"release-notes",depth:2,value:"Release Notes"}]}},{key:"documents/Hook/Hook-Falcon.md",value:{name:"Falcon",route:"/Doc-test/Hook-Falcon",menu:"Documentation",submenu:"Hooks",id:"dc9ea38e1c137cb8160d633c3e936976",filepath:"documents/Hook/Hook-Falcon.md",link:"",slug:"documents-hook-hook-falcon",headings:[{slug:"falcon-atlas-bridge",depth:1,value:"Falcon Atlas Bridge"},{slug:"falcon-model",depth:2,value:"Falcon Model"},{slug:"falcon-hook",depth:2,value:"Falcon Hook"},{slug:"notes",depth:2,value:"NOTES"}]}},{key:"documents/Hook/Hook-HBase.md",value:{name:"HBase",route:"/Doc-test/Hook-HBase",menu:"Documentation",submenu:"Hooks",id:"e9e2795c56c5231c5a2beb3b81af16a5",filepath:"documents/Hook/Hook-HBase.md",link:"",slug:"documents-hook-hook-h-base",headings:[{slug:"apache-atlas-hook--bridge-for-apache-hbase",depth:1,value:"Apache Atlas Hook & Bridge for Apache HBase"},{slug:"hbase-model",depth:2,value:"HBase Model"},{slug:"hbase-hook",depth:2,value:"HBase Hook"},{slug:"notes",depth:2,value:"NOTES"},{slug:"importing-hbase-metadata",depth:2,value:"Importing HBase Metadata"}]}},{key:"documents/Hook/Hook-Hive.md",value:{name:"Hive",route:"/Doc-test/Hook-Hive",menu:"Documentation",submenu:"Hooks",id:"97e85e3cfef3c06a87ca1d127eb6b7bb",filepath:"documents/Hook/Hook-Hive.md",link:"",slug:"documents-hook-hook-hive",headings:[{slug:"apache-atlas-hook--bridge-for-apache-hive",depth:1,value:"Apache Atlas Hook & Bridge for Apache Hive"},{slug:"hive-model",depth:2,value:"Hive Model"},{slug:"hive-hook",depth:2,value:"Hive Hook"},{slug:"column-level-lineage",depth:2,value:"Column Level Lineage"},{slug:"model",depth:3,value:"Model"},{slug:"examples",depth:3,value:"Examples"},{slug:"extracting-lineage-from-hive-commands",depth:3,value:"Extracting Lineage from Hive commands"},{slug:"notes",depth:2,value:"NOTES"},{slug:"importing-hive-metadata",depth:2,value:"Importing Hive Metadata"}]}},{key:"documents/Hook/Hook-Sqoop.md",value:{name:"Sqoop",route:"/Doc-test/Hook-Sqoop",menu:"Documentation",submenu:"Hooks",id:"503c57619575657d81d009fd1919473f",filepath:"documents/Hook/Hook-Sqoop.md",link:"",slug:"documents-hook-hook-sqoop",headings:[{slug:"apache-atlas-hook-for-apache-sqoop",depth:1,value:"Apache Atlas Hook for Apache Sqoop"},{slug:"sqoop-model",depth:2,value:"Sqoop Model"},{slug:"sqoop-hook",depth:2,value:"Sqoop Hook"},{slug:"notes",depth:2,value:"NOTES"}]}},{key:"documents/Hook/Hook-Storm.md",value:{name:"Storm",route:"/Doc-test/Hook-Storm",menu:"Documentation",submenu:"Hooks",id:"c6958124d494fe3a031bbd12583ec767",filepath:"documents/Hook/Hook-Storm.md",link:"",slug:"documents-hook-hook-storm",headings:[{slug:"apache-atlas-hook-for-apache-storm",depth:1,value:"Apache Atlas Hook for Apache Storm"},{slug:"introduction",depth:2,value:"Introduction"},{slug:"storm-data-model",depth:2,value:"Storm Data Model"},{slug:"storm-atlas-hook",depth:2,value:"Storm Atlas Hook"},{slug:"limitations",depth:2,value:"Limitations"},{slug:"installation",depth:2,value:"Installation"},{slug:"configuration",depth:2,value:"Configuration"},{slug:"storm-configuration",depth:3,value:"Storm Configuration"}]}},{key:"documents/Import-Export/Export-API.md",value:{name:"Export API",route:"/Doc-test/Export-API",menu:"Documentation",submenu:"Import/Export",id:"638d1b42b383c0ec01fc4bfa9a128410",filepath:"documents/Import-Export/Export-API.md",link:"",slug:"documents-import-export-export-api",headings:[{slug:"export-api",depth:1,value:"Export API"},{slug:"additional-options",depth:3,value:"Additional Options"},{slug:"contents-of-exported-zip-file",depth:3,value:"Contents of Exported ZIP File"},{slug:"examples",depth:3,value:"Examples"},{slug:"curl-calls",depth:3,value:"CURL Calls"}]}},{key:"documents/Import-Export/Export-HDFS-API.md",value:{name:"Export HDFS API",route:"/Doc-test/Export-HDFS-API",menu:"Documentation",submenu:"Import/Export",id:"05e47c9d31aecb7b7d4272da0831583f",filepath:"documents/Import-Export/Export-HDFS-API.md",link:"",slug:"documents-import-export-export-hdfs-api",headings:[{slug:"export--import-apis-for-hdfs-path",depth:1,value:"Export & Import APIs for HDFS Path"},{slug:"introduction",depth:3,value:"Introduction"},{slug:"export-api-using-matchtype",depth:3,value:"Export API Using matchType"},{slug:"example-using-curl-calls",depth:3,value:"Example Using CURL Calls"},{slug:"automatic-creation-of-hdfs-entities",depth:3,value:"Automatic Creation of HDFS entities"}]}},{key:"documents/Import-Export/ExportImportAudits.md",value:{name:"Export Import Audits",route:"/Doc-test/ExportImportAudits",menu:"Documentation",submenu:"Import/Export",id:"0cd0eb1da37e202f876fe3b853048c1a",filepath:"documents/Import-Export/ExportImportAudits.md",link:"",slug:"documents-import-export-export-import-audits",headings:[{slug:"export--import-audits",depth:1,value:"Export & Import Audits"},{slug:"background",depth:4,value:"Background"},{slug:"rest-apis",depth:4,value:"REST APIs"},{slug:"curl",depth:6,value:"CURL"}]}},{key:"documents/Import-Export/Import-API-Options.md",value:{name:"Import API Options",route:"/Doc-test/Import-API-Options",menu:"Documentation",submenu:"Import/Export",id:"45b02a421ab4039886f40bf992f74800",filepath:"documents/Import-Export/Import-API-Options.md",link:"",slug:"documents-import-export-import-api-options",headings:[{slug:"import-api-options",depth:1,value:"Import API Options"},{slug:"examples-using-curl-calls",depth:3,value:"Examples Using CURL Calls"},{slug:"options",depth:3,value:"Options"},{slug:"transforms",depth:4,value:"Transforms"},{slug:"start-guid-or-start-index",depth:4,value:"Start Guid or Start Index"},{slug:"optional-importing-type-definition",depth:4,value:"Optional Importing Type Definition"},{slug:"specifying-file-to-be-imported-from-server-location",depth:4,value:"Specifying File to be Imported From Server Location"}]}},{key:"documents/Import-Export/Import-API.md",value:{name:"Import API",route:"/Doc-test/Import-API",menu:"Documentation",submenu:"Import/Export",id:"dc87511f27ed0c333a35691228467cc1",filepath:"documents/Import-Export/Import-API.md",link:"",slug:"documents-import-export-import-api",headings:[{slug:"import-api",depth:1,value:"Import API"},{slug:"import-zip-file-using-post",depth:3,value:"Import ZIP File Using POST"},{slug:"import-zip-file-available-on-server",depth:3,value:"Import ZIP File Available on Server"},{slug:"examples-using-curl-calls",depth:3,value:"Examples Using CURL Calls"}]}},{key:"documents/Import-Export/Import-Export-API.md",value:{name:"Import Export API",route:"/Doc-test/Import-Export-API",menu:"Documentation",submenu:"Import/Export",id:"ff8e7c8cf1b89e2a903d6b1dc4f7910c",filepath:"documents/Import-Export/Import-Export-API.md",link:"",slug:"documents-import-export-import-export-api",headings:[{slug:"export--import-rest-apis",depth:1,value:"Export & Import REST APIs"},{slug:"whats-new",depth:3,value:"What's New"},{slug:"background",depth:3,value:"Background"},{slug:"introduction",depth:3,value:"Introduction"},{slug:"errors",depth:3,value:"Errors"},{slug:"rest-api-reference",depth:3,value:"REST API Reference"}]}},{key:"documents/Import-Export/ImportEntityTransforms.md",value:{name:"Import Entity Transforms",route:"/Doc-test/ImportEntityTransforms",menu:"Documentation",submenu:"Import/Export",id:"f938b1564bb89576ae91f2b4b37ef288",filepath:"documents/Import-Export/ImportEntityTransforms.md",link:"",slug:"documents-import-export-import-entity-transforms",headings:[{slug:"new-entity-transforms-framework",depth:1,value:"(New) Entity Transforms Framework"},{slug:"background",depth:4,value:"Background"},{slug:"transformation-framework",depth:4,value:"Transformation Framework"},{slug:"reason-for-new-transformation-framework",depth:4,value:"Reason for New Transformation Framework"},{slug:"approach",depth:4,value:"Approach"},{slug:"conditions",depth:5,value:"Conditions"},{slug:"actions",depth:5,value:"Actions"},{slug:"built-in-transforms",depth:4,value:"Built-in Transforms"},{slug:"add-classification",depth:6,value:"Add Classification"},{slug:"replace-prefix",depth:6,value:"Replace Prefix"},{slug:"to-lower",depth:6,value:"To Lower"},{slug:"clear",depth:6,value:"Clear"},{slug:"additional-examples",depth:4,value:"Additional Examples"}]}},{key:"documents/Import-Export/Incremental-Export.md",value:{name:"Incremental Export",route:"/Doc-test/Incremental-Export",menu:"Documentation",submenu:"Import/Export",id:"a51e3652f4e01e85a1cf5422bc7c43c1",filepath:"documents/Import-Export/Incremental-Export.md",link:"",slug:"documents-import-export-incremental-export",headings:[{slug:"incremental-export",depth:2,value:"Incremental Export"},{slug:"background",depth:4,value:"Background"},{slug:"export-options",depth:4,value:"Export Options"},{slug:"getting-change-marker",depth:4,value:"Getting Change Marker"},{slug:"skip-lineage-option",depth:4,value:"Skip Lineage Option"},{slug:"benefit-of-incremental-export",depth:4,value:"Benefit of Incremental Export"}]}},{key:"documents/Migration/Migration-0.8-to-1.0.md",value:{name:"Migration-0.8 to 1.0",route:"/Doc-test/Migration-0.8-to-1.0",menu:"Documentation",submenu:"Migration",id:"a5e2f887053b440c46fdfb927acc1dfa",filepath:"documents/Migration/Migration-0.8-to-1.0.md",link:"",slug:"documents-migration-migration-0-8-to-1-0",headings:[{slug:"migrating-data-from-apache-atlas-08-to-apache-atlas-10",depth:1,value:"Migrating data from Apache Atlas 0.8 to Apache Atlas 1.0"},{slug:"migration-steps",depth:3,value:"Migration Steps"},{slug:"planning-the-migration",depth:5,value:"Planning the migration"},{slug:"exporting-data-from-apache-atlas-08",depth:4,value:"Exporting data from Apache Atlas 0.8"},{slug:"before-importing-into-apache-atlas-10",depth:3,value:"Before importing into Apache Atlas 1.0"},{slug:"importing-data-into-apache-atlas-10",depth:4,value:"Importing Data into Apache Atlas 1.0"},{slug:"atlas-entity-defaults-for-migrated-data",depth:3,value:"Atlas Entity Defaults for Migrated Data"},{slug:"handling-of-entity-definitions-that-use-classifications-as-types",depth:4,value:"Handling of Entity Definitions that use Classifications as Types"}]}},{key:"documents/Project-Info/Mailing-Lists.md",value:{name:"Mailing-Lists",route:"/Doc-test/Mailing-Lists",menu:"Documentation",submenu:"Project-Info",id:"33512b3e6a264dae7b5b44810fe58f3f",filepath:"documents/Project-Info/Mailing-Lists.md",link:"",slug:"documents-project-info-mailing-lists",headings:[{slug:"project-mailing-lists",depth:1,value:"Project Mailing Lists"}]}},{key:"documents/Project-Info/issue-tracking.md",value:{name:"Issue-Tracking",route:"/Doc-test/Issue-Tracking",menu:"Documentation",submenu:"Project-Info",id:"2e4bac7470713976a457d1c6bf3cac3e",filepath:"documents/Project-Info/issue-tracking.md",link:"",slug:"documents-project-info-issue-tracking",headings:[{slug:"overview",depth:1,value:"Overview"},{slug:"issue-tracking",depth:1,value:"Issue Tracking"}]}},{key:"documents/Project-Info/project-info.md",value:{name:"Project-Info",route:"/Doc-test/Project-Info",menu:"Documentation",submenu:"Project-Info",id:"8736d1fa1c615ed294b443ae036b507a",filepath:"documents/Project-Info/project-info.md",link:"",slug:"documents-project-info-project-info",headings:[{slug:"project-information",depth:1,value:"Project Information"},{slug:"overview",depth:1,value:"Overview"}]}},{key:"documents/Project-Info/source-repository.md",value:{name:"Source-Repository",route:"/Doc-test/Source-Repository",menu:"Documentation",submenu:"Project-Info",id:"c7a7b2bc0f362ab13fe8ed074930e97f",filepath:"documents/Project-Info/source-repository.md",link:"",slug:"documents-project-info-source-repository",headings:[]}},{key:"documents/Project-Info/team-list.md",value:{name:"Team-List",route:"/Doc-test/Team-List",menu:"Documentation",submenu:"Project-Info",id:"7bcf686ffe8506a5385111c414d2c441",filepath:"documents/Project-Info/team-list.md",link:"",slug:"documents-project-info-team-list",headings:[{slug:"the-team",depth:1,value:"The Team"},{slug:"a-successful-project-requires-many-people-to-play-many-roles-some-members-write-code-or-documentation-while-others-are-valuable-as-testers-submitting-patches-and-suggestions",depth:4,value:"A successful project requires many people to play many roles. Some members write code or documentation, while others are valuable as testers, submitting patches and suggestions."},{slug:"the-team-is-comprised-of-members-and-contributors-members-have-direct-access-to-the-source-of-a-project-and-actively-evolve-the-code-base-contributors-improve-the-project-through-submission-of-patches-and-suggestions-to-the-members-the-number-of-contributors-to-the-project-is-unbounded-get-involved-today-all-contributions-to-the-project-are-greatly-appreciated",depth:4,value:"The team is comprised of Members and Contributors. Members have direct access to the source of a project and actively evolve the code-base. Contributors improve the project through submission of patches and suggestions to the Members. The number of Contributors to the project is unbounded. Get involved today. All contributions to the project are greatly appreciated."},{slug:"members",depth:2,value:"Members"},{slug:"the-following-is-a-list-of-developers-with-commit-privileges-that-have-directly-contributed-to-the-project-in-one-way-or-another",depth:4,value:"The following is a list of developers with commit privileges that have directly contributed to the project in one way or another."}]}},{key:"documents/Setup/AtlasServer.md",value:{name:"Atlas Server",route:"/Doc-test/AtlasServer",menu:"Documentation",submenu:"Setup",id:"767ca095144124611f59098e7afa50b0",filepath:"documents/Setup/AtlasServer.md",link:"",slug:"documents-setup-atlas-server",headings:[{slug:"atlas-server-entity-type",depth:1,value:"Atlas Server Entity Type"},{slug:"background",depth:4,value:"Background"},{slug:"creation",depth:4,value:"Creation"},{slug:"details-within-property-page",depth:4,value:"Details within Property Page"},{slug:"exportimport-audits",depth:6,value:"Export/Import Audits"},{slug:"example",depth:6,value:"Example"},{slug:"support-for-clusters-full-name",depth:4,value:"Support for Cluster's Full Name"},{slug:"additional-information",depth:4,value:"Additional Information"},{slug:"rest-apis",depth:4,value:"REST APIs"},{slug:"curl",depth:6,value:"CURL"}]}},{key:"documents/Setup/Configuration.md",value:{name:"Configuration",route:"/Doc-test/Configuration",menu:"Documentation",submenu:"Setup",id:"2376cf14650fd03637e96898ec8181f9",filepath:"documents/Setup/Configuration.md",link:"",slug:"documents-setup-configuration",headings:[{slug:"configuring-apache-atlas---application-properties",depth:1,value:"Configuring Apache Atlas - Application Properties"},{slug:"graph-configs",depth:2,value:"Graph Configs"},{slug:"graph-persistence-engine---hbase",depth:3,value:"Graph Persistence engine - HBase"},{slug:"graph-index-search-engine",depth:3,value:"Graph Index Search Engine"},{slug:"graph-search-index---solr",depth:4,value:"Graph Search Index - Solr"},{slug:"graph-search-index---elasticsearch-tech-preview",depth:4,value:"Graph Search Index - Elasticsearch (Tech Preview)"},{slug:"search-configs",depth:2,value:"Search Configs"},{slug:"notification-configs",depth:2,value:"Notification Configs"},{slug:"client-configs",depth:2,value:"Client Configs"},{slug:"security-properties",depth:2,value:"Security Properties"},{slug:"ssl-config",depth:3,value:"SSL config"},{slug:"high-availability-properties",depth:2,value:"High Availability Properties"},{slug:"server-properties",depth:2,value:"Server Properties"},{slug:"performance-configuration-items",depth:2,value:"Performance configuration items"},{slug:"recording-performance-metrics",depth:3,value:"Recording performance metrics"}]}},{key:"documents/Setup/EclipseSetup.md",value:{name:"EclipseSetup",route:"/Doc-test/EclipseSetup",menu:"Documentation",submenu:"Setup",id:"50375a47ccd1c9caeb50b97d66172c37",filepath:"documents/Setup/EclipseSetup.md",link:"",slug:"documents-setup-eclipse-setup",headings:[{slug:"tools-required-to-build-and-run-apache-atlas-on-eclipse",depth:1,value:"Tools required to build and run Apache Atlas on Eclipse"}]}},{key:"documents/Setup/InstallationSteps.md",value:{name:"Installation Steps",route:"/Doc-test/InstallationSteps",menu:"Documentation",submenu:"Setup",id:"cdff4ecdb2fbcf2c335e8247b866c865",filepath:"documents/Setup/InstallationSteps.md",link:"",slug:"documents-setup-installation-steps",headings:[{slug:"building--installing-apache-atlas",depth:2,value:"Building & Installing Apache Atlas"},{slug:"building-apache-atlas",depth:3,value:"Building Apache Atlas"},{slug:"packaging-apache-atlas",depth:3,value:"Packaging Apache Atlas"},{slug:"packaging-apache-atlas-with-embedded-apache-hbase--apache-solr",depth:3,value:"Packaging Apache Atlas with embedded Apache HBase & Apache Solr"},{slug:"packaging-apache-atlas-with-embedded-apache-cassandra--apache-solr",depth:3,value:"Packaging Apache Atlas with embedded Apache Cassandra & Apache Solr"},{slug:"apache-atlas-package",depth:3,value:"Apache Atlas Package"},{slug:"installing--running-apache-atlas",depth:3,value:"Installing & Running Apache Atlas"},{slug:"installing-apache-atlas",depth:4,value:"Installing Apache Atlas"},{slug:"running-apache-atlas-with-local-apache-hbase--apache-solr",depth:4,value:"Running Apache Atlas with Local Apache HBase & Apache Solr"},{slug:"using-apache-atlas",depth:4,value:"Using Apache Atlas"},{slug:"stopping-apache-atlas-server",depth:4,value:"Stopping Apache Atlas Server"},{slug:"configuring-apache-atlas",depth:3,value:"Configuring Apache Atlas"},{slug:"configuring-apache-hbase-as-the-storage-backend-for-the-graph-repository",depth:4,value:"Configuring Apache HBase as the storage backend for the Graph Repository"},{slug:"configuring-apache-solr-as-the-indexing-backend-for-the-graph-repository",depth:4,value:"Configuring Apache Solr as the indexing backend for the Graph Repository"},{slug:"configuring-kafka-topics",depth:4,value:"Configuring Kafka Topics"},{slug:"setting-up-apache-atlas",depth:4,value:"Setting up Apache Atlas"},{slug:"examples-calling-apache-atlas-rest-apis",depth:3,value:"Examples: calling Apache Atlas REST APIs"},{slug:"troubleshooting",depth:3,value:"Troubleshooting"},{slug:"setup-issues",depth:4,value:"Setup issues"}]}},{key:"documents/Setup/QuickStart.md",value:{name:"Quick Start",route:"/Doc-test/QuickStart",menu:"Documentation",submenu:"Setup",id:"bbea986d958a690286ce431e4ebaed6c",filepath:"documents/Setup/QuickStart.md",link:"",slug:"documents-setup-quick-start",headings:[{slug:"quick-start",depth:1,value:"Quick Start"},{slug:"introduction",depth:2,value:"Introduction"},{slug:"example-type-definitions",depth:3,value:"Example Type Definitions"},{slug:"example-instance-graph",depth:3,value:"Example Instance Graph"},{slug:"running-the-example",depth:2,value:"Running the example"},{slug:"dashboard",depth:2,value:"Dashboard"}]}},{key:"documents/Search/Search-Advanced.md",value:{name:"Advance Search",route:"/Doc-test/Search-Advance",menu:"Documentation",submenu:"Search",id:"8a6185c2fcbf6cae301925dc794b24e9",filepath:"documents/Search/Search-Advanced.md",link:"",slug:"documents-search-search-advanced",headings:[{slug:"advanced-search",depth:1,value:"Advanced Search"},{slug:"background",depth:3,value:"Background"},{slug:"using-advanced-search",depth:2,value:"Using Advanced Search"},{slug:"introduction-to-domain-specific-language",depth:2,value:"Introduction to Domain Specific Language"},{slug:"from-clause",depth:3,value:"From Clause"},{slug:"where-clause",depth:3,value:"Where Clause"},{slug:"using-date-literals",depth:3,value:"Using Date Literals"},{slug:"using-boolean-literals",depth:4,value:"Using Boolean Literals"},{slug:"existence-of-a-property",depth:3,value:"Existence of a Property"},{slug:"select-clause",depth:3,value:"Select Clause"},{slug:"note-about-select-clauses",depth:4,value:"Note About Select Clauses"},{slug:"classification-based-filtering",depth:3,value:"Classification-based Filtering"},{slug:"limit--offset-clauses",depth:3,value:"Limit & Offset Clauses"},{slug:"ordering-results",depth:3,value:"Ordering Results"},{slug:"aggregate-functions",depth:3,value:"Aggregate Functions"},{slug:"the-count-keyword",depth:3,value:"The count Keyword"},{slug:"the-max-keyword",depth:3,value:"The max Keyword"},{slug:"the-min-keyword",depth:3,value:"The min Keyword"},{slug:"grouping-results",depth:3,value:"Grouping Results"},{slug:"where-clause-with-complex-types",depth:3,value:"Where Clause With Complex Types"},{slug:"using-system-attributes",depth:3,value:"Using System Attributes"},{slug:"state-of-an-entity",depth:3,value:"State of an Entity"},{slug:"using-system-attributes-in-queries",depth:3,value:"Using System Attributes in Queries"},{slug:"advanced-search-rest-api",depth:2,value:"Advanced Search REST API"},{slug:"the-v2-api",depth:3,value:"The V2 API"},{slug:"implementation-approach",depth:2,value:"Implementation Approach"},{slug:"differences-between-master-and-earlier-versions",depth:2,value:"Differences Between Master and Earlier Versions"},{slug:"resources",depth:2,value:"Resources"}]}},{key:"documents/Search/Search-Basic.md",value:{name:"Basic Search",route:"/Doc-test/Search-Basic",menu:"Documentation",submenu:"Search",id:"1dea7cacd4399abee3ed1f8be92994ba",filepath:"documents/Search/Search-Basic.md",link:"",slug:"documents-search-search-basic",headings:[{slug:"basic-search",depth:1,value:"Basic Search"}]}},{key:"documents/Whats-New/WhatsNew-1.0.md",value:{name:"WhatsNew-1.0",route:"/Doc-test/WhatsNew-1.0",menu:"Documentation",submenu:"Releases",id:"66815ce0d61914e74103ff799a82953b",filepath:"documents/Whats-New/WhatsNew-1.0.md",link:"",slug:"documents-whats-new-whats-new-1-0",headings:[{slug:"whats-new-in-apache-atlas-10",depth:1,value:"What's new in Apache Atlas 1.0?"},{slug:"features",depth:2,value:"Features"},{slug:"updates",depth:2,value:"Updates"},{slug:"changes",depth:2,value:"Changes"},{slug:"dsl-search",depth:3,value:"DSL search"}]}},{key:"documents/Whats-New/WhatsNew-2.0.md",value:{name:"WhatsNew-2.0",route:"/Doc-test/WhatsNew-2.0",menu:"Documentation",submenu:"Releases",id:"42012018114e26d0689857eb593940f2",filepath:"documents/Whats-New/WhatsNew-2.0.md",link:"",slug:"documents-whats-new-whats-new-2-0",headings:[{slug:"whats-new-in-apache-atlas-20",depth:1,value:"What's new in Apache Atlas 2.0?"},{slug:"features",depth:2,value:"Features"},{slug:"updates",depth:2,value:"Updates"},{slug:"data-migration",depth:2,value:"Data Migration"}]}}],props:[]}},"./.docz/app/index.jsx":function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"white",function(){return p}),o.d(n,"grayUltraLight",function(){return m}),o.d(n,"grayExtraLight",function(){return h}),o.d(n,"grayLight",function(){return g}),o.d(n,"gray",function(){return f}),o.d(n,"grayDark",function(){return v}),o.d(n,"grayExtraDark",function(){return b}),o.d(n,"dark",function(){return x}),o.d(n,"blueLight",function(){return y}),o.d(n,"blue",function(){return k}),o.d(n,"skyBlue",function(){return w}),o.d(n,"negative",function(){return E}),o.d(n,"green",function(){return C}),o.d(n,"greenLight",function(){return A});var a={};o.r(a),o.d(a,"light",function(){return I}),o.d(a,"dark",function(){return S});var r=o("./node_modules/react/index.js"),i=o.n(r),s=o("./node_modules/react-dom/index.js"),l=o.n(s),u=o("./node_modules/docz/dist/index.esm.js"),d=o("./node_modules/lodash/get.js"),c=o.n(d);const p="#FFFFFF",m="#FCFBFA",h="#F5F6F7",g="#CED4DE",f="#7D899C",v="#2D3747",b="#1D2330",x="#13161F",y="#e9f2fa",k="#0B5FFF",w="#1FB6FF",E="#EB4D4B",C="#38bb9b",A="#529d8b",I={...n,primary:C,text:v,link:C,footerText:v,sidebarBg:h,sidebarText:x,sidebarHighlight:null,sidebarBorder:g,background:p,border:A,theadColor:f,theadBg:h,tableColor:x,tooltipBg:x,tooltipColor:h,codeBg:h,codeColor:f,preBg:h,blockquoteBg:h,blockquoteBorder:g,blockquoteColor:f,propsText:f,propsBg:m},S={...n,primary:w,text:h,link:w,footerText:g,sidebarBg:x,sidebarText:g,sidebarHighlight:null,sidebarBorder:v,background:b,border:v,theadColor:f,theadBg:v,tableColor:h,tooltipBg:x,tooltipColor:h,codeBg:f,codeColor:h,preBg:v,blockquoteBg:v,blockquoteBorder:f,blockquoteColor:f,propsText:g,propsBg:x};var P=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");const j=(e,t)=>o=>c()(o,`theme.docz.${e}`,t),D=({children:e})=>{const t=Object(u.g)();return r.createElement(P.a,{theme:e=>({...e,docz:t.themeConfig})},r.createElement(r.Fragment,null,e))},O=P.d.blockquote`
  background: ${j("colors.blockquoteBg")};
  border-left: 5px solid ${j("colors.blockquoteBorder")};
  color: ${j("colors.blockquoteColor")};
  ${j("styles.blockquote")};

  & > p {
    margin: 0;
    color: ${j("colors.blockquoteColor")};
  }
`,$=P.d.code`
  background: ${j("colors.codeBg")};
  color: ${j("colors.codeColor")};
  ${j("styles.code")};
`;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const T=P.d.a`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${j("colors.link")};
  }

  &:hover {
    color: ${j("colors.link")};
  }

  ${j("styles.link")};
`,B=P.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`,L=P.e`
  to {
    stroke-dashoffset: 1000;
  }
`,M=(e=0)=>P.c`
  stroke-dasharray: 100;
  animation: ${L} 5s ${e}s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    infinite;
`,F=P.d.path`
  stroke: ${j("colors.primary")};
  stroke-width: 3px;
`,R=P.d.path`
  fill: ${j("colors.primary")};
`,N=({size:e=60})=>r.createElement("svg",{width:e,height:.79*e,viewBox:"0 0 121 96"},r.createElement("g",null,r.createElement(R,{d:"M94.4110629,60.8520717 C95.3815188,60.8520717 96.1684193,61.6483184 96.1684193,62.6308855 L96.1684193,84.1888093 C96.1684193,90.7014865 90.9354492,96 84.2817971,96 L11.6626593,96 C5.08322545,96 0.0693980867,90.6732777 9.65270039e-05,83.6092251 C-0.0048201377,83.1344165 0.178267091,82.6773865 0.508386007,82.3398291 C0.838270796,82.0025088 1.28802855,81.8126327 1.75698472,81.8126327 L20.0341004,81.8126327 L20.0341004,11.8111907 C20.0341004,5.29851351 25.2670706,0 31.6994728,0 L104.318611,0 C110.916775,0 115.930602,5.32672231 115.999903,12.3907749 C116.00482,12.8655835 115.821733,13.3226135 115.491614,13.6601709 C115.161729,13.9974912 114.711971,14.1873673 114.243015,14.1873673 L96.1677169,14.1873673 L96.1677169,27.6014816 C96.1677169,28.5840486 95.3810506,29.3805324 94.4105946,29.3805324 C93.4401387,29.3805324 92.6534723,28.5842856 92.6534723,27.6014816 L92.6534723,12.4083165 L92.6534723,11.8111907 C92.6534723,11.6092251 92.6586231,11.4084449 92.6841429,10.9981135 C92.6928056,10.8698701 92.7005318,10.7413897 92.7436112,10.3687491 C92.7574246,10.2552027 92.7695992,10.1411823 92.831877,9.76735641 C92.8501389,9.66186972 92.8667619,9.55614598 92.9475357,9.18611289 C92.970246,9.08560423 92.9913174,8.98462146 93.0908213,8.61601067 C93.1175118,8.52000593 93.1425634,8.42352709 93.1715951,8.32870759 C93.1992221,8.23862907 93.230361,8.15044694 93.3528093,7.78396958 C93.3848847,7.69483925 93.4202379,7.60736827 93.5590751,7.25132105 C93.5953648,7.16385007 93.6349322,7.07803842 93.7896901,6.73147316 C93.8299599,6.64613561 93.8735075,6.56245741 94.0439519,6.22513704 C94.0882019,6.14193293 94.1354955,6.06062522 94.3213923,5.7327868 C94.3693883,5.65219023 94.4199597,5.57349005 94.6208406,5.25560768 C94.6723485,5.17809275 94.7261977,5.10223715 94.9425309,4.79383673 C94.9970825,4.71940343 95.0537412,4.64710356 95.2848244,4.34889624 C95.3424196,4.27754457 95.402122,4.20832634 95.647487,3.92078621 C95.7074235,3.85346437 95.7694671,3.78803892 95.9815861,3.55810163 L31.7001752,3.55810163 C27.2058754,3.55810163 23.5492816,7.26009186 23.5492816,11.8109536 L23.5492816,81.8126327 L74.3763566,81.8126327 C75.3400229,81.8126327 76.1238797,82.5984493 76.1334789,83.5741419 C76.1831138,88.6294434 79.6861203,92.4418984 84.503047,92.4418984 C88.9973468,92.4418984 92.6539406,88.7399081 92.6539406,84.1890464 L92.6539406,62.6311225 C92.6539406,61.6485555 93.4406069,60.8520717 94.4110629,60.8520717 Z M96.2578558,10.5918119 C96.2562169,10.6041385 96.2550463,10.6167021 96.2543439,10.6287915 L112.318258,10.6287915 C111.563199,6.49371327 108.371815,3.55786459 104.339214,3.55786459 C104.270849,3.55786459 104.203186,3.56094622 104.135289,3.56260556 C104.072075,3.5642649 104.008861,3.564739 103.946115,3.56758358 C103.83748,3.57279866 103.729781,3.58085831 103.622317,3.59034026 C103.604289,3.59176256 103.586262,3.59271075 103.568468,3.59437009 C103.45117,3.60551138 103.334575,3.61926021 103.218682,3.63537952 C103.211424,3.63632772 103.204167,3.63727591 103.196909,3.63822411 C103.075397,3.65529162 102.954587,3.67520371 102.834948,3.69772334 C102.834246,3.69796039 102.83331,3.69796039 102.832607,3.69819744 C101.371187,3.97364808 100.046965,4.64283668 98.9709182,5.5917428 C98.9681087,5.59435034 98.965065,5.59672083 98.9622555,5.59932836 C98.8779698,5.67376167 98.7955572,5.75009136 98.7145493,5.82784335 C98.7058866,5.83637711 98.6972239,5.84467381 98.6885612,5.85297052 C98.6117675,5.92740382 98.5363787,6.00349647 98.4623946,6.08077436 C98.4504541,6.09310089 98.4389819,6.10566448 98.4272756,6.11799101 C98.3558669,6.19360956 98.2858629,6.27017631 98.2174979,6.34840239 C98.204855,6.36286236 98.1924463,6.37755939 98.1800376,6.39201936 C98.1128431,6.4700084 98.0463511,6.54894563 97.9819662,6.6295422 C97.9714305,6.64281693 97.961363,6.65632871 97.9508273,6.66960344 C97.8850377,6.75304459 97.8201845,6.8371969 97.7574385,6.92300854 C97.7555655,6.92561608 97.7539266,6.92798657 97.7520536,6.9305941 C97.55726,7.19822213 97.3790895,7.47888785 97.2168395,7.76974665 C97.2025578,7.79558497 97.1871054,7.82071213 97.1730578,7.8467875 C97.136534,7.91387229 97.1023515,7.98214233 97.0677007,8.05041237 C97.044288,8.09639982 97.0201729,8.14191318 96.9976968,8.18837473 C96.9674944,8.25071855 96.9389309,8.31448467 96.9101333,8.37777668 C96.8857841,8.4313497 96.8612008,8.48492271 96.8380222,8.53920687 C96.8118,8.6001284 96.7872167,8.66152403 96.7626334,8.7231567 C96.7392207,8.78170774 96.7160421,8.84002173 96.6940342,8.89904687 C96.671558,8.95878315 96.6502525,9.01923058 96.629181,9.07967801 C96.6074072,9.14225888 96.5863358,9.20483975 96.5662009,9.26789471 C96.5472366,9.32691985 96.5287406,9.38618203 96.5111811,9.44591832 C96.4917485,9.51181787 96.4732525,9.57842856 96.4552248,9.64503926 C96.4395383,9.70335325 96.4240859,9.76190429 96.40957,9.82069238 C96.3924787,9.89062176 96.3767922,9.96102524 96.3613399,10.0316658 C96.3489311,10.0885575 96.3362883,10.1454492 96.3250502,10.202815 C96.3103002,10.2781965 96.2974232,10.3540521 96.2847804,10.4299076 C96.2756494,10.4837177 96.2658161,10.5375278 96.2578558,10.5918119 Z M11.6624252,92.4418984 L75.9979194,92.4418984 C75.9649075,92.4068152 75.9335345,92.3698355 75.9009909,92.3342782 C75.8553361,92.284498 75.8099155,92.2344807 75.7651973,92.1837523 C75.6987052,92.1083708 75.6331497,92.0320411 75.5685307,91.9547632 C75.5252172,91.9030866 75.4819037,91.8514099 75.4392927,91.7990222 C75.3746736,91.7193738 75.3114594,91.637829 75.2487134,91.5560472 C75.2089118,91.5041335 75.1688761,91.452931 75.1297769,91.4003062 C75.0646896,91.3128352 75.0019436,91.2234678 74.9391976,91.1338634 C74.9050151,91.0847943 74.8698961,91.0366734 74.8361818,90.9871302 C74.7633683,90.8797471 74.6928961,90.7702306 74.6233604,90.660003 C74.602289,90.6265791 74.580047,90.5943405 74.5592097,90.5606795 C74.4700073,90.4165539 74.3836145,90.2700578 74.3000312,90.1211912 C74.2777891,90.081604 74.2569519,90.0408316 74.2351781,90.0007704 C74.1750074,89.8907798 74.1153051,89.7805521 74.0581781,89.6684281 C74.0282099,89.60964 74.0003488,89.5499037 73.971317,89.4906415 C73.9247258,89.3951109 73.8779004,89.2993432 73.8334163,89.2021532 C73.8032139,89.1362536 73.7744163,89.0694059 73.7453846,89.0027952 C73.7048806,88.9098721 73.6646108,88.816949 73.6259799,88.7228406 C73.5974164,88.6529113 73.5700236,88.5822707 73.5423966,88.5116302 C73.5061069,88.4187071 73.4707538,88.3253099 73.4365712,88.2309645 C73.4101149,88.1584276 73.3845951,88.0854166 73.3595435,88.0121685 C73.3269998,87.917112 73.2953927,87.8213443 73.2649562,87.7251025 C73.2415435,87.6516174 73.218365,87.5778952 73.196357,87.5036989 C73.1668571,87.4048496 73.1392301,87.3050521 73.1118372,87.2050175 C73.0919364,87.1320065 73.0715674,87.0589955 73.0528373,86.9852733 C73.0259127,86.8802608 73.0013293,86.7738259 72.9769801,86.667391 C72.9610595,86.5972246 72.9439683,86.5275322 72.9289841,86.4566546 C72.9036984,86.3386044 72.8814564,86.2188948 72.8592143,86.0991851 C72.8479762,86.0387377 72.8353334,85.9792385 72.8250318,85.918554 C72.7938929,85.7374488 72.7657977,85.5551583 72.7416826,85.3709714 L21.7919251,85.3709714 L3.68338077,85.3709714 C4.43844,89.5060497 7.62982365,92.4418984 11.6624252,92.4418984 Z M120.998408,32.7899677 C120.998647,32.8098599 121.000556,32.8297522 120.99984,32.850118 C120.998408,32.9064794 120.993634,32.9621303 120.986951,33.0170708 C120.986712,33.0203861 120.986712,33.0234647 120.986235,33.0267801 C120.975971,33.1077699 120.958785,33.1863916 120.938019,33.2635925 C120.933962,33.2787485 120.929665,33.2934308 120.92513,33.30835 C120.878347,33.4655934 120.810559,33.6131276 120.72463,33.7488211 C120.716514,33.7616089 120.708399,33.77416 120.700045,33.7867111 C120.654455,33.854913 120.605285,33.9202732 120.551102,33.981134 C120.54776,33.9846862 120.54418,33.9880016 120.540838,33.9917906 C120.485939,34.0526514 120.426267,34.1087759 120.363491,34.1615851 C120.358478,34.1658477 120.354659,34.1708208 120.349647,34.1748466 C116.038893,37.7064298 112.307441,41.2448806 107.873046,46.0062306 C102.802778,51.4498371 91.7857706,58.7815489 86.0428726,60.5339606 C83.3864839,61.3445694 81.1912456,61.9366004 79.2545094,62.4594822 C75.5209096,63.4666453 72.7568714,64.2130779 69.3242606,65.8091935 L66.5163033,75.703689 C66.2938436,76.487538 65.5749072,77 64.7927178,77 C64.632079,77 64.4685759,76.9786869 64.3062662,76.9332189 C63.354129,76.6670418 62.7994119,75.6852176 63.0674615,74.7405729 L66.0950142,64.0724114 C66.1009815,64.0513351 66.1074262,64.0304956 66.1141095,64.0098929 C66.2733162,63.5189808 66.4310907,63.0273583 66.589104,62.5354989 C68.5186795,56.5263844 70.5141337,50.3124272 74.8387316,45.4144364 C84.7202875,34.2226827 104.265713,30.6427897 119.255011,31.0276098 C119.339269,31.0297412 119.421379,31.0396873 119.502295,31.0529488 C119.520435,31.0557905 119.538337,31.0588691 119.556239,31.0624213 C119.637155,31.0782877 119.716639,31.0979431 119.793259,31.1239925 C119.793736,31.1239925 119.794214,31.1242293 119.794691,31.1244661 C119.871788,31.1507523 119.945305,31.1836692 120.017151,31.2196647 C120.030995,31.2265323 120.0446,31.233163 120.058205,31.2405042 C120.128619,31.2783942 120.196885,31.3198363 120.261331,31.3662516 C120.269208,31.3719351 120.276369,31.378329 120.284007,31.3840125 C120.341293,31.4268755 120.395714,31.473054 120.447271,31.5223109 C120.459445,31.5339147 120.472095,31.5450449 120.48403,31.5571224 C120.53869,31.6120628 120.58977,31.6703187 120.636792,31.7318899 C120.646101,31.7442042 120.654694,31.7572288 120.663764,31.7697799 C120.706489,31.8287462 120.745635,31.8900806 120.780961,31.9540199 C120.785735,31.9630188 120.791225,31.9713072 120.795998,31.9803061 C120.834189,32.0527707 120.866651,32.1285507 120.894816,32.2064619 C120.896965,32.2126191 120.900545,32.2183026 120.902693,32.2244597 C120.905319,32.2318009 120.906274,32.2396157 120.90866,32.2471937 C120.959502,32.3997009 120.989815,32.5607333 120.996976,32.7279228 C120.997692,32.7487623 120.998169,32.769365 120.998408,32.7899677 Z M77.5340269,47.756511 C75.2953469,50.2920613 73.752689,53.2567157 72.4766485,56.4636291 C76.7888345,52.5955355 82.6281636,48.2464759 88.0376107,44.6611362 C91.3895441,42.4395991 97.3876024,38.6593629 103.660632,35.6411889 C101.191855,36.0456645 98.7963549,36.5581265 96.5295094,37.1757332 C88.0946578,39.4737607 81.7037145,43.0337614 77.5340269,47.756511 Z M105.24172,43.5935859 C108.084287,40.541311 110.64878,37.9761591 113.255998,35.5938264 C107.252689,37.4175187 99.0698944,41.6242541 90.0278137,47.6172653 C84.8055001,51.0785153 79.7992015,54.8284396 75.9309802,58.1760196 C74.9697728,59.0079415 74.1544054,59.7489275 73.4588607,60.4098709 C75.0136919,59.9201429 76.5859475,59.4953014 78.3143067,59.0290178 C80.2245483,58.513714 82.3894729,57.9292611 84.9897693,57.1359395 C89.6492502,55.7143547 100.307028,48.8917896 105.24172,43.5935859 Z",id:"Combined-Shape",fill:"#1F2D3D"}),r.createElement(F,{d:"M31.5,18.5 L38.5,18.5",id:"Line",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",css:M(1.5)}),r.createElement(F,{d:"M47.75,18.5 L86.25,18.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(.2)}),r.createElement(F,{d:"M30.9375,38.5 L72.0625,38.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(1)}),r.createElement(F,{d:"M31,56.5 L59,56.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(3)}),r.createElement(F,{d:"M31.375,72.5 L50.625,72.5",id:"Line",strokeWidth:"5","stroke-linecap":"round",strokeLinejoin:"round",css:M(2)})));var z=o("./node_modules/react-github-btn/index.js");const _=P.d.div`
  width: 100%;
  position: fixed;
  background: #333;
  padding: 20px 0;
  color: #fff;
`,q=P.d.div`
  position: fixed;
  top: 0px;
  right: 0px;
`,W=({repository:e})=>r.createElement(_,null,r.createElement(q,null,r.createElement(z.a,{href:"https://github.com/apache/atlas/fork","data-size":"large","aria-label":"Fork apache/atlas on GitHub"},"Fork"),r.createElement(z.a,{href:"https://github.com/apache/atlas/archive/master.zip","data-size":"large","aria-label":"Download apache/atlas on GitHub"},"Download"),r.createElement(z.a,{href:"https://github.com/apache/atlas","data-size":"large","aria-label":"Star apache/atlas on GitHub"},"Star")));var U=o("./node_modules/lodash/fp/unionBy.js"),G=o.n(U),V=o("./node_modules/lodash/fp/get.js"),Z=o.n(V),Q=o("./node_modules/facepaint/dist/index.es.js");const Y=420,K=920,X=1120,J=Object(Q.a)([`@media(min-width: ${Y}px)`,`@media(min-width: ${K}px)`,`@media(min-width: ${X}px)`]),ee=j("colors.sidebarPrimary"),te=j("colors.primary"),oe=P.d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${e=>ee(e)||te(e)};
  }

  @media screen and (max-width: ${X}px) {
    &:before {
      height: ${e=>e.showBg?"3px":0};
    }
  }

  ${j("styles.logo")};
`;oe.defaultProps={showBg:!0,theme:null};const ne=Object(P.d)("img")`
  padding: 0;
  margin: 5px 0;
`,ae=Object(P.d)("h1")`
  margin: 5px 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${j("colors.sidebarText")};
`,re=({showBg:e})=>{const{base:t,title:o,linkComponent:n,logo:a}=Object(u.g)();return n?r.createElement(oe,{showBg:e},r.createElement(n,{to:"string"===typeof t?t:"/"},a?r.createElement(ne,{src:a.src,width:a.width,alt:o}):r.createElement(ae,null,o))):null};var ie=o("./node_modules/react-feather/dist/icons/search.js"),se=o.n(ie);const le=j("colors.sidebarBorder","#CED4DE"),ue=j("colors.sidebarText","#13161F"),de=P.d.div`
  display: flex;
  align-items: center;
  padding: 5px 24px;
  margin-bottom: 20px;
  border-top: 1px dotted ${le};
  border-bottom: 1px dotted ${le};
  opacity: 1;
`,ce=Object(P.d)(se.a)`
  stroke: ${ue};
  min-width: 20px;
  opacity: 0.5;
`,pe=P.d.input`
  outline: none;
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  color: ${ue};
`,me=({onSearch:e})=>r.createElement(de,null,r.createElement(ce,null),r.createElement(pe,{type:"text",placeholder:"Search here...",onChange:t=>{e&&e(t.target.value)}}));me.defaultProps={onSearch:e=>{}};var he=o("./node_modules/react-feather/dist/icons/chevron-down.js"),ge=o.n(he),fe=o("./node_modules/@reach/router/es/index.js");function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const be=j("colors.sidebarPrimary"),xe=j("colors.primary"),ye={to:"",onClick:r.MouseEventHandler},ke=P.d.a`
  position: relative;
  font-size: 14px;
  padding: 0 0 5px 16px;
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.2s;

  &,
  &:visited,
  &.active {
    color: ${j("colors.sidebarText")};
  }

  &.active {
    opacity: 1;
  }

  &:before {
    z-index: 1;
    position: absolute;
    display: block;
    content: "";
    top: 1px;
    left: 0;
    width: 0;
    height: 20px;
    background: ${e=>be(e)||xe(e)};
    transition: width 0.2s;
  }

  &.active:before {
    width: 2px;
  }
`;ke.defaultProps=ye;const we=Object.assign({},ye,{as:null,slug:""}),Ee=({as:e,slug:t,location:o,...n})=>{const[a,i]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{const e=decodeURI(o.hash),n=e&&e.slice(1,1/0);i(Boolean(t===n))},[o]),r.createElement(ke,ve({as:e},n,{className:a?"active":""}))};Ee.defaultProps=we;const Ce=P.d.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 24px;
`,Ae=({route:e,onClick:t})=>{const o=Object(u.h)(),{linkComponent:n}=Object(u.g)(),a=o&&((e,t)=>{const o=t.find(t=>t.route===e),n=c()(o,"headings");return n?n.filter(e=>2===e.depth):[]})(e,o);return a&&a.length>0?r.createElement(fe.b,null,({location:o})=>r.createElement(Ce,null,a.map(a=>r.createElement(Ee,{as:n,location:o,key:a.slug,onClick:t,to:`${e}#${a.slug}`,slug:a.slug},a.value)))):null};function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const Se=P.c`
  padding-left: 0;
  &:after {
    width: 1px;
  }
`,Pe=P.d.div`
  position: relative;
  transition: padding 0.2s;

  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 30px;
    left: 24px;
    width: 0;
    height: calc(100% - 36px);
    border-left: 1px dashed ${j("colors.sidebarBorder")};
    transition: width 0.2s;
  }

  ${e=>e.active&&Se};
`;Pe.defaultProps={active:!1,theme:null};const je=e=>Object(P.d)(e)`
  position: relative;
  display: block;
  padding: 4px 24px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${j("colors.sidebarText")};
  text-decoration: none;
  transition: color 0.2s;

  &:hover,
  &:visited {
    color: ${j("colors.sidebarText")};
  }

  &:hover,
  &.active {
    color: ${e=>j("colors.sidebarPrimary")(e)||j("colors.primary")(e)};
    font-weight: 600;
  }
`,De=je(P.d.a``),Oe=(e=null,t)=>{const o=e&&e.classList.contains("active"),n=t&&(e=>{if("undefined"!==typeof window)return location.pathname.slice(0,location.pathname.length-1)===e})(t);return Boolean(o||n)},$e=(r.MouseEventHandler,r.ReactNode,r.forwardRef(({item:e,children:t,onClick:o,onActiveChange:n},a)=>{const{linkComponent:i}=Object(u.g)(),[s,l]=Object(r.useState)(!1),d=Object(u.i)(s),c=Object(r.useRef)(a),p=Object(r.useMemo)(()=>je(i),[i]),m={children:t,onClick:o};return Object(r.useEffect)(()=>{const t=Oe(c.current,e.route);d!==t&&(l(t),c&&((e,t)=>{t&&t&&!e.classList.contains("active")&&e.classList.add("active")})(c.current,t),n&&n(t))}),r.createElement(Pe,{active:s},e.route?r.createElement(p,Ie({},m,{to:e.route,innerRef:c,activeClassName:"active",partiallyActive:!0})):r.createElement(De,Ie({},m,{ref:c,href:e.href||"#",target:e.href?"_blank":"_self"},!e.href&&{onClick:e=>{e.preventDefault(),m.onClick&&m.onClick(e)}})),s&&e.route&&r.createElement(Ae,{route:e.route}))}));function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}$e.displayName="MenuLink";const Te={id:"",name:"",route:"",href:"",menu:[],order:Number,parent:""},Be=P.d.div`
  display: flex;
  flex-direction: column;
`,Le={opened:!1},Me=P.d.dl`
  flex: 1;
  overflow-y: auto;
  visibility: ${e=>e.opened?"visible":"hidden"};
  max-height: ${e=>e.opened?"auto":"0px"};
`;Me.defaultProps=Le;const Fe=P.d.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${e=>e.opened?"-180deg":"0deg"});
  transform-origin: 50% 50%;
  transition: transform 0.3s;

  & svg {
    stroke: ${j("colors.sidebarText")};
  }
`;Fe.defaultProps=Le;const Re=e=>{const[t,o]=Object(r.useState)(!0),{item:n,sidebarToggle:a,collapseAll:i}=e,s=i||t,l=!n.href&&n.submenu&&n.submenu.length>0,u=!n.href&&!n.route,d=e=>{e.preventDefault(),(()=>o(e=>!e))()};let c="";return c=(n.submenu&&n.submenu.length)>1?r.createElement(Be,null,r.createElement($e,He({item:n},u&&{onClick:d}),`${n.name}`,l&&r.createElement(Fe,{opened:s},r.createElement(ge.a,{size:15}))),l&&r.createElement(Me,{opened:s},n.submenu&&n.submenu.map(e=>r.createElement("dt",{key:e.name},r.createElement($e,{item:e,onClick:a,onActiveChange:o},`${e.name}`))))):r.createElement(Be,null,n.submenu&&n.submenu.map(e=>r.createElement("dt",{key:e.name},r.createElement($e,{item:e,onActiveChange:o},`${e.name}`))))};function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}Re.defaultProps={item:Te,sidebarToggle:null,collapseAll:!0},Re.defaultProps={opened:!0,hasActive:!0};const ze={id:"",name:"",route:"",href:"",menu:[],order:Number,parent:""},_e=P.d.div`
  display: flex;
  flex-direction: column;
`,qe={opened:!1},We=P.d.dl`
  flex: 1;
  overflow-y: auto;
  visibility: ${e=>e.opened?"visible":"hidden"};
  max-height: ${e=>e.opened?"auto":"0px"};
`;We.defaultProps=qe;const Ue=P.d.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%) rotate(${e=>e.opened?"-180deg":"0deg"});
  transform-origin: 50% 50%;
  transition: transform 0.3s;
  & svg {
    stroke: ${j("colors.sidebarText")};
  }
`;Ue.defaultProps=qe;const Ge=e=>{const[t,o]=Object(r.useState)(!0),{item:n,sidebarToggle:a,collapseAll:i}=e,s=i||t,l=!n.href&&n.menu&&n.menu.length>0,u=!n.href&&!n.route;return r.createElement(_e,null,r.createElement($e,Ne({item:n},u&&{onClick:e=>{e.preventDefault(),(()=>o(e=>!e))()}}),`${n.name} `,l&&r.createElement(Ue,{opened:s},r.createElement(ge.a,{size:15}))),l&&r.createElement(We,{opened:s},n.menu&&n.menu.map(e=>r.createElement(We,{opened:s,key:e.name},r.createElement(Re,{item:e})))))};Ge.defaultProps={item:ze,sidebarToggle:null,collapseAll:!0},Ge.defaultProps={opened:!1,hasActive:!1};const Ve={opened:!0},Ze=e=>e.opened?"45deg":"0deg",Qe=P.d.div`
  position: relative;
  width: 23px;
  height: 32px;
  transform: translateX(${e=>e.opened?"-2px":"-1px"})
    translateY(${e=>e.opened?"0":"2px"})
    scale(${e=>e.opened?.8:1});
`;Qe.defaultProps=Ve;const Ye=j("colors.sidebarBg"),Ke=j("colors.sidebarPrimary"),Xe=j("colors.sidebarText"),Je=j("colors.primary"),et=j("colors.background"),tt=j("colors.text"),ot=P.d.span`
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  right: 0;
  background: ${e=>e.opened?Xe(e):tt(e)};
  transition: transform 0.3s, opacity 0.3s;

  &:nth-of-type(1) {
    top: -2px;
    transform: translateY(${e=>e.opened?"10px":"0px"}) rotate(${Ze});
  }

  &:nth-of-type(2) {
    top: 6px;
    opacity: ${e=>e.opened?"0":"1"};
  }

  &:nth-of-type(3) {
    top: 14px;
    transform: translateY(${e=>e.opened?"-6px":"0px"}) rotate(-${Ze});
  }
`;ot.defaultProps=Ve;const nt=j("radii"),at=P.d.button`
  cursor: pointer;
  z-index: 99;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 6px;
  width: 33px;
  height: 30px;
  top: ${e=>e.opened?"3px":"2px"};
  right: ${e=>e.opened?"-39px":"-27px"};
  transform: translateX(${e=>e.opened?"-6px":"10px"}) translateY(${e=>e.opened?"0px":"4px"});
  transition: transform 0.3s;
  outline: none;
  border: none;
  background: ${e=>e.opened?Ye(e):et(e)};
  border-radius: ${e=>e.opened?`0 0 ${nt(e)} 0`:`${nt(e)}`};

  &:before {
    position: absolute;
    content: "";
    top: -3px;
    left: 0;
    width: calc(100% + 1px);
    height: ${e=>e.opened?"3px":0};
    background: ${e=>Ke(e)||Je(e)};
  }

  ${J({display:["block","block","block","none"]})};
`;at.defaultProps=Ve;Object.assign({},Ve,{onClick:e=>null});const rt=({opened:e,onClick:t})=>r.createElement(at,{opened:e,onClick:t},r.createElement(Qe,{opened:e},r.createElement(ot,{opened:e}),r.createElement(ot,{opened:e}),r.createElement(ot,{opened:e})));function it(e){return e&&"object"===typeof e&&"default"in e?e.default:e}const st=it(o("./node_modules/lodash/fp/pipe.js")),lt=it(o("./node_modules/lodash/fp/omit.js")),ut=it(o("./node_modules/array-sort/index.js")),dt=it(o("./node_modules/lodash/fp/flattenDepth.js")),ct=it(o("./node_modules/match-sorter/dist/match-sorter.esm.js")),pt=o("./node_modules/ulid/dist/index.esm.js"),mt=j("colors.sidebarBg"),ht=j("colors.sidebarText"),gt=j("colors.sidebarBorder"),ft=P.d.div`
  position: relative;
  width: 320px;
  min-width: 320px;
  min-height: 100vh;
  background: ${mt};
  transition: transform 0.2s, background 0.3s;
  z-index: 1000;

  ${J({position:["absolute","absolute","absolute","relative"]})};

  dl {
    padding: 0;
    margin: 0 16px;
  }

  dl a {
    font-weight: 400;
  }

  @media screen and (max-width: ${X-1}px) {
    transform: translateX(${e=>e.opened?"-100%":"0"});
    position: ${e=>e.opened?"auto":"fixed"};
  }

  ${j("styles.sidebar")};
`;ft.defaultProps={opened:!0,theme:""};P.d.div`
  position: relative;
`,P.d.div`
  position: fixed;
  top: 0px;
  right: 10px;
`;const vt=P.d.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 320px;
  height: 100%;
  max-height: 100vh;
`,bt=P.d.nav`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`,xt=P.d.div`
  flex: 1;
  opacity: 0.7;
  padding: 0 24px;
  color: ${ht};
`,yt=(P.d.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${ht};
  border-top: 1px dashed ${gt};
`,P.d.a`
  padding: 0;
  margin: 0;
  margin-left: 5px;
`,Object(P.d)(({width:e=100,className:t})=>r.createElement("span",null))`
  fill: ${ht};
`,P.d.div`
  content: "";
  display: ${e=>e.opened?"none":"block"};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  z-index: 99;
`);const kt=(e,t)=>e.name<t.name?-1:e.name>t.name?1:0,wt=(e,t=[])=>{const o="string"!==typeof e?Z()("name",e):e,n=t.findIndex(e=>e===o);return-1!==n?n:1/0},Et=e=>!e.submenu,Ct=e=>{const t=(e=>"string"===typeof e?{name:e}:e)(e);return Object.assign({},t,{id:t.id||pt.ulid(),parent:Z()("parent",t)||Z()("parent",e),menu:Array.isArray(t.menu)?t.menu.map(Ct):t.menu})},At=st(Ct,e=>e.href||e.route?lt("menu",e):e),It=e=>t=>t.submenu===e,St=e=>({name:e.name,route:e.route,parent:e.parent,submenu:e.submenu});function Pt(e,t){return Array.from(new Set(e.reduce((e,o)=>{const n=Z()(t)(o);return n?e.concat([n]):e},[])))}const jt=(e,t)=>t.filter(It(e)).map(St),Dt=(e,t)=>t.filter(It(e)).map(St),Ot=e=>{const t=e.filter(Et).map(St),o=Pt(e,"menu").map((e=>t=>({name:t,menu:Dt(t,e)}))(e)),n=Pt(e,"submenu").map((e=>t=>({name:t,submenu:jt(t,e)}))(e));for(var a in o)for(var r of t)if(r.name==o[a].name){o[a]=r;break}return o[0].menu=n,console.log(o),G()("name",o,t)},$t=(e,t)=>{const o=e.map(At),n=t.map(At);return G()("name",o,n).map(e=>{if(!e.menu)return e;const t=n.find(t=>t.name===e.name),o=t&&t.menu;return Object.assign({},e,{menu:o?$t(e.menu,o):e.menu||t.menu})})},Ht=(e,t=[])=>{return ut(e,((e=[])=>(t,o)=>{const n=e.map(e=>e.name||e);return function(e,t,o){return e<t?o?1:-1:e>t?o?-1:1:0}(wt(t,n),wt(o,n))})(t),kt).map(e=>{if(!e.menu)return e;const o=t.find(t=>t.name===e.name),n=o&&o.menu;return Object.assign({},e,{menu:n?Ht(e.menu,n):ut(e.menu,kt)})})},Tt=e=>{const{query:t=""}=e||{},{entries:o,config:n}=Object(r.useContext)(u.d.context);if(!o)return null;const a=o.map(({value:e})=>e),i=Ot(a),s=r.useMemo(()=>{const t=$t(i,n.menu);return((e,t)=>t?e.filter(t).map(e=>e.menu?Object.assign({},e,{menu:e.menu.filter(t)}):e):e)(Ht(t,n.menu),e&&e.filter)},[o,n]);return t&&t.length>0?((e,t)=>{const o=t.map(e=>[e].concat(e.menu||[])),n=dt(2,o),a=[...new Set(n)];return ct(a,e,{keys:["name"]})})(t,s):s};yt.defaultProps={opened:!1};const Bt=()=>{const[e,t]=Object(r.useState)(!0),[o,n]=Object(r.useState)(""),a=Tt({query:o}),i=Object(u.j)().innerWidth>=X,s=Object(u.i)(i);Object(r.useEffect)(()=>{e||s||!i||(t(!0),document.documentElement.classList.remove("with-overlay"))});const l=()=>{i||(t(e=>!e),(e=>{const t=e?"remove":"add";"undefined"===typeof window||i||document.documentElementyyy.classList[t]("with-overlay")})(!e))};let d=r.createElement(r.Fragment,null,r.createElement(ft,{opened:e},r.createElement(vt,null,r.createElement(rt,{opened:!e,onClick:l}),r.createElement(re,{showBg:!0}),r.createElement(me,{onSearch:n}),a&&0===a.length?r.createElement(xt,null,"No documents founda."):r.createElement(bt,null,a&&a.map(e=>r.createElement(Ge,{key:e.id,item:e,sidebarToggle:l,collapseAll:Boolean(o.length)}))))),r.createElement(yt,{opened:e,onClick:l}));return o.length>0&&(d=r.createElement(r.Fragment,null,r.createElement(ft,null,r.createElement(vt,null,r.createElement(rt,{opened:!e,onClick:l}),r.createElement(re,{showBg:!e}),r.createElement(me,{onSearch:n}),r.createElement($e,{item:a}),r.createElement(bt,null,a&&a.map(e=>r.createElement(Re,{key:e.id,item:e,sidebarToggle:l,collapseAll:Boolean(o.length)}))))))),d},Lt=P.d.div`
  display: flex;
`,Mt=P.d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${j("colors.text")};
  background: ${j("colors.background")};
`,Ft=P.d.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  color: ${j("colors.primary")};
`,Rt=P.d.p`
  margin: 0;
  font-size: 18px;
`,Nt=P.d.ol`
  list-style: none;
  counter-reset: my-awesome-counter;

  & li {
    counter-increment: my-awesome-counter;
  }

  & li::before {
    content: counter(my-awesome-counter) '. ';
    color: ${j("colors.border")};
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    margin-right: 5px;
  }

  ${j("styles.ol")};
`;var zt=o("./node_modules/react-feather/dist/icons/edit-2.js"),_t=o.n(zt);const qt=P.d.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
`,Wt=Object(P.d)(qt)`
  background: transparent;
`,Ut=P.d.div`
  flex: 1;
  color: ${j("colors.text")};
  background: ${j("colors.background")};
  min-width: 0;
  position: relative;
`,Gt=P.d.div`
  box-sizing: border-box;
  margin: 0 auto;

  ${J({width:["100%","100%",920],padding:["20px","0 40px 40px"]})}

  ${j("styles.container")};
`,Vt=Object(P.d)(Wt.withComponent("a"))`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 2px 8px;
  margin: 8px;
  border-radius: ${j("radii")};
  border: 1px solid ${j("colors.border")};
  opacity: 0.7;
  transition: opacity 0.4s;
  font-size: 14px;
  color: ${j("colors.text")};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    background: ${j("colors.border")};
  }

  ${J({visibility:["hidden","hidden","visible"],top:[0,-60,32],right:[0,0,40]})};
`,Zt=Object(P.d)(_t.a)`
  margin-right: 5px;
`,Qt=P.d.p`
  color: ${j("colors.text")};
  ${j("styles.paragraph")};
`,Yt=P.d.div`
  display: flex;
  flex-direction: column;

  & ~ & {
    margin-top: 20px;
  }
`,Kt=P.d.div`
  display: flex;
  border-bottom: 1px solid ${j("colors.propsBg")};
`,Xt=P.d.span`
  background: ${j("colors.propsBg")};
  color: ${j("colors.primary")};
  padding: 5px 10px;
  border-radius: 4px 4px 0 0;
  font-size: 16px;
  font-weight: 500;

  & ~ & {
    margin-left: 5px;
  }
`,Jt=Object(P.d)(Xt)`
  color: ${j("colors.propsText")};
  background: ${j("colors.propsBg")};
  font-weight: 400;
`,eo=Object(P.d)(Jt)`
  background: transparent;
  padding-left: 0;
  padding-right: 0;
`,to=Object(P.d)(Jt)`
  flex: 1;
  text-align: right;
  background: transparent;
  opacity: 0.5;
`,oo=({props:e,getPropType:t})=>{const o=Object.entries(e),n=Object(u.f)(),a=Object(r.useMemo)(()=>Object(P.d)(n.P||"p")`
      font-size: 16px;
      color: ${j("colors.sidebarText")};
    `,[]);return r.createElement(r.Fragment,null,o.map(([e,o])=>o.type||o.flowType?r.createElement(Yt,{key:e},r.createElement(Kt,null,r.createElement(Xt,null,e),r.createElement(Jt,null,t(o)),o.defaultValue&&r.createElement(eo,null,"''"===o.defaultValue.value?r.createElement("em",null,"= [Empty String]"):r.createElement("em",null,"= ",o.defaultValue.value.replace(/\'/g,'"'))),o.required&&r.createElement(to,null,r.createElement("em",null,"required"))),o.description&&r.createElement(a,null,o.description)):null))},no=P.d.div`
  border: 1px solid ${j("colors.border")};
  border-radius: 4px;
  overflow: hidden;
  background: ${j("colors.propsBg")};
  color: ${j("colors.propsText")};
`,ao=P.d.div`
  padding: 8px 0;

  @media (min-width: ${"600px"}) {
    padding: O;
  }

  & + & {
    border-top: 1px solid ${j("colors.border")};
  }
`,ro=P.d.div`
  min-width: 0;
  padding: 2px 15px;
  word-wrap: break-word;

  @media (min-width: ${"600px"}) {
    padding: 8px 15px;
  }
`,io=Object(P.d)(ro)`
  @media (min-width: ${"600px"}) {
    flex-basis: 25%;
  }
`,so=Object(P.d)(ro)`
  @media (min-width: ${"600px"}) {
    flex-basis: 50%;
  }
`,lo=Object(P.d)(ro)`
  @media (min-width: ${"600px"}) {
    flex-basis: 25%;
  }
`,uo=P.d.div`
  display: flex;
  flex-direction: column;
  font-family: ${j("fonts.mono")};

  @media (min-width: ${"600px"}) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`,co=P.d.span`
  color: ${j("colors.primary")};
  font-weight: bold;
`,po=P.d.span`
  font-size: 0.9em;
`,mo=P.d.span`
  font-size: 0.9em;
`,ho=P.d.span`
  font-size: 0.8em;
  opacity: 0.8;
`,go=({props:e,getPropType:t})=>{const o=Object.entries(e),n=Object(u.f)(),a=Object(r.useMemo)(()=>Object(P.d)(n.P||"p")`
      margin: 0;
      font-size: 16px;
      color: ${j("colors.blockquoteColor")};
      padding: 0 15px 8px 15px;
    `,[]);return r.createElement(no,null,o.map(([e,o])=>o.type||o.flowType?r.createElement(ao,{key:e},r.createElement(uo,null,r.createElement(io,null,r.createElement(co,null,e)),r.createElement(so,null,r.createElement(po,null,t(o))),r.createElement(lo,null,o.defaultValue&&r.createElement(mo,null,"''"===o.defaultValue.value?r.createElement("em",null,"= [Empty String]"):r.createElement("em",null,"= ",o.defaultValue.value.replace(/\'/g,'"'))),o.required&&r.createElement(ho,null,r.createElement("strong",null,"required")))),o.description&&r.createElement(a,null,o.description)):null))},fo=P.d.div`
  margin: 20px 0;
`,vo=P.d.div`
  overflow-x: auto;
  padding: 2px;
  margin-bottom: 30px;

  ${J({marginBottom:[20,40],maxWidth:["calc(100vw - 40px)","calc(100vw - 80px)","100%"]})};
`,bo=P.d.table`
  padding: 0;
  table-layout: auto;
  box-shadow: 0 0 0 1px ${j("colors.border")};
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: ${j("radii")};
  font-size: 14px;
  color: ${j("colors.tableColor")};

  ${J({overflowX:["initial","initial","initial","hidden"],display:["table","table","table","table"]})}

  & thead {
    color: ${j("colors.theadColor")};
    background: ${j("colors.theadBg")};
  }

  & thead th {
    font-weight: 400;
    padding: 20px 20px;

    &:nth-of-type(1) {
      ${J({width:["20%","20%","20%","auto"]})};
    }

    &:nth-of-type(2) {
      ${J({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(3) {
      ${J({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(4) {
      ${J({width:["10%","10%","10%","auto"]})};
    }

    &:nth-of-type(5) {
      ${J({width:["20%","20%","20%","auto"]})};
    }
  }

  & tbody td {
    padding: 12px 20px;
    line-height: 2;
    font-weight: 200;
  }

  & tbody > tr {
    display: table-row;
    border-top: 1px solid ${j("colors.border")};
  }

  ${j("styles.table")};
`,xo={a:({href:e,...t})=>{const{separator:o,linkComponent:n}=Object(u.g)(),a=Object(u.h)(),i=Object(r.useMemo)(()=>((e,t)=>"undefined"===typeof window?null:[location.pathname.split(e).slice(0,-1).join(e).slice(1),(t||"").replace(/^(?:\.\/)+/gi,"")].join("/"))(o,e),[o,e]),s=a&&a.find(e=>e.filepath===i),l=s?s.route:e;return l&&l.startsWith("/")?r.createElement(T,H({as:n},t,{to:l})):r.createElement(T,H({},t,{href:l}))},blockquote:O,inlineCode:$,loading:()=>r.createElement(B,null,r.createElement(N,null)),notFound:()=>r.createElement(Lt,null,r.createElement(Bt,null),r.createElement(Mt,null,r.createElement(Ft,null,"Page Not Found"),r.createElement(Rt,null,"Check if you changed the document route or deleted it!"))),ol:Nt,p:Qt,page:({children:e,doc:{link:t,fullpage:o,edit:n=!0}})=>{const{repository:a}=Object(u.g)(),i=r.createElement(r.Fragment,null,t&&n&&r.createElement(Vt,{href:t,target:"_blank"},r.createElement(Zt,{width:14})," Edit page"),e);return r.createElement(Lt,null,a&&r.createElement(W,{repository:a}),!o&&r.createElement(Bt,null),r.createElement(Ut,null,o?i:r.createElement(Gt,null,i)))},pre:()=>r.createElement("div",null),props:({title:e,isRaw:t,isToggle:o,...n})=>{const[a,i]=Object(r.useState)(!0),s=Object(u.f)(),l=Object(r.useMemo)(()=>Object(P.d)(s.H3||"h3")`
      padding: 8px 0;
      position: relative;
      ${t?"":"margin-bottom: 0;"}
      ${!a||t?"border-bottom: 1px solid rgba(0, 0, 0, 0.1);":""}

      ${o?`\n        cursor: pointer;\n        padding-right: 40px;\n\n        &::after {\n          content: '';\n          position: absolute;\n          top: 50%;\n          right: 16px;\n          transform: translateY(-50%) ${a?"rotate(-135deg)":"rotate(45deg)"};\n          ${a?"":"margin-top: -2px;"}\n          width: 8px;\n          height: 8px;\n          border-bottom: 2px solid;\n          border-right: 2px solid;\n        }\n      `:""}
    `,[a]),d=o?{onClick:()=>i(e=>!e),onkeydown:()=>i(e=>!e),role:"button",tabindex:0}:{};return r.createElement(fo,null,(!!e||o)&&r.createElement(l,d,e||"Component props"),a&&r.createElement("div",null,t?r.createElement(oo,n):r.createElement(go,n)))},table:e=>r.createElement(vo,null,r.createElement(bo,e)),ul:P.d.ul`
  list-style: none;

  & li::before {
    content: '● ';
    color: ${j("colors.border")};
    font-weight: bold;
    font-size: 0.5em;
    margin-right: 5px;
  }

  ${j("styles.ul")};

  ul li {
    padding-left: 25px;
  }
`},yo=P.b`
  @import url('https://unpkg.com/codemirror@5.42.0/lib/codemirror.css');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');

  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
    ${j("styles.body")};
  }

  .with-overlay {
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100%;
  }
`,ko={colors:n,styles:{body:P.c`
    font-family: ${j("fonts.ui")};
    font-size: 16px;
    line-height: 1.6;
  `,h1:P.c`
    margin: 40px 0 20px;
    font-family: ${j("fonts.display")};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.02em;
  `,h2:P.c`
    margin: 30px 0 15px;
    line-height: 1.4em;
    font-family: ${j("fonts.display")};
    font-weight: 500;
    font-size: 28px;
    letter-spacing: -0.02em;
  `,h3:P.c`
    margin: 25px 0 10px;
    font-size: 20px;
    font-weight: 400;
  `,h4:P.c`
    margin: 25px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,h5:P.c`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,h6:P.c`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  `,ol:P.c`
    padding: 0;
    margin: 10px 0 10px;
  `,ul:P.c`
    padding: 0;
    margin: 10px 0 10px;
  `,playground:P.c`
    padding: 40px;
  `,code:P.c`
    margin: 0 3px;
    border-radius: 3px;
    font-family: ${j("fonts.mono")};
    padding: 2px 5px;
    font-size: 0.8em;
    border: "1px solid rgba(0, 0, 0, 0.02)";
  `,pre:P.c`
    font-family: ${j("fonts.mono")};
    font-size: 1em;
    line-height: 1.8;
  `,paragraph:P.c`
    margin: 10px 0 20px 0;
  `,table:P.c`
    overflow-y: hidden;
    width: 100%;
    font-family: ${j("fonts.mono")};
    font-size: 16px;
    overflow-x: initial;
    display: block;
  `,blockquote:P.c`
    margin: 25px 0;
    padding: 20px;
    font-style: italic;
    font-size: 16px;
  `},fonts:{display:'"Source Sans Pro", sans-serif',mono:'"Inconsolata", monospace',ui:'"Source Sans Pro", sans-serif'},radii:"2px",mode:"light",showPlaygroundEditor:!1,linesToScrollEditor:18};var wo=o("./node_modules/react-dropdown-select/lib/index.js"),Eo=o.n(wo);function Co(){return(Co=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}const Ao=e=>{let{options:t,title:o,...n}=e;return i.a.createElement(r.Fragment,null,i.a.createElement(Eo.a,Co({color:C,options:t,onChange:e=>{e.length>0&&window.open(e[0].href,"_blank")}},n)))};Ao.propTypes={};var Io=Ao;j("colors.sidebarBg"),j("colors.sidebarText","#13161F");const So=P.d.div`
	top: 0px;
	position: absolute;
	width: 25%;
	left: 55%;
`,Po=[{id:1,href:"../index.html",title:"latest",text:"latest"},{id:2,href:"../2.0.0/index.html",title:"2.0.0",text:"2.0.0"},{id:3,href:"../1.2.0/index.html",title:"1.2.0",text:"1.2.0"},{id:4,href:"../1.1.0/index.html",title:"1.1.0",text:"1.1.0"},{id:5,href:"../1.0.0/index.html",title:"1.0.0",text:"1.0.0"},{id:6,href:"../0.8.4/index.html",title:"0.8.4",text:"0.8.4"},{id:7,href:"../0.8.3/index.html",title:"0.8.3",text:"0.8.3"},{id:8,href:"../0.8.2/index.html",title:"0.8.2",text:"0.8.2"},{id:9,href:"../0.8.1/index.html",title:"0.8.1",text:"0.8.1"},{id:10,href:"../0.8.0-incubating/index.html",title:"0.8-incubating",text:"0.8-incubating"},{id:11,href:"../0.7.1-incubating/index.html",title:"0.7.1-incubating",text:"0.7.1-incubating"},{id:12,href:"../0.7.0-incubating/index.html",title:"0.7-incubating",text:"0.7-incubating"},{id:13,href:"../0.6.0-incubating/index.html",title:"0.6-incubating",text:"0.6-incubating"},{id:14,href:"../0.5.0-incubating/index.html",title:"0.5-incubating",text:"0.5-incubating"}].map(e=>({...e,label:e.title,value:e.href})),jo=({options:e,title:t})=>r.createElement(So,null,r.createElement(Io,{options:Po,style:{minHeight:"auto",padding:"0 5px",borderRadius:"5px"},title:"Select Release.."}));var Do=Object(u.e)(ko,({mode:e,codemirrorTheme:t,...o})=>({...o,mode:e,codemirrorTheme:t||`docz-${e}`,colors:{...c()(a,e),...o.colors}}))(({children:e})=>r.createElement(D,null,r.createElement(yo,null),r.createElement(u.a,{components:xo},e,r.createElement(W,null),r.createElement(jo,null)))),Oo={"documents/ClassificationPropagation.md":function(){return Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"./src/documents/ClassificationPropagation.md"))},"documents/AtlasRepairIndex.md":function(){return Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"./src/documents/AtlasRepairIndex.md"))},"documents/Glossary.md":function(){return Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"./src/documents/Glossary.md"))},"documents/HighAvailability.md":function(){return Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"./src/documents/HighAvailability.md"))},"documents/Introduction.md":function(){return Promise.all([o.e(0),o.e(20)]).then(o.bind(null,"./src/documents/Introduction.md"))},"documents/Notifications.md":function(){return Promise.all([o.e(0),o.e(22)]).then(o.bind(null,"./src/documents/Notifications.md"))},"documents/ReplicatedToFromAttributes.md":function(){return Promise.all([o.e(0),o.e(28)]).then(o.bind(null,"./src/documents/ReplicatedToFromAttributes.md"))},"documents/TypeSystem.md":function(){return Promise.all([o.e(0),o.e(38)]).then(o.bind(null,"./src/documents/TypeSystem.md"))},"documents/SoftReference.md":function(){return Promise.all([o.e(0),o.e(37)]).then(o.bind(null,"./src/documents/SoftReference.md"))},"documents/security.md":function(){return Promise.all([o.e(0),o.e(31)]).then(o.bind(null,"./src/documents/security.md"))},"documents/Downloads/Downloads.md":function(){return Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"./src/documents/Downloads/Downloads.md"))},"documents/Hook/Hook-Falcon.md":function(){return Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"./src/documents/Hook/Hook-Falcon.md"))},"documents/Hook/Hook-HBase.md":function(){return Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"./src/documents/Hook/Hook-HBase.md"))},"documents/Hook/Hook-Hive.md":function(){return Promise.all([o.e(0),o.e(9)]).then(o.bind(null,"./src/documents/Hook/Hook-Hive.md"))},"documents/Hook/Hook-Sqoop.md":function(){return Promise.all([o.e(0),o.e(10)]).then(o.bind(null,"./src/documents/Hook/Hook-Sqoop.md"))},"documents/Hook/Hook-Storm.md":function(){return Promise.all([o.e(0),o.e(11)]).then(o.bind(null,"./src/documents/Hook/Hook-Storm.md"))},"documents/Import-Export/Export-API.md":function(){return Promise.all([o.e(0),o.e(12)]).then(o.bind(null,"./src/documents/Import-Export/Export-API.md"))},"documents/Import-Export/Export-HDFS-API.md":function(){return Promise.all([o.e(0),o.e(13)]).then(o.bind(null,"./src/documents/Import-Export/Export-HDFS-API.md"))},"documents/Import-Export/ExportImportAudits.md":function(){return Promise.all([o.e(0),o.e(14)]).then(o.bind(null,"./src/documents/Import-Export/ExportImportAudits.md"))},"documents/Import-Export/Import-API-Options.md":function(){return Promise.all([o.e(0),o.e(16)]).then(o.bind(null,"./src/documents/Import-Export/Import-API-Options.md"))},"documents/Import-Export/Import-API.md":function(){return Promise.all([o.e(0),o.e(15)]).then(o.bind(null,"./src/documents/Import-Export/Import-API.md"))},"documents/Import-Export/Import-Export-API.md":function(){return Promise.all([o.e(0),o.e(18)]).then(o.bind(null,"./src/documents/Import-Export/Import-Export-API.md"))},"documents/Import-Export/ImportEntityTransforms.md":function(){return Promise.all([o.e(0),o.e(17)]).then(o.bind(null,"./src/documents/Import-Export/ImportEntityTransforms.md"))},"documents/Import-Export/Incremental-Export.md":function(){return Promise.all([o.e(0),o.e(19)]).then(o.bind(null,"./src/documents/Import-Export/Incremental-Export.md"))},"documents/Migration/Migration-0.8-to-1.0.md":function(){return Promise.all([o.e(0),o.e(21)]).then(o.bind(null,"./src/documents/Migration/Migration-0.8-to-1.0.md"))},"documents/Project-Info/Mailing-Lists.md":function(){return Promise.all([o.e(0),o.e(24)]).then(o.bind(null,"./src/documents/Project-Info/Mailing-Lists.md"))},"documents/Project-Info/issue-tracking.md":function(){return Promise.all([o.e(0),o.e(23)]).then(o.bind(null,"./src/documents/Project-Info/issue-tracking.md"))},"documents/Project-Info/project-info.md":function(){return Promise.all([o.e(0),o.e(25)]).then(o.bind(null,"./src/documents/Project-Info/project-info.md"))},"documents/Project-Info/source-repository.md":function(){return Promise.all([o.e(0),o.e(26)]).then(o.bind(null,"./src/documents/Project-Info/source-repository.md"))},"documents/Project-Info/team-list.md":function(){return Promise.all([o.e(0),o.e(27)]).then(o.bind(null,"./src/documents/Project-Info/team-list.md"))},"documents/Setup/AtlasServer.md":function(){return Promise.all([o.e(0),o.e(32)]).then(o.bind(null,"./src/documents/Setup/AtlasServer.md"))},"documents/Setup/Configuration.md":function(){return Promise.all([o.e(0),o.e(33)]).then(o.bind(null,"./src/documents/Setup/Configuration.md"))},"documents/Setup/EclipseSetup.md":function(){return Promise.all([o.e(0),o.e(34)]).then(o.bind(null,"./src/documents/Setup/EclipseSetup.md"))},"documents/Setup/InstallationSteps.md":function(){return Promise.all([o.e(0),o.e(35)]).then(o.bind(null,"./src/documents/Setup/InstallationSteps.md"))},"documents/Setup/QuickStart.md":function(){return Promise.all([o.e(0),o.e(36)]).then(o.bind(null,"./src/documents/Setup/QuickStart.md"))},"documents/Search/Search-Advanced.md":function(){return Promise.all([o.e(0),o.e(29)]).then(o.bind(null,"./src/documents/Search/Search-Advanced.md"))},"documents/Search/Search-Basic.md":function(){return Promise.all([o.e(0),o.e(30)]).then(o.bind(null,"./src/documents/Search/Search-Basic.md"))},"documents/Whats-New/WhatsNew-1.0.md":function(){return Promise.all([o.e(0),o.e(39)]).then(o.bind(null,"./src/documents/Whats-New/WhatsNew-1.0.md"))},"documents/Whats-New/WhatsNew-2.0.md":function(){return Promise.all([o.e(0),o.e(40)]).then(o.bind(null,"./src/documents/Whats-New/WhatsNew-2.0.md"))}},$o=o("./.docz/app/db.json"),Ho=function(){return i.a.createElement(Do,{linkComponent:u.b,db:$o},i.a.createElement(u.c,{imports:Oo}))},To=[],Bo=[],Lo=function(){return Bo.forEach(function(e){return e&&e()})},Mo=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ho;To.forEach(function(e){return e&&e()}),l.a.render(i.a.createElement(e,null),Mo,Lo)}(Ho)},0:function(e,t,o){e.exports=o("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.1ca584aa8a326a7feec1.js.map