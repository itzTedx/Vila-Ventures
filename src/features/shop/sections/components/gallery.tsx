"use client";

import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";

import Autoplay from "embla-carousel-autoplay";
import { domAnimation, LazyMotion, m, useReducedMotion } from "motion/react";

import { Media } from "@/components/media";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { useIsMobile } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import type { Media as MediaType, Product } from "@/payload-types";

function GallerySlide({
	priority,
	resource,
	fill = false,
}: {
	resource: number | MediaType;
	priority?: boolean;
	fill?: boolean;
}) {
	const alt =
		typeof resource === "object" && resource !== null
			? (resource.alt ?? undefined)
			: undefined;

	return (
		<Media
			alt={alt}
			fill={fill}
			imgClassName={cn("rounded-xl", fill && "object-cover")}
			priority={priority}
			resource={resource}
			size="(max-width: 1024px) 100vw, 50vw"
		/>
	);
}

function MobileProductCarousel({
	data,
}: {
	data: NonNullable<Product["gallery"]>;
}) {
	const [api, setApi] = useState<CarouselApi>();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [highlightX, setHighlightX] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);
	const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const prefersReducedMotion = useReducedMotion();

	const updateHighlightPosition = useCallback(() => {
		const track = trackRef.current;
		const dot = dotRefs.current[selectedIndex];
		if (!track || !dot) return;
		setHighlightX(dot.offsetLeft);
	}, [selectedIndex]);

	useLayoutEffect(() => {
		updateHighlightPosition();
	}, [updateHighlightPosition]);

	useEffect(() => {
		const onResize = () => updateHighlightPosition();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [updateHighlightPosition]);

	useEffect(() => {
		if (!api) return;

		const onSelect = () => {
			setSelectedIndex(api.selectedScrollSnap());
		};

		onSelect();
		api.on("select", onSelect);
		api.on("reInit", onSelect);

		return () => {
			api.off("select", onSelect);
			api.off("reInit", onSelect);
		};
	}, [api]);

	return (
		<Carousel
			className="w-full"
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 2000,
				}),
			]}
			setApi={setApi}
		>
			<CarouselContent className="-ml-3">
				{data.map((image, index) => (
					<CarouselItem className="basis-full pl-3" key={image.id}>
						<div className="relative aspect-square">
							<GallerySlide
								fill
								priority={index === 0}
								resource={image.image}
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious
				className="top-1/2 left-2 z-10 -translate-y-1/2 border-border/80 bg-background/90 shadow-sm backdrop-blur-sm"
				size="icon-sm"
				variant="outline"
			/>
			<CarouselNext
				className="top-1/2 right-2 z-10 -translate-y-1/2 border-border/80 bg-background/90 shadow-sm backdrop-blur-sm"
				size="icon-sm"
				variant="outline"
			/>
			<LazyMotion features={domAnimation}>
				<nav
					aria-label="Gallery images"
					className="absolute bottom-2 left-1/2 -translate-x-1/2"
				>
					<div
						className="relative inline-flex items-center gap-2"
						ref={trackRef}
					>
						<m.div
							animate={{ x: highlightX }}
							aria-hidden
							className="pointer-events-none absolute top-1/2 left-0 z-0 size-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_color-mix(in_oklch,var(--primary)_48%,transparent)]"
							transition={
								prefersReducedMotion
									? { duration: 0 }
									: { type: "spring", stiffness: 380, damping: 32, mass: 0.65 }
							}
						/>
						{data.map((image, index) => {
							const selected = selectedIndex === index;
							return (
								<m.button
									animate={{ scale: selected ? 1.12 : 1 }}
									aria-current={selected ? "true" : undefined}
									aria-label={`Go to image ${index + 1} of ${data.length}`}
									className={cn(
										"relative z-10 size-2 shrink-0 rounded-full ring-1 ring-inset backdrop-blur-sm",
										"focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
										selected
											? "bg-transparent ring-2 ring-primary"
											: "bg-card/25 ring-border/50 hover:bg-card/45 hover:ring-border/70"
									)}
									key={image.id}
									onClick={() => api?.scrollTo(index)}
									ref={(el) => {
										dotRefs.current[index] = el;
									}}
									transition={
										prefersReducedMotion
											? { duration: 0 }
											: {
													type: "spring",
													stiffness: 480,
													damping: 28,
													mass: 0.5,
												}
									}
									type="button"
									whileHover={
										prefersReducedMotion || selected
											? undefined
											: { scale: 1.12 }
									}
									whileTap={
										prefersReducedMotion
											? undefined
											: { scale: selected ? 1.05 : 0.88 }
									}
								/>
							);
						})}
					</div>
				</nav>
			</LazyMotion>
		</Carousel>
	);
}

export const ProductGallery = ({ data }: { data: Product["gallery"] }) => {
	const isMobile = useIsMobile();
	if (!data?.length) return null;

	if (isMobile) {
		if (data.length === 1) {
			const resource = data[0]!.image;
			return (
				<div className="w-full">
					<GallerySlide priority resource={resource} />
				</div>
			);
		}

		return <MobileProductCarousel data={data} />;
	}

	return (
		<div className="hidden flex-col gap-2 md:flex">
			{data.map((image) => (
				<GallerySlide key={image.id} priority resource={image.image} />
			))}
		</div>
	);
};
