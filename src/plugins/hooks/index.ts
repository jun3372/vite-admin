import useAxios from 'plugin/axios'
import { useConfig } from 'config'


export {
    useAxios,
    useConfig
}

export const useHooks = () => ({
    useAxios,
    useConfig
})

export default useHooks