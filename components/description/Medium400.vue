<template>
	<p class="description-medium-400">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-medium-400 {
	color: $gray-900;
	@include font(16px, 24px, 400);
}
</style>