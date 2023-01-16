<script setup>
import Item from '@/components/Item.vue';

const props = defineProps({
  items: {type: Array, default: () => []},
})
</script>

<template>
    <div
        class='items-container w-full md:w-max bg-gray-800 dark:bg-gray-800 text-white dark:text-black mx-auto mt-12 p-4 space-y-4'>
        <Item
          v-for="item in items"
          v-if="items.length > 0"
          :key="item.id"
          :meal="item"
        /> 
        <p v-else class='text-white'>No items to display</p>
    </div>
</template>