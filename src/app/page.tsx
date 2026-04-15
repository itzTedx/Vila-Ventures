import { Metadata } from "next";

import { HomeView } from "@/features/home/home-view";

export const metadata: Metadata = {
	title: "Yoga Classes & Mindful Lifestyle Products in UAE",
	description:
		"Discover mindful yoga classes, creative lifestyle products, and a space where movement, design, and joy come together - with Vila.",
};

export default function Home() {
	return (
		<>
			<HomeView />
		</>
	);
}
