import { RouteRecordRaw } from "vue-router"

import Layout from 'layout'
import Home from 'views/home/index.vue';
import About from 'views/about/index.vue';
import Login from 'views/login/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/', name: "Home", component: Layout, meta: { title: '首页' }, children: [
            { path: "", component: Home }
        ]
    },
    { path: '/about', name: "About", component: About },
    { path: '/login', name: 'Login', component: Login }
]

export default routes