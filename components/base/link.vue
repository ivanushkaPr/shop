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
  isOrange: {
	  type: Boolean,
	  required: false,
  },
});
</script>

<template>
  <NuxtLink class="base-link"
			:class="isOrange && '_color-orange'"
			:to="props.href"><slot/></NuxtLink>
</template>

<style lang="scss">
  .base-link {
    color: $blue-500;
    font-family: Roboto;
    @include font(14px, 20px, 500, $font-style: normal);
    text-decoration: none;
	  cursor: pointer;

	&._color-orange {
		color: $primary-500;
	}
  }
</style>