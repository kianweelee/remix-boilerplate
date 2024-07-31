const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    extend: {},
  },

  plugins: [flowbite.plugin()],
};
