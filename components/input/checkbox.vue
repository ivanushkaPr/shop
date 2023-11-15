<script setup>
</script>

<template>
  <label class="checkbox">
    <input class="checkbox__input" type="checkbox"/>
    <div class="checkbox__custom"/>
    <p class="checkbox__text">
      <slot/>
    </p>
  </label>
</template>

<style lang="scss">
  .checkbox {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    &__input {
      display: none;

      &:checked ~ .checkbox__custom {
        background-color: var(--primary-500, #FA8232);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M11.8125 3.9375L5.6875 10.0625L2.625 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    &__custom {
      width: 20px;
      height: 20px;
      flex-shrink: 0;

      border-radius: 2px;
      border: 1px solid var(--gray-200, #C9CFD2);
      background: var(--gray-00, #FFF);

      &:hover {
        border-color: var(--primary-500, #FA8232);
      }
    }

    &__text {
      color: var(--gray-700, #475156);
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
  }
</style>