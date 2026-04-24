import React from "react";

import type { StaticImageData } from "next/image";

import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { Media } from "@/components/media";
import { RichText } from "@/components/rich-text";

import { cn } from "@/lib/utils";
import type { MediaBlock as MediaBlockProps } from "@/payload-types";

export const MediaBlock: React.FC<
	MediaBlockProps & {
		id?: string | number;
		breakout?: boolean;
		captionClassName?: string;
		className?: string;
		enableGutter?: boolean;
		imgClassName?: string;
		staticImage?: StaticImageData;
		disableInnerContainer?: boolean;
	}
> = (props) => {
	const {
		captionClassName,
		className,
		enableGutter = true,
		imgClassName,
		media,
		staticImage,
		disableInnerContainer,
	} = props;

	let caption: SerializedEditorState | undefined;
	if (media && typeof media === "object" && "caption" in media) {
		caption =
			(media as { caption?: SerializedEditorState | null }).caption ??
			undefined;
	}

	return (
		<div
			className={cn(
				"",
				{
					container: enableGutter,
				},
				className
			)}
		>
			<Media
				imgClassName={cn("rounded-[0.8rem] border border-border", imgClassName)}
				resource={media}
				src={staticImage}
			/>
			{caption && (
				<div
					className={cn(
						"mt-6",
						{
							container: !disableInnerContainer,
						},
						captionClassName
					)}
				>
					<RichText data={caption} enableGutter={false} />
				</div>
			)}
		</div>
	);
};
