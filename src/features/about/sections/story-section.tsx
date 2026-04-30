import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const StorySection = () => {
	return (
		<section className="bg-card" id="our-story">
			<div className="container grid max-w-6xl grid-cols-1 gap-8 py-14 lg:grid-cols-2 lg:gap-16 lg:py-28">
				<div className="flex flex-col justify-between gap-8">
					<div>
						<Badge variant="secondary">Our Story</Badge>
						<h2 className="mt-3 text-balance font-display font-semibold text-3xl text-primary uppercase leading-snug sm:text-4xl lg:text-5xl">
							It began with yoga, then everything else found its place
						</h2>
					</div>

					<div className="flex flex-col gap-5">
						<p className="font-medium text-lg text-muted-foreground leading-relaxed">
							Becoming a yoga teacher was more than a career move for Vila. It
							shifted how she experienced life - she learned to slow down, be
							more present, and create space for what truly mattered.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							In that space, her creativity deepened. Design had always been
							part of her, but through yoga it began to flow with more clarity
							and intention. Ideas felt natural, and what she made carried more
							feeling, thought, and purpose.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							That expression started simply with t-shirts, then grew into
							products closer to her practice, including yoga mats and yoga
							cards. For Vila, yoga and creativity are no longer separate; they
							move together, each shaping and strengthening the other.
						</p>
					</div>

					<Button
						className="flex w-fit items-center gap-6 pr-2.5 pl-3 text-primary"
						render={<Link href="/contact" />}
						size="lg"
						variant="ghost"
					>
						<span className="font-medium">Now based in UAE</span>
						<div className="flex size-7 items-center justify-center rounded-full bg-primary/10">
							<ArrowUpRightIcon />
						</div>
					</Button>
				</div>

				<div className="relative aspect-3/4 overflow-hidden rounded-xl lg:aspect-auto lg:min-h-full">
					<Image
						alt="Vila practicing yoga in a sunlit Abu Dhabi studio, reflecting the mindful origins of Vila Ventures"
						className="object-cover"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						src="/images/about-story-banner.webp"
					/>
				</div>
			</div>
		</section>
	);
};
