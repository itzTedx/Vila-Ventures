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
		<div className="grid grid-cols-1 gap-6 text-start md:grid-cols-4">
			<Badge className="bg-card text-muted-foreground!" variant="secondary">
				{badge}
			</Badge>
			<div className="col-span-1 grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-3">
				<h2 className="font-semibold text-2xl text-muted-foreground sm:text-3xl lg:text-4xl">
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
