import Image from "next/image";

import { NumberCounter } from "@/components/common/number-counter";
import { Badge } from "@/components/ui/badge";

import { WHY_US_ITEMS } from "../constants";

export const WhyChooseSection = () => {
	return (
		<section className="container mx-auto py-14">
			<div className="grid grid-cols-3 gap-4">
				<Badge className="text-muted-foreground!" render={<h2 />}>
					Why Choose Us
				</Badge>
				<p className="col-span-2 font-medium text-5xl text-muted-foreground leading-snug">
					<span className="text-foreground">
						Real experiences that nurture your mind,
					</span>{" "}
					body & creativity, rooted in joy and mindful living.
				</p>
			</div>

			<div className="mt-20 grid grid-cols-4 gap-4">
				<div className="relative aspect-10/16 h-full overflow-hidden rounded-lg">
					<Image
						alt="Why Choose Us"
						className="object-cover"
						fill
						src="/images/why-us.webp"
					/>
				</div>
				<div className="col-span-2 col-start-3 flex h-full flex-col gap-12">
					<p className="indent-12 font-medium text-muted-foreground text-xl leading-relaxed">
						<span className="text-foreground">
							No pressure, no perfection just presence.
						</span>{" "}
						At Vila Ventures, every class, product, and experience is
						thoughtfully created to help you slow down, reconnect, and feel more
						like yourself again.
					</p>
					<div className="grid flex-1 grid-cols-2 gap-4">
						{WHY_US_ITEMS.map((item) => (
							<div className="group flex flex-col" key={item.id}>
								<div className="flex justify-between gap-3 rounded-lg bg-card px-6 py-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-card">
									<h3 className="font-semibold text-2xl">
										<NumberCounter
											suffix={item.count.suffix}
											value={item.count.value}
										/>
									</h3>

									<span className="text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted/30">
										{item.id}
									</span>
								</div>
								<div className="mt-2 flex flex-1 flex-col justify-between rounded-lg bg-card p-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-card">
									<h4 className="ml-auto max-w-3xs text-end font-semibold text-3xl">
										{item.title}
									</h4>
									<p className="text-muted-foreground text-xl transition-colors duration-300 group-hover:text-muted/80">
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
