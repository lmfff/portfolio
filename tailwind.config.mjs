/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#3a9990',
				'accent-dark': '#325092',
				black: 'rgb(var(--black) / <alpha-value>)',
				gray: {
					DEFAULT: 'rgb(var(--gray) / <alpha-value>)',
					light: 'rgb(var(--gray-light) / <alpha-value>)',
					dark: 'rgb(var(--gray-dark) / <alpha-value>)',
				},
				bg: 'var(--bg-color)',
				text: 'var(--text-color)',
				heading: 'var(--heading-color)',
			},
			boxShadow: {
				DEFAULT:
					'0 2px 6px rgba(0, 0, 0, 25%), 0 8px 24px rgba(0, 0, 0, 33%), 0 16px 32px rgba(0, 0, 0, 33%)',
			},
		},
	},
	plugins: [],
}; 