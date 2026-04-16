"use client";

import { useEffect } from "react";

const CAL_ORIGIN = "https://cal.com";
const CAL_EMBED_SCRIPT = `${CAL_ORIGIN}/embed/embed.js`;

declare global {
	interface Window {
		Cal?: CalApi;
	}
}

type CalApi = ((action: string, ...args: unknown[]) => void) & {
	loaded?: boolean;
	ns?: Record<string, CalApi>;
	q?: unknown[];
};

function loadCalEmbed() {
	if (window.Cal?.loaded) return;

	const cal: CalApi = (...args: unknown[]) => {
		cal.q = cal.q || [];
		cal.q.push(args);
	};

	cal.ns = {};
	cal.loaded = false;

	window.Cal = cal;

	const script = document.createElement("script");
	script.src = CAL_EMBED_SCRIPT;
	script.async = true;
	document.head.appendChild(script);
}

export function CalEmbed() {
	useEffect(() => {
		loadCalEmbed();

		const cal = window.Cal;
		if (!cal) return;

		cal("ui", {
			theme: "light",
			cssVarsPerTheme: {
				light: {
					"cal-brand": "#c35a20",
				},
			},
			hideEventTypeDetails: false,
			layout: "month_view",
		});
	}, []);

	return null;
}
