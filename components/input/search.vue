<script setup>
const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	error: {
		type: Boolean,
		default: false,
	}
});

const searchValue = ref(props.modelValue);

const emits = defineEmits(['update:modelValue']);

const updateValue = (value) => {
	searchValue.value = value;
	emits('update:modelValue', value);
}
</script>


<template>
	<div class="input-search">
		<base-input @update:modelValue="updateValue"
								:modelValue="modelValue"
								class="input-search__input"
								:error="error"
		/>
		<icon-search class="input-hidden__icon"/>
	</div>
</template>

<style lang="scss">

.input-search {
	max-width: 424px;
	display: flex;
	position: relative;
	&__input {
		flex-basis: 100%;
	}

	&__icon {
		position: absolute;
		top: 12px;
		right: 12px;
	}
}

</style>