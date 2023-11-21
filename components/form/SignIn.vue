<script setup>
const state = reactive({
  identifier: '',
  password: '',
  serverError: null,
})

import { useAuthStore } from "~/stores/auth.js";
const store = useAuthStore();
const { setName } = store;


import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
const rules = computed(() => {
  const localRules = {
    identifier: { required },
    password: { required }
  };

  return localRules;
});

const $v = useVuelidate(rules, state);

const validate = () => {
  $v.value.$touch()
};

const { login } = useStrapiAuth();
const onLoginHandler =  async () => {
  validate();
  if ($v.value.$invalid) {
    return;
  }

  try {
    const data = await login({identifier: state.identifier, password: state.password});
    setName(data.user.value.username);
    navigateTo('/account');
  } catch(e) {
    if (e.error.message === "Invalid identifier or password") {
      state.serverError = 'Неправильное имя пользователя или пароль.';
    }
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
                @update:modelValue="$v.identifier.$reset"
                :error="$v.identifier.$error"
                error-text="Обязательное поле"
    />

    <input-hidden class="form-sign-in__password"
                  legend="Пароль"
                  href="#"
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