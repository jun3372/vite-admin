import { App } from "vue"
import Routers from './routers'
import Stores from './stores'

const plugin = (app: App) => {
    app.use(Routers)
    app.use(Stores)
}

export default plugin