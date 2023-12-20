<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.js";

const store = useAuthStore();
const { setCustomer } = store;

const state = reactive({
	username: '',
	surname: '',
	email: '',
	password: '',
	phone: '',
	serverError: '',
});

import useVuelidate from "@vuelidate/core";
import {required, email, minLength,} from "@vuelidate/validators";

const rules = computed(() => {
	return {
		username: {required},
		surname: {required},
		email: {required, email},
		password: {
			required,
			minLength: minLength(8),
		},
		phone: {
			required,
			minLength: minLength(8),
		},
	};
});

const $v = useVuelidate(rules, state);

const validate = () => {
	$v.value.$touch();

	return $v.value.$invalid;
};

const collectSubmitData = () => {
	return {
		first_name: state.username,
		last_name: state.surname,
		email: state.email,
		password: state.password,
		phone: state.phone,
	};
}


const client = useMedusaClient();

const onRegister = async () => {
	if (validate()) {
		return;
	}

	if (await useEmailCheck(state.email)) {
		console.log('User already exists');
		return;
	}

	try {
		const { customer } = await client.customers.create(collectSubmitData());
		if (customer.id) {
			setCustomer(customer);
			navigateTo('/auth/sign-in');
		}
	} catch (e) {

	}
};
</script>

<template>
	<form @submit.prevent="onRegister" class="form-sign-up">
		<base-error v-if="state.serverError"
								class="form-sign-up__error"
								:text="state.serverError"/>

		<input-text class="form-sign-up__first-name"
								legend="Имя"
								v-model="state.username"
								@update:modelValue="$v.username.$reset"
								:error="$v.username.$error"
								error-text="Обязательное поле"
		/>

		<input-text class="form-sign-up__second-name"
								legend="Фамилия"
								v-model="state.surname"
								@update:modelValue="$v.surname.$reset"
								:error="$v.surname.$error"
								error-text="Обязательное поле"
		/>


		<input-text class="form-sign-up__email"
								legend="Электронная почта"
								v-model="state.email"
								@update:modelValue="$v.email.$reset"
								:error="$v.email.$error"
								error-text="Обязательное поле"
		/>

		<input-hidden class="form-sign-up__password"
									legend="Пароль"
									v-model="state.password"
									@update:modelValue="$v.password.$reset"
									:error="$v.password.$error"
									error-text="Обязательное поле"
		/>

		<input-text class="form-sign-up__phone"
								legend="Телефон"
								v-model="state.phone"
								@update:modelValue="$v.phone.$reset"
								:error="$v.phone.$error"
								error-text="Обязательное поле"
		/>

		<input-checkbox class="form-sign-up__confirmation">
			Я согласен с
			<base-link href="#"> Пользовательским соглашением</base-link>
			<br> и
			<base-link href="#"> Политикой Конфиденциальности</base-link>
			.
		</input-checkbox>

		<base-action-button class="form-sign-up__enter-button"
												text="Зарегистрироваться"
												type="submit"/>

		<text-divider text="или"/>

		<button-o-auth class="form-sign-up__oauth-button" text="Войти с Google">
			<icon-google/>
		</button-o-auth>

		<button-o-auth text="Войти с Apple">
			<icon-apple/>
		</button-o-auth>
	</form>
</template>

<style lang="scss">
.form-sign-up {
	padding: 24px 32px 32px;

	&__error {
		margin-bottom: 16px;
	}

	&__first-name, &__second-name, &__email, &__password, &__phone {
		margin-bottom: 16px;
	}

	&__name {
	}

	&__email {
	}

	&__password {
	}

	&__password-confirm {
	}


	&__confirmation {
		margin-bottom: 32px;
	}

	&__enter-button {
		width: 100%;
		margin-bottom: 24px;
	}

	&__oauth-button {
		margin-bottom: 12px;
	}
}

</style>