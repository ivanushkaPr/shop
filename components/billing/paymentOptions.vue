<script setup>
import CardMock from '../icon/CardMock.vue';

const mock = [
	{
		icon: CardMock,
		title: 'Имя',
	},
	{
		icon: CardMock,
		title: 'Имя',
	},
	{
		icon: CardMock,
		title: 'Имя',
	},
];
</script>


<template>
	<div class="billing-payment-options">
		<h3 class="billing-payment-options__title">
			Способ оплаты
		</h3>
		<ul class="billing-payment-options__options">
			<template  v-for="({icon, title}, index) in mock">
				<li  class="billing-payment-options__option">
					<label class="input-radio">
						<component :is="icon"/>
						<p class="input-radio__label"> {{ title }} </p>
						<input type="radio" class="input-radio__radio"/>
					</label>
				</li>
				<li v-if="index < mock.length - 1" class="billing-payment-options__divider"/>
			</template>
		</ul>

		<div class="billing-payment-options__card">
			<input-text class="mb-" legend="Имя на карте"/>
			<input-text legend="Номер карты"/>
			<div>
				<input-text class="billing-payment-options__input" legend="Срок действия"/>
				<input-text class="billing-payment-options__input" legend="CVC"/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.billing-payment-options {
	border: 1px solid var(--Gray-100, #E4E7E9);

	&__payment {
		border-radius: 4px;
		background: var(--Gray-00, #FFF);
	}

	&__title {
		display: flex;
		padding: 32px 32px;
		border-bottom: 1px solid var(--Gray-100, #E4E7E9);
		color: var(--Gray-900, #191C1F);
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 133.333% */
		text-align: center;
	}

	&__options {
		display: flex;
		justify-content: space-around;
		margin-top: 48px;
		padding-bottom: 48px;
		border-bottom: 1px solid var(--Gray-100, #E4E7E9);
	}

	&__option, &__divider {
		list-style-type: none;
	}

	&__divider {
		width: 1px;
		height: 96px;
		background: #E4E7E9;
	}

	&__option {
		width: 164px;
	}

	& .input-radio {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&__label {
			margin-top: 8px;
			margin-bottom: 16px;
		}

		&__radio {
			width: 20px;
			height: 20px;
			border-radius: 100px;
			border: 1px solid var(--Gray-200, #C9CFD2);
			background: var(--Gray-00, #FFF);
		}
	}

	&__card {
		padding: 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;

		& > *:last-child {
			display: flex;
			gap: 16px;

			& > * {
				flex-grow: 1;
			}
		}
	}

}
</style>