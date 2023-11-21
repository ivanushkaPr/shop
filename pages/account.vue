<script setup>
</script>

<template>
	<base-breadcrumbs :breadcrumbs="[
          {url: '/', title: 'Главная'},
          {url: '/account', title: 'Личный кабинет'},
          {title: 'Панель управления'}
    ]"/>
  <div class="user-account">
    Добро пожаловать в личный кабинет.
  </div>
</template>

<style lang="scss">
</style>