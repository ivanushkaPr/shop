<script setup>
const props = defineProps({
  legend: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <p class="base-legend"> {{ props.legend }} </p>
</template>