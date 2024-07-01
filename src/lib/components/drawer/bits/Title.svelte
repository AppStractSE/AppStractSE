<script lang="ts">
	export let title: string = '';
</script>

<div>
	<h6>{title}</h6>
</div>

<style lang="scss">
	h6 {
		@apply text-base font-bold;
		font-family: var(--font-varela);
	}
</style>
