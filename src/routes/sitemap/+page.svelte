<script lang="ts">
	import {
		articleRoutes,
		caseRoutes,
		guideRoutes,
		navigationRoutes,
		serviceRoutes
	} from '$lib/data/sitemap';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<div class="max-w-screen-xl px-4 mx-auto my-48 space-y-12 xl:px-0">
	<div class="space-y-4">
		<h6>Sidor</h6>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-2">
			{#each navigationRoutes as page}
				<a href={page.slug}>{page.title}</a>
			{/each}
		</div>
	</div>

	<div class="space-y-4">
		<h6>Tjänster</h6>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-2">
			{#each serviceRoutes as page}
				<a href={page.slug}>{page.title}</a>
			{/each}
		</div>
	</div>

	<div class="space-y-4">
		<h6>Guides</h6>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-2">
			{#each guideRoutes as page}
				<a href={page.slug}>{page.title}</a>
			{/each}
		</div>
	</div>

	<div class="space-y-4">
		<h6>Cases</h6>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-2">
			{#each caseRoutes as page}
				<a href={page.slug}>{page.title}</a>
			{/each}
		</div>
	</div>

	<div class="space-y-4">
		<h6>Artiklar</h6>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-2">
			{#each articleRoutes as page}
				<a href={page.slug}>{page.title}</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	h6 {
		@apply text-xl font-bold;
	}
	a {
		@apply text-base text-balance leading-normal hover:underline;
	}
</style>
