
// 全局配置
const config: configOption = {
    // I18n默认语言
    locale: 'en',

    // axios
    axios: {
        baseURL: '',
        timeout: 5000
    },

    // layout
    layout: {
        sider: {
            width: 240,
            collapsedWidth: 80
        },

        // 默认主题: dark, light
        theme: 'light',
    }
}

const useConfig = (): configOption => config
export { config, useConfig }
export default config