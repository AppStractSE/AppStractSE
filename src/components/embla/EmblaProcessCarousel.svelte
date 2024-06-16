<script lang="ts">
	import Icon from '@iconify/svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	export let data;

	$: innerWidth = 0;
	$: smScreen = innerWidth < 1024;
	let mobilePlugins: any[] = [];
	let desktopPlugins: any[] = [];
	$: plugins = smScreen ? mobilePlugins : desktopPlugins;
	const slides = [
		{
			title: 'Webbutveckling',
			slug: 'webbutveckling',
			description:
				'Moderna och responsiva unika webbplatser som engagerar och konverterar, med fokus på användarupplevelse och prestanda.',
			image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg'
		},
		{
			title: 'Hosting och drift',
			slug: 'hosting-och-drift',
			description:
				'Säkra och pålitliga hostinglösningar för att hålla din webbplats uppe och snabbrörlig.',
			image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg'
		},
		{
			title: 'Apputveckling',
			slug: 'apputveckling',
			description: 'Skräddarsydda appar för iOS och Android som är användarvänliga och effektiva.',
			image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
		},
		{
			title: 'Förbättrad design med AI',
			slug: 'forbattrad-design-med-ai',
			description: 'Vi hjälper er lyfta er nuvarande design med hjälp av AI.',
			image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg'
		},
		{
			title: 'UI / UX Design',
			slug: 'ui-ux-design',
			description:
				'Designa användargränssnitt som är både vackra och intuitiva för en bättre användarupplevelse.',
			image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg'
		},
		{
			title: 'Digital marknadsföring',
			slug: 'digital-marknadsforing',
			description: 'Strategiska kampanjer för att öka din online-närvaro och driva konverteringar.',
			image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
		},
		{
			title: 'E-maildesign',
			slug: 'emaildesign',
			description: 'Effektiva och engagerande e-postkampanjer som når din målgrupp.',
			image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg'
		},
		{
			title: 'SEO',
			slug: 'seo',
			description:
				'Få hjälp med att optimera din webbplats för att ranka högre på sökmotorer och på så sätt nå fler kunder.',
			image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg'
		},
		{
			title: 'Sociala medier',
			slug: 'sociala-medier',
			description:
				'Bygg och hantera en stark närvaro på sociala medier för att engagera din publik.',
			image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
		}
	];

	let emblaApi: any;
	let options: any = {
		loop: false,
		axis: 'y'
	};
	function onInit(event: CustomEvent) {
		emblaApi = event.detail;
		currentSlide = emblaApi.selectedScrollSnap();
		emblaApi.on('select', () => {
			currentSlide = emblaApi.selectedScrollSnap();
		});
	}
	const scrollTo = (index: number) => {
		currentSlide = index;
		if (emblaApi) emblaApi.scrollTo(currentSlide);
	};
	$: currentSlide = emblaApi && emblaApi.selectedScrollSnap();

	const handlePrev = () => {
		if (emblaApi) emblaApi.scrollPrev();
	};
	const handleNext = () => {
		if (emblaApi) emblaApi.scrollNext();
	};
</script>

<svelte:window bind:innerWidth />
<div class="embla">
	<!-- <div class="absolute z-50 top-4 left-4">
		{currentSlide} / {data.length}
		</div> -->
	<div
		class="absolute z-50 top-[50%] right-12 xl:right-8 transform translate-x-[50%] translate-y-[-50%]"
	>
		<svg width="50" height="45" viewBox="0 0 50 130">
			<rect
				class="scroll"
				x="0"
				y="5"
				rx="35"
				ry="35"
				width="70"
				height="120"
				stroke="#000"
				fill="none"
				stroke-width="4"
			></rect>
			<circle class="circle--shape animate-pulse" cx="35" cy="32" r="8" fill="#000"></circle>
		</svg>
	</div>
	<div class="embla__viewport" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
		<div class=" embla__container">
			{#each data as slide}
				<div class=" bg-gradient-to-b from-orange-200 to-pink-200 embla__slide">
					{slide.title}
				</div>
			{/each}
		</div>
	</div>
	<div class="embla__controls">
		<div class="embla__buttons">
			<button on:click={handlePrev}><Icon icon="icons8:chevron-up-round" /></button>
			<button on:click={handleNext}><Icon icon="icons8:chevron-down-round" /></button>
		</div>
		<div class="embla__dots">
			{#each data as _, index}
				<div
					role="button"
					tabindex="0"
					class="embla__dot {index === currentSlide ? 'embla__dot-active' : ''}"
					on:keydown={() => scrollTo(index)}
					on:click={() => scrollTo(index)}
				/>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}
	p {
		@apply text-base leading-normal text-balance;
		font-family: var(--font-esteban);
	}
	.embla {
		@apply my-4 max-w-screen-xl mx-auto relative px-4 xl:px-2;
	}
	.embla__viewport {
		@apply overflow-hidden rounded-md border;
	}
	.embla__container {
		height: 30rem;
		@apply items-stretch gap-4 flex flex-col;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		@apply justify-center flex flex-col items-center;
	}
	.embla__buttons {
		@apply flex items-center text-3xl;
	}
	.embla__controls {
		@apply my-4 flex items-center;
	}

	.embla__dots {
		@apply flex gap-2 justify-center mx-auto;
	}

	.embla__dot {
		height: 13px;
		width: 13px;
		@apply transition-all duration-300 ease-in-out opacity-20;
		border-radius: 10px !important;
		background: #6a789e !important;
	}

	.embla__dot-active {
		@apply w-10 rounded-full opacity-100;
	}
</style>
