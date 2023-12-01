<script setup>
const benefits = [{
		headline: 'УСКОРЕННАЯ ДОСТАВКА',
		description: 'Доставка за 24 часа',
		componentName: 'IconPackage',
	},
	{
		headline: '24 часа на возврат',
		description: '100% гарантия возврата',
		componentName: 'IconTrophy',
	},
	{
		headline: 'БЕЗОПАСНЫЕ ПЛАТЕЖИ',
		description: 'защищены',
		componentName: 'IconCreditCard',
	},
	{
		headline: 'ПОДДЕРЖКА 24/7',
		description: 'контакт',
		componentName: 'IconHeadphonesBg',
	},
]
</script>

<template>
	<div class="list-benefits">
		<base-benefit class="list-benefits__benefit" v-bind="benefits[0]"/>
		<span class="list-benefits__separator" />
		<base-benefit class="list-benefits__benefit" v-bind="benefits[1]"/>
		<span class="list-benefits__separator" />
		<base-benefit class="list-benefits__benefit" v-bind="benefits[2]"/>
		<span class="list-benefits__separator" />
		<base-benefit class="list-benefits__benefit" v-bind="benefits[3]"/>
	</div>
	<base-benefit />
</template>

<style lang="scss">
.list-benefits {
	box-sizing: border-box;
	max-width: 1320px;
	margin: 0 auto;
	display: flex;
	padding: 16px;
	justify-content: center;
	align-items: center;
	gap: 28px;

	border-radius: 6px;
	border: 1px solid var(--gray-100, #E4E7E9);

	&__separator {
		display: inline-block;
		border: 1px solid #E4E7E9;
		width: 1px;
		height: 56px;
	}
}
</style>