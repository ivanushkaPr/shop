<script setup>

</script>

<template>
	<div class="billing">
		<div class="billing__first-line">
			<input-text class="billing__input" legend="Имя"/>
			<input-text class="billing__input" legend="Фамилия"/>
			<input-text class="billing__input" legend="Название компании"/>
		</div>
		<div class="billing__second-line">
			<input-text class="billing__input" legend="Адрес"/>
		</div>

		<div class="billing__third-line">
			<input-select label="Страна"/>
			<input-select label="Регион/Область"/>
			<input-select label="Город"/>
			<input-text class="billing__input" legend="Почтовый индекс"/>
		</div>

		<div class="billing__fourth-line">
			<input-text class="billing__input" legend="Email"/>
			<input-text class="billing__input" legend="Номер телефона"/>
		</div>

		<div class="billing__fifth-line">
			<input-checkbox>
				Доставить по другому адресу
			</input-checkbox>
		</div>

		<div class="billing__payment">
			<h3 class="billing__payment-title">
				Способ оплаты
			</h3>

			<ul class="billing__payment-options">
				<li class="billing__payment-option">
					<label class="input-radio">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path d="M16 3V29" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<p class="input-radio__label"> Cash on Delivery </p>
						<input type="radio" class="input-radio__radio"/>
					</label>
				</li>
				<li class="billing__payment-divider" />
				<li class="billing__payment-option">
					<label class="input-radio">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path d="M16 3V29" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<p class="input-radio__label"> Cash on Delivery </p>
						<input type="radio" class="input-radio__radio"/>
					</label>
				</li>
				<li class="billing__payment-divider" />
				<li class="billing__payment-option">
					<label class="input-radio">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path d="M16 3V29" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<p class="input-radio__label"> Cash on Delivery </p>
						<input type="radio" class="input-radio__radio"/>
					</label>
				</li>
				<li class="billing__payment-divider" />
				<li class="billing__payment-option">
					<label class="input-radio">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path d="M16 3V29" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<p class="input-radio__label"> Cash on Delivery </p>
						<input type="radio" class="input-radio__radio"/>
					</label>
				</li>
			</ul>

			<div class="billing__credit-card">
				<input-text class="mb-" legend="Имя на карте"/>
				<input-text legend="Номер карты"/>
				<div>
					<input-text class="billing__input" legend="Срок действия"/>
					<input-text class="billing__input" legend="CVC"/>
				</div>
			</div>
		</div>

		<div class="billing__additional-info">
			<description-large-600 class="billing__additional-info-title">
				Дополнительная информация
			</description-large-600>

			<label class="input-textarea">
				<description-small-400 class="input-textarea__label">
					Комментарий к заказу <span :style="{color: '#77878F'}"> (опционально) </span>
				</description-small-400>
				<textarea class="input-textarea__input"/>
			</label>
		</div>
	</div>
</template>

<style lang="scss">


.billing {
	width: 100%;

	&__first-line {
		display: flex;
		gap: 16px;
		margin-bottom: 16px;

		& .billing__input:last-child {
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

	&__payment {
		border-radius: 4px;
		border: 1px solid var(--Gray-100, #E4E7E9);
		background: var(--Gray-00, #FFF);
	}

	&__payment-title {
		display: flex;
		padding: 32px 32px;
		justify-content: center;
		border-bottom: 1px solid var(--Gray-100, #E4E7E9);
		color: var(--Gray-900, #191C1F);
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 133.333% */
		text-align: center;
	}

	&__payment-options {
		display: flex;
		justify-content: space-around;
		margin: 24px 0px;
	}

	&__payment-divider {
		width: 1px;
		height: 96px;
		background: #E4E7E9;
	}

	&__payment-option, 	&__payment-divider {
		list-style-type: none;
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

	&__credit-card {
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

	&__additional-info-title {
		margin-top: 40px;
		margin-bottom: 24px;
	}

	& .input-textarea {
		display: flex;
		flex-direction: column;
		gap: 8px;

		&__input {
			min-height: 124px;
			padding: 12px 16px;
			border-radius: 2px;
			border: 1px solid var(--Gray-100, #E4E7E9);
			background: var(--Gray-00, #FFF);
			resize: none;
		}
	}
}

</style>