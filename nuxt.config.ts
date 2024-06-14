// https://nuxt.com/docs/api/configuration/nuxt-config
import  autoImport  from '@pinia/nuxt'
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      bodyAttrs: {
        class: "dark:bg-[#09090b]"
      },
    },
  },
  css: ['@/main.css'],
  
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore']
    }
  ], "@nuxtjs/tailwindcss", '@formkit/auto-animate', '@vueuse/nuxt', 'nuxt-swiper', "@dargmuesli/nuxt-cookie-control", "nuxt-lodash", "@pinia/nuxt", "shadcn-nuxt"],
  pinia: {
    storesDirs: ['./stores/**', './stores'],
  },
  imports: {
    autoImport: true,
    dirs: ['./stores/**', '.components/**', '/components/main-components/**',  './components/**/*/*', './components/adminComponents/**/*', './components/adminComponents/**/*', './components/adminComponents/**/*/*/*', './features/**/*/*', './features/**/*', './features/**/*/*/*', './features/**/*/*/*/*', './features/**/*/*/*/*/*', './widgets/**/*/*', './widgets/**/*', './widgets/**/*/*/*', './widgets/**/*/*/*/*', './widgets/**/*/*/*/*/*'],
  },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      apiBase:'http://localhost:3001/api'
    }
  },
  ssr:true
})