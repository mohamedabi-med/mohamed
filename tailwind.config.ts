import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        world: {
              "primary": "#000000", // Black
              "secondary": "#202020", // Slightly lighter black
              "accent": "#ffffff", // White
              "neutral": "#D3D3D3", // Light gray
              "base-100": "#ffffff", // White
              "base-0": "#000000", // Black
              "base-content": "#000000", // Black
              "base-contrast": "#ffffff", // White
              "border-accent": "#ffffff", // White
              "border-primary": "#000000", // Black
              "border-secondary": "#202020", // Slightly lighter black
              "border-base": "#ffffff" // White
            }

      },
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
 
};
export default config;
// background-image: linear-gradient( 94.3deg,  rgba(26,33,64,1) 10.9%, rgba(81,84,115,1) 87.1% );