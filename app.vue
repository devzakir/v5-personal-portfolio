<template>
  <div>
    <app-header />
    <NuxtPage />
    <app-footer />
  </div>
</template>

<script setup>
  import AppFooter from '~~/components/AppFooter.vue'
  import AppHeader from '~~/components/AppHeader.vue'

  const nuxtApp = useNuxtApp()

  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>
<style>

</style>
