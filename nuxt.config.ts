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
  fonts: {
    families: [
      { name: "Playfair Display", provider: "google" },
      { name: "Space Mono", provider: "google" },
      { name: "JetBrains Mono", provider: "google" },
    ],
  },
  image: {},
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
});