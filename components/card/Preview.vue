<script setup>
defineProps({
	src: {
		type: String,
		required: true,
	},
})
</script>


<template>
	<div class="card-preview" :style="{backgroundImage: `url(${src})`}">
	</div>
</template>

<style lang="scss">

.card-preview {
	box-sizing: border-box;
	width: 96px;
	height: 96px;
	border-radius: 2px;
	border: 1px solid $gray-100;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;

	background-size: 84px 84px;
	border-radius: 2px;
	border: 1px solid var(--Gray-100, #E4E7E9);

	&._active {
		border: 2px solid $primary-500;
	}
}
</style>
