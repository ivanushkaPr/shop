<script setup>

const activeTab = ref(0);

const onChangeTab = (index) => {
	activeTab.value = index;
};

defineProps({
	heading: {
		type: String,
		required: true,
	},
	config: {
		type: Array,
		required: true,
	},
});
</script>

<template>
<section class="tabs-main">
	<header class="tabs-main__header">
		<heading-level-three class="tabs-main__headline">
			{{ heading }}
		</heading-level-three>
		<menu class="tabs-main__menu">
			<ul class="tabs-main__list">
				<li class="tabs-main__item"
					:class="{'_active': activeTab === index}"
					v-for="(item, index) in config"
					:key="item.caption"
					@click="onChangeTab(index)"
				>
					{{ item.caption }}
				</li>
			</ul>
			<button-link title="Смотреть все" href="#" color="#FA8232" color-hover="#DE732D"/>
		</menu>
	</header>
	<div class="tabs-main__content">
		<card-rich v-for="card in config[activeTab].cards" v-bind="card"/>

	</div>
</section>
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
			font-weight: 600;
			color: $gray-900;
			box-shadow: 0px -2px 0px 0px #FA8232 inset;
		}
	}

	&__content {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}
}
</style>