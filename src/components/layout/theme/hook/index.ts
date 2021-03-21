import config from 'config'
import { ref, computed, watch } from "vue"


const theme = ref<String>(window.localStorage.getItem("theme") || config.theme)
const themeClass = computed(() => {
    return {
        'theme-light': theme.value == 'light',
        'theme-dark': theme.value == 'dark'
    }
})

watch(theme, () => {
    window.localStorage.setItem("theme", String(theme.value) || 'light')
})

export const useTheme = () => {
    return {
        theme,
        themeClass
    }
}


export default useTheme