<template>
	<div class="default-layout">
		<TheHeader/>
		<div class="default-layout__content">
			<slot/>
		</div>
		<TheFooter class="default-layout__footer"/>
	</div>
</template>


<style lang="scss">
body {
	height: 100vh;
}

.default-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	&__content {
		flex: 1 0 auto;
		display: flex;
		flex-direction: column;
	}

	&__footer {
		flex: 0 0 auto;
	}

}
</style>