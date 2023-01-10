<script setup>
import Item from './Item.vue';
const meal = {
  id: "5944afa7-9c1f-432f-b77d-8e996907aa16", 
  category: "Breakfast", 
  name: "Omelette", 
  prepTime: 15, 
  cookTime: 17
}

</script>

<template>
    <div
        class='items-container w-full md:w-max bg-gray-800 dark:bg-gray-800 text-white dark:text-black mx-auto mt-12 p-4 space-y-4'>
        <!--{items || <p className='text-white'>No items to display</p>}-->
        <Item :meal="meal"/>
    </div>
</template>