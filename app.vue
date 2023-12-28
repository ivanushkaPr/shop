<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">

const { setCart, setCartId } = useCart();

const client = useMedusaClient();
onMounted(async () => {

	const { regions } = await client.regions.list();
	const region_id = regions[1].id;

	const savedCartId = localStorage.getItem("cart_id")
	if (savedCartId ) {
		const { cart }  = await client.carts.retrieve(savedCartId );
		setCartId(cart.id);
		setCart(cart);
		return;
	}


	const { cart } = await client.carts.create({
		region_id,
	});
	localStorage.setItem("cart_id", cart.id);
	setCartId(cart.id);
	setCart(cart)
})
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}

</style>