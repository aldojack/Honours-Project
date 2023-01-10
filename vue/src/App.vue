<script setup>
import Nav from '../src/components/Nav.vue'
import Hero from '../src/components/Hero.vue'
import FunctionButton from '../src/components/FunctionButton.vue'
import ItemsContainer from './components/ItemContainer.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <Nav />
  <div class='bg-white dark:bg-gray-900 flex-grow'>
    <div class='w-2/3 mx-auto text-center'>
      <Hero HeroText="The one stop shop to store recipes!" />
      <main>
        <h1 class="text-5xl font-extrabold dark:text-white">Recipe Manager</h1>
        <div class='functions gap-4 grid grid-cols-2 md:grid-cols-3 mt-8 mx-auto w-fit'>
          <FunctionButton />
          <FunctionButton />
          <FunctionButton />
          <FunctionButton />
          <FunctionButton />
          <FunctionButton />
        </div>
        <ItemsContainer/>
      </main>
    </div>
  </div>
  <Footer />
</template>
