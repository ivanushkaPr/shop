<script setup>
defineProps({
	badgeType: {
		type: String,
		required: true,
	},
	badgeText: {
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
		required: false,
	},
	currency: {
		type: Number,
		required: true,
	},
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="banner-horizontal-medium-dark">
		<div class="banner-horizontal-medium-dark__content">
			<base-badge class="banner-horizontal-medium-dark__badge" :text="badgeText" :type="badgeType"/>
			<heading-level-one class="banner-horizontal-medium-dark__heading">
				{{ heading }}
			</heading-level-one>

			<p class="banner-horizontal-medium-dark__description">
				{{ description }}
			</p>

			<base-action-button class="banner-horizontal-medium-dark__button" text="купить"/>
		</div>
		<img class="banner-horizontal-medium-dark__img" :src="src" :alt="alt" />
		<span class="banner-horizontal-medium-dark__price">
			{{price}}{{currency}}
		</span>
	</div>
</template>

<style lang="scss">
.banner-horizontal-medium-dark {
	position: relative;
	display: flex;
	padding: 44px;
	gap: 40px;
	border-radius: 4px;
	background: $gray-900;

	&__content {
		max-width: 280px;
	}

	&__badge {
		margin-bottom: 8px;
		color: $gray-900;
	}

	&__heading {
		margin-bottom: 12px;
		color: $gray-00;
	}

	&__description {
		color: $gray-00;
		margin-bottom: 20px;
		@include font(14px, 24px, 400);
	}

	&__img {
		width: 240px;
		height: 240px;
	}

	&__price {
		display: inline-block;
		position: absolute;
		right: 16px;
		top: 16px;

		padding: 30px 18px;
		justify-content: center;
		align-items: center;

		border-radius: 1000px;
		background: $secondary-500;

		color: $gray-00;
		@include font(24px, 28px, 700);
	}
}

</style>
