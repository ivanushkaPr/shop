<script setup>
</script>

<template>
	<base-breadcrumbs :breadcrumbs="[
          {url: '/', title: 'Главная'},
          {url: '/account' , title: 'Личный кабинет'},
          {url: '/auth/sign-in', title: 'Вход '},
          {title: 'Активация аккаунта '}
    ]"/>
	<div class="user-account">
		<form-email-verification />
	</div>
</template>

<style lang="scss">
</style>