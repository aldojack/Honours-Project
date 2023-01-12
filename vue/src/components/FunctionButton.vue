<script setup>
const  props = defineProps({
    name: {type: String},
    items: {type: Array, default: () => []}, 
    method: {type: Function}
})
</script>

<template>
    <button type="button"
        @click="method()" 
        class="max-w-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shrink-0">
        {{name}}
    </button>
</template>