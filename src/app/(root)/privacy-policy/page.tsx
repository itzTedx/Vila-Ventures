import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site-config";
import { JsonLd } from "@/features/seo/json-ld";

const LAST_UPDATED = "April 17, 2026";

export const metadata: Metadata = {
	title: "Privacy Policy | Vila Ventures",
	description:
		"Read how Vila Ventures collects, uses, and protects personal information for yoga classes, shop orders, and website interactions.",
	openGraph: {
		url: `${SITE_URL}/privacy-policy`,
		title: "Privacy Policy | Vila Ventures",
		description:
			"Learn what personal data Vila Ventures collects and how we use, store, and protect it.",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Vila Ventures Privacy Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Privacy Policy | Vila Ventures",
		description:
			"How Vila Ventures handles your information for classes, products, and website use.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${SITE_URL}/privacy-policy`,
	},
};

const privacySchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": `${SITE_URL}/privacy-policy#webpage`,
			url: `${SITE_URL}/privacy-policy`,
			name: "Privacy Policy | Vila Ventures",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Privacy policy describing how Vila Ventures collects, uses, stores, and protects personal data.",
			inLanguage: "en-US",
			dateModified: "2026-04-17",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/privacy-policy#breadcrumb`,
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
					name: "Privacy Policy",
					item: `${SITE_URL}/privacy-policy`,
				},
			],
		},
	],
};

export default function PrivacyPolicyPage() {
	return (
		<>
			<JsonLd data={privacySchema} />
			<main className="pt-32 pb-20 md:pt-36">
				<div className="container max-w-4xl space-y-8">
					<header className="space-y-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-8">
						<p className="font-medium text-primary text-xs uppercase tracking-[0.2em]">
							Legal
						</p>
						<h1 className="font-display text-3xl sm:text-4xl">
							Privacy Policy
						</h1>
						<p className="text-muted-foreground leading-relaxed">
							This Privacy Policy explains how Vila Ventures collects, uses,
							discloses, and safeguards your information when you visit our
							website, book a yoga session, purchase products, or contact us.
						</p>
						<p className="text-muted-foreground text-sm">
							Last updated: {LAST_UPDATED}
						</p>
					</header>

					<section className="space-y-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-8">
						<PolicyBlock
							content="By using this website, you agree to the practices described below. If you do not agree, please discontinue use of our website and services."
							title="1. Scope"
						/>
						<PolicyBlock
							content="We may collect personal information you voluntarily provide, such as your name, email, phone number, billing address, and booking details. We also collect technical data such as IP address, browser type, pages visited, and session information through cookies and analytics tools."
							title="2. Information We Collect"
						/>
						<PolicyBlock
							content="We use your information to provide and improve our services, process class bookings and product orders, communicate about appointments and updates, respond to inquiries, and maintain website security. We may also use aggregated, non-identifiable data for analytics and service optimization."
							title="3. How We Use Information"
						/>
						<PolicyBlock
							content="We do not sell your personal data. We may share information with trusted service providers who help us operate our business, such as payment processors, email tools, scheduling platforms, and delivery partners, only as necessary to deliver our services."
							title="4. Data Sharing"
						/>
						<PolicyBlock
							content="We use reasonable administrative, technical, and organizational safeguards to protect your personal information. However, no transmission over the internet or electronic storage method is fully secure."
							title="5. Data Security"
						/>
						<PolicyBlock
							content="We retain personal information only for as long as necessary to fulfill service, legal, accounting, and operational obligations."
							title="6. Data Retention"
						/>
						<PolicyBlock
							content="Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal information. To exercise these rights, contact us using the details below."
							title="7. Your Rights"
						/>
						<PolicyBlock
							content="Our website may use cookies and similar technologies to improve user experience, remember preferences, and understand usage patterns. You can manage cookie behavior through your browser settings."
							title="8. Cookies"
						/>
						<PolicyBlock
							content="Our services are not directed to children under 13 years of age, and we do not knowingly collect personal information from children without appropriate parental or guardian consent."
							title="9. Children's Privacy"
						/>
						<PolicyBlock
							content="Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of those third-party properties."
							title="10. Third-Party Links"
						/>
						<PolicyBlock
							content="We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised 'Last updated' date."
							title="11. Policy Updates"
						/>
						<PolicyBlock
							content="If you have questions about this Privacy Policy or how your data is handled, contact us at hello@withvila.com."
							title="12. Contact Us"
						/>
					</section>
				</div>
			</main>
		</>
	);
}

interface PolicyBlockProps {
	title: string;
	content: string;
}

function PolicyBlock({ title, content }: PolicyBlockProps) {
	return (
		<section className="space-y-2">
			<h2 className="font-display text-xl leading-tight sm:text-2xl">
				{title}
			</h2>
			<p className="text-muted-foreground leading-relaxed">{content}</p>
		</section>
	);
}
