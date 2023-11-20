<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <p class="base-error"> {{ props.text }}</p>
</template>

<style lang="scss">
  .base-error {
    color: var(--danger-500, #EE5858);
  }
</style>