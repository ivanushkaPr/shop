<script setup>
import ChevronDownBold from "~/components/icon/ChevronDownBold.vue";

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const isOpened = ref(false);

const toggleMenuVisibility = () => {
  isOpened.value = !isOpened.value;
}
</script>


<template>
<div class="categories-menu">
  <button class="categories-menu__button"
          :class="{'_menu-opened': isOpened}"
          @click="toggleMenuVisibility"
  >
    Все товары
    <chevron-down-bold class="categories-menu__icon" :class="{
      '_rotate_180deg': isOpened,
      '_color_white': isOpened
    }"/>
  </button>
  <transition name="fade">
    <ul v-if="isOpened" class="categories-menu__list">
      <li v-for="item in menuItems" class="categories-menu__item">
        {{ item }}
        <icon-chevron-right-bold class="categories-menu__item-icon"/>
      </li>
    </ul>
  </transition>
</div>
</template>

<style lang="scss">
  .categories-menu {
    position: relative;
    &__button {
      display: flex;
      padding: 14px 24px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 2px;
      background: var(--gray-50, #F2F4F5);

      color: var(--gray-900, #191C1F);
      font-weight: 500;
      border: none;

      transition-property: all;
      transition-duration: 0.3s;
      &._menu-opened {
        background: var(--primary-500, #FA8232);
        color: var(--gray-00, #FFF);
      }
    }

    &__icon {
      stroke: #191C1F;
      transition-property: all;
      transition-duration: 0.3s;
    &._rotate_180deg {
      transform: rotate(-180deg);
    }
    &._color_white {
      stroke: white;
    }
    }

    &__list {
      position: absolute;
      top: 60px;
      width: 240px;
      padding: 12px 0px;
      border-radius: 3px;
      border: 1px solid var(--gray-100, #E4E7E9);
      background: var(--gray-00, #FFF);
      box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);
      list-style-type: none;
      margin: 0px;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      color: var(--gray-600, #5F6C72);

      &:hover {
        background: var(--gray-50, #F2F4F5);
      }
      &:hover > .categories-menu__item-icon   {
        display: block;
      }
    }
    &__item-icon {
      display: none;
    }
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>