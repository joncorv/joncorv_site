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
    "@vueuse/nuxt",
  ],
  $production: {
    image: {
      provider: "ipxStatic",
    },
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "JONCORV: CG & CODE",
    },
  },
  css: ["~/assets/css/main.css"],
  content: {
    database: {
      type: "d1",
      bindingName: "DB",
    },
  },
  compatibilityDate: "2024-04-03",
  nitro: {
    preset: "cloudflare_pages",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
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
      { name: "Manrope", provider: "google" },
      { name: "Plus Jakarta Sans", provider: "google" },
      { name: "Crimson Pro", provider: "google" },
    ],
  },
  icon: {
    // provider: "none",
    // clientBundle: {
    //   scan: true,
    // },
    customCollections: [
      {
        prefix: "local-icons",
        dir: "./app/assets/icons",
      },
    ],
  },
  image: {
    format: ["webp", "jpeg"],
  },

  studio: {
    repository: {
      provider: "github",
      owner: "joncorv",
      repo: "joncorv_site",
      branch: "main",
    },
  },
});
