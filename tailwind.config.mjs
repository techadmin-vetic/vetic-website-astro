/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: [
          "Arial Rounded MT Bold",
          "Arial Rounded MT",
          "sans-serif",
        ],
        secondaryFont: ["HelveticaNeue", "sans-serif"],
      },
      colors: {
        primaryColor: "#FFEFF1",
        primaryFontColor: "#F05B72",
        buttonColor: "#152239",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
