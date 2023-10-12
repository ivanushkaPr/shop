<script setup>
const { find } = useStrapi()
const response = await find('posts')
</script>

<template>
  <div class="widgets">
    <banner-slider/>
    {{response}}
  </div>
</template>

<style lang="scss">
  .widgets {
    padding: 24px 300px;
    max-width: 1320px;
  }
</style>