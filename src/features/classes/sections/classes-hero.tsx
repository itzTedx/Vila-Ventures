import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const ClassesHero = () => {
	return (
		<section className="pt-28 pb-14 lg:pt-36 lg:pb-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					<Badge
						className="bg-card text-muted-foreground!"
						render={<span />}
						variant="secondary"
					>
						Yoga Classes in Abu Dhabi
					</Badge>
					<div className="col-span-1 md:col-span-3">
						<h1 className="max-w-3xl text-balance font-display text-4xl text-primary uppercase leading-tight sm:text-5xl lg:text-6xl">
							Classes designed for real bodies, real life, and real connection
						</h1>
						<p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed lg:mt-8 lg:text-xl">
							Whether you're stepping onto a mat for the first time or deepening
							a practice you've carried for years - there's a place for you
							here. Every session is guided by Vila in Abu Dhabi, built around
							presence over perfection.
						</p>
					</div>
				</div>

				<div className="relative mt-10 aspect-video overflow-hidden rounded-xl lg:mt-16 lg:aspect-21/9">
					<Image
						alt="Yoga class in session at Vila Ventures studio in Abu Dhabi with warm natural lighting"
						className="object-cover"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 90vw"
						src="/images/hero-yoga.webp"
					/>
				</div>
			</div>
		</section>
	);
};
