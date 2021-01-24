const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("admin");
	// Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// Merge data instead of overriding
	// https://www.11ty.dev/docs/data-deep-merge/
	eleventyConfig.setDataDeepMerge(true);

	return {
		templateFormats: ["md", "njk", "html", "liquid"],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about it.
		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for URLs (it does not affect your file structure)

		markdownTemplateEngine: "liquid",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		dir: {
			input: "src",
			includes: "_components",
			layouts: '_layouts',
			data: "_data",
			output: "_site"
		}
	};
};