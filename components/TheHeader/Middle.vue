<script setup>
import {storeToRefs} from 'pinia';

import {useCounterStore} from "~/stores/test.js";
const authStore = useCounterStore();
const { authDropdownVisibility } = storeToRefs(authStore);
const { toggleAuthDropdownVisibility } = authStore;

import { useAuthStore } from "~/stores/auth.js";
const userStore = useAuthStore();
const { customer } = userStore ;

import { useCartStore } from "~/stores/cart.js";
const cartStore = useCartStore();
const { productsInCart } = cartStore;


console.log(cartStore.productsInCart, 'amount of products in cart');

</script>

<template>
	<nav class="header-middle">
		<base-brand @click="navigateTo('/')" class="header-middle__logotype"/>

		<form-search-input :placeholder="'Искать товары'"/>
		<ul class="header-middle__menu">
			<li class="header-middle__item header-middle__item_cart" @click="navigateTo('/shopping-cart')">
					<span class="header-middle__products-in-cart"> {{ productsInCart() }}</span>
				<icon-cart/>
			</li>
			<li class="header-middle__item">
				<icon-heart/>
			</li>
			<li class="header-middle__item header-middle__sign-in-form">
				<icon-user @click="customer ? navigateTo('/account/dashboard') : toggleAuthDropdownVisibility()"/>
				<dropdown-sign-in v-if="authDropdownVisibility"/>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
.header-middle {
	background-color: $secondary-700;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 112.5px;
	padding: 20px 300px;


	&__menu {
		display: flex;
		gap: 24px;
		margin: 0;
		padding: 0;
	}

	&__item {
		list-style: none;

		&_cart {
			position: relative;
		}
	}

	&__products-in-cart {
		position: absolute;
		right: -5px;
		top: -5px;
		width: 20px;
		height: 20px;
		display: inline-flex;
		justify-content: center;
		align-items: center;

		border-radius: 100px;
		border: 2px solid var(--Secondary-700, #1B6392);
		background: #FFF;

		color: $secondary-700;
		@include font(12px, 16px, 600);
	}

	&__sign-in-form {
		position: relative;
	}
}
</style>