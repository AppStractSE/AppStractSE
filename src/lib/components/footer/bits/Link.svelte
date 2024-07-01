<script lang="ts">
	export let href: string = '';
	export let title: string = '';
</script>

<a {href}>{title}</a>

<style lang="scss">
	a {
		@apply hover:underline block text-sm font-light w-fit;
		font-family: var(--font-varela);
	}
</style>
