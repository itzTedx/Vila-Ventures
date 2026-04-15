"use client";

import { useEffect, useRef, useState } from "react";

import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";

import { cn } from "@/lib/utils";

export function NumberCounter({
	className,
	suffix,
	value,
	once = false,
	delayInMs = 100,
}: {
	className?: string;
	suffix?: string;
	value: number;
	delayInMs?: number;
	once?: boolean;
}) {
	const [number, setNumber] = useState(0);
	const ref = useRef(null);
	const targetNumber = Number(value);
	const isInView = useInView(ref, {
		margin: "0px 0px -100px 0px",
		once,
		amount: 0.2,
	});

	useEffect(() => {
		if (!isInView) return;

		const timeoutId = window.setTimeout(() => {
			setNumber(targetNumber);
		}, delayInMs);

		return () => window.clearTimeout(timeoutId);
	}, [isInView, targetNumber, delayInMs]);

	return (
		<NumberFlow
			className={cn(className)}
			ref={ref}
			spinTiming={{ duration: 1200, easing: "ease-in-out" }}
			suffix={suffix}
			value={number}
		/>
	);
}
