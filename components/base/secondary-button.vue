<script setup>
const props = defineProps({
	isBlue: {
		type: Boolean,
		required: false,
	},
});

const emits = defineEmits(['click']);
</script>

<template>
  <button @click="emits('click')"
					class="secondary-button"
					:class="isBlue && '_blue'"
	>
		<slot/>
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
  border: 2px solid $primary-100;

  color: $primary-500;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.168px;
  text-transform: uppercase;
  transition: background-color 0.3s, border-color 0.3s;

	cursor: pointer;

  &:hover {
    border-color: $primary-600;
    background: $primary-50;
  }


	&._blue {
		border-color: $secondary-500;
		color: $secondary-500;

		&:hover {
			color: $secondary-600;
			border-color: $secondary-600;
			background: $secondary-50;
		}
	}
}
</style>