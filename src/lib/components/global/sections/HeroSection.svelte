<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import TinyCarouselWrapper from '../blocks/TinyCarouselWrapper.svelte';
	$: innerWidth = 0;
	$: mdScreen = innerWidth < 1024;
	$: dataCopy = [...data, ...data];
	const data = [
		{
			title: 'Krångelfritt & enkelt',
			icon: 'fluent:star-emphasis-24-regular'
		},
		{
			title: 'Flexibelt, kvalitativt - alltid',
			icon: 'fluent:options-28-regular'
		},
		{
			title: 'Modernt & långsiktigt',
			icon: 'mingcute:safety-certificate-line'
		}
	];
</script>

<svelte:window bind:innerWidth />
<section>
	<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-12 lg:px-0 lg:pt-32">
		<div class="space-y-12">
			<h1>Vi förverkligar abstrakta idéer och skapar digitala hållbara lösningar</h1>
			<p>
				Från idé till färdig digitalt skräddarsydd produkt, är vi din partner i skapandet och
				utvecklingen. Vi tar <span>abstrakta</span> koncept och omvandlar dem till
				<span>konkreta</span> resultat.
			</p>
		</div>
	</div>

	<TinyCarouselWrapper />

	<div class="max-w-screen-xl px-4 mx-auto space-y-12 xl:px-0">
		<div class="flex items-center max-w-2xl mx-auto mt-8 justify-evenly">
			<Button variation="primary" title="Jag vill veta mer" href="/" size="lg" />
		</div>
		<div class="max-h-[40rem] w-full shadow-xl rounded-xl overflow-hidden border">
			<video autoplay muted loop playsinline id="myVideo">
				<source
					src="https://videos.pexels.com/video-files/4884233/4884233-hd_1280_720_30fps.mp4"
					type="video/mp4"
					class="rounded-xl"
				/>
			</video>
		</div>
	</div>
</section>

<style lang="scss">
	h1 {
		@apply lg:text-center text-3xl lg:text-4xl text-balance;
		font-family: var(--font-varela);
	}
	p {
		@apply max-w-4xl lg:mx-auto text-lg lg:text-center text-balance;
		font-family: var(--font-esteban);
		span {
			@apply font-semibold;
		}
	}
</style>
