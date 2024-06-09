<script lang="ts">
	interface Project {
		title: string;
		description: string;
		subtitle: string;
		image: string;
		href: string;
	}
	export let projects: Project[] = [];
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import { Navigation, Pagination } from 'swiper/modules';
	import 'swiper/scss/pagination';
	import Button from '../button/Button.svelte';
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
		{#each projects as project, i}
			<div class="rounded-md swiper-slide">
				<div class="flex max-w-screen-xl gap-16 mt-2">
					<div class=" basis-5/12 aspect-[1] outline outline-4 rounded-lg outline-[#697ba8]">
						<img class="w-full h-full max-w-full rounded-md" src={project.image} alt="SvelteKit" />
					</div>
					<div class="flex flex-col justify-center space-y-4 basis-7/12">
						<h4>
							<a href={project.href}>
								{project.subtitle}
							</a>
						</h4>
						<h3>{project.title}</h3>
						<p>
							{project.description}
						</p>
						<div class="flex mt-8">
							<Button variation="outline" title="Läs mer" href="/" size="md" />
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="swiper-pagination"></div>
</div>

<style lang="scss">
	h4 {
		@apply uppercase tracking-wider text-xxs;
	}
	h3 {
		font-family: var(--font-esteban);
	}

	h4,
	p {
		font-family: var(--font-varela);
	}
	h3 {
		@apply text-2xl font-bold;
	}
	p {
		@apply text-base leading-normal;
	}
	.swiper-pagination {
		@apply my-8;
		position: unset;
	}
</style>
