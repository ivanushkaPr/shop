<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['click']);
</script>

<template>
  <ul class="categories-menu__list">
    <li v-for="item in props.items"
        class="categories-menu__item"
        @click="emit('click', item)">
      {{ item }}
      <icon-chevron-right-bold class="categories-menu__item-icon"/>
    </li>
  </ul>
</template>