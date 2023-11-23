<script setup>
defineProps({
	src: {
		type: String,
		required: false,
		default: '',
	},
	headline: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="banner-sm">
		<img class="banner-sm__img" :src="src" />
		<div class="banner-sm__content">
			<h6 class="banner-sm__headline"> {{ headline }} </h6>
			<p class="banner-sm__price"> {{ price }} </p>
			<base-action-button text="Купить"/>
		</div>
	</div>
</template>

<style lang="scss">
.banner-sm {
	position: relative;
	display: flex;
	align-items: center;
	gap: 20px;
	padding: 40px 32px;
	border-radius: 6px;
	background: var(--gray-50, #F2F4F5);
	width: 424px;
	box-sizing: border-box;

	&__img {
		width: 160px;
		height: 160px;
	}

	&__content {
		max-width: 172px;
	}

	&__headline {
		max-width: 120px;
		margin-bottom: 12px;
		color: var(--gray-900, #191C1F);
		@include font(24px, 32px, 600);
	}

	&__price {
		color: var(--secondary-500, #2DA5F3);
		@include font(18px, 24px, 600);
		margin-bottom: 20px;
	}

}
</style>