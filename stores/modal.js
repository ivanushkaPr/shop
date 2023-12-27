import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
    const isModalVisible = ref(false);
    const setModalVisibility = (visibility) => {
        isModalVisible.value = visibility;
    };

    const product = ref(null);
    const setProduct = (productData) => {
        product.value = productData;
    };

    return { isModalVisible, setModalVisibility, product, setProduct};
})