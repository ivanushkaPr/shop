<script setup>
defineProps({
	badgeType: {
		type: String,
		required: true,
	},
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
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
});
</script>

<template>
<div class="banner-horizontal-medium">
	  <div class="banner-horizontal-medium__content">
		  <base-badge class="banner-horizontal-medium__badge" :text="badgeText" :type="badgeType"/>
		  <heading-level-one class="banner-horizontal-medium__heading">
			{{ heading }}
		  </heading-level-one>

		  <p class="banner-horizontal-medium__description">
			  {{ description }}
		  </p>

		  <base-action-button class="banner-horizontal-medium__button" text="купить"/>
	  </div>
	<img class="banner-horizontal-medium__img" :src="src" :alt="alt" />
</div>
</template>

<style lang="scss">
.banner-horizontal-medium {
	display: flex;
	padding: 44px;
	gap: 40px;
	border-radius: 4px;
	background: $gray-50;

	&__content {
		max-width: 280px;
	}

	&__badge {
		margin-bottom: 8px;
	}

	&__heading {
		margin-bottom: 12px;
	}

	&__description {
		margin-bottom: 20px;
		@include font(14px, 24px, 400);
	}

	&__img {
		width: 240px;
		height: 240px;
	}
}

</style>
