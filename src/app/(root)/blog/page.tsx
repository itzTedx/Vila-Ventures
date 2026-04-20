import type { Metadata } from "next";

import { SITE_URL } from "@/constants/site-config";
import { BlogView } from "@/features/blogs/blog-view";
import { BLOG_POSTS } from "@/features/blogs/constants";
import { JsonLd } from "@/features/seo/json-ld";

export const metadata: Metadata = {
	title: "Yoga & Wellness Blog | Tips, Guides & Stories | Vila Ventures",
	description:
		"Explore yoga tips, wellness guides, and mindful living stories from Vila Ventures in Abu Dhabi. Practical advice for beginners and experienced practitioners alike.",
	openGraph: {
		url: `${SITE_URL}/blog`,
		title: "Yoga & Wellness Blog | Vila Ventures",
		description:
			"Practical yoga tips, wellness insights, and mindful living guides from Vila Ventures in Abu Dhabi.",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Vila Ventures Yoga & Wellness Blog — Tips, Guides & Stories",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Yoga & Wellness Blog | Vila Ventures",
		description:
			"Practical yoga tips, wellness insights, and mindful living guides from Abu Dhabi.",
		images: ["/og-image.png"],
	},
	alternates: {
		canonical: `${SITE_URL}/blog`,
	},
};

const blogSchema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "CollectionPage",
			"@id": `${SITE_URL}/blog#webpage`,
			url: `${SITE_URL}/blog`,
			name: "Yoga & Wellness Blog | Vila Ventures",
			isPartOf: { "@id": `${SITE_URL}/#website` },
			about: { "@id": `${SITE_URL}/#organization` },
			description:
				"Explore yoga tips, wellness guides, and mindful living stories from Vila Ventures in Abu Dhabi.",
			inLanguage: "en-US",
		},
		{
			"@type": "ItemList",
			"@id": `${SITE_URL}/blog#item-list`,
			itemListElement: BLOG_POSTS.map((post, index) => ({
				"@type": "ListItem",
				position: index + 1,
				url: `${SITE_URL}/blog/${post.slug}`,
				name: post.title,
			})),
		},
		{
			"@type": "BreadcrumbList",
			"@id": `${SITE_URL}/blog#breadcrumb`,
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
			],
		},
	],
};

export default function BlogPage() {
	return (
		<>
			<JsonLd data={blogSchema} />
			<BlogView />
		</>
	);
}
