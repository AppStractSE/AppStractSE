<script lang="ts">
	import Button from './button/Button.svelte';

	export let image =
		'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png';
	export let title = '';
	export let description = '';
	export let href = '';
</script>

<a {href}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="overflow-hidden">
		<img src={image} />
	</div>
	<div class="flex flex-col flex-1 gap-4 px-8 pt-12 pb-8">
		<h2>
			{title}
		</h2>
		<p class="flex-1">
			{description}
		</p>
		<div class="mt-8">
			<Button title="Läs mer" variation="outline" size="sm" />
		</div>
	</div>
</a>

<style lang="scss">
	img {
		@apply transition-all duration-200 aspect-square;
	}
	a {
		@apply flex flex-col overflow-hidden bg-white border rounded-md;
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
		@apply text-sm tracking-wide;
		font-family: var(--font-esteban);
	}
</style>
