<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-divider">
    <p class="text-divider__legend">{{ props.text }}</p>
  </div>
</template>

<style lang="scss">
.text-divider {
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after, &:before {
    content: '';
    flex-grow: 1;
    display: inline-block;
    width: 70px;
    height: 1px;
    background-color: #E4E7E9;
  }

  &__legend {
    margin: 0px 10px;
    color: #77878F;
  }
}

</style>