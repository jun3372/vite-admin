import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routers'

const route = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default route