// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    components: [
        '~/components',
    ],
    runtimeConfig: {
        apiSecret: './api',
        public: {
            apiBase: './api/index'
        }
    },
    css: [
        '@/assets/styles/main.scss'
    ],
    modules: [
        '@pinia/nuxt',
    ]
})