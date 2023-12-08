<script setup>
const serverError = ref(null);

const state = reactive({ confirmationCode: '' });

import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const rules = computed(() => {
	const localRules = {
		confirmationCode: { required },
	};

	return localRules;
});

const $v = useVuelidate(rules, state);

const validate = () => {
	debugger
	$v.value.$touch()
};

const { login } = useStrapiAuth();

const onActivateEmail = async () => {
	validate();
	if ($v.value.$invalid) {
		return;
	}

	try {
		navigateTo('/account');
	} catch(e) {
		serverError.value = 'Что - то пошло не так.';
	}
}
</script>

<template>
	<form @click.prevent class="form-email-verification">
		<base-error v-if="serverError"
								class="form-email-verification__error"
								:text="serverError" />

		<description-xl-600 class="form-email-verification__headline">
			Активировать аккаунт
		</description-xl-600>

		<description-small-400 class="form-email-verification__description">
			Мы отправили на вашу почту пароль для активации аккаунта.
		</description-small-400>

		<input-text class="form-email-verification__email"
								legend="Введите код"
								v-model="state.confirmationCode"
								@update:modelValue="$v.confirmationCode.$reset"
								:error="$v.confirmationCode.$error"
								error-text="Обязательное поле"
		>
			<base-link href="#">
				Повторная отправка
			</base-link>
		</input-text>

		<base-action-button @click="onActivateEmail" class="form-email-verification__button" type="submit">
			Активировать
		</base-action-button>
	</form>
</template>

<style lang="scss">
.form-email-verification{
	margin: 100px auto;
	box-sizing: border-box;
	display: flex;
	max-width: 424px;
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