<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import type { Case } from '$lib/data/cases';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import { Navigation, Pagination } from 'swiper/modules';
	import 'swiper/scss/pagination';

	export let cases: Case[] = [];
	let swiper: Swiper;

	onMount(() => {
		swiper = new Swiper('.mySwiper', {
			modules: [Navigation, Pagination],
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			grabCursor: true,
			allowTouchMove: true,
			watchSlidesProgress: true,
			slideFullyVisibleClass: 'swiper-slide-visible',

			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		});
	});
</script>

<div class="swiper mySwiper">
	<div class="max-w-screen-xl mx-auto swiper-wrapper">
		{#each cases as item}
			<div class="swiper-slide">
				<div class="swiper-slide-content">
					<div class="basis-5/12 aspect-[1] rounded-md overflow-hidden">
						<img src={item.image} alt="SvelteKit" />
					</div>
					<div class="flex flex-col justify-center basis-7/12">
						<div class="space-y-4">
							<h4>
								<a href={item.slug}>
									{item.client}
								</a>
							</h4>
							<h3>
								<a href={item.slug}>{item.title}</a>
							</h3>
							<p>
								{item.shortDescription}
							</p>
						</div>
						<div class="block mt-12 md:flex">
							<Button variation="outline" title="Läs mer" href={item.slug} size="md" />
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="swiper-pagination"></div>
</div>

<style lang="scss">
	.swiper-slide {
		@apply px-4 xl:px-2;
	}
	.swiper-slide-content {
		@apply flex flex-col max-w-screen-xl gap-6 mt-2 sm:gap-12 lg:gap-16 md:flex-row;
	}
	a {
		@apply hover:underline hover:underline-offset-4;
	}
	img {
		@apply w-full h-full max-w-full rounded-sm;
	}
	h4 {
		@apply uppercase tracking-wider text-xxs;
	}
	h3 {
		font-family: var(--font-varela);
	}

	h4,
	p {
		font-family: var(--font-esteban);
	}
	h3 {
		@apply text-2xl font-bold;
	}
	p {
		@apply text-base text-balance leading-normal;
	}
	.swiper-pagination {
		@apply my-8;
		position: unset;
	}
</style>
