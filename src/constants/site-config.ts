export const SITE_URL = "https://vilaventures.com" as const;

export const SITE_CONFIG = {
	name: "Vila Ventures",
	description:
		"A creative lifestyle brand and community space rooted in joy, blending mindful yoga experiences with thoughtfully designed lifestyle products in Abu Dhabi, UAE.",
	url: SITE_URL,
	logo: `${SITE_URL}/og-image.png`,

	contact: {
		email: "hello@withvila.com",
	},
} as const;

export const SOCIALS = [
	{
		name: "Instagram",
		url: "https://instagram.com/vilaventures._/",
	},
] as const;
