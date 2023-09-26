<script setup>
const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  alignSide: {
    required: false,
    default: 'left',
    validator(value) {
      return ['left', 'right'].indexOf(value) !== -1;
    },
  },
});


let selectedOptionIndex = ref(props.options.selectedItemIndex);
const onChangeSelectedOption = (index) => {
  selectedOptionIndex.value = index;
}
const abbr = computed(() => {
  return props.options.items[selectedOptionIndex.value].abbr;
})

let isOpened = ref(false);
const onToggleDropdownMenu = () => {
  isOpened.value = !isOpened.value;
}

const isSelected = (itemIndex) => {
  debugger;
  return itemIndex === selectedOptionIndex.value;
}

const onClickOutside = (event) => {
  isOpened.value = false;
}

</script>

<template>
  <div class="dropdown"
       v-click-outside="onClickOutside"
  >
    <div class="dropdown__value" @click="onToggleDropdownMenu">
      <button class="dropdown__button">
        {{ abbr }}
      </button>
      <icon-chevron-down :class="[
          'dropdown__icon',
          {'dropdown__icon_rotate-90-deg': isOpened}
          ]"/>
    </div>
    <ul v-if="isOpened"
        class="dropdown__menu"
        :style="{
          [alignSide]: 0,
        }">
      <li v-for="(option, index) in options.items"
          @click="onChangeSelectedOption(index)"
          :class="[
              'dropdown__item',
              {'_selected': isSelected(index)}
          ]">
        <div class="dropdown__item-content" >
          <img v-if="option.url" :src="option.url" alt="option.text">
          {{ option.text }}
        </div>
        <div>
          <icon-checkmark v-if="isSelected(index)"/>
        </div>
      </li>
    </ul>
  </div>
 </template>

<style lang="scss">
.dropdown {
  position: relative;
  &__value {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__button {
    cursor: pointer;
    color: $gray-00;
    background-color: transparent;
    border: none;
  }

  &__icon {
    transition-duration: 0.3s;
    transition-property: all;
    &_rotate-90-deg {
      transition-duration: 0.3s;
      transition-property: all;
      transform: rotate(-180deg);
    }
  }

  &__menu {
    position: absolute;
    top: 28px;
    padding: 8px 0;
    border-radius: 3px;
    border: 1px solid $gray-100;
    background: $gray-00;
    box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.12);
    list-style-type: none;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 48px;
    min-height: 38px;
    box-sizing: border-box;
    padding: 8px 16px;
    color: $gray-600;

    &._selected {
      color: $primary-500;
    }
  }

  &__item-content {
    width: 90px;
    display: flex;
    gap: 12px;
  }

}
</style>