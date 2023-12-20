<script setup>
import {storeToRefs} from 'pinia';

import {useCounterStore} from "~/stores/test.js";
const authStore = useCounterStore();
const { authDropdownVisibility } = storeToRefs(authStore);
const { toggleAuthDropdownVisibility } = authStore;

import { useAuthStore } from "~/stores/auth.js";
const userStore = useAuthStore();
const { customer } = userStore ;

</script>

<template>
	<nav class="header-middle">
		<base-brand @click="navigateTo('/')" class="header-middle__logotype"/>

		<form-search-input :placeholder="'Искать товары'"/>
		<div class="header-middle__menu">
			<icon-cart/>
			<icon-heart/>
			<div class="header-middle__sign-in-form">
				<icon-user @click="customer ? navigateTo('/account/dashboard') : toggleAuthDropdownVisibility()"/>
				<dropdown-sign-in v-if="authDropdownVisibility"/>
			</div>
		</div>
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
	}

	&__sign-in-form {
		position: relative;
	}
}
</style>