(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./src/documents/Setup/EclipseSetup.md":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),s=(a("./theme/styles/styled-colors.js"),a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js")),o=a("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),i={},r="wrapper";function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.mdx)(r,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"tools-required-to-build-and-run-apache-atlas-on-eclipse"},"Tools required to build and run Apache Atlas on Eclipse"),Object(l.mdx)("p",null,"These instructions are provided as-is. They worked at a point in time; other variants of software may work. These instructions may become stale if the build dependencies change."),Object(l.mdx)("p",null,"They have been shown to work on 19th of December 2016."),Object(l.mdx)("p",null,"To build, run tests, and debug Apache Atlas, the following software is required:"),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Java")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Download and install a 1.8 Java SDK"),Object(l.mdx)("li",{parentName:"ul"},"Set JAVA_HOME system environment variable to the installed JDK home directory"),Object(l.mdx)("li",{parentName:"ul"},"Add JAVA_HOME/bin directory to system PATH")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Python"),"\nAtlas command line tools are written in Python."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Download and install Python version 2.7.7"),Object(l.mdx)("li",{parentName:"ul"},"For Mac, we used 2.7.11"),Object(l.mdx)("li",{parentName:"ul"},"Add Python home directory to system PATH")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Maven")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Download and install Maven 3.3.9"),Object(l.mdx)("li",{parentName:"ul"},"Set the environment variable M2_HOME to point to the maven install directory"),Object(l.mdx)("li",{parentName:"ul"},"Add M2_HOME/bin directory to system PATH e.g. C:\\Users\\IBM_ADMIN\\Documents\\Software\\apache-maven-3.3.9\\bin")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Git")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install Git"),Object(l.mdx)("li",{parentName:"ul"},"Add git bin directory to the system PATH e.g. C:\\Program Files (x86)\\Git\\bin")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Eclipse")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install Eclipse Neon (4.6)"),Object(l.mdx)("li",{parentName:"ul"},"The non-EE Neon for iOS from eclipse.org has been proven to work here."),Object(l.mdx)("li",{parentName:"ul"},"Install the Scala IDE, TestNG, and m2eclipse-scala features/plugins as described below.")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Scala IDE Eclipse feature"),"\nSome of the Atlas source code is written in the Scala programming language. The Scala IDE feature is required to compile Scala source code in Eclipse."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"In Eclipse, choose Help - Install New Software.."),Object(l.mdx)("li",{parentName:"ul"},"Click Add... to add an update site, and set Location to ",Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site"}),"http://download.scala-ide.org/sdk/lithium/e44/scala211/stable/site")),Object(l.mdx)("li",{parentName:"ul"},"Select Scala IDE for Eclipse from the list of available features"),Object(l.mdx)("li",{parentName:"ul"},"Restart Eclipse after install"),Object(l.mdx)("li",{parentName:"ul"},"Set the Scala compiler to target the 1.7 JVM: Window - Preferences - Scala - Compiler, change target to 1.7\n",Object(l.mdx)("em",{parentName:"li"},"TestNG Eclipse plug-in"))),Object(l.mdx)("p",null,"Atlas tests use the ",Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"http://testng.org/doc/documentation-main.html"}),"TestNG framework"),", which is similar to JUnit. The TestNG plug-in is required to run TestNG tests from Eclipse."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"In Eclipse, choose Help - Install New Software.."),Object(l.mdx)("li",{parentName:"ul"},"Click Add... to add an update site, and set Location to ",Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"http://beust.com/eclipse-old/eclipse_6.9.9.201510270734"}),"http://beust.com/eclipse-old/eclipse_6.9.9.201510270734"),Object(l.mdx)("em",{parentName:"li"}," Choose TestNG and continue with install\n")," Restart Eclipse after installing the plugin\n",Object(l.mdx)("em",{parentName:"li"}," In Window - Preferences - TestNG, ",Object(l.mdx)("b",null,"un"),'check "Use project TestNG jar"\n'),"m2eclipse-scala Eclipse plugin*"),Object(l.mdx)("li",{parentName:"ul"},"In Eclipse, choose Help - Install New Software.."),Object(l.mdx)("li",{parentName:"ul"},"Click Add... to add an update site, and set Location to ",Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"http://alchim31.free.fr/m2e-scala/update-site/"}),"http://alchim31.free.fr/m2e-scala/update-site/")),Object(l.mdx)("li",{parentName:"ul"},"Choose Maven Integration for Scala IDE, and continue with install"),Object(l.mdx)("li",{parentName:"ul"},"Restart Eclipse after install"),Object(l.mdx)("li",{parentName:"ul"},"In Window - Preferences -Maven - Errors/Warnings, set Plugin execution not covered by lifecycle configuration to Warning\n",Object(l.mdx)("em",{parentName:"li"},"Import Atlas maven projects into Eclipse:"))),Object(l.mdx)("p",null,"a. File - Import - Maven - Existing Maven Projects b. Browse to your Atlas folder c. Uncheck the root project and non-Java projects such as dashboardv2, docs and distro, then click Finish"),Object(l.mdx)("p",null,"On the Mac, the Maven import fails with message"),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"\"Cannot complete the install because one or more required items could not be found.\nSoftware being installed: Maven Integration for AJDT (Optional) 0.14.0.201506231302 (org.maven.ide.eclipse.ajdt.feature.feature.group 0.14.0.201506231302)\nMissing requirement: Maven Integration for AJDT (Optional) 0.14.0.201506231302 (org.maven.ide.eclipse.ajdt.feature.feature.group 0.14.0.201506231302) requires 'org.eclipse.ajdt.core 1.5.0' but it could not be found\"."),Object(l.mdx)("p",null,"Install ",Object(l.mdx)("a",Object.assign({parentName:"p"},{href:"http://download.eclipse.org/tools/ajdt/46/dev/update"}),"http://download.eclipse.org/tools/ajdt/46/dev/update")," and rerun. The Maven AspectJ should plugin install - allowing the references to Aspects in Maven to be resolved."),Object(l.mdx)("p",null," d. In the atlas-typesystem, atlas-repository, hdfs-model, and storm-bridge projects, add the src/main/scala and src/test/scala (if available) directories as source folders. Note: the hdfs-model and storm-bridge projects do not have the src/test/scala folder."),Object(l.mdx)("p",null,"Right-click on the project, and choose ",Object(l.mdx)("em",{parentName:"p"},"Properties"),"."),Object(l.mdx)("p",null,"Click the ",Object(l.mdx)("em",{parentName:"p"},"Java Build Path")," in the left-hand panel, and choose the ",Object(l.mdx)("em",{parentName:"p"},"Source")," tab."),Object(l.mdx)("p",null,"Click ",Object(l.mdx)("em",{parentName:"p"},"Add Folder"),", and select the src/main/scala and src/test/scala directories."),Object(l.mdx)("p",null,"Only the atlas-repository and atlas-type system projects have Scala source folders to update."),Object(l.mdx)("p",null,"e. Select atlas-typesystem, atlas-repository, hdfs-model, and storm-bridge projects, right-click, go to the Scala menu, and choose \u2018Set the Scala Installation\u2019."),Object(l.mdx)("p",null,"f. Choose Fixed Scala Installation: 2.11.8 (bundled) , and click OK."),Object(l.mdx)("p",null,"g. Restart Eclipse"),Object(l.mdx)("p",null,"h. Choose Project - Clean, select Clean all projects, and click OK."),Object(l.mdx)("p",null,"Some projects may not pick up the Scala library \u2013 if this occurs, quick fix on those projects to add in the Scala library \u2013 projects atlas-typesystem, atlas-repository, hdfs-model, storm-bridge and altas-webapp."),Object(l.mdx)("p",null,"You should now have a clean workspace."),Object(l.mdx)("p",null,Object(l.mdx)("em",{parentName:"p"},"Sample Bash scripts to help mac users")),Object(l.mdx)("p",null,"You will need to change some of these scripts to point to your installation targets."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Run this script to setup your command line build environment")),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"#!/bin/bash # export JAVA_HOME=/Library/Java/JavaVirtualMachines/macosxx6480sr3fp10hybrid-20160719_01-sdk\nexport JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home\nexport M2_HOME=/Applications/apache-maven-3.3.9 # Git is installed in the system path\nexport PYTHON_HOME='/Applications/Python 2.7'\nexport PATH=$PYTHON_HOME:$M2_HOME/bin:$JAVA_HOME/bin:$PATH\nexport MAVEN_OPTS=\"-Xmx1536m -Drat.numUnapprovedLicenses=100\""),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"If you do  not want to set Java 8 as your system java, you can use this  bash script to setup the environment and run Eclipse (which you can drop in Applications and rename to neon).")),Object(l.mdx)(o.a,{wrapLines:!0,language:"shell",style:s.a,mdxType:"SyntaxHighlighter"},"#!/bin/bash\nexport JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home\nexport M2_HOME=/Applications/apache-maven-3.3.9\n# Git is installed in the system path\nexport PYTHON_HOME='/Applications/Python 2.7'\nexport PATH=$PYTHON_HOME:$M2_HOME/bin:$JAVA_HOME/bin:$PATH/Applications/neon.app/Contents/MacOS/eclipse"))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/documents/Setup/EclipseSetup.md"}}),c.isMDXComponent=!0},"./theme/styles/styled-colors.js":function(e,t,a){"use strict";var n=a("./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/dark.js");n.a.hljs.color="#37bb9b",t.a=n.a}}]);
//# sourceMappingURL=documents-setup-eclipse-setup.4fc074897b27adc953b3.js.map