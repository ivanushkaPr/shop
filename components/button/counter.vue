<script setup>
const props = defineProps({
	amount: {
		type: Number,
		required: false,
		default: 1,
	},
	sizeMd: {
		type: Boolean,
		required: false,
		default: false,
},
});


const counter = ref(props.amount);

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
		<button class="button-counter__button"
						:class="sizeMd && '_size-md'"
						@click="onRemove"
		>
			<icon-remove />
		</button>
		<p class="button-counter__counter"
			 :class="sizeMd && '_size-md'"
		>
			{{ counter }}
		</p>
		<button class="button-counter__button"
						:class="sizeMd && '_size-md'"
						@click="onAdd"
		>
			<icon-add />
		</button>
	</div>
</template>
<style lang="scss">
.button-counter {
	border-radius: 3px;
	border: 2px solid var(--Gray-100, #E4E7E9);
	background: var(--Gray-00, #FFF);
	display: inline-flex;

	&__button {
		width: 56px;
		height: 56px;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		cursor: pointer;

		&._size-md {
			width: 48px;
			height: 48px;
		}
	}

	&__counter {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 56px;
		height: 56px;

		color: $gray-700;
		@include font(16px, 24px, 400);

		&._size-md {
			width: 48px;
			height: 48px;
		}
	}
}
</style>