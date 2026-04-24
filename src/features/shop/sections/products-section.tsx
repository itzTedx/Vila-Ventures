import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { ProductCard } from "@/features/products/components/product-card";
import { cn } from "@/lib/utils";
import type { Category, Product } from "@/payload-types";

interface ShopProductsSectionProps {
	products: Product[];
	categories: Pick<Category, "id" | "slug" | "title">[];
	activeCategorySlug?: string;
}

export const ShopProductsSection = ({
	products,
	categories,
	activeCategorySlug,
}: ShopProductsSectionProps) => {
	const activeFilter = activeCategorySlug ?? "all";
	const filters = [
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
					Boolean(category.title),
			)
			.map((category) => ({
				href: `/shop?category=${category.slug}`,
				label: category.title as string,
				slug: category.slug as string,
			})),
	];

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
								}),
							)}
							key={filter.slug}
							href={filter.href}
						>
							{filter.label}
						</Link>
					))}
				</div>

				<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};
