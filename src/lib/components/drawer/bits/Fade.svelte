<script lang="ts">
	export let position: 'top' | 'bottom' = 'top';
</script>

<div class="{position}-fade"></div>

<style lang="scss">
	.top-fade {
		@apply sticky top-0 left-0 right-0 z-50 w-full h-6 md:h-12 bg-gradient-to-t from-transparent to-ivory-50/90;
	}
	.bottom-fade {
		@apply sticky bottom-0 left-0 right-0 z-50 w-full h-6 md:h-12 bg-gradient-to-b from-transparent to-ivory-50/90;
	}
</style>
