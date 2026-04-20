import { sqliteAdapter } from "@payloadcms/db-sqlite";
import {
	BoldFeature,
	EXPERIMENTAL_TableFeature,
	IndentFeature,
	ItalicFeature,
	LinkFeature,
	lexicalEditor,
	OrderedListFeature,
	UnderlineFeature,
	UnorderedListFeature,
} from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Categories } from "@/payload/collections/categories";
import { Media } from "@/payload/collections/media";
import { Users } from "@/payload/collections/users";
import { Footer } from "@/payload/globals/footer";
import { Header } from "@/payload/globals/header";
import { plugins } from "@/payload/plugins";

import { Classes } from "../collections/classes";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [Users, Classes, Categories, Media],
	db: sqliteAdapter({
		client: {
			url: process.env.DATABASE_URL || "",
		},
	}),
	editor: lexicalEditor({
		features: () => {
			return [
				UnderlineFeature(),
				BoldFeature(),
				ItalicFeature(),
				OrderedListFeature(),
				UnorderedListFeature(),
				LinkFeature({
					enabledCollections: ["products"],
					fields: ({ defaultFields }) => {
						const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
							if ("name" in field && field.name === "url") return false;
							return true;
						});

						return [
							...defaultFieldsWithoutUrl,
							{
								name: "url",
								type: "text",
								admin: {
									condition: ({ linkType }) => linkType !== "internal",
								},
								label: ({ t }) => t("fields:enterURL"),
								required: true,
							},
						];
					},
				}),
				IndentFeature(),
				EXPERIMENTAL_TableFeature(),
			];
		},
	}),
	endpoints: [],
	globals: [Header, Footer],
	plugins,
	sharp,
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "../../payload-types.ts"),
	},
});
