<script setup>
const firstName = ref('Иван');
const secondName = ref('Крашенинников');

const fullName = computed(() => {
	return firstName.value + ' ' + secondName.value;
});

const city = ref('Dhaka - 1207, Bangladesh');

const fullAddress = ref('East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh');

const billingMock1 = [
	{
		prop: 'Email',
		value: 'kevin.gilbert@gmail.com',
	},
	{
		prop: 'Телефон',
		value: '+1-202-555-0118',
	},

];

const billingMock2 = [
	{
		prop: 'Email',
		value: 'kevin.gilbert@gmail.com',
	},
	{
		prop: 'Телефон',
		value: '+1-202-555-0118',
	},
	{
		prop: 'Телефон',
		value: '+1-202-555-0118',
	},
];
</script>

<template>
	<div>
		<base-breadcrumbs :breadcrumbs="[
          {url: '/', title: 'Главная'},
          {url: '/account', title: 'Личный кабинет'},
          {title: 'Панель управления'}
    ]"/>
		<div class="dashboard">
			<menu-account/>
			<div>
				<section-account-user class="dashboard__user"/>
				<section-account-payment class="dashboard__credit-cards"/>
				<table-orders class="dashboard__orders-table">
					<template #header>
						<description-small-400>
							Последние заказы
						</description-small-400>

						<button-link @click="navigateTo('/account/dashboard/order-history/order-details')" is-orange>
							Смотреть все
						</button-link >
					</template>
				</table-orders>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.dashboard {
	display: flex;
	gap: 72px;
	padding: 0 300px;
	margin-top: 40px;

	&__user {
		margin-bottom: 24px;
	}

	&__credit-cards {
		margin-bottom: 24px;
	}

	&__orders-table {
		margin-bottom: 24px;
	}
}
</style>