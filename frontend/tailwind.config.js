/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(147, 51, 234) rgb(15, 23, 42)",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(147, 51, 234)",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    },
  ],
};
