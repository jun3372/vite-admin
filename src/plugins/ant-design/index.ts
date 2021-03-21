import Antd from "ant-design-vue";
import { App } from "vue";


// 引入样式
import "ant-design-vue/dist/antd.css";

export default (app: App) => {
    app.use(Antd)
}