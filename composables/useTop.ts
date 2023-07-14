import {useWindowScroll} from '@vueuse/core'

const useTop = () => {
    const isTop = ref(false)
    const {y} = useWindowScroll()
    onMounted(() => {
        if (y.value > 0) 
            isTop.value = true
        
    })

    watch(y, (newValue) => {
        if (newValue > 0) 
            isTop.value = true

         else 
            isTop.value = false
        
    })
	
	return isTop
}

export default useTop
