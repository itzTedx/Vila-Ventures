export const CLASS_OFFERINGS = [
	{
		id: "hatha",
		name: "Hatha Yoga",
		tagline: "Build your foundation",
		description:
			"Slow, intentional movements paired with breathwork that grounds you in the present. Hatha is where most of our students begin — and many stay. Each pose is held long enough to feel it, understand it, and let it work.",
		bestFor: "Beginners, stress relief, anyone returning to movement",
		format: "60-minute sessions · In-person & virtual",
		image: "/images/classes/hatha-yoga.webp",
	},
	{
		id: "vinyasa",
		name: "Vinyasa Flow",
		tagline: "Move with your breath",
		description:
			"A fluid, rhythm-driven practice that links breath to movement in continuous sequences. You'll build strength, improve flexibility, and find a moving meditation that clears the mental noise.",
		bestFor: "Those with some experience who want a stronger physical practice",
		format: "60-minute sessions · In-person & virtual",
		image: "/images/classes/vinyasa-yoga.webp",
	},
	{
		id: "kids",
		name: "Kids Yoga",
		tagline: "Play meets presence",
		description:
			"Yoga made fun — with animal poses, storytelling, and games that help children develop body awareness, focus, and confidence. Sessions are age-adapted and designed to hold attention without forcing stillness.",
		bestFor: "Children ages 4–12, school groups, family sessions",
		format: "45-minute sessions · In-person",
		image: "/images/classes/other-yoga.webp",
	},
	{
		id: "corporate",
		name: "Corporate Wellness",
		tagline: "Bring calm to the office",
		description:
			"Workplace wellness sessions designed to reduce tension, improve focus, and help teams reset during the workday. No gym clothes required — these are accessible, chair-friendly, and built for real office environments.",
		bestFor: "Teams of 5–30, companies investing in employee well-being",
		format: "30–60 minutes · On-site or virtual",
		image: "/images/classes/virtual-yoga.webp",
	},
	{
		id: "virtual",
		name: "Virtual Classes",
		tagline: "Your mat, your space",
		description:
			"Live-guided sessions you can join from anywhere. Same personal attention, same warm energy — just through a screen. Perfect for those with unpredictable schedules or outside Abu Dhabi.",
		bestFor: "Remote participants, busy schedules, those outside the UAE",
		format: "60-minute live sessions · Zoom",
		image: "/images/classes/virtual-yoga.webp",
	},
	{
		id: "private",
		name: "Private Sessions",
		tagline: "Yoga shaped around you",
		description:
			"One-on-one sessions fully tailored to your body, goals, and pace. Whether you're working through an injury, preparing for something specific, or simply prefer individual attention — this is your practice, your way.",
		bestFor: "Individuals wanting personalised guidance",
		format: "60-minute sessions · In-person or virtual",
		image: "/images/classes/hatha-yoga.webp",
	},
] as const;

export const EXPECTATIONS = [
	{
		id: "01",
		title: "Book Your Spot",
		description:
			"Pick a class that speaks to you and reserve your place through our booking link. You'll get a confirmation with everything you need to know before your first session.",
	},
	{
		id: "02",
		title: "Show Up As You Are",
		description:
			"No special gear, no experience needed. Wear something comfortable, bring water, and arrive a few minutes early so you can settle in without rushing.",
	},
	{
		id: "03",
		title: "Move at Your Own Pace",
		description:
			"Every session is guided with clear cues and modifications. You won't be pushed beyond what feels right — the practice meets you where you are, not where you think you should be.",
	},
	{
		id: "04",
		title: "Leave Feeling Different",
		description:
			"Most students tell us the shift is subtle but real — a clearer head, looser shoulders, a slower exhale. That feeling is what keeps people coming back.",
	},
] as const;

export const AUDIENCES = [
	{
		audience: "Women",
		detail:
			"Supportive, women-only sessions in a space where you can breathe without performing. Many of our students are professionals and mothers fitting practice into full lives.",
	},
	{
		audience: "Complete Beginners",
		detail:
			"Never done yoga before? Good. Our beginner-friendly classes are built for you — no flexibility required, no judgement, just honest guidance from the first breath.",
	},
	{
		audience: "Kids & Families",
		detail:
			"Playful sessions that help children build body awareness and focus. Parents often tell us it's the one activity their kids actually ask to come back to.",
	},
	{
		audience: "Corporate Teams",
		detail:
			"Workplace wellness that actually works. Short, practical sessions that help your team manage stress, improve focus, and show up better — without leaving the office.",
	},
	{
		audience: "Virtual Students",
		detail:
			"Live-guided classes you can join from home, a hotel room, or anywhere with a screen. Same energy and personal attention as in-person sessions.",
	},
] as const;

export const CLASSES_FAQS = [
	{
		id: "01",
		title: "Do I need experience to join a class?",
		content:
			"Not at all. Most of our students started with zero yoga experience. Every class includes modifications and clear guidance so you can follow along comfortably, regardless of your fitness level or flexibility.",
	},
	{
		id: "02",
		title: "What should I wear and bring?",
		content:
			"Wear comfortable clothing you can move in — nothing fancy. Bring a water bottle and a small towel if you'd like. Mats are provided for in-person sessions, but you're welcome to bring your own.",
	},
	{
		id: "03",
		title: "How do I book a class?",
		content:
			"Click any 'Book a Session' button on this page and you'll be taken to our scheduling tool where you can pick a date and time that works for you. You'll receive a confirmation email with all the details.",
	},
	{
		id: "04",
		title: "What's the difference between Hatha and Vinyasa?",
		content:
			"Hatha is slower and more deliberate — you hold poses longer and focus on alignment and breath. Vinyasa is more fluid and dynamic, linking movement to breath in continuous sequences. Both are wonderful; Hatha is often better for beginners.",
	},
	{
		id: "05",
		title: "Can I cancel or reschedule a booking?",
		content:
			"Yes. We ask for at least 24 hours' notice so we can open the spot for someone else. Life happens — just reach out and we'll work with you.",
	},
	{
		id: "06",
		title: "Where are in-person classes held?",
		content:
			"Our in-person sessions take place in Abu Dhabi. The exact location is shared when you book. We choose calm, well-ventilated spaces that feel good to practice in.",
	},
	{
		id: "07",
		title: "How do virtual classes work?",
		content:
			"You'll receive a Zoom link after booking. Join from wherever you are — all you need is enough space to roll out a mat and a device with a camera so Vila can see your alignment and offer guidance.",
	},
	{
		id: "08",
		title: "Do you offer packages or memberships?",
		content:
			"We offer multi-session packages for individuals and custom pricing for corporate bookings. Get in touch and we'll put together something that fits your needs and budget.",
	},
] as const;
