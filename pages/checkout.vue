<template>
	<div>
		<base-breadcrumbs :breadcrumbs="[
          {url: '/', title: 'Главная'},
          {url: '/shopping-cart', title: 'Корзина'},
          {title: 'Оформление заказа'}
    ]"/>
		<div class="checkout">
			<section-billing class="checkout__billing-info" />
			<cart-total :isSummary="true" title="Описание заказа" buttonText="Заказать"/>
		</div>
	</div>
</template>

<style lang="scss">
.checkout {
	padding: 0 300px;
	margin-top: 72px;
	margin-bottom: 80px;
	display: flex;
	justify-content: space-between;
	gap: 24px;
}
</style>