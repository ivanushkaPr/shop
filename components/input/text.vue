<script setup>
const props = defineProps({
  legend: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    require: true,
  },
  error: {
    type: Boolean,
    required: false,
    default: false,
  },
  errorText: {
    type: String,
    required: false,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue'])

const onInputHandler = (event) => {
  emit('update:modelValue', event.target.value);
};

</script>

<template>
  <base-label class="input-text">
		<div class="input-text__header">
			<base-legend class="input-text__legend"
									 :legend="props.legend"/>
			<slot />
		</div>
    <base-input :value="props.modelValue"
                @input="onInputHandler"
                :error="props.error"
    />
    <transitions-fade>
      <base-error v-if="error" :text="props.errorText"/>
    </transitions-fade>
  </base-label>
</template>

<style lang="scss">
  .input-text {
    display: flex;
    flex-direction: column;

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 8px;
		}
  }
</style>