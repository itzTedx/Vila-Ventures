import type { CollectionConfig } from "payload";
import { slugField } from "payload";

import { adminOnly } from "@/payload/access/shared/adminOnly";

export const Categories: CollectionConfig = {
	slug: "categories",
	access: {
		create: adminOnly,
		delete: adminOnly,
		read: () => true,
		update: adminOnly,
	},
	admin: {
		useAsTitle: "title",
		group: "Content",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		slugField({
			position: undefined,
		}),
	],
};
