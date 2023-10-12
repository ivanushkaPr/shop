<script setup>

import ActionButton from "~/components/base/action-button.vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="banner-small">
    <img class="banner-small__image" :src="props.url" alt="dr dre album name"/>
    <p class="banner-small__discount"> {{ props.discount }}% скидка </p>
    <p class="banner-small__description"> {{ props.description }} </p>
    <p class="banner-small__price">
      Начальная цена: <span class="banner-small__sticker"> {{ props.price }} </span>
    </p>
    <action-button text="Купить" />
  </div>
</template>

<style lang="scss">
.banner-small {
  display: flex;
  padding: 32px;
  min-width: 312px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //gap: 24px;
  border-radius: 4px;
  background: var(--warning-200, #F7E99E);


  &__image {
    width: 80px;
    height: 80px;
  }

  &__discount {
    color: var(--gray-900, #191C1F);
    font-size: 28px;
    font-weight: 600;
    line-height: 32px;
    margin-top: 12px;
    margin-bottom: 8px;
  }

  &__description{
    color: var(--gray-700, #475156);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-bottom: 16px;
  }

  &__price {
    margin-bottom: 24px;
    color: var(--gray-700, #475156);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  &__sticker {
    display: inline-block;
    padding: 6px 12px;
    align-items: flex-start;
    border-radius: 3px;
    background: var(--gray-00, #FFF);
  }
}
</style>