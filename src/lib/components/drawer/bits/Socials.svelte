<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { socials } from '$lib/data/socials';
</script>

<div class="flex gap-4 text-lg md:text-2xl">
	{#each socials as social}
		<Button
			size="rounded-pill"
			icon={social.icon}
			hideExternalIcon
			external
			href={social.link}
			variation="outline"
		/>
	{/each}
</div>
