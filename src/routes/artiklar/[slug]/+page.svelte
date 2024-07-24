<script lang="ts">
	import CleanCard from '$lib/components/cards/CleanCard.svelte';
	import Contact from '$lib/components/drawer/bits/Contact.svelte';
	import ShareSocials from '$lib/components/global/bits/ShareSocials.svelte';
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import HeroSection from '$lib/components/unique/articles/HeroSection.svelte';
	import { articles } from '$lib/data/articles';
	import { services } from '$lib/data/services';
	import { getRandomItems, truncateText } from '$lib/utils/utils';
	import Icon from '@iconify/svelte';

	export let data;
	console.log(data);
	$: article = data.article;

	export let clientCase = {
		title: 'Måleri Viskan',
		client: 'Måleri Viskan',
		industry: 'Måleri',
		tags: ['Webbutveckling', 'Grafisk design', 'SEO'],
		needs: {
			title: 'Behov',
			intro: 'Måleri Viskan behövde en ny webbplats',
			description:
				'Måleri Viskan är ett måleriföretag som behövde en ny webbplats för att kunna nå ut till fler kunder. De ville ha en modern och användarvänlig webbplats som visar upp deras tidigare projekt och tjänster.'
		},
		solution: {
			title: 'Lösning',
			intro: 'En modern och användarvänlig webbplats',
			description:
				'Vi skapade en modern och användarvänlig webbplats som visar upp Måleri Viskans tidigare projekt och tjänster. Vi fokuserade på att skapa en webbplats som är enkel att navigera och som ger besökarna en bra överblick över företagets tjänster.'
		},
		result: {
			title: 'Resultat',
			intro: 'En webbplats som genererar fler kunder',
			description:
				'Med den nya webbplatsen har Måleri Viskan kunnat nå ut till fler kunder och öka sin försäljning. De har fått positiv respons från sina kunder och har sett en ökning av antalet förfrågningar.'
		},
		url: 'Måleriviskan.se',
		image: '/images/cases/Måleri-viskan/hero.png'
	};

	const randomArticles = getRandomItems(articles, 3);
</script>

<svelte:head>
	<title>Appstract | {article.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <HeroSection title={guide.title} description={guide.description} /> -->
<HeroSection
	title={article.title}
	description={article.description}
	image="/images/cases/Måleri-viskan/hero.png"
/>
<BreadcrumbsBlock />

<section
	class="relative flex flex-col-reverse items-start justify-between max-w-screen-xl mx-auto my-12 lg:flex-row lg:my-24"
>
	<div class="px-4 space-y-24 xl:px-0 lg:basis-9/12">
		<section>
			<div class="space-y-4">
				<h2>{clientCase.needs.title}</h2>
				<h6 class="font-bold">{clientCase.needs.intro}</h6>
				<p>{clientCase.needs.description}</p>
				<div class="pt-4">
					<img
						src="/images/cases/Måleri-viskan/solution.png"
						alt={clientCase.title}
						class="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</section>
		<section>
			<div class="space-y-4">
				<h2>{clientCase.solution.title}</h2>
				<h6 class="font-bold">{clientCase.solution.intro}</h6>
				<p>{clientCase.solution.description}</p>
				<div class="pt-4">
					<img
						src="/images/cases/Måleri-viskan/solution.png"
						alt={clientCase.title}
						class="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</section>
		<section>
			<div class="space-y-4">
				<h2>{clientCase.result.title}</h2>
				<h6 class="font-bold">{clientCase.result.intro}</h6>
				<p>{clientCase.result.description}</p>
				<div class="pt-4">
					<img
						src="/images/cases/Måleri-viskan/solution.png"
						alt={clientCase.title}
						class="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</section>
	</div>
	<div class="w-full mt-12 lg:sticky lg:top-0 lg:pt-24 lg:-mt-24 lg:basis-2/12 h-fit">
		<div class="px-4 lg:divide-y xl:px-0">
			<div class="pb-4 space-y-2">
				<h6>Klient</h6>
				<p class="text-xs">{clientCase.client}</p>
			</div>
			<div class="py-4 space-y-2">
				<h6>Bransch</h6>
				<p class="text-xs">{clientCase.industry}</p>
			</div>
			<div class="py-4 space-y-2">
				<h6>Vårt arbete</h6>
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
				<h6>Dela det här</h6>
				<div class="flex items-center gap-2 text-lg">
					<ShareSocials />
				</div>
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
<section class="max-w-screen-xl px-4 mx-auto space-y-4 xl:px-0">
	<h5>Läs våra andra artiklar</h5>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each randomArticles as randomArticle}
			<CleanCard
				image={randomArticle.image}
				title={randomArticle.title}
				description={truncateText(randomArticle.description, 100)}
				href={`/artiklar/${randomArticle.slug}`}
			/>
		{/each}
	</div>
</section>
<ContactSection />
