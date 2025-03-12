var path = require("path");

/** @type {(env: any, options: any) => import("../../../../").Configuration} */
module.exports = (env, { testPath }) => ({
	entry: "./test",
	recordsOutputPath: path.resolve(testPath, "records.json"),
	target: "node",
	node: {
		__dirname: false
	},
	resolve: {
		aliasFields: ["browser"],
		alias: {
			pkgs: path.resolve(__dirname, "pkgs")
		}
	}
});
