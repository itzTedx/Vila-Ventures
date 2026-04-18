import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site-config";
import { AboutView } from "@/features/about/about-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "About Vila Ventures | Our Story, Mission & Mindful Approach",
	description:
		"Meet Vila, a yoga instructor and designer in Abu Dhabi creating mindful yoga classes and lifestyle products. Discover our story, values, and what makes Vila Ventures different.",
	openGraph: {
		url: `${SITE_URL}/about`,
		title: "About Vila Ventures | Our Story & Mission",
		description:
			"Discover the story behind Vila Ventures — a community rooted in joy, blending mindful yoga with thoughtfully designed lifestyle products in Abu Dhabi.",
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
			"Meet Vila — yoga instructor, designer, and the heart behind Vila Ventures in Abu Dhabi.",
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
				"Meet Vila, a yoga instructor and designer in Abu Dhabi creating mindful yoga classes and lifestyle products. Discover our story, values, and what makes Vila Ventures different.",
			inLanguage: "en-US",
		},
		{
			"@type": "Person",
			"@id": `${SITE_URL}/#founder`,
			name: "Vila",
			jobTitle: "Yoga Instructor & Designer",
			description:
				"Certified yoga instructor (RYT-200) and multidisciplinary designer based in Abu Dhabi, specializing in Hatha and Vinyasa yoga for women, kids, and corporate teams.",
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
