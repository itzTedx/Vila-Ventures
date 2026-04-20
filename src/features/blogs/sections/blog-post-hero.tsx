import Image from "next/image";
import Link from "next/link";

import {
	CalendarBlankIcon,
	CaretRightIcon,
	ClockIcon,
	UserIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";

import type { BlogPost } from "../types";

export const BlogPostHero = ({ post }: { post: BlogPost }) => {
	return (
		<section className="pt-28 pb-10 lg:pt-36 lg:pb-14">
			<div className="container mx-auto">
				<nav
					aria-label="Breadcrumb"
					className="flex items-center gap-1.5 text-muted-foreground/50 text-sm"
				>
					<Link
						className="transition-colors duration-200 hover:text-foreground"
						href="/"
					>
						Home
					</Link>
					<CaretRightIcon size={12} />
					<Link
						className="transition-colors duration-200 hover:text-foreground"
						href="/blog"
					>
						Blog
					</Link>
					<CaretRightIcon size={12} />
					<span className="line-clamp-1 text-foreground">{post.title}</span>
				</nav>

				<div className="max-w-7xl">
					<h1 className="mt-2 text-balance font-display text-3xl text-primary uppercase leading-snug sm:text-4xl lg:text-5xl">
						{post.title}
					</h1>

					<div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-muted-foreground text-sm">
						<span className="flex items-center gap-1.5">
							<UserIcon size={16} />
							{post.author.name}
						</span>
						<span className="flex items-center gap-1.5">
							<CalendarBlankIcon size={16} />
							{post.date}
						</span>
						<span className="flex items-center gap-1.5">
							<ClockIcon size={16} />
							{post.readingTime}
						</span>
						<Badge
							className="bg-primary/10 text-primary"
							render={<span />}
							variant="secondary"
						>
							{post.category}
						</Badge>
					</div>
				</div>

				<div className="relative mt-8 aspect-video overflow-hidden rounded-xl lg:mt-12 lg:aspect-21/9">
					<Image
						alt={post.imageAlt}
						className="object-cover"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 90vw"
						src={post.image}
					/>
				</div>
			</div>
		</section>
	);
};
