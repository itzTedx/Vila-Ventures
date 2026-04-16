import Image from "next/image";

import { LogoIcon } from "@/assets/logo";

export const FeaturedProductSection = () => {
	return (
		<section className="grid grid-cols-2 gap-4 px-6 py-16">
			<div className="group relative aspect-4/3 overflow-hidden rounded-lg bg-taupe-900 p-16 text-card">
				<div className="relative z-10 flex h-full max-w-xs flex-col justify-between gap-4">
					<h2 className="font-display text-5xl uppercase">
						The Dawn Mat: Rise With Intention
					</h2>
					<p className="text-xl">
						A yoga mat designed to support your flow, ground your practice, and
						bring energy into every movement.
					</p>
				</div>
				<div className="absolute top-1/2 right-9 z-10 translate-x-[20%] -translate-y-1/2 overflow-hidden rounded-md shadow-lg transition-transform duration-300 ease-out group-hover:translate-x-0">
					<Image
						alt="The Dawn Mat yoga mat by Vila Ventures featuring a rising sun design with extra grip and cushioning"
						className="h-[530px] w-auto"
						height={1024}
						quality={100}
						src="/images/dawn-mat-explained.webp"
						width={1280}
					/>
				</div>
				<LogoIcon className="absolute top-40 -right-[12%] text-taupe-700/50" />
			</div>

			<div className="group relative aspect-4/3 overflow-hidden rounded-lg bg-primary p-16 text-card">
				<div className="relative z-10 flex h-full max-w-lg flex-col justify-end gap-4">
					<h3 className="font-display text-4xl uppercase">
						Move with stability. Practice with intention.
					</h3>
					<p className="text-xl">
						Created for real practice especially the kind that challenges you.
						The Dawn Mat offers a strong, steady grip that keeps you focused
						through every pose and transition.
						<br />
						<br />
						With extra space to move freely, firm cushioning for joint support,
						and a stable base that stays in place, it adapts effortlessly to
						both slow stretches and dynamic flows.
						<br />
						<br />
						Finished with a bold rising sun design, it’s more than just a mat
						it’s a daily reminder to begin with intention, energy, and joy
					</p>
				</div>

				<LogoIcon className="absolute -right-[12%] bottom-40 text-orange-700/20" />
			</div>
		</section>
	);
};
