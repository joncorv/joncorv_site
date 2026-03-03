// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxt/fonts",
    "nuxt-studio",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-04-03",

  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
      },
    },
  },
  fonts: {
    families: [
      { name: "Playfair Display", provider: "google" },
      { name: "Space Mono", provider: "google" },
      { name: "JetBrains Mono", provider: "google" },
    ],
  },

  image: {},
});
