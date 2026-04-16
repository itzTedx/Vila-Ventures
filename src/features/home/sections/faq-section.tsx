import { Badge } from "@/components/ui/badge";

export const FaqSection = () => {
	return (
		<section className="container mx-auto py-14">
			<div>
				<Badge className="bg-card text-muted-foreground!" variant="secondary">
					FAQs
				</Badge>
				<h2>Quick answers for your yoga journey</h2>
			</div>
		</section>
	);
};
