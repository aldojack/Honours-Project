import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/HomeView.vue')
    },
    {
        path: '/favourites',
        name: 'Favourites',
        component: () => import('@/pages/FavouritesView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
