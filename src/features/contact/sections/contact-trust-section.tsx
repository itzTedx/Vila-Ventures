import {
	ChatCircleDotsIcon,
	HandshakeIcon,
	TimerIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";

import { TRUST_POINTS } from "../constants";

const TRUST_ICONS = [ChatCircleDotsIcon, HandshakeIcon, TimerIcon] as const;

export const ContactTrustSection = () => {
	return (
		<section className="bg-card" id="why-reach-out">
			<div className="container mx-auto py-14 lg:py-28">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<Badge
						className="bg-background text-muted-foreground!"
						render={<h2 />}
						variant="secondary"
					>
						Why Reach Out
					</Badge>
					<p className="col-span-1 font-medium text-2xl text-muted-foreground leading-snug sm:text-3xl md:col-span-2 lg:text-5xl">
						<span className="text-foreground">
							You're not filling out a form into a void.
						</span>{" "}
						Here's what to expect when you get in touch.
					</p>
				</div>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-20">
					{TRUST_POINTS.map((point, index) => {
						const Icon = TRUST_ICONS[index];
						return (
							<div className="group flex flex-col" key={point.id}>
								<div className="flex items-center justify-between gap-3 rounded-lg bg-background px-6 py-4 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
									<Icon className="size-6" />
									<span className="text-muted-foreground/30 transition-colors duration-300 group-hover:text-muted/30">
										{point.id}
									</span>
								</div>
								<div className="mt-2 flex flex-1 flex-col justify-between gap-4 rounded-lg bg-background p-6 transition-colors duration-300 ease-out group-hover:bg-primary group-hover:text-card">
									<h3 className="font-semibold text-xl lg:text-2xl">
										{point.title}
									</h3>
									<p className="text-muted-foreground transition-colors duration-300 group-hover:text-muted/80 lg:text-lg">
										{point.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
