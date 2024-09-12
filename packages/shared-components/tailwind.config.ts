import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	plugins: [],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
};
export default config;
