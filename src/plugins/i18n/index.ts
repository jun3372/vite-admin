import { createI18n } from 'vue-i18n'
import language from './language'
import config from 'config'

const [locale = config.locale] = navigator.language.split('-')

//注册i8n实例并引入语言文件
const i18n = createI18n({
    locale: locale,		//默认显示的语言 
    messages: {
        en: language.en,
        zh: language.zh
    }
})

//将i18n暴露出去，在main.js中引入挂载
export default i18n;