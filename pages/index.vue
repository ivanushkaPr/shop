<script setup>
import BannerFullWidth from "assets/mocks/BannerFullWidth.js";
</script>

<template>
	<slider-main-page class="main__banner-slider"/>
	<list-benefits class="main__benefits"/>
	<blocks-categories class="main__categories" />
	<blocks-recommendations class="main__recommendations" />
	<blocks-new class="main__new"/>
	<blocks-hits class="main__hits"/>
	<banner-horizontal-full-width class="main__banner-full-width" v-bind="BannerFullWidth"/>
	<blocks-overview class="main__overview"/>
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

		&__hits {
			margin-bottom: 72px;
		}

		&__banner-full-width {
			margin-bottom: 72px;
		}

		&__overview {
			margin-bottom: 72px;
		}
	}
</style>