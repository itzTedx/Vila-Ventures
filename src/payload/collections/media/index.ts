import path from "path";
import type { CollectionConfig } from "payload";
import { fileURLToPath } from "url";

import { adminOnly } from "@/payload/access/shared/adminOnly";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
	admin: {
		group: "Media",
	},
	slug: "media",
	access: {
		create: adminOnly,
		delete: adminOnly,
		read: () => true,
		update: adminOnly,
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
	],
	upload: {
		staticDir: path.resolve(dirname, "../../../../public/media"),
		formatOptions: {
			format: "webp",
		},
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
};
