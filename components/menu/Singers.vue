<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['mouseover']);
</script>

<template>
  <ul class="categories-menu__singers-menu">
    <li v-for="item in props.items"
        class="categories-menu__singer-item"
        :key="item"
        @mouseover="emit('mouseover', item)"
    >
      {{ item }}
    </li>
  </ul>
</template>