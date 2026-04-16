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
						<h1 className="max-w-3xl text-balance font-display text-4xl text-primary uppercase leading-snug sm:text-5xl lg:text-6xl">
							Where mindfulness meets design — and joy becomes a practice
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed lg:mt-8 lg:text-xl">
							Vila Ventures began as a personal practice and grew into a
							community. We blend yoga, creativity, and thoughtful design to
							help people in the UAE reconnect with what matters.
						</p>
					</div>
				</div>

				<div className="relative mt-10 aspect-video overflow-hidden rounded-xl lg:mt-16 lg:aspect-21/9">
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
