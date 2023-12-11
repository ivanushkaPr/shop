<script setup>
</script>

<template>
	<div class="sections-account-payment">
		<header class="sections-account-payment__header">
			<description-small-400>
				Способ оплаты
			</description-small-400>

			<button-link is-orange>
				Добавить карту
			</button-link >
		</header>

		<div class="sections-account-payment__cards">
			<card-credit-info type="visa">
				<template v-slot:amount>
					$1 000 USD
				</template>
				<template v-slot:number>
					****  ****  ****  3814
				</template>
				<template v-slot:holder>
					Kevin Gilbert
				</template>
			</card-credit-info>

			<card-credit-info type="mastercard">
				<template v-slot:amount>
					$1 000 USD
				</template>
				<template v-slot:number>
					****  ****  ****  3814
				</template>
				<template v-slot:holder>
					Kevin Gilbert
				</template>
			</card-credit-info>
		</div>
	</div>
</template>

<style lang="scss">
.sections-account-payment {
	border-radius: 4px;
	border: 1px solid $gray-100;
	background: $gray-00;

	&__header {
		padding: 16px 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid $gray-100;
	}

	&__cards {
		padding: 24px;
		display: flex;
		gap: 24px;
	}
}
</style>