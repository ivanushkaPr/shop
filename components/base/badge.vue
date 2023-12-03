<script setup>
const props = defineProps({
	text: {
		type: String,
		required: false,
		default: '',
	},
	type: {
		type: String,
		required: false,
		default: '',
		validator(value) {
			return ['hot', 'discount', 'sale', 'best', 'sold'].indexOf(value) !== -1;
		},
	},
})

const getBadgeClass = computed(() => {
	let badgeClass = null;
	switch (props.type) {
		case('hot'): {
			badgeClass = '_hot';
			break;
		}
		case('discount'): {
			badgeClass = '_discount';
			break;
		}
		case('sale'): {
			badgeClass = '_sale';
			break;
		}
		case('best'): {
			badgeClass = '_best';
			break;
		}
		default: {
			badgeClass = '_sold';
			break;
		}
	}
	return badgeClass;
});

const getBadgeText = computed(() => {
	let badgeText = null;
	switch (props.type) {
		case('hot'): {
			badgeText  = 'hot';
			break;
		}
		case('discount'): {
			badgeText  = 'off';
			break;
		}
		case('sale'): {
			badgeText = 'sale';
			break;
		}
		case('best'): {
			badgeText = 'best deals';
			break;
		}
		default: {
			badgeText = 'sold out';
			break;
		}
	}
	return  badgeText;
});
</script>

<template>
	<span :class="['base-badge', getBadgeClass]" v-if="!text">
		{{ getBadgeText }}
	</span>
	<span :class="['base-badge', getBadgeClass]" v-else>
		{{ text }}
	</span>
</template>

<style lang="scss">
.base-badge {
	padding: 5px 10px;
	border-radius: 2px;
	color: #FFF;
	text-transform: uppercase;
	display: inline-block;

	@include font(12px, 16px, 600);
	&._hot {
		background: var(--danger-500, #EE5858);
	}
	&._discount {
		color: #141414;
		background: var(--warning-400, #EFD33D);
	}
	&._sale {
		background: var(--success-500, #2DB224);
	}
	&._best {
		background: var(--secondary-500, #2DA5F3);
	}
	&._sold {
		background: var(--gray-400, #929FA5);
	}
}

</style>