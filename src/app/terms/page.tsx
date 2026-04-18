import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site-config";
import { JsonLd } from "@/features/seo/json-ld";

const LAST_UPDATED = "April 17, 2026";

export const metadata: Metadata = {
	title: "Terms and Conditions | Vila Ventures",
	description:
		"Review the Terms and Conditions for using Vila Ventures website, classes, services, and product offerings.",
	openGraph: {
		url: `${SITE_URL}/terms`,
		title: "Terms and Conditions | Vila Ventures",
		description:
			"Important terms governing bookings, product purchases, and website use at Vila Ventures.",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Vila Ventures Terms and Conditions",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Terms and Conditions | Vila Ventures",
		description:
			"Read the terms for using Vila Ventures classes, products, and website.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${SITE_URL}/terms`,
	},
};

const termsSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebPage",
			"@id": `${SITE_URL}/terms#webpage`,
			url: `${SITE_URL}/terms`,
			name: "Terms and Conditions | Vila Ventures",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Terms and conditions for website use, class bookings, and purchases from Vila Ventures.",
			inLanguage: "en-US",
			dateModified: "2026-04-17",
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/terms#breadcrumb`,
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
					name: "Terms and Conditions",
					item: `${SITE_URL}/terms`,
				},
			],
		},
	],
};

export default function TermsPage() {
	return (
		<>
			<JsonLd data={termsSchema} />
			<main className="pt-32 pb-20 md:pt-36">
				<div className="container max-w-4xl space-y-8">
					<header className="space-y-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-8">
						<p className="font-medium text-primary text-xs uppercase tracking-[0.2em]">
							Legal
						</p>
						<h1 className="font-display text-3xl sm:text-4xl">
							Terms and Conditions
						</h1>
						<p className="text-muted-foreground leading-relaxed">
							These Terms and Conditions govern your access to and use of Vila
							Ventures&apos; website, classes, products, and related services.
						</p>
						<p className="text-muted-foreground text-sm">
							Last updated: {LAST_UPDATED}
						</p>
					</header>

					<section className="space-y-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm md:p-8">
						<TermsBlock
							content="By accessing or using our website and services, you agree to these Terms and Conditions. If you do not agree, please do not use our services."
							title="1. Acceptance of Terms"
						/>
						<TermsBlock
							content="Vila Ventures offers yoga classes, wellness sessions, events, digital experiences, and lifestyle products. We reserve the right to modify or discontinue any service at any time."
							title="2. Services"
						/>
						<TermsBlock
							content="Class and event bookings are subject to availability. You are responsible for providing accurate information when booking and for arriving on time for scheduled sessions."
							title="3. Bookings"
						/>
						<TermsBlock
							content="Payments for classes and products must be completed through approved payment methods. Prices are listed in applicable currency and may change without prior notice."
							title="4. Pricing and Payments"
						/>
						<TermsBlock
							content="Cancellation and rescheduling policies may vary by class, product, or event type. Where a specific policy is provided at checkout or booking, that policy applies."
							title="5. Cancellations and Refunds"
						/>
						<TermsBlock
							content="You are responsible for consulting a medical professional before participating in yoga or wellness activities. Participation is voluntary and at your own risk."
							title="6. Health and Safety"
						/>
						<TermsBlock
							content="All website content, branding, designs, media, and materials are owned by Vila Ventures or licensed to us. You may not reproduce, distribute, or use this content without written permission."
							title="7. Intellectual Property"
						/>
						<TermsBlock
							content="You agree not to misuse our website or services, including unauthorized access attempts, unlawful use, or actions that interfere with platform performance."
							title="8. Acceptable Use"
						/>
						<TermsBlock
							content="To the fullest extent permitted by law, Vila Ventures is not liable for indirect, incidental, special, or consequential damages resulting from your use of our website, services, or products."
							title="9. Limitation of Liability"
						/>
						<TermsBlock
							content="You agree to indemnify and hold Vila Ventures harmless from claims or liabilities arising from your breach of these Terms or misuse of our services."
							title="10. Indemnification"
						/>
						<TermsBlock
							content="These Terms are governed by the laws applicable in the United Arab Emirates. Any disputes are subject to the jurisdiction of competent courts in Abu Dhabi, UAE."
							title="11. Governing Law"
						/>
						<TermsBlock
							content="We may update these Terms and Conditions at any time. Changes become effective when posted on this page with an updated revision date."
							title="12. Changes to Terms"
						/>
						<TermsBlock
							content="For any questions regarding these Terms and Conditions, contact us at hello@withvila.com."
							title="13. Contact"
						/>
					</section>
				</div>
			</main>
		</>
	);
}

interface TermsBlockProps {
	title: string;
	content: string;
}

function TermsBlock({ title, content }: TermsBlockProps) {
	return (
		<section className="space-y-2">
			<h2 className="font-display text-xl leading-tight sm:text-2xl">
				{title}
			</h2>
			<p className="text-muted-foreground leading-relaxed">{content}</p>
		</section>
	);
}
