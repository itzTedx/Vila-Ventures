import { ProductCard } from "@/features/products/components/product-card";
import { PRODUCTS } from "@/features/products/constants";

export const ProductsGrid = () => {
	return (
		<div className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{PRODUCTS.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};
