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
	<blocks-categories class="main__categories" />
	<blocks-recommendations class="main__recommendations" />
	<blocks-new class="main__new"/>
	<blocks-hits class="main__hits"/>
</template>

<style lang="scss">

	.main {
		&__banner-slider {
			margin: 0 auto;
		}

		&__benefits {
			margin-bottom: 40px
		}

		&__recommendations {
			margin-bottom: 72px;
		}

		&__new {
			margin-bottom: 88px;
		}
	}
</style>