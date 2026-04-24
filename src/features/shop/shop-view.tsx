import { Cta } from "@/components/layout/cta";
import type { Category, Product } from "@/payload-types";

import { ShopProductsSection } from "./sections/products-section";
import { ShopFaqSection } from "./sections/shop-faq-section";
import { ShopHero } from "./sections/shop-hero";
import { TrustSection } from "./sections/trust-section";

interface ShopViewProps {
	products: Product[];
	categories: Pick<Category, "id" | "slug" | "title">[];
	activeCategorySlug?: string;
}

export const ShopView = ({
	products,
	categories,
	activeCategorySlug,
}: ShopViewProps) => {
	return (
		<main>
			<ShopHero />
			<ShopProductsSection
				activeCategorySlug={activeCategorySlug}
				categories={categories}
				products={products}
			/>
			<TrustSection />
			<ShopFaqSection />
			<Cta />
		</main>
	);
};
