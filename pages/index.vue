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
	<div class="widgets">
		<Swiper
			:height="300"
			:modules="[SwiperAutoplay, SwiperEffectCreative]"
			:slides-per-view="1"
			:loop="true"
			:effect="'creative'"
			:autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
			:creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
		>
			<SwiperSlide
				v-for="(slide, idx) in slides"
				:key="idx"
			>
				<lazy-banner-bg/>
				<div class="widgets__column">
					<lazy-banner-sale-sm caption="Осенняя распродажа"
									headline="Легендарные Depeche mode"
									discount="29% Скидка"
									src="/images/slider/banner-dm.png"/>
					<lazy-banner-sm headline="Pantera Far beyond driven"
							   price="300 ₽"
							   src="/images/slider/banner-pantera.png"
					/>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang="scss">
.widgets {
	padding: 24px 300px;
	max-width: 1320px;

	&__column {
		display: flex;
		flex-direction: column;
		gap: 26px;
		//justify-content: space-between;
	}
}

.swiper-slide {
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.swiper-wrapper {
	min-width: 100vh;
	width: 200px;
}

.swiper-cards {
	width: 240px;
	height: 240px;
}

.swiper-cards .swiper-slide {
	border-radius: 6px;
	border: 1px solid black;
}
</style>