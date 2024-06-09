<script lang="ts">
	export let title = '';
	export let variation = 'primary';
	export let href = '/';
	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="btn btn-{variation} btn-{size}">
	<a {href}>{title}</a>
</div>

<style lang="scss">
	.btn {
		@apply relative after:bg-[#232323] after:rounded-full after:inset-0 after:transition-all after:absolute after:w-full after:h-full after:z-[-1] z-[1];
	}
	.btn a {
		@apply text-center relative block w-full h-full px-8 py-2.5 rounded-full hover:-translate-x-1.5 hover:-translate-y-1 transition-all ease-[cubic-bezier(0,2,1,2)];
		font-family: var(--font-varela);
	}
	.btn-primary a {
		@apply text-white bg-blue-600;
	}

	.btn-outline a {
		@apply text-black bg-[#f3f1ff] border border-black;
	}

	.btn-sm a {
		@apply text-xs;
	}
	.btn-md a {
		@apply text-base;
	}
	.btn-lg a {
		@apply text-lg;
	}
</style>
