import { createApp } from 'vue'
import Plugin from './plugins'
import App from './App.vue'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(Plugin).mount('#app')
