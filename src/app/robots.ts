import type { MetadataRoute } from "next";

import { SITE_URL } from "@/constants/site-config";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/_next/"],
			},
			{
				userAgent: "GPTBot",
				allow: "/",
			},
			{
				userAgent: "ChatGPT-User",
				allow: "/",
			},
			{
				userAgent: "PerplexityBot",
				allow: "/",
			},
			{
				userAgent: "ClaudeBot",
				allow: "/",
			},
			{
				userAgent: "anthropic-ai",
				allow: "/",
			},
			{
				userAgent: "Googlebot",
				allow: "/",
			},
			{
				userAgent: "Bingbot",
				allow: "/",
			},
			{
				userAgent: "Google-Extended",
				disallow: "/",
			},
		],
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}
