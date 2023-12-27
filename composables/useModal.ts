import { useModalStore } from "~/stores/modal.js";
import { storeToRefs } from 'pinia';


export const useModal = () => {
    const menuStore = useModalStore();
    const { isModalVisible, product} = storeToRefs(menuStore);
    const { setModalVisibility, setProduct } = menuStore;
    return {
        setModalVisibility, isModalVisible,
        setProduct, product
    };
}