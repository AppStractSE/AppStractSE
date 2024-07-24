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
		<video autoplay muted loop playsinline>
			<source
				src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
				type="video/mp4"
				class="rounded-xl"
			/>
		</video>
	</div>
</div>

<style lang="scss">
	.block {
		@apply flex flex-col-reverse rounded outline-1 outline-black/25 outline md:grid md:grid-cols-6 place-items-center bg-gradient-to-l from-blueberry-25 to-blueberry-50;
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

	p {
		@apply text-balance;
	}
</style>
