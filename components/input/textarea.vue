<script setup>
</script>

<template>
	<label class="input-textarea">
		<description-small-400 class="input-textarea__label">
			<slot/>
		</description-small-400>
		<textarea class="input-textarea__input"/>
	</label>
</template>

<style lang="scss">
.input-textarea {
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;

	&__input {
		min-height: 124px;
		padding: 12px 16px;
		border-radius: 2px;
		border: 1px solid var(--Gray-100, #E4E7E9);
		background: var(--Gray-00, #FFF);
		resize: none;
	}
}
</style>