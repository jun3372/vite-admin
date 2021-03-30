import useAxios from 'plugin/axios'
import { useConfig } from 'config'
import { useTheme } from 'component/layout'


export {
    useAxios,
    useTheme,
    useConfig
}

export const useHooks = () => ({
    useAxios,
    useTheme,
    useConfig
})

export default useHooks