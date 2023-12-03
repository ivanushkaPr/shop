<template>
	<p class="description-small-400">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-small-400 {
	color: $gray-900;
	@include font(14px, 20px, 400);
}
</style>