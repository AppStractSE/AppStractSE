<!-- src/lib/Breadcrumb.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { sitemap } from '$lib/data/sitemap';
	import Icon from '@iconify/svelte';
	import { derived } from 'svelte/store';

	console.log(sitemap);

	// Function to find the title from the sitemap
	const findTitle = (path: string) => {
		const route = sitemap.find((route) => route.slug === path);
		console.log(route);
		return route ? route.title : path;
	};

	const breadcrumbs = derived(page, ($page) => {
		const segments = $page.url.pathname.split('/').filter(Boolean);
		return segments.map((_, index) => {
			const path = '/' + segments.slice(0, index + 1).join('/');
			return path;
		});
	});
</script>

<nav aria-label="breadcrumb">
	<a href="/"> Home </a>
	{#each $breadcrumbs as path, index}
		<Icon icon="ei:chevron-right" class="text-xl" />
		<a href={path} class:active={index === $breadcrumbs.length - 1}>
			{findTitle(path)}
		</a>
	{/each}
</nav>

<style lang="scss">
	nav {
		@apply flex items-center;
	}
	a {
		@apply text-xxs hover:underline;
	}
</style>
