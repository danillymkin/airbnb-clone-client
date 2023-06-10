/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'base' }),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
};
