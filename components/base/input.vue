<script setup>
const props = defineProps({
  value: {
    type: String,
    require: true,
  },
});

const emit = defineEmits(['input']);

const onInputHandler = (event) => {
  emit('input', event.target.value);
};
</script>

<template>
  <input class="base-input" type="text" :value="props.value" @input="onInputHandler"/>
</template>

<style lang="scss">
.base-input {
  padding: 12px 16px;
  border-radius: 2px;
  border: 1px solid var(--gray-100, #E4E7E9);
  background: var(--gray-00, #FFF);
  @include font(14px, 20px, 400);

  &:focus-visible {
    outline: none
  }
}
</style>