import { Cta } from "@/components/layout/cta";

import type { ShopProduct } from "./constants";
import { ProductDetailsSection } from "./sections/product-details-section";
import { ProductHero } from "./sections/product-hero";
import { RelatedProductsSection } from "./sections/related-products-section";

interface ProductDetailViewProps {
	product: ShopProduct;
}

export const ProductDetailView = ({ product }: ProductDetailViewProps) => {
	return (
		<main>
			<ProductHero product={product} />
			<ProductDetailsSection product={product} />
			<RelatedProductsSection currentProduct={product} />
			<Cta />
		</main>
	);
};
