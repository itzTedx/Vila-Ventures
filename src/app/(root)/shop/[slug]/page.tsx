import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SITE_URL } from "@/constants/site-config";
import { JsonLd } from "@/features/seo/json-ld";
import { SHOP_PRODUCTS } from "@/features/shop/constants";
import { ProductDetailView } from "@/features/shop/product-detail-view";

export function generateStaticParams() {
	return SHOP_PRODUCTS.map((product) => ({
		slug: product.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const product = SHOP_PRODUCTS.find((p) => p.slug === slug);

	if (!product) {
		return { title: "Product Not Found | Vila Ventures" };
	}

	return {
		title: `${product.title} | Vila Ventures Shop`,
		description: product.shortDescription,
		openGraph: {
			url: `${SITE_URL}/shop/${product.slug}`,
			title: `${product.title} — ${product.price} AED | Vila Ventures`,
			description: product.shortDescription,
			type: "website",
			images: [
				{
					url: product.image,
					width: 800,
					height: 1000,
					alt: product.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `${product.title} | Vila Ventures Shop`,
			description: product.shortDescription,
			images: [product.image],
		},
		alternates: {
			canonical: `${SITE_URL}/shop/${product.slug}`,
		},
	};
}

export default async function ProductPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const product = SHOP_PRODUCTS.find((p) => p.slug === slug);

	if (!product) {
		notFound();
	}

	const productSchema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Product",
				"@id": `${SITE_URL}/shop/${product.slug}#product`,
				name: product.title,
				description: product.description,
				image: `${SITE_URL}${product.image}`,
				brand: {
					"@type": "Brand",
					name: "Vila Ventures",
				},
				offers: {
					"@type": "Offer",
					url: `${SITE_URL}/shop/${product.slug}`,
					priceCurrency: product.currency,
					price: product.price,
					availability: product.inStock
						? "https://schema.org/InStock"
						: "https://schema.org/OutOfStock",
					seller: {
						"@type": "Organization",
						"@id": `${SITE_URL}/#organization`,
						name: "Vila Ventures",
					},
				},
				category: product.category,
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${SITE_URL}/shop/${product.slug}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: SITE_URL,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Shop",
						item: `${SITE_URL}/shop`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: product.title,
						item: `${SITE_URL}/shop/${product.slug}`,
					},
				],
			},
		],
	};

	return (
		<>
			<JsonLd data={productSchema} />
			<ProductDetailView product={product} />
		</>
	);
}
