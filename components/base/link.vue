<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink class="base-link" :to="props.href"> {{ props.text }}</NuxtLink>
</template>

<style lang="scss">
  .base-link {
    color: $blue-500;
    font-family: Roboto;
    @include font(14px, 20px, 500, $font-style: normal);
    text-decoration: none;
  }
</style>