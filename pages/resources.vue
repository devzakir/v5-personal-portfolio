<template>
  <section class="text-gray-600 dark:text-gray-400 body-font bg-white dark:bg-gray-900 py-24">
    <div class="max-w-5xl mx-auto px-6 lg:px-0">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white"> 
          Web Development Resources
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
          Resources I use for my web development projects, and for others to use.
        </p>
      </div>
    </div>
    <div class="max-w-5xl pb-16 mx-auto" v-for="(section, index) in data.body" :key="index">
      <div class="flex flex-wrap w-full mb-10">
        <h1 class="sm:text-2xl text-xl font-medium title-font text-gray-700 dark:text-white"> {{ section.title }}</h1>
      </div>
      <div class="flex flex-wrap -m-4 items-stretch">
        <div class="xl:w-1/3 md:w-1/2 p-4 h-full" v-for="(item, itemIndex) in section.items" :key="itemIndex">
          <div class="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <img :src="item.image" alt="">
            </div>
            <a :href="item.url" target="_blank">
              <h2 class="text-lg text-gray-900 dark:text-white font-medium title-font mb-2"> {{ item.title }} </h2>
            </a>
            <p class="leading-relaxed text-base"> {{ item.description }} </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  useHead({
    title: 'A curated List for Designer and Developer - Zakir Hossen',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })

  const { data } = await useAsyncData('resources', () => queryContent('/resources').findOne())
</script>
<style>

</style>
