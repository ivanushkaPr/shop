<script setup>
</script>

<template>
	<base-breadcrumbs :breadcrumbs="[
          {url: '/', title: 'Главная'},
          {url: '/account' , title: 'Личный кабинет'},
          {url: '/auth/sign-in', title: 'Вход '},
          {title: 'Изменение пароля'}
    ]"/>
	<div class="user-account">
		<form-reset-password />.
	</div>
</template>

<style lang="scss">
</style>