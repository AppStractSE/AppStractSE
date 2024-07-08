<script lang="ts">
	export let image =
		'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png';
	export let title = '';
	export let description = '';
	export let href = '';
	export let buttonText = 'Läs mer';
	export let subTitle = '';
</script>

<a {href} data-sveltekit-prefetch class="group">
	<div class="overflow-hidden rounded-md aspect-[4/3]">
		<img src={image} alt={title} class="overflow-hidden" />
	</div>
	<div class="flex flex-col flex-1 gap-4 mt-4">
		{#if subTitle}
			<h6>{subTitle}</h6>
		{/if}
		<h2 class="group-hover:underline underline-offset-4">{title}</h2>
		<p>{description}</p>
	</div>
</a>

<style lang="scss">
	img {
		aspect-ratio: 4/3;
		height: 100%;
		overflow: hidden;
		@apply transition-all duration-200 object-cover opacity-70;
	}
	a {
		@apply flex flex-col overflow-hidden h-full;
		&:hover {
			img {
				@apply scale-105 opacity-100 rounded-md;
			}
		}
	}

	h2 {
		@apply text-xl;
		font-family: var(--font-varela);
	}

	p {
		@apply flex-1 text-balance;
	}
	p,
	h6 {
		@apply text-sm tracking-wide;
		font-family: var(--font-esteban);
	}
</style>
