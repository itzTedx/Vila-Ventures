import Link from "next/link";

import {
	CalendarBlankIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

import { Logo } from "@/assets/logo";

import { NAV_LINKS } from "@/constants/layout";

export const Navbar = () => {
	return (
		<header className="fixed inset-x-0 top-4 z-9999">
			<div className="container mx-auto flex h-14 items-center justify-between px-4">
				<div className="flex w-full items-center gap-2">
					<Logo />
				</div>
				<nav className="flex h-full items-center rounded-lg bg-card px-6">
					<ul className="flex items-center gap-4">
						{NAV_LINKS.map((nav) => (
							<li key={`${nav.href}-${nav.label}`}>
								<Link
									className="px-2 py-3 font-medium text-foreground text-sm transition-colors hover:text-primary"
									href={nav.href}
								>
									{nav.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex w-full justify-end">
					<div className="flex items-center gap-2 rounded-md border border-card/20 bg-card/95 p-1 backdrop-blur-lg supports-backdrop-filter:bg-muted-foreground/20">
						<Button size="icon-lg" variant="ghost">
							<MagnifyingGlassIcon size={24} />
						</Button>
						<Button size="icon-lg" variant="ghost">
							<ShoppingCartIcon size={24} />
						</Button>
						<Button size="lg">
							<CalendarBlankIcon data-icon="inline-start" size={24} /> Book a
							class
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
