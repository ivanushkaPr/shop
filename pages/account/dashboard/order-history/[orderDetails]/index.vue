<template>
	<div class="order-details">
		<menu-account/>
		<div class="order-progress">
			<header class="order-progress__header">
				<button-link href="/account/dashboard/order-history" is-grey is-backwards> История заказов </button-link>
			</header>
			<div class="order-summary">
				<div class="order-summary__metadata">
					<description-xl-400 class="order-summary__id">#96459761</description-xl-400>
					<description-small-400 class="order-summary__size">
						4 товара • Заказ создан 17 Jan, 2021 at 7:32 PM
					</description-small-400>
				</div>
				<p class="order-summary__price">
					1199.00 РУБ
				</p>
			</div>

			<div class="delivery-status">
				<description-small-400 class="delivery-status__delivery-expected-at">
					Доставка ожидается <span class="delivery-status__date">23 Января, 2023</span>
				</description-small-400>

				<div class="delivery-status__stages">
					<span class="delivery-status__stage _completed"/>
					<span class="delivery-status__connector _completed"/>
					<span class="delivery-status__stage _current"/>
					<span class="delivery-status__connector"/>
					<span class="delivery-status__stage"/>
					<span class="delivery-status__connector"/>
					<span class="delivery-status__stage"/>
				</div>

				<ul class="delivery-status__legend">
					<li class="delivery-status__legend-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path opacity="0.2" d="M10 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H10V27Z" fill="#2DB324"/>
							<path d="M14 14H22" stroke="#2DB324" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M14 18H22" stroke="#2DB324" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#2DB324" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10 5V27" stroke="#2DB324" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Заказ создан
					</li>
					<li class="delivery-status__legend-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path opacity="0.2" d="M4.1375 9.32422C4.04693 9.47979 3.99946 9.6567 4 9.83672V22.1617C4.00096 22.3397 4.04884 22.5144 4.13882 22.668C4.2288 22.8216 4.35769 22.9488 4.5125 23.0367L15.5125 29.2242C15.6608 29.309 15.8292 29.3521 16 29.3492L16.1125 15.9992L4.1375 9.32422Z" fill="#FA8232"/>
							<path d="M28 22.1627V9.83766C27.999 9.65963 27.9512 9.485 27.8612 9.33137C27.7712 9.17775 27.6423 9.05057 27.4875 8.96266L16.4875 2.77516C16.3393 2.68958 16.1711 2.64453 16 2.64453C15.8289 2.64453 15.6607 2.68958 15.5125 2.77516L4.5125 8.96266C4.35769 9.05057 4.22879 9.17775 4.13882 9.33137C4.04884 9.485 4.00096 9.65963 4 9.83766V22.1627C4.00096 22.3407 4.04884 22.5153 4.13882 22.6689C4.22879 22.8226 4.35769 22.9497 4.5125 23.0377L15.5125 29.2252C15.6607 29.3107 15.8289 29.3558 16 29.3558C16.1711 29.3558 16.3393 29.3107 16.4875 29.2252L27.4875 23.0377C27.6423 22.9497 27.7712 22.8226 27.8612 22.6689C27.9512 22.5153 27.999 22.3407 28 22.1627V22.1627Z" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M22.125 19.0625V12.5625L10 5.875" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M27.8627 9.32422L16.1127 15.9992L4.1377 9.32422" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.1125 16L16 29.35" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Собран
					</li>
					<li class="delivery-status__legend-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path opacity="0.2" d="M22 18H2V23C2 23.2652 2.10536 23.5196 2.29289 23.7071C2.48043 23.8946 2.73478 24 3 24H5.5C5.5 23.2044 5.81607 22.4413 6.37868 21.8787C6.94129 21.3161 7.70435 21 8.5 21C9.29565 21 10.0587 21.3161 10.6213 21.8787C11.1839 22.4413 11.5 23.2044 11.5 24H20.5C20.4997 23.4731 20.6381 22.9553 20.9014 22.4989C21.1648 22.0425 21.5437 21.6635 22 21.4V18Z" fill="#FA8232"/>
							<path opacity="0.2" d="M26.5 24C26.5003 23.4732 26.362 22.9557 26.0988 22.4993C25.8356 22.043 25.4569 21.664 25.0008 21.4005C24.5447 21.1369 24.0273 20.9982 23.5005 20.9981C22.9737 20.998 22.4562 21.1366 22 21.4V15H30V23C30 23.2652 29.8946 23.5196 29.7071 23.7071C29.5196 23.8946 29.2652 24 29 24H26.5Z" fill="#FA8232"/>
							<path d="M22 10H27.325C27.5242 9.99872 27.7192 10.0577 27.8843 10.1693C28.0494 10.2808 28.1769 10.4397 28.25 10.625L30 15" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M2 18H22" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M23.5 27C25.1569 27 26.5 25.6569 26.5 24C26.5 22.3431 25.1569 21 23.5 21C21.8431 21 20.5 22.3431 20.5 24C20.5 25.6569 21.8431 27 23.5 27Z" stroke="#FA8232" stroke-width="2" stroke-miterlimit="10"/>
							<path d="M8.5 27C10.1569 27 11.5 25.6569 11.5 24C11.5 22.3431 10.1569 21 8.5 21C6.84315 21 5.5 22.3431 5.5 24C5.5 25.6569 6.84315 27 8.5 27Z" stroke="#FA8232" stroke-width="2" stroke-miterlimit="10"/>
							<path d="M20.5 24H11.5" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M5.5 24H3C2.73478 24 2.48043 23.8946 2.29289 23.7071C2.10536 23.5196 2 23.2652 2 23V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H22V21.4" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M22 15H30V23C30 23.2652 29.8946 23.5196 29.7071 23.7071C29.5196 23.8946 29.2652 24 29 24H26.5" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						В пути
					</li>
					<li class="delivery-status__legend-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path opacity="0.2" d="M25 19.1118L20.4 23.7118C20.2746 23.829 20.1227 23.9141 19.9573 23.9599C19.7918 24.0056 19.6178 24.0105 19.45 23.9743L12.2 22.1618C12.0676 22.1249 11.9442 22.061 11.8375 21.9743L5 16.6368L9.075 8.97429L15.4875 7.09929C15.7154 7.03395 15.959 7.05167 16.175 7.14929L20.5 9.11179H17.9125C17.7826 9.11134 17.654 9.1365 17.5339 9.18583C17.4138 9.23516 17.3045 9.3077 17.2125 9.39929L12.3125 14.2868C12.2125 14.3895 12.1354 14.5123 12.0863 14.647C12.0373 14.7818 12.0174 14.9254 12.0281 15.0684C12.0387 15.2114 12.0796 15.3505 12.148 15.4765C12.2164 15.6025 12.3109 15.7125 12.425 15.7993L13.1 16.3118C13.7932 16.8292 14.635 17.1087 15.5 17.1087C16.365 17.1087 17.2068 16.8292 17.9 16.3118L19.5 15.1118L25 19.1118Z" fill="#FA8232"/>
							<path d="M30.0875 15.2241L27 16.7616L23 9.11161L26.125 7.54911C26.3572 7.43073 26.6269 7.40898 26.8751 7.48859C27.1233 7.56821 27.33 7.74274 27.45 7.97411L30.525 13.8616C30.5874 13.9795 30.6255 14.1086 30.6372 14.2414C30.6489 14.3742 30.634 14.5081 30.5932 14.635C30.5525 14.762 30.4867 14.8795 30.3999 14.9806C30.313 15.0818 30.2068 15.1646 30.0875 15.2241V15.2241Z" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M4.99979 16.6385L1.91229 15.0885C1.79341 15.0302 1.68746 14.9486 1.60073 14.8486C1.51401 14.7486 1.44829 14.6321 1.40747 14.5062C1.36666 14.3802 1.35159 14.2474 1.36315 14.1155C1.37471 13.9836 1.41268 13.8554 1.47479 13.7385L4.54979 7.85097C4.67008 7.61976 4.87588 7.44464 5.12337 7.36293C5.37086 7.28121 5.64047 7.29934 5.87479 7.41347L8.99979 8.97597L4.99979 16.6385Z" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M27 16.7617L25 19.1117L20.4 23.7117C20.2746 23.829 20.1227 23.9141 19.9573 23.9598C19.7918 24.0055 19.6178 24.0105 19.45 23.9742L12.2 22.1617C12.0676 22.1248 11.9442 22.061 11.8375 21.9742L5 16.6367" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M25.0001 19.1133L19.5001 15.1133L17.9001 16.3133C17.2069 16.8307 16.3651 17.1102 15.5001 17.1102C14.6351 17.1102 13.7933 16.8307 13.1001 16.3133L12.4251 15.8008C12.311 15.714 12.2166 15.604 12.1481 15.478C12.0797 15.352 12.0388 15.2129 12.0282 15.0699C12.0175 14.9269 12.0374 14.7833 12.0864 14.6485C12.1355 14.5138 12.2126 14.391 12.3126 14.2883L17.2126 9.40079C17.3047 9.3092 17.4139 9.23666 17.534 9.18732C17.6541 9.13799 17.7828 9.11283 17.9126 9.11329H23.0001" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M9.0752 8.97429L15.4877 7.09929C15.7155 7.03395 15.9592 7.05167 16.1752 7.14929L20.5002 9.11179" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M14 26.6125L10.2375 25.6625C10.0842 25.6279 9.94221 25.5547 9.825 25.45L7 23" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						Доставлен
					</li>
				</ul>

				<div class="order-activity">
					<description-small-500 class="order-activity__title">
						История заказов
					</description-small-500>

					<ul class="order-activity__events">
						<li class="order-activity__event">
							<div class="order-activity__icon _success">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M16.125 9.75L10.6219 15L7.875 12.375" stroke="#2DB324" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#2DB324" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<div class="order-activity__content">
								<description-small-400 class="order-activity__message"> Ваш заказ успешно подтвержден. </description-small-400>
								<description-small-400 class="order-activity__date"> 19 Jan, 2021 at 2:61 PM </description-small-400>
							</div>
						</li>
						<li class="order-activity__event">
							  <div class="order-activity__icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M9 12H15" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M9 15H15" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M5.25 3.75H18.75C18.9489 3.75 19.1397 3.82902 19.2803 3.96967C19.421 4.11032 19.5 4.30109 19.5 4.5V18.75C19.5 19.3467 19.2629 19.919 18.841 20.341C18.419 20.7629 17.8467 21 17.25 21H6.75C6.15326 21 5.58097 20.7629 5.15901 20.341C4.73705 19.919 4.5 19.3467 4.5 18.75V4.5C4.5 4.30109 4.57902 4.11032 4.71967 3.96967C4.86032 3.82902 5.05109 3.75 5.25 3.75V3.75Z" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M7.5 2.25V5.25" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M12 2.25V5.25" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M16.5 2.25V5.25" stroke="#2DA5F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
								<div class="order-activity__content">
									<description-small-400 class="order-activity__message"> Ваш заказ был подтвержден. </description-small-400>
									<description-small-400 class="order-activity__date"> 19 Jan, 2021 at 2:61 PM </description-small-400>
								</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.order-details {
	display: flex;
	gap: 72px;
	padding: 0 300px;
	margin: 40px 0 72px;

	.order-progress {
		border: 1px solid $gray-100;
		background: $gray-00;
		flex-grow: 1;

		&__header {
			padding: 16px 24px;
			border-bottom: 1px solid $gray-100;
		}
	}


	.order-summary {
		margin: 24px;
		padding: 24px;
		border-radius: 4px;
		border: 1px solid var(--Warning-200, #F7E99E);
		background: var(--Warning-50, #FDFAE7);

		display: flex;
		justify-content: space-between;
		align-items: center;

		&__price {
			color: $secondary-500;
			font-size: 28px;
			font-style: normal;
			font-weight: 600;
			line-height: 32px; /* 114.286% */
		}

		&__id {
			margin-bottom: 8px;
		}

		&__size {
			color: var(--Gray-700, #475156);
		}
	}

	.delivery-status {
		padding: 0 24px 24px;
		border-bottom: 1px solid $gray-100;
		&__delivery-expected-at {
			margin-bottom: 24px;
		}

		&__date {
			color: $gray-900;
			font-weight: 500;
		}

		&__stages {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 24px;
		}

		&__stage {
			width: 24px;
			height: 24px;
			border-radius: 24px;
			border: 2px solid $primary-500;
			&._completed {
				background-color: $primary-500;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M10.125 3.375L4.875 8.625L2.25 6' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
				background-repeat: no-repeat;
				background-position: center;
			}

			&._current {
				background-color: $primary-500;
				border-color: $gray-00;
			}
		}

		&__connector {
			width: 234px;
			height: 8px;
			background: var(--Primary-100, #FFE7D6);

			&._completed {
				background-color: var(--Primary-500, #FA8232);
			}
		}

		&__legend {
			list-style-type: none;
			padding: 0;
			margin: 0;
			display: flex;

		}

		&__legend-item {
			display: flex;
			gap: 12px;
			flex-direction: column;
			align-items: center;
			flex-basis: 25%;
		}
	}


	.order-activity {
		&__title {
			margin-bottom: 24px;
		}

		&__events {
			list-style-type: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: column;
			gap: 16px;
		}

		&__event {
			display: flex;
			gap: 16px;
		}

		&__icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 48px;
			height: 48px;
			border-radius: 2px;
			border: 1px solid var(--Secondary-100, #D5EDFD);
			background: var(--Secondary-50, #EAF6FE);

			&._success {
				border: 1px solid var(--Success-100, #D5F0D3);
				background: var(--Success-50, #EAF7E9);
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		&__message {
			color: $gray-900;
		}

		&__date {
			color: $gray-500;
		}
	}


}
</style>
<script setup lang="ts">
</script>