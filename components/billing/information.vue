<template>
	<div class="billing-information">
		<description-large-600 class="billing-information__title">
			Информация
		</description-large-600>

		<div class="billing-information__first-line">
			<input-text class="billing-information__input" legend="Имя"/>
			<input-text class="billing-information__input" legend="Фамилия"/>
			<input-text class="billing-information__input">
				<template v-slot="legend">
					Название компании <span :style="{color: '#77878F'}">  (опционально) </span>
				</template>
			</input-text>
		</div>
		<div class="billing-information__second-line">
			<input-text class="billing-information__input" legend="Адрес"/>
		</div>

		<div class="billing-information__third-line">
			<input-select label="Страна"/>
			<input-select label="Регион/Область"/>
			<input-select label="Город"/>
			<input-text class="billing-information__input" legend="Почтовый индекс"/>
		</div>

		<div class="billing-information__fourth-line">
			<input-text class="billing-information__input" legend="Email"/>
			<input-text class="billing-information__input" legend="Номер телефона"/>
		</div>

		<div class="billing-information__fifth-line">
			<input-checkbox>
				Доставить по другому адресу
			</input-checkbox>
		</div>
	</div>
</template>

<style lang="scss">
.billing-information {
	width: 100%;

	&__title {
		margin-top: 40px;
		margin-bottom: 24px;
	}

	&__first-line {
		display: flex;
		gap: 16px;
		margin-bottom: 16px;

		& *:last-child {
			flex-grow: 1;
		}
	}

	&__second-line {
		margin-bottom: 16px;
	}

	&__third-line {
		margin-bottom: 16px;
		display: flex;
		gap: 16px;
		width: 100%;

		& > * {
			flex-basis: 25%;
			flex-grow: 1;
			flex-stretch: 0;
		}
	}

	&__fourth-line {
		display: flex;
		gap: 16px;
		margin-bottom: 24px;

		& * {
			flex-grow: 1;
		}
	}

	&__fifth-line {
		margin-bottom: 40px;
	}

}
</style>
<script setup lang="ts">
</script>