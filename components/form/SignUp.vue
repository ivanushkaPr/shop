<script setup lang="ts">
import Checkbox from "~/components/input/checkbox.vue";
</script>

<template>
  <div class="form-sign-up">
    <input-text class="form-sign-up__name"
                legend="Имя"/>

    <input-text class="form-sign-up__email"
                legend="Электронная почта"/>

    <input-hidden class="form-sign-up__password"
                  legend="Пароль"
                  href="#"
    />

    <input-hidden class="form-sign-up__password-confirm"
                  legend="Подтвердите пароль"
                  href="#"
    />

    <input-checkbox  class="form-sign-up__confirmation">
      Я согласен с   <base-link href="#" text="Пользовательским соглашением"/> <br> и
      <base-link href="#" text="Политикой Конфиденциальности"/>.
    </input-checkbox>


    <base-action-button class="form-sign-up__enter-button" text="Зарегистрироваться" />

    <text-divider text="или" />

    <button-o-auth class="form-sign-up__oauth-button" text="Войти с Google">
      <icon-google/>
    </button-o-auth>

    <button-o-auth text="Войти с Apple">
      <icon-apple/>
    </button-o-auth>
  </div>
</template>

<style lang="scss">
.form-sign-up {
  padding: 24px 32px 32px;
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