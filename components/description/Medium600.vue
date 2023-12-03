<template>
	<p class="description-medium-600">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-medium-600 {
	color: $gray-900;
	@include font(16px, 24px, 600);
}
</style>
