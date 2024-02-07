export const useAddProduct = async (cartId: string, variantId: string, cb: Function) => {
    const client = useMedusaClient();
    if (cartId) {
        const { cart } = await client.carts.lineItems.create(cartId, {
            variant_id: variantId,
            quantity: 1,
        })

        cb(cart);
    }
}