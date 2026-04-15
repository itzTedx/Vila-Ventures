import { ProductCard } from "@/features/products/components/product-card";
import { PRODUCTS } from "@/features/products/constants";

export const ProductsGrid = () => {
	return (
		<div className="my-12 grid grid-cols-3 gap-6">
			{PRODUCTS.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};
