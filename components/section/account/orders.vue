<script setup>
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
	},
	{
		id: 96459761,
		status: 'delivered',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
	},
	{
		id: 96459761,
		status: 'cancelled',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
	},
	{
		id: 96459761,
		status: 'in-progress',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
	},
	{
		id: 96459761,
		status: 'delivered',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
	},
	{
		id: 96459761,
		status: 'cancelled',
		date: '10.10.2020',
		price: 1500,
		amount: 5,
		currency: '₽',
	},
];
</script>

<template>
	<div class="section-account-orders">
		<header class="section-account-orders__header">
			<description-small-400>
				Последние заказы
			</description-small-400>

			<button-link is-orange>
				Смотреть все
			</button-link >
		</header>

		<table class="section-account-orders__table">
			<thead class="section-account-orders__thead">
				<tr class="section-account-orders__tr">
					<th class="section-account-orders__th" v-for="trData in tableHead">
						{{ trData.text }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="{ id, status, date, price, amount, currency }  in tableConfig">
					<td class="section-account-orders__id">
						#{{id}}
					</td>
					<td class="section-account-orders__status"
							:class="[
								status === 'in-progress' && '_in-progress',
								status === 'delivered' && '_delivered',
								status === 'cancelled' && '_cancelled',
							]">
						{{status}}
					</td>
					<td class="section-account-orders__date">
						{{ new Date(date).toLocaleDateString('ru-RU') }}
					</td>
					<td class="section-account-orders__sum ">
						{{ currency }} {{ price }} ({{ amount }} продуктов)
					</td>
					<td>
						<button-link is-blue>
							Смотреть все
						</button-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style lang="scss">
.section-account-orders {
	border-radius: 4px;
	border: 1px solid $gray-100;
	background: $gray-00;

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