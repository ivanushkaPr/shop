<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['click']);
</script>

<template>
  <button @click="emits('click')" class="secondary-button">
    {{ props.text }}
  </button>
</template>

<style lang="scss">
.secondary-button {
  display: flex;
  width: 248px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  background-color: transparent;
  border: 2px solid var(--primary-100, #FFE7D6);

  color: var(--primary-500, #FA8232);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.168px;
  text-transform: uppercase;
}
</style>