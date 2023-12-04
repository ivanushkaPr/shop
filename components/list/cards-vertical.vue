<script setup>
const { data: albums } = await useFetch('/api/getAlbums');
const { Pantera: mock } = albums.value;
debugger;
</script>

<template>
	<figure class="list-cards-vertical">
		<figcaption class="list-cards-vertical__albums-headline"> Рекомендуемые альбомы </figcaption>
		<ul class="list-cards-vertical__albums-list">
			<card-small v-for="album in mock" v-bind="album" :key="album.title" />
		</ul>
	</figure>
</template>


<style lang="scss">
.list-cards-vertical {
	margin: 0;

	&__albums-headline {
		color: var(--gray-900, #191C1F);
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
		margin-bottom: 16px;
	}

	&__albums-list {
		margin: 0;
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
}

</style>