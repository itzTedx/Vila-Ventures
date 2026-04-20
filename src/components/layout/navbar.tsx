"use client";

import { useState } from "react";

import Link from "next/link";

import {
	CalendarBlankIcon,
	ListIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	XIcon,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { Logo } from "@/assets/logo";

import { NAV_LINKS } from "@/constants/layout";

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-4 z-9999">
			<div className="container mx-auto flex h-14 items-center justify-between px-4">
				<Link className="flex flex-1 items-center gap-2" href="/">
					<Logo />
				</Link>

				<nav className="hidden h-full items-center rounded-lg border bg-card px-6 shadow-lg lg:flex">
					<ul className="flex items-center gap-4">
						{NAV_LINKS.map((nav) => (
							<li key={`${nav.href}-${nav.label}`}>
								<Link
									className="px-2 py-3 font-display text-foreground transition-colors hover:text-primary"
									href={nav.href}
								>
									{nav.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="hidden flex-1 justify-end lg:flex">
					<div className="flex items-center gap-2 rounded-[calc(var(--radius-lg)+0.25rem)] border border-border/20 bg-card/95 p-1 backdrop-blur-lg supports-backdrop-filter:bg-muted/50">
						<Button size="icon-lg" variant="ghost">
							<MagnifyingGlassIcon size={24} />
						</Button>
						<Button size="icon-lg" variant="ghost">
							<ShoppingCartIcon size={24} />
						</Button>
						<Button
							data-cal-config='{"layout":"month_view"}'
							data-cal-link="zironpro/15min"
							size="lg"
						>
							<CalendarBlankIcon data-icon="inline-start" size={24} /> Book a
							class
						</Button>
					</div>
				</div>

				<div className="flex items-center gap-2 lg:hidden">
					<div className="flex items-center gap-1 rounded-md border border-card/20 bg-card/95 p-1 backdrop-blur-lg supports-backdrop-filter:bg-muted-foreground/20">
						<Button size="icon-lg" variant="ghost">
							<ShoppingCartIcon size={20} />
						</Button>

						<Drawer direction="right" onOpenChange={setOpen} open={open}>
							<DrawerTrigger asChild>
								<Button size="icon-lg" variant="ghost">
									<ListIcon size={20} />
								</Button>
							</DrawerTrigger>
							<DrawerContent className="p-6">
								<div className="flex items-center justify-between">
									<DrawerTitle className="font-display text-lg">
										Menu
									</DrawerTitle>
									<DrawerClose asChild>
										<Button size="icon-lg" variant="ghost">
											<XIcon size={20} />
										</Button>
									</DrawerClose>
								</div>
								<nav className="mt-6 flex flex-col gap-1">
									{NAV_LINKS.map((nav) => (
										<Link
											className="rounded-md px-3 py-2.5 font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
											href={nav.href}
											key={`mobile-${nav.href}-${nav.label}`}
											onClick={() => setOpen(false)}
										>
											{nav.label}
										</Link>
									))}
								</nav>
								<div className="mt-auto flex flex-col gap-3 pt-6">
									<Button
										className="w-full"
										data-cal-config='{"layout":"month_view"}'
										data-cal-link="zironpro/15min"
										onClick={() => setOpen(false)}
										size="lg"
									>
										<CalendarBlankIcon data-icon="inline-start" size={20} />{" "}
										Book a class
									</Button>
								</div>
							</DrawerContent>
						</Drawer>
					</div>
				</div>
			</div>
		</header>
	);
};
