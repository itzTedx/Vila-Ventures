import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";

import { Navbar } from "@/components/layout/navbar";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

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
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-sans",
				inter.variable
			)}
			lang="en"
		>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
