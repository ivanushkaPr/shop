<script setup>
</script>

<template>
	<div>
		<base-breadcrumbs :breadcrumbs="[
          {url: '/', title: 'Главная'},
          {url: '/account', title: 'Личный кабинет'},
          {title: 'Войти'}
    ]"/>
		<div class="auth">
			<form-enter/>
		</div>
	</div>
</template>

<style lang="scss">
.auth {
	margin: 0 auto;
	padding: 24px 300px;
	max-width: 1320px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>