export const useCartStore = defineStore('cart', () => {
    const cartId = ref(null);
    const cart = ref(null)

    const setCartId = (value) => {
        cartId.value = value;
    }

    const setCart = (value) => {
        cart.value = value;
    }

    const productsInCart = () => {
        return cart?.value?.items?.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0)
    };

    return { cartId, cart, setCartId, setCart, productsInCart };
})