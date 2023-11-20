<template>
  <ul class="secondary-menu">
    <li class="secondary-menu__item">
      <icon-map/>
      Статус доставки
    </li>
    <li class="secondary-menu__item">
      <icon-compare/>
      Сравнить
    </li>
    <li class="secondary-menu__item">
      <icon-headphones/>
      Поддержка
    </li>
    <li class="secondary-menu__item">
      <icon-help/>
      Помощь
    </li>
  </ul>
</template>

<style lang="scss">
.secondary-menu {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  //gap: 24px;
  list-style-type: none;
  color: var(--gray-600, #5F6C72);

  &__item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 14px 12px;
    max-height: 48px;
    box-sizing: border-box;

    &:hover {
      color: var(--gray-900, #191C1F);
      background: var(--gray-50, #F2F4F5);

      & svg path {
        stroke: var(--gray-900, #191C1F);
      }
    }

    &:active {
      color: var(--gray-00, #FFF);
      background: var(--primary-500, #FA8232);

      & svg path {
        stroke: var(--gray-00, #FFF);
      }
    }
  }
}
</style>