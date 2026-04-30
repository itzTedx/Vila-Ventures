import { payload } from "@/payload";

export const getClasses = async () => {
	const { docs } = await payload.find({
		collection: "classes",
		depth: 1,
		limit: 100,
		pagination: false,
		sort: "sortOrder",
	});

	return docs;
};

export const getClassPricingPlans = async () => {
	const { docs } = await payload.find({
		collection: "class-plans",
		depth: 1,
		limit: 100,
		pagination: false,
		sort: "sortOrder",
	});

	return docs;
};
