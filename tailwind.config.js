/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			yellow: {
				DEFAULT: "#F3D12C",
				secondary: "#F2BC17",
			},
			red: {
				DEFAULT: "#ff1b17",
				secondary: "#E00505",
			},
			black: {
				DEFAULT: "#000",
				"1e": "#1e1e1e",
				24: "#242424",
				40: "#404040",
				63: "#636363",
			},
			white: {
				DEFAULT: "#fff",
				f2: "#f2f2f2",
				d9: "#d9d9d9",
				a6: "#a6a6a6",
			},
			backdrop: "rgba(0,0,0,.75)",
		},
		animation: {
			"slide-dow": "slide-down .3s ease-out forwards",
		},
		keyframes: {
			"slide-down": {
				"0%": {
					opacity: "0",
					translateY: "-3rem",
				},
				"100%": {
					opacity: "1",
					translateY: "0",
				},
			},
		},
	},
	plugins: [],
};
