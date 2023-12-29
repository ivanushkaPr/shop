<script>
const tableHead = [
	{
		text: 'ID Заказа'
	},
	{
		text: 'Статус'
	},
	{
		text: 'Дата'
	},
	{
		text: 'Сумма'
	},
	{
		text: 'Действие'
	},
];

const tableConfig = [
	{
		id: 96459761,
		status: 'in-progress',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
		href: '/account/dashboard/order-history/1',
	},
	{
		id: 96459761,
		status: 'delivered',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
		href: '/account/dashboard/order-history/2',
	},
	{
		id: 96459761,
		status: 'cancelled',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
		href: '/account/dashboard/order-history/3',
	},
	{
		id: 96459761,
		status: 'in-progress',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
		href: '/account/dashboard/order-history/1',
	},
	{
		id: 96459761,
		status: 'delivered',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
		href: '/account/dashboard/order-history/1',
	},
	{
		id: 96459761,
		status: 'cancelled',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
		href: '/account/dashboard/order-history/1',
	},
];
</script>

<script setup>
defineProps({
	itemsPerPage: {
		type: Number,
		required: false,
		default: 1,
	},
	page: {
		type: Number,
		required: false,
		default: 1,
	},
	items: {
		type: Array,
		required: false,
		default: tableConfig,
	},
	multiply: {
		type: Number,
		required: false,
		default: 1,
	},
	isPaginationVisible: {
		type: Boolean,
		required: false,
		default: false,
	},
})
</script>

<template>
	<div class="table-orders">
		<header class="table-orders__header">
			<slot name="header"/>
		</header>

		<table class="table-orders__table">
			<thead class="table-orders__thead">
			<tr class="table-orders__tr">
				<th class="table-orders__th" v-for="trData in tableHead">
					{{ trData.text }}
				</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="{ id, status, date, price, amount, currency, href }  in tableConfig">
				<td class="table-orders__id">
					#{{id}}
				</td>
				<td class="table-orders__status"
						:class="[
								status === 'in-progress' && '_in-progress',
								status === 'delivered' && '_delivered',
								status === 'cancelled' && '_cancelled',
							]">
					{{status}}
				</td>
				<td class="table-orders__date">
					{{ new Date(date).toLocaleDateString('ru-RU') }}
				</td>
				<td class="table-orders__sum ">
					{{ currency }} {{ price }} ({{ amount }} продуктов)
				</td>
				<td>
					<button-link is-blue @click="navigateTo(href)">
						Детали заказа
					</button-link>
				</td>
			</tr>
			</tbody>
		</table>

		<ul v-if="isPaginationVisible" class="table-orders__pagination">
			<li class="table-orders__pagination-button">
				<icon-arrow-prev-lined />
			</li>
			<li v-for="page in 5" class="table-orders__page" :class="(page === 1) && '_active'">
				{{ page }}
			</li>
			<li class="table-orders__pagination-button">
				<icon-arrow-next-lined />
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.table-orders {
	border-radius: 4px;
	border: 1px solid $gray-100;
	background: $gray-00;
	flex-grow: 1;

	&__pagination {
		margin: 24px auto;
		width: 400px;
		display: flex;
		list-style-type: none;
		gap: 8px;
	}

	&__pagination-button {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		border: 1px solid #FA8232;
		width: 40px;
		height: 40px;
		box-sizing: border-box;

		&:first-child {
			margin-right: 12px;
		}

		&:last-child {
			margin-left: 12px;
		}

		& path {
			stroke: #FA8232;
		}
	}

	&__page {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 100px;
		border: 1px solid $gray-100;
		background: $gray-00;

		&._active {
			background: $primary-500;
			color: $gray-00;
			text-align: center;
			font-size: 14px;
			font-style: normal;
			font-weight: 600;
			line-height: 20px; /* 142.857% */
		}
	}

	&__header {
		padding: 16px 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		//border-bottom: 1px solid $gray-100;/**/
	}

	&__table {
		margin: 0 12.5px 12px 12.5px;
		padding: 10px 24px;
		//border: 1px solid $gray-100;
		width: calc(100% - 25px);
		border-collapse: collapse;
		border: none;

		& thead {
			background: $gray-50;

			& th {
				padding: 10px 24px;
			}
		}

		& tbody {
			& tr:hover {
				background-color: $gray-50;
			}

			& td {
				padding: 10px 12px;
			}
		}
	}



	&__tr {
		text-align: left;
	}

	&__th {
		padding: 10px;
		flex-grow: 1;
		color: $gray-700;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 150%; /* 18px */
		text-transform: uppercase;

		&:nth-child(1) {

		}

		&:nth-child(2) {

		}

		&:nth-child(3) {

		}

		&:nth-child(4) {

		}

		&:nth-child(5) {

		}
	}


	&__id {
		color: $gray-900;
		@include font(14px, 20px, 500);
	}

	&__status {
		@include font(14px, 20px, 600);
		text-transform: uppercase;

		&._in-progress {
			color: $primary-500;
		}
		&._delivered {
			color: $success-500;
		}
		&._cancelled {
			color: $danger-500;
		}
	}

	&__date {
		color: $gray-600;
		@include font(14px, 20px, 400);
	}

	&__sum {
		color: $gray-700;
		@include font(14px, 20px, 400);
	}
}
</style>