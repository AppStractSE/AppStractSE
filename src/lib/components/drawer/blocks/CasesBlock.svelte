<script lang="ts">
	import Title from '$lib/components/drawer/bits/Title.svelte';
	import { cases } from '$lib/data/cases';
	import GridItem from '../bits/GridItem.svelte';
</script>

<div class="space-y-8">
	<Title title="Cases" />
	<GridItem
		data={cases.slice(0, 3)}
		button={{
			title: 'Se alla cases',
			href: '/cases'
		}}
	/>
</div>
