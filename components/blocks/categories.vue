<template>
	<div class='block-categories'>
		<header class="block-categories__header">
			<div class="block-categories__left">
				<heading-level-one class="block-categories__headline">
					Лучшие предложения
				</heading-level-one>

				<p class="block-categories__timer">
					До конца акции
					<span class="block-categories__time">
						16д:21ч:57м:23с
					</span>
				</p>
			</div>
			<button-link title="Смотреть все" color="#2DA5F3" color-hover="#2484C2" href="#"/>
		</header>
		<slider-row />
	</div>
</template>

<style lang="scss">
.block-categories {
	max-width: 1320px;
	margin: 0 auto;
	&__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4px;
	}

	&__left {
		display: flex;
		align-items: center;
		gap: 24px;
	}

	&__timer {
		display: flex;
		align-items: center;
		gap: 12px;
		color: $pure-black;
	}

	&__time {
		display: flex;
		padding: 6px 12px;
		align-items: center;
		gap: 6px;

		border-radius: 2px;
		background: $warning-300;

		color:$gray-900;
		@include font(16px, 24px, 400);
	}
}

</style>
<script setup lang="ts">
</script>