export const CONTACT_REASONS = [
	{ value: "yoga-classes", label: "Yoga Classes & Sessions" },
	{ value: "corporate-wellness", label: "Corporate Wellness Programs" },
	{ value: "private-sessions", label: "Private / 1-on-1 Sessions" },
	{ value: "kids-yoga", label: "Kids Yoga Inquiry" },
	{ value: "shop-products", label: "Shop & Product Questions" },
	{ value: "collaboration", label: "Collaboration & Partnerships" },
	{ value: "other", label: "Something Else" },
] as const;

export const CONTACT_FAQS = [
	{
		id: "01",
		title: "How quickly will I hear back?",
		content:
			"We respond to all inquiries within 24–48 hours during weekdays. If you're reaching out about a time-sensitive booking, mention it in your message and we'll prioritise it.",
	},
	{
		id: "02",
		title: "Do you offer free consultations?",
		content:
			"Yes — we offer a complimentary 15-minute discovery call for new clients. It's a relaxed conversation to understand your goals and see if we're a good fit. You can book one directly through our calendar.",
	},
	{
		id: "03",
		title: "Can I book a class directly through this form?",
		content:
			"This form is for general inquiries and questions. To book a class, use the 'Book a class' button in our navigation — it connects you directly to our scheduling calendar for real-time availability.",
	},
	{
		id: "04",
		title: "Where are you located?",
		content:
			"We're based in Abu Dhabi, UAE. We offer both in-person sessions across Abu Dhabi and virtual classes you can join from anywhere. Corporate bookings are available UAE-wide.",
	},
	{
		id: "05",
		title: "Do you work with beginners?",
		content:
			"Absolutely. Most of our community members started as complete beginners. Every session is designed to meet you where you are — no experience, flexibility, or special equipment needed.",
	},
] as const;

export const TRUST_POINTS = [
	{
		id: "01",
		title: "Personal Response",
		description:
			"Every message is read and answered by Vila personally — no bots, no generic replies.",
	},
	{
		id: "02",
		title: "No Commitment Required",
		description:
			"Asking a question doesn't mean signing up. We're here to help, even if you're just exploring.",
	},
	{
		id: "03",
		title: "Fast Turnaround",
		description:
			"Most inquiries are answered within 24 hours. We respect your time as much as we value ours.",
	},
] as const;
