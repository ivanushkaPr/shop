<script setup>
const props = defineProps({
	type: {
		type: String,
		required: false,
		default: 'visa',
		validator(value) {
			return ['visa', 'mastercard'].indexOf(value) !== -1;
		},
	},
});

const isDropdownOpened = ref(false);
const toggleDropdown = () => {
	isDropdownOpened.value = !isDropdownOpened.value;
}
</script>

<template>
	<div class="card-credit-info" :class="[
		type === 'visa' && '_blue',
		type === 'mastercard' && '_green',
	]">
		<header class="card-credit-info__header">
					<description-medium-600 class="card-credit-info__amount">
						<slot name="amount"/>
					</description-medium-600>
					<div class="card-credit-info__dropdown">
						<button class="card-credit-info__dropdown-button" @click="toggleDropdown">
							<icon-dots class="card-credit-info__icon" :class="isDropdownOpened && '_color-white'"/>
						</button>

						<nav class="card-credit-info__menu" v-if="isDropdownOpened">
							<ul class="card-credit-info__list">
								<li class="card-credit-info__item">
									<description-small-400>
										Редактировать
									</description-small-400>
								</li>
								<li class="card-credit-info__item">
									<description-small-400>
										Удалить
									</description-small-400>
								</li>
							</ul>
						</nav>
					</div>
		</header>

		<div class="card-credit-info__credentials">
			<div class="card-credit-info__number">
				<span class="card-credit-info__placeholder">
					Номер карты
				</span>
				<description-xl-400 class="card-credit-info__code">
					<slot name="number"/>
				</description-xl-400>

			</div>
			<div class="card-credit-info__type">
				<icon-visa v-if="type === 'visa'"/>
				<icon-mastercard v-else/>
				<description-small-600 class="card-credit-info__holder">
					<slot name="holder"/>
				</description-small-600>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.card-credit-info {
	width: 296px;
	padding: 24px;
	border-radius: 4px;

	&._blue {
		background: radial-gradient(236.15% 138.52% at 0% 0%, #1B6392 0%, #124261 100%);
	}

	&._green {
		background: radial-gradient(236.15% 138.52% at 0% 0%, #248E1D 0%, #2DB224 100%);
	}

	&__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 24px;
	}

	&__amount {
		color: $gray-00;
		text-transform: uppercase;
	}

	&__dropdown {
		position: relative;
	}

	&__dropdown-button {
		padding: 0;
		background: transparent;
		border: none;
	}

	&__icon {
		& g path {
			opacity: 0.7;
		}
		&._color-white {
			& g path {
				opacity: 1;
			}
		}
	}

	&__menu {
		position: absolute;
		border-radius: 4px;
		background: radial-gradient(236.15% 138.52% at 0% 0%, #248E1D 0%, #2DB224 100%);
	}

	&__list {
		list-style-type: none;
		margin: 0;
		padding: 8px 0;
		border-radius: 2px;
		border: 1px solid $gray-100;
		background: $gray-00;
		box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.12);
	}

	&__item {
		padding: 8px 20px 8px 16px;

		& p {
			color: $gray-600;
		}

		&:hover {
			background-color: $gray-50;

			& p {
				color: $gray-900 !important;
			}
		}
	}

	&__number {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	&__placeholder {
		color: $gray-00;
		font-size: 11px;
		font-style: normal;
		font-weight: 500;
		line-height: 16px;
		text-transform: uppercase;
	}

	&__type {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__code {
		color: $gray-00;
		margin-bottom: 8px;
	}

	&__holder {
		color: $gray-00;
	}
}
</style>