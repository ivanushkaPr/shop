<script setup>
import { useCounterStore } from "~/stores/test.js";
const store = useCounterStore();
const { toggleAuthDropdownVisibility, closeAuthDropdown } = store;

const state = reactive({
  identifier: '',
  password: '',
})

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

const onLoginHandler =  async () => {
  validate();
  debugger;
  if ($v.value.$invalid) {
    return;
  }

  try {
    const data = await login({identifier: state.identifier.value, password: state.password.value});
    setName(data.user.value.username);
    navigateTo('/account');
  } catch(e) {

  }
}


const redirect = () => {
  toggleAuthDropdownVisibility();
  navigateTo('/auth')
}
</script>

<template>
  <form @submit.prevent="onLoginHandler"
        class="sign-in-dropdown"
        v-click-outside="closeAuthDropdown">

    <h3 class="sign-in-dropdown__header"> Войти </h3>

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

    <base-action-button class="sign-in-dropdown__enter-button" text="Войти" type="submit"/>

    <text-divider text="У вас нет аккаунта?"/>

    <base-secondary-button class="sign-in-dropdown__register-button"
                           text="Зарегистрироваться"
                           @click="redirect"/>
  </form>
</template>

<style lang="scss">
  .sign-in-dropdown {
    position: absolute;
	  z-index: 2;
    right: 0px;
    min-width: 360px;
    padding: 32px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid var(--gray-100, #E4E7E9);
    background: var(--gray-00, #FFF);
    /* Dropdown Shadow */
    box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);

    &__header {
      color: var(--gray-900, #191C1F);
      text-align: center;
      /* Body/XL/600 */
      font-family: Roboto;
      @include font(20px, 28px, 600);

      margin-bottom: 20px;
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

    &__register {
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:after, &:before {
        content: '';
        display: inline-block;
        width: 70px;
        height: 1px;
        background-color: #E4E7E9;
      }
    }

    &__legend {
      color: #77878F;
    }

    &__register-button {
      width: 100%;
    }
  }
</style>