import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SITE_URL } from "@/constants/site-config";
import { JsonLd } from "@/features/seo/json-ld";
import { getProductBySlug, getProductSlugs } from "@/features/shop/actions";
import { ProductDetailView } from "@/features/shop/product-detail-view";
import { getProductDescription } from "@/features/shop/utils/get-product-description";
import { getProductImage } from "@/features/shop/utils/get-product-image";

interface PageProps {
	params: Promise<{ slug: string }>;
}

 
export async function generateStaticParams() {
	const slugs = await getProductSlugs();

	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const product = await getProductBySlug(slug);

	if (!product) {
		return { title: "Product Not Found | Vila Ventures" };
	}

	const description = getProductDescription(product);
	const imageUrl = getProductImage(product);

	return {
		title: `${product.title} | Vila Ventures Shop`,
		description,
		openGraph: {
			url: `${SITE_URL}/shop/${product.slug}`,
			title: `${product.title} — ${product.price} AED | Vila Ventures`,
			description,
			type: "website",
			images: imageUrl
				? [
						{
							url: imageUrl,
							alt: product.title,
						},
					]
				: [],
		},
		twitter: {
			card: "summary_large_image",
			title: `${product.title} | Vila Ventures Shop`,
			description,
			images: imageUrl ? [imageUrl] : [],
		},
		alternates: {
			canonical: `${SITE_URL}/shop/${product.slug}`,
		},
	};
}

export default async function ProductPage({ params }: PageProps) {
	const { slug } = await params;
	const product = await getProductBySlug(slug);

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
				description: getProductDescription(product),
				image: getProductImage(product),
				brand: {
					"@type": "Brand",
					name: "Vila Ventures",
				},
				offers: {
					"@type": "Offer",
					url: `${SITE_URL}/shop/${product.slug}`,
					priceCurrency: "AED",
					price: product.price,
					availability:
						product.inventory && product.inventory > 0
							? "https://schema.org/InStock"
							: "https://schema.org/OutOfStock",
					seller: {
						"@type": "Organization",
						"@id": `${SITE_URL}/#organization`,
						name: "Vila Ventures",
					},
				},
				category:
					product.categories?.[0] && typeof product.categories[0] === "object"
						? product.categories[0].title
						: undefined,
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
