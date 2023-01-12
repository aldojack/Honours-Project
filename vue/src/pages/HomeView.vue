<script setup>
import Hero from '@/components/Hero.vue'
import FunctionButton from '@/components/FunctionButton.vue'
import ItemsContainer from '@/components/ItemContainer.vue';
import {useStorage} from '@/composables/useStorage'
import * as dataFunc from '@/data/buildData'

const items = useStorage('items');
</script>

<template>
    <div class='w-2/3 mx-auto text-center'>
      <Hero HeroText="The one stop shop to store recipes!" />
      <main>
        <h1 class="text-5xl font-extrabold dark:text-white">Recipe Manager</h1>
        <div class='functions gap-4 grid grid-cols-2 md:grid-cols-3 mt-8 mx-auto w-fit'>
          <!-- <FunctionButton name="Add new recipe" :items="items" :method="() => items = dataFunc.buildData(1)"/> -->
          <FunctionButton name="Add 100 recipes" :items="items" :method="() => items = dataFunc.buildData(100)"/>
          <FunctionButton name="Add 1000 recipes" :items="items" :method="() => items = dataFunc.buildData(1000)"/>
          <FunctionButton name="Delete all recipes" :items="items" :method="() => items = dataFunc.deleteAll()"/>
          <FunctionButton name="Edit all recipes" :items="items" :method="() => items.set(dataFunc.updateAll(items))"/>
          <FunctionButton name="Favourite all recipes" :items="items"/>
        </div>
        <ItemsContainer :items="items"/>
      </main>
    </div>
</template>
