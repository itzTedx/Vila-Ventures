import Image from "next/image";

import { ProgressiveBlur } from "@/components/common/progressive-blur";
import { Button } from "@/components/ui/button";

import { CLASSES } from "@/constants/classes";

export const ClassesGrid = () => {
	return (
		<div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">
			{CLASSES.map((item) => (
				<div className="group" key={item.id}>
					<div className="mb-2 flex items-center justify-between gap-3 rounded-lg bg-card p-6">
						<h3 className="font-bold text-xl">{item.name}</h3>
						<Button className="bg-card" variant="outline">
							{item.button}
						</Button>
					</div>
					<div className="rounded-[calc(var(--radius)+4px)] bg-card p-1">
						<div className="relative aspect-4/3 size-full overflow-hidden rounded-lg">
							<div className="absolute inset-x-0 bottom-0 z-20 p-6 text-card">
								<p className="text-lg text-medium tracking-wide">
									{item.description}
								</p>
							</div>
							<div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-black/50 to-transparent" />
							<ProgressiveBlur className="[--height:40%]" position="bottom" />
							<Image
								alt={item.name}
								className="object-cover transition-[scale] duration-300 group-hover:scale-105"
								fill
								src={item.image}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
