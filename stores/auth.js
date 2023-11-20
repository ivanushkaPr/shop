import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const jwtToken = ref(null);
    function setJwtToken(value) {
        jwtToken.value = value;
    }

    const name = ref(null);
    function setName(value) {
        name.value = value;
    }

    return { jwtToken, setJwtToken, setName }
})