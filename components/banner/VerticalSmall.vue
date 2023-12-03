<script setup>
defineProps({
	badgeText: {
		type: String,
		required: true,
	},
	heading: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	mark: {
		type: String,
		required: true,
	},
});

</script>

<template>
	<div class="banner-vertical-small">
		<description-small-600 class="banner-vertical-small__badge">
			{{ badgeText }}
		</description-small-600>
		<heading-level-two class="banner-vertical-small__heading">
			{{ heading }}
		</heading-level-two>
		<description-large-400 class="banner-vertical-small__description">
			{{ description }}
				<description-large-600 class="banner-vertical-small__mark">
					{{ mark }}
				</description-large-600>
		</description-large-400>

		<base-action-button  class="banner-vertical-small__button" text="купить" :style="{backgroundColor: '#2DA5F3'}"/>
	</div>
</template>

<style lang="scss">
.banner-vertical-small {
	min-width: 312px;
	box-sizing: border-box;
	display: flex;
	padding: 40px 24px;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 4px;
	background: $blue-banner-bg;

	&__badge {
		margin-bottom: 18px;
		padding: 6px 12px;
		border-radius: 2px;
		background: rgba(255, 255, 255, 0.12);

		color: $gray-00;
	}

	&__heading {
		margin-bottom: 12px;
		color: $gray-00;
	}

	&__description {
		color: $gray-00;
		margin-bottom: 24px;
	}

	&__mark {
		color: $warning-500;
	}

	&__button {
		width: 100%;
	}
}
</style>