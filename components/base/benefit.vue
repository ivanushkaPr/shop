<script setup>
const IconPackage = resolveComponent('IconPackage');
const IconTrophy = resolveComponent('IconTrophy');
const IconCreditCard = resolveComponent('IconCreditCard');
const IconHeadphonesBg = resolveComponent('IconHeadphonesBg');

const props = defineProps({
	headline: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	componentName: {
		type: String,
		required: true,
		validator(value) {
			return [
				'IconPackage',
				'IconTrophy',
				'IconCreditCard',
				'IconHeadphonesBg'].indexOf(value) !== -1;
		},
	},
})

const currentComponent = computed(() => {
	if (props.componentName === 'IconPackage') {
		return IconPackage;
	} else if (props.componentName === 'IconTrophy') {
		return IconTrophy;
	} else if (props.componentName === 'IconCreditCard') {
		return IconCreditCard;
	} else if (props.componentName === 'IconHeadphonesBg') {
		return IconHeadphonesBg;
	}
});

</script>

<template>
	<div class="benefit">
		<component :is="currentComponent" />
		<div class="benefit__description">
			<p class="benefit__headline"> {{headline}} </p>
			<p class="benefit__text"> {{ description }} </p>
		</div>
	</div>
</template>

<style lang="scss">
.benefit {
	display: flex;
	gap: 16px;
	padding: 16px;
	align-items: center;

	&__headline-text {
		color: $gray-900;
		text-transform: uppercase;
		@include font(14px, 20px, 500);
	}

	&__description-text {
		color: $gray-600;
		text-transform: uppercase;
		@include font(14px, 20px, 4 00);
	}
}
</style>