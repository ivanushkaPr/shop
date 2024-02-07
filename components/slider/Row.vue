<script setup>
import categoryTransformer from 'assets/transformers/category.js';
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

const { searchClient, setMeiliSearchParams } = await useMeliSearch();

const redirectTo = useRedirectTo();

</script>

<template>
	<ais-instant-search
		:search-client="searchClient"
		index-name="products">
		<ais-refinement-list searchable attribute="genre">
			<template
				v-slot="{
						items,
						isFromSearch,
						refine,
						searchForItems,
					}"
			>
				<div class="slider-row">
					<div class="swiper-button-prev">
						<icon-arrow-prev-lined />
					</div>
					<div class="swiper-button-next">
						<icon-arrow-next-lined />
					</div>

					<swiper
						ref="slider"
						:navigation="{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}"
						:slidesPerView="6"
						:spaceBetween="18"
						:modules="[SwiperNavigation]"
						class="mySwiper"
					>
						<swiper-slide v-for="item in items">
							<card-category @click="redirectTo(item.value)"
														 v-bind="categoryTransformer.transform(item.value)"/>
						</swiper-slide>
					</swiper>
				</div>
			</template>
		</ais-refinement-list>
	</ais-instant-search>
</template>

<style lang="scss">
.slider-row {
	position: relative;
	margin: 0 auto;
	max-width: 1320px;


	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .swiper-button-prev, & .swiper-button-next, {
		position: absolute;
		display: flex;
		padding: 12px;
		align-items: center;
		border-radius: 100px;
		background: #FA8232;
		width: 48px;
		height: 48px;
		box-sizing: border-box;
	}

	& .swiper-button-prev {
		left: -24px;
	}

	& .swiper-button-next, {
		right: -24px;
	}

	& .swiper-button-prev:after, & .swiper-button-next:after {
		content: none;
	}
}


</style>
