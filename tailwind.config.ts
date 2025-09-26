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
        primary: "#716C3B", // Main text color from Figma
        secondary: "#ACAB92", // Light green - sage
        accent: "#8D593A", // Rust  
        "accent-light": "#D39471", // Terracota
        "accent-mustard": "#BD8F48",
        "accent-sunset": "#DAB79A",
        "accent-blue": "#E2EBE6",
        "bg-light": "#F7F8FC", // Light background from Figma
        "bg-card": "#F9F4EA", // Card background from Figma
        "bg-subtle": "#FFFCF6", // Sublt background for the page
        olive: "#9C9E80", // Button/accent color from Figma
        ink: "#2a2a2a",
        white: "#FFFFFF",
      },
      fontFamily: {
        serif: ['Newsreader', "serif"],
        display: ['Great Vibes', 'cursive'],
        caption: ['Questrial', 'sans-serif']
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};
