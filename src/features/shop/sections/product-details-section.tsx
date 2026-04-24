import { RichText } from "@/components/rich-text";
import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import type { Product } from "@/payload-types";

import { getProductDescription } from "../utils/get-product-description";

interface ProductDetailsSectionProps {
	product: Product;
}

export const ProductDetailsSection = ({
	product,
}: ProductDetailsSectionProps) => {
	const detailItems = product.detailsSection?.items ?? [];
	const productDescription = getProductDescription(product);
	const primaryCategory =
		product.categories?.[0] && typeof product.categories[0] === "object"
			? product.categories[0].title
			: "wellness product";
	const introCopy = `Explore detailed information about ${product.title}, including key features, materials, usage guidance, and care instructions. This ${primaryCategory.toLowerCase()} is designed to support your daily routine with quality and intention.`;

	if (!detailItems.length) {
		return null;
	}

	const defaultAccordionItem = detailItems[0]?.id ?? undefined;

	return (
		<section className="bg-card">
			<div className="container max-w-7xl py-14 lg:py-28">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Badge
						className="bg-card text-muted-foreground!"
						render={<h2 />}
						variant="secondary"
					>
						{product.title} Details
					</Badge>
					<div className="col-span-1 md:col-span-2">
						<h3 className="font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl lg:text-5xl">
							<span className="text-foreground">{product.title}</span> product
							details, specifications, and care information.
						</h3>
						<p className="mt-6 max-w-4xl text-muted-foreground text-sm leading-relaxed sm:text-base">
							{introCopy} {productDescription}
						</p>
					</div>
				</div>

				<div className="mt-10 lg:mt-20">
					<Accordion
						className="w-full space-y-3"
						defaultValue={defaultAccordionItem ? [defaultAccordionItem] : []}
						multiple
					>
						{detailItems.map((item) => (
							<AccordionItem
								className="rounded-lg border-b-0 bg-muted px-6"
								key={item.id ?? item.title}
								value={item.id ?? item.title}
							>
								<AccordionTrigger>{item.title}</AccordionTrigger>
								<AccordionPanel>
									{item.content ? (
										<RichText
											className="prose-lg dark:prose-invert max-w-none"
											data={item.content}
											enableGutter={false}
										/>
									) : null}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};
