<script setup>
const props = defineProps({
	modelValue: {},
	id: {},
	name: {},
});

const emit = defineEmits(['update:modelValue']);

const onChangeHandler = (event) => {
	emit('update:modelValue',  event.target.checked);
};

</script>

<template>
  <label class="checkbox">
    <input class="checkbox__input"
					 @change="onChangeHandler"
					 :checked="modelValue"
					 type="checkbox"/>
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

		&:hover {
			& .checkbox__custom {
				border-color: $primary-500;
			}

			& .checkbox__text * {
				color: $primary-500;
			}
		}


    &__input {
      display: none;
      &:checked ~ .checkbox__custom {
        background-color: $primary-500;
				border-color: $primary-500;
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
      border: 1px solid $gray-200;
      background: $gray-00;
    }

    &__text {
      color: var(--gray-700, #475156);
			@include font(14px, 20px, 400);
    }
  }
</style>