<script lang="ts">
	export let title: string = '';
</script>

<div class="px-4 xl:px-8">
	<h6>{title}</h6>
</div>

<style lang="scss">
	h6 {
		@apply text-base font-bold;
		font-family: var(--font-varela);
	}
</style>
