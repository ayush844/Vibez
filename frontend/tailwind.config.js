/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "webkit-fill": "-webkit-fill-available",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
