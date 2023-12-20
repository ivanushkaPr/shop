<script setup>
	const { isModalVisible } = useModal();
</script>

<template>
	<teleport to="body">
		<transitions-fade>
			<modal-preview v-if="isModalVisible"/>
		</transitions-fade>
	</teleport>
  <header class="header">
    <the-header-top />
    <the-header-middle />
    <the-header-bottom />
  </header>
</template>
<style lang="scss">
p {
  margin: 0;
}

.header {
  width: 100%;
  box-sizing: border-box;
}
</style>