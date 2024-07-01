<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Services from '$lib/components/drawer/bits/Services.svelte';
	import Title from '$lib/components/drawer/bits/Title.svelte';
</script>

<div class="px-4 space-y-8 xl:px-8">
	<Title title="Våra tjänster" />
	<Services />
	<div class="btn-container">
		<Button title="Se alla tjänster" href="/tjanster" variation="outline" />
	</div>
</div>

<style lang="scss">
	.btn-container {
		@apply md:max-w-xs md:mx-auto;
	}
</style>
