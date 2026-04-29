import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
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
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { useMediaQuery } from "@/hooks/use-media-query";

import { BookingFormModal } from "./booking-form";
import {
	FORM_DESCRIPTION,
	FORM_TITLE,
	useMembershipSelection,
} from "./booking-modal";

const BOOK_NOW_LABEL = "Book Now";

export function ConfirmationModal() {
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
						<ConfirmationContent />
					</DrawerPanel>
					<DrawerFooter>
						<DrawerClose render={<Button variant="ghost" />}>Back</DrawerClose>
						<BookingFormModal />
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
					<ConfirmationContent />
				</DialogPanel>
				<DialogFooter>
					<DialogClose render={<Button variant="ghost" />}>Back</DialogClose>
					<BookingFormModal />
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}

export function ConfirmationContent() {
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
