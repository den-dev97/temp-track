import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ListPage from './pages/ListPage.vue'
import CreateOrUpdateRecord from './pages/CreateOrUpdateRecord.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'ListPage',
        component: () => ListPage,
    },
    {
        path: '/edit/:id?',
        name: 'CreateOrUpdateRecord',
        component: () => CreateOrUpdateRecord,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
