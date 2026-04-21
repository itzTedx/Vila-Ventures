import { Badge } from "@/components/ui/badge";

export const BlogHero = () => {
	return (
		<section className="pt-28 pb-14 lg:pt-36 lg:pb-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					<Badge
						className="bg-card text-muted-foreground!"
						render={<span />}
						variant="secondary"
					>
						Yoga & Wellness Blog
					</Badge>
					<div className="col-span-1 max-w-3xl md:col-span-3">
						<h1 className="text-balance font-display text-4xl text-primary uppercase leading-[1.2] sm:text-5xl lg:text-6xl">
							Stories, tips & guides for mindful living
						</h1>
						<p className="mt-4 text-lg text-muted-foreground leading-relaxed lg:text-xl">
							Practical insights on yoga, wellness, and building a practice that
							fits your real life written from experience, not textbooks.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
