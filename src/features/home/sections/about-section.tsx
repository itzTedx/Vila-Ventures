import Link from "next/link";

import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

import { Logo } from "@/assets/logo";

import { ABOUT_DETAILS, ABOUT_LIST } from "../constants";

export const AboutSection = () => {
	return (
		<section
			className="container mx-auto grid grid-cols-1 gap-6 py-14 md:gap-12 lg:grid-cols-2 lg:py-28"
			id="about"
		>
			<div className="flex flex-col justify-between gap-4">
				<div>
					<Badge variant="secondary">A Journey to Mindful Living</Badge>
					<h2 className="mt-3 text-balance font-display font-semibold text-2xl text-primary uppercase leading-snug sm:text-3xl lg:text-4xl">
						A journey back to yourself - through yoga, creativity & joy
					</h2>
					<ul className="my-6 flex flex-wrap items-center gap-2.5 text-xs">
						{ABOUT_LIST.map((item) => (
							<li className="flex items-center gap-1" key={item}>
								<CheckIcon />
								{item}
							</li>
						))}
					</ul>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<Card className="flex flex-col justify-between shadow-sm ring-primary/10 transition-[box-shadow_scale] ease-out hover:scale-105 hover:shadow-lg">
							<CardContent>
								<p className="font-medium text-base">
									VilaVentures is more than a yoga platform it’s a space where
									wellness, creativity, and everyday joy meet.
								</p>
								<p className="mt-3 text-muted-foreground">
									Whether you're starting your yoga journey or looking for
									meaningful products that reflect your lifestyle, VilaVentures
									invites you to experience life with balance and joy.
								</p>
							</CardContent>
							<CardFooter className="border-0 bg-transparent pt-0">
								<Link
									className="flex w-full items-center justify-between gap-2 font-medium text-primary"
									href="/classes"
								>
									Join the Experience{" "}
									<div className="flex size-7 items-center justify-center rounded-full bg-primary/20">
										<ArrowUpRightIcon weight="bold" />
									</div>
								</Link>
							</CardFooter>
						</Card>
						<Card className="relative gap-4 bg-primary text-card shadow-sm transition-[box-shadow_scale] ease-out hover:scale-105 hover:shadow-lg">
							<CardHeader>
								<Logo className="h-8 w-auto" />
							</CardHeader>
							<CardContent>
								<p className="font-medium text-base">
									Founded by Vila, a yoga instructor and designer, the brand
									blends mindful movement with thoughtfully crafted products.
								</p>
								<p className="mt-3 font-light">
									From virtual yoga classes to original lifestyle creations,
									everything is designed to help you slow down, reconnect, and
									live with intention.
								</p>
							</CardContent>
							<CardFooter className="border-0 bg-transparent pt-0">
								<Link
									className="flex w-full items-center justify-between gap-2 font-medium"
									href="/about"
								>
									Read our story
									<div className="flex size-7 items-center justify-center rounded-full bg-card/20">
										<ArrowUpRightIcon />
									</div>
								</Link>
							</CardFooter>
						</Card>
					</div>
				</div>

				<ul>
					{ABOUT_DETAILS.map((item) => (
						<li
							className="group relative flex items-center justify-between gap-3 overflow-hidden border-b p-3"
							key={item.label}
						>
							<span className="text-muted-foreground">{item.label}</span>
							<span className="font-medium">{item.value}</span>
							<span className="absolute inset-0 -z-10 translate-y-full bg-card opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
						</li>
					))}
				</ul>
			</div>

			{/* <FeaturedCarousel /> */}

			<div className="relative aspect-square size-full overflow-hidden rounded-lg border border-primary">
				<video
					autoPlay
					className="absolute inset-0 size-full object-cover"
					loop
					muted
					src="/videos/villa-animation.mp4"
				/>
			</div>
		</section>
	);
};
