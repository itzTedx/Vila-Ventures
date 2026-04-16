import Image from "next/image";

import { ArrowRightIcon, PhoneCallIcon } from "@phosphor-icons/react/dist/ssr";

import { LogoIcon } from "@/assets/logo";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Cta = () => {
	return (
		<section className="container mx-auto py-14">
			<div className="relative inset-shadow-[0_4px_42px] inset-shadow-white/30 grid grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl bg-radial-[at_50%_0%] bg-size-[120%_100%] from-orange-400 via-primary to-orange-800 p-6 md:p-12 lg:grid-cols-7 lg:gap-12">
				<div className="relative z-10 aspect-video size-full overflow-hidden rounded-lg lg:col-span-3 lg:aspect-4/3">
					<Image
						alt="Cta"
						className="object-cover"
						fill
						src="/images/cta.webp"
					/>
				</div>
				<div className="relative z-10 text-card lg:col-span-4">
					<Badge>Get Started</Badge>
					<h2 className="mt-3 text-balance font-semibold text-3xl sm:text-4xl lg:text-6xl">
						Begin your journey to inner peace today!
					</h2>
					<p className="mt-4 text-lg text-muted md:text-xl lg:mt-6">
						Join us for mindful sessions that bring clarity, calm, inner
						balance, strength, and deep connection; one breath at a time.
					</p>
					<div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-12">
						<Button
							className="w-full justify-between sm:w-48"
							size="lg"
							variant="secondary"
						>
							Contact us <PhoneCallIcon />
						</Button>
						<Button size="lg" variant="ghost">
							Explore classes <ArrowRightIcon />
						</Button>
					</div>
				</div>

				<LogoIcon className="absolute top-12 -right-48 hidden text-primary/50 lg:block" />
			</div>
		</section>
	);
};
