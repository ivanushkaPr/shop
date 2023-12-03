<script setup>
import tabsMock from '@/assets/mocks/tabs.js';

const bannersMock = [
	{
		src: 'images/banners/headphones.png',
		alt: 'Наушники',
		heading: 'Xiaomi True Wireless Earbuds',
		description: 'Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.',
		price: 500,
		currency: '$',
	},
	{
		badgeText: 'ОСЕННЯЯ РАСПРОДАЖА',
		heading: '37% СКИДКА',
		description: 'Только для любителей',
		mark: 'тяжелого рока.',
	},
]
</script>

<template>
	<div class="blocks-hits ">
		<tabs-main heading="Популярные товары"
				   :config="tabsMock"
				   class="blocks-hits__tabs"/>
		<div class="blocks-hits__banners">
			<banner-vertical-medium v-bind="bannersMock[0]" />
			<banner-vertical-small  v-bind="bannersMock[1]"/>
		</div>
	</div>
</template>

<style lang="scss">
.blocks-hits {
	margin: 72px auto 0;
	max-width: 1320px;
	align-items: flex-start;
	display: flex;
	gap: 22px;

	&__tabs {
		flex-grow: 1;
	}

	&__banners {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
}
</style>