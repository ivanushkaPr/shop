<script setup>
// import StarRating from 'vue-star-rating';

const props = defineProps({
	badge: {
		type: String,
		required: false,
		default: '',
		validator(value) {
			return ['hot', 'discount', 'sale', 'best', 'sold'].indexOf(value) !== -1;
		},
	},
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: false,
		default: 0,
	},
	votes: {
		type: Number,
		required: false,
		default: 0,
	},
	artist: {
		type: String,
		required: true,
	},
	album: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	currencyCode: {
		type: String,
		required: false,
		default: 'rub',
	},
});

const rating = ref(props.rating);

const getCurrencySymbol = computed(() => {
	if (props.currencyCode === 'rub') {
		return '₽';
	}
})

const isMouseOver = ref(false);

const onMouseOver = (event) => {
	debugger;
	if (event.target.closest('.card-rich')) {
		isMouseOver.value = true ;
	}
}

const onMouseOut = (event) => {
	isMouseOver.value = false;
}

// import { useModalStore } from "~/stores/modal.js";
//
// const menuStore = useModalStore();
// const { setModalVisibility } = menuStore;

const {setModalVisibility} = useModal();

const onShowModal = () => {
	setModalVisibility(true);
};

</script>

<template>
	<div class="card-rich" @mouseenter="onMouseOver" @mouseleave="onMouseOut">

		<transitions-fade>
			<div v-if="isMouseOver" class="card-rich__overlay">
				<ul class="card-rich__list">
					<li class="card-rich__item _cart"> <icon-cart-black /></li>
					<li class="card-rich__item _eye" @click="onShowModal"> <icon-eye-black /></li>
				</ul>
			</div>
		</transitions-fade>
		<base-badge class="card-rich__badge" v-if="badge" :type="badge"/>
		<img class="card-rich__image" :src="src" :alt="alt"/>

		<p class="card-rich__rating">
<!--			<star-rating v-model:rating="rating"-->
<!--						 :star-size="16"-->
<!--						 active-color="#FA8232"-->
<!--						 read-only-->
<!--						 :show-rating="false"-->
<!--			/>-->
			<span v-if="votes" class="card-rich__votes"> {{ votes }} </span>
		</p>

		<p class="card-rich__album">
			{{ album }}
		</p>
		<p class="card-rich__artist">
			{{ artist }}
		</p>

		<p class="card-rich__price">
			{{ price.toLocaleString('ru-RU') }} {{ getCurrencySymbol }}
		</p>
	</div>
</template>

<style lang="scss">
.card-rich {
	position: relative;
	max-width: 234px;
	box-sizing: border-box;
	padding: 16px;
	border-radius: 3px;
	border: 1px solid $gray-100;
	background: $gray-00;

	&__overlay {
		position: absolute;
		z-index: 1;
		background: rgba(0, 0, 0, 0.20);
		width: 202px;
		height: 172px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__list {
		list-style: none;
		display: flex;
		gap: 8px;
		padding: 0;
		margin: 0;
	}

	&__item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 36px;
		height: 36px;
		border-radius: 100px;
		padding: 12px;
		background: $gray-00;

		&._heart:hover svg path  {
			fill: white;
			stroke: white;
		}

		&._cart:hover svg path {
			stroke: white;
		}

		&._eye:hover svg path {
			//fill: white;
			stroke: white;
		}

		&:hover {
			background: $primary-500;


		}
	}

	&__overlay-button {

	}

	&__badge {
		position: absolute;
		top: 12px;
		left: 12px;
	}

	&__image {
		width: 202px;
		height: 172px;
	}

	&__rating {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-bottom: 8px;
	}

	&__votes {
		color: $gray-500;
		@include font(12px, 16px, 400);
	}

	&__artist {
		@include font(16px, 24px, 400);
	}

	&__album {
		@include font(18px, 27px, 600);
	}

	&__price {
		margin-top: 8px;
		color: $secondary-500;
		font-weight: 600;
	}
}
</style>