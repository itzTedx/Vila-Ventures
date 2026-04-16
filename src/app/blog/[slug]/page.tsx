import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BLOG_POSTS } from "@/features/blogs/constants";
import { BlogPostView } from "@/features/blogs/blog-post-view";
import { JsonLd } from "@/features/seo/json-ld";

const SITE_URL = "https://vilaventures.com";

export function generateStaticParams() {
	return BLOG_POSTS.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = BLOG_POSTS.find((p) => p.slug === slug);

	if (!post) {
		return { title: "Post Not Found | Vila Ventures" };
	}

	return {
		title: `${post.title} | Vila Ventures Blog`,
		description: post.excerpt,
		openGraph: {
			url: `${SITE_URL}/blog/${post.slug}`,
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.publishedAt,
			authors: [post.author.name],
			tags: post.tags,
			images: [
				{
					url: post.image,
					width: 1200,
					height: 630,
					alt: post.imageAlt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.excerpt,
			images: [post.image],
		},
		alternates: {
			canonical: `${SITE_URL}/blog/${post.slug}`,
		},
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = BLOG_POSTS.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	const articleSchema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				"@id": `${SITE_URL}/blog/${post.slug}#article`,
				headline: post.title,
				description: post.excerpt,
				image: `${SITE_URL}${post.image}`,
				datePublished: post.publishedAt,
				dateModified: post.publishedAt,
				author: {
					"@type": "Person",
					name: post.author.name,
					jobTitle: post.author.role,
					url: `${SITE_URL}/about`,
				},
				publisher: {
					"@type": "Organization",
					"@id": `${SITE_URL}/#organization`,
					name: "Vila Ventures",
					logo: {
						"@type": "ImageObject",
						url: `${SITE_URL}/og-image.png`,
					},
				},
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": `${SITE_URL}/blog/${post.slug}`,
				},
				articleSection: post.category,
				keywords: post.tags.join(", "),
				wordCount: estimateWordCount(post),
				inLanguage: "en-US",
			},
			...(post.content.faqs
				? [
						{
							"@type": "FAQPage",
							"@id": `${SITE_URL}/blog/${post.slug}#faq`,
							mainEntity: post.content.faqs.map((faq) => ({
								"@type": "Question",
								name: faq.question,
								acceptedAnswer: {
									"@type": "Answer",
									text: faq.answer,
								},
							})),
						},
					]
				: []),
			{
				"@type": "BreadcrumbList",
				"@id": `${SITE_URL}/blog/${post.slug}#breadcrumb`,
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
						name: "Blog",
						item: `${SITE_URL}/blog`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: post.title,
						item: `${SITE_URL}/blog/${post.slug}`,
					},
				],
			},
		],
	};

	return (
		<>
			<JsonLd data={articleSchema} />
			<BlogPostView post={post} />
		</>
	);
}

function estimateWordCount(post: (typeof BLOG_POSTS)[number]): number {
	const countWords = (text: string) =>
		text.split(/\s+/).filter(Boolean).length;
	let total = countWords(post.content.intro);
	for (const section of post.content.sections) {
		total += countWords(section.heading);
		total += countWords(section.body);
		if (section.list) {
			for (const item of section.list) total += countWords(item);
		}
		if (section.quote) total += countWords(section.quote.text);
	}
	if (post.content.keyTakeaways) {
		for (const t of post.content.keyTakeaways) total += countWords(t);
	}
	if (post.content.faqs) {
		for (const f of post.content.faqs)
			total += countWords(f.question) + countWords(f.answer);
	}
	return total;
}
