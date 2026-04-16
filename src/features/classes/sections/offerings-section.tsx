import Image from "next/image";

import { ProgressiveBlur } from "@/components/common/progressive-blur";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { CLASS_OFFERINGS } from "../constants";

export const OfferingsSection = () => {
	return (
		<section className="bg-card" id="offerings">
			<div className="container mx-auto py-14 lg:py-28">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Badge
						className="bg-background text-muted-foreground!"
						render={<h2 />}
						variant="secondary"
					>
						Our Classes
					</Badge>
					<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
						<span className="text-foreground">Six ways to practice,</span> each
						one shaped around who shows up and what they need that day.
					</p>
				</div>

				<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20">
					{CLASS_OFFERINGS.map((item) => (
						<div className="group" key={item.id}>
							<div className="mb-2 flex items-center justify-between gap-3 rounded-lg bg-background p-6">
								<div>
									<h3 className="font-bold text-xl">{item.name}</h3>
									<p className="mt-0.5 text-muted-foreground text-sm">
										{item.tagline}
									</p>
								</div>
								<Button
									className="shrink-0 bg-background"
									data-cal-link="vilaventures/discovery"
									variant="outline"
								>
									Book a Session
								</Button>
							</div>
							<div className="rounded-[calc(var(--radius)+4px)] bg-background p-1">
								<div className="relative aspect-4/3 size-full overflow-hidden rounded-lg">
									<div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-3 p-6 text-card">
										<p className="font-medium text-lg tracking-wide">
											{item.description}
										</p>
										<div className="flex flex-wrap gap-x-4 gap-y-1 text-card/70 text-sm">
											<span>{item.format}</span>
											<span className="hidden sm:inline">·</span>
											<span>{item.bestFor}</span>
										</div>
									</div>
									<div className="absolute inset-x-0 bottom-0 z-10 h-2/3 bg-linear-to-t from-black/60 to-transparent" />
									<ProgressiveBlur
										className="[--height:50%]"
										position="bottom"
									/>
									<Image
										alt={`${item.name} class at Vila Ventures in Abu Dhabi`}
										className="object-cover transition-[scale] duration-300 group-hover:scale-105"
										fill
										sizes="(max-width: 640px) 100vw, 50vw"
										src={item.image}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
