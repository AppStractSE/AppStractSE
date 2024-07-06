<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let header = '';
	export let title;
	export let description;
	export let link = '';
	export let href = '';
	export let image;
	export let rtl = false;
	export let align: 'start' | 'center' | 'end' = 'center';
</script>

<article class="card">
	<div class="card-content flex-col {rtl ? 'md:flex-row' : 'md:flex-row-reverse'}">
		<div class="basis-6/12">
			<img src={image} alt="SvelteKit" />
		</div>
		<div class="flex flex-col justify-{align} basis-6/12">
			<div class="space-y-4">
				{#if header}
					<h2>{header}</h2>
				{/if}
				<h3>
					{#if href && link}
						<a {href}>{title}</a>
					{:else}
						{title}
					{/if}
				</h3>
				<p>
					{description}
				</p>
			</div>
			{#if href && link}
				<div class="block mt-12 md:flex">
					<Button variation="outline" title={link} {href} size="md" />
				</div>
			{/if}
		</div>
	</div>
</article>

<style lang="scss">
	.card {
		@apply mx-auto max-w-screen-xl px-4 xl:px-0;
	}
	.card-content {
		@apply flex gap-4 md:gap-8 lg:gap-16;
	}
	a {
		@apply hover:underline hover:underline-offset-4;
	}
	img {
		@apply w-full h-full max-w-full rounded-md;
	}
	h4 {
		@apply uppercase tracking-wider text-xxs;
	}
	h2,
	h3 {
		font-family: var(--font-varela);
	}
	h4,
	p {
		font-family: var(--font-esteban);
	}
	h2 {
		@apply text-2xl font-bold;
	}
	h3 {
		@apply text-lg font-bold;
	}
	p {
		@apply text-base text-balance leading-normal;
	}
	.swiper-pagination {
		@apply my-8;
		position: unset;
	}
</style>
