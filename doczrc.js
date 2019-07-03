import { css } from "docz-plugin-css";
import menu from "./config/menu";



module.exports = {
	title: "Apache Atlas",
	files: "**/*.{md,mdx}",
	base: "/Doc-test/",
	baseUrl:"./public",
	src: "./src",
	public: "./src/resources",
	plugins: [
		css({
			preprocessor: "sass"
		})
	],
	menu: menu,
	theme: "theme/",
	modifyBundlerConfig: config => {
		config.module.rules.push(
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ["@babel/react"],
						plugins: [
							"@babel/plugin-proposal-class-properties",
							"@babel/plugin-syntax-dynamic-import"
						]
					}
				}
			}
		);
		return config;
	}
};
