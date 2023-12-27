<script setup>
defineProps({
	isModal: {
		type: Boolean,
		required: false,
		default: true,
	},
});

const { setModalVisibility, product, setProduct } = useModal();

const fetchProduct = async (productId) => {
	const client = useMedusaClient();
	const { product } = await client.products.retrieve(productId);
	return product;
}

const getProductId = () => {
	const route = useRoute();
	return route.params.productId;
}

if (product.value === null) {
	setProduct(await fetchProduct(getProductId()));
}

const images = computed(() => {
	return product.value?.images.map(image => image.url);
})

</script>

<template>
	<div class="product-card__window" :class="{ '_modal-shadow': isModal }">
		<button v-if="isModal"  class="product-card__close-button" @click="setModalVisibility(false)">
			<icon-close />
		</button>
		<slider-preview :items="images"/>
		<product-info />
	</div>
</template>

<style lang="scss">
.product-card {
	&__close-button {
		cursor: pointer;
		position: absolute;
		border-radius: 100px;
		background: rgba(255, 255, 255, 0.12);
		width: 48px;
		height: 48px;
		top: 0px;
		right: -64px;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__window {
		display: flex;
		position: relative;
		//display: inline-flex;
		padding: 40px;
		align-items: flex-start;
		gap: 56px;
		justify-content: center;
		border-radius: 4px;
		background: $gray-00;

		&._modal-shadow {
			box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.12);
			border: 1px solid $gray-100;
		}
	}
}

</style>