import { ProductCard } from "@/features/products/components/product-card";
import { payload } from "@/payload";

export const ProductsGrid = async () => {
	const { docs: products } = await payload.find({
		collection: "products",
		limit: 6,
		sort: "createdAt",
		depth: 1,
	});

	return (
		<div className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};
