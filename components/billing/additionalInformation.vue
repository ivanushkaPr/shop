<template>
	<div class="billing-additional-info">
		<description-large-600 class="billing-additional-info__title">
			Дополнительная информация
		</description-large-600>

		<input-textarea>
			Комментарий к заказу <span :style="{color: '#77878F'}"> (опционально) </span>
		</input-textarea>
	</div>
</template>

<style lang="scss">
.billing-additional-info {
	width: 100%;

	&__title {
		margin-top: 40px;
		margin-bottom: 24px;
	}
}
</style>