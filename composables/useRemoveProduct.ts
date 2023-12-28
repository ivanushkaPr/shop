export const useRemoveProduct = async (cartId: string, variantId: string, quantity: number, cb: Function) => {
    const client = useMedusaClient();
    debugger;
    const newQuantity = quantity - 1;
    const { cart } = await client.carts.lineItems.update(cartId, variantId, {
        quantity: newQuantity,
    })
    cb(cart);
}