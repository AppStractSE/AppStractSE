<script lang="ts">
	import Button from '../../../components/button/Button.svelte';
	import EmblaProcessCarousel from '../../../components/embla/EmblaProcessCarousel.svelte';
	import ArticleCardSection from '../../../components/sections/ArticleCardSection.svelte';
	import ContactSection from '../../../components/sections/ContactSection.svelte';
	import ProjectsSection from '../../../components/sections/ProjectsSection.svelte';
	import ServicesSection from '../../../components/sections/ServicesSection.svelte';
	export let data;
	console.log(data);
	$: guide = data.guide;
</script>

<svelte:head>
	<title>Appstract | {guide.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="spacer"></div>
	<div class="hero">
		<div class="space-y-6">
			<h2>{guide.title}</h2>
			<p>
				Från idé till färdig digitalt skräddarsydd produkt, är vi din partner i skapandet och
				utvecklingen. Vi tar <span>abstrakta</span> koncept och omvandlar dem till
				<span>konkreta</span> resultat.
			</p>
		</div>
		<div class="flex items-center max-w-2xl mx-auto mt-16 justify-evenly">
			<Button variation="primary" title="Jag vill veta mer" href="/" size="lg" />
		</div>
	</div>
	<div class="spacer bg-gradient-to-b from-transparent to-[#f3f1ff]"></div>
</section>

<!-- <section>
	<div class="max-w-screen-xl mx-auto my-12">
		<h2 class="mb-12">Det här gör vi inom {guide.title}</h2>
		<div class="grid justify-between grid-cols-1 gap-12 md:grid-cols-3">
			{#each guide.what_we_do as step, index}
				<div class="pb-4 space-y-6 border-b">
					<h3>{step.title}</h3>
					<p>
						{step.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section> -->
<!-- <section>
	<div class="max-w-screen-lg px-4 mx-auto mb-12 text-center xl:px-2">
		<h2>Vår process</h2>
	</div>
	<EmblaProcessCarousel data={guide.what_we_do} />
</section> -->
<!-- <section>
	<ArticleCardSection
		rtl
		title={guide.article.title}
		description={guide.article.description}
		image="https://placehold.co/600x400.png"
	/>
</section> -->

<ServicesSection />
<ProjectsSection />
<ContactSection />

<style lang="scss">
	section:first-of-type {
		min-height: 450px;
		background: url('/images/hero.png');
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
		text-align: center;
		margin-top: 0 !important;
	}
	.hero {
		@apply max-w-screen-xl px-4 py-12 mx-auto space-y-12 lg:px-0 lg:py-32;
		h2 {
			@apply text-4xl;
		}
		h2,
		p {
			@apply lg:text-center;
		}
		p {
			@apply max-w-4xl lg:mx-auto text-lg text-balance;
		}
	}
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}

	p {
		@apply text-base leading-normal;
		font-family: var(--font-esteban);
	}
	h3 {
		@apply text-lg font-bold;
		font-family: var(--font-varela);
	}
	section {
		@apply my-12 lg:my-24;
	}
</style>
