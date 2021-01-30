const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		open: 'external',
		browser: "chrome"
	});

	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/assets/images");
	eleventyConfig.addPassthroughCopy("src/admin");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");

	// Watch our compiled assets for changes
	eleventyConfig.addWatchTarget('./src/assets/compiled-assets/main.css');
	eleventyConfig.addWatchTarget('./src/assets/compiled-assets/main.js');
	eleventyConfig.addWatchTarget('./src/assets/compiled-assets/vendor.js');

	// Copy src/compiled-assets to /assets
	eleventyConfig.addPassthroughCopy({ 'src/assets/compiled-assets': 'assets' });

	// Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// Merge data instead of overriding
	// https://www.11ty.dev/docs/data-deep-merge/
	eleventyConfig.setDataDeepMerge(true);

	/* Markdown Plugins */
	let markdownIt = require("markdown-it");
	let markdownItAnchor = require("markdown-it-anchor");
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};
	let opts = {
		permalink: false
	};

	eleventyConfig.setLibrary("md", markdownIt(options)
		.use(markdownItAnchor, opts)
	);


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