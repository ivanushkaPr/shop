<script setup>
const formSignIn = resolveComponent('FormSignIn');
const formSignUp = resolveComponent('FormSignUp');

const currentTabName = ref('FormSignIn');

const currentComponent = computed(() => {
  if (currentTabName.value === 'FormSignIn') {
    return formSignIn;
  } else {
    return formSignUp;
  }
});

const onChangeTab = (tabName) => {
  currentTabName.value = tabName;
};
</script>

<template>
  <div class="enter-form">
    <nav class="enter-form__menu">
      <ul class="enter-form__list">
        <li class="enter-form__item"
            :class="{'enter-form__item_active-left': currentTabName === 'FormSignIn'}"
            @click="onChangeTab('FormSignIn')">
          Войти
        </li>
        <li class="enter-form__item"
            :class="{'enter-form__item_active-right': currentTabName === 'FormSignUp'}"
            @click="onChangeTab('FormSignUp')">
          Регистрация
        </li>
      </ul>
    </nav>
    <keep-alive>
      <transitions-fade>
        <component :is="currentComponent" />
      </transitions-fade>
    </keep-alive>
  </div>
</template>

<style lang="scss">
.enter-form {
    width: 424px;
    border-radius: 4px;
    border: 1px solid var(--gray-100, #E4E7E9);
    background: var(--gray-00, #FFF);
    /* Dropdown Shadow */
    box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.12);

  &__list {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  &__item {
    flex-grow: 1;
    flex-basis: 50%;
    padding: 16px 0;
    gap: 10px;

    text-align: center;
    color: var(--gray-500, #77878F);
    /* Body/XL/600 */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */

    &_active-left {
      box-shadow: 0px -3px 0px 0px #FA8232 inset, 0px 1px 0px 0px #E4E7E9 inset, 1px 0px 0px 0px #E4E7E9 inset;
    }

    &_active-right {
      box-shadow: 0px -3px 0px 0px #FA8232 inset, 0px 1px 0px 0px #E4E7E9 inset, -1px 0px 0px 0px #E4E7E9 inset;
    }

    &_active-left, &_active-right {
      color: var(--gray-900, #191C1F);
    }

    &:hover {
      background: var(--gray-50, #F2F4F5);
      color: var(--gray-900, #191C1F);

    }
  }
}
</style>