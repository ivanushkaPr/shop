<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="button-oAuth">
    <slot/>
    {{ text }}
  </button>
</template>

<style lang="scss">
.button-oAuth {
  display: flex;
  width: 100%;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 93px;

  color: var(--gray-700, #475156);
  text-align: center;
  /* Body/Small/400 */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  border-radius: 2px;
  border: 1px solid var(--gray-100, #E4E7E9);
  background: var(--gray-00, #FFF);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
}
</style>