"use client";
import React from "react";

import Link from "next/link";

import AutoScroll from "embla-carousel-auto-scroll";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import type { Media, Product } from "@/payload-types";

import { GridTileImage } from "../Grid/tile";

export const CarouselClient: React.FC<{ products: Product[] }> = async ({
	products,
}) => {
	if (!products?.length) return null;

	// Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
	const carouselProducts = [...products, ...products, ...products];

	return (
		<Carousel
			className="w-full"
			opts={{ align: "start", loop: true }}
			plugins={[
				AutoScroll({
					playOnInit: true,
					speed: 1,
					stopOnInteraction: false,
					stopOnMouseEnter: true,
				}),
			]}
		>
			<CarouselContent>
				{carouselProducts.map((product) => (
					<CarouselItem
						className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
						key={`${product.slug}-${product.id}`}
					>
						<Link
							className="relative h-full w-full"
							href={`/shop/${product.slug}`}
						>
							<GridTileImage
								label={{
									amount: product.priceInUSD!,
									title: product.title,
								}}
								media={product.meta?.image as Media}
							/>
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};
