"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

import { FEEDBACKS } from "../constants";

export const FeedbackSection = () => {
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		if (!carouselApi) return;

		const onSelect = () => {
			setSelectedIndex(carouselApi.selectedScrollSnap());
		};

		onSelect();
		carouselApi.on("select", onSelect);
		carouselApi.on("reInit", onSelect);

		return () => {
			carouselApi.off("select", onSelect);
			carouselApi.off("reInit", onSelect);
		};
	}, [carouselApi]);

	return (
		<section
			className="bg-radial-[50%_100%_at_50%_-40%] from-primary/40 to-white md:bg-radial-[50%_80%_at_50%_100%]"
			id="feedback"
		>
			<div className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-24">
				<Carousel
					className="w-full"
					opts={{
						align: "start",
					}}
					setApi={setCarouselApi}
				>
					<div className="mb-12 flex items-center justify-between">
						<h2 className="max-w-xs font-display text-4xl">
							A Community Rooted in Joy
						</h2>
						<div className="flex items-center gap-2">
							<CarouselPrevious className="static translate-y-0" />
							<CarouselNext className="static translate-y-0" />
						</div>
					</div>
					<div className="relative flex flex-col-reverse md:flex-row">
						<div className="inset-y-0 right-16 z-10 space-y-4 p-4 md:absolute md:w-1/2 md:max-w-md">
							<h3 className="text-3xl">Leave us a review too</h3>
							<Separator className="bg-primary" />
							<p className="text-lg text-muted-foreground">
								Did you feel good about us? Share your experience and leave us a
								review on Google.
							</p>
							<Button
								className="w-full bg-transparent"
								size="lg"
								variant="outline"
							>
								Write us a review on Google
							</Button>
						</div>
						<div className="md:mask-r-from-80% md:mask-r-to-95%">
							<CarouselContent className="-ml-2 md:-ml-20">
								{FEEDBACKS.map((feedback, index) => (
									<CarouselItem
										className="pl-2 md:basis-1/2 md:pl-20"
										key={`feedback-item-${feedback.id}`}
									>
										<div
											className={`p-1 transition-[filter,opacity] duration-300 ${
												index === selectedIndex + 1
													? "scale-90 opacity-30 blur-xs"
													: ""
											}`}
										>
											<blockquote className="text-lg">
												{feedback.content}
											</blockquote>

											<div className="mt-6 flex items-center gap-4">
												<div className="size-12 rounded-full bg-muted" />
												<div>
													<h3 className="font-display text-lg">
														{feedback.author}
													</h3>
													<p className="text-muted-foreground text-sm">
														{feedback.role}
													</p>
												</div>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	);
};
