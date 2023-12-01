<script setup>
defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	caption: {
		type: String,
		required: true,
	},
	href: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<NuxtLink :to="href" class="card-slider">
		<img class="card-slider__img" :src="src" :alt="alt"/>
		<p class="card-slider__caption"> {{ caption }} </p>
	</NuxtLink>
</template>

<style lang="scss">
	.card-slider {
		display: flex;
		width: 181px;
		padding: 24px 12px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 16px;

		border-radius: 4px;
		border: 1px solid $gray-100;
		background: $gray-00;

		&__img {
			width: 148px;
			height: 148px;
		}
	}
</style>