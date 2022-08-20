<template>
  <div>
    <app-header />
    <NuxtPage />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~~/components/AppFooter.vue'
import AppHeader from '~~/components/AppHeader.vue'
export default {
  components: { AppHeader, AppFooter },
}
</script>

<style>

</style>
