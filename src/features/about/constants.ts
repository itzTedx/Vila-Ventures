export const VALUES = [
	{
		id: "01",
		title: "Mindful Movement",
		description:
			"Every class is an invitation to slow down, breathe deeply, and reconnect with your body — no pressure, no perfection.",
	},
	{
		id: "02",
		title: "Intentional Design",
		description:
			"From yoga mats to journals, every product is created with care — blending function, beauty, and meaning into everyday objects.",
	},
	{
		id: "03",
		title: "Community & Joy",
		description:
			"We build spaces where people feel welcome, seen, and inspired — whether in a group class, a workshop, or an online session.",
	},
	{
		id: "04",
		title: "Authentic Connection",
		description:
			"Real conversations, real experiences, real growth. We show up as we are and invite you to do the same.",
	},
] as const;

export const TRUST_STATS = [
	{
		id: "01",
		count: { value: 100, suffix: "+" },
		label: "Sessions Hosted",
		description:
			"Group, private, and corporate yoga sessions across Abu Dhabi and online.",
	},
	{
		id: "02",
		count: { value: 95, suffix: "%" },
		label: "Feel More Balanced",
		description:
			"Participants report feeling calmer and more present after sessions.",
	},
	{
		id: "03",
		count: { value: 3, suffix: "+" },
		label: "Years of Practice",
		description:
			"Dedicated study and teaching across Hatha, Vinyasa, and mindful movement.",
	},
	{
		id: "04",
		count: { value: 500, suffix: "+" },
		label: "Community Members",
		description:
			"Women, kids, and teams who have practiced with Vila Ventures.",
	},
] as const;

export const CREDENTIALS = [
	"Certified Yoga Instructor (RYT-200)",
	"Hatha & Vinyasa Specialisation",
	"Kids Yoga Certification",
	"Corporate Wellness Facilitator",
	"Product Designer & Creative Director",
] as const;

export const SERVES = [
	{
		audience: "Women",
		detail: "Gentle, empowering sessions in a supportive space",
		image: "/images/types/women-yoga.webp",
	},
	{
		audience: "Kids",
		detail: "Playful, age-appropriate yoga that builds confidence",
		image: "/images/types/kids-yoga.webp",
	},
	{
		audience: "Corporate Teams",
		detail: "Wellness workshops that reduce stress and build team cohesion",
		image: "/images/types/corporate-yoga.webp",
	},
	{
		audience: "Online Students",
		detail: "Virtual classes from anywhere, live and guided",
		image: "/images/types/online-yoga.webp",
	},
] as const;
