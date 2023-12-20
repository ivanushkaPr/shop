<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

const value = ref('');

const redirectToCatalog = () => {
	debugger;
	navigateTo('/catalog');
}
</script>

<template>
	<form @submit.prevent="redirectToCatalog" class="search-input">
		<label class="search-input__label">
			<input class="search-input__input"
						 type="text"
						 :placeholder="props.placeholder"
						 v-model="value" />
			<icon-search class="search-input__icon"/>
		</label>
	</form>
</template>

<style lang="scss">
.search-input {
	&__label {
		display: flex;
		align-items: center;
		width: 606px;
		padding: 14px 20px;
		border-radius: 2px;background: var(--gray-00, #FFF);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
	}

  &__input {
    width: 100%;
    border: none;
    color: var(--gray-900, #191C1F);

    &::placeholder {
      color: var(--gray-500, #77878F);
    }

    &:focus {
      border: none;
      outline: none;
    }

  }

}
</style>
