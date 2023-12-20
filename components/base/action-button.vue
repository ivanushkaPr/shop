<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  btnType: {
    type: String,
    required: false,
    default: 'button',
  },
});
</script>

<template>
  <button class="action-button" :type="btnType">
	  <slot/>
    {{ props.text }}
		<slot name="icon">
			<icon-arrow-right/>
		</slot>
  </button>
</template>


<style lang="scss">
.action-button {
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  background: var(--primary-500, #FA8232);
  border: none;

  color: var(--gray-00, #FFF);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.168px;
  text-transform: uppercase;
  transition: background 0.3s;
	cursor: pointer;

  &:hover {
    background: var(--primary-600, #DE732D);
  }

  &:disabled {
    background: var(--primary-200, #FFCEAD);
  }
}
</style>