<script lang="ts">
	import Title from '$lib/components/drawer/bits/Title.svelte';
	import { articles } from '$lib/data/articles';
	import GridItem from '../bits/GridItem.svelte';
</script>

<div class="space-y-8">
	<Title title="Artiklar" />
	<GridItem
		data={articles.slice(0, 3)}
		button={{
			title: 'Läs alla våra artiklar',
			href: '/artiklar'
		}}
	/>
</div>
