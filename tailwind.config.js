const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...fontFamily.sans]
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
