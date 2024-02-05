import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListView from '../views/ListView.vue';
import PronoView from '../views/PronoView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/list',
            name: 'list',
            component: ListView
        },
        {
            path: '/prono',
            name: 'prono',
            component: PronoView
        }
    ]
});

export default router;
