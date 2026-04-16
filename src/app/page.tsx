import type { Metadata } from "next";

import { FAQS } from "@/features/home/constants";
import { HomeView } from "@/features/home/home-view";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title:
		"Vila Ventures | Yoga Classes & Mindful Lifestyle Products in Abu Dhabi",
	description:
		"Discover mindful yoga classes, creative lifestyle products & a community rooted in joy. Group, private & corporate sessions in Abu Dhabi. Book your session today.",
	openGraph: {
		url: "https://vilaventures.com",
	},
	alternates: {
		canonical: "https://vilaventures.com",
	},
};

const homepageSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "https://vilaventures.com/#organization",
			name: "Vila Ventures",
			alternateName: "VilaVentures",
			url: "https://vilaventures.com",
			logo: "https://vilaventures.com/og-image.png",
			description:
				"A creative lifestyle brand and community space rooted in joy, blending mindful yoga experiences with thoughtfully designed lifestyle products in Abu Dhabi, UAE.",
			foundingDate: "2024",
			founders: [
				{
					"@type": "Person",
					name: "Vila",
					jobTitle: "Yoga Instructor & Designer",
				},
			],
			address: {
				"@type": "PostalAddress",
				addressLocality: "Abu Dhabi",
				addressCountry: "AE",
			},
			contactPoint: {
				"@type": "ContactPoint",
				contactType: "customer service",
				email: "hello@withvila.com",
			},
			sameAs: [
				"https://instagram.com/vilaventures",
				"https://linkedin.com/company/vilaventures",
				"https://x.com/vilaventures",
			],
		},
		{
			"@type": "WebSite",
			"@id": "https://vilaventures.com/#website",
			url: "https://vilaventures.com",
			name: "Vila Ventures",
			description:
				"Mindful yoga classes, creative lifestyle products & a community rooted in joy in Abu Dhabi, UAE.",
			publisher: { "@id": "https://vilaventures.com/#organization" },
			inLanguage: "en-US",
		},
		{
			"@type": "WebPage",
			"@id": "https://vilaventures.com/#webpage",
			url: "https://vilaventures.com",
			name: "Yoga Classes & Mindful Lifestyle Products in Abu Dhabi, UAE | Vila Ventures",
			isPartOf: { "@id": "https://vilaventures.com/#website" },
			about: { "@id": "https://vilaventures.com/#organization" },
			description:
				"Discover mindful yoga classes, creative lifestyle products & a community rooted in joy. Group, private & corporate sessions in Abu Dhabi.",
			inLanguage: "en-US",
			speakable: {
				"@type": "SpeakableSpecification",
				cssSelector: ["h1", ".hero-description", "#faq"],
			},
		},
		{
			"@type": "HealthAndBeautyBusiness",
			"@id": "https://vilaventures.com/#localbusiness",
			name: "Vila Ventures",
			url: "https://vilaventures.com",
			description:
				"Intimate yoga classes, thoughtful lifestyle products, and mindful experiences in Abu Dhabi. Offering Hatha, Vinyasa, virtual, private, corporate, kids, and women's yoga sessions.",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Abu Dhabi",
				addressCountry: "AE",
			},
			email: "hello@withvila.com",
			priceRange: "$$",
			image: "https://vilaventures.com/images/hero-yoga.webp",
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "Yoga Classes & Lifestyle Products",
				itemListElement: [
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Hatha Yoga Classes",
							description:
								"Build a strong foundation with slow, mindful movements and breath-focused practice. Ideal for beginners and stress relief.",
						},
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Vinyasa Yoga Classes",
							description:
								"Flow through dynamic sequences that improve strength, flexibility, and focus while connecting breath with movement.",
						},
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Virtual Yoga Classes",
							description:
								"Practice yoga from the comfort of your home with live guided sessions available for individuals, groups, and corporate wellness programs.",
						},
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Private Yoga Sessions",
							description:
								"One-on-one yoga sessions tailored to your goals and schedule in Abu Dhabi.",
						},
					},
					{
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: "Corporate Yoga Workshops",
							description:
								"Yoga and wellness workshops designed for teams and corporate environments in the UAE.",
						},
					},
				],
			},
		},
		{
			"@type": "FAQPage",
			"@id": "https://vilaventures.com/#faq",
			mainEntity: FAQS.map((faq) => ({
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

export default function Home() {
	return (
		<>
			<JsonLd data={homepageSchema} />
			<HomeView />
		</>
	);
}
