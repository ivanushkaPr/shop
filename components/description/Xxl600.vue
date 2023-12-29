<template>
	<p class="description-xxl-600">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-xxl-600 {
	color: $gray-900;
	@include font(24px, 32px, 600);
}
</style>