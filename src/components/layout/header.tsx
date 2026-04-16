import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Header = ({
	badge = "Products",
	title,
	description = "Flexible, guided, and designed for real life - practice from anywhere, at your own pace.",
	buttonText = "Shop the Collection",
}: {
	badge: string;
	title: React.ReactNode | string;
	description: string;
	buttonText: string;
}) => {
	return (
		<div className="grid grid-cols-4 gap-6 text-start">
			<Badge className="bg-card text-muted-foreground!" variant="secondary">
				{badge}
			</Badge>
			<div className="col-span-3 grid grid-cols-2 gap-6">
				<h2 className="font-semibold text-4xl text-muted-foreground">
					{title}
				</h2>
				<div>
					<p className="mb-4 text-lg text-muted-foreground leading-snug">
						{description}
					</p>

					<Button size="lg">{buttonText}</Button>
				</div>
			</div>
		</div>
	);
};
