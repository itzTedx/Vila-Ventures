import Image from "next/image";

import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";

export const StorySection = () => {
	return (
		<section className="bg-card" id="our-story">
			<div className="container mx-auto grid grid-cols-1 gap-8 py-14 lg:grid-cols-2 lg:gap-16 lg:py-28">
				<div className="flex flex-col justify-between gap-8">
					<div>
						<Badge variant="secondary">Our Story</Badge>
						<h2 className="mt-3 text-balance font-display font-semibold text-3xl text-primary uppercase leading-snug sm:text-4xl lg:text-5xl">
							It started with a mat, a deep breath, and a question
						</h2>
					</div>

					<div className="flex flex-col gap-5">
						<p className="font-medium text-lg text-muted-foreground leading-relaxed">
							Vila Ventures didn't start with a business plan. It started with a
							feeling - the kind you get when you finally stop rushing and let
							yourself just be. For Vila, that moment came on a yoga mat in Abu
							Dhabi, after years of working as a designer.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							The practice changed everything. Not all at once, but slowly - the
							way real change usually happens. Mornings felt different.
							Creativity came easier. There was more space for the things that
							actually mattered.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							The question was simple:{" "}
							<span className="font-medium text-foreground">
								what if everyday objects could carry that same feeling of
								intentionality?
							</span>{" "}
							What if a yoga mat, a journal, or a simple mug could remind you to
							slow down? That's how Vila Ventures was born - at the intersection
							of mindful movement and thoughtful design.
						</p>
					</div>

					<div className="flex items-center gap-2 text-muted-foreground">
						<span className="font-medium">Founded in Abu Dhabi, UAE</span>
						<div className="flex size-7 items-center justify-center rounded-full bg-muted-foreground/20">
							<ArrowUpRightIcon />
						</div>
					</div>
				</div>

				<div className="relative aspect-4/3 overflow-hidden rounded-xl lg:aspect-auto lg:min-h-full">
					<Image
						alt="Vila practicing yoga in a sunlit Abu Dhabi studio, reflecting the mindful origins of Vila Ventures"
						className="object-cover"
						fill
						sizes="(max-width: 1024px) 100vw, 50vw"
						src="/images/about-story.webp"
					/>
				</div>
			</div>
		</section>
	);
};
