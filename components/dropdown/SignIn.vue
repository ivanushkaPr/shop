<script setup>
import { useCounterStore } from "~/stores/test.js";
const store = useCounterStore();
const { toggleAuthDropdownVisibility } = store;

const redirect = () => {
  toggleAuthDropdownVisibility();
  navigateTo('/auth')
}
</script>

<template>
  <div class="sign-in-dropdown">
    <h3 class="sign-in-dropdown__header"> Войти </h3>

    <input-text class="sign-in-dropdown__email"
                legend="Электронная почта"/>

    <input-hidden class="sign-in-dropdown__password"
                  legend="Пароль"
                  href="#"
                  link-text="Забыли пароль?"
    />

    <base-action-button class="sign-in-dropdown__enter-button" text="Войти" />

    <text-divider text="У вас нет аккаунта?"/>

    <base-secondary-button class="sign-in-dropdown__register-button"
                           text="Зарегистрироваться"
                           @click="redirect"/>
  </div>
</template>

<style lang="scss">
  .sign-in-dropdown {
    position: absolute;
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