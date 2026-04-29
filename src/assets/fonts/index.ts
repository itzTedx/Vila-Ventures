import { DM_Serif_Display, Google_Sans } from "next/font/google";

export const inter = Google_Sans({
	variable: "--font-sans",
	display: "swap",
	subsets: ["latin"],
	preload: true,
	fallback: ["sans-serif"],
});

export const serif = DM_Serif_Display({
	variable: "--font-display",
	display: "swap",
	subsets: ["latin"],
	weight: "400",
});

// export const serif = localFont({
// 	variable: "--font-display",
// 	display: "swap",
// 	preload: true,
// 	src: [
// 		{
// 			path: "./blinka-serif.otf",
// 			weight: "400",
// 			style: "normal",
// 		},
// 	],
// 	fallback: ["serif"],
// });
