<template>
  <section class="text-gray-600 body-font bg-gray-50 dark:text-gray-400 dark:bg-gray-900">
    <div class="max-w-5xl px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          My Favourite Quotes
        </h1>
        <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun</p> -->
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4" v-for="(item, index) in data.body" :key="index">
          <blockquote class="px-8 py-6 h-full border-4 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 ">
            <svg class="-scale-x-100 mb-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path><path d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
            <p>{{ item.text }}</p>
              <strong class="pt-3 flex justify-end">&mdash; {{ item.author }}</strong>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
  useHead({
    title: 'My favourite quotes - Zakir Hossen',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })

  const { data } = await useAsyncData('quotes', () => queryContent('/quotes').findOne())
</script>
