/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-red': '#ff621a',
        'soft-yellow': '#fec548',
        'soft-orange-red': '#ffe4aa',
        'dark-gray': '#383838',
        'dark-gray-2': '#4d515a',
        'soft-blue': '#9cd3d1',
        'soft-red': '#fecbb4',
        'soft-gray-lighter': '#c5d39c',
        'soft-blue-2': '#94b6ff',
      },
    },
  },
  plugins: [],
}
