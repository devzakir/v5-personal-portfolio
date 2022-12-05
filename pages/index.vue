<template>
  <div>
    <section class="py-24 lg:py-48 bg-white dark:bg-gray-800 backdrop-filter backdrop-blur-md bg-opacity-90">
      <div class="max-w-5xl mx-auto px-6 lg:px-0">
        <div class="flex justify-between max-w-5xl mx-auto flex-wrap lg:flex-nowrap gap-6">

        <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-6 basis-72 flex-shrink-0 bg-gray-900 dark:bg-blue-800 dark:text-gray-800 text-gray-100 mr-10">
            <img src="/zakir.png" alt="" class="w-40 h-40 mx-auto rounded-full bg-gray-500 aspect-square object-cover object-top">
            <div class="space-y-4 text-center divide-y divide-gray-300 dark:divide-gray-200">
              <div class="my-2 space-y-1">
                <h2 class="text-xl font-semibold sm:text-2xl dark:text-white">Zakir Hossen</h2>
                <p class="px-5 text-xs sm:text-base dark:text-gray-300">Full-stack developer</p>
              </div>
              <div class="flex justify-center pt-2 space-x-2 align-center">
                <a rel="noopener noreferrer" href="https://github.com/devzakir" aria-label="GitHub" class="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:dark:text-violet-400">
                  <SvgGithubIcon />
                </a>
                <a rel="noopener noreferrer" href="https://facebook.com/web.zakirbd" aria-label="Email" class="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:dark:text-violet-400">
                  <SvgFacebookIcon />
                </a>
                <a rel="noopener noreferrer" href="https://youtube.com/zakirhossen" aria-label="Youtube" class="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:dark:text-violet-400">
                  <SvgYoutubeIcon />
                </a>
                <a rel="noopener noreferrer" href="https://linkedin.com/in/devzakir" aria-label="Twitter" class="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:dark:text-violet-400">
                  <SvgLinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-base uppercase text-gray-700 dark:text-gray-300">
              👋 Hello, I am Zakir
            </h3>
            <div class="content dark:text-white" >
              <h3 class="text-4xl mb-4"> I am a young entrepreneur!</h3>
              <p class="mb-2">I'm currently devoting most of my time to building
                <a class="text-blue-700 dark:text-blue-400" target="_blank" href="https://templatecookie.com" title="A brand focused on creating finest digital products to improve small business owners daily life.">Templatecookie.com, </a>
                <a class="text-blue-700 dark:text-blue-400" target="_blank" href="https://echotemplate.com" title="A HTML, Figma template marketplace with 100+ quality free products.">Echotemplate.com,</a> and
                <a class="text-blue-700 dark:text-blue-400" target="_blank" href="https://youtube.com/@codeshikhi" title="An eLearning focused company with a vision of creating skilled manpower.">@Codeshikhi.</a>
                These brands serve under the name <a class="text-blue-700 dark:text-blue-400" target="_blank" href="https://lomeyo.com">Lomeyo.com</a>.
                See all my
                <nuxt-link class="text-blue-700 dark:text-blue-400" to="/projects"> projects</nuxt-link> here.
              </p>
              <p class="mb-2">
                I am working on creating <a class="text-blue-700 dark:text-blue-400" target="_blank" href="https://youtube.com/c/codeshikhi"> online courses </a> and sharing my experiences, startup journey, and entrepreneurship tips on my
                <a target="_blank" class="text-blue-700 dark:text-blue-400" href="https://youtube.com/@devzakir"> YouTube channel</a>.
              </p>
              <p class="mb-2">
                Are you curious and want to know more about my
                <nuxt-link class="text-blue-700 dark:text-blue-400" to="/goal">
                 next goal? </nuxt-link> I have a pretty good record of moving forward with my career. If you want to learn more about my life journey, head over
                <nuxt-link class="text-blue-700 dark:text-blue-400" to="/timeline"> to the timeline. </nuxt-link>
              </p>
              <p class="mb-2">
                Check out some of my favorite
                <nuxt-link class="text-blue-700 dark:text-blue-400" to="/quotes"> life-changing </nuxt-link> and
                <nuxt-link class="text-blue-700 dark:text-blue-400" to="/quotes"> resources </nuxt-link> available for web developers.
              </p>
              <p>
                I am looking for a special person to join my team. Do you want to
                <nuxt-link class="text-blue-700 dark:text-blue-400" to="/work"> join my team? </nuxt-link>
              </p>
            </div>
            <div class="flex gap-4 mt-6 flex-wrap md:flex-nowrap">
              <a class="px-6 py-3 border dark:border-gray-800 text-white rounded bg-blue-500 hover:bg-blue-600" href="https://www.youtube.com/zakirhossen" target="_blank">Subscribe Me on Youtube</a>
              <a class="px-6 py-3 border dark:border-gray-800 bg-purple-500 text-white rounded hover:bg-blue-600" href="https://www.facebook.com/groups/growwithzakir/" target="_blank">Join my Network</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font dark:bg-gray-900">
      <div class="max-w-5xl mx-auto px-6 lg:px-0 pb-24 pt-10">
        <h1 class="text-3xl font-medium title-font text-gray-900 dark:text-white mb-12 text-center">
          What people say about me
        </h1>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 dark:bg-gray-800 p-8 rounded">
              <SvgQuoteIcon  />
              <p class="leading-relaxed mb-6 dark:text-gray-400">
                ২ বছর যাবত কাজ করতেছি, এত দিনে আমি যা যা স্কিল এবং অবিজ্ঞতা অর্জন করছি, সেইগুলুর উপর আমি সন্তুষ্ট। কাজের পাশাপাশি আমি আমার সাইড প্রোজেক্ট এ কাজ করতেছি, সেখানে আমি আমার স্কিল এবং অবিজ্ঞতা গুলো কাজে লাগাতে পারছি।
              </p>
              <div class="flex justify-between items-center">
                <a class="inline-flex items-center">
                  <img alt="Ariful Islam - Full-stack Developer" src="/testimonial/ariful-islam.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                  <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900 dark:text-white">
                    Ariful Islam
                  </span>
                  <span class="text-gray-500 text-sm">Full-stack Developer</span>
                  </span>
                </a>
                <a href="https://youtu.be/snFXSKS6mrY" target="_blank" class="bg-blue-200 text-gray-700 rounded text-sm text-center px-2 py-1">Watch Video </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 dark:bg-gray-800 p-8 rounded">
              <SvgQuoteIcon />
              <p class="leading-relaxed mb-6 dark:text-gray-400">
                যখনই কোন কিছুতে ঘাবড়াইয়া যাইতাম, আটকে যাইতাম তখনই জাকির ভাই আমাদের সাহস দিত, ভরসা দিয়ে দেখিয়ে দিত এইভাবে এইভাবে করে ফেলবেন। দেখা গেছে, আমার সাহস এত বেড়ে গেছে এখন মনে হয় আমি পারবো। আর ভাই গাইডলাইন খুব ভাল দেয়।
              </p>
              <div class="flex justify-between items-center">
                <a class="inline-flex items-center">
                  <img alt="Rakibul Islam - Full-stak Web Developer" src="/testimonial/rakibul-islam.jpeg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                  <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900 dark:text-white">Rakibul Islam</span>
                  <span class="text-gray-500 text-sm">Full-stack Developer</span>
                  </span>
                </a>
                <a href="https://youtu.be/M9mgVIN3yZQ" target="_blank" class="bg-blue-200 text-gray-700 rounded text-sm text-center px-2 py-1">Watch Video </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 dark:bg-gray-800 p-8 rounded">
              <SvgQuoteIcon />
              <p class="leading-relaxed mb-6 dark:text-gray-400">
               টিমকে নিয়ে সামনে এগিয়ে যাওয়া, একসাথে কাজ করার প্রবণতা আমার মধ্যে উৎসাহ জাগায়। উনার সাথে কাজ করার সুজুগ পেলে কখনো হাত ছাড়া করবেন না, কারণ সে আপনাকে সবসময় সামনে এগিয়ে যাওয়ার জন্য অনুপ্রাণিত করবে এবং মেন্টর হিসাবে আপনার উপড়ে হাল ছাড়বে না।
              </p>
              <div class="flex justify-between items-center">
                <a class="inline-flex items-center">
                  <img alt="Rakibul Islam - Full-stak Web Developer" src="/testimonial/zafor-iqbal.png" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                  <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900 dark:text-white">Zafor Iqbal</span>
                  <span class="text-gray-500 text-sm">UI/UX Designer</span>
                  </span>
                </a>
                <a href="https://youtu.be/CcGZOjpJRNA" target="_blank" class="bg-blue-200 text-gray-700 rounded text-sm text-center px-2 py-1">Watch Video </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100 dark:bg-gray-800 p-8 rounded">
              <SvgQuoteIcon />
              <p class="leading-relaxed mb-6 dark:text-gray-400">
                জাকির ভাইয়ের চিন্তা শক্তির ক্ষমতা আমাকে সামনে এগিয়ে যাওয়ার প্রেরণা দেয়, একটা কাজের মধ্যে উনার ছোট থেকে ছোট ভুল দরার ক্ষমতা অসাধারণ।
              </p>
              <div class="flex justify-between items-center">
                <a class="inline-flex items-center">
                  <img alt="Rakibul Islam - Full-stak Web Developer" src="/testimonial/khalil-uddin.png" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                  <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-gray-900 dark:text-white">Khalil Uddin</span>
                  <span class="text-gray-500 text-sm">Laravel & Vue JS Developer</span>
                  </span>
                </a>
                <a href="https://youtu.be/8ixreJxlu7E" target="_blank" class="bg-blue-200 text-gray-700 rounded text-sm text-center px-2 py-1">Watch Video </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  useHead({
    title: 'Personal Portfolio - Zakir Hossen | Entrepreneur | Trainer | Full-stack Web Developer',
    meta: [
      { name: 'description', content: 'Zakir Hossen is a full-stack web developer, entrepreneur, trainer at codeshikhi, founder of Lomeyo.com, Templatecookie.com, echotemplate.com & codeshikhi.io' }
    ],
  })
</script>

<style>

</style>
