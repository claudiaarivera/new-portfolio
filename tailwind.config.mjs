import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
      'mobile': '480px',
      'tablet': '768px',
      'desktop': '820px',
    },
		extend: {
      fontFamily: {
        sans: ['Onest', ...defaultTheme.fontFamily.sans],
      },
    },
	},
	plugins: [],
}
