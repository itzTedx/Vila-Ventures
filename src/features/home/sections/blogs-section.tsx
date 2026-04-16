import Image from "next/image";

import {
	ArrowRightIcon,
	CalendarBlankIcon,
	ClockIcon,
} from "@phosphor-icons/react/dist/ssr";

import { ProgressiveBlur } from "@/components/common/progressive-blur";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

import { BLOGS } from "@/features/blogs/constants";

export const BlogsSection = () => {
	const featuredBlog =
		BLOGS.find((blog) => "isFeatured" in blog && blog.isFeatured) ?? BLOGS[0];
	const sideBlogs = BLOGS.filter((blog) => blog.id !== featuredBlog.id).slice(
		0,
		3
	);

	return (
		<section className="container mx-auto py-14" id="blog">
			<Header
				badge="Blogs"
				buttonText="View all blogs"
				description="Explore tips, stories, and ideas to support your journey toward a balanced life."
				title="Insights on Yoga, Wellness & Mindful Living"
			/>
			<div className="mt-8 grid gap-4 lg:grid-cols-2">
				<article className="group relative min-h-88 overflow-hidden rounded-xl lg:min-h-144">
					<Image
						alt={featuredBlog.title}
						className="object-cover transition-transform duration-300 group-hover:scale-105"
						fill
						priority
						src={featuredBlog.image}
					/>
					<div className="absolute inset-x-0 bottom-0 z-10 p-5 text-card sm:p-9">
						<div className="mb-3 flex items-center gap-4 text-card/90 text-sm">
							<p className="flex items-center gap-1.5">
								<ClockIcon size={16} />
								{featuredBlog.readingTime}
							</p>
							<div className="flex items-center gap-1.5">
								<CalendarBlankIcon size={16} />
								<span>{featuredBlog.date}</span>
							</div>
						</div>
						<div className="flex items-end justify-between gap-9">
							<h3 className="flex-1 font-medium text-3xl leading-tight">
								{featuredBlog.title}
							</h3>
							<Button className="w-fit" variant="link">
								Read more <ArrowRightIcon data-icon="inline-end" />
							</Button>
						</div>
					</div>
					<ProgressiveBlur className="[--height:60%]" position="bottom" />
					<div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
				</article>

				<div className="flex flex-col gap-4">
					{sideBlogs.map((blog) => (
						<article
							className="flex h-full overflow-hidden rounded-lg border border-border/60 bg-card"
							key={blog.id}
						>
							<div className="relative aspect-4/3 h-full flex-1">
								<Image
									alt={blog.title}
									className="object-cover"
									fill
									src={blog.image}
								/>
							</div>
							<div className="flex flex-col justify-center p-4">
								<div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-sm">
									<p className="flex items-center gap-1.5">
										<ClockIcon size={16} />
										{blog.readingTime}
									</p>
									<div className="flex items-center gap-1.5">
										<CalendarBlankIcon size={14} />
										<span>{blog.date}</span>
									</div>
								</div>
								<h3 className="line-clamp-3 font-medium text-2xl">
									{blog.title}
								</h3>
								<Button className="w-fit" variant="link">
									Read more <ArrowRightIcon data-icon="inline-end" />
								</Button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};
