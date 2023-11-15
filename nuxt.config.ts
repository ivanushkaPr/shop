export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/strapi',
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@pinia/nuxt',
    ],
    strapi:
{
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
            'Josefin+Sans': true,
            'Public+Sans': true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        }
    },
    css: ['~/assets/scss/base.scss'],
    plugins: [
        { src: "~/plugins/vClickOutside", ssr: false }
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
