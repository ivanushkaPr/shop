<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
    required: false,
    default: null,
  },
  price: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li
      class="card-small"
  >
    <img width="80" height="80" :src="props.url" :alt="props.title"/>
    <div class="card-small__description">
      <p class="card-small__singer">
        {{ props.artist }}
      </p>
      <p class="card-small__title">
        {{ props.title }}
      </p>
      <p class="card-small__price">
              <span v-if="props.oldPrice"
                    class="card-small__old-price"
              >
                {{ props.oldPrice}}
              </span>
        {{ props.price }}
      </p>
    </div>
  </li>
</template>

<style lang="scss">
.card-small {
  min-width: 312px;
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 3px;
  border: 1px solid var(--gray-100, #E4E7E9);
  background: var(--gray-00, #FFF);
  &__singer, &__title {
    color: var(--gray-900, #191C1F);
  }

  &__price {
    margin-top: 8px;
    color: var(--secondary-500, #2DA5F3);
  }

  &__old-price {
    color: var(--gray-400, #929FA5);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    text-decoration: line-through;
  }
}

</style>