<script setup>
defineProps({
	src: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: true,
	},
	heading: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	currency: {
		type: String,
		required: true,
	},
})
</script>

<template>
<div class="banner-vertical-medium">
	<img class="banner-vertical-medium__image" :src="src" :alt="alt"/>

	<heading-level-two class="banner-vertical-medium__heading">
		{{heading}}
	</heading-level-two>
	<description-medium-400 class="banner-vertical-medium__description">
		{{description}}
	</description-medium-400>
	<description-mark class="banner-vertical-medium__mark"
					  prefix="Всего за"
					  :mark="price + '' + currency"
	/>
	<base-action-button text="Купить"/>
</div>
</template>

<style lang="scss">
.banner-vertical-medium {
	min-width: 312px;
	box-sizing: border-box;
	display: flex;
	padding: 32px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	border-radius: 4px;
	background: $warning-200;
	text-align: center;

	&__image {
		margin-bottom: 12px;
		width: 108px;
		height: auto;
		border: 1px solid red;
	}
	&__heading {
		margin-bottom: 8px;
	}
}
</style>