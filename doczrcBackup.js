diff --git a/doczrc.js b/doczrc.js
index bfd2c56..33d573e 100644
--- a/doczrc.js
+++ b/doczrc.js
@@ -7,8 +7,8 @@ import versions from './config/versions';
 module.exports = {
 	title: "Apache Atlas",
 	files: "**/*.{md,mdx}",
-	base: "/Doc-test/",
-	baseUrl:"./public",
+	base: "",
+	baseUrl:"/public",
 	src: "./src",
 	public: "./src/resources",
 	plugins: [
