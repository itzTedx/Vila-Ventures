"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
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
		<section className="bg-card" id="products">
			<div className="container mx-auto py-14 lg:py-28">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Badge
						className="bg-background text-muted-foreground!"
						render={<h2 />}
						variant="secondary"
					>
						The Collection
					</Badge>
					<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
						<span className="text-foreground">
							Mats, apparel, and everyday objects
						</span>{" "}
						designed for people who take their practice seriously — and
						everything else lightly.
					</p>
				</div>

				<div className="mt-10 flex flex-wrap gap-2 lg:mt-16">
					{SHOP_CATEGORIES.map((category) => (
						<Button
							className={
								activeCategory === category ? "" : "text-muted-foreground"
							}
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
