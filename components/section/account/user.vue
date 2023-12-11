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
	<div class="user">
		<description-xl-600 class="user__headline">
			Привет, {{ firstName }}
		</description-xl-600>

		<description-small-400 class="user__description">
			С панели управления, вы можете просматривать и проверять стутус ваших
			<base-link href="/account/order-history">Последних заказов</base-link>
			, управлять
			<base-link href="/account/payment-info">Адресом доставки и выставления счетов</base-link>
			,
			редактировать ваш
			<base-link href="/account/setting ">Пароль и Данные аккаунта</base-link>
		</description-small-400>

		<div class="user__payment-info">
			<card-payment-info :billing="billingMock2" src="/images/avatar-mock.png">
				<template v-slot:header>
					Ваш аккаунт
				</template>
				<template v-slot:fullName>
					{{ fullName }}
				</template>
				<template v-slot:address>
					{{ city }}
				</template>
			</card-payment-info>
			<card-payment-info :billing="billingMock2">
				<template v-slot:header>
					Платежный адрес
				</template>
				<template v-slot:fullName>
					{{ fullName }}
				</template>
				<template v-slot:address>
					{{ city }}
				</template>
			</card-payment-info>

			<div class="user__order-stat">
				<card-account-data bg-color="blue">
					<template v-slot:counter>
						154
					</template>
					<template v-slot:property>
						Всего заказов
					</template>
				</card-account-data>
				<card-account-data bg-color="orange">
					<template v-slot:counter>
						05
					</template>
					<template v-slot:property>
						В процессе доставки
					</template>
				</card-account-data>
				<card-account-data bg-color="green">
					<template v-slot:counter>
						149
					</template>
					<template v-slot:property>
						Выполненные заказы
					</template>
				</card-account-data>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.user {

	&__payment-info {
		margin-top: 24px;
		display: flex;
		gap: 24px;
	}

	&__description {
		max-width: 541px;
	}

	&__order-stat {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
}
</style>