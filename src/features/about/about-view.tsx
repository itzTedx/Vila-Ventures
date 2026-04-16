import { Cta } from "@/components/layout/cta";

import { AboutHero } from "./sections/about-hero";
import { FounderSection } from "./sections/founder-section";
import { StorySection } from "./sections/story-section";
import { TrustSection } from "./sections/trust-section";
import { ValuesSection } from "./sections/values-section";

export const AboutView = () => {
	return (
		<main>
			<AboutHero />
			<StorySection />
			<FounderSection />
			<ValuesSection />
			<TrustSection />
			<Cta />
		</main>
	);
};
