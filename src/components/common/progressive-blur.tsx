import { cn } from "@/lib/utils";

type ProgressiveBlurProps = {
	className?: string;
	backgroundColor?: string;
	position?: "top" | "bottom";
	height?: string;
	blurAmount?: string;
};

export const ProgressiveBlur = ({
	className = "",
	position = "top",
}: ProgressiveBlurProps) => {
	const isTop = position === "top";

	return (
		<div
			className={cn(
				"gradient-blur z-10",
				isTop
					? "top-0 bottom-auto [--bottom:auto] [--dir:top] [--height:45%] [--top:0]"
					: "top-auto bottom-0 [--bottom:0] [--dir:bottom] [--height:45%] [--top:auto]",
				className
			)}
		>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
