// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseAPI: process.env.NUXT_BASE_API,
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  modules: ['@nuxtjs-alt/proxy'],
  proxy: {
    enableProxy: true,
    proxies: {
      '/api-web': {
        target: process.env.NUXT_BASE_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-web/, ''),
      },
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
