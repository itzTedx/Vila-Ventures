import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

async function safeRevalidatePath(path: string): Promise<void> {
	try {
		const { revalidatePath } = await import("next/cache");
		revalidatePath(path);
	} catch (error) {
		console.error(`Failed to revalidate path "${path}"`, error);
	}
}

function getSlug(value: unknown): string | null {
	if (!value || typeof value !== "object") return null;

	const slug = (value as { slug?: unknown }).slug;
	return typeof slug === "string" && slug.length > 0 ? slug : null;
}

function getStatus(value: unknown): string | null {
	if (!value || typeof value !== "object") return null;

	const status = (value as { _status?: unknown })._status;
	return typeof status === "string" ? status : null;
}

async function revalidateBlogPages(slugs: Set<string>) {
	await safeRevalidatePath("/");
	await safeRevalidatePath("/blog");
	await safeRevalidatePath("/sitemap.xml");

	for (const slug of slugs) {
		await safeRevalidatePath(`/blog/${slug}`);
	}
}

export const revalidateBlogAfterChange: CollectionAfterChangeHook = async ({
	doc,
	previousDoc,
}) => {
	const currentStatus = getStatus(doc);
	const previousStatus = getStatus(previousDoc);
	const currentSlug = getSlug(doc);
	const previousSlug = getSlug(previousDoc);

	const isCurrentlyPublished = currentStatus === "published";
	const wasPreviouslyPublished = previousStatus === "published";

	if (!isCurrentlyPublished && !wasPreviouslyPublished) {
		return doc;
	}

	const slugsToRevalidate = new Set<string>();

	if (isCurrentlyPublished && currentSlug) {
		slugsToRevalidate.add(currentSlug);
	}

	if (wasPreviouslyPublished && previousSlug) {
		slugsToRevalidate.add(previousSlug);
	}

	await revalidateBlogPages(slugsToRevalidate);

	return doc;
};

export const revalidateBlogAfterDelete: CollectionAfterDeleteHook = async ({ doc }) => {
	const slug = getSlug(doc);
	const slugsToRevalidate = new Set<string>();

	if (slug) {
		slugsToRevalidate.add(slug);
	}

	await revalidateBlogPages(slugsToRevalidate);

	return doc;
};
