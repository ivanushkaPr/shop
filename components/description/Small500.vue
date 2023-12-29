<template>
	<p class="description-small-500">
		<slot/>
	</p>
</template>

<style lang="scss">
.description-small-500 {
	color: $gray-900;
	@include font(14px, 20px, 500);
}
</style>
<script setup lang="ts">
</script>