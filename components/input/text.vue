<script setup>
const props = defineProps({
  legend: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <base-label class="input-text">
    <base-legend class="input-text__legend" :legend="props.legend"/>
    <base-input />
  </base-label>
</template>

<style lang="scss">
  .input-text {
    display: flex;
    flex-direction: column;

    &__legend {
      margin-bottom: 8px;
    }
  }
</style>