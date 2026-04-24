import { getMediaUrl } from "@/lib/utils/getMediaUrl";
import { Media } from "@/payload-types";

import { getProductBySlug } from "../actions";

export function getProductImage(
	product: Awaited<ReturnType<typeof getProductBySlug>>
) {
	const firstImage = product?.gallery?.[0]?.image;
	if (!firstImage || typeof firstImage !== "object") return "";
	return getMediaUrl((firstImage as Media).url);
}
