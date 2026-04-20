import { ecommercePlugin } from "@payloadcms/plugin-ecommerce";
import { stripeAdapter } from "@payloadcms/plugin-ecommerce/payments/stripe";
// import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
// import {
// 	FixedToolbarFeature,
// 	HeadingFeature,
// 	lexicalEditor,
// } from "@payloadcms/richtext-lexical";
import { Plugin } from "payload";

import { getServerSideURL } from "@/lib/utils/getURL";
import { adminOrPublishedStatus } from "@/payload/access/content/adminOrPublishedStatus";
import { isDocumentOwner } from "@/payload/access/content/isDocumentOwner";
import { adminOnlyFieldAccess } from "@/payload/access/shared/adminOnlyFieldAccess";
import { customerOnlyFieldAccess } from "@/payload/access/shared/customerOnlyFieldAccess";
import { isAdmin } from "@/payload/access/shared/isAdmin";
import { ProductsCollection } from "@/payload/collections/products";
import { Product } from "@/payload-types";

const generateTitle: GenerateTitle<Product> = ({ doc }) => {
	return doc?.title
		? `${doc.title} | Payload Ecommerce Template`
		: "Payload Ecommerce Template";
};

const generateURL: GenerateURL<Product> = ({ doc }) => {
	const url = getServerSideURL();

	return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const plugins: Plugin[] = [
	seoPlugin({
		generateTitle,
		generateURL,
	}),
	// formBuilderPlugin({
	// 	fields: {
	// 		payment: false,
	// 	},
	// 	formSubmissionOverrides: {
	// 		access: {
	// 			delete: isAdmin,
	// 			read: isAdmin,
	// 			update: isAdmin,
	// 		},
	// 		admin: {
	// 			group: "Content",
	// 		},
	// 	},
	// 	formOverrides: {
	// 		access: {
	// 			delete: isAdmin,
	// 			read: isAdmin,
	// 			update: isAdmin,
	// 			create: isAdmin,
	// 		},
	// 		admin: {
	// 			group: "Content",
	// 		},
	// 		fields: ({ defaultFields }) => {
	// 			return defaultFields.map((field) => {
	// 				if ("name" in field && field.name === "confirmationMessage") {
	// 					return {
	// 						...field,
	// 						editor: lexicalEditor({
	// 							features: ({ rootFeatures }) => {
	// 								return [
	// 									...rootFeatures,
	// 									FixedToolbarFeature(),
	// 									HeadingFeature({
	// 										enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
	// 									}),
	// 								];
	// 							},
	// 						}),
	// 					};
	// 				}
	// 				return field;
	// 			});
	// 		},
	// 	},
	// }),
	ecommercePlugin({
		access: {
			adminOnlyFieldAccess,
			adminOrPublishedStatus,
			customerOnlyFieldAccess,
			isAdmin,
			isDocumentOwner,
		},
		customers: {
			slug: "users",
		},
		orders: {
			ordersCollectionOverride: ({ defaultCollection }) => ({
				...defaultCollection,
				fields: [
					...defaultCollection.fields,
					{
						name: "accessToken",
						type: "text",
						unique: true,
						index: true,
						admin: {
							position: "sidebar",
							readOnly: true,
						},
						hooks: {
							beforeValidate: [
								({ value, operation }) => {
									if (operation === "create" || !value) {
										return crypto.randomUUID();
									}
									return value;
								},
							],
						},
					},
				],
			}),
		},
		payments: {
			paymentMethods: [
				stripeAdapter({
					secretKey: process.env.STRIPE_SECRET_KEY!,
					publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
					webhookSecret: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET!,
				}),
			],
		},
		products: {
			productsCollectionOverride: ProductsCollection,
		},
	}),
];
