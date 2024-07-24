<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import SplideWrapper from '$lib/components/splide/SplideWrapper.svelte';
	import Icon from '@iconify/svelte';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	$: innerWidth = 0;
	$: mdScreen = innerWidth < 768;
	const options = {
		arrows: false,
		pagination: false,
		type: 'loop',
		drag: 'free',
		focus: 'center',
		autoWidth: true,
		clones: 6,
		autoScroll: {
			speed: 0.25,
			pauseOnFocus: false
		}
	};

	const extensions = { AutoScroll };

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

	const slides: any[] = data;
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

	{#if mdScreen}
		<SplideWrapper {options} {extensions} {slides}>
			<div 
				let:slide
				slot="slide"
				class="px-4 py-2.5 outline outline-1 rounded-full flex items-center gap-2 text-sm"
			>
				<Icon icon={slide.icon} class="text-xl" />{slide.title}
			</div>
		</SplideWrapper>
	{:else}
		<div class="flex items-center justify-center max-w-screen-lg gap-4 mx-auto">
			{#each slides as slide}
				<div class="px-4 py-2.5 outline outline-1 rounded-full flex items-center gap-2 text-sm">
					<Icon icon={slide.icon} class="text-xl" />{slide.title}
				</div>
			{/each}
		</div>
	{/if}

	<div class="max-w-screen-xl px-4 mx-auto space-y-12 xl:px-0">
		<div class="flex items-center max-w-2xl mx-auto mt-8 justify-evenly">
			<Button variation="primary" title="Jag vill veta mer" href="/kontakt" size="lg" />
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
		@apply text-center text-balance;
	}
	p {
		@apply max-w-4xl mx-auto lg:text-xl text-center text-balance;
		span {
			@apply font-semibold;
		}
	}

		.splide-slide {
		@apply px-4 xl:px-2;
	}
	.splide-slide-content {
		@apply flex flex-col mx-auto max-w-screen-xl gap-6 mt-2 sm:gap-12 lg:gap-16 md:flex-row;
	}
</style>
