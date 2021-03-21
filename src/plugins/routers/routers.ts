import { RouteRecordRaw } from "vue-router"

import Layout from 'layout'

import Home from 'views/home/index.vue';
import About from 'views/about/index.vue';
import Login from 'views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                component: About
            }
        ]
    },
    // { path: '/about', component: About },
    { path: '/login', name: 'Login', component: Login }
]

export default routes