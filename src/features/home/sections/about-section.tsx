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

import { FeaturedCarousel } from "../components/featured-carousel";
import { ABOUT_DETAILS, ABOUT_LIST } from "../constants";

export const AboutSection = () => {
	return (
		<section className="bg-card" id="about">
			<div className="container mx-auto grid grid-cols-1 gap-6 py-14 lg:grid-cols-3 lg:py-28">
				<div className="flex flex-col justify-between">
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
						<p className="font-medium text-lg text-muted-foreground">
							VilaVentures is more than a yoga platform it’s a space where
							wellness, creativity, and everyday joy meet.
						</p>
						<p className="mt-3 text-lg text-muted-foreground">
							Whether you're starting your yoga journey or looking for
							meaningful products that reflect your lifestyle, VilaVentures
							invites you to experience life with balance and joy.
						</p>
					</div>

					<Link className="flex items-center gap-2" href="/classes">
						Join the Experience{" "}
						<div className="flex size-7 items-center justify-center rounded-full bg-muted-foreground/20">
							<ArrowUpRightIcon />
						</div>
					</Link>
				</div>

				<FeaturedCarousel />

				<div className="flex flex-col gap-6">
					<ul>
						{ABOUT_DETAILS.map((item) => (
							<li
								className="flex items-center justify-between gap-3 border-b py-4"
								key={item.label}
							>
								<span className="text-muted-foreground">{item.label}</span>
								<span className="font-medium">{item.value}</span>
							</li>
						))}
					</ul>
					<Card className="h-full flex-1 justify-between bg-primary text-card">
						<CardHeader>
							<Logo />
						</CardHeader>
						<CardContent>
							<p className="font-medium text-lg">
								Founded by Vila, a yoga instructor and designer, the brand
								blends mindful movement with thoughtfully crafted products.
								<br />
								<br />
								From virtual yoga classes to original lifestyle creations,
								everything is designed to help you slow down, reconnect, and
								live with intention.
							</p>
						</CardContent>
						<CardFooter className="border-0 bg-transparent">
							<Link
								className="flex w-full items-center justify-between gap-2 text-lg"
								href="/"
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
		</section>
	);
};
