<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let data: any[] = [];
</script>

<div class="space-y-4">
	{#each data as item}
		<a href={item.slug} class="group">
			<img src="https://placehold.co/768x768.png" />
			<p>{item.title}</p>
		</a>
	{/each}
</div>
<div class="btn-container">
	<Button title="Läs alla våra artiklar" href="/artiklar" variation="outline" />
</div>

<style lang="scss">
	.btn-container {
		@apply md:max-w-xs md:mx-auto;
	}

	a {
		@apply hover:underline flex items-center gap-4;
	}

	p {
		@apply text-sm font-bold;
		font-family: var(--font-varela);
	}

	img {
		@apply opacity-70 group-hover:opacity-100 transition-all duration-200 ease-in-out rounded-md max-h-24 outline outline-1;
	}
</style>
