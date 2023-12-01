<template>
	<h3 class="heading-level-one">
		<slot />
	</h3>
</template>

<style lang="scss">
.heading-level-one {
	color: $gray-900;
	@include font(24px, 32px, 600);
}
</style>