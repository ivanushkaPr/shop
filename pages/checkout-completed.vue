<template>
	<div class="checkout-completed">
		<div class="checkout-completed__success-message">
			<icon-order-success class="checkout-completed__icon"/>
			<description-xxl-600 class="checkout-completed__title">
				Your order is successfully place
			</description-xxl-600>
			<description-small-400 class="checkout-completed__description">
				Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
			</description-small-400>
			<div class="checkout-completed__controls">
				<base-secondary-button class="checkout-completed__secondary-button"> <icon-dashboard/> История заказов </base-secondary-button>
				<base-action-button class="checkout-completed__primary-button"> Просмотр заказов </base-action-button>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.checkout-completed {
	padding: 0px 300px;
	display: flex;
	flex-grow: 1;
	align-items: center;
	justify-content: center;

	&__success-message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	&__icon {
		margin-bottom: 24px;
	}

	&__title {
		margin-bottom: 12px;
	}

	&__description {
		margin-bottom: 32px;
	}

	&__success-message {
		text-align: center;
		width: 480px;
	}

	&__controls {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		& > * {
			//flex-basis: 50%;
			gap: 12px;
		}
	}
}
</style>
<script setup lang="ts">
</script>