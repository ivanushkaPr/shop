<script setup>
import { useCartStore } from "~/stores/cart.js";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
</script>

<template>
	<div v-if="cart" class="cart-table">
		<h1 class="cart-table__title">
			Shopping Card
		</h1>

		<table class="cart-table__table">
				<thead class="cart-table__thead">
					<tr class="cart-table__tr">
						<th class="cart-table__th"> Товары </th>
						<th class="cart-table__th"> Цена </th>
						<th class="cart-table__th"> Количество </th>
						<th class="cart-table__th"> Цена </th>
					</tr>
				</thead>

			<tbody class="cart-table__tbody">
				<tr class="cart-table__tr" v-for="item in cart.items">
					<td class="cart-table__td _flexed">
						<button-remove class="cart-table__remove" @remove="() => {
							defineAppConfig;
							console.log('product removed')
						}"/>
						<img class="cart-table__thumbnail" :src="item.thumbnail"/>
						{{ item.title }}
					</td>

					<td class="cart-table__td ">
						{{ item.unit_price }}
					</td>

					<td class="cart-table__td">
						<button-counter :sizeMd="true" :amount="item.quantity"/>
					</td>

					<td class="cart-table__td _price">
						{{ item.total }}
					</td>
				</tr>
			</tbody>
		</table>

		<div class="cart-table__controls">
			<base-secondary-button :is-blue="true">
				<icon-arrow-prev-lined /> Назад к покупкам
			</base-secondary-button>

			<base-secondary-button :is-blue="true">
				 Обновить корзину
			</base-secondary-button>
		</div>
	</div>
</template>

<style lang="scss">
.cart-table {
	flex-grow: 1;
	border-radius: 4px;
	border: 1px solid $gray-100;
	background: $gray-00;

	&__title {
		padding: 20px 24px;

		color: $gray-900;
		@include font(18px, 24px, 600);
	}

	&__table {
		border-collapse: collapse;
		width: 100%;
		text-align: left;
		padding: 10px 24px;
	}

	&__thead {
		border: 1px solid $gray-100;
		background: $gray-50;
	}

	&__tr {

	}

	&__th {
		padding: 24px;
		color: $gray-700;
		@include font(12px, 18px, 500);
		text-transform: uppercase;
	}

	&__tbody {
		& tr:first-child td{
			padding-top: 24px;
		}

		& tr:last-child td{
			padding-bottom: 24px;
		}
	}

	&__td {
		padding: 10px 24px;

		color: $gray-700;
		@include font(14px, 20px, 400);

		&._flexed {
			display: inline-flex;
			align-items: center;
			gap: 12px;
		}

		&._price {
			color: $gray-900;
			font-weight: 500;
		}
	}

	&__thumbnail {
		width: 72px;
		height: 72px;
		padding: 4px;
		border: 1px solid $gray-100;
	}

	&__controls {
		border-top: 1px solid $gray-100;
		display: flex;
		justify-content: space-between;
		padding: 24px 24px;
	}
}

</style>
