import { useCartStore } from "~/stores/cart.js";
import { storeToRefs } from 'pinia';

export const useCart = () => {
    const cartStore = useCartStore();
    const { cart, cartId } = storeToRefs(cartStore);
    const { setCart, setCartId} = cartStore;
    return {
        cart, cartId,
        setCart, setCartId,
    };
}