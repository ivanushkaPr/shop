<script setup>

</script>

<template>
	<div>
		<product-card class="product-detail__product-card" :is-modal="false" />
		<blocks-overview class="product-detail__overview"/>
	</div>
</template>

<style lang="scss">
.product-detail {

	&__product-card {
		margin-bottom: 72px;
	}
}
</style>