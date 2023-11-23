<script setup>
defineProps({
	caption: {
		type: String,
		required: true,
	},
	headline: {
		type: String,
		required: true,
	},
	discount: {
		type: String,
		required: true,
	},
	src: {
		type: String,
		required: false,
		default: '',
	},
});
</script>

<template>
<div class="banner-sale-sm" :style="{ backgroundImage: 'url(' + src + ')' }">
	<div class="banner-sale-sm__content">
		<p class="banner-sale-sm__caption"> {{ caption }} </p>
		<h6 class="banner-sale-sm__headline"> {{ headline }} </h6>
		<base-action-button text="Купить"/>
	</div>
	<base-badge class="banner-sale-sm__badge"
				type="discount"
				:text="discount"/>
</div>
</template>

<style lang="scss">
.banner-sale-sm {
	position: relative;
	padding: 46px 40px 27px;
	border-radius: 6px;
	background: var(--gray-900, #191C1F);
	width: 424px;
	box-sizing: border-box;

	background-size: 312px 312px;
	background-repeat: no-repeat;
	background-position: top 47px left 188px;

	&__caption {
		max-width: 100px;
		color: var(--warning-500, #EBC80C);
		text-transform: uppercase;
		@include font(12px, 20px, 500);
		margin-bottom: 4px;
	}

	&__headline {
		max-width: 188px;
		margin-bottom: 18px;
		color: var(--gray-00, #FFF);
		@include font(24px, 32px, 600);
	}

	&__badge {
		position: absolute;
		top: 32px;
		right: 58px;
	}
}
</style>