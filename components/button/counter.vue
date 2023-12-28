<script setup>
const props = defineProps({
	amount: {
		type: Number,
		required: false,
		default: 0,
	},
	sizeMd: {
		type: Boolean,
		required: false,
		default: false,
},
});

const emits = defineEmits(['add', 'remove']);

const onAdd = () => {
	emits('add');
};
const onRemove = () => {
	if (props.amount >= 1) {
		emits('remove');
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
			{{ amount }}
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