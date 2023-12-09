<script setup>
defineProps({
	src: {
		type: String,
		required: false,
		default: '',
	},
	alt: {
		type: String,
		required: false,
		default: '',
	},
	billing: {
		type: Object,
		required: true,
		validator(billingData) {
			return billingData.every((row) => row.prop && row.value);
		},
	},
});
</script>

<template>
	<div class="card-payment-info">
		<header class="card-payment-info__header">
			<description-small-400>
				<slot name="header"/>
			</description-small-400>
		</header>
		<div class="card-payment-info__content">
			<div class="card-payment-info__user">
				<img v-if="src" class="card-payment-info__img" :src="src" :alt="alt"/>
				<div class="card-payment-info__user-credentials">
					<description-medium-600 class="card-payment-info__name">
						<slot name="fullName"/>
					</description-medium-600>
					<description-medium-400 class="card-payment-info__address">
						<slot name="address"/>
					</description-medium-400>
				</div>
			</div>

			<div class="card-payment-info__billing-info">
				<ul class="card-payment-info__billing-list">
					<li v-for="row in billing" class="card-payment-info__billing-item">
						{{row.prop}}: <span class="card-payment-info__billing-value"> {{row.value}} </span>
					</li>
				</ul>
			</div>

			<base-secondary-button is-blue>
				Редактировать
			</base-secondary-button>
		</div>
	</div>
</template>

<style lang="scss">
.card-payment-info {
	max-width: 312px;
	display: inline-flex;
	flex-direction: column;
	border-radius: 4px;
	border: 1px solid $gray-100;
	background: $gray-00;

	&__header {
		padding: 16px 24px;
		border-radius: 4px 4px 0px 0px;
		border-bottom: 1px solid $gray-100;
		& * {
			text-transform: uppercase;
			font-weight: 500;
		}
	}

	&__content {
		padding: 24px;
	}

	&__user {
		display: flex;
		gap: 16px;
		margin-bottom: 20px;
	}

	&__address {
		color: $gray-600;
	}
	&__billing-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 22px;
		list-style-type: none;
		padding: 0;
	}

	&__billing-item {
		color: $gray-900;
	}

	&__billing-value {
		color: $gray-600;
	}

}

</style>

<style>
</style>