<template>
  <!-- <button v-if="$colorMode.value === 'system'" @click.prevent="setColorMode($colorMode.value)" type="button" class="text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  </button>
  <button v-else-if="$colorMode.value === 'dark'" @click.prevent="setColorMode($colorMode.value)" type="button" class="text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  </button>
  <button v-else @click.prevent="setColorMode($colorMode.value)" type="button" class="text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
  </button> -->
  <select v-model="$colorMode.preference" class="outline-0 rounded border-gray-300 dark:border-gray-700 dark:text-gray-200 w-28 py-2 px-4 dark:bg-gray-700">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</template>

<script>
  export default {
    methods: {
      setColorMode(color) {
        let preference = color;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          if(color == 'light') {
            preference = 'dark';
          } else {
            preference = 'light';
          }
        } else {
          preference = 'dark';
        }

        this.$colorMode.preference = preference;
      }
    }
  }
  // const colorMode = useColorMode()
  // colorMode.preference = 'dark'
  // const publishedBooksMessage = computed(() => {
  //   let color;
  //   switch (this.colorMode.value) {
  //     case 'light':
  //       color = 'dark';
  //       break;
  //     case 'dark':
  //       color = 'system';
  //       break;
  //     case 'system':
  //       color = 'light';
  //       break;
  //     default:
  //       color = 'system';
  //       break;
  //   }
  //   this.colorMode.preference = value;
  // })
  // // function setColorMode(){
  // //   let color;
  // //   console.log($colorMode)
  // //   switch (colorMode.value) {
  // //     case 'light':
  // //       color = 'dark';
  // //       break;
  // //     case 'dark':
  // //       color = 'system';
  // //       break;
  // //     case 'system':
  // //       color = 'light';
  // //       break;
  // //     default:
  // //       color = 'system';
  // //       break;
  // //   }
  // //   // const value = colorMode.value === 'light' ? 'dark' : colorMode.value === 'dark' ? 'system' : colorMode.value === 'system' ? 'system' :  'light';
  // //   colorMode.preference = value;
  // // }
</script>

<style>
</style>
