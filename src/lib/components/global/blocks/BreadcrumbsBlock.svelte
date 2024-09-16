<script lang="ts">
	import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
</script>

<section>
	<div class="relative max-w-screen-xl mx-auto my-12">
		<div
			class="absolute top-0 bottom-0 left-0 w-4 lg:hidden bg-gradient-to-l from-transparent to-ivory-100"
		/>
		<Breadcrumbs />
		<div
			class="absolute top-0 bottom-0 right-0 w-4 lg:hidden bg-gradient-to-r from-transparent to-ivory-100"
		/>
	</div>
</section>
