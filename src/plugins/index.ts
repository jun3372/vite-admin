import { App } from "vue"
import Routers from './routers'
import Stores from './stores'
import Antd from './ant-design'
import I18n from './i18n'


// 安装 bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

const plugin = (app: App) => {
    app.use(Routers)
    app.use(Stores)
    app.use(Antd)
    app.use(I18n)
}

export default plugin