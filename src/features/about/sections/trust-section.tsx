"use client";

import { NumberCounter } from "@/components/common/number-counter";
import { Badge } from "@/components/ui/badge";

import { SERVES, TRUST_STATS } from "../constants";

export const TrustSection = () => {
	return (
		<section className="container mx-auto py-14 lg:py-28" id="trust">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<Badge
					className="bg-card text-muted-foreground!"
					render={<h2 />}
					variant="secondary"
				>
					By the Numbers
				</Badge>
				<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
					<span className="text-foreground">
						Real impact from real practice
					</span>{" "}
					— not metrics for the sake of metrics, but milestones that mean
					something.
				</p>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
				{TRUST_STATS.map((stat) => (
					<div className="group flex flex-col" key={stat.id}>
						<div className="flex justify-between gap-3 rounded-lg bg-card px-6 py-4 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
							<p className="font-semibold text-2xl">
								<NumberCounter
									suffix={stat.count.suffix}
									value={stat.count.value}
								/>
							</p>
							<span className="text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted/30">
								{stat.id}
							</span>
						</div>
						<div className="mt-2 flex flex-1 flex-col justify-between gap-3 rounded-lg bg-card p-6 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
							<h3 className="font-semibold text-xl lg:text-2xl">
								{stat.label}
							</h3>
							<p className="text-muted-foreground transition-colors duration-300 group-hover:text-muted/80 lg:text-lg">
								{stat.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-12 lg:mt-20">
				<h3 className="mb-6 font-display font-semibold text-2xl text-primary uppercase lg:text-3xl">
					Who We Serve
				</h3>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{SERVES.map((item) => (
						<div className="rounded-lg border bg-card p-6" key={item.audience}>
							<h4 className="font-semibold text-lg">{item.audience}</h4>
							<p className="mt-2 text-muted-foreground">{item.detail}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
