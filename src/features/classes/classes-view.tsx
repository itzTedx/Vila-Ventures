import { Cta } from "@/components/layout/cta";

import type { ClassOffering, ClassPricingPlan } from "./actions";
import { AudienceSection } from "./sections/audience-section";
import { ClassesHero } from "./sections/classes-hero";
import { ExperienceSection } from "./sections/experience-section";
import { ClassesFaqSection } from "./sections/faq-section";
import { OfferingsSection } from "./sections/offerings-section";

type ClassesViewProps = {
	classes: ClassOffering[];
	plans: ClassPricingPlan[];
};

export const ClassesView = ({ classes, plans }: ClassesViewProps) => {
	return (
		<main>
			<ClassesHero />
			<OfferingsSection classes={classes} plans={plans} />
			<ExperienceSection />
			<AudienceSection />
			<ClassesFaqSection />
			<Cta />
		</main>
	);
};
