import React from "react";

import { Route } from "next";
import Link from "next/link";

import type { VariantProps } from "class-variance-authority";

import { Button, type buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import type { Product } from "@/payload-types";

type ButtonVariant = NonNullable<
	VariantProps<typeof buttonVariants>["variant"]
>;
type ButtonSize = VariantProps<typeof buttonVariants>["size"];

type CMSLinkType = {
	appearance?: "inline" | ButtonVariant | null;
	children?: React.ReactNode;
	className?: string;
	label?: string | null;
	newTab?: boolean | null;
	reference?: {
		relationTo: "pages" | "posts" | "products";
		value: Product | string | number;
	} | null;
	size?: ButtonSize | null;
	type?: "custom" | "reference" | null;
	url?: string | null;
};

export const CMSLink: React.FC<CMSLinkType> = (props) => {
	const {
		type,
		appearance = "inline",
		children,
		className,
		label,
		newTab,
		reference,
		size: sizeFromProps,
		url,
	} = props;

	const resolvedAppearance = appearance ?? "inline";

	const href =
		type === "reference" &&
		typeof reference?.value === "object" &&
		reference.value.slug
			? (`${reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""}/${
					reference.value.slug
				}` as Route)
			: (url as Route);

	if (!href) return null;

	const size = sizeFromProps ?? undefined;
	const newTabProps = newTab
		? { rel: "noopener noreferrer", target: "_blank" }
		: {};

	/* Ensure we don't break any styles set by richText */
	if (resolvedAppearance === "inline") {
		return (
			<Link className={cn(className)} href={href} {...newTabProps}>
				{label && label}
				{children && children}
			</Link>
		);
	}

	return (
		<Button
			className={className}
			nativeButton={false}
			render={<Link href={href} {...newTabProps} />}
			size={size}
			variant={resolvedAppearance}
		>
			{label && label}
			{children && children}
		</Button>
	);
};
