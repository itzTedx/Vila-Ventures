import { Badge } from "@/components/ui/badge";

import { BLOG_POSTS } from "../constants";
import { BlogCard } from "../components/blog-card";
import type { BlogPost } from "../types";

export const BlogRelatedPosts = ({
	currentSlug,
}: {
	currentSlug: string;
}) => {
	const currentPost = BLOG_POSTS.find((p) => p.slug === currentSlug);

	const related = BLOG_POSTS.filter((post) => {
		if (post.slug === currentSlug) return false;
		if (currentPost && post.category === currentPost.category) return true;
		if (
			currentPost &&
			post.tags.some((tag) => currentPost.tags.includes(tag))
		)
			return true;
		return false;
	}).slice(0, 3);

	const posts =
		related.length >= 3
			? related
			: BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);

	return (
		<section className="container mx-auto py-14 lg:py-20">
			<div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
				<Badge
					className="bg-card text-muted-foreground!"
					render={<span />}
					variant="secondary"
				>
					Keep Reading
				</Badge>
				<div className="col-span-1 md:col-span-3">
					<h2 className="font-semibold text-2xl text-muted-foreground sm:text-3xl">
						More stories you might enjoy
					</h2>
				</div>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{posts.map((post: BlogPost) => (
					<BlogCard key={post.slug} post={post} />
				))}
			</div>
		</section>
	);
};
