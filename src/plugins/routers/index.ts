import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import routes from './routers'

const route = createRouter({
    history: createWebHistory(),
    routes,
})


/**
 * 设置页面标题
 * @param to 跳转页面
 * @param from 来源页面
 */
const setTitle = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    const { meta } = to
    const title = String(meta.title || '')
    if (title) {
        const element = document.querySelector('title') as HTMLTitleElement
        if (element) element.text = title
    }
}

route.beforeEach((to, from) => {
    // 设置页面标题
    setTitle(to, from)
})

export default route