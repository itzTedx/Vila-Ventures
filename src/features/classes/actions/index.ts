import { getMediaUrl } from "@/lib/utils/getMediaUrl";
import { payload } from "@/payload";
import type { Class, Media } from "@/payload-types";

export type ClassOffering = {
	id: string;
	name: string;
	tagline: string;
	description: string;
	bestFor: string;
	format: string;
	image: string;
};

export type ClassPricingPlan = {
	id: string;
	planName: string;
	classesLabel: string;
	frequencyLabel: string;
	priceLabel: string;
	pricingType: "group" | "private";
	deliveryMode: "virtual" | "physical";
	maxStudents?: string;
};

type ClassPlanDoc = {
	id: number | string;
	planName: string;
	classesLabel: string;
	frequencyLabel: string;
	priceLabel: string;
	pricingType: "group" | "private";
	deliveryMode: "virtual" | "physical";
	maxStudents?: string | null;
};

const getClassImage = (cls: Class): string => {
	const media = cls.image;

	if (!media || typeof media !== "object") {
		return "";
	}

	return getMediaUrl((media as Media).url);
};

export const getClasses = async (): Promise<ClassOffering[]> => {
	const { docs } = await payload.find({
		collection: "classes",
		depth: 1,
		limit: 100,
		pagination: false,
		sort: "sortOrder",
	});

	return docs.map((cls) => ({
		id: cls.slug,
		name: cls.title,
		tagline: cls.tagline,
		description: cls.description,
		bestFor: cls.bestFor ?? "",
		format: cls.format ?? "",
		image: getClassImage(cls),
	}));
};

export const getClassPricingPlans = async (): Promise<ClassPricingPlan[]> => {
	const { docs } = await payload.find({
		collection: "class-plans",
		depth: 1,
		limit: 100,
		pagination: false,
		sort: "sortOrder",
	});

	return (docs as ClassPlanDoc[]).map((plan) => ({
		id: String(plan.id),
		planName: plan.planName,
		classesLabel: plan.classesLabel,
		frequencyLabel: plan.frequencyLabel,
		priceLabel: plan.priceLabel,
		pricingType: plan.pricingType,
		deliveryMode: plan.deliveryMode,
		maxStudents: plan.maxStudents ?? undefined,
	}));
};
