import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const customer = ref(null);
    const setCustomer = (customerData) => {
        customer.value = customerData;
    };

    return { customer, setCustomer }
})