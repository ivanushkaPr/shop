import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    const authDropdownVisibility = ref(false);

    function toggleAuthDropdownVisibility() {
        authDropdownVisibility.value = !authDropdownVisibility.value;
    }

    function closeAuthDropdown() {
        authDropdownVisibility.value = false;
    }

    return { authDropdownVisibility, toggleAuthDropdownVisibility, closeAuthDropdown }
})