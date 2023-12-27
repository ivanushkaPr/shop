<script setup>
const serverError = ref(null);

const state = reactive({ userEmail: '' });

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const rules = computed(() => {
	const localRules = {
		userEmail : { required, email },
	};

	return localRules;
});

const $v = useVuelidate(rules, state);

const validate = () => {
	$v.value.$touch()
};

const { login } = useStrapiAuth();

const onSendRestoreCode = async () => {
	validate();
	if ($v.value.$invalid) {
		return;
	}

	try {
		navigateTo('/reset-password');
	} catch(e) {
		serverError.value = 'Что - то пошло не так.';
	}
}
</script>

<template>
<form @click.prevent class="form-restore-password">
	<base-error v-if="serverError"
				class="form-sign-in__error"
				:text="serverError" />

	<description-xl-600 class="form-restore-password__headline">
		Восстановление пароля
	</description-xl-600>

	<description-small-400 class="form-restore-password__description">
		Введите email адрес или мобильный телефон используемый при регистрации.
	</description-small-400>

	<input-text class="form-restore-password__email"
				legend="Email"
				v-model="state.userEmail"
				@update:modelValue="$v.userEmail.$reset"
				:error="$v.userEmail.$error"
				error-text="Обязательное поле"
	/>

	<base-action-button @click="onSendRestoreCode" class="form-restore-password__button" type="submit">
		Отправить код
	</base-action-button>

	<p class="form-restore-password__link mb-8">
		У вас уже есть аккаунт? <base-link href="/auth/sign-in" > Войти </base-link>
	</p>

	<p class="form-restore-password__link mb-24">
		У вас нет аккаунта? <base-link href="/auth/sign-up" > Регистрация </base-link>
	</p>

	<hr class="form-restore-password__divider" />

	<p class="form-restore-password__link">
		Вы можете связаться с <base-link is-orange href="/support"> поддержкой </base-link>
		для восстановления доступа к аккаунту.
	</p>
</form>
</template>

<style lang="scss">
.form-restore-password {
	margin: 100px auto;
	box-sizing: border-box;
	display: flex;
	max-width: 432px;
	flex-direction: column;
	align-items: flex-start;
	padding: 32px;
	border-radius: 4px;
	border: 1px solid var($gray-100);
	background: var($gray-00);
	box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.12);

	&__headline {
		width: 100%;
		text-align: center;
		margin-bottom: 12px;
	}

	&__description {
		text-align: center;
		margin-bottom: 24px;
	}

	&__email {
		width: 100%;
		margin-bottom: 24px;
	}

	&__button {
		width: 100%;
		margin-bottom: 24px;
	}

	&__link {
		display: inline-block;

		&.mb-8 {
			margin-bottom: 8px;
		}


		&.mb-24 {
			margin-bottom: 24px;
		}
	}

	&__divider {
		margin-bottom: 24px;
		background: #E4E7E9;
		width: 100%;
	}
}
</style>