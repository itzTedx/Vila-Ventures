import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	typedRoutes: true,

	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "services-rustfs-099274-195-110-59-55.traefik.me",
			},
		],
		qualities: [100, 75],
	},

	experimental: {
		// Enable filesystem caching for `next dev`
		turbopackFileSystemCacheForDev: true,
		// Enable filesystem caching for `next build`
		turbopackFileSystemCacheForBuild: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
