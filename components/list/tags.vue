<script setup>
defineProps({
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
	<div class="tags">
		<h4 class="tags__headline"> {{ headlineText }}</h4>
		<ul class="tags__list">
			<li v-for="tag in items" class="tags__tag" :key="tag.title">
				{{ tag.title }}
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.tags {
	&__headline {
		color: var(--gray-00, #FFF);
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
		text-transform: uppercase;
	}

	&__list {
		max-width: 320px;
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	&__tag {
		display: flex;
		padding: 6px 12px;
		justify-content: center;
		align-items: center;

		border-radius: 2px;
		border: 1px solid var(--gray-800, #303639);

		color: var(--gray-00, #FFF);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
		transition: border-color 0.3s ease-in, background-color 0.3s ease-in;

		&:hover {
			border-color: var(--gray-00, #FFF);
			background: var(--gray-800, #303639);
		}
	}
}
</style>