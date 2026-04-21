import Image from "next/image";
import Link from "next/link";

import {
	ArrowLeftIcon,
	CheckCircleIcon,
	ShoppingBagIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Currency } from "@/assets/icons/currency";

import type { ShopProduct } from "../constants";

interface ProductHeroProps {
	product: ShopProduct;
}

export const ProductHero = ({ product }: ProductHeroProps) => {
	return (
		<section className="pt-28 pb-14 lg:pt-24 lg:pb-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div className="relative aspect-4/5 overflow-hidden rounded-xl">
						<Image
							alt={product.title}
							className="object-cover"
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 50vw"
							src={product.image}
						/>
						{product.badge && (
							<Badge className="absolute top-4 left-4 bg-card/90 text-foreground backdrop-blur-sm">
								{product.badge}
							</Badge>
						)}
					</div>

					<div className="flex flex-col justify-center">
						<Link
							className="ease mb-8 inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors duration-200 hover:text-foreground"
							href="/shop"
						>
							<ArrowLeftIcon className="size-4" />
							Back to shop
						</Link>

						<div className="flex items-center gap-3">
							<Badge
								className="bg-card text-muted-foreground!"
								render={<span />}
								variant="secondary"
							>
								{product.category}
							</Badge>
							{product.inStock && (
								<span className="flex items-center gap-1 text-muted-foreground text-sm">
									<span className="size-1.5 rounded-full bg-green-500" />
									In stock
								</span>
							)}
						</div>

						<h1 className="mt-4 text-balance font-display text-4xl text-primary uppercase leading-snug sm:text-5xl">
							{product.title}
						</h1>

						<div className="mt-4 flex items-center gap-2">
							<Currency />
							<span className="font-medium text-3xl">{product.price}</span>
							<span className="text-muted-foreground">{product.currency}</span>
						</div>

						<p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
							{product.description}
						</p>

						<ul className="mt-8 flex flex-col gap-3">
							{product.features.map((feature) => (
								<li
									className="flex items-start gap-3 text-muted-foreground"
									key={feature}
								>
									<CheckCircleIcon
										className="mt-0.5 size-5 shrink-0 text-primary"
										weight="fill"
									/>
									<span>{feature}</span>
								</li>
							))}
						</ul>

						<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
							<Button className="gap-3" size="lg">
								<ShoppingBagIcon weight="fill" />
								Add to bag
							</Button>
							<Button
								nativeButton={false}
								render={<Link href="/shop" />}
								size="lg"
								variant="ghost"
							>
								Continue shopping
							</Button>
						</div>

						{/* <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border bg-card p-4 sm:grid-cols-3">
							<div className="text-center">
								<p className="font-medium text-sm">Free shipping</p>
								<p className="text-muted-foreground text-xs">Over 200 AED</p>
							</div>
							<div className="text-center">
								<p className="font-medium text-sm">14-day returns</p>
								<p className="text-muted-foreground text-xs">No questions</p>
							</div>
							<div className="col-span-2 text-center sm:col-span-1">
								<p className="font-medium text-sm">Secure checkout</p>
								<p className="text-muted-foreground text-xs">SSL encrypted</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};
