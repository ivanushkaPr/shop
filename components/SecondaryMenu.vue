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
  gap: 24px;
  list-style-type: none;

  &__item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
</style>