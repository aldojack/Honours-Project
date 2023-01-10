import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/HomeView.vue'
import Favourites from '@/pages/FavouritesView.vue'

const  routes = [
    {
        path:  '/',
        name: 'Home', 
        component: Home
    },
    {
        path:  '/favourites',
        name: 'Favourites', 
        component: Favourites
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
