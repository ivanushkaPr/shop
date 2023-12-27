export const useAddProduct = async (variantId: string, cartId: Ref<string | null>, cb: Function) => {
    const client = useMedusaClient();
    if (cartId?.value) {
        const { cart } = await client.carts.lineItems.create(cartId.value, {
            variant_id: variantId,
            quantity: 1,
        })

        cb(cart);
    }
}