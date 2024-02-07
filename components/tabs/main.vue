<script setup>
defineProps({
	heading: {
		type: String,
		required: true,
	},
	indexName: {
		type: String,
		required: true,
		default: 'products',
	},
	attribute: {
		type: String,
		required: true,
		default: 'genre',
	},
});

const activeTab = ref(0);

const onChangeTab = (index) => {
	activeTab.value = index;
};

const currentFilter = ref('');

const redirectTo = useRedirectTo();

const {searchClient, setMeiliSearchParams} = await useMeliSearch();

const { toClientValue } = usePriceCalculation();
</script>

<template>
	<ais-instant-search
		:search-client="searchClient"
		:index-name="indexName"
		class="tabs-main"
	>
		<div class="tabs-main__header">
			<heading-level-three class="tabs-main__headline">
				{{ heading }}
			</heading-level-three>
			<ais-menu :attribute="attribute" :sort-by="['name']">
				<template
					v-slot="{
						items,
						canToggleShowMore,
						isShowingMore,
						toggleShowMore,
						refine,
						createURL,
						sendEvent,
						canRefine,
					}"
				>
					<nav class="tabs-main__menu">
						<ul class="tabs-main__list">
							<li class="tabs-main__item"
									:class="{'_active': activeTab === 0}"
									:key="0"
									@click="onChangeTab(0)"
							>
								<ais-clear-refinements>
									<template v-slot="{ canRefine, refine, createURL }">
										<a
											class="tabs-main__link"
											:href="createURL()"
											@click.prevent="() => {
												refine();
												onChangeTab(0);
												currentFilter = '';
											}"
										>
											Все товары
										</a>
									</template>
								</ais-clear-refinements>
							</li>
							<li class="tabs-main__item"
									v-for="(item, index) in items"
									:key="item.value"
									:class="{'_active': activeTab === index + 1}"
							>
								<a
									class="tabs-main__link"
									:href="createURL(item.value)"
									:style="{ fontWeight: item.isRefined ? 'bold': '' }"
									@click.prevent="() => {
											if (activeTab === index + 1) {
												return;
											}
											refine(item.value);
											onChangeTab(index + 1);
											debugger;
											currentFilter = item.value;
										}"
								>
									{{item.label}}
								</a>
							</li>
						</ul>
						<button-link @click="redirectTo(currentFilter)" isOrange :isBackwards="false" href="#">
							Смотреть все
						</button-link>
					</nav>
				</template>
			</ais-menu>
		</div>
		<ais-hits>
			<template v-slot="{ items, sendEvent }">
				<ul class="tabs-main__hits-list">
					<li class="tabs-main__hits-items" v-for="item in items" :key="item.objectID">
						<card-rich
												:src="item.thumbnail" :price="toClientValue(item.variants[0].prices[0].amount)"
												:artist="item.title" :album="item.album"
												:variant-id="item.variants[0].id"
						/>
					</li>
				</ul>
			</template>
		</ais-hits>
	</ais-instant-search>
</template>

<style lang="scss">
.tabs-main {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 26px;
	}

	&__menu {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
	}
	&__list {
		cursor: pointer;
		display: flex;
		list-style-type: none;
		padding: 0;
		margin: 0 16px 0 0;
	}

	&__item {
		padding: 8px;
		color: $gray-600;
		transition: color 0.3s ease-in, box-shadow 0.3s ease-in, font-weight 0.3s ease-in;

		&._active {
			box-shadow: 0px -2px 0px 0px #FA8232 inset;

			& a {
				font-weight: 600;
				color: $gray-900;
			}
		}
	}

	&__content {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	&__hits-list {
		list-style-type: none;
		display: flex;
		gap: 16px;
	}

	&__link {
		font-size: 14px;
		text-decoration: none;
		color: #5F6C72;
	}
}
</style>