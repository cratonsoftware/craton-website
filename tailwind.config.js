/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				destaque: '#C2410C',
				n1: '#FAF9F6',
				n2: '#C7C4BF',
				n3: '#918D8A',
				n4: '#4D4A48',
				fundo: '#1A1716',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
