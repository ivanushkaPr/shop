<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    require: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
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
  <input class="base-input"
         :class="{'_error': error}"
         type="text"
         :value="props.modelValue"
         @input="onInputHandler"
         :placeholder="placeholder"
  />
</template>

<style lang="scss">
.base-input {
  padding: 12px 16px;
  border-radius: 2px;
  border: 1px solid var(--gray-100, #E4E7E9);
  background: var(--gray-00, #FFF);
  @include font(14px, 20px, 400);
  color: var(--gray-900, #191C1F);
  transition: all 0.3s ease-in;

  &::placeholder {
    color: #77878F;
  }

  &:focus-visible {
    outline: none
  }

  &:focus {
    border-color: #FA8232;

    &::placeholder {
      color: var(--gray-300, #ADB7BC);
    }
  }

  &._error {
    border: 1px solid var(--danger-500, #EE5858);
    background: var(--danger-50, #FDEEEE);
  }
}
</style>