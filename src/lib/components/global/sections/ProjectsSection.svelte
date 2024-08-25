<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import SplideWrapper from '$lib/components/splide/SplideWrapper.svelte';
	import { cases } from '$lib/data/cases';
	const options = {
		arrows: false,
		pagination: true,
		easing: 'cubic-bezier(1, .15, .15, 1)',
		type: 'loop',
		focus: 'center',
		perPage: 1
	};

	const extensions = {};
	const slides: any[] = cases.sort(() => 0.5 - Math.random()).slice(0, 4);
	console.log(slides);
</script>

<svelte:document />

<section>
	<div class="py-12 mx-auto space-y-8">
		<div class="max-w-screen-xl px-4 mx-auto space-y-4 xl:px-0">
			<h2>Kundprojekt</h2>
			<p>Få en inblick i hur vi jobbar med våra kunder. Från idé till färdig produkt.</p>
		</div>
		<SplideWrapper {options} {extensions} {slides}>
			<div let:slide slot="slide" class="splide-slide">
				<div class="splide-slide-content">
					<div class="basis-5/12 aspect-[1] rounded-md overflow-hidden">
						<img src={slide.image} alt="SvelteKit" />
					</div>
					<div class="flex flex-col justify-center basis-7/12">
						<div class="max-w-xl space-y-4">
							<h6 class="font-medium">
								<a href={slide.slug}>
									{slide.client}
								</a>
							</h6>
							<h4>
								<a href={slide.slug}>{slide.title}</a>
							</h4>
							<p>
								{slide.shortDescription}
							</p>
						</div>
						<div class="block mt-12 md:flex">
							<Button variation="outline" title="Läs mer" href={slide.slug} size="lg" />
						</div>
					</div>
				</div>
			</div>
		</SplideWrapper>
	</div>
</section>

<style lang="scss">
	section {
		@apply my-12 lg:my-24;
	}
	.splide-slide {
		@apply px-4 xl:px-2;
	}
	.splide-slide-content {
		@apply flex flex-col mx-auto max-w-screen-xl gap-6 mt-2 sm:gap-12 lg:gap-16 md:flex-row;
	}
	a {
		@apply hover:underline hover:underline-offset-4;
	}
	img {
		@apply w-full h-full max-w-full rounded-sm;
	}
</style>
