<script setup>
defineProps({
	product: {
		default: 'Crombid Traxorm - Viltima Examen',
	},
	upc: {
		default: 'A264671',
	},
	label: {
		default: 'Студия: Легендарная Ярославская',
	},
	availability: {
		default: true,
	},
	genre: {
		default: 'Тяжелый рок'
	},
	price: {
		default: 2000,
	},
	currency: {
		default: 'rub',
	},
	oldPrice: {
		default: 2500,
	},
	badge: {
		default: '21% скидка',
	},
});

const { setModalVisibility } = useModal();

const mock = [
	'http://www.hitkiller.com/666/wp-content/uploads/2012/04/metallica-st-anger-penis.jpeg',
	'https://rockisfest.ru/upload/medialibrary/4db/4db8533b9f1012ac3bb8e228725e8ed5.png',
	'https://rockisfest.ru/upload/medialibrary/35e/35e498619012a0af6edfae7ee3327612.png',
	'http://www.hitkiller.com/666/wp-content/uploads/2012/04/metallica-st-anger-penis.jpeg',
	'https://rockisfest.ru/upload/medialibrary/4db/4db8533b9f1012ac3bb8e228725e8ed5.png',
	'https://rockisfest.ru/upload/medialibrary/35e/35e498619012a0af6edfae7ee3327612.png',
	'http://www.hitkiller.com/666/wp-content/uploads/2012/04/metallica-st-anger-penis.jpeg',
	'https://rockisfest.ru/upload/medialibrary/4db/4db8533b9f1012ac3bb8e228725e8ed5.png',
	'https://rockisfest.ru/upload/medialibrary/35e/35e498619012a0af6edfae7ee3327612.png',
];
</script>

<template>
	<section class="modal-preview">
		<div class="modal-preview__window">
			<button class="modal-preview__close-button" @click="setModalVisibility(false)">
				<icon-close />
			</button>
			<div class="modal-preview__slider">
				<slider-preview :items="mock"/>
			</div>
			<div class="modal-preview__content">
				<p class="modal-preview__product">
					{{ product }}
				</p>
				<ul class="modal-preview__info">
					<li class="modal-preview__info-item">
						Upc: <span class="modal-preview__info-item-value"> {{ upc }} </span>
					</li>
					<li class="modal-preview__info-item">
						Доступность заказа: <span class="modal-preview__availability"> {{ availability }} </span>
					</li>
					<li class="modal-preview__info-item">
						Студия: <span class="modal-preview__info-item-value"> {{ label }} </span>
					</li>
					<li class="modal-preview__info-item">
						Жанр: <span class="modal-preview__info-item-value">  {{ genre }} </span>
					</li>
				</ul>
				<p class="modal-preview__price">
					{{ price }}
					<span class="modal-preview__old-price">
						{{ oldPrice }}
					</span>
					<base-badge class="modal-preview__badge" type="discount" :text="badge" />
				</p>

				<hr class="modal-preview__divider"/>
				<div class="modal-preview__controls">
					<button-counter />
					<base-action-button>
						<template v-slot:default> Добавить в корзину </template>
						<template v-slot:icon> <icon-cart class="modal-preview__icon"/> </template>
					</base-action-button>
					<base-secondary-button> Купить </base-secondary-button>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.modal-preview {
	top: 0;
	left: 0;
	position: fixed;
	z-index: 11;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);

	display: flex;
	justify-content: center;
	align-items: center;

	&__close-button {
		cursor: pointer;
		position: absolute;
		border-radius: 100px;
		background: rgba(255, 255, 255, 0.12);
		width: 48px;
		height: 48px;
		top: 0px;
		right: -64px;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__slider {
		width: 616px;
	}

	&__window {
		display: flex;
		position: relative;
		//display: inline-flex;
		padding: 40px;
		align-items: flex-start;
		gap: 56px;
		justify-content: center;
		border-radius: 4px;
		border: 1px solid $gray-100;
		background: $gray-00;
		box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.12);
	}

	&__product {
		color: $gray-900;
		@include font(20px, 28px, 400);
		margin-bottom: 16px;
	}

	&__info {
		padding: 0;
		margin: 0;
		margin-bottom: 24px;
		max-width: 648px;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 24px 8px;
	}

	&__info-item {
		min-width: 312px;
		color: $gray-600;
	}

	&__info-item-value {
		color: $gray-900;
		font-weight: 600;
	}

	&__availability {
		color: $success-500;
		font-weight: 600;
	}

	&__price {
		display: flex;
		align-items: center;
		color: $secondary-500;
		@include font(24px, 32px, 600);
		margin-bottom: 24px;
	}

	&__old-price {
		margin-left: 4px;
		color: $gray-500;
		@include font(18px, 24px, 700);
		text-decoration: line-through;
	}

	&__badge {
		margin-left: 12px;
	}

	&__divider {
		border-top: $gray-100;
	}

	&__controls {
		display: flex;
		gap: 16px;
		margin-top: 36px;
	}

	&__icon {
		width: 24px;
		height: 24px;
	}
}
</style>