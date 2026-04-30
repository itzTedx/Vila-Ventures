import type { CollectionConfig } from "payload";

import { adminOnly } from "@/payload/access/shared/adminOnly";

export const Faqs: CollectionConfig = {
	slug: "faqs",
	access: {
		create: adminOnly,
		delete: adminOnly,
		read: () => true,
		update: adminOnly,
	},
	admin: {
		useAsTitle: "question",
		group: "Content",
		defaultColumns: ["question", "sortOrder", "updatedAt"],
	},
	orderable: true,
	defaultPopulate: {
		question: true,
		answer: true,
	},
	fields: [
		{
			name: "question",
			type: "text",
			required: true,
			index: true,
			admin: {
				description: "Question shown in the FAQ accordion.",
				placeholder: "e.g. Do I need prior yoga experience?",
			},
		},
		{
			name: "answer",
			type: "textarea",
			required: true,
			admin: {
				description: "Answer shown when the question is expanded.",
			},
		},
	],
};
