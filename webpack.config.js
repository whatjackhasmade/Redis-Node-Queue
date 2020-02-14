const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebpackShellPlugin = require("webpack-shell-plugin");

const { NODE_ENV = "production" } = process.env;

module.exports = {
	entry: "./src/index.ts",
	mode: NODE_ENV,
	target: "node",
	watch: NODE_ENV === "development",
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js"
	},
	resolve: {
		extensions: [".ts", ".js"],
		modules: [path.resolve(__dirname, "src"), "node_modules"]
	},
	plugins: [
		new WebpackShellPlugin({
			onBuildEnd: ["yarn run:dev"]
		})
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ["ts-loader"]
			}
		]
	}
};
