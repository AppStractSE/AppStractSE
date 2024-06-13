<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import { Autoplay, Navigation, Pagination } from 'swiper/modules';
	import 'swiper/scss/pagination';
	import Button from '../button/Button.svelte';
	import EmblaCarousel from '../swiper/services/EmblaServices.svelte';
	let swiper: Swiper;

	onMount(() => {
		swiper = new Swiper('.servicesSwiper', {
			modules: [Navigation, Pagination, Autoplay],
			autoplay: false,
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			grabCursor: true,
			centeredSlides: true,
			allowTouchMove: true,
			watchSlidesProgress: true,
			slideFullyVisibleClass: 'swiper-slide-visible',

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				enabled: true
			},
			effect: 'slide',
			loopAdditionalSlides: 0,
			breakpoints: {
				1536: {
					slidesPerView: 5,
					spaceBetween: 16,
					autoplay: {
						delay: 0,
						disableOnInteraction: false
					},
					speed: 15000
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 12,
					autoplay: {
						delay: 0,
						disableOnInteraction: false
					},
					speed: 15000
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 8,
					autoplay: {
						delay: 0,
						disableOnInteraction: false
					},
					speed: 15000,
					pagination: {
						el: '.swiper-pagination',
						enabled: false
					}
				},
				1023: {
					pagination: {
						el: '.swiper-pagination',
						enabled: true
					},
					slidesPerView: 3,
					spaceBetween: 8,
					autoplay: {
						disableOnInteraction: false
					}
				},
				768: {
					pagination: {
						el: '.swiper-pagination',
						enabled: true
					},
					slidesPerView: 2,
					spaceBetween: 8
				},
				640: {
					pagination: {
						el: '.swiper-pagination',
						enabled: true
					},
					slidesPerView: 1.5,
					spaceBetween: 8
				}
			}
		});
		if (swiper && window.innerWidth > 1024) {
			swiper.autoplay.start();
		}
	});
	const slides = [
		{
			title: 'Webbutveckling',
			href: '/',
			description:
				'Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar.'
		},
		{
			title: 'Hosting och drift',
			href: '/',
			description:
				'Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar.'
		},
		{
			title: 'Apputveckling',
			href: '/',
			description:
				'Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar.'
		},
		{
			title: 'AI Design',
			href: '/',
			description:
				'Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar.'
		},
		{
			title: 'UI / UX Design',
			href: '/',
			description:
				'Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar. Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar.'
		},
		{
			title: 'UI / UX Design',
			href: '/',
			description:
				'Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar.'
		},
		{
			title: 'E-maildesign',
			href: '/',
			description:
				'Vi utvecklar moderna digitala lösningar inom webbplatser, e-handel, intranät och appar.'
		}
	];
	const clonedSlides = [...slides, ...slides, ...slides, ...slides, ...slides];
	$: innerWidth = 0;
	$: smScreen = innerWidth < 1024;

	if (smScreen) {
		swiper!.autoplay.stop();
	}
</script>

<svelte:window bind:innerWidth />

<section>
	<EmblaCarousel />
	<div class="px-4 mx-auto space-y-4 xl:px-0 w-fit">
		<Button title="Se alla tjänster vi erbjuder" href="/tjanster" variation="primary" size="lg" />
	</div>
</section>

<style lang="scss">
	p {
		@apply text-sm underline underline-offset-4 text-center font-bold;
		font-family: var(--font-esteban);
	}
	section {
		@apply my-12;
	}
</style>
