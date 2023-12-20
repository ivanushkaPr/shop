<script setup>
const props = defineProps({
	caption: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		required: false,
		default: '',
	},
	items: {
		type: Array,
		required: true,
	},
	modelValue: {
		type: Array,
		required: true,
	}
});

const query = ref('');
const state = ref(props.modelValue);

const filteredItems = computed(() => {
	return props.items.filter((item) => {
		const name = item.name.toLowerCase();
		const queryStr = query.value.toLowerCase();
		return name.includes(queryStr);
	})
});

</script>

<template>
	<div class="list-filter">
		<p class="list-filter__caption">{{ caption }}</p>
		<input-search class="list-filter__input" v-model:model-value="query"/>
		<transitions-list class="list-filter__list">
			<li class="list-filter__item" v-for="(item, index) in filteredItems" :key="index">
				<input-checkbox v-model="state">
					<span class="list-filter__item"> {{ item.name }} </span>
				</input-checkbox>
			</li>
		</transitions-list>
	</div>
</template>

<style lang="scss">

.list-filter {
	margin-bottom: 24px;

	&__caption {
		color: $gray-900;
		@include font(16px, 24px, 600);
		text-transform: uppercase;
		margin-bottom: 16px;
	}

	&__label {
		display: flex;
		align-items: center;
		position: relative;
		margin-bottom: 16px;
		padding: 12px 16px;
		border: 1px solid #E4E7E9;
	}

	&__input {
		margin-bottom: 16px;
	}

	&__icon {
		width: 16px;
		height: 16px;
		//top: 0;
		right: 0;
		//position: absolute;
	}	

	&__list {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	&__item {
		display: flex;
		gap: 8px;
		color: $gray-900;
		@include font(16px, 24px, 500);
		margin-bottom: 8px;
	}
}

</style>