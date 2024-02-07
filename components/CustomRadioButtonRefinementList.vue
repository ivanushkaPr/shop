<template>
	<div>
		<slot name="header"></slot>
		<div v-for="item in items" :key="item.value">
			<input
				type="radio"
				:id="`${item.value}-${item.label}`"
				:value="item.value"
				:checked="item.isRefined"
				@change="refine(item.value)"
			/>
			<label :for="`${item.value}-${item.label}`">{{ item.label }}</label>
		</div>
	</div>
</template>

<script>
import { connectRefinementList } from 'instantsearch.js/es/connectors';

export default connectRefinementList({
	props: ['items'],
	methods: {
		refine(value) {
			this.$emit('refine', value);
		},
	},
});
</script>