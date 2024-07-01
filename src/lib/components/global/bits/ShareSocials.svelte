<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import { socials } from '$lib/data/socials';
</script>

<div class="flex gap-2 text-xs">
	{#each socials.filter((social) => social.shareURL) as social}
		<Button
			size="rounded-pill"
			icon={social.icon}
			href={social.shareURL + window.location.href}
			variation="outline"
			external
			hideExternalIcon
		/>
	{/each}
</div>
