import Image from "next/image";

import { NumberCounter } from "@/components/common/number-counter";
import { Badge } from "@/components/ui/badge";

import { WHY_US_ITEMS } from "../constants";

export const WhyChooseSection = () => {
	return (
		<section className="container mx-auto py-14" id="why-vila">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<Badge
					className="bg-card text-muted-foreground!"
					render={<h2 />}
					variant="secondary"
				>
					Why Choose Us
				</Badge>
				<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
					<span className="text-foreground">
						Real experiences that nurture your mind,
					</span>{" "}
					body & creativity, rooted in joy and mindful living.
				</p>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
				<div className="relative aspect-video overflow-hidden rounded-lg md:aspect-10/16 md:h-full">
					<Image
						alt="Yoga instructor demonstrating a mindful pose at Vila Ventures studio in Abu Dhabi"
						className="object-cover"
						fill
						src="/images/why-us.webp"
					/>
				</div>
				<div className="col-span-1 flex h-full flex-col gap-12 md:col-span-1 lg:col-span-2 lg:col-start-3">
					<p className="indent-0 font-medium text-lg text-muted-foreground leading-relaxed lg:indent-12 lg:text-xl">
						<span className="text-foreground">
							No pressure, no perfection just presence.
						</span>{" "}
						At Vila Ventures, every class, product, and experience is
						thoughtfully created to help you slow down, reconnect, and feel more
						like yourself again.
					</p>
					<div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
						{WHY_US_ITEMS.map((item) => (
							<div className="group flex flex-col" key={item.id}>
							<div className="flex justify-between gap-3 rounded-lg bg-card px-6 py-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-card">
								<p className="font-semibold text-2xl">
									<NumberCounter
										suffix={item.count.suffix}
										value={item.count.value}
									/>
								</p>

								<span className="text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted/30">
									{item.id}
								</span>
							</div>
							<div className="mt-2 flex flex-1 flex-col justify-between rounded-lg bg-card p-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-card">
								<h3 className="ml-auto max-w-3xs text-end font-semibold text-2xl lg:text-3xl">
									{item.title}
								</h3>
									<p className="text-lg text-muted-foreground transition-colors duration-300 group-hover:text-muted/80 lg:text-xl">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
