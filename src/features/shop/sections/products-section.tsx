"use client";

import { useMemo } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";

import { ProductCard } from "@/features/products/components/product-card";
import { cn } from "@/lib/utils";
import type { Category, Product } from "@/payload-types";

function productInCategory(product: Product, categorySlug: string): boolean {
	const cats = product.categories;
	if (!cats?.length) return false;

	return cats.some((c) => {
		if (typeof c === "number") return false;
		return typeof c.slug === "string" && c.slug === categorySlug;
	});
}

interface ShopProductsSectionProps {
	products: Product[];
	categories: Pick<Category, "id" | "slug" | "title">[];
}

export const ShopProductsSectionFallback = ({
	categories,
}: Pick<ShopProductsSectionProps, "categories">) => {
	const filters = buildCategoryFilters(categories);

	return (
		<section id="products">
			<div className="container mx-auto py-14 lg:py-20">
				<div className="flex w-fit flex-wrap gap-2 rounded-lg bg-primary/10 p-1">
					{filters.map((filter) => (
						<Link
							className={cn(
								buttonVariants({
									size: "sm",
									variant: "outline",
								})
							)}
							href={filter.href}
							key={filter.slug}
						>
							{filter.label}
						</Link>
					))}
				</div>

				<div className="mt-8 grid animate-pulse grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							className="aspect-4/5 rounded-lg bg-muted"
							key={`skeleton-${String(i)}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

function buildCategoryFilters(
	categories: ShopProductsSectionProps["categories"]
) {
	return [
		{
			href: "/shop",
			label: "All",
			slug: "all",
		},
		...categories
			.filter(
				(category) =>
					typeof category.slug === "string" &&
					Boolean(category.slug) &&
					typeof category.title === "string" &&
					Boolean(category.title)
			)
			.map((category) => ({
				href: `/shop?category=${category.slug}`,
				label: category.title as string,
				slug: category.slug as string,
			})),
	];
}

export const ShopProductsSection = ({
	products,
	categories,
}: ShopProductsSectionProps) => {
	const searchParams = useSearchParams();
	const categoryParam = searchParams.get("category");
	const activeCategorySlug =
		typeof categoryParam === "string" && categoryParam.length > 0
			? categoryParam
			: undefined;

	const filteredProducts = useMemo(() => {
		if (!activeCategorySlug || activeCategorySlug === "all") {
			return products;
		}

		return products.filter((p) => productInCategory(p, activeCategorySlug));
	}, [products, activeCategorySlug]);

	const activeFilter = activeCategorySlug ?? "all";
	const filters = buildCategoryFilters(categories);

	return (
		<section id="products">
			<div className="container mx-auto py-14 lg:py-20">
				<div className="flex w-fit flex-wrap gap-2 rounded-lg bg-primary/10 p-1">
					{filters.map((filter) => (
						<Link
							className={cn(
								buttonVariants({
									size: "sm",
									variant: activeFilter === filter.slug ? "default" : "outline",
								})
							)}
							href={filter.href}
							key={filter.slug}
						>
							{filter.label}
						</Link>
					))}
				</div>

				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};
