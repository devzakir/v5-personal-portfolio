<template>
  <div>
    <div class="py-16 bg-gray-100 dark:bg-gray-900 dark:border-b-gray-800 border-b">
      <div class="max-w-5xl mx-auto px-6 lg:px-0">
        <div class="flex flex-wrap w-full flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900  dark:text-gray-100"> 
            Want to work with me?
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
            I wanted to create more opportunities for people around me, and I started a company. My goal is to create opportunities for 1000 in the next 5 years.
          </p>
        </div>
      </div>
    </div>
    <section class="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font border-b border-b-gray-200 dark:border-b-gray-700">
      <div class="max-w-5xl py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20">
          Are you a great team player?
        </h1>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/2 flex" v-for="(item, i) in greatTeamPlayers" :key="i">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-2"> {{ item.title }} </h2>
              <p class="leading-relaxed text-base">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font border-b border-b-gray-200 dark:border-b-gray-700">
      <div class="max-w-5xl py-24 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-gray-100 mb-20">
          I would like to work with you, if are
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
              <p class="leading-relaxed text-base">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-indigo-50 dark:bg-gray-900">
      <div class="mx-auto max-w-5xl py-12 lg:flex lg:items-center lg:justify-between lg:py-24">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 md:text-3xl">
          <span class="block">Already convined?</span>
          <span class="block text-indigo-600">Join me building a better future</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a href="https://forms.gle/6urZhnnavALhQX1w5" target="_blank" class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Apply now</a>
          </div>
        </div>
      </div>
    </div>
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
      description: "Being ready to commit 100% is a mindset that you have to have if you want to be successful in anything that you do. It means that you are completely focused and dedicated to your goal, and you are willing to do whatever it takes to achieve it"
    },
    {
      title: 'Can take ownership',
      description: "Taking ownership of your work is a key skill in any workplace. Being an owner means taking responsibility for the success of the task or project you are assigned."
    },
    {
      title: 'Always learning to improve',
      description: "No matter how experienced or knowledgeable one may be, they should always strive to keep learning. Staying open-minded and looking for opportunities to learn and improve is essential to progress. "
    },
    {
      title: 'Attention to detail',
      description: "Attention to Detail is an important skill in any profession. In the workplace, it is essential to have an eye for detail and the ability to notice even the smallest of details."
    },
    {
      title: 'A productive person',
      description: "Productivity is an important aspect of life that should be taken seriously. Being productive means being able to efficiently manage your time, energy, and resources in order to achieve meaningful goals."
    },
  ]);

  const greatTeamPlayers = ref([
    {
      title: 'Positive attitude',
      description: "While not a technical skill, positivity can be instrumental when looking to become a better team player. Think of it as the hidden x-factor you can leverage anytime, anywhere. Bring energy and enthusiasm to every team meeting. Offer help to your colleagues where you see an opportunity. Find new ways to collaborate with and learn from one another. "
    },
    {
      title: 'Effective communication',
      description: "To be a strong team facilitator, you also need top-notch communication skills. And that starts with a thorough understanding of your teammates’ natural behavioral tendencies. A good team facilitator is able to adjust his or her communication style to accommodate the different personalities and preferences of each individual on the team. That way, everyone feels heard and understood."
    },
    {
      title:  "Problem-solving",
      description: "Collaborating also means being able to think critically and solve issues when they arise. While problem-solving often pertains to projects or tasks, it also applies to people. A great team player doubles as a great intermediator in times of conflict."
    },
    {
      title:  "Active listening",
      description: "Collaboration often evokes feelings of sociability and shared ideas. While that’s certainly accurate, it’s equally important to take time to listen and reflect. This is called active listening, which is the process of actively engaging with and responding to what someone else has said."
    },
    {
      title:  "Flexibility",
      description: "Collaboration is all about compromise—and flexibility. When presented with difficult timetables or deliverables, try to meet your peers halfway. This can mean anything from helping to re-juggle tasks and deadlines, suggesting helpful alternatives, or proactively offering advice about how to move forward. "
    },
  ]);

</script>

<style>

</style>
