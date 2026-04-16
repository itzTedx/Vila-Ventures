import { Cta } from "@/components/layout/cta";

import { AudienceSection } from "./sections/audience-section";
import { ClassesHero } from "./sections/classes-hero";
import { ExperienceSection } from "./sections/experience-section";
import { ClassesFaqSection } from "./sections/faq-section";
import { OfferingsSection } from "./sections/offerings-section";

export const ClassesView = () => {
	return (
		<main>
			<ClassesHero />
			<OfferingsSection />
			<ExperienceSection />
			<AudienceSection />
			<ClassesFaqSection />
			<Cta />
		</main>
	);
};
