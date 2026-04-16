import { Cta } from "@/components/layout/cta";

import { ContactFaqSection } from "./sections/contact-faq-section";
import { ContactFormSection } from "./sections/contact-form-section";
import { ContactHero } from "./sections/contact-hero";
import { ContactTrustSection } from "./sections/contact-trust-section";

export const ContactView = () => {
	return (
		<main>
			<ContactHero />
			<ContactFormSection />
			<ContactTrustSection />
			<ContactFaqSection />
			<Cta />
		</main>
	);
};
