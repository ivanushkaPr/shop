<script setup>
const route = useRoute();
const order = route.params.order;
</script>

<template>
	<div class="order-history">
		<menu-account/>
		<table-orders v-if="!order" is-pagination-visible>
			<template #header>
				<description-small-400>
					История заказов
				</description-small-400>
			</template>
		</table-orders>
		<div v-else>
			Другая блять страница
		</div>
	</div>
</template>

<style lang="scss">
	.order-history {
		padding: 0 300px;
		margin-top: 40px;
		margin-bottom: 72px;
		display: flex;
		gap: 72px;
	}
</style>