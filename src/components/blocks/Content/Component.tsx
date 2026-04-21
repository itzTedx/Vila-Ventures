import React from "react";

import type { DefaultDocumentIDType } from "payload";

import { CMSLink } from "@/components/link";
import { RichText } from "@/components/rich-text";

import { cn } from "@/lib/utils";
import type { ContentBlock as ContentBlockProps } from "@/payload-types";

export const ContentBlock: React.FC<
	ContentBlockProps & {
		id?: DefaultDocumentIDType;
		className?: string;
	}
> = (props) => {
	const { columns } = props;

	const colsSpanClasses = {
		full: "12",
		half: "6",
		oneThird: "4",
		twoThirds: "8",
	};

	return (
		<div className="container my-16">
			<div className="grid grid-cols-4 gap-x-16 gap-y-8 lg:grid-cols-12">
				{columns &&
					columns.length > 0 &&
					columns.map((col) => {
						const { enableLink, link, richText, size } = col;

						return (
							<div
								className={cn(
									`col-span-4 lg:col-span-${colsSpanClasses[size!]}`,
									{
										"md:col-span-2": size !== "full",
									}
								)}
								key={col.id}
							>
								{richText && <RichText data={richText} enableGutter={false} />}

								{enableLink && <CMSLink {...link} />}
							</div>
						);
					})}
			</div>
		</div>
	);
};
