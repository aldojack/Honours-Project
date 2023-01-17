<script setup>
import { reactive, watch, computed } from "vue";
import Hero from '@/components/Hero.vue'
import ItemsContainer from '@/components/ItemContainer.vue';
import * as dataFunc from '@/data/buildData'


const data = reactive({
    items: JSON.parse(localStorage.getItem('items')) || []
})

const favourites = computed(() => {
    return data.items.filter((item) => item.isFav)
})

watch(() => data.items, (newValue) => {
    localStorage.setItem('items', JSON.stringify(newValue))
}, { deep: true });

const onEdit = (id) => {

    const updatedItem = data.items.map(item => {
        if (item.id === id) {
            return dataFunc.updateOne(item)
        }
        return item
    })
    data.items = updatedItem;
}

const onDelete = (id) => {
    const newArray = data.items.filter(item => {
        return item.id !== id
    })
    data.items = newArray;
}

const onToggle = (id) => {
    const toggledItem = data.items.map(item => {
        if (item.id === id) {
            return { ...item, isFav: !item.isFav }
        }
        return item
    })
    data.items = toggledItem;

}

</script>

<template>
    <div class='w-2/3 mx-auto text-center'>
        <Hero HeroText="View all your favourited recipes here, if you have none view our Home for ideas" />
        <main>
            <h1 class="text-5xl font-extrabold dark:text-white">Favourite Recipes</h1>
            <ItemsContainer
              :items="favourites"
              @delete="onDelete"
              @edit="onEdit"
              @toggle="onToggle"
            />
        </main>
    </div>
</template>