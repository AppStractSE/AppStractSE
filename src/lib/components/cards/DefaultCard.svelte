<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let image =
		'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png';
	export let title = '';
	export let description = '';
	export let href = '';
	export let buttonText = 'Läs mer';
	export let subTitle = '';
</script>

<a {href} data-sveltekit-prefetch>
	<div class="overflow-hidden aspect-[4/3]">
		<img src={image} alt={title} />
	</div>
	<div class="flex flex-col flex-1 gap-2 px-4 py-8">
		{#if subTitle}
			<h6>{subTitle}</h6>
		{/if}
		<h5>{title}</h5>
		<p>{description}</p>
		<div class="block mt-6 md:flex">
			<Button variation="outline" title={buttonText} {href} size="lg" />
		</div>
	</div>
</a>

<style lang="scss">
	img {
		aspect-ratio: 4/3;
		height: 100%;
		overflow: hidden;
		@apply transition-all duration-200 object-cover lg:opacity-70;
	}
	a {
		@apply flex flex-col overflow-hidden rounded-md h-full bg-white;
		&:hover {
			img {
				@apply lg:scale-105 opacity-100;
			}
			h5,
			h6,
			p {
				@apply lg:underline lg:underline-offset-4;
			}
		}
	}

	p {
		@apply flex-1 text-balance;
	}
</style>
