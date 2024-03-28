import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#1F2028",
				secondary: "#575CDF",
				accent: "#2A2B36",
				white: "#FFFFFF",
				black: "#000000",
				grey: "#767676",
				lightGrey: "#EFEFEF",
				success: "#00FF00",
				warning: "#FFA500",
				dark: "#000000",
				headerBgColor: "#2c3e50;",
				langButtonColor: "#2c3e88;",
				chatBubbleColorSent: "#dcf8c6;",
				chatBubbleColorReceived: "#f0f0f0;",
				chatBackgroundColor: "#d5f5f5;",
				red: "#FF0000",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
