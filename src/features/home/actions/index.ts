import { payload } from "@/payload";

export const getFaqs = async () => {
	const { docs } = await payload.find({
		collection: "faqs",
		limit: 100,
		pagination: false,
		sort: "sortOrder",
		select: {
			question: true,
			answer: true,
		},
	});

	return docs;
};
