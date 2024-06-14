<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../button/Button.svelte';
	$: innerWidth = 0;
	$: smScreen = innerWidth < 768;
	let imgLoaded = false;
	let imgSrc =
		'https://images.pexels.com/photos/4884233/pexels-photo-4884233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
	function loadImage() {
		if (!imgLoaded) {
			const img = new Image();
			img.src = imgSrc;
			img.onload = () => {
				imgLoaded = true;
			};
		}
	}

	onMount(() => {
		loadImage();
	});
</script>

<svelte:window bind:innerWidth />

<section>
	<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-12 lg:px-0 lg:py-16">
		<div class="space-y-6">
			<h1>Vi förverkligar abstrakta idéer och skapar digitala hållbara lösningar</h1>
			<p>
				Från idé till färdig digitalt skräddarsydd produkt, är vi din partner i skapandet och
				utvecklingen. Vi tar <span>abstrakta</span> koncept och omvandlar dem till
				<span>konkreta</span> resultat.
			</p>
			<div class="flex items-center max-w-2xl mx-auto mt-8 justify-evenly">
				<Button variation="primary" title="Jag vill veta mer" href="/" size="lg" />
			</div>
		</div>
		<div class="h-[40rem] w-full shadow-xl rounded-xl overflow-hidden border">
			<video autoplay muted loop id="myVideo" poster={imgSrc}>
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
