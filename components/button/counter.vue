<script setup>
const counter = ref(1);

const onAdd = () => {
	counter.value = counter.value + 1;
};
const onRemove = () => {
	if (counter.value >= 2) {
		counter.value = counter.value - 1;
	}
};
</script>

<template>
	<div class="button-counter">
		<button class="button-counter__button" @click="onRemove"> <icon-remove /> </button>
		<p class="button-counter__counter"> {{ counter }} </p>
		<button class="button-counter__button" @click="onAdd"> <icon-add /> </button>
	</div>
</template>
<style lang="scss">
.button-counter {
	border-radius: 3px;
	border: 2px solid var(--Gray-100, #E4E7E9);
	background: var(--Gray-00, #FFF);
	display: flex;

	&__button {
		width: 56px;
		height: 56px;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		cursor: pointer;
	}

	&__counter {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 56px;
		height: 56px;

		color: $gray-700;
		@include font(16px, 24px, 400);
	}
}
</style>