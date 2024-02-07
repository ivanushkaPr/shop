export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@pinia/nuxt',
        'nuxt-medusa',
        'vuetify-nuxt-module',
    ],
    medusa: {
        baseUrl: 'http://localhost:9000',
        maxRetries: 3,
        global: true,
        server: false
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    devServer: {
        port: 8000,
    },
    googleFonts: {
        families: {
            Roboto: [200, 300, 400, 500, 600, 700, 800],
        }
    },
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions: {
            /* vuetify options */
        }
    },
    css: ['~/assets/scss/base.scss'],
    plugins: [
        { src: "~/plugins/vClickOutside", ssr: false },
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
