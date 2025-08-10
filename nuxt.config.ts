// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Luís & Sónia — Finalmente vai haver casamento!",
      htmlAttrs: { lang: "pt" },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          // Elegant serif + friendly sans + optional script
          href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Newsreader:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Casamento — 23 Maio 2026 — Alenquer" },
      ],
    },
  },
  tailwindcss: {
    viewer: false,
  },
  typescript: { strict: true },
});
