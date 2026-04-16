"use client";

import {
	HandHeartIcon,
	PackageIcon,
	ShieldCheckIcon,
	TruckIcon,
} from "@phosphor-icons/react";

import { Badge } from "@/components/ui/badge";

import { TRUST_SIGNALS } from "../constants";

const TRUST_ICONS = [
	TruckIcon,
	ShieldCheckIcon,
	HandHeartIcon,
	PackageIcon,
] as const;

export const TrustSection = () => {
	return (
		<section className="container mx-auto py-14 lg:py-28" id="why-shop-with-us">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<Badge
					className="bg-card text-muted-foreground!"
					render={<h2 />}
					variant="secondary"
				>
					Why Shop With Us
				</Badge>
				<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
					<span className="text-foreground">
						We stand behind everything we make,
					</span>{" "}
					from the materials we choose to the people who answer your emails.
				</p>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
				{TRUST_SIGNALS.map((signal, index) => {
					const Icon = TRUST_ICONS[index];
					return (
						<div className="group flex flex-col" key={signal.id}>
							<div className="flex items-center justify-between gap-3 rounded-lg bg-card px-6 py-4 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
								<Icon className="size-6" />
								<span className="text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted/30">
									{signal.id}
								</span>
							</div>
							<div className="mt-2 flex flex-1 flex-col justify-between gap-4 rounded-lg bg-card p-6 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
								<h3 className="font-semibold text-xl lg:text-2xl">
									{signal.title}
								</h3>
								<p className="text-muted-foreground transition-colors duration-300 group-hover:text-muted/80 lg:text-lg">
									{signal.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
