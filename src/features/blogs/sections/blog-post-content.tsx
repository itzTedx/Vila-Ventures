/** biome-ignore-all lint/suspicious/noArrayIndexKey: necessary */
import type { BlogPostContent as ContentType } from "../types";

export const BlogPostContent = ({ content }: { content: ContentType }) => {
	return (
		<div className="container mx-auto max-w-4xl py-10 lg:py-14">
			<div className="text-foreground text-lg leading-relaxed">
				{content.intro.split("\n\n").map((paragraph, i) => (
					<p className="mb-6" key={`intro-${i}`}>
						{paragraph}
					</p>
				))}
			</div>

			{content.sections.map((section, i) => (
				<div className="mt-10 first:mt-8" key={`section-${i}`}>
					<h2 className="mb-4 font-display text-2xl text-foreground uppercase leading-snug lg:text-3xl">
						{section.heading}
					</h2>

					<div className="text-foreground/90 text-lg leading-relaxed">
						{section.body.split("\n\n").map((paragraph, j) => (
							<p className="mb-5" key={`p-${i}-${j}`}>
								{paragraph}
							</p>
						))}
					</div>

					{section.list && (
						<ul className="my-6 flex flex-col gap-3 pl-1">
							{section.list.map((item, k) => (
								<li
									className="flex gap-3 text-foreground/90 text-lg leading-relaxed"
									key={`li-${i}-${k}`}
								>
									<span className="mt-2 block size-1.5 shrink-0 rounded-full bg-primary" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					)}

					{section.quote && (
						<blockquote className="my-8 border-primary border-l-3 py-1 pl-6">
							<p className="text-foreground/80 text-lg italic leading-relaxed">
								&ldquo;{section.quote.text}&rdquo;
							</p>
							{section.quote.author && (
								<cite className="mt-2 block text-muted-foreground text-sm not-italic">
									— {section.quote.author}
								</cite>
							)}
						</blockquote>
					)}
				</div>
			))}

			{content.keyTakeaways && content.keyTakeaways.length > 0 && (
				<div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 lg:p-8">
					<h2 className="mb-4 font-display text-foreground text-xl uppercase lg:text-2xl">
						Key Takeaways
					</h2>
					<ul className="flex flex-col gap-3">
						{content.keyTakeaways.map((takeaway, i) => (
							<li
								className="flex gap-3 text-foreground/90 leading-relaxed"
								key={`takeaway-${i}`}
							>
								<span className="mt-2 block size-1.5 shrink-0 rounded-full bg-primary" />
								<span>{takeaway}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{content.faqs && content.faqs.length > 0 && (
				<div className="mt-12">
					<h2 className="mb-6 font-display text-2xl text-foreground uppercase lg:text-3xl">
						Frequently Asked Questions
					</h2>
					<div className="flex flex-col gap-6">
						{content.faqs.map((faq, i) => (
							<div
								className="rounded-lg border border-border/60 bg-card p-5 lg:p-6"
								key={`faq-${i}`}
							>
								<h3 className="mb-2 font-medium text-foreground text-lg">
									{faq.question}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
