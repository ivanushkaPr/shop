<script setup>
const query = ref('');
const { setCategories, setParentCategories, parentCategories, categories } = await useMenu()

const client = useMedusaClient();

const filters = reactive(
	{
		singers: [],
		genres: [],
		labels: [],
	}
);

const fetchedProducts = ref(null);

const getCategories = async () => {
	try {
		const {product_categories} = await client.productCategories.list();
		setCategories(product_categories);
		setParentCategories(product_categories.filter((category) => {
			return category.parent_category === null;
		}));
	} catch (e) {

	}
}

watchEffect(async () => {
	const {products} = await client.products.list({
		q: query.value,
	});
	await getCategories();
	fetchedProducts.value = products;
});

const getCardProps = (product) => {
	return {
		src: product.thumbnail,
		artist: product.subtitle,
		album: product.title,
		price: product.variants[0].prices[0].amount,
		currency: product.variants[0].prices[0].currency_code,
		badge: product?.tags[0]?.value,
	}
}

</script>

<template>
	<section class="catalog">
		<div class="catalog__filters">
			<list-filter class="catalog__list"
									 v-for="(category, index) in parentCategories"
									 v-model="filters[category.handle]"
									 :key="index"
									 :caption="category.name"
									 :items="category.category_children"
			>
			</list-filter>

		</div>
		<div class="catalog__feed">
			<div class="catalog__filters">
				<input-search v-model:model-value="query"/>
			</div>
			<div class="catalog__products">
				<header class="catalog__search-settings">
					<div class="catalog__search-controls">

					</div>
					<div class="catalog__active-filters">

					</div>
				</header>
				<transitions-list tag="div" class="catalog__search-result">
					<card-rich v-for="product in fetchedProducts" v-bind="getCardProps(product)" :key="product.album"/>
				</transitions-list>

			</div>
		</div>
	</section>
</template>

<style lang="scss">
.catalog {
	display: flex;
	gap: 24px;
	margin: 40px 0 72px;
	padding: 0 300px;
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
}
</style>