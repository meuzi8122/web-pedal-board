// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Web PedalBoard",
    },
  },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/global.css"],
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
