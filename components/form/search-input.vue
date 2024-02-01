<script setup>
import {useSearchStore} from "~/stores/search.js";

const {searchClient} = await useMeliSearch();
import {AisInstantSearch, AisConfigure} from 'vue-instantsearch/vue3/es';

const { setSearchQuery } = useSearchStore();


const props = defineProps({
	placeholder: {
		type: String,
		required: true,
	},
});

const value = ref('');

const redirectToCatalog = () => {
	navigateTo('/catalog');
}
</script>

<template>
	<form @submit.prevent="redirectToCatalog" class="search-input">
		<ais-instant-search
			:search-client="searchClient"
			index-name="products"
		>
			<ais-configure
				:hits-per-page="1"
				:distinct="true"
				:analytics="true"
				:query="'gaybuttsex'"
			/>
			<ais-autocomplete>
				<template v-slot="{ currentRefinement, indices, refine }">
					<label class="search-input__label">
						<input class="search-input__input"
									 type="text"
									 :placeholder="props.placeholder"
									 :value="currentRefinement"
									 @input="($event) => {
										 	setSearchQuery($event.currentTarget.value);
										  refine($event.currentTarget.value)
									 }"/>
						<icon-search class="search-input__icon"/>
					</label>
					<div class="search-input__results" v-if="currentRefinement" v-for="index in indices" :key="index.indexId">
						<ul>
							<li v-for="hit in index.hits" :key="hit.objectID">
								<ais-highlight attribute="title" :hit="hit"/>
								<button
									type="button"
									@click="index.sendEvent('click', hit, 'Item Added')"
								>
									Add to cart
								</button>
							</li>
						</ul>
					</div>
				</template>
			</ais-autocomplete>
		</ais-instant-search>
	</form>
</template>

<style lang="scss">
.search-input {
	position: relative;

	&__label {
		display: flex;
		align-items: center;
		width: 606px;
		padding: 14px 20px;
		border-radius: 2px;
		background: var(--gray-00, #FFF);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
	}

	&__input {
		width: 100%;
		border: none;
		color: var(--gray-900, #191C1F);

		&::placeholder {
			color: var(--gray-500, #77878F);
		}

		&:focus {
			border: none;
			outline: none;
		}

	}

	&__results {
		position: absolute;
		width: 100%;
		height: auto;
		background-color: white;
		border-radius: 5px;
		box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.40);

	}
}
</style>
