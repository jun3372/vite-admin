import { Ref, ref } from "vue";
import { useConfig } from 'hooks'

const { layout } = useConfig()

// dark, light
const theme = ref(layout.theme || 'light');
interface themeConfig {
    theme: Ref,
}

export const useTheme = (): themeConfig => ({
    theme
})

export default useTheme