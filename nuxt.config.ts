export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/strapi',
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@pinia/nuxt',
        '@nuxtjs/storybook',
    ],
    devServer: {
        port: 8000,
    },
    strapi: {
    devtools: true,
        url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    },
    googleFonts: {
        families: {
            Roboto: true,
        }
    },
    css: ['~/assets/scss/base.scss'],
    plugins: [
        { src: "~/plugins/vClickOutside", ssr: false },
        { src: "~/plugins/vueStarRating", ssr: false },
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/mixins.scss" as *; ' +
                        '@use "~/assets/scss/variables.scss" as *;'
                }
            }
        }
    }
})
