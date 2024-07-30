// Note: Eleventy type definitions are not yet available, hence the use of `any` in this file.

export default function (eleventyConfig: any) {
    eleventyConfig.addPassthroughCopy("src/static");

    eleventyConfig.setTemplateFormats([
        // Templates:
        "html",
        "md",
    ]);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "build",
        },
    };
}
