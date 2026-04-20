import Image from "next/image";

import { Badge } from "@/components/ui/badge";

export const ClassesHero = () => {
	return (
		<section className="bg-primary pt-28 pb-14 lg:pt-36 lg:pb-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-5">
					<Badge className="bg-background" render={<span />}>
						Yoga Classes in Abu Dhabi
					</Badge>

					<h1 className="col-span-2 max-w-3xl text-balance font-display text-4xl text-card uppercase leading-tight sm:text-4xl lg:text-5xl">
						Classes designed for real bodies, real life, and real connection
					</h1>
					<p className="col-span-2 text-lg text-muted leading-relaxed lg:text-2xl">
						Whether you're stepping onto a mat for the first time or deepening a
						practice you've carried for years - there's a place for you here.
						Every session is guided by Vila in Abu Dhabi, built around presence
						over perfection.
					</p>
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
