<script setup>
const state = reactive({
  identifier: '',
  password: '',
  serverError: null,
})

import { useAuthStore } from "~/stores/auth.js";
const store = useAuthStore();
const { setCustomer } = store;


import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
const rules = computed(() => {
  return {
    identifier: { required, email },
    password: { required }
  };
});

const $v = useVuelidate(rules, state);

const isInvalid = () => {
  $v.value.$touch()
	return $v.value.$invalid;
};

const client = useMedusaClient();
const onLoginHandler =  async () => {
  if (isInvalid()) {
    return;
  }

  try {
		const { customer } = await client.auth.authenticate({
			email: state.identifier,
			password: state.password,
		});
		if (customer.id) {
			setCustomer(customer);
			navigateTo('/');
		}
  } catch(e) {
		state.serverError = 'Неправильное имя пользователя или пароль.';
  }
}
</script>

<template>
  <form @submit.prevent="onLoginHandler" class="form-sign-in">

    <base-error v-if="state.serverError"
                class="form-sign-in__error"
                :text="state.serverError" />

    <input-text class="form-sign-in__email"
                legend="Электронная почта"
                v-model="state.identifier"
                :error="$v.identifier.$error"
                error-text="Обязательное поле"
								@update:modelValue="$v.identifier.$reset"
    />

    <input-hidden class="form-sign-in__password"
                  legend="Пароль"
				  href="/forget-password"
                  link-text="Забыли пароль?"
                  :error="$v.password.$error"
                  error-text="Обязательное поле"
                  v-model="state.password"
                  @update:modelValue="$v.password.$reset"
    />

    <base-action-button class="form-sign-in__enter-button"
                        text="Войти"
                        type="submit"/>

    <text-divider text="или" />

    <button-o-auth class="form-sign-in__oauth-button" text="Войти с Google">
      <icon-google/>
    </button-o-auth>

    <button-o-auth text="Войти с Apple" type="submit">
      <icon-apple/>
    </button-o-auth>
  </form>
</template>

<style lang="scss">
.form-sign-in {
  padding: 24px 32px 32px;

  &__error {
    margin-bottom: 16px;
  }

  &__email {
    margin-bottom: 16px;
  }

  &__password {
    margin-bottom: 20px;
  }

  &__enter-button {
    width: 100%;
    margin-bottom: 34px;
  }

  &__oauth-button {
    margin-bottom: 12px;
  }
}
</style>