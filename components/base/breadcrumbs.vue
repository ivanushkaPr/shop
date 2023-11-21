<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});

const last = computed(() => {
  return props.breadcrumbs.length - 1;
})
</script>

<template>
  <div class="breadcrumbs">
	  <div class="breadcrumbs__wrapper">
		  <icon-home />
		  <span v-for="(item, index) in breadcrumbs"
				:key="index"
		  		class="breadcrumbs__breadcrumb"
		  >
			  <NuxtLink :to="item.url" class="breadcrumbs__link" v-if="(index !== last) && item.url">
				  {{ item.title }}
			  </NuxtLink>
			  <span v-else class="breadcrumbs__title">
				  {{ item.title }}
			  </span>
			  <span class="breadcrumbs__divider" v-if="index !== last"> <icon-arrow-next /> </span>
		  </span>
	  </div>
  </div>
</template>

<style lang="scss">
.breadcrumbs {
	width: 100%;
	background: var(--gray-50, #F2F4F5);

	&__wrapper {
		//margin: 0 auto;
		padding: 26px 300px;
		display: flex;
		gap: 8px;
		align-items: center;
	}

	&__breadcrumb {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	&__link {
		color: var(--gray-600, #5F6C72);
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 142.857% */
		text-decoration: none;
	}

	  &__title {
		  color: var(--secondary-500, #2DA5F3);
		  font-size: 14px;
		  font-style: normal;
		  font-weight: 500;
		  line-height: 20px; /* 142.857% */
	  }
	  &__divider {

  }
}
</style>