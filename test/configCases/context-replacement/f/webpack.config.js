var webpack = require("../../../../");

/** @type {import("../../../../").Configuration} */
module.exports = {
	plugins: [new webpack.ContextReplacementPlugin(/folder$/, false, /(a|b)/)]
};
