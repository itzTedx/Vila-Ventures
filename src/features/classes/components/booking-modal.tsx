"use client";

import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useContext,
	useState,
} from "react";

import { CheckIcon, SpinnerGapIcon, StarIcon } from "@phosphor-icons/react";
import { useForm } from "@tanstack/react-form";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogCreateHandle,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPanel,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerCreateHandle,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Currency } from "@/assets/icons/currency";

import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { pluralize } from "@/lib/utils/pluralize";

export type ClassType = "virtual" | "physical";
export type FormatType = "group" | "private";

export interface PlanData {
	name: string;
	classes: number;
	frequency: string;
	price: number;
	popular?: boolean;
}

interface MembershipSelectionContextValue {
	classType: ClassType;
	setClassType: Dispatch<SetStateAction<ClassType>>;
	formatType: FormatType;
	setFormatType: Dispatch<SetStateAction<FormatType>>;
	selectedPlan: PlanData | null;
	setSelectedPlan: Dispatch<SetStateAction<PlanData | null>>;
	currentPlans: PlanData[];
	closeAllModals: () => void;
}

const MembershipSelectionContext =
	createContext<MembershipSelectionContextValue | null>(null);

const PLANS: Record<ClassType, Record<FormatType, PlanData[]>> = {
	virtual: {
		group: [
			{ name: "Starter", classes: 4, frequency: "1 Per Week", price: 180 },
			{
				name: "Regular",
				classes: 8,
				frequency: "2 Per Week",
				price: 300,
				popular: true,
			},
			{ name: "Intensive", classes: 12, frequency: "3 Per Week", price: 420 },
		],
		private: [
			{ name: "Starter", classes: 4, frequency: "1 Per Week", price: 350 },
			{ name: "Regular", classes: 8, frequency: "2 Per Week", price: 650 },
			{ name: "Intensive", classes: 12, frequency: "3 Per Week", price: 950 },
		],
	},
	physical: {
		group: [
			{ name: "Starter", classes: 4, frequency: "1 Per Week", price: 250 },
			{
				name: "Regular",
				classes: 8,
				frequency: "2 Per Week",
				price: 450,
				popular: true,
			},
			{ name: "Intensive", classes: 12, frequency: "3 Per Week", price: 600 },
		],
		private: [
			{ name: "1 Person", classes: 1, frequency: "Per Session", price: 250 },
			{ name: "2-3 Person", classes: 1, frequency: "Per Person", price: 200 },
		],
	},
};

interface PlansModalProps {
	trigger: React.ReactElement;
}

const FORM_TITLE = "Choose Your Yoga Plan";
const FORM_DESCRIPTION = "Flexible options for your wellness journey";
const BOOK_NOW_LABEL = "Book Now";
const LEAD_FORM_TITLE = "Almost there";
const LEAD_FORM_DESCRIPTION =
	"Share your details and we will contact you to finalize your booking.";
const leadCaptureDrawerHandle = DrawerCreateHandle();
const leadCaptureDialogHandle = DialogCreateHandle();

export function MembershipSelectionProvider({
	children,
	onCloseAllModals,
}: {
	children: React.ReactNode;
	onCloseAllModals: () => void;
}) {
	const [classType, setClassType] = useState<ClassType>("virtual");
	const [formatType, setFormatType] = useState<FormatType>("group");
	const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);

	const currentPlans = PLANS[classType][formatType];

	return (
		<MembershipSelectionContext.Provider
			value={{
				classType,
				setClassType,
				formatType,
				setFormatType,
				selectedPlan,
				setSelectedPlan,
				currentPlans,
				closeAllModals: onCloseAllModals,
			}}
		>
			{children}
		</MembershipSelectionContext.Provider>
	);
}

export function useMembershipSelection() {
	const context = useContext(MembershipSelectionContext);

	if (!context) {
		throw new Error(
			"useMembershipSelection must be used within a MembershipSelectionProvider"
		);
	}

	return context;
}

export function MembershipModal({ trigger }: PlansModalProps) {
	const isMobile = useMediaQuery("max-md");
	const [open, setOpen] = useState(false);

	if (isMobile) {
		return (
			<MembershipSelectionProvider onCloseAllModals={() => setOpen(false)}>
				<Drawer onOpenChange={setOpen} open={open}>
					<DrawerTrigger render={trigger} />
					<DrawerPopup showBar>
						<DrawerHeader>
							<DrawerTitle>{FORM_TITLE}</DrawerTitle>
							<DrawerDescription>{FORM_DESCRIPTION}</DrawerDescription>
						</DrawerHeader>

						<DrawerPanel className="grid gap-4" scrollable={false}>
							<Selector />
						</DrawerPanel>
						<DrawerFooter>
							<ConfirmationModal />
						</DrawerFooter>
					</DrawerPopup>
				</Drawer>
			</MembershipSelectionProvider>
		);
	}

	return (
		<MembershipSelectionProvider onCloseAllModals={() => setOpen(false)}>
			<Dialog onOpenChange={setOpen} open={open}>
				<DialogTrigger render={trigger} />
				<DialogPopup>
					<DialogHeader className="border-b">
						<DialogTitle>{FORM_TITLE}</DialogTitle>
						<DialogDescription>{FORM_DESCRIPTION}</DialogDescription>
					</DialogHeader>

					<DialogPanel className="mt-4 grid gap-4">
						<Selector />
					</DialogPanel>
					<DialogFooter>
						<ConfirmationModal />
					</DialogFooter>
				</DialogPopup>
			</Dialog>
		</MembershipSelectionProvider>
	);
}

export function Selector() {
	const {
		classType,
		setClassType,
		formatType,
		setFormatType,
		selectedPlan,
		setSelectedPlan,
		currentPlans,
	} = useMembershipSelection();

	return (
		<div className="space-y-6">
			{/* Step 1: Class Type */}
			<div className="space-y-2.5">
				<div className="flex items-center gap-2">
					<div className="flex size-5 items-center justify-center rounded-full bg-primary text-white text-xs">
						1
					</div>
					<h3 className="font-medium text-muted-foreground">
						Select Class Type
					</h3>
				</div>

				<div className="flex gap-3">
					{(["virtual", "physical"] as ClassType[]).map((type) => (
						<Button
							className="flex-1"
							key={type}
							onClick={() => {
								setClassType(type);
								setSelectedPlan(null);
							}}
							size="lg"
							variant={classType === type ? "default" : "outline"}
						>
							{type === "virtual" ? "Virtual Classes" : "Physical Classes"}
						</Button>
					))}
				</div>
			</div>

			{/* Step 2: Format Type */}
			<div className="space-y-2.5">
				<div className="flex items-center gap-2">
					<div className="flex size-5 items-center justify-center rounded-full bg-primary text-white text-xs">
						2
					</div>
					<h3 className="font-medium text-muted-foreground">Select Format</h3>
				</div>

				<div className="flex gap-3">
					<Button
						className="flex-1"
						onClick={() => {
							setFormatType("group");
							setSelectedPlan(null);
						}}
						size="lg"
						variant={formatType === "group" ? "default" : "outline"}
					>
						Group Classes
					</Button>
					<Button
						className="flex-1"
						onClick={() => {
							setFormatType("private");
							setSelectedPlan(null);
						}}
						size="lg"
						variant={formatType === "private" ? "default" : "outline"}
					>
						{classType === "physical" && formatType === "private"
							? "Private (Max 3 Students)"
							: "Private Classes"}
					</Button>
				</div>
			</div>

			{/* Step 3: Plan Cards */}
			<div className="space-y-2">
				<div className="flex items-center gap-2">
					<div className="flex size-5 items-center justify-center rounded-full bg-primary text-white text-xs">
						3
					</div>
					<h3 className="font-medium text-muted-foreground">
						Choose Your Plan
					</h3>
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="grid gap-4"
						exit={{ opacity: 0, y: -10 }}
						initial={{ opacity: 0, y: 10 }}
						key={`${classType}-${formatType}`}
						transition={{ duration: 0.3 }}
					>
						{currentPlans.map((plan) => (
							<button
								className={cn(
									"relative isolate z-0 overflow-visible rounded-2xl p-6 text-left transition-all duration-300",
									selectedPlan === plan
										? "bg-white ring-2 ring-primary"
										: "bg-muted/60 hover:bg-muted"
								)}
								key={plan.name}
								onClick={() => setSelectedPlan(plan)}
							>
								{plan.popular && (
									<Badge className="absolute -top-3 left-4 z-10 h-6 border border-primary/60 bg-card font-medium text-xs supports-backdrop-filter:bg-card supports-backdrop-filter:text-primary">
										<StarIcon
											className="size-3"
											data-icon="inline-start"
											weight="fill"
										/>
										Best Value
									</Badge>
								)}

								<div className="flex items-start justify-between gap-3">
									<div className="flex-1">
										<div className="flex items-center gap-3">
											<h4 className="font-semibold text-xl">{plan.name}</h4>
											{selectedPlan === plan && (
												<motion.div
													animate={{ scale: 1 }}
													className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-primary"
													initial={{ scale: 0 }}
												>
													<CheckIcon className="text-white" />
												</motion.div>
											)}
										</div>
										<div className="flex items-center gap-2 text-[#6B5D4F] text-sm">
											<span>
												{pluralize({
													count: plan.classes,
													singular: "Class",
													plural: "Classes",
												})}
											</span>
											<span className="size-1 rounded-full bg-muted-foreground/50" />
											<span>{plan.frequency}</span>
										</div>
									</div>
									<div className="text-right">
										<div className="mb-1 font-medium text-2xl">
											{plan.price}
											<Currency className="ml-0.5 inline text-muted-foreground" />
										</div>
										{classType === "physical" &&
											formatType === "private" &&
											plan.name === "2-3 Person" && (
												<div className="text-xs">Per Person</div>
											)}
									</div>
								</div>
							</button>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

function ConfirmationModal() {
	const isMobile = useMediaQuery("max-md");

	if (isMobile) {
		return (
			<Drawer>
				<DrawerTrigger render={<Button />}>{BOOK_NOW_LABEL}</DrawerTrigger>
				<DrawerPopup showBar>
					<DrawerHeader>
						<DrawerTitle>{FORM_TITLE}</DrawerTitle>
						<DrawerDescription>{FORM_DESCRIPTION}</DrawerDescription>
					</DrawerHeader>

					<DrawerPanel className="grid gap-4" scrollable={false}>
						<BookingForm />
					</DrawerPanel>
					<DrawerFooter>
						<DrawerClose render={<Button variant="ghost" />}>Back</DrawerClose>
						<LeadCaptureModal />
					</DrawerFooter>
				</DrawerPopup>
			</Drawer>
		);
	}

	return (
		<Dialog>
			<DialogTrigger render={<Button />}>{BOOK_NOW_LABEL}</DialogTrigger>
			<DialogPopup>
				<DialogHeader className="border-b">
					<DialogTitle>{FORM_TITLE}</DialogTitle>
					<DialogDescription>{FORM_DESCRIPTION}</DialogDescription>
				</DialogHeader>

				<DialogPanel className="mt-4 grid gap-4">
					<BookingForm />
				</DialogPanel>
				<DialogFooter>
					<DialogClose render={<Button variant="ghost" />}>Back</DialogClose>
					<LeadCaptureModal />
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}

function LeadCaptureModal() {
	const { selectedPlan } = useMembershipSelection();
	const isMobile = useMediaQuery("max-md");
	const [open, setOpen] = useState(false);

	const triggerLabel = selectedPlan
		? "Continue Booking"
		: "Select a plan first";

	if (isMobile) {
		return (
			<>
				<DrawerTrigger
					disabled={!selectedPlan}
					handle={leadCaptureDrawerHandle}
					render={<Button className="px-6" type="button" />}
				>
					{triggerLabel}
				</DrawerTrigger>
				<Drawer
					handle={leadCaptureDrawerHandle}
					onOpenChange={setOpen}
					open={open}
				>
					<DrawerPopup showBar>
						<DrawerHeader>
							<DrawerTitle>{LEAD_FORM_TITLE}</DrawerTitle>
							<DrawerDescription>{LEAD_FORM_DESCRIPTION}</DrawerDescription>
						</DrawerHeader>
						<DrawerPanel className="grid gap-4">
							<LeadCaptureForm onSubmitted={() => setOpen(false)} />
						</DrawerPanel>
					</DrawerPopup>
				</Drawer>
			</>
		);
	}

	return (
		<>
			<DialogTrigger
				disabled={!selectedPlan}
				handle={leadCaptureDialogHandle}
				render={<Button className="px-6" type="button" />}
			>
				{triggerLabel}
			</DialogTrigger>
			<Dialog
				handle={leadCaptureDialogHandle}
				onOpenChange={setOpen}
				open={open}
			>
				<DialogPopup>
					<DialogHeader className="border-b">
						<DialogTitle>{LEAD_FORM_TITLE}</DialogTitle>
						<DialogDescription>{LEAD_FORM_DESCRIPTION}</DialogDescription>
					</DialogHeader>
					<DialogPanel className="mt-4 grid gap-4">
						<LeadCaptureForm onSubmitted={() => setOpen(false)} />
					</DialogPanel>
				</DialogPopup>
			</Dialog>
		</>
	);
}

function LeadCaptureForm({ onSubmitted }: { onSubmitted: () => void }) {
	const { selectedPlan, classType, formatType, closeAllModals } =
		useMembershipSelection();

	const form = useForm({
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			notes: "",
		},
		onSubmit: async ({ value, formApi }) => {
			if (!selectedPlan) {
				toast.error("Please select a plan before continuing.");
				return;
			}

			try {
				const response = await fetch("/api/class-booking-leads", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						fullName: value.fullName,
						email: value.email,
						phone: value.phone,
						notes: value.notes,
						selectedPlan: {
							name: selectedPlan.name,
							classes: selectedPlan.classes,
							frequency: selectedPlan.frequency,
							price: selectedPlan.price,
							classType,
							formatType,
						},
					}),
				});

				if (!response.ok) {
					throw new Error("Failed to submit booking lead.");
				}

				toast.success("Booking request sent. We'll contact you shortly.");
				formApi.reset();
				onSubmitted();
				closeAllModals();
			} catch {
				toast.error("Could not submit your booking request. Please try again.");
			}
		},
	});

	if (!selectedPlan) {
		return (
			<div className="py-6 text-center text-muted-foreground text-sm">
				Select a plan first to continue.
			</div>
		);
	}

	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();
				void form.handleSubmit();
			}}
		>
			<FieldGroup>
				<form.Field
					name="fullName"
					validators={{
						onChange: ({ value }) =>
							value.trim().length < 2
								? "Please enter your full name"
								: undefined,
					}}
				>
					{(field) => {
						const hasError =
							field.state.meta.isTouched && field.state.meta.errors.length > 0;
						const errorMessage = hasError ? field.state.meta.errors[0] : null;

						return (
							<Field data-invalid={hasError || undefined}>
								<FieldLabel htmlFor={field.name}>Full name</FieldLabel>
								<Input
									aria-invalid={hasError || undefined}
									id={field.name}
									onBlur={field.handleBlur}
									onChange={(event) => field.handleChange(event.target.value)}
									placeholder="Your full name"
									value={field.state.value}
								/>
								<FieldError>
									{typeof errorMessage === "string" ? errorMessage : null}
								</FieldError>
							</Field>
						);
					}}
				</form.Field>

				<form.Field
					name="email"
					validators={{
						onChange: ({ value }) =>
							/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
								? undefined
								: "Please enter a valid email address",
					}}
				>
					{(field) => {
						const hasError =
							field.state.meta.isTouched && field.state.meta.errors.length > 0;
						const errorMessage = hasError ? field.state.meta.errors[0] : null;

						return (
							<Field data-invalid={hasError || undefined}>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									aria-invalid={hasError || undefined}
									id={field.name}
									onBlur={field.handleBlur}
									onChange={(event) => field.handleChange(event.target.value)}
									placeholder="you@example.com"
									type="email"
									value={field.state.value}
								/>
								<FieldError>
									{typeof errorMessage === "string" ? errorMessage : null}
								</FieldError>
							</Field>
						);
					}}
				</form.Field>

				<form.Field
					name="phone"
					validators={{
						onChange: ({ value }) =>
							value.trim().length < 6
								? "Please enter a valid phone number"
								: undefined,
					}}
				>
					{(field) => {
						const hasError =
							field.state.meta.isTouched && field.state.meta.errors.length > 0;
						const errorMessage = hasError ? field.state.meta.errors[0] : null;

						return (
							<Field data-invalid={hasError || undefined}>
								<FieldLabel htmlFor={field.name}>Phone</FieldLabel>
								<Input
									aria-invalid={hasError || undefined}
									id={field.name}
									onBlur={field.handleBlur}
									onChange={(event) => field.handleChange(event.target.value)}
									placeholder="+971 ..."
									value={field.state.value}
								/>
								<FieldError>
									{typeof errorMessage === "string" ? errorMessage : null}
								</FieldError>
							</Field>
						);
					}}
				</form.Field>

				<form.Field name="notes">
					{(field) => (
						<Field>
							<FieldLabel htmlFor={field.name}>Notes (optional)</FieldLabel>
							<Textarea
								id={field.name}
								onBlur={field.handleBlur}
								onChange={(event) => field.handleChange(event.target.value)}
								placeholder="Any preferences or scheduling notes"
								value={field.state.value}
							/>
						</Field>
					)}
				</form.Field>
			</FieldGroup>

			<form.Subscribe selector={(state) => state.isSubmitting}>
				{(isSubmitting) => (
					<Button
						className="w-full"
						disabled={isSubmitting}
						size="lg"
						type="submit"
					>
						{isSubmitting && (
							<SpinnerGapIcon
								className="animate-spin"
								data-icon="inline-start"
							/>
						)}
						{isSubmitting ? "Submitting..." : "Submit Booking Request"}
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
}

function BookingForm() {
	const { selectedPlan, classType, formatType } = useMembershipSelection();

	if (!selectedPlan) {
		return (
			<div className="py-8 text-center text-[#6B5D4F] text-sm">
				Select a plan to continue
			</div>
		);
	}
	return (
		<div className="space-y-6">
			<div className="space-y-3">
				<div className="flex items-start justify-between">
					<span className="text-[#6B5D4F] text-sm">Plan</span>
					<span className="text-right font-medium text-[#2C2416]">
						{selectedPlan.name}
					</span>
				</div>
				<div className="flex items-start justify-between">
					<span className="text-[#6B5D4F] text-sm">Type</span>
					<span className="text-right font-medium text-[#2C2416] capitalize">
						{classType} · {formatType}
					</span>
				</div>
				<div className="flex items-start justify-between">
					<span className="text-[#6B5D4F] text-sm">Classes</span>
					<span className="font-medium text-[#2C2416]">
						{selectedPlan.classes}{" "}
						{selectedPlan.classes > 1 ? "Classes" : "Class"}
					</span>
				</div>
				<div className="flex items-start justify-between">
					<span className="text-[#6B5D4F] text-sm">Frequency</span>
					<span className="text-right font-medium text-[#2C2416]">
						{selectedPlan.frequency}
					</span>
				</div>
			</div>

			<div className="h-px bg-linear-to-r from-transparent via-[#D4C5B0] to-transparent" />

			<div className="flex items-center justify-between">
				<span className="text-[#6B5D4F]">Total</span>
				<div className="text-right">
					<div className="text-3xl text-[#2C2416]">
						{selectedPlan.price}
						<span className="ml-1 text-[#6B5D4F] text-lg">AED</span>
					</div>
					{classType === "physical" &&
						formatType === "private" &&
						selectedPlan.name === "2-3 Person" && (
							<div className="mt-1 text-[#6B5D4F] text-xs">Per Person</div>
						)}
				</div>
			</div>
		</div>
	);
}
