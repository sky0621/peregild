// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: { preset: 'firebase' },
    postcss: {
        plugins: { tailwindcss: {} }
    },
    css: ['~/assets/css/tailwind.css']
})
