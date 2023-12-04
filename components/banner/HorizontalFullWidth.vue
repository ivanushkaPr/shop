<script setup>
defineProps({
	discount: {
		type: String,
		required: true,
	},
	name: {
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
		validator(value) {
			return ['₽'].indexOf(value) !== -1;
		},
	},
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
})
</script>

<template>
<section class="banner-horizontal-full-width">
	<div class="banner-horizontal-full-width__offer">
		<description-medium-400 class="banner-horizontal-full-width__discount">
			{{ discount }}
		</description-medium-400>
		<display-three class="banner-horizontal-full-width__name">
			{{ name }}
		</display-three>
		<description-xxl-400 class="banner-horizontal-full-width__description">
			{{ description }}
		</description-xxl-400>

		<base-action-button class="banner-horizontal-full-width__button"
							text="купить"/>
	</div>
	<div class="banner-horizontal-full-width__product">
		<description-xl-600 class="banner-horizontal-full-width__price">
			{{price}} {{currency}}
		</description-xl-600>
		<img class="banner-horizontal-full-width__image"
			 :src="src"
			 :alt="alt"
		/>
	</div>
</section>
</template>

<style lang="scss">
.banner-horizontal-full-width {
	max-width: 1320px;
	margin: 0 auto;
	background: $primary-100;
	display: flex;
	justify-content: space-between;
	&__offer {
		padding-left: 72px;
		padding-top: 80px
	}

	&__discount {
		display: inline-block;
		border-radius: 2px;
		background: var(--secondary-500, #2DA5F3);
		padding: 6px 12px;
		color: $gray-00;
		margin-bottom: 12px;
	}

	&__name {
		margin-bottom: 22px;
	}

	&__description {
		max-width: 424px;
		margin-bottom: 22px;
	}

	&__product {
		position: relative;
		padding-top: 40px;
		padding-right: 46px;
	}

	&__price {
		position: absolute;
		top: 40px;
		display: inline-block;
		border-radius: 1000px;
		border: 6px solid var(--gray-00, #FFF);
		background: var(--primary-200, #FFCEAD);
		padding: 41px 24px 41px 25px;
	}

}
</style>