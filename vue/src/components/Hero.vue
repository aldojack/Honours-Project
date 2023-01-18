<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
library.add(faVuejs)
const props = defineProps({
  HeroText: String
})
</script>

<template>
    <section class="text-center py-12 text-gray-900 dark:text-white">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl ">The one stop shop to store recipes!</h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{{ HeroText }}</p>
      <p>Powered by <font-awesome-icon icon="fa-brands fa-vuejs" size="lg" inverse /></p>   
    </section>
  </template>
  