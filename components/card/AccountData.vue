<script setup>
const props = defineProps({
	bgColor: {
		type: String,
		required: true,
		validator(color) {
			return ['blue', 'orange', 'green'].indexOf(color) !== -1;
		},
	},
});

import Rocket from "~/components/icon/Rocket.vue";
import Receipt from "~/components/icon/Receipt.vue";
import Package from "~/components/icon/Package.vue";

const imgSrc = computed(() => {
	if (props.bgColor === 'blue') {
		return Rocket;
	} else if (props.bgColor === 'orange') {
		return Receipt
	} else {
		return Package;
	}
});

</script>

<template>
	<div class="card-account-data" :class="[
			bgColor === 'blue' && '_bg_blue',
			bgColor === 'orange' && '_bg_orange',
			bgColor === 'green' && '_bg_green',
	]">
		<component :is="imgSrc" class="card-account-data__image"/>
		<div class="card-account-data__data">
			<description-xl-600 class="card-account-data__counter">
				<slot name="counter" />
			</description-xl-600 >
			<description-small-400 class="card-account-data__property">
				<slot name="property" />
			</description-small-400>
		</div>
	</div>
</template>

<style lang="scss">
.card-account-data {
	min-width: 280px;
	padding: 16px;
	border-radius: 4px;
	display: flex;
	gap: 16px;

	&__image {
		width: 32px;
		height: 32px;
		padding: 12px;
		background: $gray-00;
	}

	&__counter {
		margin-bottom: 4px;
	}

	&__property {
		color: $gray-700;
	}

	&._bg_blue {
		background: var(--secondary-50, #EAF6FE);
	}
	&._bg_orange {
		background: var(--primary-50, #FFF3EB);
	}
	&._bg_green {
		background: var(--success-50, #EAF7E9)
	}
}
</style>