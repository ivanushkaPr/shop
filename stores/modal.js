import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
    const isModalVisible = ref(false);

    const setModalVisibility = (visibility) => {
        isModalVisible.value = visibility;
    };

    return { isModalVisible, setModalVisibility};
})