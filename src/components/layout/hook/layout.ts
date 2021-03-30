import { ref } from "vue";


const collapsed = ref<Boolean>(false);
const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
}

export const useCollapsed = () => ({
    collapsed,
    toggleCollapsed
})

export default useCollapsed