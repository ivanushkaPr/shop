<script setup>

const { data: popularPages } = await useFetch('/api/getPagesLinks');
const { data: quickLinks } = await useFetch('/api/getQuickLinks');

const { data: tags } = await useFetch('/api/getTags');
</script>

<template>
	<footer class="the-footer">
		<div class="the-footer__info">
			<div class="the-footer__company-info">
				<base-brand class="the-footer__brand" fillColor="#FA8232"/>

				<p class="the-footer__text">
					Служба клиентской поддержки:
				</p>

				<p class="the-footer__telephone">
					(629) 555-0129
				</p>

				<address class="the-footer__address">
					Улица Барклая 8, п. 12 Д. г. Москва, 119333
				</address>

				<p class="the-footer__email">
					soundmarket@google.com
				</p>
			</div>

			<list-vertical :items="popularPages" headline-text="Популярные разделы">
				<button-link is-golden href="#">
					Смотреть все продукты
				</button-link>
			</list-vertical>

			<list-vertical :items="quickLinks" headline-text="Быстрые ссылки"/>

			<list-tags :items="tags" headline-text="Популярные теги"/>
			<div class="the-footer__tags"></div>
		</div>

		<div class="the-footer__copyright">
			<p class="the-footer__copyright-data"></p>
		</div>
	</footer>

</template>

<style lang="scss">
	.the-footer {
		background: var(--gray-900, #191C1F);
		padding: 72px 300px;

		&__info {
			display: flex;
			//gap: 24px;
			justify-content: space-between;
		}

		&__brand {
			margin-bottom: 24px;
		}

		&__text {
			margin-bottom: 4px;

			color: var(--gray-500, #77878F);
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
		}

		&__telephone {
			margin-bottom: 12px;
			color: var(--gray-00, #FFF);
			font-size: 18px;
			font-style: normal;
			font-weight: 500;
			line-height: 24px; /* 133.333% */
		}

		&__address {
			margin-bottom: 12px;
			color: var(--gray-300, #ADB7BC);
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 24px; /* 150% */
		}

		&__email {
			color: var(--gray-00, #FFF);
			font-size: 16px;
			font-style: normal;
			font-weight: 500;
			line-height: 24px; /* 150% */
		}
	}
</style>