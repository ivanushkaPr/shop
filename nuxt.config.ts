export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/strapi',
        '@nuxtjs/google-fonts',
    ],
    strapi: {
        url: 'http://localhost:1337'
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
                    additionalData: '@use "~/assets/scss/variables.scss" as *;'
                }
            }
        }
    }
})
