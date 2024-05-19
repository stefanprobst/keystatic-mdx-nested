import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "./content/posts/**",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				summary: fields.mdx({
					label: "Summary",
				}),
				content: fields.mdx({
					label: "Content",
				}),
			},
		}),
	},
});
