import { Badge } from "@/components/ui/badge";

export const ContactHero = () => {
	return (
		<section className="pt-28 pb-6 md:pb-12 lg:pt-36">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-4">
					<Badge
						className="bg-card text-muted-foreground!"
						render={<span />}
						variant="secondary"
					>
						Get in Touch
					</Badge>
					<div className="col-span-1 md:col-span-3">
						<h1 className="text-balance font-display text-4xl text-primary uppercase leading-snug sm:text-5xl lg:text-6xl">
							Let's start a conversation, we'd love to hear from you
						</h1>
						<p className="mt-4 text-balance text-lg text-muted-foreground leading-relaxed lg:text-xl">
							Whether you're curious about yoga classes, interested in our
							products, or exploring a collaboration reach out. No question is
							too small, and every message gets a real, personal reply.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
