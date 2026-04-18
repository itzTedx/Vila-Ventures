import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import type { ShopProduct } from "../constants";

interface ProductDetailsSectionProps {
	product: ShopProduct;
}

export const ProductDetailsSection = ({
	product,
}: ProductDetailsSectionProps) => {
	const detailItems = [
		{
			id: "material",
			title: "Materials",
			content: product.details.material,
		},
		{
			id: "care",
			title: "Care Instructions",
			content: product.details.care,
		},
		...("dimensions" in product.details
			? [
					{
						id: "dimensions",
						title: "Dimensions",
						content: product.details.dimensions as string,
					},
				]
			: []),
		...("sizing" in product.details
			? [
					{
						id: "sizing",
						title: "Sizing",
						content: product.details.sizing as string,
					},
				]
			: []),
	];

	return (
		<section className="bg-card">
			<div className="container mx-auto py-14 lg:py-28">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Badge
						className="bg-background text-muted-foreground!"
						render={<h2 />}
						variant="secondary"
					>
						Product Details
					</Badge>
					<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
						<span className="text-foreground">The details that matter,</span>{" "}
						because you should know exactly what you're getting.
					</p>
				</div>

				<div className="mx-auto mt-10 max-w-2xl lg:mt-20">
					<Accordion className="w-full space-y-3" defaultValue={["material"]}>
						{detailItems.map((item) => (
							<AccordionItem
								className="rounded-lg border-b-0 bg-background px-4"
								key={item.id}
								value={item.id}
							>
								<AccordionTrigger>{item.title}</AccordionTrigger>
								<AccordionPanel>{item.content}</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};
