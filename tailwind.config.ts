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
        bgBeige: "#FFF8F0",
        beigeLight: "#FCFAF6",
        textBrown: "#484543",
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
