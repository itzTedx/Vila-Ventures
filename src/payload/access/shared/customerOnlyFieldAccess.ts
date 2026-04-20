import type { FieldAccess } from "payload";

import { checkRole } from "./checkRole";

export const customerOnlyFieldAccess: FieldAccess = ({ req: { user } }) => {
	if (user) return checkRole(["customer"], user);

	return false;
};
