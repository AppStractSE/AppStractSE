<script lang="ts">
	export let title: string = '';
</script>

<div>
	<h6>{title}</h6>
</div>

<style lang="scss">
	h6 {
		@apply text-lg;
		font-family: var(--font-varela);
	}
</style>
