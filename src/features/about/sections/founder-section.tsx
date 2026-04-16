import Image from "next/image";

import { CheckIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { CREDENTIALS } from "../constants";

export const FounderSection = () => {
	return (
		<section className="container mx-auto py-14 lg:py-28" id="meet-vila">
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
				<div className="relative aspect-3/4 overflow-hidden rounded-xl lg:col-span-2">
					<Image
						alt="Vila, founder of Vila Ventures — yoga instructor and designer based in Abu Dhabi"
						className="object-cover"
						fill
						sizes="(max-width: 1024px) 100vw, 40vw"
						src="/images/about-vila.webp"
					/>
				</div>

				<div className="flex flex-col justify-between gap-8 lg:col-span-3">
					<div>
						<Badge variant="secondary">Meet Vila</Badge>
						<h2 className="mt-3 text-balance font-display font-semibold text-3xl text-primary uppercase leading-snug sm:text-4xl lg:text-5xl">
							Yoga instructor, designer & the heart behind it all
						</h2>
					</div>

					<blockquote className="border-primary/40 border-l-2 pl-6">
						<p className="font-display text-2xl text-primary leading-snug lg:text-3xl">
							"I don't teach yoga to be perfect at it. I teach it because it
							taught me how to be present — and that changed how I design, how I
							create, how I live."
						</p>
					</blockquote>

					<div className="flex flex-col gap-5">
						<p className="font-medium text-lg text-muted-foreground leading-relaxed">
							Vila is a certified yoga instructor and multidisciplinary designer
							based in Abu Dhabi. With a background that spans product design,
							illustration, and wellness education, she brings a rare
							combination of creativity and calm to everything she does.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Her classes aren't about nailing a pose — they're about finding
							space to breathe, move honestly, and leave feeling a little more
							like yourself. Whether it's a group flow for women, a playful kids
							session, or a corporate workshop, Vila meets every student exactly
							where they are.
						</p>
					</div>

					<Card className="bg-primary text-card">
						<CardHeader>
							<h3 className="font-semibold text-lg">Training & Credentials</h3>
						</CardHeader>
						<CardContent>
							<ul className="flex flex-col gap-2.5">
								{CREDENTIALS.map((credential) => (
									<li
										className="flex items-center gap-2.5 text-card/90"
										key={credential}
									>
										<CheckIcon className="shrink-0" />
										<span>{credential}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};
