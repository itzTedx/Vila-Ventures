import Image from "next/image";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
	return (
		<section className="relative h-screen w-full bg-primary">
			<div className="container relative z-10 mx-auto h-full py-28">
				<div className="flex h-full max-w-3xl flex-col justify-between">
					<div className="py-16">
						<Badge>Rooted in Joy. Designed for Balance.</Badge>
						<h1 className="font-display text-6xl text-card tracking-tight">
							Yoga Classes & Mindful Lifestyle Products in UAE
						</h1>
						<p className="my-8 text-2xl text-card leading-snug">
							Discover mindful yoga classes, creative lifestyle products, and a
							space where movement, design, and joy come together - with Vila.
						</p>
						<div className="flex items-center gap-3">
							<Button className="font-semibold" size="lg">
								Book a class <ArrowRightIcon data-icon="inline-end" />
							</Button>
							<Button size="lg" variant="secondary">
								Shop Products
							</Button>
						</div>
					</div>
					<div className="max-w-sm rounded-lg border border-card/20 bg-card/30 supports-backdrop-filter:bg-card/20">
						<div className="flex gap-3 p-3 text-card">
							<div className="aspect-4/3 size-full rounded-md bg-card/40" />
							<div className="">
								<h2 className="font-semibold text-xl">
									Virtual & Physical Yoga
								</h2>
								<p className="mt-1.5 text-sm tracking-wide">
									Classes for women, kids, and corporate - plus thoughtfully
									designed yoga mats, journals, and lifestyle essentials.
								</p>
							</div>
						</div>
						<div className="flex justify-between gap-3 bg-card/20 p-3 text-card">
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
