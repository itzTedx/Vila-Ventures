"use client";

import { useEffect, useRef } from "react";

import { domAnimation, LazyMotion, m, useInView } from "motion/react";

interface FounderStoryVideoProps {
	src: string;
}

export function FounderStoryVideo({ src }: FounderStoryVideoProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const isInView = useInView(containerRef, {
		amount: 0.55,
		margin: "0px 0px -80px 0px",
	});

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		if (isInView) {
			void video.play().catch(() => {
				// Autoplay can fail if browser policies change.
			});
			return;
		}

		video.pause();
		video.currentTime = 0;
	}, [isInView]);

	return (
		<LazyMotion features={domAnimation}>
			<m.div className="h-full w-full" ref={containerRef}>
				<m.video
					className="h-full w-full object-cover"
					loop
					muted
					playsInline
					preload="metadata"
					ref={videoRef}
					src={src}
				/>
			</m.div>
		</LazyMotion>
	);
}
