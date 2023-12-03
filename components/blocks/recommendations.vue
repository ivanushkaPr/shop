<script setup>
const rating = ref(100);
</script>

<template>
	<div class="blocks-recommendations ">
		<banner-vertical-col2-row1 class="blocks-recommendations__banner"
			                       caption="ТЯЖЕЛЫЙ РОК"
								   discount="32% Скидка"
								   description="На все альбомы  в жанре тяжелый рок"
								   deadline="До 30 сентября"
								   src="images/slipknot-banner.png"
		/>
		<tabs-main class="blocks-recommendations__tabs"/>
	</div>
</template>

<style lang="scss">
.blocks-recommendations {
	margin: 0 auto;
	margin-top: 72px;
	max-width: 1320px;
	align-items: flex-start;
	display: flex;
	gap: 22px;

	&__tabs {
		flex-grow: 1;
	}
}
</style>