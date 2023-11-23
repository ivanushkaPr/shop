<script setup>
</script>

<template>
<section class="banner-slider">
  <div class="banner-slider__content">
    <p class="banner-slider__caption"> <span class="banner-slider__line"></span> Заряд бодрости и настроения </p>
    <h3 class="banner-slider__name"> Manowar</h3>
    <p class="banner-slider__description"> Найдите в себе силы идти вперед и  совершать подвиги под музыку легендарной группы Manowar.</p>
    <base-action-button class="banner-slider__button banner-slider__button_size_sm"  text="купить"/>
  </div>
  <div class="banner-slider__product">
    <span class="banner-slider__price"> 700 ₽ </span>
    <img class="banner-slider__image" src="/images/manowar/final-battle.png" />
  </div>
</section>
</template>

<style lang="scss">
.banner-slider {
  display: flex;
  gap: 36px;
  box-sizing: border-box;
  max-width: 872px;
  padding: 56px;
  border-radius: 6px;
  background: var(--gray-50, #F2F4F5);

  &__content {
    margin-top: 72px;
  }

  &__caption {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    color: var(--secondary-600, #2484C2);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }

  &__line {
    display: inline-block;
    width: 24px;
    height: 2px;
    background: #2DA5F3;
  }

  &__name {
    margin-bottom: 16px;
    color: var(--gray-900, #191C1F);
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px; /* 116.667% */
  }

  &__description {
    max-width: 356px;
    margin-bottom: 24px;
    color: var(--gray-700, #475156);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }

  &__button {
    margin-bottom: 78px;

    &_size_sm {
      padding: 16px 32px;
      width: auto;
    }
  }

  &__product {
    position: relative;
    overflow: hidden;
  }

  &__price {
    position: absolute;
    right: -4px;
    top: -4px;

    display: flex;
    width: 103px;
    height: 100px;
    justify-content: center;
    align-items: flex-start;

    border-radius: 100px;
    border: 4px solid var(--gray-00, #FFF);
    background: var(--secondary-500, #2DA5F3);

    color: var(--gray-00, #FFF);
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 100px; /* 454.545% */
  }
}
</style>