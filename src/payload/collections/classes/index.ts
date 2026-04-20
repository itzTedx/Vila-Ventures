import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField,
} from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";
import { slugField } from "payload";

import { adminOnly } from "@/payload/access/shared/adminOnly";

export const Classes: CollectionConfig = {
	slug: "classes",
	access: {
		create: adminOnly,
		delete: adminOnly,
		read: () => true,
		update: adminOnly,
	},
	admin: {
		useAsTitle: "title",
		group: "Content",
		defaultColumns: ["title", "tagline", "sortOrder", "updatedAt"],
	},
	defaultPopulate: {
		title: true,
		tagline: true,
		description: true,
		bestFor: true,
		format: true,
		image: true,
		meta: true,
		slug: true,
		sortOrder: true,
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "image",
							type: "upload",
							relationTo: "media",
							required: true,
						},
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "tagline",
							type: "text",
							required: true,
						},
						{
							name: "description",
							type: "textarea",
							required: true,
						},
						{
							name: "bestFor",
							type: "text",
						},
						{
							name: "format",
							type: "text",
						},
					],
				},
				{
					name: "meta",
					label: "SEO",
					fields: [
						OverviewField({
							titlePath: "meta.title",
							descriptionPath: "meta.description",
							imagePath: "meta.image",
						}),
						MetaTitleField({
							hasGenerateFn: true,
						}),
						MetaImageField({
							relationTo: "media",
						}),
						MetaDescriptionField({}),
						PreviewField({
							hasGenerateFn: true,
							titlePath: "meta.title",
							descriptionPath: "meta.description",
						}),
					],
				},
			],
		},
		{
			name: "sortOrder",
			type: "number",
			required: true,
			defaultValue: 0,
			admin: {
				position: "sidebar",
				step: 1,
			},
		},
		slugField({
			position: "sidebar",
		}),
	],
};
