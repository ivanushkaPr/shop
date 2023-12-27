<script setup>
const props = defineProps({
	items: {
		type: Array,
		required: true,
		validator(value) {
			return value.every((item) => typeof item === 'string');
		},
	},
})
const selectedImage = ref(null);

onMounted(() => {
	selectedImage.value = props.items[0];
});

const onImageSelected = (src) => {
	selectedImage.value = src;
};
</script>

<template>
	<div class="slider-preview">
		<transitions-fade>
			<img class="slider-preview__selected-image" :key="selectedImage" :src="selectedImage" alt="#"/>
		</transitions-fade>
		<div class="slider-row">
			<div class="swiper-button-prev">
				<icon-arrow-prev-lined/>
			</div>
			<div class="swiper-button-next">
				<icon-arrow-next-lined/>
			</div>

			<swiper
				ref="slider"
				:navigation="{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}"
				:slidesPerView="6"
				:spaceBetween="8"
				:modules="[SwiperNavigation]"
				class="mySwiper"
			>
				<swiper-slide v-for="(src, index) in items" :key="index">
					<card-preview
						:src="src"
						:class="(selectedImage === src) && '_active'"
						@click="onImageSelected(src)"/>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.slider-preview {
	width: 616px;
	display: flex;
	justify-content: center;
	flex-direction: column;

	&__selected-image {
		max-width: 616px;
		max-height: 464px;
		margin-bottom: 24px;

		border-radius: 4px;
		border: 1px solid var(--Gray-100, #E4E7E9);
		padding: 10px;
	}

	& .slider-row {
		position: relative;
		margin: 0 auto;
		max-width: 616px;
		min-width: 100%;

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
}
</style>
