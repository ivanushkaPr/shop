<template>
	<div class="dashboard__stats">
		<description-xl-600 class="dashboard__headline">
			Привет, {{ firstName }}
		</description-xl-600>

		<description-small-400 class="dashboard__description">
			С панели управления, вы можете просматривать и проверять стутус ваших
			<base-link href="/account/order-history"> Последних заказов </base-link>, управлять
			<base-link href="/account/payment-info"> Адресом доставки и выставления счетов </base-link>,
			редактировать ваш
			<base-link href="/account/setting "> Пароль  и Данные аккаунта </base-link>
		</description-small-400>

		<div class="dashboard__payment-info">
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

			<div class="dashboard__order-stat">
				<card-account-data bg-color="blue" >
					<template v-slot:counter>
						154
					</template>
					<template v-slot:property>
						Всего заказов
					</template>
				</card-account-data>
				<card-account-data bg-color="orange" >
					<template v-slot:counter>
						05
					</template>
					<template v-slot:property>
						В процессе доставки
					</template>
				</card-account-data>
				<card-account-data bg-color="green" >
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