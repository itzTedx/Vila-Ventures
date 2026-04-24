export function getLexicalText(node: unknown): string {
	if (!node || typeof node !== "object") return "";
	if (Array.isArray(node))
		return node.map((item) => getLexicalText(item)).join(" ");

	const record = node as Record<string, unknown>;
	const selfText = typeof record.text === "string" ? record.text : "";
	const childText = getLexicalText(record.children);

	return [selfText, childText].filter(Boolean).join(" ").trim();
}
