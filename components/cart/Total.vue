<script setup>
import { useCartStore } from "~/stores/cart.js";
import {storeToRefs} from "pinia";
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const props = defineProps({
	title: {
		type: String,
		required: false,
		default: 'Card total',
	},
	buttonText: {
		type: String,
		required: false,
		default: 'Заказать',
	},
	isSummary: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const currency = computed(() => {
	return useCurrencySymbol(cart?.value?.region?.currency_code);
});

const redirectUrl = props.isSummary  ? '/checkout' : '/checkout-completed';
</script>

<template>
	<div class="cart-total" v-if="cart">
		<h3 class="cart-total__title">
			{{ props.title }}
		</h3>

		<div class="cart-total__products" v-if="isSummary">
			<ul class="cart-total__products-list">
				<li v-for="item in cart.items" class="cart-total__product-item">
					<img class="cart-total__image" :src="item.thumbnail"/>
					<div class="cart-total__summary">
						<p class="cart-total__product-description">
							{{ item.title }}
						</p>
						<p class="cart-total__product-amount">
							{{ item.quantity }} X
							<span class="cart-total__product-price">
								{{ item.total / item.quantity }} {{ currency }}
							</span>
						</p>
					</div>
				</li>
			</ul>
		</div>

		<ul class="cart-total__list">
			<li class="cart-total__item">
				Sub-total
				<span class="cart-total__item-value">
					{{ cart.subtotal }}
				</span>
			</li>
			<li class="cart-total__item">
				Shipping
				<span class="cart-total__item-value">
				$Free
				</span>
			</li>
			<li class="cart-total__item">
				Discount
				<span class="cart-total__item-value">
					$24
				</span>
			</li>
			<li class="cart-total__item">
				Tax
				<span class="cart-total__item-value">
					{{ cart.tax_total }}
				</span>
			</li>
		</ul>

		<hr class="cart-total__divider"/>

		<p class="cart-total__total">
			Total
			<span class="cart-total__total-value">
				{{ cart. total }}
			</span>
		</p>

		<base-action-button class="cart-total__button" @click="navigateTo(redirectUrl)">
			{{ props.buttonText }}
		</base-action-button>
	</div>
</template>

<style lang="scss">
.cart-total {
	align-self: flex-start;
	border-radius: 4px;
	border: 1px solid $gray-100;
	background: $gray-00;
	padding: 20px 24px;
	width: 425px;

	&__title {
		color: $gray-900;
		@include font(18px, 24px, 500);
		margin-bottom: 20px;
	}

	&__products-list {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin: 0 0 24px;
	}

	&__product-item {
		display: flex;
		gap: 16px;
	}

	&__image {
		width: 64px;
		height: 64px;
	}

	&__summary {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	&__product-description {
		color: var(--Gray-900, #191C1F);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px; /* 142.857% */
	}

	&__product-amount {
		color: var(--Gray-600, #5F6C72);
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
	}

	&__product-price {
		color: var(--Secondary-500, #2DA5F3);
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	}

	&__list {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	&__item {
		display: flex;
		justify-content: space-between;
		list-style-type: none;

		color: $gray-600;
		@include font(14px, 20px, 400);
	}

	&__item-value {
		color: $gray-900;
		@include font(14px, 20px, 600);
	}

	&__divider {
		margin: 16px 0;
		border-color: #E4E7E9;
	}

	&__total {
		display: flex;
		justify-content: space-between;

		color: $gray-900;;
		@include font(16px, 24px, 600);
		margin-bottom: 24px;
	}

	&__total-value {
		color: $gray-900;
		@include font(16px, 24px, 600);
	}

	&__button {
		width: 100%;
	}
}
</style>>