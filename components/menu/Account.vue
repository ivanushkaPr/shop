<script setup>
import Dashboard from "~/components/icon/Dashboard.vue";
import OrderHistory from "~/components/icon/OrderHistory.vue";
import DeliveryStatus from "~/components/icon/DeliveryStatus.vue";
import Cart from "~/components/icon/CartAccount.vue";
import Heart from "~/components/icon/HeartAccount.vue";
import Compare from "~/components/icon/Compare.vue";
import MapAndAddresses from "~/components/icon/MapAndAddresses.vue";
import BrowsingHistory from "~/components/icon/BrowsingHistory.vue";
import Settings from "~/components/icon/Settings.vue";
import Exit from "~/components/icon/Exit.vue";

const menu = [
	{
		text: 'Панель управления',
		icon: Dashboard,
		href: '/account/dashboard',
	},
	{
		text: 'История заказов',
		icon: OrderHistory,
		href: '/account/order-history',
	},
	{
		text: 'Статус доставки',
		icon: DeliveryStatus,
		href: '/account/delivery-status',
	},
	{
		text: 'Корзина',
		icon: Cart,
		href: '/account/cart',
	},
	{
		text: 'Избранное',
		icon: Heart,
		href: '/account/favorite',
	},
	{
		text: 'Сравнить',
		icon: Compare,
		href:  '/account/compare',
	},
	{
		text: 'Карты и адреса',
		icon: MapAndAddresses,
		href:  '/account/payment-info',
	},
	{
		text: 'История просмотров',
		icon: BrowsingHistory,
		href: '/account/browsing-history',
	},
	{
		text: 'Настройки',
		icon: Settings,
		href: '/account/settings',
	},
	{
		text: 'Выйти',
		icon: Exit,
		href: '/account/exit',
	},
];


const route = useRoute();
const isActive = (href) => {
	return route.href === href;
}
debugger;
</script>

<template>
<nav class="menu-account">
	<ul class="menu-account__list">
		<li v-for="item in menu"
				class="menu-account__item"
				@click="navigateTo(item.href)"
				:class="isActive(item.href) && '_active'"
		>
			<component :is="item.icon" />
			{{ item.text }}
		</li>
	</ul>
</nav>
</template>

<style lang="scss">
.menu-account {
	padding: 16px 0;
	border-radius: 4px;
	border: 1px solid $gray-100;
	background: $gray-00;
	box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.08);
	min-width: 266px;
	&__list {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	&__item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px 24px;
		color: $gray-700;

		& svg * {
			stroke: $gray-700 !important;
		}

		&:hover {
			background: $gray-50;
			color: $gray-900;
			& svg * {
				stroke: $gray-900 !important;
			}
		}

		&._active {
			background: $primary-500;
			color: $gray-00;
			& svg * {
				stroke: $gray-00 !important;
			}
		}
	}
}
</style>