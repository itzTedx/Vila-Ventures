import { Cta } from "@/components/layout/cta";

import { BlogGrid } from "./sections/blog-grid";
import { BlogHero } from "./sections/blog-hero";

export const BlogView = () => {
	return (
		<main>
			<BlogHero />
			<BlogGrid />
			<Cta />
		</main>
	);
};
