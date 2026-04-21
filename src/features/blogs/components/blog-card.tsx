import Image from "next/image";
import Link from "next/link";

import {
	ArrowRightIcon,
	CalendarBlankIcon,
	ClockIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";

import type { BlogPost } from "../types";

export const BlogCard = ({ post }: { post: BlogPost }) => {
	return (
		<article className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-[box-shadow_scale_border-color] duration-300 hover:scale-105 hover:border-primary hover:shadow-lg">
			<Link className="contents" href={`/blog/${post.slug}` as never}>
				<div className="relative aspect-video overflow-hidden">
					<Image
						alt={post.imageAlt}
						className="object-cover transition-transform duration-300 group-hover:scale-105"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						src={post.image}
					/>
				</div>
				<div className="flex flex-1 flex-col p-5">
					<div className="mb-3 flex items-center gap-3">
						<Badge className="bg-primary/10 text-primary" variant="secondary">
							{post.category}
						</Badge>
						<div className="flex items-center gap-1.5 text-muted-foreground text-xs">
							<ClockIcon size={14} />
							<span>{post.readingTime}</span>
						</div>
					</div>
					<h3 className="mb-2 line-clamp-2 font-medium text-xl leading-snug group-hover:text-primary">
						{post.title}
					</h3>
					<p className="mb-4 line-clamp-2 flex-1 text-muted-foreground text-sm leading-relaxed">
						{post.excerpt}
					</p>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-1.5 text-muted-foreground text-xs">
							<CalendarBlankIcon size={14} />
							<span>{post.date}</span>
						</div>
						<span className="flex items-center gap-1 font-medium text-primary text-sm transition-colors">
							Read more
							<ArrowRightIcon
								className="transition-transform duration-200 group-hover:translate-x-0.5"
								size={14}
							/>
						</span>
					</div>
				</div>
			</Link>
		</article>
	);
};
