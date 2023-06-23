import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'ListPage',
        component: () => import('./pages/ListPage.vue'),
    },
    {
        path: '/edit/:id?',
        name: 'CreateOrUpdateRecord',
        component: () => import('./pages/CreateOrUpdateRecord.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
