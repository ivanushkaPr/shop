<template>
	<p class="description-small-600">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-small-600 {
	color: $gray-900;
	@include font(14px, 20px, 600);
}
</style>