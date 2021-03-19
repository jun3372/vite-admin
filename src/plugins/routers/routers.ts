import { RouteRecordRaw } from "vue-router"

import Home from 'views/home/index.vue';
import About from 'views/about/index.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

export default routes