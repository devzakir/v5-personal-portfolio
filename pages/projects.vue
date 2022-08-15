<template>
  <div class="py-16 bg-gray-100 dark:bg-gray-900 dark:border-b-gray-800 border-b">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-wrap w-full flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white"> 
          All Projects
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
          Learn about my previous and current projects I have worked on.
        </p>
      </div>
    </div>
  </div>
  <section v-for="(item, index) in data.body" :key="index" class="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font border-b border-b-gray-200 dark:border-b-gray-700">
    <div class="max-w-5xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" :class="index % 2 === 1 ? 'lg:pl-24 md:pl-16 order-2' : 'lg:pr-24 md:pr-16 '">
        <span class="lowercase text-sm mb-2 text-gray-700">{{ item.type }}</span>
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
          {{ item.name }}
        </h1>
        <p class="mb-8 leading-relaxed"> {{ item.description }} </p>
        <div class="flex justify-center">
          <a :href="item.url" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Visit Now</a>
          <!-- <button class="ml-4 inline-flex bg-gray-100 text-gray-700 dark:text-gray-400 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 rounded text-lg">Button</button> -->
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" :class="index % 2 === 1 ? 'order-1' : ''">
        <img class="object-cover object-center rounded shadow" alt="hero" v-if="item.image" :src="item.image">
        <img class="object-cover object-center rounded shadow" alt="hero" v-else src="https://dummyimage.com/720x600">
      </div>
    </div>
  </section>
</template>

<script setup>
  useHead({
    title: 'All the projects, I have started - Zakir Hossen',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })

  const { data } = await useAsyncData('projects', () => queryContent('/projects').findOne())
</script>

<style>

</style>
