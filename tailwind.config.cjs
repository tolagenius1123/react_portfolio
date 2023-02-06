/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins"],
				sacramento: ["Sacramento"],
			},
			keyframes: {
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"80%": { transform: "scaleY(1.2)" },
					"100%": { transform: "scaleY(1)" },
				},
			},
			animation: {
				"open-menu": "open-menu 0.5s ease-in-out forwards",
			},
			backgroundImage: {
				"hero-pattern": "url('/images/my_portrait.png')",
			},
		},
	},
	plugins: [],
}
