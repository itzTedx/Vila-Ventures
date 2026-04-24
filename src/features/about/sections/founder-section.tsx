import { CheckIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { FounderStoryVideo } from "../components/founder-story-video";
import { CREDENTIALS } from "../constants";

export const FounderSection = () => {
	return (
		<section
			className="container mx-auto max-w-7xl py-14 lg:py-28"
			id="meet-vila"
		>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
				<div className="relative aspect-9/16 overflow-hidden rounded-xl lg:col-span-2">
					<FounderStoryVideo src="/videos/founder-story.webm" />
				</div>

				<div className="flex flex-col justify-between gap-8 lg:col-span-3">
					<div>
						<Badge variant="secondary">Meet Vila</Badge>
						<h2 className="mt-3 mb-6 text-balance font-display font-semibold text-3xl text-primary uppercase leading-snug sm:text-4xl lg:text-5xl">
							The Founder - Vila
						</h2>

						<blockquote className="border-primary/40 border-l-2 pl-6">
							<p className="font-display text-primary text-xl leading-snug lg:text-2xl">
								"Now based in UAE, she continues to share both - creating a
								space where people can experience yoga, and take a piece of that
								feeling into everyday life."
							</p>
						</blockquote>
					</div>
					<div className="space-y-9">
						<div className="flex flex-col gap-5 text-lg text-muted-foreground leading-relaxed">
							<p className="font-medium">
								Vila's journey began with yoga. Through consistent practice, she
								learned to slow down, become more present, and create space for
								what truly mattered.
							</p>
							<p>
								In that space, her creativity became clearer and more
								intentional. Design was no longer only visual; it became an
								expression of feeling, thought, and purpose - from t-shirts to
								yoga mats and yoga cards.
							</p>
							<p>
								Today, yoga and creativity move together in everything she does,
								each one strengthening the other.
							</p>
						</div>

						<Card className="w-fit bg-primary text-card">
							<CardHeader className="px-9">
								<h3 className="font-semibold text-lg">
									Training & Credentials
								</h3>
							</CardHeader>
							<CardContent className="px-9">
								<ul className="flex flex-col gap-2.5">
									{CREDENTIALS.map((credential) => (
										<li
											className="flex items-center gap-2.5 text-card/90"
											key={credential}
										>
											<CheckIcon className="shrink-0" weight="bold" />
											<span>{credential}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
