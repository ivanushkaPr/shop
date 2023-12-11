<template>
	<p class="description-xl-600">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-xl-600 {
	color: $gray-900;
	@include font(20px, 28px, 400);
}
</style>
<script setup lang="ts">
</script>