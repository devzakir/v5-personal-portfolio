<template>
  <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900 border-t-[thin] border-t-gray-200 dark:border-t-gray-800">
    <div class="max-w-5xl mx-auto">
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="https://zakirhossen.com/" class="flex items-center mb-4 sm:mb-0">
        <img src="/logo-white.png" class="shadow mr-3 h-8 rounded-full" alt="Zakir Hossen Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zakir Hossen</span>
      </a>
      <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.url" v-if="item.target" target="_blank" :title="item.title" class="mr-4 hover:underline md:mr-6 ">
            {{ item.name }}
          </a>
          <nuxt-link :to="item.url" v-else exactActiveClass="!text-blue-600 dark:!text-blue-500" :title="item.title" class="mr-4 hover:underline md:mr-6 ">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {{ new Date().getFullYear() }} <a href="https://zakirhossen.com" class="hover:underline">Zakir Hossen</a>. All Rights Reserved.
    </span>
    </div>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        menuItems: [
          {
            id: 1,
            name: 'Resources',
            url: '/resources',
            title: 'Resources I use for web development'
          },
          {
            id: 2,
            name: 'Fav Quotes',
            url: '/quotes',
            title: 'Quotes that inspire me to move forward'
          },
          {
            id: 5,
            name: 'Work with me',
            url: '/work',
            title: 'Do you want to work with me?'
          },
          {
            id: 3,
            name: 'Learn Web Development',
            url: 'https://www.youtube.com/c/Codeshikhi?ref=zakirhossen.com',
            target: '_blank',
            title: 'Learn Web Development for Free'
          },
          {
            id: 4,
            name: 'Get Free Templates',
            url: 'https://echotemplate.com?ref=zakirhossen.com',
            target: '_blank',
            title: 'Get Free Figma & HTML Templates'
          },
        ]
      }
    }
  }
</script>

<style>

</style>
