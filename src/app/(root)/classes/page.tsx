import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site-config";
import { getClasses, getClassPricingPlans } from "@/features/classes/actions";
import { ClassesView } from "@/features/classes/classes-view";
import { CLASSES_FAQS } from "@/features/classes/constants";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title:
		"Yoga Classes in Abu Dhabi | Hatha, Vinyasa & Virtual Sessions | Vila Ventures",
	description:
		"Join guided yoga classes in Abu Dhabi with Vila — Hatha, Vinyasa, kids yoga, corporate wellness, and virtual sessions. All levels welcome. Book your first class today.",
	openGraph: {
		url: `${SITE_URL}/classes`,
		title: "Yoga Classes in Abu Dhabi | Vila Ventures",
		description:
			"Guided yoga classes for women, kids, and corporate teams in Abu Dhabi. Hatha, Vinyasa, virtual sessions, and private 1-on-1 practice with Vila.",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Vila Ventures Yoga Classes in Abu Dhabi — Hatha, Vinyasa & Virtual",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Yoga Classes in Abu Dhabi | Vila Ventures",
		description:
			"Hatha, Vinyasa, kids yoga, corporate wellness & virtual classes. All levels welcome in Abu Dhabi.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${SITE_URL}/classes`,
	},
};

const getClassesSchema = (classes: Awaited<ReturnType<typeof getClasses>>) => ({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": `${SITE_URL}/classes#webpage`,
			url: `${SITE_URL}/classes`,
			name: "Yoga Classes in Abu Dhabi | Hatha, Vinyasa & Virtual Sessions",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Join guided yoga classes in Abu Dhabi with Vila — Hatha, Vinyasa, kids yoga, corporate wellness, and virtual sessions. All levels welcome.",
			inLanguage: "en-US",
		},
		...classes.map((cls) => ({
			"@type": "Course",
			"@id": `${SITE_URL}/classes#${cls.id}`,
			name: cls.name,
			description: cls.description,
			provider: {
				"@type": "Organization",
				"@id": `${SITE_URL}/#organization`,
				name: "Vila Ventures",
			},
			courseMode: cls.format.includes("virtual")
				? ["Onsite", "Online"]
				: cls.format.includes("Virtual") || cls.format.includes("Zoom")
					? ["Online"]
					: ["Onsite"],
			location: {
				"@type": "Place",
				name: "Vila Ventures Studio",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Abu Dhabi",
					addressCountry: "AE",
				},
			},
		})),
		{
			"@type": "FAQPage",
			"@id": `${SITE_URL}/classes#faq`,
			mainEntity: CLASSES_FAQS.map((faq) => ({
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
			"@id": `${SITE_URL}/classes#breadcrumb`,
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
					name: "Classes",
					item: `${SITE_URL}/classes`,
				},
			],
		},
	],
});

export default async function ClassesPage() {
	const [classes, plans] = await Promise.all([
		getClasses(),
		getClassPricingPlans(),
	]);
	const classesSchema = getClassesSchema(classes);

	return (
		<>
			<JsonLd data={classesSchema} />
			<ClassesView classes={classes} plans={plans} />
		</>
	);
}
