import { Cta } from "@/components/layout/cta";

import type { Class as ClassType } from "@/payload-types";

import { AudienceSection } from "./sections/audience-section";
import { ClassesHero } from "./sections/classes-hero";
import { ExperienceSection } from "./sections/experience-section";
import { ClassesFaqSection } from "./sections/faq-section";
import { OfferingsSection } from "./sections/offerings-section";

type ClassesViewProps = {
	classes: ClassType[];
};

export const ClassesView = ({ classes }: ClassesViewProps) => {
	return (
		<main>
			<ClassesHero />
			<OfferingsSection classes={classes} />
			<ExperienceSection />
			<AudienceSection />
			<ClassesFaqSection />
			<Cta />
		</main>
	);
};
