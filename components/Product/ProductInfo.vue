<script setup>
const { product } = useModal();


const title = computed(() => {
	return product?.value?.title;
});

const subtitle = computed(() => {
	return product?.value?.subtitle;
});

const price = computed(() => {
	const prices = product.value?.variants[0]?.prices;
	if (prices) {
		return prices[prices.length - 1].amount.toLocaleString('ru-RU');
	}
})

const currency = computed(() => {
	return useCurrencySymbol('rub');
})


const oldPrice = computed(() => {
	const prices = product.value?.variants[0]?.prices;
	if (prices) {
		return prices[prices.length - 2]?.amount.toLocaleString('ru-RU');
	}
})

const sku = computed(() => {
	return product.value?.variants[0]?.sku;
})

const availability = computed(() => {
	const isAvailable = product.value?.variants[0]?.inventory_quantity >= 1;
	return {
		text: isAvailable ? 'В наличии' : 'Нет в наличии',
		class: isAvailable ? '_in-stock' : '_out-of-stock',
	}
});

const label = computed(() => {
	return product.value?.metadata?.label;
})

const genre = computed(() => {
	return product.value?.metadata?.genre;
})

const releaseDate = computed(() => {
	return product.value?.metadata?.releaseDate;
})

const { cartId, cart, setCart } = useCart();

const onAddToCart = (variant_id) => {
	useAddProduct(variant_id, cartId, setCart)
}

const { setModalVisibility } = useModal();
const redirectToShoppingCart = () => {
	setModalVisibility(false);
	navigateTo('/shopping-cart');
};

const getProduct = computed(() => {
	return cart?.value?.items?.find(item => item.variant_id === product.value.variants[0].id);
})

const getAmount = computed(() => {
	return getProduct?.value?.quantity;
});

const removeProduct = () => {
	useRemoveProduct(cartId.value, getProduct.value.id, getProduct.value.quantity, setCart)
}

</script>

<template>
	<div class="product-info">
		<p class="product-info__product">
			{{ subtitle }} - {{  title }}
		</p>
		<ul class="product-info__info">
			<li v-if="sku" class="product-info__info-item">
				SKU: <span class="product-info__info-item-value"> {{ sku }} </span>
			</li>
			<li class="product-info__info-item">
				Доступность заказа: <span class="product-info__availability" :class="[availability.class]">
						{{ availability.text }}
					</span>
			</li>
			<li class="product-info__info-item">
				Студия: <span class="product-info__info-item-value"> {{ label }} </span>
			</li>
			<li class="product-info__info-item">
				Жанр: <span class="product-info__info-item-value">  {{ genre }} </span>
			</li>
			<li class="product-info__info-item">
				Год выпуска: <span class="product-info__info-item-value">  {{ releaseDate }} </span>
			</li>
		</ul>
		<p class="product-info__price">
			{{ price }} {{ currency }}
			<span class="product-info__old-price">
						{{ oldPrice }}
					</span>
			<base-badge class="product-info__badge" type="discount" :text="badge" />
		</p>

		<hr class="product-info__divider"/>
		<div class="product-info__controls">
			<button-counter @add="useAddProduct(cartId, product.variants[0].id, setCart)"
											:amount="getAmount"
											@remove="removeProduct()"/>
			<base-action-button @click="useAddProduct(cartId, product.variants[0].id, setCart)">
				<template v-slot:default> Добавить в корзину </template>
				<template v-slot:icon> <icon-cart class="product-info__icon"/> </template>
			</base-action-button>
			<base-secondary-button @click="redirectToShoppingCart"> Купить </base-secondary-button>
		</div>
	</div>
</template>

<style lang="scss">
.product-info {
	&__product {
		color: $gray-900;
		@include font(20px, 28px, 400);
		margin-bottom: 16px;
	}

	&__info {
		padding: 0;
		margin: 0;
		margin-bottom: 24px;
		max-width: 648px;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 24px 8px;
	}

	&__info-item {
		min-width: 312px;
		color: $gray-600;
	}

	&__info-item-value {
		color: $gray-900;
		font-weight: 600;
	}

	&__availability {
		font-weight: 600;

		&._in-stock {
			color: $success-500;
		}

		&._out-of-stock {
			color: $danger-500;
		}
	}

	&__price {
		display: flex;
		align-items: center;
		color: $secondary-500;
		@include font(24px, 32px, 600);
		margin-bottom: 24px;
	}

	&__old-price {
		margin-left: 4px;
		color: $gray-500;
		@include font(18px, 24px, 700);
		text-decoration: line-through;
	}

	&__badge {
		margin-left: 12px;
	}

	&__divider {
		border-top: $gray-100;
	}

	&__controls {
		display: flex;
		gap: 16px;
		margin-top: 36px;
	}

	&__icon {
		width: 24px;
		height: 24px;
	}
}
</style>