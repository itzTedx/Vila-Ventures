import { Badge } from "@/components/ui/badge";

export const ShopHero = () => {
	return (
		<section className="pt-28 pb-14 lg:pt-36 lg:pb-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					<Badge
						className="bg-card text-muted-foreground!"
						render={<span />}
						variant="secondary"
					>
						Vila Ventures Shop
					</Badge>
					<div className="col-span-1 md:col-span-3">
						<h1 className="max-w-3xl text-balance font-display text-4xl text-primary uppercase leading-snug sm:text-5xl lg:text-6xl">
							Objects made for the way you actually practice
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed lg:mt-8 lg:text-xl">
							Every piece in our collection was designed alongside our yoga
							practice — tested in real classes, refined by real feedback, and
							made from materials we'd choose for ourselves. Nothing here
							exists just to fill a shelf.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
