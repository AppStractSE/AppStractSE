<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { onMount } from 'svelte';

	export let title: string = '';
	export let description: string = '';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<section>
	<div
		class="transition-all duration-500 ease-in-out {mounted
			? 'translate-y-0 opacity-100'
			: 'translate-y-12 opacity-0'}"
	>
		<div class="spacer" />
		<div class="hero">
			<div class="space-y-6">
				<h2>{title}</h2>
				<p>
					{description}
				</p>
			</div>
			<div class="flex items-center max-w-2xl mx-auto mt-16 justify-evenly">
				<Button
					variation="primary"
					title="Det räcker, jag vill snacka med er!"
					href="/kontakt"
					size="lg"
				/>
			</div>
		</div>
		<div class="spacer bg-gradient-to-b from-transparent to-blueberry-50"></div>
	</div>
</section>

<style lang="scss">
	section {
		@apply bg-gradient-to-br from-blueberry-100 to-blueberry-50;
	}
	.hero {
		@apply max-w-screen-xl px-4 py-12 mx-auto space-y-12 lg:px-0 text-center;
		p {
			@apply max-w-4xl lg:mx-auto text-lg text-balance;
		}
	}
</style>
