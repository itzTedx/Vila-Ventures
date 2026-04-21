import React, { Fragment } from "react";

import type { Page } from "@/payload-types";

import { BannerBlock } from "./Banner/Component";
import { CallToActionBlock } from "./CallToAction/Component";
import { CarouselBlock } from "./Carousel/Component";
import { ContentBlock } from "./Content/Component";
import { MediaBlock } from "./MediaBlock/Component";
import { ThreeItemGridBlock } from "./ThreeItemGrid/Component";

const blockComponents = {
	banner: BannerBlock,
	carousel: CarouselBlock,
	content: ContentBlock,
	cta: CallToActionBlock,
	mediaBlock: MediaBlock,
	threeItemGrid: ThreeItemGridBlock,
};

type BlockType = keyof typeof blockComponents;

function isBlockType(value: unknown): value is BlockType {
	return typeof value === "string" && value in blockComponents;
}

export const RenderBlocks: React.FC<{
	blocks: Page["layout"][0][];
}> = (props) => {
	const { blocks } = props;

	const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

	if (hasBlocks) {
		return (
			<Fragment>
				{blocks.map((block) => {
					const { blockName, blockType } = block;

					if (isBlockType(blockType)) {
						const Block = blockComponents[blockType];

						if (Block) {
							return (
								<div className="my-16" key={block.id}>
									{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
									{/* @ts-ignore - weird type mismatch here */}
									<Block id={toKebabCase(blockName!)} {...block} />
								</div>
							);
						}
					}
					return null;
				})}
			</Fragment>
		);
	}

	return null;
};
