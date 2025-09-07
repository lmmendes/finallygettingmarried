// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@vueuse/nuxt"],
  i18n: {
    defaultLocale: 'pt',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      { code: 'pt', iso: 'pt-PT', file: 'pt.json', name: 'Português', flag: '🇵🇹' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English',   flag: '🇬🇧' }
    ],
    compilation: {
      strictMessage: false,
      escapeHtml: false
    }
  },
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
          // Elegant serif + beautiful script font
          href: "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
        },
        {
          rel: "stylesheet",
          // Google Material Icons
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
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
