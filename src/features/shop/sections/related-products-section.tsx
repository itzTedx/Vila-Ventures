import { Badge } from "@/components/ui/badge";

import { ProductCard } from "@/features/products/components/product-card";
import type { Product } from "@/payload-types";

interface RelatedProductsSectionProps {
	currentProduct: Product;
}

export const RelatedProductsSection = ({
	currentProduct,
}: RelatedProductsSectionProps) => {
	const related =
		currentProduct.relatedProducts
			?.filter((product): product is Product => typeof product === "object")
			.slice(0, 3) ?? [];

	if (!related.length) {
		return null;
	}

	return (
		<section className="container mx-auto py-14 lg:py-28">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<Badge
					className="bg-card text-muted-foreground!"
					render={<h2 />}
					variant="secondary"
				>
					You Might Also Like
				</Badge>
				<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
					<span className="text-foreground">A few more things</span> that pair
					well with your practice.
				</p>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
				{related.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};
