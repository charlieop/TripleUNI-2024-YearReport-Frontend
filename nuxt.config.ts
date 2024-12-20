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
  // app: {
  //   baseURL: "/2025YearSummary-Preview/",
  // },
});
