import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBeige: "#FAF7F2",
        beigeLight: "#FCFAF6"
      },
      fontFamily : {
        "subtext-heebo": ["Heebo"],
        "heading-playfair": ['Playfair Display']
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
