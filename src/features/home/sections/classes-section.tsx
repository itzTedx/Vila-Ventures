import { Button } from "@/components/ui/button";

import { ClassesGrid } from "../components/classes-grid";

export const ClassesSection = () => {
	return (
		<section className="container mx-auto py-14" id="classes">
			<div className="grid grid-cols-3 items-center gap-6">
				<h2 className="font-display text-8xl text-primary">Classes</h2>

				<p className="text-lg text-muted-foreground leading-relaxed">
					Flexible, guided, and designed for real life - practice from anywhere,
					at your own pace.
				</p>

				<Button className="w-fit justify-self-end" size="lg">
					View All Classes & Programs
				</Button>
			</div>

			<ClassesGrid />
		</section>
	);
};
