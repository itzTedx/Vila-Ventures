import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ProductsGrid } from "../components/products-grid";

export const ProductsSection = () => {
	return (
		<section className="container mx-auto py-14 text-center" id="products">
			<div className="grid grid-cols-4 gap-6 text-start">
				<Badge className="bg-card text-muted-foreground!" variant="secondary">
					Products
				</Badge>
				<div className="col-span-3 grid grid-cols-2 gap-6">
					<h2 className="font-semibold text-4xl text-muted-foreground">
						<span className="text-foreground">Thoughtfully Designed</span> for
						Everyday Joy
					</h2>
					<div>
						<p className="mb-4 text-lg text-muted-foreground leading-snug">
							Flexible, guided, and designed for real life - practice from
							anywhere, at your own pace.
						</p>

						<Button size="lg">Shop the Collection</Button>
					</div>
				</div>
			</div>

			<ProductsGrid />

			<Button size="lg">Shop the Collection</Button>
		</section>
	);
};
