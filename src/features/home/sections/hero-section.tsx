import Image from "next/image";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
	return (
		<section className="relative min-h-screen w-full bg-primary">
			<div className="container relative z-10 mx-auto h-full py-20 lg:py-28">
				<div className="flex h-full max-w-full flex-col justify-between sm:max-w-xl lg:max-w-3xl">
					<div className="py-8 lg:py-16">
						<Badge>Rooted in Joy. Designed for Balance.</Badge>
						<h1 className="font-display text-3xl text-card tracking-tight sm:text-4xl lg:text-6xl">
							Yoga Classes & Mindful Lifestyle Products in UAE
						</h1>
						<p className="hero-description my-6 text-card text-lg leading-snug sm:text-xl lg:my-8 lg:text-2xl">
							Discover mindful yoga classes, creative lifestyle products, and a
							space where movement, design, and joy come together - with Vila.
						</p>
						<div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
							<Button className="font-semibold" size="lg">
								Book a class <ArrowRightIcon data-icon="inline-end" />
							</Button>
							<Button size="lg" variant="secondary">
								Shop Products
							</Button>
						</div>
					</div>
					<div className="max-w-full rounded-lg border border-card/20 bg-card/30 supports-backdrop-filter:bg-card/20 sm:max-w-sm">
						<div className="flex gap-3 p-3 text-card">
							<div className="aspect-4/3 size-full rounded-md bg-card/40" />
							<div>
								<h2 className="font-semibold text-lg sm:text-xl">
									Virtual & Physical Yoga
								</h2>
								<p className="mt-1.5 text-sm tracking-wide">
									Classes for women, kids, and corporate - plus thoughtfully
									designed yoga mats, journals, and lifestyle essentials.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap justify-between gap-3 bg-card/20 p-3 text-card">
							<div className="flex items-center gap-3">
								<div className="aspect-square size-10 rounded-md bg-card/40" />
								<div className="shrink-0">
									<h3 className="font-semibold text-sm">Talk with Vila</h3>
									<p className="font-medium text-muted/80 text-xs tracking-wide">
										INSTRUCTOR
									</p>
								</div>
							</div>
							<Button variant="secondary">Book 15-min call</Button>
						</div>
					</div>
				</div>
			</div>
			<Image
				alt="Woman meditating in yoga pose against an orange backdrop"
				blurDataURL="data:image/webp;base64,UklGRvAAAABXRUJQVlA4WAoAAAAAAAAATwAANAAAVlA4IHwAAABwBQCdASpQADUAP/3+/3+/uza7pmmD8D+JZADUUCqqt7vGvyyxjYJgz9l5RJYAYYfsHv2wAP6XF8YTH9X8CStWbWm/GfBNHomOFRej/2dL4ESvccsb5CF1FDNo/Xun35tVGjcFYkQtaU8PidFrN+65BJyuvr4NElPazAAAUFNBSU4AAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAAOUGJlVwEQAAYAAAAAAAA="
				className="object-cover"
				fill
				placeholder="blur"
				priority
				quality={100}
				sizes="100vw"
				src="/images/hero-yoga.webp"
			/>
		</section>
	);
};
