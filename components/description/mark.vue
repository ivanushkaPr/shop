<script setup>
defineProps({
	prefix: {
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
	<description-small-400 class="description-mark">
		{{prefix}}:
		<description-medium-600 class="description-mark__sticker">
			{{ mark }}
		</description-medium-600>
	</description-small-400>
</template>

<style lang="scss">
.description-mark {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	&__sticker {
		display: inline-block;
		padding: 6px 12px;

		border-radius: 3px;
		background: $gray-00;

		color: var(--gray-900, #191C1F);
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
	}
}
</style>