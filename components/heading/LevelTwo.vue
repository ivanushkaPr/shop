<template>
	<h2 class="heading-level-two">
		<slot/>
	</h2>
</template>

<style lang="scss">
.heading-level-two {
	color: $gray-900;
	@include font(28px, 32px, 600);
}
</style>
<script setup lang="ts">
</script>