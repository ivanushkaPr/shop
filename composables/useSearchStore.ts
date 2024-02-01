import { useSearchStore } from "~/stores/search.js";
import { storeToRefs } from 'pinia';

export const useCart = () => {
    const cartStore = useSearchStore();
    const { searchQuery } = storeToRefs(cartStore);
    const { setSearchQuery } = cartStore;
    return {
        searchQuery,
        setSearchQuery,
    };
}