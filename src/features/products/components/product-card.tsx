import Image from "next/image";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

import { Currency } from "@/assets/icons/currency";

import { Product } from "../constants";

interface ProductCardProps {
	product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div>
			<div className="relative aspect-5/6 overflow-hidden rounded-lg">
				<Image
					alt={product.title}
					className="object-cover"
					fill
					src={product.image}
				/>
			</div>
			<div className="mt-2 rounded-lg bg-card p-4">
				<h3 className="font-display text-2xl text-primary">{product.title}</h3>
				<div className="flex items-center justify-between gap-3">
					<div className="flex items-center gap-1">
						<Currency />
						<p className="font-medium text-xl">{product.price}</p>
					</div>
					<Button variant="ghost">
						Buy now <ArrowRightIcon className="text-muted-foreground" />
					</Button>
				</div>
			</div>
		</div>
	);
};
