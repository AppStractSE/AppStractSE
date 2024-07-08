<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Contact from '$lib/components/drawer/bits/Contact.svelte';
	import EmblaCasesCarousel from '$lib/components/embla/EmblaCasesCarousel.svelte';
	import ShareSocials from '$lib/components/global/bits/ShareSocials.svelte';
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ProjectsSection from '$lib/components/global/sections/ProjectsSection.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import HeroSection from '$lib/components/unique/cases/HeroSection.svelte';
	import { services } from '$lib/data/services';
	import Icon from '@iconify/svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';
	export let data;
	console.log(data);

	$: clientCase = data.clientCase;
</script>

<svelte:head>
	<title>Appstract | {clientCase.client}</title>
	<meta name="description" content="Svelte demo app" />
	<meta property="og:image" content="https://www.youtube.com/img/desktop/yt_1200.png" />
	<meta property="og:title" content="Testing meta content text" />
	<meta property="og:description" content="Testing meta description text" />
</svelte:head>

<HeroSection
	title={clientCase.client}
	description={clientCase.shortDescription}
	image="/images/cases/maleri-viskan/hero.png"
/>
<BreadcrumbsBlock />
<section
	class="relative flex flex-col-reverse items-start justify-between max-w-screen-xl mx-auto my-12 lg:flex-row lg:my-24"
>
	<div class="w-full mt-12 lg:sticky lg:top-0 lg:pt-24 lg:-mt-24 lg:basis-2/12 h-fit">
		<div class="px-4 lg:divide-y xl:px-0">
			<div class="pb-4 space-y-2">
				<h3>Klient</h3>
				<p class="text-xs">{clientCase.client}</p>
			</div>
			<div class="py-4 space-y-2">
				<h3>Bransch</h3>
				<p class="text-xs">{clientCase.industry}</p>
			</div>
			<div class="py-4 space-y-2">
				<h3>Vårt arbete</h3>
				{#each clientCase.tags as tag}
					<p class="flex items-center gap-2 text-[#464646]">
						<Icon icon="material-symbols-light:check" />
						<a
							href={services.find((x) => x.title === tag)?.slug}
							class="text-xs hover:underline hover:underline-offset-4">{tag}</a
						>
					</p>
				{/each}
			</div>
			<div class="py-4 space-y-4">
				<h3>Dela det här</h3>
				<div class="flex items-center gap-2 text-lg">
					<ShareSocials />
				</div>
			</div>
			<div class="pt-4 space-y-4">
				<Button
					external
					variation="outline"
					title="Besök sidan"
					href="https://www.{clientCase.url}"
				/>
			</div>
		</div>
	</div>
	<div class="px-4 space-y-24 xl:px-0 lg:basis-9/12">
		<section>
			<div class="space-y-4">
				<h2>{clientCase.needs.title}</h2>
				<p class="font-bold">{clientCase.needs.intro}</p>
				<p>{clientCase.needs.description}</p>
				<div class="pt-4">
					<img
						src="/images/cases/maleri-viskan/solution.png"
						alt={clientCase.title}
						class="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</section>
		<section>
			<div class="space-y-4">
				<h2>{clientCase.solution.title}</h2>
				<p class="font-bold">{clientCase.solution.intro}</p>
				<p>{clientCase.solution.description}</p>
				<div class="pt-4">
					<img
						src="/images/cases/maleri-viskan/solution.png"
						alt={clientCase.title}
						class="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</section>
		<section>
			<div class="space-y-4">
				<h2>{clientCase.result.title}</h2>
				<p class="font-bold">{clientCase.result.intro}</p>
				<p>{clientCase.result.description}</p>
				<div class="pt-4">
					<img
						src="/images/cases/maleri-viskan/mockup.png"
						alt=""
						class="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</section>
	</div>
</section>
<section>
	<div class="max-w-screen-xl px-4 mx-auto xl:px-0">
		<div class="relative overflow-hidden rounded-md bg-sky-600 aspect-video">
			<div class="space-y-2 w-[150%] -rotate-12 absolute -top-12 md:-top-24 -left-24">
				<EmblaCasesCarousel
					slides={[
						'/images/cases/maleri-viskan/printscreens/001.png',
						'/images/cases/maleri-viskan/printscreens/002.png',
						'/images/cases/maleri-viskan/printscreens/003.png',
						'/images/cases/maleri-viskan/printscreens/004.png',
						'/images/cases/maleri-viskan/printscreens/005.png'
					]}
					plugins={[
						AutoScroll({
							startDelay: 150,
							stopOnInteraction: false,
							speed: 0.25
						})
					]}
				/>
				<EmblaCasesCarousel
					rtl
					slides={[
						'/images/cases/maleri-viskan/printscreens/002.png',
						'/images/cases/maleri-viskan/printscreens/005.png',
						'/images/cases/maleri-viskan/printscreens/004.png',
						'/images/cases/maleri-viskan/printscreens/006.png',
						'/images/cases/maleri-viskan/printscreens/003.png'
					]}
					plugins={[
						AutoScroll({
							startDelay: 0,
							stopOnInteraction: false,
							speed: 0.25
						})
					]}
				/>
				<EmblaCasesCarousel
					slides={[
						'/images/cases/maleri-viskan/printscreens/007.png',
						'/images/cases/maleri-viskan/printscreens/006.png',
						'/images/cases/maleri-viskan/printscreens/005.png',
						'/images/cases/maleri-viskan/printscreens/004.png',
						'/images/cases/maleri-viskan/printscreens/003.png'
					]}
					plugins={[
						AutoScroll({
							startDelay: 150,
							stopOnInteraction: false,
							speed: 0.25
						})
					]}
				/>
			</div>
		</div>
	</div>
</section>
<section class="max-w-screen-xl px-4 mx-auto my-12 lg:my-24 xl:px-0">
	<Contact
		title="Nyfiken på vad vi kan åstadkomma för dig? Låt oss prata mer!"
		description="Vi är alltid redo att hjälpa dig med dina digitala utmaningar. Kontakta oss för att boka ett möte eller för att få svar på dina frågor."
	/>
</section>
<ServicesSection />
<ProjectsSection />

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}

	p {
		@apply leading-normal;
		font-family: var(--font-esteban);
	}
	h3 {
		@apply text-base font-bold;
		font-family: var(--font-varela);
	}
</style>
