"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import { ProgressiveBlur } from "@/components/common/progressive-blur";
import { Badge } from "@/components/ui/badge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { FEATURED_CAROUSEL_ITEMS } from "../constants";
export const FeaturedCarousel = () => {
	return (
		<Carousel
			className="relative size-full overflow-hidden rounded-lg"
			plugins={[
				Autoplay({
					delay: 3500,
				}),
			]}
		>
			<CarouselContent className="aspect-3/4">
				{FEATURED_CAROUSEL_ITEMS.map(({ id, image, alt, content }) => (
					<CarouselItem className="overflow-hidden" key={id}>
						<div className="relative h-full w-full overflow-hidden rounded-lg">
							<div className="absolute inset-x-0 bottom-0 z-20 p-9 text-card">
								<h3 className="font-display font-semibold text-3xl">
									{content.title}
								</h3>
								<p className="text-lg">{content.description}</p>
							</div>
							<div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-black/50 to-transparent" />
							<div className="absolute inset-x-0 top-0 z-10 h-1/3 bg-linear-to-b from-black/50 to-transparent" />

							<ProgressiveBlur className="[--height:25%]" position="top" />
							<ProgressiveBlur position="bottom" />
							<Image alt={alt} className="object-cover" fill src={image} />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-9">
				<Badge>Rooted in Joy. Designed for Balance</Badge>
				<div className="flex items-center gap-2">
					<CarouselPrevious className="relative left-0 translate-y-0 backdrop-blur-lg" />
					<CarouselNext className="relative right-0 translate-y-0 backdrop-blur-lg" />
				</div>
			</div>
		</Carousel>
	);
};
