export const PRODUCTS = [
	{
		id: 1,
		title: "Hatha & Chill T-Shirt",
		price: "120.00",
		image: "/images/products/hatha-and-chill-t-shirt.webp",
	},
	{
		id: 2,
		title: "Vila’s Yoga Bag - Blue",
		price: "120.00",
		image: "/images/products/blue-yoga-bag.webp",
	},
	{
		id: 3,
		title: "The Dawn Mat",
		price: "120.00",
		image: "/images/products/dawn-mat.webp",
	},
] as const;

export type Product = (typeof PRODUCTS)[number];
