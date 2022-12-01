// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Personal Portfolio of Zakir Hossen | Entrepreneur | Trainer | Full-stack Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Zakir Hossen is a full-stack web developer, entrepreneur, trainer at codeshikhi, founder of Templatecookie.com & Echotemplate.com & Codeshikhi.io' },
        { name: 'og:image', content: '/zakirhossen.jpg' }
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
