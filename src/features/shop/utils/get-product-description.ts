import { getProductBySlug } from "../actions";
import { getLexicalText } from "./get-plaintext";

export function getProductDescription(
	product: Awaited<ReturnType<typeof getProductBySlug>>
) {
	const seoDescription = product?.meta?.description?.trim();
	if (seoDescription) return seoDescription;

	const lexicalDescription = getLexicalText(product?.description)
		.replace(/\s+/g, " ")
		.trim();
	if (lexicalDescription) return lexicalDescription.slice(0, 160);

	return "Product details from Vila Ventures.";
}
