import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site-config";
import { AboutView } from "@/features/about/about-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "About Vila Ventures | Our Story, Mission & Mindful Approach",
	description:
		"Meet Vila, the founder of Vila Ventures, whose yoga journey opened a more intentional path to design. Learn how mindful practice shaped her creativity and inspired products like yoga mats and yoga cards from the UAE.",
	openGraph: {
		url: `${SITE_URL}/about`,
		title: "About Vila Ventures | Our Story & Mission",
		description:
			"Discover how Vila's yoga journey shaped her creative path and inspired a mindful brand blending yoga experiences with thoughtfully designed products in the UAE.",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "About Vila Ventures - Yoga & Mindful Lifestyle in Abu Dhabi",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "About Vila Ventures | Our Story & Mission",
		description:
			"Meet Vila - founder, yoga teacher, and designer behind Vila Ventures in the UAE.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${SITE_URL}/about`,
	},
};

const aboutSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "AboutPage",
			"@id": `${SITE_URL}/about#webpage`,
			url: `${SITE_URL}/about`,
			name: "About Vila Ventures | Our Story, Mission & Mindful Approach",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Meet Vila, the founder of Vila Ventures, whose yoga journey opened a more intentional path to design and inspired mindful products and experiences in the UAE.",
			inLanguage: "en-US",
		},
		{
			"@type": "Person",
			"@id": `${SITE_URL}/#founder`,
			name: "Vila",
			jobTitle: "Yoga Instructor & Designer",
			description:
				"Yoga instructor and multidisciplinary designer based in the UAE, combining mindful movement with thoughtful product design rooted in intention and presence.",
			knowsAbout: [
				"Hatha Yoga",
				"Vinyasa Yoga",
				"Kids Yoga",
				"Corporate Wellness",
				"Product Design",
				"Mindful Living",
			],
			worksFor: { "@id": `${SITE_URL}/#organization` },
			address: {
				"@type": "PostalAddress",
				addressLocality: "Abu Dhabi",
				addressCountry: "AE",
			},
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/about#breadcrumb`,
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
					name: "About",
					item: `${SITE_URL}/about`,
				},
			],
		},
	],
};

export default function AboutPage() {
	return (
		<>
			<JsonLd data={aboutSchema} />
			<AboutView />
		</>
	);
}
