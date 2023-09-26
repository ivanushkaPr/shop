<script setup>
const { data } = await useFetch('/api/getMenu');
</script>

<template>
  <div class="header-bottom">
    <div class="header-bottom__left">
      <categories-menu :menu-items="data"/>
      <secondary-menu/>
    </div>
    <call-us/>
  </div>
<!--  <pre>{{ data }}</pre>-->
</template>

<style lang="scss">
.header-bottom {
  display: flex;
  padding: 30px 300px;
  display: flex;
  justify-content: space-between;
  &__left {
    display: flex;
    gap: 24px;
  }
}
</style>
