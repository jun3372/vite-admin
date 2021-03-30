import { App } from "vue"
import Routers from './routers'
import Stores from './stores'
import Antd from './ant-design'
import Icon from './icons'
import I18n from './i18n'

const plugin = (app: App) => {
    app.use(Routers)
    app.use(Stores)
    app.use(Antd)
    app.use(Icon)
    app.use(I18n)
}

export default plugin