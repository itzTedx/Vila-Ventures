import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site-config";
import { CONTACT_FAQS } from "@/features/contact/constants";
import { ContactView } from "@/features/contact/contact-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "Contact Vila Ventures | Yoga Inquiries & Collaborations in Abu Dhabi",
	description:
		"Get in touch with Vila Ventures for yoga class bookings, corporate wellness inquiries, product questions, or collaboration proposals. Based in Abu Dhabi, UAE — personal replies within 24 hours.",
	openGraph: {
		url: `${SITE_URL}/contact`,
		title: "Contact Vila Ventures | Let's Start a Conversation",
		description:
			"Reach out for yoga class bookings, corporate wellness, product questions, or collaboration ideas. Based in Abu Dhabi — every message gets a personal reply.",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Contact Vila Ventures - Yoga & Mindful Lifestyle in Abu Dhabi",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Vila Ventures | Let's Start a Conversation",
		description:
			"Yoga classes, corporate wellness, products, or collaborations — reach out to Vila Ventures in Abu Dhabi.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${SITE_URL}/contact`,
	},
};

const contactSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "ContactPage",
			"@id": `${SITE_URL}/contact#webpage`,
			url: `${SITE_URL}/contact`,
			name: "Contact Vila Ventures | Yoga Inquiries & Collaborations",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Get in touch with Vila Ventures for yoga class bookings, corporate wellness inquiries, product questions, or collaboration proposals in Abu Dhabi, UAE.",
			inLanguage: "en-US",
		},
		{
			"@type": "HealthAndBeautyBusiness",
			"@id": `${SITE_URL}/#local-business`,
			name: "Vila Ventures",
			url: SITE_URL,
			email: "hello@withvila.com",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Abu Dhabi",
				addressCountry: "AE",
			},
			areaServed: {
				"@type": "Country",
				name: "United Arab Emirates",
			},
			priceRange: "$$",
			openingHoursSpecification: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				],
				opens: "07:00",
				closes: "21:00",
			},
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/contact#breadcrumb`,
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
					name: "Contact",
					item: `${SITE_URL}/contact`,
				},
			],
		},
		{
			"@type": "FAQPage",
			"@id": `${SITE_URL}/contact#faq`,
			mainEntity: CONTACT_FAQS.map((faq) => ({
				"@type": "Question",
				name: faq.title,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.content,
				},
			})),
		},
	],
};

export default function ContactPage() {
	return (
		<>
			<JsonLd data={contactSchema} />
			<ContactView />
		</>
	);
}
