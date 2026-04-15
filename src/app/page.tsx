import Image from "next/image";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main>
			<section className="relative h-screen w-full bg-primary">
				<div className="container relative z-10 mx-auto h-full py-28">
					<div className="flex h-full flex-col justify-between">
						<div className="py-16">
							<Badge>Rooted in Joy. Designed for Balance.</Badge>
							<h1 className="font-bold text-4xl">
								Yoga Classes & Mindful Lifestyle Products in UAE
							</h1>
							<p>
								Discover mindful yoga classes, creative lifestyle products, and
								a space where movement, design, and joy come together - with
								Vila.
							</p>
							<div className="flex items-center gap-3">
								<Button>
									Book a class <ArrowRightIcon data-icon="inline-end" />
								</Button>
							</div>
						</div>
						<div>Test</div>
					</div>
				</div>
				<Image
					alt="Woman meditating in yoga pose against an orange backdrop"
					blurDataURL="data:image/webp;base64,UklGRvAAAABXRUJQVlA4WAoAAAAAAAAATwAANAAAVlA4IHwAAABwBQCdASpQADUAP/3+/3+/uza7pmmD8D+JZADUUCqqt7vGvyyxjYJgz9l5RJYAYYfsHv2wAP6XF8YTH9X8CStWbWm/GfBNHomOFRej/2dL4ESvccsb5CF1FDNo/Xun35tVGjcFYkQtaU8PidFrN+65BJyuvr4NElPazAAAUFNBSU4AAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQRDAAAAAAAOUGJlVwEQAAYAAAAAAAA="
					className="object-cover"
					fill
					placeholder="blur"
					priority
					quality={100}
					sizes="100vw"
					src="/images/hero-yoga.webp"
				/>
			</section>
		</main>
	);
}
