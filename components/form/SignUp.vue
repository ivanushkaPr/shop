<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.js";
const store = useAuthStore();
const { setJwtToken } = store;

const state = reactive({
  username: '',
  email: '',
  password: '',
  cpwd: '',
  serverError: '',
});

import useVuelidate from "@vuelidate/core";
import { required, email, minLength, } from "@vuelidate/validators";
const rules = computed(() => {
  const localRules = {
    username: { required },
    email: { required, email },
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
  $v.value.$touch()
};

const collectSubmitData = () => {
  return {
    username: state.username,
    email: state.email,
    password: state.password,
  };
}

const { register } = useStrapiAuth();
const onRegister = async () => {
  validate();
  if ($v.value.$invalid) {
    return;
  }

  const submitData = collectSubmitData();
  try {
    const data = await register(submitData);
    setJwtToken(data.jwt);
    navigateTo('/');
  } catch (e) {
    if (e.error.message === 'Email or Username are already taken') {
      state.serverError = 'Имя или адрес электронной почты уже заняты.';
    }
  }
};
</script>

<template>
  <form @submit.prevent="onRegister" class="form-sign-up">
    <base-error v-if="state.serverError"
                 class="form-sign-up__error"
                :text="state.serverError"/>

    <input-text class="form-sign-up__name"
                legend="Имя"
                v-model="state.username"
                @update:modelValue="$v.username.$reset"
                :error="$v.username.$error"
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

    <input-hidden class="form-sign-up__password-confirm"
                  legend="Подтвердите пароль"
                  v-model="state.cpwd"
                  @update:modelValue="$v.cpwd.$reset"
                  :error="$v.cpwd.$error"
                  error-text="Обязательное поле"
    />

    <input-checkbox  class="form-sign-up__confirmation">
		Я согласен с   <base-link href="#" > Пользовательским соглашением </base-link> <br> и
		<base-link href="#"> Политикой Конфиденциальности </base-link>.
    </input-checkbox>


    <base-action-button class="form-sign-up__enter-button"
                        text="Зарегистрироваться"
                        type="submit"/>

    <text-divider text="или" />

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

  &__name, &__email, &__password, &__password-confirm {
    margin-bottom: 16px;
  }

  &__name {}
  &__email {}
  &__password {}
  &__password-confirm {}


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