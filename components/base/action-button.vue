<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },

});
</script>

<template>
  <button class="action-button">
    {{ props.text }}
    <icon-arrow-right/>
  </button>
</template>


<style lang="scss">
.action-button {
  display: flex;
  width: 248px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  background: var(--primary-500, #FA8232);
  border: none;

  color: var(--gray-00, #FFF);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.168px;
  text-transform: uppercase;
}
</style>