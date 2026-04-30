import { Cta } from "@/components/layout/cta";

import { TestimonialsMarquee } from "./components/testimonials-marquee";
import { AboutSection } from "./sections/about-section";
import { BlogsSection } from "./sections/blogs-section";
import { ClassesSection } from "./sections/classes-section";
import { FaqSection } from "./sections/faq-section";
import { FeaturedProductSection } from "./sections/featured-product-section";
import { HeroSection } from "./sections/hero-section";
import { ProductsSection } from "./sections/products-section";
import { WhyChooseSection } from "./sections/why-choose-section";

export const HomeView = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<TestimonialsMarquee />
			<ClassesSection />
			{/* <FeedbackSection /> */}
			<FeaturedProductSection />
			<ProductsSection />
			<WhyChooseSection />
			<BlogsSection />
			<FaqSection />
			<Cta />
		</main>
	);
};
