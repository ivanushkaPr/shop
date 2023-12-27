<script setup>
import { useCartStore } from "~/stores/cart.js";
import {storeToRefs} from "pinia";
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
</script>

<template>
	<div class="cart-total" v-if="cart">
		<h3 class="cart-total__title">
			Card total
		</h3>

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

		<base-action-button class="cart-total__button">
			Заказать
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