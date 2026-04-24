import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const AboutHero = () => {
	return (
		<section className="pt-28 pb-14 lg:pt-36 lg:pb-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					<Badge
						className="bg-card text-muted-foreground!"
						render={<span />}
						variant="secondary"
					>
						About Vila Ventures
					</Badge>
					<div className="col-span-1 md:col-span-3">
						<h1 className="text-balance font-display text-4xl text-primary uppercase leading-[1.1] sm:text-5xl lg:text-6xl">
							From yoga practice to purposeful design
						</h1>
						<p className="mt-4 text-balance text-lg text-muted-foreground leading-relaxed lg:text-xl">
							Vila Ventures is built on one lived journey: yoga creating space,
							and that space giving rise to clearer, more intentional
							creativity. Today, Vila shares both through mindful classes and
							thoughtfully made products from the UAE.
						</p>
					</div>
				</div>

				<div className="relative mt-6 aspect-video overflow-hidden rounded-xl md:mt-10 lg:aspect-21/9">
					<Image
						alt="Vila Ventures yoga studio space in Abu Dhabi with warm natural light and mindful design elements"
						className="object-cover"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 90vw"
						src="/images/about-hero.webp"
					/>
				</div>
			</div>
		</section>
	);
};
