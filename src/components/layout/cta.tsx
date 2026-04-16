import Image from "next/image";

import { ArrowRightIcon, PhoneCallIcon } from "@phosphor-icons/react/dist/ssr";

import { LogoIcon } from "@/assets/logo";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Cta = () => {
	return (
		<section className="container mx-auto py-14">
			<div className="relative inset-shadow-[0_4px_42px] inset-shadow-white/30 grid grid-cols-7 items-center gap-12 overflow-hidden rounded-2xl bg-radial-[at_50%_0%] bg-size-[120%_100%] from-orange-400 via-primary to-orange-800 p-12">
				<div className="relative z-10 col-span-3 aspect-4/3 size-full overflow-hidden rounded-lg">
					<Image
						alt="Cta"
						className="object-cover"
						fill
						src="/images/cta.webp"
					/>
				</div>
				<div className="relative z-10 col-span-4 text-card">
					<Badge>Get Started</Badge>
					<h2 className="mt-3 text-balance font-semibold text-6xl">
						Begin your journey to inner peace today!
					</h2>
					<p className="mt-6 text-muted text-xl">
						Join us for mindful sessions that bring clarity, calm, inner
						balance, strength, and deep connection; one breath at a time.
					</p>
					<div className="mt-12 flex items-center gap-4">
						<Button
							className="w-48 justify-between"
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

				<LogoIcon className="absolute top-12 -right-48 text-primary/50" />
			</div>
		</section>
	);
};
