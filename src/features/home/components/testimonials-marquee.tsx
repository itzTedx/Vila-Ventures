import {
	Marquee,
	MarqueeContent,
	MarqueeFade,
	MarqueeItem,
} from "@/components/ui/marquee";
import {
	Testimonial,
	TestimonialAuthor,
	TestimonialAuthorName,
	TestimonialAuthorTagline,
	TestimonialQuote,
} from "@/components/ui/testimonials";

import { FEEDBACKS } from "../constants";

export function TestimonialsMarquee() {
	return (
		<section className="w-full" id="testimonials">
			<Marquee className="[&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!">
				<MarqueeFade side="left" />
				<MarqueeFade side="right" />

				<MarqueeContent className="py-6 md:py-12">
					{FEEDBACKS.map((item) => (
						<MarqueeItem
							className="h-full w-sm rounded-lg bg-card transition-[box-shadow_scale] ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-104 hover:bg-primary hover:text-card hover:shadow-lg md:w-xl"
							key={item.id}
						>
							<Testimonial>
								<TestimonialQuote className="text-sm leading-6 tracking-wide">
									<p>{item.content}</p>
								</TestimonialQuote>

								<TestimonialAuthor>
									<TestimonialAuthorName>{item.author}</TestimonialAuthorName>

									<TestimonialAuthorTagline>
										{item.role}
									</TestimonialAuthorTagline>
								</TestimonialAuthor>
							</Testimonial>
						</MarqueeItem>
					))}
				</MarqueeContent>
			</Marquee>
		</section>
	);
}
