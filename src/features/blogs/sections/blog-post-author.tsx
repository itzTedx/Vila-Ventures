import { UserCircleIcon } from "@phosphor-icons/react/dist/ssr";

import type { BlogPost } from "../types";

export const BlogPostAuthor = ({ post }: { post: BlogPost }) => {
	return (
		<div className="container mx-auto max-w-3xl pb-10">
			<div className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 lg:p-6">
				<div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
					<UserCircleIcon size={32} />
				</div>
				<div>
					<p className="font-medium text-foreground">{post.author.name}</p>
					<p className="text-muted-foreground text-sm">{post.author.role}</p>
				</div>
			</div>
		</div>
	);
};
