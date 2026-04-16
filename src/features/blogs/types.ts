export interface BlogPostSection {
	heading: string;
	body: string;
	list?: string[];
	quote?: { text: string; author?: string };
}

export interface BlogPostFaq {
	question: string;
	answer: string;
}

export interface BlogPostContent {
	intro: string;
	sections: BlogPostSection[];
	keyTakeaways?: string[];
	faqs?: BlogPostFaq[];
}

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	tags: string[];
	author: {
		name: string;
		role: string;
	};
	date: string;
	publishedAt: string;
	readingTime: string;
	image: string;
	imageAlt: string;
	isFeatured?: boolean;
	content: BlogPostContent;
}
