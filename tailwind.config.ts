import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      lato: 'var(--font-lato)',
      montserrat: 'var(--font-montserrat)'
    },

    backgroundImage: {
      hero: 'url(/images/hero-lg.jpg)',
      mobile: 'url(/images/hero-mobile.jpg)', 
    },


    extend: {
      colors: {
        accent: '#b91c1c'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
