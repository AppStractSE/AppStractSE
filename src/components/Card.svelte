<script lang="ts">
	import Button from './button/Button.svelte';

	export let image =
		'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png';
	export let title = '';
	export let description = '';
	export let href = '';
</script>

<a {href} data-sveltekit-prefetch>
	<div class="overflow-hidden aspect-[4/3]">
		<img src={image} alt={title} />
	</div>
	<div class="flex flex-col flex-1 gap-4 px-8 pt-12 pb-8 2xl:px-6 2xl xl lg:py-6">
		<h2>
			{title}
		</h2>
		<p>
			{description}
		</p>
		<div class="block mt-6 md:flex">
			<Button variation="outline" title="Läs mer" {href} size="md" />
		</div>
	</div>
</a>

<style lang="scss">
	img {
		aspect-ratio: 4/3;
		height: 100%;
		@apply transition-all duration-200 object-cover;
	}
	a {
		@apply flex flex-col overflow-hidden bg-white border rounded-md h-full;
		&:hover {
			img {
				@apply scale-105;
			}
			h2,
			p {
				@apply underline underline-offset-4;
			}
		}
	}

	h2 {
		@apply text-xl;
		font-family: var(--font-varela);
	}

	p {
		@apply text-sm tracking-wide flex-1 text-balance;
		font-family: var(--font-esteban);
	}
</style>
