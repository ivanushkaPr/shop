<script setup>
const emits = defineEmits(['remove']);
</script>

<template>
<button @click="emits('remove')" class="button-remove">
	<icon-close class="button-remove__close-icon" />
</button>
</template>

<style lang="scss">
.button-remove {
	width: 24px;
	height: 24px;
	border-radius: 100px;
	border: 1px solid #929FA5;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;

	&__close-icon path{
		fill: #929FA5;
		stroke: #929FA5;
	}

	&:hover {
		border-color: #EE5858;
		& path{
			fill: #EE5858;
			stroke: #EE5858;
		}
	}

	&:active {
		border-color: #BE4646;
		& path{
			fill: #BE4646;
			stroke: #BE4646;
		}
	}
}
</style>