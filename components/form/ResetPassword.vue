
<script setup>
const serverError = ref(null);

const state = reactive({
	password: '',
	cpwd: '',
});

import useVuelidate from "@vuelidate/core";
import {required, minLength} from "@vuelidate/validators";

const rules = computed(() => {
	const localRules = {
		password: {
			required,
			minLength: minLength(8),
		},
		cpwd: {
			required,
			minLength: minLength(8),
		},
	};

	return localRules;
});

const $v = useVuelidate(rules, state);

const validate = () => {
	$v.value.$touch();
};

const { login } = useStrapiAuth();

const onChangePassword = async () => {
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
	<form @click.prevent class="form-reset-password ">
		<base-error v-if="serverError"
					class="form-reset-password __error"
					:text="serverError" />

		<description-xl-600 class="form-reset-password__headline">
			Изменение пароля
		</description-xl-600>

		<description-small-400 class="form-reset-password__description">
			Пароль должен соддержать буквы верхнего и нижнего регистра, цифры и быть минимальной длины в 8 символов.
		</description-small-400>

		<input-hidden class="form-reset-password__input"
									legend="Пароль"
									v-model="state.password"
									@update:modelValue="$v.password.$reset"
									:error="$v.password.$error"
									error-text="Обязательное поле"
		/>

		<input-hidden class="form-reset-password__input"
									legend="Подтвердите пароль"
									v-model="state.cpwd"
									@update:modelValue="$v.cpwd.$reset"
									:error="$v.cpwd.$error"
									error-text="Обязательное поле"
		/>

		<base-action-button @click="onChangePassword" class="form-reset-password__button" type="submit">
			Изменить пароль
		</base-action-button>
	</form>
</template>

<style lang="scss">
.form-reset-password {
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

	&__input {
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