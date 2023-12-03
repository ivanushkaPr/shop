<template>
	<p class="description-large-600">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-large-600 {
	color: $gray-900;
	@include font(18px, 24px, 600);
}
</style>