<script lang="ts">
	import SplideWrapper from '$lib/components/splide/SplideWrapper.svelte';

	interface Review {
		quote: string;
		name: string;
		client: string;
		image: string;
	}
	const reviews: Review[] = [
		{
			quote:
				'Appstract har hjälpt oss med att utveckla en ny webbplats för vårt företag. Vi är väldigt nöjda med resultatet och rekommenderar dem varmt.',
			name: 'Anna Andersson',
			client: 'Företaget AB',
			image: 'https://avatar.iran.liara.run/public/83'
		},
		{
			quote:
				'Vi har anlitat Appstract för flera projekt och är alltid lika nöjda med resultatet. De är proffsiga, kreativa och levererar alltid i tid.',
			name: 'Leonidas Karlsson',
			client: 'Företaget AB',
			image: 'https://avatar.iran.liara.run/public/38'
		},
		{
			quote:
				'Appstract har hjälpt oss med att utveckla en ny webbplats för vårt företag. Vi är väldigt nöjda med resultatet och rekommenderar dem varmt.',
			name: 'Anna Andersson',
			client: 'Företaget AB',
			image: 'https://avatar.iran.liara.run/public/85'
		},
		{
			quote:
				'Vi har anlitat Appstract för flera projekt och är alltid lika nöjda med resultatet. De är proffsiga, kreativa och levererar alltid i tid.',
			name: 'Johan Johansson',
			client: 'Företaget AB',
			image: 'https://avatar.iran.liara.run/public/9'
		}
	];

	const options = {
		arrows: false,
		pagination: true,
		type: 'loop',
		focus: 'center',
		perPage: 1
	};

	const extensions = {};
	const slides: Review[] = reviews;
</script>

<section>
	<div class="max-w-screen-xl pb-12 mx-auto space-y-12">
		<h2 class="text-center">Lyssna inte på oss, lyssna på våra kunder!</h2>
	</div>
	<SplideWrapper {options} {extensions} {slides}>
		<div class="splide-slide" let:slide slot="slide">
			<div class="splide-slide-content">
				<h1 class="leading-[.7] text-9xl opacity-50">“</h1>
				<h3 class="-mt-4 font-medium leading-relaxed">{slide.quote}</h3>
				<div class="flex items-center gap-4 mt-12">
					<div class="w-24 h-24">
						<img src={slide.image} alt="" class="w-full h-auto" />
					</div>
					<div>
						<h5 class="mb-2">{slide.name}</h5>
						<p class="text-xs">{slide.client}</p>
					</div>
				</div>
			</div>
		</div>
	</SplideWrapper>
</section>

<style lang="scss">
	section {
		@apply my-12 lg:my-24;
	}
	a {
		@apply hover:underline hover:underline-offset-4;
	}
	img {
		@apply w-full h-full max-w-full rounded-sm;
	}
	.splide-slide-content {
		@apply max-w-screen-md mx-auto;
	}
	.active {
		@apply underline underline-offset-4 opacity-100;
	}
</style>
