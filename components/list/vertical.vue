 <script setup>
const props = defineProps({
	headlineText: {
		type: String,
		required: true,
	},
	items: {
		type: Array,
		required: true,
	},
});
</script>


<template>
	<div class="list-vertical">
		<h4 class="list-vertical__headline">
			{{ headlineText }}
		</h4>
		<ul class="list-vertical__menu">
			<li v-for="item in props.items" class="list-vertical__item">
				<NuxtLink :to="item.url">
					{{ item.title }}
				</NuxtLink>
			</li>
		</ul>
		<slot/>
</div>
</template>

<style lang="scss">
.list-vertical {
	min-width: 200px;
	&__headline {
		color: var(--gray-00, #FFF);
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 150% */
		text-transform: uppercase;
	}

	&__menu {
		overflow: hidden;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	&__item {
		position: relative;
		left: -8px;
		//margin-left: -8px;
		display: flex;
		align-items: center;
		gap: 8px;

		padding: 6px 0;

		color: var(--gray-400, #929FA5);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px; /* 142.857% */

		&::before {
			content: '';
			height: 0;
			width: 0;
			transition: all 0.3s ease-in;
		}

		&:hover {
			color: #FFF;
			transition: all 0.3s ease-in;
			left: 0;
			&::before {
				content: '';
				height: 1px;
				width: 24px;
				background-color: #EBC80C;
			}
		}


	}
}
</style>