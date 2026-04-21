import Image from "next/image";
import Link from "next/link";

import {
	ArrowRightIcon,
	CalendarBlankIcon,
	ClockIcon,
} from "@phosphor-icons/react/dist/ssr";

import { ProgressiveBlur } from "@/components/common/progressive-blur";
import { Badge } from "@/components/ui/badge";

import { BlogCard } from "../components/blog-card";
import { BLOG_POSTS } from "../constants";

export const BlogGrid = () => {
	const featuredPost =
		BLOG_POSTS.find((post) => post.isFeatured) ?? BLOG_POSTS[0];
	const remainingPosts = BLOG_POSTS.filter(
		(post) => post.slug !== featuredPost.slug
	);

	return (
		<section className="container mx-auto pb-14 lg:pb-28">
			<Link
				className="group relative grid min-h-80 grid-cols-2 overflow-hidden rounded-xl sm:min-h-96 lg:min-h-112"
				href={`/blog/${featuredPost.slug}` as never}
			>
				<div className="relative">
					<Image
						alt={featuredPost.imageAlt}
						className="object-cover transition-transform duration-300 group-hover:scale-105"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 90vw"
						src={featuredPost.image}
					/>
					<ProgressiveBlur className="[--height:60%]" position="bottom" />
					<div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
				</div>
				<div className="z-10 flex flex-col justify-between bg-card p-5 text-foreground sm:p-9">
					<div className="mb-3 flex flex-wrap items-center gap-3">
						<Badge variant="outline">{featuredPost.category}</Badge>
						<div className="flex items-center gap-4 text-muted-foreground text-sm">
							<span className="flex items-center gap-1.5">
								<ClockIcon size={16} />
								{featuredPost.readingTime}
							</span>
							<span className="flex items-center gap-1.5">
								<CalendarBlankIcon size={16} />
								{featuredPost.date}
							</span>
						</div>
						<h2 className="mb-2 max-w-2xl font-medium text-xl leading-tight sm:text-2xl lg:text-4xl">
							{featuredPost.title}
						</h2>
					</div>
					<div className="flex flex-col gap-6">
						<p className="hidden max-w-xl text-muted-foreground text-sm leading-relaxed sm:block sm:text-lg">
							{featuredPost.excerpt}
						</p>

						<span className="flex shrink-0 items-center gap-1 font-medium text-muted-foreground text-sm transition-colors">
							Read article
							<ArrowRightIcon
								className="transition-transform duration-200 group-hover:translate-x-0.5"
								size={16}
							/>
						</span>
					</div>
				</div>
			</Link>

			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{remainingPosts.map((post) => (
					<BlogCard key={post.slug} post={post} />
				))}
			</div>
		</section>
	);
};
