import { Cta } from "@/components/layout/cta";

import { ShopProductsSection } from "./sections/products-section";
import { ShopFaqSection } from "./sections/shop-faq-section";
import { ShopHero } from "./sections/shop-hero";
import { TrustSection } from "./sections/trust-section";

export const ShopView = () => {
	return (
		<main>
			<ShopHero />
			<ShopProductsSection />
			<TrustSection />
			<ShopFaqSection />
			<Cta />
		</main>
	);
};
