import { css } from "docz-plugin-css";
import menu from "./menu";

module.exports = {
	title: "Apache Atlas",
	files: "**/*.{md,mdx}",
	base: "/Doc-test/",
	src: "./src",
	public: "./src/resources",
	plugins: [
		css({
			preprocessor: "sass"
		})
	],
	menu: menu
};