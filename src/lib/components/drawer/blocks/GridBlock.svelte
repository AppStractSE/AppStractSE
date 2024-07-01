<script lang="ts">
	import ArticlesBlock from '$lib/components/drawer/blocks/ArticlesBlock.svelte';
	import CasesBlock from '$lib/components/drawer/blocks/CasesBlock.svelte';
</script>

<div
	class="grid justify-between grid-cols-1 px-4 space-y-12 xl:px-8 gap-y-4 gap-x-8 lg:space-y-0 lg:grid-cols-2"
>
	<CasesBlock />
	<ArticlesBlock />
</div>
