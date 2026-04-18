import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Currency } from "@/assets/icons/currency";

interface ProductCardProps {
	product: {
		title: string;
		price: string;
		image: string;
		slug?: string;
		badge?: string | null;
		shortDescription?: string;
	};
}

export const ProductCard = ({ product }: ProductCardProps) => {
	const content = (
		<div className="group text-start">
			<div className="relative aspect-5/6 overflow-hidden rounded-lg">
				<Image
					alt={product.title}
					className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					src={product.image}
				/>
				{product.badge && (
					<Badge className="absolute top-3 left-3 bg-card/90 text-foreground backdrop-blur-sm">
						{product.badge}
					</Badge>
				)}
			</div>
			<div className="mt-2 rounded-lg bg-card p-4">
				<h3 className="font-display text-2xl text-primary">{product.title}</h3>
				{product.shortDescription && (
					<p className="mt-1 line-clamp-1 text-muted-foreground text-sm">
						{product.shortDescription}
					</p>
				)}
				<div className="mt-2 flex items-center justify-between gap-3">
					<div className="flex items-center gap-1">
						<Currency />
						<p className="font-medium text-xl">{product.price}</p>
					</div>
					<Button variant="ghost">
						{product.slug ? "View" : "Buy now"}{" "}
						<ArrowRightIcon className="text-muted-foreground" />
					</Button>
				</div>
			</div>
		</div>
	);

	if (product.slug) {
		return <Link href={`/shop/${product.slug}`}>{content}</Link>;
	}

	return content;
};
