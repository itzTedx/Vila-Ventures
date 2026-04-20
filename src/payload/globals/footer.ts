import type { GlobalConfig } from "payload";

import { adminOnly } from "@/payload/access/shared/adminOnly";
import { link } from "@/payload/features/content/fields/link";

export const Footer: GlobalConfig = {
	slug: "footer",
	access: {
		read: () => true,
		update: adminOnly,
	},
	fields: [
		{
			name: "navItems",
			type: "array",
			fields: [
				link({
					appearances: false,
				}),
			],
			maxRows: 6,
		},
	],
};
