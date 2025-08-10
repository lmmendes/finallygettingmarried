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
        primary: "#48523e", // olive-ish (timer bar in mock)
        accent: "#c9c2ab", // light olive/beige
        ink: "#2a2a2a",
        olive: "#605F4B",
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
