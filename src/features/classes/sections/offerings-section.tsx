import Image from "next/image";

import { ProgressiveBlur } from "@/components/common/progressive-blur";
import { Badge } from "@/components/ui/badge";

import type { ClassOffering, ClassPricingPlan } from "../actions";

type OfferingsSectionProps = {
	classes: ClassOffering[];
	plans: ClassPricingPlan[];
};

export const OfferingsSection = ({ classes, plans }: OfferingsSectionProps) => {
	const groupedPlans = {
		virtualGroup: plans.filter(
			(plan) => plan.deliveryMode === "virtual" && plan.pricingType === "group"
		),
		virtualPrivate: plans.filter(
			(plan) =>
				plan.deliveryMode === "virtual" && plan.pricingType === "private"
		),
		physicalGroup: plans.filter(
			(plan) => plan.deliveryMode === "physical" && plan.pricingType === "group"
		),
		physicalPrivate: plans.filter(
			(plan) =>
				plan.deliveryMode === "physical" && plan.pricingType === "private"
		),
	};

	return (
		<section id="offerings">
			<div className="container mx-auto py-14 lg:py-28">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Badge
						className="bg-card text-muted-foreground!"
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
					{classes.map((item) => (
						<div className="group" key={item.id}>
							<div className="mb-2 flex items-center justify-between gap-3 rounded-lg bg-card p-6">
								<div className="min-w-0">
									<h3 className="font-bold text-xl">{item.name}</h3>
									<p className="mt-0.5 text-muted-foreground text-sm">
										{item.tagline}
									</p>
								</div>
							</div>
							<div className="rounded-[calc(var(--radius)+4px)] bg-card p-1">
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

				<div className="mt-14 rounded-xl border bg-card p-5 sm:p-8 lg:mt-20">
					<div className="mb-6 flex flex-wrap items-end justify-between gap-4">
						<div>
							<h3 className="font-semibold text-2xl sm:text-3xl">
								Choose your class plan
							</h3>
							<p className="mt-2 text-muted-foreground">
								Pricing is fully managed in Payload CMS and updates here
								automatically.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						{[
							{
								title: "Virtual Classes (Group)",
								items: groupedPlans.virtualGroup,
							},
							{
								title: "Physical Classes (Group)",
								items: groupedPlans.physicalGroup,
							},
							{
								title: "Virtual Classes (Private)",
								items: groupedPlans.virtualPrivate,
							},
							{
								title: "Physical Classes (Private)",
								items: groupedPlans.physicalPrivate,
							},
						].map((group) => (
							<div className="rounded-lg border p-4 sm:p-5" key={group.title}>
								<h4 className="font-semibold">{group.title}</h4>
								<div className="mt-4 space-y-3">
									{group.items.length ? (
										group.items.map((plan) => (
											<div
												className="flex items-center justify-between gap-4 rounded-md bg-background p-3"
												key={plan.id}
											>
												<div>
													<p className="font-medium">{plan.planName}</p>
													<p className="text-muted-foreground text-sm">
														{plan.classesLabel} · {plan.frequencyLabel}
														{plan.maxStudents ? ` · ${plan.maxStudents}` : ""}
													</p>
												</div>
												<p className="font-semibold">{plan.priceLabel}</p>
											</div>
										))
									) : (
										<p className="text-muted-foreground text-sm">
											No plans added yet.
										</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
