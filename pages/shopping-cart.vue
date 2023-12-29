<script setup>

</script>

<template>
	<div>
		<base-breadcrumbs :breadcrumbs="[
          {url: '/', title: 'Главная'},
          {title: 'Корзина'}
    ]"/>
		<div class="shopping-cart">
			<cart-table/>
			<cart-total />
		</div>
	</div>
</template>

<style lang="scss">
.shopping-cart {
	padding: 0 300px;
	margin-top: 72px;
	margin-bottom: 80px;
	display: flex;
	justify-content: space-between;
	gap: 24px;
}
</style>