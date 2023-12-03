<script setup>
	import BannerHorizontalMediumMock from "assets/mocks/BannerHorizontalMedium.js";
</script>


<template>
	<div class="blocks-new">
		<banner-horizontal-medium v-bind="BannerHorizontalMediumMock[0]"/>
		<banner-horizontal-medium-dark v-bind="BannerHorizontalMediumMock[1]"/>
	</div>
</template>

<style lang="scss">
.blocks-new {
	display: flex;
	justify-content: space-between;
	max-width: 1320px;
	margin: 0 auto;
}
</style>