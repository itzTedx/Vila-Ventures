"use client";

import {
	CalendarCheckIcon,
	FlowerLotusIcon,
	SneakerMoveIcon,
	SunHorizonIcon,
} from "@phosphor-icons/react";

import { Badge } from "@/components/ui/badge";

import { EXPECTATIONS } from "../constants";

const STEP_ICONS = [
	CalendarCheckIcon,
	SneakerMoveIcon,
	FlowerLotusIcon,
	SunHorizonIcon,
] as const;

export const ExperienceSection = () => {
	return (
		<section className="container mx-auto pb-14 lg:pb-28" id="what-to-expect">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-5">
				<Badge
					className="bg-card text-muted-foreground!"
					render={<h2 />}
					variant="secondary"
				>
					What to Expect
				</Badge>
				<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-4 lg:text-5xl">
					<span className="text-foreground">
						Your first class should feel welcoming,
					</span>{" "}
					not intimidating. Here's how it works from booking to breathing.
				</p>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
				{EXPECTATIONS.map((step, index) => {
					const Icon = STEP_ICONS[index];
					return (
						<div className="group flex flex-col" key={step.id}>
							<div className="flex items-center justify-between gap-3 rounded-lg bg-card px-6 py-4 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
								<Icon className="size-6" />
								<span className="text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted/30">
									{step.id}
								</span>
							</div>
							<div className="mt-2 flex flex-1 flex-col justify-between gap-4 rounded-lg bg-card p-6 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
								<h3 className="font-semibold text-xl lg:text-2xl">
									{step.title}
								</h3>
								<p className="text-muted-foreground transition-colors duration-300 group-hover:text-muted/80 lg:text-lg">
									{step.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
