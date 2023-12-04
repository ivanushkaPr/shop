<template>
	<p class="description-xxl-400">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-xxl-400 {
	color: $gray-900;
	@include font(24px, 32px, 400);
}
</style>