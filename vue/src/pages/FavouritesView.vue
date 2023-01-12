<script setup>
import Hero from '@/components/Hero.vue'
import ItemsContainer from '@/components/ItemContainer.vue';


</script>

<template>
    <div class='w-2/3 mx-auto text-center'>
        <Hero HeroText="View all your favourited recipes here, if you have none view our Home for ideas" />
        <main>
            <h1 class="text-5xl font-extrabold dark:text-white">Favourite Recipes</h1>
            <ItemsContainer />
        </main>
    </div>
</template>