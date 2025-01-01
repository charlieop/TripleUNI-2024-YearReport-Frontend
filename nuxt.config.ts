// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "."),
  },
  css: [
    "@/assets/css/fonts.css",
    "@/assets/css/resets.css",
    "@/assets/css/style.css",
  ],
  ssr: false,
  app: {
    baseURL: "/2025YearSummary-Preview/",
    head: {
      title: "Triple UNI 2024 年度总结",
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "icon", type: "image/x-icon", href: "https://tripleuni.com/img/logo-512.461b29bd.png" },
      ]
    }
  },
});
