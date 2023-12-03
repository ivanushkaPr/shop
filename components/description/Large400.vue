<template>
	<p class="description-large-400">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-large-400 {
	color: $gray-900;
	@include font(18px, 24px, 400);
}
</style>
