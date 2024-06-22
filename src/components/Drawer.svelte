<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { cases } from '../data/cases';
	import { services } from '../data/services';
	import Button from './button/Button.svelte';
	import DrawerCarousel from './swiper/DrawerCarousel.svelte';
	const dispatch = createEventDispatcher();
	export let isOpen: boolean = false;

	const handleClickAway = () => {
		dispatch('clickAway');
		isOpen = false;
		console.log('drawer isOpen', isOpen);
	};

	const handleToggle = () => {
		dispatch('closeButton');
		isOpen = !isOpen;
		console.log('drawer isOpen', isOpen);
	};

	let mounted = false;
	function scrollLock(isOpen: boolean) {
		if (mounted) {
			const body: HTMLBodyElement | null = document.querySelector('body');
			if (body) body.style.overflow = isOpen ? 'hidden' : 'auto';
		}
	}
	$: scrollLock(isOpen);

	onMount(() => {
		mounted = true;
		scrollLock(isOpen);
	});
</script>

<aside>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed flex justify-center items-center inset-0 w-full h-full z-[99] overflow-hidden transform transition-transform {isOpen
			? 'visible'
			: 'invisible'}"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="pt-16 md:pt-24 pb-6 md:pb-12 overflow-hidden ease-linear transition-all duration-500 backdrop-blur-md delay-200 fixed h-full px-2 md:px-8 w-full {isOpen
				? 'w-screen opacity-100'
				: 'w-0 opacity-0'}"
		>
			<div class="overlay" on:click={handleClickAway} />
			<div
				class="relative flex items-center rounded overflow-scroll transition-all duration-1000 h-full transform mx-auto bg-[#f4f3ff] backdrop-blur-md bg-opacity-80 max-w-[1312px] {isOpen
					? 'opacity-100 translate-y-0'
					: 'opacity-100 translate-y-full'}"
			>
				<div class="absolute top-0 w-full">
					<div class="top-fade bleed" />
					<div class="space-y-12">
						<div
							class="grid justify-between grid-cols-1 px-4 space-y-12 xl:px-8 gap-y-4 gap-x-8 lg:space-y-0 lg:grid-cols-2"
						>
							<div class="space-y-4">
								<h6>Cases</h6>
								{#each cases.slice(0, 3) as clientCase}
									<a href={clientCase.slug} class="flex items-center gap-4">
										<img
											src="https://placehold.co/768x768.png"
											class="rounded-md max-h-24 outline outline-1"
										/>
										<p class="title">{clientCase.title}</p>
									</a>
								{/each}
								<div class="md:max-w-xs md:mx-auto">
									<Button title="Se fler cases" href="/cases" variation="outline" />
								</div>
							</div>
							<div class="space-y-4">
								<h6>Cases</h6>
								<div class="flex items-center gap-4">
									<img
										src="https://placehold.co/768x768.png"
										class="rounded-md max-h-24 outline outline-1"
									/>
									<p class="title">"Appstract har verkligen lyft mitt företag"</p>
								</div>
								<div class="flex items-center gap-4">
									<img
										src="https://placehold.co/768x768.png"
										class="rounded-md max-h-24 outline outline-1"
									/>
									<p class="title">"Trodde en webbsida skulle vara mycket dyrare..."</p>
								</div>
								<div class="flex items-center gap-4">
									<img
										src="https://placehold.co/768x768.png"
										class="rounded-md max-h-24 outline outline-1"
									/>
									<p class="title">"Äntligen syns vi!"</p>
								</div>
								<div class="md:max-w-xs md:mx-auto">
									<Button title="Se fler cases" href="/cases" variation="outline" />
								</div>
							</div>
						</div>
						<div class="px-4 space-y-4 xl:px-8">
							<h6>Tjänster</h6>
							<div class="grid justify-between grid-cols-1 gap-y-4 gap-x-8 lg:grid-cols-2">
								{#each services as service}
									<a href={service.slug}>
										<div class="flex items-stretch gap-4">
											<!-- svelte-ignore a11y-missing-attribute -->
											<img
												src="https://placehold.co/768x768.png"
												class="rounded outline-1 outline max-h-16"
											/>
											<div class="space-y-2">
												<p class="title">{service.title}</p>
												<p class="subtitle">{service.description}</p>
											</div>
										</div>
									</a>
								{/each}
							</div>
							<div class="md:max-w-xs md:mx-auto">
								<Button title="Se alla tjänster" href="/tjanster" variation="outline" />
							</div>
						</div>
						<div class="space-y-4">
							<div class="px-4 xl:px-8">
								<h6>Läs våra guider, gjorda för att inspirera och kickstarta</h6>
							</div>
							<DrawerCarousel />
						</div>
					</div>
					<div class="bottom-fade bleed" />
				</div>
			</div>
			<slot />
		</div>
	</div>
</aside>

<style>
	.overlay {
		@apply fixed w-screen h-full -mt-24 -ml-8 overflow-hidden ease-linear transition-all duration-500 backdrop-blur-md bg-opacity-80 bg-[#b6bacc] delay-200;
		width: calc(100% + 32px);
		height: calc(100% + 64px);
	}
	.bleed {
		margin-left: -12px;
		width: calc(100% + 12px);
	}
	.top-fade {
		@apply sticky top-0 left-0 right-0 z-50 w-full h-6 md:h-12 bg-gradient-to-t from-transparent to-[#ece9ff];
	}
	.bottom-fade {
		@apply sticky bottom-0 left-0 right-0 z-50 w-full h-6 md:h-12 bg-gradient-to-b from-transparent to-[#ece9ff];
	}
	a {
		@apply hover:underline;
		& img {
			@apply opacity-70 transition-all duration-200 ease-in-out;
		}
		&:hover img {
			@apply opacity-100;
		}
	}

	h2 {
		@apply text-3xl font-bold hover:underline hover:underline-offset-4;
		font-family: var(--font-varela);
	}
	h6 {
		@apply text-base font-bold;
		font-family: var(--font-varela);
	}
	.title {
		@apply text-sm font-bold;
		font-family: var(--font-varela);
	}
	.subtitle {
		@apply text-xs font-light text-balance;
		font-family: var(--font-esteban);
	}
</style>
