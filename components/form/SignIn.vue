<script setup>

</script>

<template>
  <div class="form-sign-in">
    <input-text class="form-sign-in__email"
                legend="Электронная почта"/>

    <input-hidden class="form-sign-in__password"
                  legend="Пароль"
                  href="#"
                  link-text="Забыли пароль?"
    />

    <base-action-button class="form-sign-in__enter-button" text="Войти" />

    <text-divider text="или" />

    <button-o-auth class="form-sign-in__oauth-button" text="Войти с Google">
      <icon-google/>
    </button-o-auth>

    <button-o-auth text="Войти с Apple">
      <icon-apple/>
    </button-o-auth>
  </div>
</template>

<style lang="scss">
.form-sign-in {
  padding: 24px 32px 32px;

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