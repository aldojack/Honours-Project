<script setup>
import { reactive, watch } from "vue";
import Hero from '@/components/Hero.vue'
import FunctionButton from '@/components/FunctionButton.vue'
import ItemsContainer from '@/components/ItemContainer.vue';
import * as dataFunc from '@/data/buildData'

const data = reactive({
  items: JSON.parse(localStorage.getItem('items')) || []
})

watch(() => data.items,(newValue) => {
  localStorage.setItem('items', JSON.stringify(newValue))
}, {deep: true});

const onEdit = (id) =>{
  const updatedItem = data.items.map(item => {
      if(item.id === id){
        return dataFunc.updateOne(item)
      }
      return item
    })
    data.items = updatedItem;
}

const onDelete = (id) =>{
  const newArray = data.items.filter(item => {
      return item.id !== id
    })
    data.items = newArray;
}

const onToggle = (id) =>{
  const toggledItem = data.items.map(item => {
      if(item.id === id){
        return{...item, isFav: !item.isFav}
      }
      return item
    })
    data.items = toggledItem;

}

</script>

<template>
    <div class='w-2/3 mx-auto text-center'>
      <Hero HeroText="Here at Recipe Manager we focus on showing some of the very best recipes and allow you to add your own to share or favourite ones from the many other users." />
      <main>
        <h1 class="text-5xl font-extrabold dark:text-white">Recipe Manager</h1>
        <div class='functions gap-4 grid grid-cols-2 md:grid-cols-3 mt-8 mx-auto w-fit'>
          <FunctionButton id="addOne" name="Add new recipe" @click="() => data.items = [...data.items,...dataFunc.buildData(1)]"/>
          <FunctionButton id="addHundred" name="Add 100 recipes" @click="() => data.items = [...data.items,...dataFunc.buildData(100)]"/>
          <FunctionButton id="addThousand" name="Add 1000 recipes" @click="() => data.items = [...data.items,...dataFunc.buildData(1000)]"/>
          <FunctionButton id="deleteAll" name="Delete all recipes" @click="() => data.items = dataFunc.deleteAll()"/>
          <FunctionButton id="editAll" name="Edit all recipes" @click="() => data.items = dataFunc.updateAll(data.items)"/>
          <FunctionButton id="favAll" name="Favourite all recipes" @click="() => data.items = dataFunc.favouriteAll(data.items)"/>
        </div>
        <ItemsContainer
          :items="data.items"
          @delete="onDelete"
          @edit="onEdit"
          @toggle="onToggle"
        />
      </main>
    </div>
</template>
