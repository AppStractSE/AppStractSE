<script lang="ts">
	export let title = '';
	export let variation: 'primary' | 'outline' = 'primary';
	export let href = '/';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let type: 'button' | 'a' = 'a';
	export let onClick: () => void = () => {};
</script>

<div class="btn btn-{variation} btn-{size}">
	{#if type === 'button'}
		<button on:click={onClick} type="button">{title}</button>
	{:else}
		<a {href}>{title}</a>
	{/if}
</div>

<style lang="scss">
	.btn {
		@apply relative after:bg-[#464646] after:rounded-full after:inset-0 after:transition-all after:absolute after:w-full after:h-full after:z-[-1] z-[1];
	}
	.btn a,
	.btn button {
		@apply text-center relative block w-full h-full rounded-full hover:-translate-x-1.5 hover:-translate-y-1 transition-all ease-[cubic-bezier(0,2,1,2)];
		font-family: var(--font-varela);
	}
	.btn-primary a,
	.btn-primary button {
		@apply text-white bg-[#697ba8];
	}

	.btn-outline a,
	.btn-outline button {
		@apply text-black bg-[#f3f1ff] border border-[#4e4e4e];
	}

	.btn-sm a,
	.btn-sm button {
		@apply text-xs px-4 py-1.5;
	}
	.btn-md a,
	.btn-md button {
		@apply text-xs px-6 py-3;
	}
	.btn-lg a,
	.btn-lg button {
		@apply text-base px-8 py-3.5;
	}
</style>
