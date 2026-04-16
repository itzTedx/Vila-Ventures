import { Cta } from "@/components/layout/cta";

import { BlogPostAuthor } from "./sections/blog-post-author";
import { BlogPostContent } from "./sections/blog-post-content";
import { BlogPostHero } from "./sections/blog-post-hero";
import { BlogRelatedPosts } from "./sections/blog-related-posts";
import type { BlogPost } from "./types";

export const BlogPostView = ({ post }: { post: BlogPost }) => {
	return (
		<main>
			<BlogPostHero post={post} />
			<BlogPostContent content={post.content} />
			<BlogPostAuthor post={post} />
			<BlogRelatedPosts currentSlug={post.slug} />
			<Cta />
		</main>
	);
};
