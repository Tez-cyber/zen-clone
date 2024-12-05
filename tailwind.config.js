/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry-regular', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'circular-web': ['circular', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}