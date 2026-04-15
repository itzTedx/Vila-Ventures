import { AboutSection } from "./sections/about-section";
import { ClassesSection } from "./sections/classes-section";
import { FeaturedProductSection } from "./sections/featured-product-section";
import { HeroSection } from "./sections/hero-section";
import { ProductsSection } from "./sections/products-section";
import { WhyChooseSection } from "./sections/why-choose-section";

export const HomeView = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ClassesSection />
			<WhyChooseSection />
			<FeaturedProductSection />
			<ProductsSection />
		</main>
	);
};
