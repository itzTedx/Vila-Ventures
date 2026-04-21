"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { ProductCard } from "@/features/products/components/product-card";

import {
	SHOP_CATEGORIES,
	SHOP_PRODUCTS,
	type ShopCategory,
} from "../constants";

export const ShopProductsSection = () => {
	const [activeCategory, setActiveCategory] = useState<ShopCategory>("All");

	const filtered =
		activeCategory === "All"
			? SHOP_PRODUCTS
			: SHOP_PRODUCTS.filter((p) => p.category === activeCategory);

	return (
		<section id="products">
			<div className="container mx-auto py-14 lg:py-20">
				<div className="flex w-fit flex-wrap gap-2 rounded-lg bg-primary/10 p-1">
					{SHOP_CATEGORIES.map((category) => (
						<Button
							key={category}
							onClick={() => setActiveCategory(category)}
							size="sm"
							variant={activeCategory === category ? "default" : "outline"}
						>
							{category}
						</Button>
					))}
				</div>

				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filtered.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};
