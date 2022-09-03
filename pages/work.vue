<template>
  <div>
    <div class="py-16 bg-gray-100 dark:bg-gray-900 dark:border-b-gray-800 border-b">
      <div class="max-w-5xl mx-auto px-6 lg:px-0">
        <div class="flex flex-wrap w-full flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900  dark:text-gray-100"> 
            Want to work with me?
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
      </div>
    </div>
    <section class="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font border-b border-b-gray-200 dark:border-b-gray-700">
      <div class="max-w-5xl py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20">
          What I don't like about people.
        </h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/2 flex" v-for="(item, i) in whoIHate" :key="i">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"> {{ item.title }} </h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font border-b border-b-gray-200 dark:border-b-gray-700">
      <div class="max-w-5xl py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20">
          Who I like most
        </h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/2 flex" v-for="(item, i) in whoIPrefer" :key="i">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"> 
                {{ item.title }}
              </h2>
              <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font bg-gray-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            Already convined? Join my team now.
          </h1>
          <a href="https://forms.gle/6urZhnnavALhQX1w5" target="_blank" class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Apply now</a>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
  useHead({
    title: 'Work with me - Zakir Hossen',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
  })

  const whoIPrefer = ref([
    {
      title: 'Ready to commit 100%',
    },
    {
      title: 'Takes ownership of his works',
    },
    {
      title: 'Who care about work ethics',
    },
    {
      title: 'Always ready to learn',
    },
    {
      title: 'Can work with keyboard shortcut',
    },
    {
      title: 'Book reading habit',
    },
    {
      title: 'Good Typing Speed',
    },
  ]);

  const whoIHate = ref([
    {
      title:  "People who are selfish"
    },
    {
      title:  "Doesn't have proper communication skills"
    },
    {
      title:  "People who has a ego"
    },
    {
      title:  "Not interested in improving himself"
    },
    {
      title:  "Doesn't know the meaning of TeamWork"
    },
    {
      title:  "Value money over people"
    },
  ]);

</script>

<style>

</style>
