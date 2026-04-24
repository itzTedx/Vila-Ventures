import { payload } from "@/payload";

export const getProductBySlug = async (slug: string) => {
	const { docs } = await payload.find({
		collection: "products",
		where: {
			slug: {
				equals: slug,
			},
			_status: {
				equals: "published",
			},
		},
		depth: 2,
		limit: 1,
		pagination: false,
	});

	return docs[0];
};

export const getShopProducts = async (categorySlug?: string) => {
	const hasCategoryFilter = Boolean(categorySlug && categorySlug !== "all");

	const { docs } = await payload.find({
		collection: "products",
		where: {
			_status: {
				equals: "published",
			},
			...(hasCategoryFilter
				? {
						"categories.slug": {
							equals: categorySlug,
						},
					}
				: {}),
		},
		depth: 1,
		limit: 100,
		pagination: false,
		sort: "-createdAt",
	});

	return docs;
};

export const getShopCategories = async () => {
	const { docs } = await payload.find({
		collection: "categories",
		where: {
			title: {
				exists: true,
			},
		},
		select: {
			title: true,
			slug: true,
		},
		limit: 100,
		pagination: false,
		sort: "title",
	});

	return docs;
};

export const getProductSlugs = async () => {
	const { docs } = await payload.find({
		collection: "products",
		where: {
			_status: {
				equals: "published",
			},
		},
		select: {
			slug: true,
		},
		limit: 1000,
		pagination: false,
	});

	return docs
		.map((product) => product.slug)
		.filter((slug): slug is string => Boolean(slug));
};
