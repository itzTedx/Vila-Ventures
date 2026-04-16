import type { Metadata } from "next";

import { JsonLd } from "@/features/seo/json-ld";
import { SHOP_FAQS, SHOP_PRODUCTS } from "@/features/shop/constants";
import { ShopView } from "@/features/shop/shop-view";

const SITE_URL = "https://vilaventures.com";

export const metadata: Metadata = {
	title: "Shop Yoga Essentials | Mats, Apparel & Accessories | Vila Ventures",
	description:
		"Thoughtfully designed yoga mats, organic cotton apparel, and mindful accessories — made for daily practice and everyday life. Free UAE shipping over 200 AED.",
	openGraph: {
		url: `${SITE_URL}/shop`,
		title: "Shop Yoga Essentials | Vila Ventures",
		description:
			"Yoga mats, organic apparel, and studio accessories designed alongside our practice in Abu Dhabi. Free shipping across the UAE on orders over 200 AED.",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Vila Ventures Shop — Yoga Mats, Apparel & Accessories",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Shop Yoga Essentials | Vila Ventures",
		description:
			"Mats, apparel, and accessories designed for daily practice. Free UAE shipping over 200 AED.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${SITE_URL}/shop`,
	},
};

const shopSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "CollectionPage",
			"@id": `${SITE_URL}/shop#webpage`,
			url: `${SITE_URL}/shop`,
			name: "Shop Yoga Essentials | Vila Ventures",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Thoughtfully designed yoga mats, organic cotton apparel, and mindful accessories — made for daily practice and everyday life.",
			inLanguage: "en-US",
		},
		{
			"@type": "ItemList",
			"@id": `${SITE_URL}/shop#product-list`,
			name: "Vila Ventures Product Collection",
			numberOfItems: SHOP_PRODUCTS.length,
			itemListElement: SHOP_PRODUCTS.map((product, index) => ({
				"@type": "ListItem",
				position: index + 1,
				url: `${SITE_URL}/shop/${product.slug}`,
				name: product.title,
			})),
		},
		{
			"@type": "FAQPage",
			"@id": `${SITE_URL}/shop#faq`,
			mainEntity: SHOP_FAQS.map((faq) => ({
				"@type": "Question",
				name: faq.title,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.content,
				},
			})),
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/shop#breadcrumb`,
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: SITE_URL,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Shop",
					item: `${SITE_URL}/shop`,
				},
			],
		},
	],
};

export default function ShopPage() {
	return (
		<>
			<JsonLd data={shopSchema} />
			<ShopView />
		</>
	);
}
