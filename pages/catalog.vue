<script setup>

import {useSearchStore} from "~/stores/search.js";

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

const {searchClient, setMeiliSearchParams} = await useMeliSearch();
import {AisInstantSearch, AisSearchBox, AisHits, AisConfigure} from 'vue-instantsearch/vue3/es';

function formatMinValue(minValue, minRange) {
	return minValue !== null && minValue !== minRange ? minValue : '';
}

function formatMaxValue(maxValue, maxRange) {
	return maxValue !== null && maxValue !== maxRange ? maxValue : '';
}

function toValue(value, range) {
	debugger;
	return [
		typeof value.min === "number" ? value.min : range.min,
		typeof value.max === "number" ? value.max : range.max,
	];
}


const {searchQuery} = useSearchStore();
const query = ref(searchQuery.value);

</script>

<template>
	<ais-instant-search
		:search-client="searchClient"
		index-name="products"
		class="catalog"
	>
		<ais-configure
			:hits-per-page="1"
			:distinct="true"
			:analytics="true"
		/>
		<div>
			<ais-range-input attribute="price">
				<template
					v-slot="{
        currentRefinement,
        range,
        canRefine,
        refine,
        sendEvent,
      }"
				>

					<input
						type="number"
						:min="range.min"
						:max="range.max"
						:placeholder="range.min"
						:disabled="!canRefine"
						:value="formatMinValue(currentRefinement.min, range.min)"
						@input="refine({
          min:$event.currentTarget.value,
          max: formatMaxValue(currentRefinement.max, range.max),
        })">

					<input
						type="number"
						:min="range.min"
						:max="range.max"
						:placeholder="range.max"
						:disabled="!canRefine"
						:value="formatMaxValue(currentRefinement.max,range.max)"
						@input="refine({
          min:formatMinValue(currentRefinement.min, range.min),
          max: $event.currentTarget.value,
        })">
					<v-range-slider
						:min="range.min"
						:max="range.max"
						:model-value="toValue(currentRefinement, range)"
						@end="refine({ min: $event[0], max: $event[1] })"
						step="1"
						thumb-label
					/>
				</template>
			</ais-range-input>

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


		<div class="catalog__results">
			<ais-search-box v-model="searchQuery">
				<template v-slot="{ currentRefinement, isSearchStalled, refine }">
					<input-search :modelValue="searchQuery"
												@update:model-value="refine"/>
					<span :hidden="!isSearchStalled">Loading...</span>
				</template>
			</ais-search-box>

			<div class="catalog__stats">
				<ais-current-refinements>
					<template v-slot="{ items, createURL }">

						<p class="catalog__stats-label">Активные фильтры: </p>
								<ul class="catalog__active-filters" v-for="item in items" :key="item.attribute">
									<li class="catalog__active-filter"
										v-for="refinement in item.refinements"
										:key="[
											refinement.attribute,
											refinement.type,
											refinement.value,
											refinement.operator
										].join(':')">
										<a
											class="catalog__active-filter-label"
											:href="createURL(refinement)"
											@click.prevent="item.refine(refinement)"
										>
											{{ refinement.label }} <icon-close-sm />
										</a>
									</li>
								</ul>
					</template>
				</ais-current-refinements>

				<ais-stats>
					<template v-slot="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">

						<p class="catalog__results-amount"> {{ nbHits }} <span class="catalog__results-label"> результата </span></p>
<!--						Page {{ page + 1 }} of {{ nbPages }} with {{ hitsPerPage }} hits per page - -->
<!--						{{ nbHits }} hits retrieved in {{ processingTimeMS }}ms for <q>{{ query }}</q>-->
					</template>
				</ais-stats>
			</div>

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

	&__results {
		width: 100%;
	}

	&__stats {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 16px;
		padding: 12px 24px;
		border-radius: 4px;
		/* Gray/50 */
		background: rgb(242, 244, 245);

		& > * {
			margin-top: 0;
		}
	}

	&__stats-label {
		/* Body/Small/400 */
		color: rgb(95, 108, 114);
		@include font(14px, 20px, 400);
	}

	&__active-filters {
		display: flex;
		align-items: center;
		gap: 16px;
		list-style-type: none;
		padding: 0;
		margin: 0 0 0 16px;
	}

	&__active-filter {
		margin-right: 8px;
	}

	&__active-filter-label {
		text-decoration: none;
		color: rgb(25, 28, 31);
		@include font(14px, 20px, 400);
	}


	&__results-amount {
		text-decoration: none;
		color: #191C1F;
		@include font(14px, 20px, 400);
	}

	&__results-label {
		text-decoration: none;
		color: rgb(95, 108, 114);
		@include font(14px, 20px, 400);
	}
}
</style>