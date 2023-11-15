import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    const authDropdownVisibility = ref(false);
    // const count = ref(0)
    // const name = ref('Eduardo')
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //     count.value++
    // }

    function toggleAuthDropdownVisibility() {
        authDropdownVisibility.value = !authDropdownVisibility.value;
    }

    return { authDropdownVisibility, toggleAuthDropdownVisibility }
})