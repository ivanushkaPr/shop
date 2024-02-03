<script setup>
import {useSearchStore} from "~/stores/search.js";

const {searchClient} = await useMeliSearch();
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
						<ul class="search-input__index-list">
							<li class="search-input__index-item" v-for="hit in index.hits" :key="hit.objectID">
								<div class="search-input__product">
									<img class="search-input__thumbnail" :src="hit.thumbnail" :alt="hit.title"/>
									<div class="search-input__data-wrapper">
										<ais-highlight attribute="title" :hit="hit"/>
										{{ hit.description }}
									</div>
								</div>
								<p class="search-input__price"> {{ hit.price }} </p>
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
		z-index: 10;
		position: absolute;
		padding: 16px;
		width: 100%;
		height: auto;
		background-color: white;
		border-radius: 5px;
		box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.40);
	}

	&__index-list {
		list-style-type: none;
		display: flex;
		gap: 16px;
		flex-direction: column;
	}

	&__index-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		//gap: 20px;
	}

	&__product {
		display: flex;
		gap: 20px;
		align-items: center;
	}

	&__thumbnail {
		width: 70px;
		height: 70px;
	}

	&__data-wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}


	&__price {
		color: var(--secondary-500, #2DA5F3);
		@include font(16px, 24px, 600);
	}
}
</style>
