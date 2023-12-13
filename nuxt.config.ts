// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //set port to 3101
  devServer: {
    port: 3101
  },
  ssr: false
})
