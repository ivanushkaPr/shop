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

</script>

<template>
	<slider-main-page class="main__banner-slider"/>
	<list-benefits class="main__benefits"/>
	<blocks-categories />
	<blocks-recommendations />
</template>

<style lang="scss">

	.main {
		&__banner-slider {
			margin: 0 auto;
		}

		&__benefits {
			margin-bottom: 40px
		}
	}
</style>