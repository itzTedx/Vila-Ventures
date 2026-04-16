import type { Metadata } from "next";
import "@/styles/globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import { inter, serif } from "@/assets/fonts";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Yoga Classes & Mindful Lifestyle Products in UAE",
	description:
		"Discover mindful yoga classes, creative lifestyle products, and a space where movement, design, and joy come together - with Vila.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={cn("h-full antialiased", serif.variable, inter.className)}
			lang="en"
		>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
