import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Personal Portfolio - Zakir Hossen | Entrepreneur | Trainer | Full-stack Web Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Zakir Hossen is a full-stack web developer, entrepreneur, trainer on codeshikhi, founder of Templatecookie.com & Zakirsoft.com' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ],
      // script: [
      //   // { src: 'https://awesome-lib.js' }
      // ],
      // style: [
      //   // <style type="text/css">:root { color: red }</style>
      //   // { children: ':root { color: red }', type: 'text/css' }
      // ],
      // noscript: [
      //   // <noscript>Javascript is required</noscript>
      //   { children: 'Javascript is required' }
      // ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode','@nuxt/content'],
  colorMode: {
    classSuffix: '',
  }
})
