<template>
  <div>
    <div class="py-16 bg-gray-100 dark:bg-gray-900 dark:border-b-gray-800 border-b">
        <div class="max-w-5xl mx-auto px-6 lg:px-0">
        <div class="flex flex-wrap w-full flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white"> 
            My Career Timeline
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">The only impossible journey is the one you never begin. Life is a journey and every chapter is very interesting </p>
        </div>
        </div>
    </div>
    <div class="py-16 bg-white dark:bg-gray-900">
        <div class="max-w-5xl mx-auto px-6 lg:px-0">
        <ol class="ml-5 relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6" v-for="(item, index) in data.body" :key="index">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-gray-100 dark:ring-gray-800 dark:bg-blue-900">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"></path>
                </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {{ item.title }}
                <span v-if="item.latest" class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on {{ item.date }}
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {{ item.description }}
            </p>
            </li>
        </ol>
        </div>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Life & Career Timeline',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })

  const { data } = await useAsyncData('timeline', () => queryContent('/timeline').findOne())
</script>
