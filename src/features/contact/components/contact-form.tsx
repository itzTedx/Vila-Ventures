"use client";

import { useId, useTransition } from "react";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { PaperPlaneTiltIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { CONTACT_REASONS } from "../constants";

const contactSchema = z.object({
	name: z
		.string()
		.min(2, "Please enter at least 2 characters")
		.max(100, "Name is too long"),
	email: z.email("Please enter a valid email address"),
	subject: z.string().min(1, "Please select a reason for reaching out"),
	message: z
		.string()
		.min(10, "Tell us a little more — at least 10 characters")
		.max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
	const formId = useId();
	const [isPending, startTransition] = useTransition();

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: standardSchemaResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	function onSubmit(data: ContactFormData) {
		startTransition(async () => {
			try {
				// TODO: Replace with actual API call
				await new Promise((resolve) => setTimeout(resolve, 1200));
				console.log("Form submitted:", data);
				toast.success("Message sent! We'll get back to you within 24 hours.");
				reset();
			} catch {
				toast.error(
					"Something went wrong. Please try again or email us directly."
				);
			}
		});
	}

	return (
		<form
			className="flex flex-col gap-6"
			id={formId}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FieldGroup>
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
					<Field data-invalid={!!errors.name || undefined}>
						<FieldLabel htmlFor={`${formId}-name`}>Name</FieldLabel>
						<Input
							aria-invalid={!!errors.name || undefined}
							id={`${formId}-name`}
							placeholder="Your full name"
							{...register("name")}
						/>
						<FieldError>{errors.name?.message}</FieldError>
					</Field>

					<Field data-invalid={!!errors.email || undefined}>
						<FieldLabel htmlFor={`${formId}-email`}>Email</FieldLabel>
						<Input
							aria-invalid={!!errors.email || undefined}
							id={`${formId}-email`}
							placeholder="you@example.com"
							type="email"
							{...register("email")}
						/>
						<FieldError>{errors.email?.message}</FieldError>
					</Field>
				</div>

				<Controller
					control={control}
					name="subject"
					render={({ field }) => (
						<Field data-invalid={!!errors.subject || undefined}>
							<FieldLabel htmlFor={`${formId}-subject`}>
								What can we help with?
							</FieldLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger
									aria-invalid={!!errors.subject || undefined}
									className="w-full"
									id={`${formId}-subject`}
								>
									<SelectValue placeholder="Select a topic" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{CONTACT_REASONS.map((reason) => (
											<SelectItem key={reason.value} value={reason.value}>
												{reason.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
							<FieldError>{errors.subject?.message}</FieldError>
						</Field>
					)}
				/>

				<Field data-invalid={!!errors.message || undefined}>
					<FieldLabel htmlFor={`${formId}-message`}>Message</FieldLabel>
					<Textarea
						aria-invalid={!!errors.message || undefined}
						className="min-h-32"
						id={`${formId}-message`}
						placeholder="Tell us what's on your mind — we're listening"
						{...register("message")}
					/>
					<FieldDescription>
						Share as much or as little as you'd like. We'll take it from there.
					</FieldDescription>
					<FieldError>{errors.message?.message}</FieldError>
				</Field>
			</FieldGroup>

			<div className="flex items-center gap-4">
				<Button disabled={isPending} size="lg" type="submit">
					{isPending ? (
						<SpinnerGapIcon className="animate-spin" data-icon="inline-start" />
					) : (
						<PaperPlaneTiltIcon data-icon="inline-start" />
					)}
					{isPending ? "Sending..." : "Send message"}
				</Button>
			</div>
		</form>
	);
}
