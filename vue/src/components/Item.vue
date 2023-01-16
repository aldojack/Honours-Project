<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPen, faTrash,faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'


library.add(faPen, faTrash, faHeart, farHeart)

const props = defineProps({
    meal: Object, default: {undefined}
})

</script>

<template>
    <div class='item flex flex-col text-sm md:text-base md:flex-row md:px-12 dark:bg-gray-200 bg-gray-100 p-4'>
        <div class='item-data text-start text-black'>
            <div class='item-category flex space-x-2'>
                <p class='bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded p-1 text-sm'>
                    {{meal.category}}</p>
            </div>

            <p class='recipe-name'>Recipe: {{meal.name}}</p>
            <p class='recipe-preptime'>Prep Time: {{meal.prepTime}} minutes</p>
            <p class='recipe-preptime'>Cook Time: {{meal.cookTime}} minutes</p>
        </div>


        <div class='edit-item-container space-x-6 md:self-center md:ml-auto md:space-x-2 shrink-0'>
            <button class='edit'>
                <font-awesome-icon icon="fa-solid fa-pen"/>
            </button>
            <button class='delete'>
                <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
            <button class='favourite'>
                <font-awesome-icon icon="fa-solid fa-heart" v-if="meal.isFav"/>
                <font-awesome-icon icon="fa-regular fa-heart" v-else/>
            </button>
        </div>
    </div>
</template>