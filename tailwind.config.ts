import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./app/**/*.{vue,ts}",
    "./app/components/**/*.{vue,ts}",
    "./app/layouts/**/*.{vue,ts}",
    "./app/pages/**/*.{vue,ts}",
    "./app/composables/**/*.ts",
    "./app/plugins/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#605F4B", // Main text color from Figma
        accent: "#C47457", // Link/accent color from Figma  
        "bg-light": "#F7F8FC", // Light background from Figma
        "bg-card": "#F9F4EA", // Card background from Figma
        olive: "#9C9E80", // Button/accent color from Figma
        ink: "#2a2a2a",
      },
      fontFamily: {
        serif: ['Newsreader', "serif"],
        display: ['Caveat', 'cursive']
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};
