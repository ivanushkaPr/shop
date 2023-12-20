import { storeToRefs } from 'pinia';
import { useMenuStore } from "~/stores/menu.js";

export const useMenu = async () => {
    const menuStore = useMenuStore();
    const { parentCategories, categories} = storeToRefs(menuStore);
    const { setCategories, setParentCategories } = menuStore;
    return { parentCategories, categories, setCategories, setParentCategories  };
}