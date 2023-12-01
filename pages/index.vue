<script setup>
const {find} = useStrapi();

const response = await find('main-page-widgets', {
	populate: {
		slider: {
			populate: '*'
		},
		Banner: {
			populate: '*'
		}
	},
});


const slides = [1, 2, 3];

</script>

<template>
	<slider-main-page class="slider-main-page"/>
	<list-benefits />
</template>

<style lang="scss">
	.slider-main-page {
		margin: 0 auto;
	}
</style>