import { createApp } from 'vue'
import Plugin from './plugins'
import App from './App.vue'

createApp(App).use(Plugin).mount('#app')