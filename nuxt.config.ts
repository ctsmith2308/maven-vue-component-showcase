import tailwindcss from "@tailwindcss/vite";

/**
 * Follow the tailwind official install with nuxt project: https://tailwindcss.com/docs/installation/framework-guides/nuxt
 * Using the nuxt module appears to be mismatched with latest Tailwind v4 version.
 */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  vite: {
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tailwindcss() as any,
    ]
  },
  typescript: {
    typeCheck: false,
  },
  routeRules: {
    '/docs/**': { appLayout: 'doc-layout' },
  },
  css: [
    '~/assets/css/main.css',
  ],
})