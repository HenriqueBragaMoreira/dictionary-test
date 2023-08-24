import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "128": "29.313rem",
        "256": "39.625rem",
        "156": "35.563rem",
      },
      colors: {
        "spacial-gray": "#979797",
        "h-light-gray": "#F4F4F4",
        "h-light-purple": "#A745EC",
        "h-dark-gray": "#1F1F1F",
      },
      zIndex: {
        "1": "1",
      },
    },
  },
  plugins: [],
};
export default config;
