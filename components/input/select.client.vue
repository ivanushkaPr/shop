<script setup>
defineProps({
	label: {
		type: String,
		required: true,
	},
});

import VueSelect from 'vue-select';
</script>

<template>
	<label class="input-select">
		<p class="input-select__label">{{ label }}</p>
		<vue-select class="input-select__select" :options="[1,2,3,4,5]" label="title"></vue-select>
	</label>
</template>

<style lang="scss">
@import "vue-select/dist/vue-select.css";

.input-select {
	&__label {
		margin-bottom: 8px;
		color: var(--Gray-900, #191C1F);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
	}

	&__select {

		& .vs__dropdown-toggle {
			border-radius: 2px;
			border: 1px solid var(--Gray-100, #E4E7E9);
		}

		& .vs__selected {
			color: var(--Gray-900, #191C1F);
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
		}
	}
}
</style>