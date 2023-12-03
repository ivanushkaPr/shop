<script setup>
defineProps({
	caption: {
		type: String,
		required: true,
	},
	discount: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	deadline: {
		type: String,
		required: true,
	},
	src: {
		type: String,
		required: true,
	},
});
</script>

<template>
<div class="banner-col2-row1">
	<p class="banner-col2-row1__caption"> {{ caption }}</p>

	<p class="banner-col2-row1__discount"> {{discount}} </p>

	<description-medium400 class="banner-col2-row1__description">
		{{description}}
	</description-medium400>

	<description-mark class="banner-col2-row1__deadline" prefix="Срок акции" :mark="deadline"/>

	<base-action-button class="banner-col2-row1__button" text="купить"/>

	<img class="banner-col2-row1__image" :src="src" alt=""/>

</div>
</template>

<style lang="scss">
.banner-col2-row1 {
	width: fit-content;
	box-sizing: border-box;
	padding: 20px 22px;
	border-radius: 3px;
	background: $warning-300;
	text-align: center;

	&__caption {
		color: $danger-600;
		font-weight: 600;
		margin-bottom: 8px;
	}

	&__discount {
		margin-bottom: 12px;
		color: $gray-900;
		@include font(32px, 40px, 600);
	}

	&__description {
		margin-bottom: 16px;
	}

	&__deadline {
		margin-bottom: 20px;
	}

	&__date {
		color: $gray-900;
		font-weight: 600;
		padding: 6px 12px;
		border-radius: 2px;
		background: $gray-00;
	}

	&__button {
		margin: 0 auto 44px;
	}
}
</style>