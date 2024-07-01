<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';

	export let title: string = '';
	export let description: string = '';
</script>

<div class="block">
	<div class="content">
		<h6>{title}</h6>
		<p>{description}</p>
		<div class="btn-container">
			<Button title="Prata med oss" href="/kontakt" variation="outline" />
		</div>
	</div>
	<div class="video-container">
		<video
			src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
			autoplay
			loop
			muted
		/>
	</div>
</div>

<style lang="scss">
	.block {
		@apply flex flex-col-reverse rounded outline-1 outline md:grid md:grid-cols-6 place-items-center;
	}

	.content {
		@apply col-span-4 p-4 space-y-8;
	}

	.btn-container {
		@apply pt-4 md:max-w-xs;
	}

	.video-container {
		@apply h-full col-span-2;
	}

	video {
		@apply object-cover w-full h-full;
	}

	h6 {
		@apply text-base font-bold;
		font-family: var(--font-varela);
	}
	p {
		@apply text-sm font-light text-balance;
		font-family: var(--font-esteban);
	}
</style>
