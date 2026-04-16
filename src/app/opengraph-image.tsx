import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
	"Vila Ventures - Yoga Classes & Mindful Lifestyle Products in Abu Dhabi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(135deg, #1a1410 0%, #2d2118 50%, #3d2b1a 100%)",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "72px 80px",
					fontFamily: "system-ui, sans-serif",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "12px",
						}}
					>
						<div
							style={{
								width: "10px",
								height: "10px",
								borderRadius: "50%",
								backgroundColor: "#e8723a",
							}}
						/>
						<span
							style={{
								color: "#b8a08a",
								fontSize: "18px",
								letterSpacing: "0.2em",
								textTransform: "uppercase",
							}}
						>
							Rooted in Joy
						</span>
					</div>

					<h1
						style={{
							color: "#f5ede4",
							fontSize: "64px",
							fontWeight: 700,
							lineHeight: 1.1,
							maxWidth: "800px",
							margin: 0,
						}}
					>
						Yoga Classes &{" "}
						<span style={{ color: "#e8723a" }}>Mindful Lifestyle</span> Products
					</h1>

					<p
						style={{
							color: "#b8a08a",
							fontSize: "24px",
							maxWidth: "600px",
							lineHeight: 1.4,
							margin: 0,
						}}
					>
						Group, private & corporate yoga sessions. Thoughtfully designed
						lifestyle products in Abu Dhabi, UAE.
					</p>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
						<span
							style={{
								color: "#f5ede4",
								fontSize: "32px",
								fontWeight: 700,
								letterSpacing: "-0.02em",
							}}
						>
							Vila Ventures
						</span>
					</div>
					<span
						style={{
							color: "#b8a08a",
							fontSize: "18px",
						}}
					>
						vilaventures.com
					</span>
				</div>
			</div>
		),
		{ ...size },
	);
}
