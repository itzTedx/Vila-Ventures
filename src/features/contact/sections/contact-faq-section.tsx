import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { CONTACT_FAQS } from "../constants";

export const ContactFaqSection = () => {
	return (
		<section
			className="container mx-auto grid grid-cols-1 gap-6 py-14 lg:grid-cols-2"
			id="contact-faq"
		>
			<div className="flex flex-col justify-between gap-4">
				<div className="max-w-md">
					<Badge
						className="mb-3 bg-card text-muted-foreground!"
						variant="secondary"
					>
						Common Questions
					</Badge>
					<h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
						Answers before you even have to ask
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed lg:text-lg">
						We've gathered the questions people ask most when reaching out.
						If yours isn't here, that's exactly what the form above is for.
					</p>
				</div>
			</div>
			<Accordion className="w-full space-y-3" defaultValue={["01"]}>
				{CONTACT_FAQS.map((item) => (
					<AccordionItem
						className="rounded-lg border-b-0 bg-taupe-300/30 px-4"
						key={item.id}
						value={item.id}
					>
						<AccordionTrigger>{item.title}</AccordionTrigger>
						<AccordionPanel>{item.content}</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};
