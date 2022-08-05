<template>
  <header class="bg-blue-500 bg-opacity-80 sticky top-0 z-10 w-full backdrop-filter backdrop-blur-lg">
    <div class="max-w-5xl mx-auto">
      <nav class="flex items-center justify-between py-2">
        <nuxt-link to="/" class="logo">
          <img class="max-w-[150px] max-h-[40px]" src="https://zakirhossen.com/_nuxt/img/logo-white.e9fbf76.png" alt="">
        </nuxt-link>
        <div class="flex justify-between w-full">
          <ul class="flex items-center">
            <li><nuxt-link class="px-4 text-white hover:text-gray-900" to="/"> Home </nuxt-link></li>
            <li><nuxt-link class="px-4 text-white hover:text-gray-900" to="/resources"> Resources </nuxt-link></li>
            <li><nuxt-link class="px-4 text-white hover:text-gray-900" to="/projects"> Projects </nuxt-link></li>
            <li><nuxt-link class="px-4 text-white hover:text-gray-900" to="/timeline"> Timeline </nuxt-link></li>
            <li><nuxt-link class="px-4 text-white hover:text-gray-900" to="/quotes"> Favourite Quotes </nuxt-link></li>
          </ul>
          <ul class="flex items-center">
            <li><a class="px-4 text-white hover:text-gray-900" href="#"> Github </a></li>
            <li><a class="px-4 text-white hover:text-gray-900" href="#"> Linkedin </a></li>
            <li><a class="px-4 text-white hover:text-gray-900" href="#"> Facebook </a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
