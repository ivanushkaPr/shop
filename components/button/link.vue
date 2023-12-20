<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	href: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: false,
		default: '#EBC80C',
	},
	colorHover: {
		type: String,
		required: false,
		default: '#BCA00A',
	},
	isOrange: {
		type: Boolean,
		required: false,
		default: false,
	},
	isGolden: {
		type: Boolean,
		required: false,
		default: false,
	},
	isBlue: {
		type: Boolean,
		required: false,
		default: false,
	},
});


const getColor =  computed(() => {
	let color = null;
	if (props.isOrange) {
		color = '#FA8232';
	} else if (props.isGolden) {
		color = '#EBC80C';
	} else if (props.isBlue) {
		color = '#2DA5F3';
	}
	return color;
});
const getHoverColor = computed(() => {
	let hoverColor = null;
	if (props.isOrange) {
		hoverColor = '#DE732D'
	} else if (props.isGolden) {
		hoverColor = '#BCA00A';
	} else if (props.isBlue) {
		hoverColor = '#2484C2';
	}
	return hoverColor;
});

</script>

<template>
	<NuxtLink class="button-link" :to="href" :style="{
		'--color': getColor,
		'--color-hover': getHoverColor,
	}">
		<span> <slot/> </span>
		<icon-button-link-arrow />
	</NuxtLink>
</template>

<style lang="scss">
	.button-link {
		padding: 6px 0;
		display: flex;
		gap: 8px;
		text-decoration: none ;

		color: var(--color);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
		border-bottom: 1px solid transparent;


		transition: color 0.3s ease-in, border-color 0.3s ease-in;
		& span {
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 20px; /* 142.857% */
		}

		& svg {
				& path {
					transition: all 0.3s ease-in;
					stroke: var(--color);
				}
		}

		&:hover {
			color: var(--color-hover);
			border-bottom: 1px solid var(--color-hover);

			& svg {
				path {
					stroke: var(--color-hover);
				}
			}
		}
	}
</style>