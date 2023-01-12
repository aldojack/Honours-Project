<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue';

</script>

<template>
    <Nav />
  <div class='bg-white dark:bg-gray-900 flex-grow'>
    <router-view></router-view>
  </div>
  <Footer />
</template>
