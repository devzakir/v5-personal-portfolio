import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Personal Portfolio - Zakir Hossen | Entrepreneur | Trainer | Full-stack Web Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Zakir Hossen is a full-stack web developer, entrepreneur, trainer at codeshikhi, founder of Templatecookie.com & Echotemplate.com & Codeshikhi.io' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode','@nuxt/content'],
  colorMode: {
    classSuffix: '',
  }
})
