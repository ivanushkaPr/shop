<script setup>
const props = defineProps({
  legend: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
  },
  linkText: {
    type: String,
    required: false,
  },
});

const inputValue = ref('');
const encryptedValue = ref('');

const updateValue = (value) => {
  if (value.length > inputValue.value.length) {
    const lastChar = value.slice(value.length - 1, value.length);
    inputValue.value += lastChar;
    encryptedValue.value += "*";
  } else {
    inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
    encryptedValue.value = encryptedValue.value.slice(0, encryptedValue.value.length - 1);
  }
}
const isValueShown = ref(false);
const changeValueVisibility = () => {
  isValueShown.value = !isValueShown.value;
}

const shownValue = computed(() => {
  if (isValueShown.value) {
    return inputValue.value;
  } else {
    return encryptedValue.value;
  }
});
</script>

<template>
  <base-label class="input-hidden">
    <div class="input-hidden__header">
      <base-legend class="input-hidden__legend"
                   :legend="props.legend"/>
      <base-link v-if="href" :href="props.href" :text="props.linkText"/>
    </div>
    <div class="input-hidden__controller">
      <base-input @input="updateValue" :value="shownValue" class="input-hidden__input"/>
      <icon-eye @click="changeValueVisibility" class="input-hidden__icon"/>
    </div>
  </base-label>
</template>

<style lang="scss">
.input-hidden {
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &__controller {
    display: flex;
    position: relative;
  }

  &__input {
    flex-basis: 100%;
  }

  &__icon {
    position: absolute;
    top: 12px;
    right: 12px;
  }
}
</style>