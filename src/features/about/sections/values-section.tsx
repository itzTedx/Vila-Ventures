"use client";

import {
	FlowerLotusIcon,
	HandHeartIcon,
	PaintBrushIcon,
	UsersThreeIcon,
} from "@phosphor-icons/react";

import { Badge } from "@/components/ui/badge";

import { VALUES } from "../constants";

const VALUE_ICONS = [
	FlowerLotusIcon,
	PaintBrushIcon,
	UsersThreeIcon,
	HandHeartIcon,
] as const;

export const ValuesSection = () => {
	return (
		<section className="bg-card" id="our-values">
			<div className="container mx-auto py-14 lg:py-28">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Badge
						className="bg-background text-muted-foreground!"
						render={<h2 />}
						variant="secondary"
					>
						What We Stand For
					</Badge>
					<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
						<span className="text-foreground">
							Four principles that shape every class,
						</span>{" "}
						every product, and every experience we create.
					</p>
				</div>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
					{VALUES.map((value, index) => {
						const Icon = VALUE_ICONS[index];
						return (
							<div className="group flex flex-col" key={value.id}>
								<div className="flex items-center justify-between gap-3 rounded-lg bg-background px-6 py-4 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
									<Icon className="size-6" />
									<span className="text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted/30">
										{value.id}
									</span>
								</div>
								<div className="mt-2 flex flex-1 flex-col justify-between gap-4 rounded-lg bg-background p-6 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
									<h3 className="font-semibold text-xl lg:text-2xl">
										{value.title}
									</h3>
									<p className="text-muted-foreground transition-colors duration-300 group-hover:text-muted/80 lg:text-lg">
										{value.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-12 rounded-xl border bg-background p-8 text-center lg:mt-20 lg:p-12">
					<p className="mx-auto max-w-3xl text-balance font-medium text-2xl text-primary leading-snug lg:text-4xl">
						"Rooted in Joy" isn't just a tagline, it's how we approach every
						mat, every design, every moment we share with you.
					</p>
				</div>
			</div>
		</section>
	);
};
