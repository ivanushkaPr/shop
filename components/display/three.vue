<template>
	<h3 class="display-three">
		<slot/>
	</h3>
</template>

<style lang="scss">
.display-three {
	color: $gray-900;
	@include font(48px, 56px, 600);
}
</style>