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
		required: true,
	},
	votes: {
		type: Number,
		required: true,
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
	currency: {
		type: String,
		required: false,
		default: '₽',
	},
});

const rating = ref(props.rating);
</script>

<template>
	<div class="card-rich">
		<base-badge class="card-rich__badge" v-if="badge" :type="badge"/>
		<img class="card-rich__image" :src="src" :alt="alt"/>

		<p class="card-rich__rating">
<!--			<star-rating v-model:rating="rating"-->
<!--						 :star-size="16"-->
<!--						 active-color="#FA8232"-->
<!--						 read-only-->
<!--						 :show-rating="false"-->
<!--			/>-->
			<span class="card-rich__votes"> {{ votes }} </span>
		</p>

		<p class="card-rich__artist">
			{{ artist }}
		</p>
		<p class="card-rich__album">
			{{ album }}
		</p>

		<p class="card-rich__price">
			{{price}} {{currency}}
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
		@include font(18px, 27px, 600);
	}

	&__album {
		@include font(16px, 24px, 400);
	}

	&__price {
		margin-top: 8px;
		color: $secondary-500;
		font-weight: 600;
	}
}
</style>