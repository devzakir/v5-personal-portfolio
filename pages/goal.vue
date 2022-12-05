<template>
  <div>
    <div class="py-16 bg-gray-100 dark:bg-gray-900 dark:border-b-gray-800 border-b">
      <div class="max-w-5xl mx-auto px-6 lg:px-0">
        <div class="flex flex-wrap w-full flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white"> 
            Next 5 Months Target (August to December)
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
            Learn about my next move, goals & target. See what I am working on and what I am looking to achieve.
          </p>
        </div>
      </div>
    </div>
    <section class="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font border-b border-b-gray-200 dark:border-b-gray-700">
      <div class="max-w-5xl py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/2 flex" v-for="(item, index) in items" :key="index">
            <div class="flex-grow pl-6">
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{{ item.status }}</span>
              <h2 class="mt-1 text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2">
                {{ item.title}}
              </h2>
              <p class="leading-relaxed text-base">{{ item.description }}</p>
              <p class="leading-relaxed text-base">{{ item.timelength }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
  import { ref } from 'vue';

  useHead({
    title: 'My Next 6 Months Target - Zakir Hossen',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })

  const items = ref([
    {
      timelength: "August",
      title: "Working on My Youtube Channels",
      status: "In Progress",
      description: "I am working on my youtube channels and I am going to be publishing new videos every week.",
    },
    {
      timelength: "September",
      title: "Building Youtue Studio",
      status: "Complete",
      description: "I am working on my youtube channels and I am going to be publishing new videos every week.",
    },
    {
      timelength: "October",
      title: "Create a Premium Course",
      status: "Upcoming",
      description: "I am working on my youtube channels and I am going to be publishing new videos every week.",
    },
    {
      timelength: "November",
      title: "Create 2nd Premium Course",
      status: "Upcoming",
      description: "I am working on my youtube channels and I am going to be publishing new videos every week.",
    },
    {
      month: "December",
      title: "Invest in someone else's portfolio",
      status: "Upcoming",
      description: "I am working on my youtube channels and I am going to be publishing new videos every week.",
    },
  ]);
</script>

<style>

</style>
