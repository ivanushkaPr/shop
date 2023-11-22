<script setup>
const props = defineProps({
	fillColor: {
		type: String,
		required: false,
		default: '#FFFFFF',
	},
});
</script>

<template>
	<div class="brand">
		<icon-logo :fillColor="props.fillColor" class="brand__icon"/>
		<h1 class="brand__name"> soundmarket </h1>
	</div>
</template>

<style lang="scss">
	.brand {
		display: flex;
		align-items: center;
		gap: 8px;
		&__icon {}
		&__name {
			color: $gray-00;
			font-size: 32px;
			font-weight: 700;
			line-height: 40px; /* 125% */
			letter-spacing: -0.64px;
			text-transform: uppercase;
			margin: 0px;
		}
	}
</style>