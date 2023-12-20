import { useModalStore } from "~/stores/modal.js";
import { storeToRefs } from 'pinia';


export const useModal = () => {
    const menuStore = useModalStore();
    const { isModalVisible} = storeToRefs(menuStore);
    const { setModalVisibility } = menuStore;
    return { setModalVisibility, isModalVisible };
}