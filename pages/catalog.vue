<script setup>
const getCardProps = (product) => {
	return {
		src: product.thumbnail,
		artist: product.subtitle,
		album: product.title,
		price: product.variants[0]?.prices[0].amount || 0,
		currency: product.variants[0]?.prices[0].currency_code || 0,
		id: product.id,
		variantId: product.variants[0]?.id,
	}
}

import {instantMeiliSearch} from '@meilisearch/instant-meilisearch';
import "instantsearch.css/themes/algolia-min.css";

const {searchClient, setMeiliSearchParams} = instantMeiliSearch(
	'https://ms-11c061b5ac53-7457.lon.meilisearch.io', // Host
	'eceb480b62e62ae0db6ab5086f75d6448e1240b2bb874eda174c9800512480d5' // API key
)
import {AisInstantSearch, AisSearchBox, AisHits} from 'vue-instantsearch/vue3/es';

</script>

<template>
	<ais-instant-search
		:search-client="searchClient"
		index-name="products"
		class="catalog"
	>
		<div>
<!--			<ais-range-input-->
<!--				attribute="price"-->

<!--			/>-->

			<ais-refinement-list searchable attribute="title">
				<template
					v-slot="{
						items,
						isFromSearch,
						refine,
						searchForItems,
					}"
				>
					<input-search class="catalog__search" @update:modelValue="searchForItems"/>
					<ul class="catalog__list">
						<li v-if="isFromSearch && !items.length">No results.</li>
						<li class="catalog__list-item" v-for="item in items" :key="item.value">
							<input-checkbox :modelValue="item.isRefined" @update:modelValue="refine(item.value)">
								{{ item.value }}
							</input-checkbox>
						</li>
					</ul>
				</template>
			</ais-refinement-list>
			<ais-refinement-list searchable attribute="album">
				<template
					v-slot="{
						items,
						isFromSearch,
						refine,
						searchForItems,
					}"
				>
					<input-search class="catalog__search" @update:modelValue="searchForItems"/>
					<ul class="catalog__list">
						<li v-if="isFromSearch && !items.length">No results.</li>
						<li class="catalog__list-item" v-for="item in items" :key="item.value">
							<input-checkbox :modelValue="item.isRefined" @update:modelValue="refine(item.value)">
								{{ item.value }}
							</input-checkbox>
						</li>
					</ul>
				</template>
			</ais-refinement-list>
			<ais-refinement-list searchable attribute="brand">
				<template
					v-slot="{
						items,
						isFromSearch,
						refine,
						searchForItems,
					}"
				>
					<input-search class="catalog__search" @update:modelValue="searchForItems"/>
					<ul class="catalog__list">
						<li v-if="isFromSearch && !items.length">No results.</li>
						<li class="catalog__list-item" v-for="item in items" :key="item.value">
							<input-checkbox :modelValue="item.isRefined" @update:modelValue="refine(item.value)">
								{{ item.value }}
							</input-checkbox>
						</li>
					</ul>
				</template>
			</ais-refinement-list>
			<ais-refinement-list searchable attribute="label">
				<template
					v-slot="{
						items,
						isFromSearch,
						refine,
						searchForItems,
					}"
				>
					<input-search class="catalog__search" @update:modelValue="searchForItems"/>
					<ul class="catalog__list">
						<li v-if="isFromSearch && !items.length">No results.</li>
						<li class="catalog__list-item" v-for="item in items" :key="item.value">
							<input-checkbox :modelValue="item.isRefined" @update:modelValue="refine(item.value)">
								{{ item.value }}
							</input-checkbox>
						</li>
					</ul>
				</template>
			</ais-refinement-list>
			<ais-refinement-list searchable attribute="genre">
				<template
					v-slot="{
						items,
						isFromSearch,
						refine,
						searchForItems,
					}"
				>
					<input-search class="catalog__search" @update:modelValue="searchForItems"/>
					<ul class="catalog__list">
						<li v-if="isFromSearch && !items.length">No results.</li>
						<li class="catalog__list-item" v-for="item in items" :key="item.value">
							<input-checkbox :modelValue="item.isRefined" @update:modelValue="refine(item.value)">
								{{ item.value }}
							</input-checkbox>
						</li>
					</ul>
				</template>
			</ais-refinement-list>
		</div>


		<div>
			<ais-search-box>
				<template v-slot="{ currentRefinement, isSearchStalled, refine }">
					<input-search :modelValue="currentRefinement"
												@update:model-value="refine"/>
					<span :hidden="!isSearchStalled">Loading...</span>
				</template>
			</ais-search-box>
			<ais-hits>
				<template v-slot="{ items }">
					<transitions-list tagName="div" class="catalog__search-result">
						<card-rich v-for="(item) in items"
											 :key="item.id"
											 @click="navigateTo(`/product-detail/${item.id}`)"
											 v-bind="getCardProps(item)"
						/>
					</transitions-list>
				</template>
			</ais-hits>
		</div>
	</ais-instant-search>
</template>

<style lang="scss">
.catalog {
	display: flex;
	gap: 24px;
	margin: 40px 0 72px;
	padding: 0 300px;
	box-sizing: content-box;
	max-width: 1560px;

	&__filters {
		min-width: 312px;
	}

	&__search-result {
		margin-top: 16px;
		margin-bottom: 40px;
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
	}

	&__link {
		text-decoration: none;
		all: unset;
	}

	&__search {
		margin-bottom: 8px;
	}

	&__list {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	&__list-item {
		margin-bottom: 8px;
	}
}
</style>