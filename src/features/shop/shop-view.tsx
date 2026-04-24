import { Suspense } from "react";

import { Cta } from "@/components/layout/cta";

import type { Category, Product } from "@/payload-types";

import {
	ShopProductsSection,
	ShopProductsSectionFallback,
} from "./sections/products-section";
import { ShopFaqSection } from "./sections/shop-faq-section";
import { ShopHero } from "./sections/shop-hero";
import { TrustSection } from "./sections/trust-section";

interface ShopViewProps {
	products: Product[];
	categories: Pick<Category, "id" | "slug" | "title">[];
}

export const ShopView = ({ products, categories }: ShopViewProps) => {
	return (
		<main>
			<ShopHero />
			<Suspense
				fallback={<ShopProductsSectionFallback categories={categories} />}
			>
				<ShopProductsSection categories={categories} products={products} />
			</Suspense>
			<TrustSection />
			<ShopFaqSection />
			<Cta />
		</main>
	);
};
