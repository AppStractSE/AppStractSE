<script lang="ts">
	import Icon from '@iconify/svelte';
	export let title: string = '';
	export let icon: string = '';
	export let variation: 'primary' | 'outline' = 'primary';
	export let href = '/';
	export let size: 'sm' | 'md' | 'lg' | 'rounded-pill' = 'md';
	export let type: 'button' | 'a' = 'a';
	export let onClick: () => void = () => {};
	export let external = false;
	export let hideExternalIcon = false;
</script>

<div class="btn btn-{variation} btn-{size}">
	{#if type === 'button'}
		<button on:click={onClick} type="button"
			>{title}
			<Icon {icon} />
		</button>
	{/if}
	{#if type === 'a' && external}
		<a {href} target="_blank"
			><span class="flex items-center justify-center gap-2"
				>{title}
				<Icon {icon} />
				{#if !hideExternalIcon}
					<Icon icon="material-symbols-light:arrow-insert" class="text-xl rotate-90" />
				{/if}
			</span>
		</a>
	{/if}
	{#if type === 'a' && !external}
		<a {href}>{title}</a>
	{/if}
</div>

<style lang="scss">
	.btn {
		@apply relative after:opacity-0 hover:after:opacity-100 after:bg-black after:rounded-full after:inset-0 after:transition-all after:absolute after:w-full after:h-full after:z-[-1] z-[1];
	}
	.btn a,
	.btn button {
		@apply text-center relative block w-full h-full rounded-full hover:-translate-x-1.5 hover:-translate-y-1 transition-all ease-[cubic-bezier(0,2,1,2)];
	}
	.btn-primary a,
	.btn-primary button {
		@apply bg-blue-700 text-white;
	}

	.btn-outline a,
	.btn-outline button {
		@apply text-black bg-white outline outline-1 outline-black/25;
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
	.btn-rounded-pill a,
	.btn-rounded-pill button {
		@apply rounded-full p-3;
	}
</style>
