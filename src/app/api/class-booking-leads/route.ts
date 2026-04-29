import { NextResponse } from "next/server";

import { z } from "zod";

import { payload } from "@/payload";

const leadSchema = z.object({
	fullName: z.string().trim().min(2).max(100),
	email: z.email(),
	phone: z.string().trim().min(6).max(30),
	notes: z.string().trim().max(2000).optional().or(z.literal("")),
	selectedPlan: z.object({
		name: z.string().trim().min(1).max(100),
		classes: z.number().int().min(1),
		frequency: z.string().trim().min(1).max(120),
		price: z.number().min(0),
		classType: z.enum(["virtual", "physical"]),
		formatType: z.enum(["group", "private"]),
	}),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const parsed = leadSchema.safeParse(body);

		if (!parsed.success) {
			return NextResponse.json(
				{ error: "Invalid booking lead payload." },
				{ status: 400 }
			);
		}

		await payload.create({
			collection: "class-booking-leads",
			data: {
				fullName: parsed.data.fullName,
				email: parsed.data.email,
				phone: parsed.data.phone,
				notes: parsed.data.notes || undefined,
				selectedPlan: parsed.data.selectedPlan,
			},
		});

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json(
			{ error: "Failed to create booking lead." },
			{ status: 500 }
		);
	}
}
