// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@ant-design-vue/nuxt'
  ],
})
